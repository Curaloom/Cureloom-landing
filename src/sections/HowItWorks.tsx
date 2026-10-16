import ScrollStack, { ScrollStackItem } from '../components/reactbits/Components/ScrollStack/ScrollStack';
import { SectionHeading } from '../components/SectionHeading';
import { Check } from '../components/icons';
import { STEPS } from '../site';

function EnrollVisual() {
  return (
    <div className="mini">
      <div className="mini__row">
        <strong>october-roster.csv</strong>
        <span className="mini__muted">15 rows</span>
      </div>
      <div className="mini__row">
        <span>
          <strong>Harold W.</strong> <span className="mini__muted">· I50.9, N18.3 · visit 02 Sep</span>
        </span>
        <span className="mini__pill mini__pill--ok">Eligible</span>
      </div>
      <div className="mini__row">
        <span>
          <strong>Maria D.</strong> <span className="mini__muted">· E11.9, I10 · QMB</span>
        </span>
        <span className="mini__pill mini__pill--info">APCM · G0558</span>
      </div>
      <div className="mini__row">
        <span>
          <strong>Row 12</strong> <span className="mini__muted">· last visit 14 months ago</span>
        </span>
        <span className="mini__pill mini__pill--warn">Needs a visit</span>
      </div>
      <div className="mini__row">
        <span>
          <strong>Row 14</strong> <span className="mini__muted">· one qualifying code</span>
        </span>
        <span className="mini__pill mini__pill--bad">Not eligible</span>
      </div>
    </div>
  );
}

function CheckInVisual() {
  return (
    <div className="mini">
      <div className="mini__bubble mini__bubble--ai">
        Hi, this is the automated check-in from Westfield Family Medicine for Harold. This call is recorded and reviewed
        by your nurse. Is now a good time?
      </div>
      <div className="mini__bubble mini__bubble--pt">Yes, go ahead.</div>
      <div className="mini__bubble mini__bubble--ai">Have you taken your medications as prescribed this week?</div>
      <div className="mini__bubble mini__bubble--pt">Mostly. I skipped the water pill twice, my ankles are swollen.</div>
      <div className="mini__row">
        <span className="mini__muted">Parsed: missed_doses · symptom: edema</span>
        <span className="mini__pill mini__pill--warn">Routine flag</span>
      </div>
    </div>
  );
}

function FlagsVisual() {
  return (
    <div className="mini">
      <div className="mini__banner">
        <span>Urgent flag open · Harold W.</span>
        <span className="mono">27:42</span>
      </div>
      <div className="mini__row">
        <span>
          <strong>BP 182/104</strong> <span className="mini__muted">· target &lt; 140/90</span>
        </span>
        <span className="mini__pill mini__pill--bad">Rule HTN-U1</span>
      </div>
      <div className="mini__row">
        <span>
          <strong>Acknowledge</strong> <span className="mini__muted">· Rachel Okafor, RN</span>
        </span>
        <span className="mini__pill mini__pill--info">Nurse call 09:40</span>
      </div>
      <div className="mini__row">
        <span className="mini__muted">If unacknowledged at 30:00 → alert Dr. Patel and practice manager</span>
      </div>
    </div>
  );
}

function BillingVisual() {
  return (
    <div className="mini">
      <div className="mini__note">
        <b>Monthly care management note · October 2026</b>
        {'\n'}Contact: AI check-in 06 Oct (reached) · Nurse call 06 Oct, 14 min
        {'\n'}Flags: HTN-U1 urgent, acknowledged 09:31, resolved 09:58
        {'\n'}Time log: nurse call 14:02 · chart review 05:10 · coordination 03:21
        {'\n'}<b>Counted: 22 min · Meets 20 minutes</b>
      </div>
      <div className="mini__row">
        <span>
          <strong>99490</strong> <span className="mini__muted">· CCM, first 20 min · $66.13</span>
        </span>
        <span className="mini__pill mini__pill--ok">Ready</span>
      </div>
      <div className="mini__row">
        <span>
          <strong>G0557</strong> <span className="mini__muted">· APCM · $53.78</span>
        </span>
        <span className="mini__pill mini__pill--warn">Held · awaiting attestation</span>
      </div>
    </div>
  );
}

const VISUALS = [EnrollVisual, CheckInVisual, FlagsVisual, BillingVisual];

export function HowItWorks() {
  return (
    <section className="section section--paper how" id="how">
      <div className="container">
        <SectionHeading
          eyebrow="How a month runs"
          title={
            <>
              Four moves. <em>Every patient, every month.</em>
            </>
          }
          lede="Cureloom is the operating rhythm behind CCM and APCM. It carries the schedule, the scripts, the rules and the paperwork, and hands your team the decisions."
        />
        <ScrollStack
          useWindowScroll
          smoothScroll={false}
          itemDistance={72}
          itemStackDistance={18}
          stackPosition="14%"
          baseScale={0.9}
          itemScale={0.035}
          dimAmount={0.22}
        >
          {STEPS.map((step, i) => {
            const Visual = VISUALS[i];
            return (
              <ScrollStackItem key={step.kicker} itemClassName={i === STEPS.length - 1 ? 'scroll-stack-card--dark' : ''}>
                <div className="step">
                  <div>
                    <div className="step__kicker">{step.kicker}</div>
                    <h3 className="step__title">{step.title}</h3>
                    <p className="step__body">{step.body}</p>
                    <ul className="step__bullets">
                      {step.bullets.map((b) => (
                        <li key={b}>
                          <Check size={16} /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="step__visual" aria-hidden="true">
                    <Visual />
                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </section>
  );
}
