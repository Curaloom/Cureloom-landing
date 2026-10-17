import SplitText from '../components/reactbits/TextAnimations/SplitText/SplitText';
import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { AppWindow } from '../components/AppWindow';
import { ArrowRight } from '../components/icons';
import { FACTS, HERO, SITE } from '../site';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__text">
          <AnimatedContent distance={16} duration={0.7} ease="power2.out" trigger="mount">
            <span className="eyebrow">{HERO.eyebrow}</span>
          </AnimatedContent>
          <SplitText
            tag="h1"
            className="display-1 hero__title"
            text={HERO.title}
            splitType="words"
            effect="rise"
            mask
            textAlign="left"
            trigger="load"
            delay={110}
            duration={1.1}
            ease="power3.out"
          />
          <AnimatedContent distance={20} duration={0.9} ease="power2.out" delay={0.35} trigger="mount">
            <p className="lede hero__sub">{HERO.sub}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={SITE.bookingHref}>
                {HERO.primary} <ArrowRight size={16} className="arrow" />
              </a>
              <a className="link-arrow" href="#how">
                {HERO.secondary} <ArrowRight size={15} className="arrow" />
              </a>
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent className="hero__media" distance={40} duration={1.1} ease="power2.out" delay={0.55} trigger="mount">
          <AppWindow />
          <p className="hero__caption">
            The nurse's Today queue in Cureloom, ordered by what needs attention first. Patients shown are from a
            simulated practice.
          </p>
        </AnimatedContent>

        <AnimatedContent className="facts" stagger={0.1} distance={20} duration={0.8} ease="power2.out" threshold={0.2}>
          {FACTS.map((f) => (
            <div className="fact" key={f.title}>
              <h2 className="fact__title">{f.title}</h2>
              <p className="fact__body">{f.body}</p>
            </div>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
}
