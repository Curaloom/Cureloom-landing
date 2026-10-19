/**
 * Site-wide copy and configuration for the Curalooms landing page.
 * Replace the placeholder contact values before going live.
 */
export const SITE = {
  name: 'Curalooms',
  slogan: 'Prevention first.',
  tagline: 'Chronic care management that checks in before the crisis does.',
  /** Where "Request a walkthrough" buttons go. Swap for a scheduling link when you have one. */
  bookingHref: '#contact',
  /** Placeholder: replace with the real inbox. */
  contactEmail: 'hello@curalooms.com',
  year: new Date().getFullYear(),
} as const;

export const NAV_ITEMS = [
  { label: 'How it works', href: '#how' },
  { label: 'Platform', href: '#platform' },
  { label: 'For practices', href: '#teams' },
  { label: 'Principles', href: '#principles' },
];

export const HERO = {
  eyebrow: 'CCM and APCM program management for primary care',
  title: 'Prevention first.',
  sub: 'Curalooms runs your CCM and APCM programs from enrollment to claim. It handles the month between visits: calls your patients, flags anything worrying for your nurse, and drafts the note and the claim. Your nurses and physicians make every clinical call.',
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
    title: 'Time is tracked by timers',
    body: 'Nurse and physician time is recorded by timers, to the second. Nobody types in minutes.',
  },
];

export const WHY = {
  eyebrow: 'Why prevention',
  title: 'Most chronic care happens between visits, when nobody at the practice is watching.',
  paragraphs: [
    'A blood pressure creeps up, a prescription runs out, a patient shrugs off a symptom. If nobody checks in, the practice often hears about it when the patient shows up in the ER.',
    'Every patient gets a check-in each month. If something sounds wrong, a nurse sees it. The note is written from what happened that month, so nobody rebuilds it from memory at month end.',
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
    title: 'Start with the export you already have.',
    body: 'Upload the CSV or Excel export from your EHR. Curalooms reads each patient\'s payer and ICD-10 codes and suggests CCM or an APCM tier, with a confidence score and monthly value. Operations approves the group, a nurse gets consent, and the physician approves each care plan before the first check-in.',
    bullets: ['Column mapping that remembers your export layout', 'Row-level reasons, never a silent drop', 'A physician-approved care plan before any outreach'],
  },
  {
    number: '02',
    kicker: 'Check in',
    title: 'Every patient hears from the practice each month.',
    body: 'Each patient gets a scheduled check-in: an automated call that follows a fixed script and says what it is, or a nurse call if they prefer a person. Unanswered calls retry. After three tries a nurse gets a task and, with consent, the patient gets a text.',
    bullets: ['Identify, disclose, medications, symptoms, ER visits, readings, needs', 'An urgent answer ends the script with a 911 or 988 instruction', 'No check-in call or text before consent'],
  },
  {
    number: '03',
    kicker: 'Act on flags',
    title: 'Concerns reach someone who can act on them.',
    body: 'Answers and readings are checked against rules for each condition. Routine concerns become tasks. Urgent flags page the nurse, who has thirty minutes to acknowledge before the physician and practice manager are alerted. Anything that needs a physician goes to their escalation queue.',
    bullets: ['Reading targets per condition, symptom rules per program', 'A banner on every screen until an urgent flag is acknowledged', 'Timers on nurse and physician work, so the minutes count themselves'],
  },
  {
    number: '04',
    kicker: 'Document and bill',
    title: 'Each month ends with a signed note and a reason for every held claim.',
    body: 'At month end Curalooms drafts each note from the record: contact, flags, care work, tasks and an itemized time log. The nurse files it, the physician attests, and the billing ledger shows every claim line and why any is held.',
    bullets: ['Notes drafted from the month\'s recorded events', 'Hold reasons checked in a fixed order you can audit', 'CMS-1500 file checked before it goes out'],
  },
];

export const FEATURES = [
  {
    icon: 'note',
    title: 'Roster to revenue',
    body: 'We map your EHR export for you. Each patient gets a suggested program, a confidence score and a monthly value, and you approve, hold or reject it.',
  },
  {
    icon: 'phone',
    title: 'Automated check-in calls',
    body: 'Calls follow a fixed script, say what they are, and only go out with consent. They ask about medications, symptoms, ER visits, readings and needs. They never diagnose.',
  },
  {
    icon: 'flag',
    title: 'Four work queues',
    body: 'Consent pending, care not yet delivered, clinical urgency and pending steps. Every urgent flag shows its acknowledgement deadline.',
  },
  {
    icon: 'stamp',
    title: 'Physician-approved care plans',
    body: 'Drafted from the patient record and approved by the physician before the program starts. Each version is signed, so later changes show.',
  },
  {
    icon: 'clock',
    title: 'Automatic time tracking',
    body: 'Nurse and physician timers record time to the second. Complex CCM applies only when the physician marks the month.',
  },
  {
    icon: 'shield',
    title: 'Claims checked before they go out',
    body: 'A CMS-1500 file your billing module can import. Every claim is checked first, and any that fail are listed instead of sent.',
  },
];

export const TEAMS = [
  {
    role: 'Nurses',
    title: 'Your whole day, in four queues.',
    body: 'Consent pending, care not yet delivered, clinical urgency and pending steps. Open a patient and you see the month as nine steps, next to each condition\'s clinical history.',
    items: ['Queues sorted by urgency, with live countdowns', 'Clinical profile for each condition', 'Consent links, scripts and timers built in'],
  },
  {
    role: 'Physicians',
    title: 'Approve, review, attest.',
    body: 'Approve care plans, work escalations with a timer running, leave directives for the nurse, mark complex months, then attest on one screen.',
    items: ['Care plan approval queue', 'Escalations with time tracking', 'One-signature attestation'],
  },
  {
    role: 'Operations',
    title: 'See what is billable today.',
    body: 'Turn the EHR export into a matrix of billable opportunities, approve the patient group, and reconcile each month line by line before claims go out.',
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
    body: 'We don\'t call or text a patient until they\'ve consented. The only exception is the message asking for consent. If a patient says "stop calling me," the calls stop immediately and a staff member follows up to confirm.',
  },
  {
    title: 'Humans decide',
    body: 'The automated call only collects answers. Curalooms drafts the care plan, but a physician approves every version. It doesn\'t diagnose, and it doesn\'t act on a reading by itself.',
  },
  {
    title: 'No nudges',
    body: 'Curalooms doesn\'t track minutes as a score or push staff toward a billing threshold. Queues show the care a patient still needs, not how many minutes are left.',
  },
  {
    title: 'Every action audited',
    body: 'Every action is logged, so you can look it up later. If a claim is held, the reason is on screen, listed in the order the rules were checked.',
  },
];

export const CTA = {
  title: 'See one month at one practice.',
  body: 'Bring a roster export and thirty minutes. We\'ll run a simulated month from upload to claims file, and show you what your nurses, physicians and operations team would each see.',
  primary: 'Request a walkthrough',
  secondary: 'Read how a month runs',
};
