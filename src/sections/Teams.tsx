import GlareHover from '../components/reactbits/Animations/GlareHover/GlareHover';
import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { SectionHeading } from '../components/SectionHeading';
import { Check } from '../components/icons';
import { TEAMS } from '../site';

export function Teams() {
  return (
    <section className="section section--paper-2" id="teams">
      <div className="container">
        <SectionHeading
          eyebrow="For the whole practice"
          title={
            <>
              Three roles. <em>One shared month.</em>
            </>
          }
          lede="Nurses, physicians and operations each get the view they need, built on the same events, the same timers and the same rules."
        />
        <AnimatedContent className="teams" stagger={0.1} distance={40} duration={0.9} threshold={0.15}>
          {TEAMS.map((t) => (
            <GlareHover
              key={t.role}
              className="team"
              width="100%"
              height="100%"
              background="#ffffff"
              borderRadius="24px"
              borderColor="rgba(14, 23, 38, 0.08)"
              glareColor="#13b5a3"
              glareOpacity={0.16}
              glareAngle={-35}
              glareSize={260}
              variant="sheen"
              transitionDuration={900}
            >
              <div className="team__inner">
                <span className={`team__role team__role--${t.tint}`}>{t.role}</span>
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
            </GlareHover>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
}
