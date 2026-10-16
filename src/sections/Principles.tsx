import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { SectionHeading } from '../components/SectionHeading';
import { PRINCIPLES } from '../site';

export function Principles() {
  return (
    <section className="section section--paper" id="principles">
      <div className="container principles">
        <div className="principles__sticky">
          <SectionHeading
            eyebrow="What we hold to"
            title={
              <>
                Care software should be <em>quietly trustworthy.</em>
              </>
            }
            lede="These are the decisions we made where the rules were silent. They are not settings. They are how Cureloom behaves."
          />
        </div>
        <AnimatedContent className="principles__list" role="list" stagger={0.1} distance={30} duration={0.8} threshold={0.1}>
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
