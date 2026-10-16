import ScrollReveal from '../components/reactbits/TextAnimations/ScrollReveal/ScrollReveal';

export function Manifesto() {
  return (
    <section className="section manifesto">
      <div className="container">
        <ScrollReveal
          splitBy="words"
          effect="rise"
          mode="scrub"
          enableBlur
          blurStrength={5}
          baseOpacity={0.1}
          baseRotation={1.5}
          stagger={0.04}
          highlightColor="#0f968a"
        >
          A loom holds many threads under tension at once. That is what good chronic care looks like: fifteen, fifty, five hundred patients, each checked in on before anything snaps. Cureloom keeps the threads taut so your team can spend its attention where it matters.
        </ScrollReveal>
        <div className="manifesto__sig">Why we named it Cureloom</div>
      </div>
    </section>
  );
}
