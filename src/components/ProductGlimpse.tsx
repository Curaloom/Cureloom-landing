import { Clock, Flag } from './icons';

/**
 * A stylised glimpse of the nurse's Today queue. All names and readings are fictional.
 */
export function ProductGlimpse() {
  return (
    <div className="glimpse" aria-hidden="true">
      <div className="glimpse__card glimpse__main">
        <div className="glimpse__head">
          <div>
            <div className="glimpse__title">Today queue</div>
            <div className="glimpse__meta">Rachel Okafor, RN · Westfield Family Medicine</div>
          </div>
          <div className="glimpse__clock">Mon 5 Oct · 09:14</div>
        </div>

        <div className="glimpse__row">
          <div className="glimpse__avatar">HW</div>
          <div>
            <div className="glimpse__name">Harold W.</div>
            <div className="glimpse__detail">BP 182/104 on AI check-in · heart failure, CKD</div>
          </div>
          <span className="chip chip--urgent">
            <span className="chip__pulse" /> Urgent · ack 24:51
          </span>
        </div>

        <div className="glimpse__row">
          <div className="glimpse__avatar glimpse__avatar--sky">MD</div>
          <div>
            <div className="glimpse__name">Maria D.</div>
            <div className="glimpse__detail">Nurse call 10:30 · prefers a person · APCM</div>
          </div>
          <span className="chip chip--info">Scheduled</span>
        </div>

        <div className="glimpse__row">
          <div className="glimpse__avatar glimpse__avatar--teal">JO</div>
          <div>
            <div className="glimpse__name">James O.</div>
            <div className="glimpse__detail">AI check-in complete · 2 tasks created</div>
          </div>
          <span className="chip chip--ok">Done</span>
        </div>

        <div className="glimpse__row">
          <div className="glimpse__avatar glimpse__avatar--lilac">PN</div>
          <div>
            <div className="glimpse__name">Priya N.</div>
            <div className="glimpse__detail">Note filed · awaiting physician attestation</div>
          </div>
          <span className="chip chip--hold">Held</span>
        </div>
      </div>

      <div className="glimpse__card glimpse__float glimpse__float--flag">
        <div className="glimpse__float-title">
          <Flag size={16} /> Red flag routed to nurse
        </div>
        <div className="glimpse__float-body">
          Systolic above 180 on two readings. Acknowledge within <span className="glimpse__countdown">30:00</span> or the
          physician is paged.
        </div>
      </div>

      <div className="glimpse__card glimpse__float glimpse__float--time">
        <div className="glimpse__float-title">
          <Clock size={16} /> 22 min counted
        </div>
        <div className="glimpse__float-body">Meets 20 minutes · 99490 ready for billing</div>
        <div className="glimpse__bar">
          <span />
        </div>
      </div>
    </div>
  );
}
