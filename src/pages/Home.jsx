import { marqueeItems } from '../data/content';
import Hero from '../components/Hero';
import Marquee from '../components/ui/Marquee';
import About from '../components/About';
import Projects from '../components/Projects';
import Photography from '../components/Photography';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Cinta de texto en movimiento — mismo tono vino del Hero, sin costura */}
      <div className="relative bg-wine py-6 text-cream dark:bg-wine-900">
        <Marquee items={marqueeItems} />
      </div>

      <About />
      <Projects />
      <Photography />
      <Contact />
    </>
  );
}
