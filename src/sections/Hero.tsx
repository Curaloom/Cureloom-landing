import SplitText from '../components/reactbits/TextAnimations/SplitText/SplitText';
import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import Silk from '../components/reactbits/Backgrounds/Silk/Silk';
import { AppWindow } from '../components/AppWindow';
import { ArrowRight } from '../components/icons';
import { FACTS, HERO, SITE } from '../site';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <Silk
          lightMode
          speed={2}
          scale={1.35}
          color="#cfe0d2"
          sheenColor="#ffffff"
          noiseIntensity={0.6}
          rotation={0.35}
          sheen={0.35}
          depth={0.25}
          glow={0.15}
          ripple={0.6}
          wave={0.7}
          fade={0}
          interactionStrength={0.7}
        />
      </div>
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
