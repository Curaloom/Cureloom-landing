import ScrollVelocity from '../components/reactbits/TextAnimations/ScrollVelocity/ScrollVelocity';
import { MARQUEE } from '../site';

export function Marquee() {
  const line = MARQUEE.join(' · ');
  return (
    <section className="marquee" aria-hidden="true">
      <ScrollVelocity
        texts={[line, line]}
        velocity={55}
        numCopies={4}
        className="marquee__text"
        separator="·"
        gap={28}
        outlineAlternate
      />
    </section>
  );
}
