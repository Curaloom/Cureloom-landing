export function LogoMark({ size = 28, color = '#1e4d3b' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="15 14 35 36" aria-hidden="true">
      <path
        d="M20 32c0-7.2 5.4-13 12.5-13 3.6 0 6.8 1.5 9.1 4"
        fill="none"
        stroke={color}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d="M41.6 41c-2.3 2.5-5.5 4-9.1 4C25.4 45 20 39.2 20 32"
        fill="none"
        stroke={color}
        strokeWidth="5.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <circle cx="44" cy="32" r="3.6" fill={color} />
    </svg>
  );
}

export function Wordmark({ color = 'currentColor', size = 22 }: { color?: string; size?: number }) {
  return (
    <span className="wordmark" style={{ color, fontSize: size }}>
      <LogoMark size={Math.round(size * 1.1)} color={color} />
      <span>Curalooms</span>
    </span>
  );
}
