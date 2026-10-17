import { LogoMark } from './Logo';

/**
 * A calm, designed rendering of the nurse's Today queue. Names and readings are fictional,
 * taken from the simulated practice used in the Cureloom prototype.
 */
const ROWS = [
  {
    tag: 'Urgent',
    tone: 'urgent',
    name: 'Harold Jenkins',
    mrn: 'W01',
    program: 'APCM',
    reason: (
      <>
        Chest tightness on the stairs today, told to call 911. Acknowledge within 30 min:{' '}
        <span className="q__count">29:52 left</span>
      </>
    ),
    min: '0',
  },
  {
    tag: 'Concern',
    tone: 'concern',
    name: 'Maria Delgado',
    mrn: 'W02',
    program: 'APCM',
    reason: 'Check-in 9 Oct: ran out of metformin 3 days ago; fasting glucose 240 mg/dL against a 90–130 target',
    min: '0',
  },
  {
    tag: 'Not reached',
    tone: 'concern',
    name: 'George Pappas',
    mrn: 'W07',
    program: 'APCM',
    reason: 'Not reached after 3 tries (7, 9, 13 Oct). Nurse task created.',
    min: '0',
  },
  {
    tag: 'CCM call due',
    tone: 'info',
    name: 'Walter Nguyen',
    mrn: 'W03',
    program: 'CCM',
    reason: 'Monthly nurse call due',
    min: '12',
  },
  {
    tag: 'Open task',
    tone: 'neutral',
    name: 'Ruth Simmons',
    mrn: 'W14',
    program: 'APCM',
    reason: '1 open task: confirm opt-out by phone',
    min: '0',
  },
  {
    tag: 'Quick review',
    tone: 'ok',
    name: 'Doris Whitfield',
    mrn: 'W04',
    program: 'APCM',
    reason: 'Check-in 8 Oct completed, no concerns. BP 128/80.',
    min: '0',
  },
  {
    tag: 'Quick review',
    tone: 'ok',
    name: 'Agnes Rowe',
    mrn: 'W10',
    program: 'APCM',
    reason: 'Check-in 8 Oct completed, answered by caregiver. BP 130/82.',
    min: '0',
  },
];

export function AppWindow() {
  return (
    <div className="app" aria-hidden="true">
      <div className="app__bar">
        <div className="app__brand">
          <LogoMark size={18} />
          Cureloom
          <small>Westfield Family Medicine</small>
        </div>
        <div className="app__right">
          <span className="app__chip">Rachel Okafor, RN</span>
          <span>Tue 13 Oct · 10:30</span>
        </div>
      </div>
      <div className="app__body">
        <aside className="app__side">
          <nav className="app__nav">
            <a className="is-active">
              Today queue <span className="app__count">10</span>
            </a>
            <a>Enroll</a>
            <a>All patients</a>
            <a>Month end</a>
          </nav>
          <div className="app__group">Practice</div>
          <nav className="app__nav">
            <a>Billing</a>
            <a>Attestation</a>
            <a>
              Outbox <span className="app__count">5</span>
            </a>
            <a>Audit trail</a>
          </nav>
        </aside>
        <div className="app__main">
          <div className="app__title">Today · Tue 13 Oct</div>
          <p className="app__intro">
            Clinical urgency first. Consent pending, care not yet delivered and pending steps sit in their own queues.
          </p>
          <div className="q">
            <div className="q__row">
              <span>Why</span>
              <span>Patient</span>
              <span className="q__program">Program</span>
              <span className="q__reason">Reason</span>
              <span className="q__min">Minutes</span>
            </div>
            {ROWS.map((r) => (
              <div className={`q__row${r.tone === 'urgent' ? ' q__row--urgent' : ''}`} key={r.mrn}>
                <span>
                  <span className={`tag tag--${r.tone}`}>{r.tag}</span>
                </span>
                <span>
                  <span className="q__name">{r.name}</span>
                  <span className="q__mrn">{r.mrn}</span>
                </span>
                <span className="q__program">{r.program}</span>
                <span className="q__reason">{r.reason}</span>
                <span className="q__min">{r.min}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="app__fade" />
    </div>
  );
}
