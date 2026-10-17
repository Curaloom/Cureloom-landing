import type { ReactNode } from 'react';
import AnimatedContent from './reactbits/Animations/AnimatedContent/AnimatedContent';

export function SectionHeading({ eyebrow, title, lede }: { eyebrow: string; title: ReactNode; lede?: ReactNode }) {
  return (
    <AnimatedContent distance={24} duration={0.8} ease="power2.out" threshold={0.2}>
      <div className="section-head">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="display-2">{title}</h2>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </AnimatedContent>
  );
}
