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
  { label: 'Revenue estimate', href: '/estimate.html' },
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
    body: 'Monthly contact and clinical staff time tracked to the rule, for 99490, G0557 and G0558.',
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
    { value: 4, suffix: ' in 10', label: 'live with two or more, the threshold for CCM and APCM.' },
    { value: 90, suffix: '%', label: 'of US health spending goes to people with chronic and mental health conditions.' },
  ],
  source: 'Source: CDC, National Center for Chronic Disease Prevention and Health Promotion.',
};

export const STEPS = [
  {
    number: '01',
    kicker: 'Enroll',
    title: 'Start from the roster you already have.',
    body: 'Upload the monthly patient list. Cureloom checks eligibility, two or more chronic conditions, a visit in the last twelve months and coverage, and explains every row it cannot accept. Your nurse walks each patient through the consent script and call setup, and chooses CCM or APCM per patient.',
    bullets: ['Row-level reasons, never a silent drop', 'Consent recorded with method and date', 'Caregiver, language and "prefers a person" kept with the patient'],
  },
  {
    number: '02',
    kicker: 'Check in',
    title: 'Every patient hears from the practice, every month.',
    body: 'Each patient gets a scheduled check-in: an automated call that follows a fixed, disclosed script, or a nurse call for people who prefer a person. Unanswered calls retry on their own. After three tries a nurse task is created and, if consent allows, the patient receives a text saying the practice will try again.',
    bullets: ['Identify, disclose, medications, symptoms, ER visits, readings, needs', 'An urgent answer ends the script with a 911 or 988 instruction', 'Nothing is dialled or texted without consent'],
  },
  {
    number: '03',
    kicker: 'Act on flags',
    title: 'Concerns reach a person who can act, in time.',
    body: 'Answers and readings run through per-condition rules. Routine concerns become tasks. Urgent flags page the nurse with a thirty-minute acknowledgement window, and if it lapses the physician and practice manager are alerted. Everything lands in one Today queue, ordered by what needs attention first.',
    bullets: ['Reading targets per condition, symptom rules per program', 'A banner on every screen until an urgent flag is acknowledged', 'Timers on the work, so the minutes count themselves'],
  },
  {
    number: '04',
    kicker: 'Document and bill',
    title: 'The month closes with a note, a signature and a reason for every hold.',
    body: 'At month end Cureloom drafts each note from the stored record: the contact, the flags, the care work, the tasks and an itemised time log. The nurse files it, the physician attests, and the billing list shows what is ready for 99490, G0557 or G0558, and exactly why anything is held.',
    bullets: ['Notes drafted from events, not from memory', 'Hold reasons checked in a fixed, auditable order', 'CSV for the billing team'],
  },
];

export const FEATURES = [
  {
    icon: 'phone',
    title: 'Automated check-in calls',
    body: 'Scripted, disclosed and consent-gated. The call gathers medications, symptoms, ER visits, readings and needs. It never diagnoses.',
  },
  {
    icon: 'flag',
    title: 'Red-flag rules',
    body: 'Per-condition reading targets and symptom rules decide what is routine and what is urgent, with a visible acknowledgement deadline.',
  },
  {
    icon: 'clock',
    title: 'Time that counts itself',
    body: 'Timers on nurse calls and chart work record exact seconds. The screen shows the minutes and, once true, "Meets 20 minutes".',
  },
  {
    icon: 'note',
    title: 'Month-end notes, drafted',
    body: 'Header, contact with answers, flags, care management work, tasks and an itemised time log. Copy into the EHR or file from Cureloom.',
  },
  {
    icon: 'stamp',
    title: 'Attestation and billing',
    body: 'Physicians attest in one screen. The billing list shows ready, held and not enrolled, with the hold reason spelled out.',
  },
  {
    icon: 'shield',
    title: 'Audit trail and outbox',
    body: 'Every command writes an event. Every message a patient would receive sits in a visible outbox first.',
  },
];

export const TEAMS = [
  {
    role: 'Nurses',
    title: 'The whole day in one queue.',
    body: 'Calls, flags, tasks and timers in the order they need you. Open a patient and the month is laid out as nine steps, from consent to a filed note.',
    items: ['Today queue with live countdowns', 'Nine-step patient month', 'Scripts and consent text built in'],
  },
  {
    role: 'Physicians',
    title: 'Attest in minutes, not evenings.',
    body: 'See the flags, the note and the counted time for each patient, then sign. Urgent escalations reach you only when the nurse window lapses.',
    items: ['Attestation queue', 'Flag history per patient', 'Escalation only when it matters'],
  },
  {
    role: 'Practice managers',
    title: 'Know what is billable, today.',
    body: 'Upload the roster, confirm eligibility, watch enrolment move, and read a billing list that tells you why a claim is held before the month ends.',
    items: ['Roster upload with row-level errors', 'Billing list and CSV', 'Program fees per code, always visible'],
  },
];

export const PRINCIPLES = [
  {
    title: 'Prevention first',
    body: 'Most chronic care is reactive. We built the month as a rhythm so the next touchpoint is a check-in, not an emergency room.',
  },
  {
    title: 'Consent before contact',
    body: 'Nothing is dialled, texted or sent to an EHR without consent. "Stop calling me" is honoured on the spot and confirmed by a person.',
  },
  {
    title: 'Humans decide',
    body: 'Automated calls gather. Nurses and physicians judge. Cureloom never diagnoses, never suggests a care plan, and never acts on a reading by itself.',
  },
  {
    title: 'No nudges',
    body: 'The product never gamifies minutes or pushes anyone toward a billing threshold. It shows the time, and whether a requirement is met.',
  },
  {
    title: 'Every action audited',
    body: 'Each command writes an event you can read later. If a claim is held, the reason is on the screen, in the order the rules were checked.',
  },
];

export const CTA = {
  title: 'See one month at one practice.',
  body: 'Bring a roster and thirty minutes. We will walk through a simulated month, from upload to billing list, and show you exactly what your nurses, physicians and managers would see.',
  primary: 'Request a walkthrough',
  secondary: 'Read how a month runs',
};

/**
 * The APCM revenue estimator at /estimate.html, a lead-capture page.
 * Rates are approximate national non-facility Medicare amounts. Check them against the current
 * Physician Fee Schedule before publishing, and update the label if you switch to locality rates.
 */
export const ESTIMATE = {
  /** NLM Clinical Tables, a CORS-enabled mirror of the CMS NPPES registry, so no proxy is needed. */
  npiApi: 'https://clinicaltables.nlm.nih.gov/api',
  /**
   * POST endpoint for lead submissions (JSON body), e.g. a Formspree form: https://formspree.io/f/<form id>.
   * Empty means the form opens a prefilled email instead.
   */
  leadEndpoint: 'https://formspree.io/f/xgaakgdn',
  rateLabel: 'Approximate CMS national Medicare rates',
  /** Share of a practice's Medicare panel in each APCM tier, and the monthly rate for that tier. */
  tiers: [
    { code: 'G0556', label: 'One chronic condition', share: 0.2, rate: 15 },
    { code: 'G0557', label: 'Two or more chronic conditions', share: 0.55, rate: 50 },
    { code: 'G0558', label: 'Two or more conditions, QMB', share: 0.1, rate: 110 },
  ],
  /** Share of eligible patients who enrol, per scenario. */
  scenarios: [
    { key: 'conservative', label: 'Conservative', enrolment: 0.2 },
    { key: 'expected', label: 'Expected', enrolment: 0.4 },
    { key: 'strong', label: 'Strong', enrolment: 0.6 },
  ],
  /** Starting panel size before the visitor adjusts it. */
  defaultPanel: { individual: 800, organization: 2500 },
  roles: ['Physician', 'Practice manager', 'Nurse or care manager', 'Billing or revenue cycle', 'Other'],
} as const;
