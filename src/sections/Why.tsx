import CountUp from '../components/reactbits/TextAnimations/CountUp/CountUp';
import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { WHY } from '../site';

export function Why() {
  return (
    <section className="section" id="why">
      <div className="container why">
        <AnimatedContent className="why__left" distance={24} duration={0.8} ease="power2.out" threshold={0.2}>
          <span className="eyebrow">{WHY.eyebrow}</span>
          <h2 className="display-2">{WHY.title}</h2>
        </AnimatedContent>
        <AnimatedContent className="why__copy" distance={24} duration={0.8} ease="power2.out" delay={0.1} threshold={0.2}>
          {WHY.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="stats">
            {WHY.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__value">
                  <CountUp to={s.value} duration={1.6} />
                  <span className="stat__suffix">{s.suffix}</span>
                </div>
                <p className="stat__label">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="stats__source">{WHY.source}</p>
        </AnimatedContent>
      </div>
    </section>
  );
}
