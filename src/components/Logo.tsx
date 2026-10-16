export function LogoMark({ size = 28, tight = false }: { size?: number; tight?: boolean }) {
  return (
    <svg width={size} height={size} viewBox={tight ? '15 14 35 36' : '0 0 64 64'} aria-hidden="true">
      <defs>
        <linearGradient id="cl-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#13B5A3" />
          <stop offset="0.55" stopColor="#7CC8FF" />
          <stop offset="1" stopColor="#B8A6FF" />
        </linearGradient>
      </defs>
      <path
        d="M20 32c0-7.2 5.4-13 12.5-13 3.6 0 6.8 1.5 9.1 4"
        fill="none"
        stroke="url(#cl-g)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M41.6 41c-2.3 2.5-5.5 4-9.1 4C25.4 45 20 39.2 20 32"
        fill="none"
        stroke="url(#cl-g)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="44" cy="32" r="4" fill="#9BEBD5" />
    </svg>
  );
}
