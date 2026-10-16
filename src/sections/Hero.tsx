import Aurora from '../components/reactbits/Backgrounds/Aurora/Aurora';
import BlurText from '../components/reactbits/TextAnimations/BlurText/BlurText';
import RotatingText from '../components/reactbits/TextAnimations/RotatingText/RotatingText';
import ShinyText from '../components/reactbits/TextAnimations/ShinyText/ShinyText';
import SplitText from '../components/reactbits/TextAnimations/SplitText/SplitText';
import Magnet from '../components/reactbits/Animations/Magnet/Magnet';
import StarBorder from '../components/reactbits/Animations/StarBorder/StarBorder';
import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { ProductGlimpse } from '../components/ProductGlimpse';
import { ArrowRight, Check } from '../components/icons';
import { CONDITIONS, SITE } from '../site';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <Aurora
          colorStops={['#13b5a3', '#7cc8ff', '#b8a6ff']}
          amplitude={1.25}
          blend={0.5}
          speed={0.6}
          height={0.68}
          glow={0.9}
          brightness={1.1}
          direction="top"
          mouseInteraction
        />
      </div>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__veil" aria-hidden="true" />

      <div className="container hero__inner">
        <div>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <ShinyText text="Chronic care management · CCM & APCM" color="rgba(255,255,255,0.72)" shineColor="#ffffff" speed={3.5} />
          </div>

          <h1 className="hero__title">
            <SplitText
              tag="span"
              text="Prevention"
              splitType="chars"
              effect="rise"
              mask
              trigger="load"
              delay={34}
              duration={1.15}
              ease="power4.out"
            />{' '}
            <SplitText
              tag="span"
              text="first."
              className="hero__title-accent"
              splitType="chars"
              effect="rise"
              mask
              trigger="load"
              delay={34}
              duration={1.15}
              ease="power4.out"
            />
          </h1>

          <BlurText
            text="Cureloom runs the monthly rhythm of chronic care for your practice: AI check-in calls, nurse follow-ups, red-flag escalation, time that counts itself, month-end notes and billing-ready claims. Your team keeps the judgment."
            className="hero__sub"
            animateBy="words"
            direction="top"
            trigger="load"
            delay={18}
            stepDuration={0.3}
          />

          <div className="hero__rotator">
            <span>Built for patients living with</span>
            <RotatingText
              texts={CONDITIONS}
              mainClassName="hero__rotator-text"
              highlight
              highlightColor="#9bebd5"
              rotationInterval={2600}
              staggerDuration={0.012}
              staggerFrom="first"
              splitBy="characters"
              transition={{ type: 'spring', damping: 28, stiffness: 420 }}
            />
          </div>

          <AnimatedContent distance={24} duration={0.9} delay={0.9} trigger="mount">
            <div className="hero__actions">
              <Magnet padding={70} magnetStrength={9}>
                <StarBorder
                  as="a"
                  href={SITE.bookingHref}
                  className="btn-star"
                  color="#9bebd5"
                  theme="dark"
                  backgroundColor="#0e1724"
                  radius={26}
                  thickness={1}
                  glow={0.85}
                  duration={5}
                >
                  Book a walkthrough <ArrowRight size={16} className="arrow" />
                </StarBorder>
              </Magnet>
              <a className="btn btn--ghost" href="#how">
                See how a month runs <ArrowRight size={16} className="arrow" />
              </a>
            </div>

            <div className="hero__fineprint">
              <span>
                <Check size={14} /> Consent before any contact
              </span>
              <span>
                <Check size={14} /> A human decides every escalation
              </span>
              <span>
                <Check size={14} /> Every action in the audit trail
              </span>
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent distance={60} duration={1.2} delay={0.5} blur={8} scale={0.96} trigger="mount">
          <ProductGlimpse />
        </AnimatedContent>
      </div>
    </section>
  );
}
