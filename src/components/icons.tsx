import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, props: IconProps) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
});

export function ArrowRight({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export function Phone({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function Flag({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
    </svg>
  );
}

export function Clock({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function Note({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5M10 13h6M10 17h6" />
    </svg>
  );
}

export function Stamp({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M8 20h8M6 16h12a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-1l1-5a3 3 0 1 0-6 0l1 5H8a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1z" />
    </svg>
  );
}

export function Shield({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function Pulse({ size = 20, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M3 12h4l2.5-6 4 12 2.5-6h5" />
    </svg>
  );
}

export const FEATURE_ICONS = {
  phone: Phone,
  flag: Flag,
  clock: Clock,
  note: Note,
  stamp: Stamp,
  shield: Shield,
} as const;

export type FeatureIconName = keyof typeof FEATURE_ICONS;
