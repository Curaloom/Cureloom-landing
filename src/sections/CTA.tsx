import { useState, type FormEvent } from 'react';
import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { ArrowRight } from '../components/icons';
import { CTA as COPY, SITE } from '../site';

export function CTA() {
  const mailto = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent('Curalooms walkthrough')}`;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const request = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus('sending');
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...request,
          _subject: `Walkthrough request: ${request.practice || request.name}`,
          type: 'walkthrough',
          source: 'landing-cta',
        }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="cta" id="contact">
      <div className="container">
        <AnimatedContent distance={32} duration={0.9} ease="power2.out" threshold={0.2}>
          <div className="cta__panel">
            <div>
              <h2 className="display-2 cta__title">{COPY.title}</h2>
              <p className="cta__body">{COPY.body}</p>
              <a className="link-arrow link-arrow--light cta__how" href="#how">
                {COPY.secondary} <ArrowRight size={15} className="arrow" />
              </a>
            </div>

            {status === 'sent' ? (
              <p className="cta__sent" role="status">
                {COPY.sent}
              </p>
            ) : (
              <form className="cta__form" onSubmit={submit}>
                <label>
                  <span>Full name</span>
                  <input name="name" autoComplete="name" required />
                </label>
                <label>
                  <span>Work email</span>
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label className="cta__wide">
                  <span>Clinic or company</span>
                  <input name="practice" autoComplete="organization" required />
                </label>
                <button className="btn btn--inverse cta__submit" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : COPY.primary} <ArrowRight size={16} className="arrow" />
                </button>
                {status === 'error' && (
                  <p className="cta__error" role="alert">
                    That didn't go through. Try again, or email <a href={mailto}>{SITE.contactEmail}</a>.
                  </p>
                )}
              </form>
            )}

            <p className="cta__note">
              Prefer email? Write to <a href={mailto}>{SITE.contactEmail}</a>. No sales sequence, just a reply.
            </p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
