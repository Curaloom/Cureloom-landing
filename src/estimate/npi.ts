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

type NppesResult = {
  enumeration_type: 'NPI-1' | 'NPI-2';
  basic: { organization_name?: string; first_name?: string; last_name?: string; credential?: string };
  addresses?: { address_purpose: string; city: string; state: string }[];
  taxonomies?: { desc: string; primary: boolean }[];
};

/** Looks the NPI up in the CMS NPPES registry. Resolves null when the registry has no match. */
export async function lookupNpi(npi: string, signal?: AbortSignal): Promise<Practice | null> {
  const res = await fetch(`${ESTIMATE.npiApi}?version=2.1&number=${npi}`, { signal });
  if (!res.ok) throw new Error(`NPPES returned ${res.status}`);
  const data: { results?: NppesResult[] } = await res.json();
  const r = data.results?.[0];
  if (!r) return null;

  const kind = r.enumeration_type === 'NPI-2' ? 'organization' : 'individual';
  const b = r.basic;
  const person = [b.first_name, b.last_name].filter(Boolean).join(' ');
  const name =
    kind === 'organization'
      ? titleCase(b.organization_name ?? 'Your practice')
      : `${titleCase(person)}${b.credential ? `, ${b.credential}` : ''}`;
  const addr = r.addresses?.find((a) => a.address_purpose === 'LOCATION') ?? r.addresses?.[0];
  const tax = r.taxonomies?.find((t) => t.primary) ?? r.taxonomies?.[0];

  return {
    npi,
    name,
    kind,
    specialty: tax?.desc,
    location: addr ? `${titleCase(addr.city)}, ${addr.state}` : undefined,
  };
}
