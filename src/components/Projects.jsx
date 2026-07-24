import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { proyectos } from '../data/proyectos';
import { Item, Reveal, Stagger } from './ui/Reveal';
import ProjectCard from './ProjectCard';

// Vista previa en el inicio — el listado completo vive en /proyectos
const preview = proyectos.slice(0, 4);

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-wine-950 py-24 text-cream sm:py-32 dark:bg-night"
    >
      {/* Resplandor superior */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-wine/40 blur-[130px]" />

      <div className="container-x relative z-10">
        {/* Encabezado */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-gold">Trabajo seleccionado</p>
              <p className="mt-2 font-script text-3xl text-rose">Lo que he creado</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-2 max-w-xl text-balance text-4xl font-semibold leading-tight text-cream sm:text-5xl">
                Proyectos & referencias.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              to="/proyectos"
              className="group inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Ver todos los proyectos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Cuadrícula (vista previa) */}
        <Stagger className="grid gap-6 md:grid-cols-2" amount={0.1}>
          {preview.map((project, i) => (
            <Item key={project.slug}>
              <ProjectCard project={project} index={i} />
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
