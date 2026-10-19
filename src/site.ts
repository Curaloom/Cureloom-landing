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
    body: 'A scripted AI caller makes the monthly call. It never diagnoses.',
  },
  {
    title: 'Urgent flags answered within 30 minutes',
    body: 'If no one acknowledges an urgent flag, it goes to the physician and practice manager.',
  },
  {
    title: 'Built for CCM and APCM',
    body: 'Contact and staff time tracked to the rule: 99490, 99439, complex CCM and APCM Levels 1 to 3.',
  },
];

export const WHY = {
  eyebrow: 'Why prevention',
  title: 'Most chronic care happens between visits, when nobody at the practice is watching.',
  paragraphs: [
    'A blood pressure creeps up, a prescription runs out, a symptom gets shrugged off. If nobody checks in, the practice hears about it in the ER.',
    'No practice has staff to call everyone every month. An AI caller takes the APCM check-ins, so nurses spend their time on CCM calls and the concerns the AI finds.',
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
    body: 'Upload your EHR export. Curalooms reads payer and ICD-10 codes and suggests CCM or an APCM tier, with a confidence score and monthly value. Operations approves, a nurse gets consent, and the physician approves each care plan.',
    bullets: ['Column mapping that remembers your export', 'No outreach before the care plan is approved'],
  },
  {
    number: '02',
    kicker: 'Check in',
    title: 'Every patient hears from the practice each month.',
    body: 'APCM patients get a call from an AI caller that follows a fixed script and says it is automated. CCM patients, and anyone who prefers a person, get a nurse call. After three unanswered tries a nurse gets a task.',
    bullets: ['An urgent answer ends the call with a 911 or 988 instruction', 'No call or text before consent'],
  },
  {
    number: '03',
    kicker: 'Act on flags',
    title: 'Concerns reach someone who can act on them.',
    body: 'Answers and readings are checked against rules for each condition. Routine concerns become tasks. Urgent flags page the nurse, who has thirty minutes to acknowledge before the physician is alerted.',
    bullets: ['A banner on every screen until an urgent flag is acknowledged', 'Nurse and physician time tracked by timers'],
  },
  {
    number: '04',
    kicker: 'Document and bill',
    title: 'Each month ends with a signed note and a reason for every held claim.',
    body: 'At month end Curalooms drafts each note from the record, with an itemized time log. The nurse files it, the physician attests, and the ledger shows every claim line and why any is held.',
    bullets: ['Hold reasons checked in a fixed, auditable order', 'CMS-1500 file checked before it goes out'],
  },
];

export const FEATURES = [
  {
    icon: 'note',
    title: 'Roster to revenue',
    body: 'Each patient gets a suggested program, confidence score and monthly value to approve.',
  },
  {
    icon: 'phone',
    title: 'AI check-in calls',
    body: 'A scripted AI caller covers medications, symptoms, ER visits and readings, with consent.',
  },
  {
    icon: 'flag',
    title: 'Four work queues',
    body: 'Consent pending, care not yet delivered, clinical urgency, pending steps.',
  },
  {
    icon: 'stamp',
    title: 'Physician-approved care plans',
    body: 'Compiled from the record, approved before the program starts.',
  },
  {
    icon: 'clock',
    title: 'Automatic time tracking',
    body: 'Timers record nurse and physician time to the second. AI call time is never counted.',
  },
  {
    icon: 'shield',
    title: 'Claims checked first',
    body: 'A CMS-1500 file for your billing module. Failed claims are listed, not sent.',
  },
];

export const TEAMS = [
  {
    role: 'Nurses',
    title: 'Your day, in four queues.',
    body: 'Open a patient and see the month as nine steps, next to each condition\'s clinical history.',
    items: ['Queues sorted by urgency, with live countdowns', 'Consent links, scripts and timers built in'],
  },
  {
    role: 'Physicians',
    title: 'Approve, review, attest.',
    body: 'Approve care plans, work escalations, leave directives, mark complex months, then attest on one screen.',
    items: ['Care plan approval queue', 'One-signature attestation'],
  },
  {
    role: 'Operations',
    title: 'See what is billable today.',
    body: 'Turn the EHR export into a billable-opportunity matrix, then reconcile each month before claims go out.',
    items: ['Billing ledger, line by line', 'CMS-1500 export with pre-flight checks'],
  },
];

export const PRINCIPLES = [
  {
    title: 'Prevention first',
    body: 'Most chronic care is reactive. We built the month so the next touchpoint is a check-in, not an ER visit.',
  },
  {
    title: 'Consent before contact',
    body: 'No call or text goes out until the patient consents. "Stop calling me" stops the calls, and staff follow up.',
  },
  {
    title: 'Humans decide',
    body: 'The AI only collects answers. It doesn\'t diagnose, and a physician approves every care plan.',
  },
  {
    title: 'No nudges',
    body: 'No minute scores, no pushing staff toward a billing threshold. AI call time is never counted.',
  },
  {
    title: 'Every action audited',
    body: 'Every action is logged. A held claim shows its reason on screen.',
  },
];

export const CTA = {
  title: 'See one month at one practice.',
  body: 'Bring a roster export and thirty minutes. We\'ll run a simulated month from upload to claims file, AI calls included.',
  primary: 'Request a walkthrough',
  secondary: 'Read how a month runs',
};
