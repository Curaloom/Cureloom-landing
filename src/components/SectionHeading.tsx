import type { ReactNode } from 'react';
import AnimatedContent from './reactbits/Animations/AnimatedContent/AnimatedContent';

export function SectionHeading({
  eyebrow,
  title,
  lede,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  center?: boolean;
}) {
  return (
    <AnimatedContent distance={40} duration={0.9} blur={6} threshold={0.2}>
      <div className={`section-head${center ? ' section-head--center' : ''}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2">{title}</h2>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </AnimatedContent>
  );
}
