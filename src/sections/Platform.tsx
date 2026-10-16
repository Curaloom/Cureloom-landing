import SpotlightCard from '../components/reactbits/Components/SpotlightCard/SpotlightCard';
import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { SectionHeading } from '../components/SectionHeading';
import { FEATURE_ICONS, type FeatureIconName } from '../components/icons';
import { FEATURES } from '../site';

export function Platform() {
  return (
    <section className="section section--dark platform" id="platform">
      <div className="container">
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              Everything the month needs, <em>nothing it doesn't.</em>
            </>
          }
          lede="One system of record for calls, flags, time, notes and claims. No dashboards for the sake of dashboards, no nudges, no surprises on the billing list."
        />
        <AnimatedContent className="features" stagger={0.08} distance={40} duration={0.9} threshold={0.15}>
          {FEATURES.map((f) => {
            const Icon = FEATURE_ICONS[f.icon as FeatureIconName];
            return (
              <SpotlightCard
                key={f.title}
                className="feature"
                theme="dark"
                spotlightColor="#9bebd5"
                intensity={0.2}
                spotlightSize={280}
                borderGlow={0.9}
                softness={0.75}
              >
                <div className="feature__icon">
                  <Icon size={20} />
                </div>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__body">{f.body}</p>
              </SpotlightCard>
            );
          })}
        </AnimatedContent>
      </div>
    </section>
  );
}
