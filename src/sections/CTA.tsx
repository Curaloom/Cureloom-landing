import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { ArrowRight } from '../components/icons';
import { CTA as COPY, SITE } from '../site';

export function CTA() {
  const mailto = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent('Curalooms walkthrough')}`;
  return (
    <section className="cta" id="contact">
      <div className="container">
        <AnimatedContent distance={32} duration={0.9} ease="power2.out" threshold={0.2}>
          <div className="cta__panel">
            <div>
              <h2 className="display-2 cta__title">{COPY.title}</h2>
              <p className="cta__body">{COPY.body}</p>
            </div>
            <div className="cta__actions">
              <a className="btn btn--inverse" href={mailto}>
                {COPY.primary} <ArrowRight size={16} className="arrow" />
              </a>
              <a className="link-arrow link-arrow--light" href="#how">
                {COPY.secondary} <ArrowRight size={15} className="arrow" />
              </a>
            </div>
            <p className="cta__note">
              Prefer email? Write to <a href={mailto}>{SITE.contactEmail}</a>. No sales sequence, just a reply.
            </p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
