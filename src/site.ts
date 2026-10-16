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
    label: 'live with two or more, the threshold for CCM and APCM.',
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
    title: 'Start with the roster you already have.',
    body:
      'Upload a patient list. Cureloom checks eligibility, two or more chronic conditions, a visit in the last twelve months and coverage, and flags the rows that need a human look. Your nurse walks each patient through the consent script and call setup. CCM or APCM, chosen per patient.',
    bullets: ['Eligibility and consent, step by step', 'Rejected rows explained, never silently dropped', 'Caregivers, language and "prefers a human" recorded once'],
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
      'Answers and readings run through per-condition red-flag rules. Urgent flags page the nurse with a thirty-minute acknowledgement window. If it lapses, the physician and practice manager are alerted. Everything lands in one Today queue, with timers that count the work.',
    bullets: ['Reading targets per condition, symptom rules per program', 'Routine concerns become tasks; urgent ones become flags', 'A red banner on every screen until it is acknowledged'],
  },
  {
    kicker: '04 · Document and bill',
    title: 'The month closes itself.',
    body:
      'Timed work counts itself, in exact seconds floored to whole minutes. At month end Cureloom drafts the note from stored rows, the physician attests, and the billing list shows what is ready for 99490, G0557 or G0558, and exactly why anything is held.',
    bullets: ['Note: contact, flags, care work, tasks, itemised time log', 'Hold reasons in a fixed, auditable order', 'CSV export for your billing team'],
  },
];

export const FEATURES = [
  {
    icon: 'phone',
    title: 'AI check-in calls',
    body: 'Scripted, disclosed and consent-gated. The call gathers medications, symptoms, ER visits, readings and needs. It never diagnoses, and an urgent answer ends the script and starts an escalation.',
  },
  {
    icon: 'flag',
    title: 'Red-flag rules',
    body: 'Per-condition reading targets and symptom rules decide what is routine and what is urgent. Urgent flags carry a thirty-minute acknowledgement deadline that is visible on every screen.',
  },
  {
    icon: 'clock',
    title: 'Time that counts itself',
    body: 'Timers run on nurse calls and chart work and record exact seconds. The UI shows the minutes and, once true, "Meets 20 minutes". It never nudges anyone to pad a number.',
  },
  {
    icon: 'note',
    title: 'Month-end notes, drafted',
    body: 'Header, monthly contact with answers, flags, care management work, tasks and an itemised time log. Copy it into your EHR or file it from Cureloom, then send it for attestation.',
  },
  {
    icon: 'stamp',
    title: 'Attestation and billing',
    body: 'Physicians attest in one screen. The billing list shows every patient as ready, held or not enrolled, with the hold reason spelled out and a CSV your billing team can use today.',
  },
  {
    icon: 'shield',
    title: 'Audit trail and outbox',
    body: 'Every command writes an event. Every message a patient would receive sits in a visible outbox first. Consent, opt-out and program changes are recorded with who did what, and when.',
  },
];

export const TEAMS = [
  {
    role: 'Nurses',
    title: 'Your whole day, one queue.',
    body: 'Calls, flags, tasks and timers in the order they need you. Open a patient and the month is laid out as nine steps, from consent to a filed note.',
    items: ['Today queue with live countdowns', 'Nine-step patient month', 'Call scripts and consent text built in'],
    tint: 'teal',
  },
  {
    role: 'Physicians',
    title: 'Attest in minutes, not evenings.',
    body: 'See the flags, the note and the counted time for each patient, then sign. Urgent escalations reach you only when the nurse window lapses.',
    items: ['Attestation queue', 'Flag history per patient', 'Escalation only when it matters'],
    tint: 'sky',
  },
  {
    role: 'Practice managers',
    title: 'Know what is billable, today.',
    body: 'Upload the roster, confirm eligibility, watch enrolment move, and read a billing list that tells you why a claim is held before the month ends.',
    items: ['Roster upload with row-level errors', 'Billing list and CSV', 'Program fees per code, always visible'],
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
    body: 'Nothing is dialled, texted or sent to an EHR without consent. "Stop calling me" is honoured on the spot and confirmed by a person.',
  },
  {
    title: 'Humans decide',
    body: 'AI calls gather. Nurses and physicians judge. Cureloom never diagnoses, never suggests a care plan, and never acts on a reading by itself.',
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

export const MARQUEE = ['Prevention first', 'Check in', 'Flag early', 'Follow up', 'Document once', 'Bill with confidence'];
