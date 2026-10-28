import { useMemo, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { Wordmark } from '../components/Logo';
import { ArrowRight, Check } from '../components/icons';
import { ESTIMATE, SITE } from '../site';
import { estimate, eligibleShare, usd } from './calc';
import { isValidNpi, lookupNpi, type Practice } from './npi';

const STEPS = [
  { n: '01', title: 'Enter your NPI', body: 'We look your practice up in the CMS NPPES registry. No account needed.' },
  { n: '02', title: 'See your estimate', body: 'Adjust your Medicare panel and see three APCM revenue scenarios, tier by tier.' },
  { n: '03', title: 'Get your report', body: 'Leave your email and we send the full estimate, then walk you through it if you want.' },
];

const bookingHref = SITE.bookingHref.startsWith('#') ? `/${SITE.bookingHref}` : SITE.bookingHref;

export function EstimatePage() {
  const [practice, setPractice] = useState<Practice | null>(null);
  const [panel, setPanel] = useState(800);
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
            <Wordmark size={22} />
            <span className="est-brand__tag">APCM estimator</span>
          </a>
          <div className="nav__right">
            <a className="est-navlink" href="/#how">
              How Cureloom works
            </a>
            <a className="btn btn--primary btn--sm" href={bookingHref}>
              Request a walkthrough
            </a>
          </div>
        </div>
      </header>

      <main className="est">
        <section className="est-hero">
          <div className="container est-hero__inner">
            <AnimatedContent distance={16} duration={0.7} ease="power2.out" trigger="mount">
              <span className="est-pill">Advanced Primary Care Management</span>
              <h1 className="display-2 est-hero__title">
                What could APCM add to <em>your practice?</em>
              </h1>
              <p className="lede est-hero__sub">
                Enter your NPI. In under a minute you will see what your Medicare panel could generate under APCM codes
                G0556, G0557 and G0558.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={24} duration={0.9} ease="power2.out" delay={0.2} trigger="mount">
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

        <section className="est-how">
          <div className="container">
            <span className="eyebrow">How it works</span>
            <ol className="est-how__grid">
              {STEPS.map((s) => (
                <li key={s.n}>
                  <span className="est-how__n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="est-footer">
        <div className="container est-footer__inner">
          <Wordmark size={20} />
          <span>
            © {SITE.year} {SITE.name}. Estimates are illustrative, not a guarantee of reimbursement.
          </span>
        </div>
      </footer>
    </>
  );
}

function NpiCard({ onFound }: { onFound: (p: Practice) => void }) {
  const [npi, setNpi] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [error, setError] = useState('');
  const [canSkip, setCanSkip] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setCanSkip(false);
    if (!isValidNpi(npi)) {
      setStatus('error');
      setError('That is not a valid NPI. Check the 10 digits and try again.');
      return;
    }
    setStatus('loading');
    try {
      const p = await lookupNpi(npi);
      if (!p) {
        setStatus('error');
        setError('We could not find that NPI in the CMS registry.');
        setCanSkip(true);
        return;
      }
      setStatus('idle');
      onFound(p);
    } catch {
      setStatus('error');
      setError('The CMS registry did not respond. Try again, or continue without the lookup.');
      setCanSkip(true);
    }
  };

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
      <ul className="est-ticks">
        {['Free, no credit card', ESTIMATE.rateLabel, 'Results in under a minute'].map((t) => (
          <li key={t}>
            <Check size={14} /> {t}
          </li>
        ))}
      </ul>
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
  const expected = scenarios.find((s) => s.key === 'expected') ?? scenarios[0];

  return (
    <div className="est-results">
      <div className="est-results__head">
        <span className="eyebrow">Your estimate</span>
        <h2 className="display-3">
          About <em>{usd(expected.annual)}</em> a year in APCM revenue for {practice.name.replace(/\.$/, '')}.
        </h2>
        <p className="est-results__note">
          Expected scenario: {Math.round(expected.enrolment * 100)}% of eligible patients enrolled, about{' '}
          {expected.patients.toLocaleString()} patients a month.
        </p>
      </div>

      <div className="est-panel">
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
          We assume {Math.round(eligibleShare * 100)}% of a Medicare panel is APCM-eligible. Set the panel to match yours.
        </p>
      </div>

      <div className="est-scenarios">
        {scenarios.map((s) => (
          <article key={s.key} className={`est-scenario${s.key === 'expected' ? ' est-scenario--featured' : ''}`}>
            <header>
              <h3>{s.label}</h3>
              <span>{Math.round(s.enrolment * 100)}% enrolled</span>
            </header>
            <p className="est-scenario__annual">{usd(s.annual)}</p>
            <p className="est-scenario__sub">a year · {usd(s.monthly)} a month</p>
            <table>
              <tbody>
                {s.tiers.map((t) => (
                  <tr key={t.code}>
                    <th scope="row">
                      {t.code}
                      <small>{t.label}</small>
                    </th>
                    <td>
                      {t.patients.toLocaleString()} × {usd(t.rate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        ))}
      </div>

      <p className="est-fineprint">
        {ESTIMATE.rateLabel}, per patient per month: {ESTIMATE.tiers.map((t) => `${t.code} ${usd(t.rate)}`).join(', ')}.
        Actual payment varies by locality, coinsurance and documentation. This is an illustration, not a guarantee of
        reimbursement.
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
          A tier-by-tier breakdown for your practice, the enrolment and staffing it assumes, and how Cureloom runs the
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
