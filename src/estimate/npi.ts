import { ESTIMATE } from '../site';

export type Practice = {
  npi: string;
  name: string;
  kind: 'individual' | 'organization';
  specialty?: string;
  location?: string;
};

/** NPI check digit: Luhn over the first nine digits with the 80840 prefix (the constant 24). */
export function isValidNpi(value: string): boolean {
  if (!/^\d{10}$/.test(value)) return false;
  let sum = 24;
  for (let i = 0; i < 9; i++) {
    let d = Number(value[i]);
    if (i % 2 === 0) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  return (10 - (sum % 10)) % 10 === Number(value[9]);
}

const titleCase = (s: string) => s.toLowerCase().replace(/\b([a-z])/g, (c) => c.toUpperCase());

// NLM Clinical Tables mirrors the CMS NPPES registry and, unlike NPPES, allows browser calls (CORS).
const FIELDS = 'NPI,name.full,provider_type,addr_practice.city,addr_practice.state';
type Row = [npi: string, name: string, providerType: string, city: string, state: string];

async function search(table: 'npi_idv' | 'npi_org', npi: string, signal?: AbortSignal): Promise<Row | undefined> {
  const res = await fetch(`${ESTIMATE.npiApi}/${table}/v3/search?terms=${npi}&sf=NPI&df=${FIELDS}&maxList=5`, { signal });
  if (!res.ok) throw new Error(`NPI search returned ${res.status}`);
  const [, , , rows]: [number, string[], unknown, Row[]] = await res.json();
  // The search matches prefixes, so keep only the exact NPI.
  return rows.find((r) => r[0] === npi);
}

/** Looks the NPI up among individual and organisation providers. Resolves null when neither has it. */
export async function lookupNpi(npi: string, signal?: AbortSignal): Promise<Practice | null> {
  const [person, org] = await Promise.all([search('npi_idv', npi, signal), search('npi_org', npi, signal)]);
  const row = person ?? org;
  if (!row) return null;

  const [, rawName, providerType, city, state] = row;
  // Individuals come back as "LAST, FIRST"; organisations as their registered name.
  const name = person ? titleCase(rawName.split(', ').reverse().join(' ')) : titleCase(rawName);

  return {
    npi,
    name,
    kind: person ? 'individual' : 'organization',
    specialty: providerType || undefined,
    location: city ? `${titleCase(city)}, ${state}` : undefined,
  };
}

const logged = new Set<string>();

/**
 * Records a valid NPI the visitor looked up, found or not, in the lead inbox (once per NPI per visit).
 * Fire-and-forget: a failure here never blocks the estimate.
 */
export function logNpiLookup(npi: string, practice: Practice | null, outcome: 'found' | 'not found' | 'lookup failed') {
  if (!ESTIMATE.leadEndpoint || logged.has(npi)) return;
  logged.add(npi);
  void fetch(ESTIMATE.leadEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    keepalive: true,
    body: JSON.stringify({
      _subject: `NPI lookup: ${practice?.name ?? npi} (NPI ${npi})`,
      type: 'npi-lookup',
      npi,
      outcome,
      practice: practice?.name ?? '',
      kind: practice?.kind ?? '',
      specialty: practice?.specialty ?? '',
      location: practice?.location ?? '',
      source: 'apcm-estimator',
    }),
  }).catch(() => {});
}
