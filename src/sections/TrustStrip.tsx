import LogoLoop from '../components/reactbits/Animations/LogoLoop/LogoLoop';
import { BUILT_FOR } from '../site';

export function TrustStrip() {
  const logos = BUILT_FOR.map((label) => ({
    node: <span className="trust__item">{label}</span>,
    title: label,
  }));
  return (
    <section className="trust" aria-label="Who Cureloom is built for">
      <div className="trust__label">Built for the teams who carry chronic care</div>
      <LogoLoop
        logos={logos}
        speed={46}
        direction="left"
        logoHeight={24}
        gap={44}
        pauseOnHover
        fadeOut
        fadeOutColor="#050a12"
        ariaLabel="Specialties and organisations Cureloom is built for"
      />
    </section>
  );
}
