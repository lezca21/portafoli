import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Award } from 'lucide-react';
import { getAdyacentes, getProyectoBySlug } from '../data/proyectos';
import { Reveal } from '../components/ui/Reveal';
import BehanceButton from '../components/ui/BehanceButton';
import EmbedGrid, { EmbedCard } from '../components/ui/EmbedGrid';

const gradients = {
  wine: 'from-wine-600 via-wine-800 to-wine-950',
  ember: 'from-ember via-wine-700 to-wine-950',
  gold: 'from-gold via-ember to-wine-800',
  rose: 'from-rose via-ember to-wine-800',
  night: 'from-night-600 via-wine-950 to-night',
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProyectoBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) return <Navigate to="/proyectos" replace />;

  const { prev, next } = getAdyacentes(slug);

  return (
    <article>
      {/* ---------- Portada ---------- */}
      <header className="relative flex min-h-[70vh] items-end overflow-hidden pt-32">
        {project.headerImage || project.cover ? (
          <img
            src={project.headerImage || project.cover}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div
            className={`absolute inset-0 ${
              project.colors ? '' : `bg-gradient-to-br ${gradients[project.theme] || gradients.wine}`
            }`}
            style={
              project.colors
                ? { background: `linear-gradient(135deg, ${project.colors.join(', ')})` }
                : undefined
            }
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-wine-950/95 via-wine-950/40 to-wine-950/10" />

        <div className="container-x relative z-10 pb-16 text-cream">
          <Reveal>
            <Link
              to="/proyectos"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Todos los proyectos
            </Link>
          </Reveal>
          <Reveal delay={0.05} className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cream/25 bg-wine-950/40 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {project.category}
            </span>
            <span className="font-serif text-sm italic text-cream/70">{project.year}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.05] sm:text-7xl">
              {project.title}
            </h1>
          </Reveal>
        </div>
      </header>

      {/* ---------- Contenido ---------- */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          {/* Resumen + Etiquetas — párrafo normal, a todo el ancho (sin caja) */}
          <Reveal>
            <p className="eyebrow text-wine dark:text-gold">Resumen</p>
            <p className="mt-3 text-pretty text-lg leading-relaxed text-ink/75 dark:text-cream/75">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-wine/20 bg-wine/5 px-4 py-1.5 text-sm font-medium text-wine dark:border-gold/20 dark:bg-gold/5 dark:text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Secciones "full" — texto plano a todo el ancho, igual que el
              Resumen (sin tarjeta). Van antes de las que sí van en cuadrícula. */}
          {project.content
            .filter((block) => typeof block === 'object' && block.full)
            .map((block, i) => (
              <Reveal key={block.heading || i} delay={0.05 + i * 0.05} className="mt-10">
                {block.heading && (
                  <p className="eyebrow text-wine dark:text-gold">{block.heading}</p>
                )}
                <p className="mt-3 text-pretty text-lg leading-relaxed text-ink/75 dark:text-cream/75">
                  {block.text}
                </p>
              </Reveal>
            ))}

          {/* Resto de las secciones, una al lado de la otra en tarjetas —
              cada elemento puede ser un párrafo simple (string) o una
              sección con título: { heading, text, items? } */}
          {(() => {
            const gridBlocks = project.content.filter(
              (block) => !(typeof block === 'object' && block.full),
            );
            return (
              <div
                className={`mt-14 grid gap-6 ${
                  gridBlocks.length >= 3
                    ? 'sm:grid-cols-2 lg:grid-cols-3'
                    : gridBlocks.length === 2
                      ? 'sm:grid-cols-2'
                      : ''
                }`}
              >
                {gridBlocks.map((block, i) => {
                  const isSection = typeof block === 'object';
                  return (
                    <Reveal
                      key={i}
                      delay={i * 0.08}
                      className="h-full rounded-3xl border border-ink/10 bg-cream-50 p-7 shadow-sm dark:border-cream/10 dark:bg-night-800"
                    >
                      {isSection && block.heading && (
                        <h3 className="mb-3 font-serif text-xl font-semibold text-wine dark:text-gold">
                          {block.heading}
                        </h3>
                      )}
                      <p className="text-pretty text-base leading-relaxed text-ink/75 dark:text-cream/75">
                        {isSection ? block.text : block}
                      </p>
                      {isSection && block.items?.length > 0 && (
                        <ul className="mt-4 space-y-3">
                          {block.items.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-3 text-pretty text-sm leading-relaxed text-ink/75 dark:text-cream/75"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wine dark:bg-gold" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Reveal>
                  );
                })}
              </div>
            );
          })()}
        </div>

        {/* Logros y reconocimientos, con una mini-galería de fotos al lado (si tiene) —
            usa el mismo ancho/margen (container-x) que el resto de la página, sin
            centrarlo aparte, para que quede alineado con las secciones de arriba. */}
        {(project.highlights?.length > 0 || project.gallery?.length > 0) && (
          <div className="container-x mt-16">
            <div
              className={`grid gap-14 ${
                project.highlights?.length > 0 && project.gallery?.length > 0
                  ? 'lg:grid-cols-2 lg:items-start'
                  : ''
              }`}
            >
              {/* Logros */}
              {project.highlights?.length > 0 && (
                <Reveal>
                  <p className="eyebrow text-wine dark:text-gold">Logros y reconocimientos</p>
                  <ul className="mt-6 space-y-4">
                    {project.highlights.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-cream-50 p-5 shadow-sm dark:border-cream/10 dark:bg-night-800"
                      >
                        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-wine/10 text-wine dark:bg-gold/10 dark:text-gold">
                          <Award className="h-[18px] w-[18px]" />
                        </span>
                        <p className="text-pretty text-base leading-relaxed text-ink/80 dark:text-cream/80">
                          {item}
                        </p>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Botón de Behance, pegado debajo de los logros (misma columna izquierda) */}
                  <BehanceButton url={project.behanceUrl} inline />
                </Reveal>
              )}

              {/* Mini-galería de momentos, con animación en hover */}
              {project.gallery?.length > 0 && (
                <Reveal delay={0.1}>
                  {project.highlights?.length > 0 && (
                    <p className="eyebrow text-wine dark:text-gold">Momentos</p>
                  )}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {project.gallery.map((item, i) => {
                      const src = typeof item === 'string' ? item : item.src;
                      const caption = typeof item === 'string' ? null : item.caption;
                      const rotations = ['-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];
                      return (
                        <motion.div
                          key={src}
                          initial={{ opacity: 0, scale: 0.9, y: 16 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 0.55,
                            delay: i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
                          className={`group relative cursor-default overflow-hidden rounded-2xl border-4 border-cream bg-cream shadow-soft transition-shadow duration-300 hover:shadow-card dark:border-night-700 ${
                            rotations[i % rotations.length]
                          }`}
                        >
                          <div className="aspect-square overflow-hidden rounded-lg">
                            <img
                              src={src}
                              alt={caption || project.title}
                              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                          </div>
                          {caption && (
                            <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-wine-950/80 via-wine-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <span className="p-3 font-script text-lg text-cream">{caption}</span>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        )}

        {project.highlights?.length > 0 ? (
          /* El botón de Behance ya se agregó arriba, pegado a los logros
             — aquí solo faltan los documentos incrustados, si tiene */
          <EmbedGrid embeds={project.embeds} title={project.title} />
        ) : project.behanceUrl && project.embeds?.length > 0 ? (
          /* Sin logros, pero con documentos Y Behance a la vez: van uno
             al lado del otro — documento(s) a la izquierda, botón a la
             derecha */
          <div className="container-x mt-16">
            <Reveal className="text-center">
              <p className="eyebrow text-wine dark:text-gold">Ver el proceso</p>
              <p className="mt-2 font-script text-3xl text-ember dark:text-rose">
                Documentos y caso completo
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:items-start">
              <div>
                {project.embeds.map((embed, i) => (
                  <EmbedCard
                    key={embed.url}
                    embed={embed}
                    projectTitle={project.title}
                    delay={i * 0.08}
                  />
                ))}
              </div>
              <BehanceButton url={project.behanceUrl} inline />
            </div>
          </div>
        ) : (
          <>
            {/* Botón hacia el proyecto en Behance (si tiene, y va solo) */}
            <BehanceButton url={project.behanceUrl} />

            {/* Documentos incrustados: Canva, Figma, etc. (si tiene, y van solos) */}
            <EmbedGrid embeds={project.embeds} title={project.title} />
          </>
        )}
      </section>

      {/* ---------- Navegación entre proyectos ---------- */}
      <nav className="grid grid-cols-1 border-t border-ink/10 sm:grid-cols-2 dark:border-cream/10">
        {prev && (
          <Link
            to={`/proyectos/${prev.slug}`}
            className="group flex items-center gap-4 border-b border-ink/10 p-8 transition-colors hover:bg-wine/5 sm:border-b-0 sm:border-r dark:border-cream/10 dark:hover:bg-gold/5"
          >
            <ArrowLeft className="h-5 w-5 shrink-0 text-wine transition-transform group-hover:-translate-x-1 dark:text-gold" />
            <div>
              <p className="eyebrow text-ink/50 dark:text-cream/50">Anterior</p>
              <p className="mt-1 font-serif text-xl text-ink dark:text-cream">{prev.title}</p>
            </div>
          </Link>
        )}
        {next && (
          <Link
            to={`/proyectos/${next.slug}`}
            className="group flex items-center justify-end gap-4 p-8 text-right transition-colors hover:bg-wine/5 dark:hover:bg-gold/5"
          >
            <div>
              <p className="eyebrow text-ink/50 dark:text-cream/50">Siguiente</p>
              <p className="mt-1 font-serif text-xl text-ink dark:text-cream">{next.title}</p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-wine transition-transform group-hover:translate-x-1 dark:text-gold" />
          </Link>
        )}
      </nav>

      {/* CTA final */}
      <div className="container-x py-16 text-center">
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-block">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 rounded-full bg-wine px-7 py-3.5 text-sm font-semibold text-cream shadow-soft dark:bg-gold dark:text-night"
          >
            Ver todos los proyectos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
