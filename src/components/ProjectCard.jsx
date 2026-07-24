import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import assetUrl from '../utils/assetUrl';

// Degradados de respaldo cuando un proyecto no tiene portada
const gradients = {
  wine: 'from-wine-600 via-wine-800 to-wine-950',
  ember: 'from-ember via-wine-700 to-wine-950',
  gold: 'from-gold via-ember to-wine-800',
  rose: 'from-rose via-ember to-wine-800',
  night: 'from-night-600 via-wine-950 to-night',
};

/**
 * ProjectCard — tarjeta de proyecto con zoom + revelación de info en hover.
 * Se usa tanto en la vista previa del inicio como en /proyectos.
 */
export default function ProjectCard({ project, index = 0 }) {
  return (
    <Link
      to={`/proyectos/${project.slug}`}
      className="group relative block cursor-pointer overflow-hidden rounded-3xl border border-cream/10 shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {project.cover ? (
          <img
            src={assetUrl(project.cover)}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div
            className={`grid h-full w-full place-items-center transition-transform duration-700 ease-out group-hover:scale-[1.06] ${
              project.colors ? '' : `bg-gradient-to-br ${gradients[project.theme] || gradients.wine}`
            }`}
            style={
              project.colors
                ? { background: `linear-gradient(135deg, ${project.colors.join(', ')})` }
                : undefined
            }
          >
            <span className="select-none font-serif text-[7rem] font-semibold italic text-cream/15">
              0{index + 1}
            </span>
          </div>
        )}

        {/* Velo inferior para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-wine-950/95 via-wine-950/25 to-transparent" />

        {/* Etiquetas superiores */}
        <span className="absolute left-5 top-5 rounded-full border border-cream/25 bg-wine-950/40 px-3 py-1 text-xs font-medium text-cream backdrop-blur-sm">
          {project.category}
        </span>
        <span className="absolute right-5 top-5 font-serif text-sm italic text-cream/70">
          {project.year}
        </span>

        {/* Ícono de flecha que aparece */}
        <span className="absolute right-5 top-1/2 grid h-12 w-12 -translate-y-1/2 translate-x-4 place-items-center rounded-full bg-gold text-night opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>

      {/* Contenido (el detalle se revela en hover) */}
      <div className="absolute inset-x-0 bottom-0 p-7">
        <h3 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
          {project.title}
        </h3>
        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-52 group-hover:opacity-100">
          <p className="mt-3 text-pretty text-sm leading-relaxed text-cream/80">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-cream/10 px-3 py-1 text-xs text-cream/80">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
