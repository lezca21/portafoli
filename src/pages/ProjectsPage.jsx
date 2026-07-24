import { proyectos } from '../data/proyectos';
import { Item, Reveal, Stagger } from '../components/ui/Reveal';
import ProjectCard from '../components/ProjectCard';
import Mascot from '../components/ui/Mascot';

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden bg-wine-950 pb-28 pt-40 text-cream dark:bg-night">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-wine/40 blur-[130px]" />

      <div className="container-x relative z-10">
        <div className="mb-16 max-w-2xl">
          <Reveal className="flex items-center gap-3">
            <Mascot size={44} />
            <p className="eyebrow text-gold">Todo mi trabajo</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 font-script text-3xl text-rose">Cada proyecto, una historia</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-2 text-balance text-4xl font-semibold leading-tight text-cream sm:text-5xl">
              Proyectos & referencias.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-pretty text-lg text-cream/70">
              Una selección de exploraciones en diseño, estrategia y fotografía. Haz clic en
              cualquiera para ver el caso completo.
            </p>
          </Reveal>
        </div>

        {/* 2 columnas (no 3) a propósito: así las tarjetas quedan igual de
            grandes que en el inicio y los degradados de color no pierden fuerza */}
        <Stagger className="grid gap-6 sm:grid-cols-2" amount={0.05}>
          {proyectos.map((project, i) => (
            <Item key={project.slug}>
              <ProjectCard project={project} index={i} />
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
