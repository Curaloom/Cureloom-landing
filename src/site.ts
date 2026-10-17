/**
 * Site-wide copy and configuration for the Cureloom landing page.
 * Replace the placeholder contact values before going live.
 */
export const SITE = {
  name: 'Cureloom',
  slogan: 'Prevention first.',
  tagline: 'Chronic care management that checks in before the crisis does.',
  /** Where "Book a walkthrough" buttons go. Swap for a scheduling link when you have one. */
  bookingHref: '#contact',
  /** Placeholder: replace with the real inbox. */
  contactEmail: 'hello@cureloom.com',
  year: new Date().getFullYear(),
} as const;

export const NAV_ITEMS = [
  { label: 'How it works', href: '#how' },
  { label: 'Platform', href: '#platform' },
  { label: 'Teams', href: '#teams' },
  { label: 'Principles', href: '#principles' },
];

export const CONDITIONS = ['hypertension', 'type 2 diabetes', 'heart failure', 'COPD', 'chronic kidney disease', 'asthma'];

export const BUILT_FOR = [
  'Family medicine',
  'Internal medicine',
  'Geriatrics',
  'Cardiology',
  'Endocrinology',
  'Pulmonology',
  'FQHCs',
  'Rural health clinics',
  'ACOs',
  'Concierge practices',
];

export const STATS = [
  {
    value: 6,
    suffix: ' in 10',
    label: 'US adults live with at least one chronic condition.',
  },
  {
    value: 4,
    suffix: ' in 10',
    label: 'live with two or more, the threshold for CCM. APCM starts at one.',
  },
  {
    value: 90,
    suffix: '%',
    label: 'of US health spending goes to people with chronic and mental health conditions.',
  },
  {
    value: 30,
    suffix: ' min',
    label: 'is how long an urgent flag can wait in Cureloom before it escalates.',
  },
];

export const STATS_SOURCE = 'Population figures: CDC, National Center for Chronic Disease Prevention and Health Promotion.';

export const STEPS = [
  {
    kicker: '01 · Enroll',
    title: 'Start with the export you already have.',
    body:
      'Drop in the CSV or Excel export from your EHR. Cureloom maps the columns for you, reads the payer and the ICD-10 codes, and proposes CCM or an APCM tier for every patient, with a confidence score and the monthly revenue. Your operations lead approves, holds or rejects each row. The nurse sends a consent link or calls, fills the call setup, and the physician approves the care plan before the first check-in.',
    bullets: [
      'Column mapping that learns your export layout',
      'Opportunity matrix with projected monthly recurring revenue',
      'Rejected rows explained, never silently dropped',
    ],
  },
  {
    kicker: '02 · Check in',
    title: 'Every patient hears from you, every month.',
    body:
      'Each patient gets a scheduled check-in: an AI call that follows a fixed, disclosed script, or a nurse call for those who prefer a person. Unanswered calls retry on their own. After three tries, a nurse task is created and, if consent allows, the patient gets a text saying you will try again.',
    bullets: ['Identify → disclose → medications → symptoms → ER → readings → needs', 'An urgent answer jumps straight to the 911 / 988 line', 'Nothing is dialled or texted without consent'],
  },
  {
    kicker: '03 · Act on flags',
    title: 'The right person sees the right reading, in time.',
    body:
      'Answers and readings run through per-condition red-flag rules. Urgent flags page the nurse with a thirty-minute acknowledgement window. The nurse works four queues: consent pending, care not yet delivered, clinical urgency and pending steps. Anything that needs a physician goes to their escalation queue, where the time they spend is captured too.',
    bullets: [
      'Reading targets per condition, symptom rules per program',
      'Routine concerns become tasks; urgent ones become flags',
      'Physician escalations with their own timer and directives',
    ],
  },
  {
    kicker: '04 · Document and bill',
    title: 'The month closes itself.',
    body:
      'Timed work counts itself, in exact seconds floored to whole minutes. At month end Cureloom drafts the note from stored rows and the physician attests. The billing ledger shows every claim line, from 99490 and 99439 to complex CCM and APCM Levels 1 to 3, with a micro-ledger of nurse and physician time behind each one.',
    bullets: [
      'Note: contact, flags, care work, tasks, itemised time log',
      'Hold reasons in a fixed, auditable order',
      'CMS-1500 flat file (CSV or Excel), checked before it leaves',
    ],
  },
];

export const FEATURES = [
  {
    icon: 'note',
    title: 'Roster to revenue',
    body: 'Upload the EHR export as CSV or Excel. Columns are mapped for you, payers and ICD-10 codes are read, and each patient gets a proposed program, a confidence score and a monthly value. Approve, hold or reject, and watch recurring revenue add up.',
  },
  {
    icon: 'phone',
    title: 'AI check-in calls',
    body: 'Scripted, disclosed and consent-gated. The call gathers medications, symptoms, ER visits, readings and needs. It never diagnoses, and an urgent answer ends the script and starts an escalation.',
  },
  {
    icon: 'flag',
    title: 'Four queues, triaged',
    body: 'Consent pending, care not yet delivered, clinical urgency and pending steps. Red-flag rules decide what is routine and what is urgent, and urgent flags carry a thirty-minute acknowledgement deadline visible on every screen.',
  },
  {
    icon: 'stamp',
    title: 'Care plans, physician-approved',
    body: 'Cureloom compiles the care plan from what is on record. The physician approves each version before the program starts, and every approval is signed with a chained hash so later changes show.',
  },
  {
    icon: 'clock',
    title: 'Time that counts itself',
    body: 'Nurse and physician timers record exact seconds. Complex CCM applies only when the physician marks the month as complex. The UI shows the minutes and whether a requirement is met. It never nudges anyone to pad a number.',
  },
  {
    icon: 'shield',
    title: 'Claims that pass pre-flight',
    body: 'A CMS-1500 flat file your billing module or clearinghouse can take today. Every claim is checked first: two chronic conditions where required, date of service, NPI check digits, clean fields. Anything that fails is listed, not shipped.',
  },
];

export const TEAMS = [
  {
    role: 'Nurses',
    title: 'Your whole day, four queues.',
    body: 'Consent pending, care not yet delivered, clinical urgency and pending steps. Open a patient and the month is laid out as nine steps, next to a clinical profile of every condition, reading and symptom over time.',
    items: ['Triaged queues with live countdowns', 'Clinical profile per condition', 'Consent links, call scripts and timers built in'],
    tint: 'teal',
  },
  {
    role: 'Physicians',
    title: 'Approve, escalate, attest.',
    body: 'Approve each care plan before the program starts. Work escalations with a timer that counts your time toward the month, leave a directive for the nurse, and mark complex months. Then attest in one screen.',
    items: ['Care plan approval queue', 'Escalations with time capture', 'Complexity mark for complex CCM'],
    tint: 'sky',
  },
  {
    role: 'Operations',
    title: 'Know what is billable, today.',
    body: 'Turn the EHR export into an opportunity matrix, approve the cohort, and reconcile each month line by line. Export a CMS-1500 flat file that has already passed pre-flight checks.',
    items: ['Column mapper and opportunity matrix', 'Billing ledger and micro-ledger', 'CMS-1500 export with pre-flight'],
    tint: 'lilac',
  },
];

export const PRINCIPLES = [
  {
    title: 'Prevention first',
    body: 'Most chronic care is reactive. We built the month as a rhythm so the next touchpoint is a check-in, not an emergency room.',
  },
  {
    title: 'Consent before contact',
    body: 'No check-in call or text goes out without consent; before it, the only message is the consent request itself. Nothing is sent to an EHR. "Stop calling me" is honoured on the spot and confirmed by a person.',
  },
  {
    title: 'Humans decide',
    body: 'AI calls gather. Nurses and physicians judge. Cureloom compiles the care plan from the record, but a physician approves every version, and it never diagnoses or acts on a reading by itself.',
  },
  {
    title: 'No nudges',
    body: 'The product never gamifies minutes or pushes anyone toward a billing threshold. Queues show the care still owed, not the minutes to go. It shows the time, and whether a requirement is met.',
  },
  {
    title: 'Every action audited',
    body: 'Each command writes an event you can read later. If a claim is held, the reason is on the screen, in the order the rules were checked.',
  },
];

export const MARQUEE = ['Prevention first', 'Check in', 'Flag early', 'Follow up', 'Document once', 'Bill with confidence'];
