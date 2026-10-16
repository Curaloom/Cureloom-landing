import Aurora from '../components/reactbits/Backgrounds/Aurora/Aurora';
import GradientText from '../components/reactbits/TextAnimations/GradientText/GradientText';
import StarBorder from '../components/reactbits/Animations/StarBorder/StarBorder';
import Magnet from '../components/reactbits/Animations/Magnet/Magnet';
import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { ArrowRight } from '../components/icons';
import { SITE } from '../site';

export function CTA() {
  const mailto = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent('Cureloom walkthrough')}`;
  return (
    <section className="cta" id="contact">
      <div className="container">
        <AnimatedContent distance={50} duration={1} blur={6} scale={0.98} threshold={0.2}>
          <div className="cta__panel">
            <div className="cta__bg" aria-hidden="true">
              <Aurora
                colorStops={['#13b5a3', '#7cc8ff', '#b8a6ff']}
                amplitude={1.1}
                blend={0.55}
                speed={0.5}
                height={0.62}
                glow={0.9}
                brightness={1.05}
                direction="bottom"
                mouseInteraction={false}
              />
            </div>
            <div className="cta__veil" aria-hidden="true" />
            <h2 className="cta__title">
              Ready to put{' '}
              <GradientText colors={['#9bebd5', '#7cc8ff', '#b8a6ff', '#9bebd5']} animationSpeed={6} variant="flow">
                prevention first?
              </GradientText>
            </h2>
            <p className="cta__lede">
              Bring your roster and thirty minutes. We will walk through one simulated month at one practice, from upload
              to a billing list, and show you exactly what your nurses, physicians and managers would see.
            </p>
            <div className="cta__actions">
              <Magnet padding={70} magnetStrength={9}>
                <StarBorder
                  as="a"
                  href={mailto}
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
                Read how a month runs
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
