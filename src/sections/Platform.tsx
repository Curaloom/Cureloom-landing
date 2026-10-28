import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { SectionHeading } from '../components/SectionHeading';
import { FEATURE_ICONS, type FeatureIconName } from '../components/icons';
import { FEATURES } from '../site';

export function Platform() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <SectionHeading
          eyebrow="The platform"
          title="Everything the month needs. Nothing it does not."
          lede="One record for calls, flags, time, notes and claims."
        />
        <AnimatedContent className="features" stagger={0.07} distance={20} duration={0.8} ease="power2.out" threshold={0.15}>
          {FEATURES.map((f) => {
            const Icon = FEATURE_ICONS[f.icon as FeatureIconName];
            return (
              <div className="feature" key={f.title}>
                <div className="feature__icon">
                  <Icon size={22} />
                </div>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__body">{f.body}</p>
              </div>
            );
          })}
        </AnimatedContent>
      </div>
    </section>
  );
}
