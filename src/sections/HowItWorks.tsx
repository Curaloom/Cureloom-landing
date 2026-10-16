import AnimatedContent from '../components/reactbits/Animations/AnimatedContent/AnimatedContent';
import { SectionHeading } from '../components/SectionHeading';
import { Check } from '../components/icons';
import { STEPS } from '../site';

function EnrollPanel() {
  return (
    <div className="ui">
      <div className="ui__row">
        <strong>october-roster.csv</strong>
        <span className="ui__muted">15 rows · 13 accepted</span>
      </div>
      <div className="ui__row">
        <span>
          <strong>Harold Jenkins</strong> <span className="ui__muted">· I50.9, N18.3 · visit 12 Sep</span>
        </span>
        <span className="tag tag--ok">Eligible</span>
      </div>
      <div className="ui__row">
        <span>
          <strong>Maria Delgado</strong> <span className="ui__muted">· E11.9, I10 · QMB</span>
        </span>
        <span className="tag tag--info">APCM · G0558</span>
      </div>
      <div className="ui__row">
        <span>
          <strong>Row 12</strong> <span className="ui__muted">· last visit 14 months ago</span>
        </span>
        <span className="tag tag--concern">Needs a visit</span>
      </div>
      <div className="ui__row">
        <span>
          <strong>Row 14</strong> <span className="ui__muted">· one qualifying code</span>
        </span>
        <span className="tag tag--urgent">Not eligible</span>
      </div>
    </div>
  );
}

function CheckInPanel() {
  return (
    <div className="ui">
      <div className="ui__bubble ui__bubble--ai">
        This is an automated call from Westfield Family Medicine, Dr. Anita Patel's office. This call is recorded and
        reviewed by your nurse. Is now a good time?
      </div>
      <div className="ui__bubble ui__bubble--pt">Yes, go ahead.</div>
      <div className="ui__bubble ui__bubble--ai">Have you taken your medications as prescribed this week?</div>
      <div className="ui__bubble ui__bubble--pt">Mostly. I ran out of metformin three days ago.</div>
      <div className="ui__row">
        <span className="ui__muted">Recorded: missed doses · ran out of medication</span>
        <span className="tag tag--concern">Concern routed to nurse</span>
      </div>
    </div>
  );
}

function FlagsPanel() {
  return (
    <div className="ui">
      <div className="ui__banner">
        <span>Urgent · Harold Jenkins · acknowledge within 30 min</span>
        <span>27:42</span>
      </div>
      <div className="ui__row">
        <span>
          <strong>Chest tightness on the stairs today</strong>{' '}
          <span className="ui__muted">· told to call 911, call ended</span>
        </span>
        <span className="tag tag--urgent">Urgent</span>
      </div>
      <div className="ui__row">
        <span>
          <strong>Acknowledge</strong> <span className="ui__muted">· Rachel Okafor, RN</span>
        </span>
        <span className="tag tag--info">Nurse call 10:40</span>
      </div>
      <div className="ui__row">
        <span className="ui__muted">If not acknowledged by 30:00, alert Dr. Patel and the practice manager.</span>
      </div>
    </div>
  );
}

function BillingPanel() {
  return (
    <div className="ui">
      <div className="ui__note">
        <b>Care management note · October 2026 · Walter Nguyen (CCM)</b>
        {'\n'}Contact: nurse call 14 Oct, 14 min, reached
        {'\n'}Flags: none this month
        {'\n'}Time log: nurse call 14:02 · chart review 05:10 · coordination 03:21
        {'\n'}
        <b>Counted: 22 min · Meets 20 minutes</b>
      </div>
      <div className="ui__row">
        <span>
          <strong>99490</strong> <span className="ui__muted">· CCM, first 20 min · $66.13</span>
        </span>
        <span className="tag tag--ok">Ready</span>
      </div>
      <div className="ui__row">
        <span>
          <strong>G0557</strong> <span className="ui__muted">· APCM · Harold Jenkins</span>
        </span>
        <span className="tag tag--concern">Held · awaiting attestation</span>
      </div>
    </div>
  );
}

const PANELS = [EnrollPanel, CheckInPanel, FlagsPanel, BillingPanel];

export function HowItWorks() {
  return (
    <section className="section section--white" id="how">
      <div className="container">
        <SectionHeading
          eyebrow="How a month runs"
          title="Four moves, every patient, every month."
          lede="Cureloom carries the schedule, the scripts, the rules and the paperwork, and hands your team the decisions."
        />
        <div className="steps">
          {STEPS.map((step, i) => {
            const Panel = PANELS[i];
            return (
              <AnimatedContent key={step.number} className="step" distance={28} duration={0.9} ease="power2.out" threshold={0.15}>
                <div className="step__text">
                  <div>
                    <span className="step__num">{step.number}</span>
                    <span className="step__kicker">{step.kicker}</span>
                  </div>
                  <h3 className="display-3 step__title">{step.title}</h3>
                  <p className="step__body">{step.body}</p>
                  <ul className="step__bullets">
                    {step.bullets.map((b) => (
                      <li key={b}>
                        <Check size={15} /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="panel" aria-hidden="true">
                  <Panel />
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
