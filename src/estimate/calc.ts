import { ESTIMATE } from '../site';

export type TierLine = { code: string; label: string; rate: number; patients: number; monthly: number };
export type Scenario = { key: string; label: string; enrolment: number; patients: number; monthly: number; annual: number; tiers: TierLine[] };

export function estimate(panel: number): Scenario[] {
  return ESTIMATE.scenarios.map((s) => {
    const tiers = ESTIMATE.tiers.map((t) => {
      const patients = Math.round(panel * t.share * s.enrolment);
      return { code: t.code, label: t.label, rate: t.rate, patients, monthly: patients * t.rate };
    });
    const monthly = tiers.reduce((n, t) => n + t.monthly, 0);
    return {
      key: s.key,
      label: s.label,
      enrolment: s.enrolment,
      patients: tiers.reduce((n, t) => n + t.patients, 0),
      monthly,
      annual: monthly * 12,
      tiers,
    };
  });
}

export const eligibleShare = ESTIMATE.tiers.reduce((n, t) => n + t.share, 0);

export const usd = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
