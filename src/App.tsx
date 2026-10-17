import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { Why } from './sections/Why';
import { HowItWorks } from './sections/HowItWorks';
import { Platform } from './sections/Platform';
import { Teams } from './sections/Teams';
import { Principles } from './sections/Principles';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Why />
        <HowItWorks />
        <Platform />
        <Teams />
        <Principles />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
