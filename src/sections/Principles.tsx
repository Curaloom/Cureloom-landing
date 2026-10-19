import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { SectionHeading } from '../components/SectionHeading';
import { PRINCIPLES } from '../site';

export function Principles() {
  return (
    <section className="section" id="principles">
      <div className="container principles">
        <div className="principles__sticky">
          <SectionHeading
            eyebrow="What we hold to"
            title="How Curalooms behaves."
            lede="Where the billing rules didn't say what to do, we made these calls. They're built in, not settings you can change."
          />
        </div>
        <AnimatedContent className="principles__list" role="list" stagger={0.08} distance={20} duration={0.8} ease="power2.out" threshold={0.1}>
          {PRINCIPLES.map((p, i) => (
            <div className="principle" role="listitem" key={p.title}>
              <div className="principle__num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3 className="principle__title">{p.title}</h3>
                <p className="principle__body">{p.body}</p>
              </div>
            </div>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
}
