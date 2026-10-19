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
  eyebrow: 'AI-assisted CCM and APCM program management',
  title: 'Prevention first.',
  sub: 'Curalooms runs your CCM and APCM programs from enrollment to claim. An AI caller makes the APCM check-ins and flags what it hears. Your nurses and physicians make every clinical call.',
  primary: 'Request a walkthrough',
  secondary: 'See how a month runs',
};

export const FACTS = [
  {
    title: 'AI check-in calls for APCM',
    body: 'A scripted AI caller makes the monthly call. It sends urgent answers to 911 or 988 and never diagnoses.',
  },
  {
    title: 'Urgent flags answered within 30 minutes',
    body: 'An unacknowledged urgent flag escalates to the physician and the practice manager.',
  },
  {
    title: 'Built for CCM and APCM',
    body: 'Contact and clinical staff time tracked to the rule: 99490 and 99439, complex CCM, and APCM Levels 1 to 3.',
  },
];

export const WHY = {
  eyebrow: 'Why prevention',
  title: 'Most chronic care happens between visits, when nobody at the practice is watching.',
  paragraphs: [
    'A blood pressure creeps up, a prescription runs out, a patient shrugs off a symptom. If nobody checks in, the practice often hears about it when the patient shows up in the ER.',
    'No practice has the staff to call every patient every month. Curalooms puts an AI caller on the APCM check-ins, so nurses spend their time on CCM calls and on the concerns the AI finds.',
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
    body: 'Upload the CSV or Excel export from your EHR. Curalooms reads each patient\'s payer and ICD-10 codes and suggests CCM or an APCM tier, with a confidence score and monthly value. Operations approves the group, a nurse gets consent, and the physician approves each care plan.',
    bullets: ['Column mapping that remembers your export layout', 'A reason for every row, never a silent drop', 'No outreach before the care plan is approved'],
  },
  {
    number: '02',
    kicker: 'Check in',
    title: 'Every patient hears from the practice each month.',
    body: 'APCM patients get a call from an AI caller that follows a fixed script and says it is automated. CCM patients, and anyone who prefers a person, get a nurse call. Unanswered calls retry, and after three tries a nurse gets a task.',
    bullets: ['Covers medications, symptoms, ER visits, readings and needs', 'An urgent answer ends the call with a 911 or 988 instruction', 'No call or text before consent'],
  },
  {
    number: '03',
    kicker: 'Act on flags',
    title: 'Concerns reach someone who can act on them.',
    body: 'Answers and readings are checked against rules for each condition. Routine concerns become tasks. Urgent flags page the nurse, who has thirty minutes to acknowledge before the physician and practice manager are alerted.',
    bullets: ['Reading targets per condition', 'A banner on every screen until an urgent flag is acknowledged', 'Nurse and physician time tracked by timers'],
  },
  {
    number: '04',
    kicker: 'Document and bill',
    title: 'Each month ends with a signed note and a reason for every held claim.',
    body: 'At month end Curalooms drafts each note from the record: contact, flags, care work, tasks and an itemized time log. The nurse files it, the physician attests, and the billing ledger shows every claim line and why any is held.',
    bullets: ['Notes drafted from the month\'s recorded events', 'Hold reasons checked in a fixed, auditable order', 'CMS-1500 file checked before it goes out'],
  },
];

export const FEATURES = [
  {
    icon: 'note',
    title: 'Roster to revenue',
    body: 'Upload your EHR export. Each patient gets a suggested program, a confidence score and a monthly value to approve.',
  },
  {
    icon: 'phone',
    title: 'AI check-in calls',
    body: 'A scripted AI caller makes the APCM check-ins, with consent, and asks about medications, symptoms, ER visits and readings.',
  },
  {
    icon: 'flag',
    title: 'Four work queues',
    body: 'Consent pending, care not yet delivered, clinical urgency and pending steps. Urgent flags show their deadline.',
  },
  {
    icon: 'stamp',
    title: 'Physician-approved care plans',
    body: 'Compiled from the patient record and approved by the physician before the program starts.',
  },
  {
    icon: 'clock',
    title: 'Automatic time tracking',
    body: 'Timers record nurse and physician time to the second. AI call time is never counted.',
  },
  {
    icon: 'shield',
    title: 'Claims checked first',
    body: 'A CMS-1500 file your billing module can import. Claims that fail the checks are listed, not sent.',
  },
];

export const TEAMS = [
  {
    role: 'Nurses',
    title: 'Your day, in four queues.',
    body: 'Open a patient and see the month as nine steps, next to each condition\'s clinical history.',
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
    body: 'Turn the EHR export into a matrix of billable opportunities, approve the patient group, and reconcile each month before claims go out.',
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
    body: 'No call or text goes out until the patient consents. If a patient says "stop calling me," the calls stop and a staff member follows up.',
  },
  {
    title: 'Humans decide',
    body: 'The AI only collects answers. It doesn\'t diagnose or act on a reading. A physician approves every care plan.',
  },
  {
    title: 'No nudges',
    body: 'Curalooms doesn\'t turn minutes into a score or push staff toward a billing threshold. AI call time is never counted.',
  },
  {
    title: 'Every action audited',
    body: 'Every action is logged. If a claim is held, the reason is on screen, in the order the rules were checked.',
  },
];

export const CTA = {
  title: 'See one month at one practice.',
  body: 'Bring a roster export and thirty minutes. We\'ll run a simulated month from upload to claims file, AI check-in calls included.',
  primary: 'Request a walkthrough',
  secondary: 'Read how a month runs',
};
