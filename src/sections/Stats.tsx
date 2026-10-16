import CountUp from '../components/reactbits/TextAnimations/CountUp/CountUp';
import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { SectionHeading } from '../components/SectionHeading';
import { STATS, STATS_SOURCE } from '../site';

export function Stats() {
  return (
    <section className="section section--paper" id="why">
      <div className="container">
        <SectionHeading
          eyebrow="Why prevention"
          title={
            <>
              Chronic care is most of care. <em>It is still mostly reactive.</em>
            </>
          }
          lede="A reading drifts, a symptom is brushed off, and the next touchpoint is an emergency room. Cureloom turns the month into a rhythm, so the next touchpoint is a check-in."
        />
        <AnimatedContent className="stats" stagger={0.12} distance={30} duration={0.9} threshold={0.25}>
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__value">
                <CountUp to={s.value} duration={1.8} className="count-up" mode="roll" />
                <span className="stat__suffix">{s.suffix}</span>
              </div>
              <p className="stat__label">{s.label}</p>
            </div>
          ))}
        </AnimatedContent>
        <p className="stats__source">{STATS_SOURCE}</p>
      </div>
    </section>
  );
}
