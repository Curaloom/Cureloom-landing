import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { ArrowRight, Check } from '../components/icons';
import { ESTIMATE, SITE } from '../site';
import { estimate, eligibleShare, usd, usdRate } from './calc';
import { isValidNpi, logNpiLookup, lookupNpi, type Practice } from './npi';

function Logo() {
  return (
    <span className="est-logo">
      <img src="/curalooms-logo.svg" alt="Curalooms" height={26} style={{ height: 26, width: 'auto', display: 'block' }} />
    </span>
  );
}

const bookingHref = SITE.bookingHref.startsWith('#') ? `/${SITE.bookingHref}` : SITE.bookingHref;

export function EstimatePage() {
  const [practice, setPractice] = useState<Practice | null>(null);
  const [panel, setPanel] = useState<number>(ESTIMATE.defaultPanel.individual);
  const resultRef = useRef<HTMLElement>(null);

  const start = (p: Practice) => {
    setPractice(p);
    setPanel(ESTIMATE.defaultPanel[p.kind]);
    requestAnimationFrame(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  return (
    <>
      <header className="nav nav--scrolled">
        <div className="container nav__inner">
          <a href="/" aria-label={`${SITE.name} home`} className="est-brand">
            <Logo />
            <span className="est-brand__tag">APCM Estimator</span>
          </a>
          <div className="nav__right">
            <a className="est-navlink" href="/#how">
              How Curalooms works
            </a>
            <a className="btn btn--primary btn--sm nav__cta" href={bookingHref} aria-label="Start a conversation">
              <span className="nav__cta-long">Start a conversation</span>
              <span className="nav__cta-short">Talk to us</span>
            </a>
          </div>
        </div>
      </header>

      <main className="est">
        <section className="est-hero">
          <div className="container est-hero__grid">
            <AnimatedContent className="est-hero__text" reverse distance={16} duration={0.7} ease="power2.out" trigger="mount">
              <span className="eyebrow">APCM Estimator</span>
              <h1 className="display-2 est-hero__title">
                Your panel, <em>priced out</em> under APCM.
              </h1>
              <p className="lede est-hero__sub">Enter your NPI to see what APCM adds up to in a year.</p>
            </AnimatedContent>

            <AnimatedContent className="est-hero__form" reverse distance={24} duration={0.9} ease="power2.out" delay={0.2} trigger="mount">
              {practice ? (
                <PracticeCard practice={practice} onChange={() => setPractice(null)} />
              ) : (
                <NpiCard onFound={start} />
              )}
            </AnimatedContent>
          </div>
        </section>

        {practice && (
          <section className="est-result" ref={resultRef}>
            <div className="container">
              <Results practice={practice} panel={panel} setPanel={setPanel} />
            </div>
          </section>
        )}

        <section className="est-codes">
          <div className="container">
            <div className="est-codes__head">
              <span className="eyebrow">What APCM pays for</span>
              <h2 className="display-3">Three codes, one monthly fee per patient.</h2>
            </div>
            <div className="est-codes__grid">
              {ESTIMATE.tiers.map((t) => (
                <div key={t.code} className="est-code">
                  <p className="est-code__code">{t.code}</p>
                  <p className="est-code__rate">
                    {usdRate(t.rate)} <span>per patient, per month</span>
                  </p>
                  <h3>{t.label}</h3>
                  <p>{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="est-footer">
        <div className="container est-footer__inner">
          <Logo />
          <span>
            © {SITE.year} {SITE.name}. Estimates are illustrative, not a guarantee of reimbursement.
          </span>
        </div>
      </footer>
    </>
  );
}

function NpiCard({ onFound }: { onFound: (p: Practice) => void }) {
  // The homepage NPI check links here as /estimate.html?npi=<10 digits>.
  const [npi, setNpi] = useState(() =>
    (new URLSearchParams(window.location.search).get('npi') ?? '').replace(/\D/g, '').slice(0, 10),
  );
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [error, setError] = useState('');
  const [canSkip, setCanSkip] = useState(false);

  const submit = async (e?: FormEvent) => {
    e?.preventDefault();
    setCanSkip(false);
    if (!isValidNpi(npi)) {
      setStatus('error');
      setError('That is not a valid NPI. Check the 10 digits and try again.');
      return;
    }
    setStatus('loading');
    try {
      const p = await lookupNpi(npi);
      logNpiLookup(npi, p, p ? 'found' : 'not found');
      if (!p) {
        setStatus('error');
        setError('We could not find that NPI in the CMS registry.');
        setCanSkip(true);
        return;
      }
      setStatus('idle');
      onFound(p);
    } catch {
      logNpiLookup(npi, null, 'lookup failed');
      setStatus('error');
      setError('The CMS registry did not respond. Try again, or continue without the lookup.');
      setCanSkip(true);
    }
  };

  // Run the lookup straight away when the NPI arrived from the homepage.
  useEffect(() => {
    if (isValidNpi(npi)) void submit();
  }, []);

  return (
    <form className="est-card" onSubmit={submit} noValidate>
      <label className="est-label" htmlFor="npi">
        Enter your NPI
      </label>
      <input
        id="npi"
        className={`est-input est-input--npi${status === 'error' ? ' is-invalid' : ''}`}
        inputMode="numeric"
        autoComplete="off"
        placeholder="1234567890"
        maxLength={10}
        value={npi}
        aria-invalid={status === 'error'}
        aria-describedby="npi-hint"
        onChange={(e) => {
          setNpi(e.target.value.replace(/\D/g, ''));
          if (status === 'error') setStatus('idle');
        }}
      />
      <p id="npi-hint" className={`est-hint${status === 'error' ? ' est-hint--error' : ''}`} role={status === 'error' ? 'alert' : undefined}>
        {status === 'error' ? (
          error
        ) : (
          <>
            Your 10-digit National Provider Identifier. Find it at{' '}
            <a href="https://npiregistry.cms.hhs.gov" target="_blank" rel="noreferrer">
              npiregistry.cms.hhs.gov
            </a>
          </>
        )}
      </p>
      <button className="btn btn--primary est-submit" type="submit" disabled={status === 'loading' || npi.length !== 10}>
        {status === 'loading' ? 'Looking up your practice…' : 'Find my practice'} <ArrowRight size={16} className="arrow" />
      </button>
      {canSkip && (
        <button type="button" className="est-skip" onClick={() => onFound({ npi, name: 'your practice', kind: 'individual' })}>
          Continue without the lookup
        </button>
      )}
      <p className="est-card__note">Free. No account.</p>
    </form>
  );
}

function PracticeCard({ practice, onChange }: { practice: Practice; onChange: () => void }) {
  return (
    <div className="est-card est-practice">
      <span className="est-practice__check" aria-hidden="true">
        <Check size={18} />
      </span>
      <div>
        <p className="est-practice__name">{practice.name}</p>
        <p className="est-practice__meta">
          NPI {practice.npi}
          {practice.specialty && ` · ${practice.specialty}`}
          {practice.location && ` · ${practice.location}`}
        </p>
      </div>
      <button type="button" className="est-skip" onClick={onChange}>
        Change NPI
      </button>
    </div>
  );
}

function Results({ practice, panel, setPanel }: { practice: Practice; panel: number; setPanel: (n: number) => void }) {
  const scenarios = useMemo(() => estimate(panel), [panel]);
  const [key, setKey] = useState('expected');
  const current = scenarios.find((s) => s.key === key) ?? scenarios[0];
  const expected = scenarios.find((s) => s.key === 'expected') ?? scenarios[0];
  const name = practice.name.replace(/\.$/, '');

  return (
    <div className="est-results">
      <span className="eyebrow">Estimate for {name}</span>

      <div className="est-results__grid">
        <div className="est-figure">
          <div className="est-seg" role="radiogroup" aria-label="Enrolment scenario">
            {scenarios.map((s) => (
              <button
                key={s.key}
                type="button"
                role="radio"
                aria-checked={s.key === current.key}
                className={s.key === current.key ? 'is-active' : undefined}
                onClick={() => setKey(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <p className="est-figure__annual">{usd(current.annual)}</p>
          <p className="est-figure__label">a year in APCM revenue</p>
          <dl className="est-figure__stats">
            <div>
              <dt>Each month</dt>
              <dd>{usd(current.monthly)}</dd>
            </div>
            <div>
              <dt>Patients enrolled</dt>
              <dd>{current.patients.toLocaleString()}</dd>
            </div>
            <div>
              <dt>Of eligible patients</dt>
              <dd>{Math.round(current.enrolment * 100)}%</dd>
            </div>
          </dl>
        </div>

        <div className="est-breakdown">
          <label className="est-label" htmlFor="panel">
            Medicare patients on your panel
          </label>
          <div className="est-panel__row">
            <input
              id="panel"
              type="range"
              min={100}
              max={10000}
              step={50}
              value={Math.min(panel, 10000)}
              onChange={(e) => setPanel(Number(e.target.value))}
              style={{ '--fill': `${((Math.min(panel, 10000) - 100) / 9900) * 100}%` } as CSSProperties}
            />
            <input
              className="est-input est-input--num"
              type="number"
              min={0}
              max={100000}
              value={panel}
              aria-label="Medicare patients on your panel"
              onChange={(e) => setPanel(Math.max(0, Math.min(100000, Number(e.target.value) || 0)))}
            />
          </div>
          <p className="est-hint">
            We assume {Math.round(eligibleShare * 100)}% of a Medicare panel is APCM-eligible.
          </p>

          <table className="est-table">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Patients</th>
                <th scope="col">Monthly</th>
              </tr>
            </thead>
            <tbody>
              {current.tiers.map((t) => (
                <tr key={t.code}>
                  <th scope="row">
                    {t.code}
                    <small>{t.label}</small>
                  </th>
                  <td>
                    {t.patients.toLocaleString()} × {usdRate(t.rate)}
                  </td>
                  <td>{usd(t.monthly)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <td>{current.patients.toLocaleString()}</td>
                <td>{usd(current.monthly)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <p className="est-fineprint">
        {ESTIMATE.rateLabel}. Actual payment varies by locality, coinsurance and documentation. This is an
        illustration, not a guarantee of reimbursement.
      </p>

      <LeadForm practice={practice} panel={panel} annual={expected.annual} />
    </div>
  );
}

function LeadForm({ practice, panel, annual }: { practice: Practice; panel: number; annual: number }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lead = {
      name: String(form.get('name') ?? ''),
      email: String(form.get('email') ?? ''),
      role: String(form.get('role') ?? ''),
      phone: String(form.get('phone') ?? ''),
      practice: practice.name,
      npi: practice.npi,
      panel,
      expectedAnnual: annual,
      source: 'apcm-estimator',
      // Formspree uses this as the notification email's subject; other endpoints ignore it.
      _subject: `APCM estimate: ${practice.name} (NPI ${practice.npi})`,
    };

    // No endpoint configured yet: hand the lead to the visitor's mail client, addressed to the sales inbox.
    if (!ESTIMATE.leadEndpoint) {
      const body = [
        `Name: ${lead.name}`,
        `Role: ${lead.role}`,
        `Email: ${lead.email}`,
        lead.phone && `Phone: ${lead.phone}`,
        `Practice: ${lead.practice} (NPI ${lead.npi})`,
        `Medicare panel: ${panel}`,
        `Expected APCM revenue: ${usd(annual)} a year`,
      ]
        .filter(Boolean)
        .join('\n');
      window.location.href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent('APCM estimate report')}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ESTIMATE.leadEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(lead),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="est-lead est-lead--done" role="status">
        <div className="est-lead__intro">
          <h3 className="display-3">Thank you. Your report is on its way.</h3>
          <p>We send the full estimate within one business day, with an offer of a thirty-minute walkthrough of a simulated month.</p>
        </div>
        <div>
          <button type="button" className="btn btn--inverse" onClick={() => window.print()}>
            Save this estimate as a PDF
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="est-lead" onSubmit={submit}>
      <div className="est-lead__intro">
        <h3 className="display-3">Get the full report.</h3>
        <p>
          A tier-by-tier breakdown for your practice, the enrolment and staffing it assumes, and how Curalooms runs the
          month so the revenue holds up.
        </p>
      </div>
      <div className="est-lead__fields">
        <label>
          <span>Full name</span>
          <input className="est-input" name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Work email</span>
          <input className="est-input" name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Role</span>
          <select className="est-input" name="role" required defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {ESTIMATE.roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label>
          <span>
            Phone <em>optional</em>
          </span>
          <input className="est-input" name="phone" type="tel" autoComplete="tel" />
        </label>
        <button className="btn btn--inverse est-lead__submit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Email me the report'} <ArrowRight size={16} className="arrow" />
        </button>
        {status === 'error' && (
          <p className="est-lead__error" role="alert">
            Something went wrong. Try again, or write to <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>
        )}
        <p className="est-lead__privacy">We use your details to send the report and follow up once. No sales sequence.</p>
      </div>
    </form>
  );
}
