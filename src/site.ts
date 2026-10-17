/**
 * Site-wide copy and configuration for the Cureloom landing page.
 * Replace the placeholder contact values before going live.
 */
export const SITE = {
  name: 'Cureloom',
  slogan: 'Prevention first.',
  tagline: 'Chronic care management that checks in before the crisis does.',
  /** Where "Request a walkthrough" buttons go. Swap for a scheduling link when you have one. */
  bookingHref: '#contact',
  /** Placeholder: replace with the real inbox. */
  contactEmail: 'hello@cureloom.com',
  year: new Date().getFullYear(),
} as const;

export const NAV_ITEMS = [
  { label: 'How it works', href: '#how' },
  { label: 'Platform', href: '#platform' },
  { label: 'For practices', href: '#teams' },
  { label: 'Principles', href: '#principles' },
];

export const HERO = {
  eyebrow: 'Chronic care management for primary care',
  title: 'Prevention first.',
  sub: 'Cureloom runs the month between visits for patients living with chronic conditions. A check-in, a flag, a follow-up, a note. Every month, for every patient. Your nurses and physicians keep every decision.',
  primary: 'Request a walkthrough',
  secondary: 'See how a month runs',
};

export const FACTS = [
  {
    title: 'Built for CCM and APCM',
    body: 'Monthly contact and clinical staff time tracked to the rule: 99490 and 99439, complex CCM, and APCM Levels 1 to 3.',
  },
  {
    title: 'Urgent flags answered within 30 minutes',
    body: 'An unacknowledged urgent flag escalates to the physician and the practice manager.',
  },
  {
    title: 'Every minute counted, never typed',
    body: 'Time comes from timers in exact seconds. There is no manual minute entry, and no nudging.',
  },
];

export const WHY = {
  eyebrow: 'Why prevention',
  title: 'Most of chronic care happens between visits. Most of it goes unseen.',
  paragraphs: [
    'A reading drifts, a prescription runs out, a symptom gets brushed off. Without a rhythm, the next time the practice hears about it is an emergency department visit.',
    'Cureloom gives the month a shape. Each patient is checked on, each concern reaches a person who can act, and the work is documented as it happens rather than reconstructed at month end.',
  ],
  stats: [
    { value: 6, suffix: ' in 10', label: 'US adults live with at least one chronic condition.' },
    { value: 4, suffix: ' in 10', label: 'live with two or more, the threshold for CCM. APCM starts at one.' },
    { value: 90, suffix: '%', label: 'of US health spending goes to people with chronic and mental health conditions.' },
  ],
  source: 'Source: CDC, National Center for Chronic Disease Prevention and Health Promotion.',
};

export const STEPS = [
  {
    number: '01',
    kicker: 'Enroll',
    title: 'Start from the export you already have.',
    body: 'Upload the CSV or Excel export from your EHR. Cureloom maps the columns, reads the payer and the ICD-10 codes, and proposes CCM or an APCM tier for each patient, with a confidence score and the monthly value. Your operations lead approves the cohort. The nurse takes consent by link or by phone and fills the call setup, and the physician approves each care plan before the first check-in.',
    bullets: ['Column mapping that remembers your export layout', 'Row-level reasons, never a silent drop', 'A physician-approved care plan before any outreach'],
  },
  {
    number: '02',
    kicker: 'Check in',
    title: 'Every patient hears from the practice, every month.',
    body: 'Each patient gets a scheduled check-in: an automated call that follows a fixed, disclosed script, or a nurse call for people who prefer a person. Unanswered calls retry on their own. After three tries a nurse task is created and, if consent allows, the patient receives a text saying the practice will try again.',
    bullets: ['Identify, disclose, medications, symptoms, ER visits, readings, needs', 'An urgent answer ends the script with a 911 or 988 instruction', 'No check-in call or text before consent'],
  },
  {
    number: '03',
    kicker: 'Act on flags',
    title: 'Concerns reach a person who can act, in time.',
    body: 'Answers and readings run through per-condition rules. Routine concerns become tasks. Urgent flags page the nurse with a thirty-minute acknowledgement window, and if it lapses the physician and practice manager are alerted. The nurse works four queues: consent pending, care not yet delivered, clinical urgency and pending steps. What needs a physician goes to their escalation queue, where their time is counted too.',
    bullets: ['Reading targets per condition, symptom rules per program', 'A banner on every screen until an urgent flag is acknowledged', 'Timers on nurse and physician work, so the minutes count themselves'],
  },
  {
    number: '04',
    kicker: 'Document and bill',
    title: 'The month closes with a note, a signature and a reason for every hold.',
    body: 'At month end Cureloom drafts each note from the stored record: the contact, the flags, the care work, the tasks and an itemised time log. The nurse files it and the physician attests. The billing ledger shows every claim line, with the nurse and physician time behind it, and exactly why anything is held.',
    bullets: ['Notes drafted from events, not from memory', 'Hold reasons checked in a fixed, auditable order', 'A CMS-1500 file, checked before it leaves'],
  },
];

export const FEATURES = [
  {
    icon: 'note',
    title: 'Roster to revenue',
    body: 'The EHR export, mapped for you. Each patient gets a proposed program, a confidence score and a monthly value to approve, hold or reject.',
  },
  {
    icon: 'phone',
    title: 'Automated check-in calls',
    body: 'Scripted, disclosed and consent-gated. The call gathers medications, symptoms, ER visits, readings and needs. It never diagnoses.',
  },
  {
    icon: 'flag',
    title: 'Four queues, triaged',
    body: 'Consent pending, care not yet delivered, clinical urgency and pending steps. Urgent flags carry a visible acknowledgement deadline.',
  },
  {
    icon: 'stamp',
    title: 'Care plans, physician-approved',
    body: 'Compiled from the record, approved by the physician before the program starts, and signed so any later change shows.',
  },
  {
    icon: 'clock',
    title: 'Time that counts itself',
    body: 'Nurse and physician timers record exact seconds. Complex CCM applies only when the physician marks the month.',
  },
  {
    icon: 'shield',
    title: 'Claims that pass pre-flight',
    body: 'A CMS-1500 file your billing module can take. Every claim is checked first; anything that fails is listed, not shipped.',
  },
];

export const TEAMS = [
  {
    role: 'Nurses',
    title: 'The whole day in four queues.',
    body: 'Consent pending, care not yet delivered, clinical urgency and pending steps. Open a patient and the month is laid out as nine steps, next to a clinical profile of every condition over time.',
    items: ['Triaged queues with live countdowns', 'Clinical profile per condition', 'Consent links, scripts and timers built in'],
  },
  {
    role: 'Physicians',
    title: 'Approve, review, attest.',
    body: 'Approve each care plan before the program starts. Work escalations with a timer that counts your time, leave a directive for the nurse, and mark complex months. Then attest in one screen.',
    items: ['Care plan approval queue', 'Escalations with time capture', 'Attestation in one signature'],
  },
  {
    role: 'Operations',
    title: 'Know what is billable, today.',
    body: 'Turn the EHR export into an opportunity matrix, approve the cohort, and reconcile each month line by line before the claims go out.',
    items: ['Column mapper and opportunity matrix', 'Billing ledger and micro-ledger', 'CMS-1500 export with pre-flight checks'],
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
    body: 'Automated calls gather. Nurses and physicians judge. Cureloom compiles the care plan from the record, but a physician approves every version, and it never diagnoses or acts on a reading by itself.',
  },
  {
    title: 'No nudges',
    body: 'The product never gamifies minutes or pushes anyone toward a billing threshold. Queues show the care still owed, not the minutes to go.',
  },
  {
    title: 'Every action audited',
    body: 'Each command writes an event you can read later. If a claim is held, the reason is on the screen, in the order the rules were checked.',
  },
];

export const CTA = {
  title: 'See one month at one practice.',
  body: 'Bring a roster export and thirty minutes. We will walk through a simulated month, from upload to the claims file, and show you exactly what your nurses, physicians and operations team would see.',
  primary: 'Request a walkthrough',
  secondary: 'Read how a month runs',
};
