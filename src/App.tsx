import ClickSpark from './components/reactbits/Animations/ClickSpark/ClickSpark';
import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { TrustStrip } from './sections/TrustStrip';
import { Stats } from './sections/Stats';
import { Manifesto } from './sections/Manifesto';
import { HowItWorks } from './sections/HowItWorks';
import { Marquee } from './sections/Marquee';
import { Platform } from './sections/Platform';
import { Teams } from './sections/Teams';
import { Principles } from './sections/Principles';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

export function App() {
  return (
    <ClickSpark sparkColor="#9bebd5" sparkSize={11} sparkRadius={26} sparkCount={8} duration={520} glow={0.4}>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Stats />
        <Manifesto />
        <HowItWorks />
        <Marquee />
        <Platform />
        <Teams />
        <Principles />
        <CTA />
      </main>
      <Footer />
    </ClickSpark>
  );
}
