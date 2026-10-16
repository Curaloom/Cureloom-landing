import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { SectionHeading } from '../components/SectionHeading';
import { Check } from '../components/icons';
import { TEAMS } from '../site';

export function Teams() {
  return (
    <section className="section section--white" id="teams">
      <div className="container">
        <SectionHeading
          eyebrow="For the whole practice"
          title="Three roles, one shared month."
          lede="Nurses, physicians and practice managers each get the view they need, built on the same events, the same timers and the same rules."
        />
        <AnimatedContent className="teams" stagger={0.1} distance={24} duration={0.8} ease="power2.out" threshold={0.15}>
          {TEAMS.map((t) => (
            <div className="team" key={t.role}>
              <span className="eyebrow">{t.role}</span>
              <h3 className="team__title">{t.title}</h3>
              <p className="team__body">{t.body}</p>
              <ul className="team__items">
                {t.items.map((item) => (
                  <li key={item}>
                    <Check size={15} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
}
