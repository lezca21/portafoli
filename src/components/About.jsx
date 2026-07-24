import { Code2, FileText, LayoutGrid, Layers, Lightbulb, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { about, expertise, site, skills, tools } from '../data/content';
import assetUrl from '../utils/assetUrl';
import { Item, Reveal, Stagger } from './ui/Reveal';
import SkillsMarquee from './ui/SkillsMarquee';
import Carousel from './ui/Carousel';

const expertiseIconMap = { Layers, Lightbulb, Users, Target, Code2, LayoutGrid };

// Degradados de color por tarjeta — la misma familia visual que las de Proyectos
const expertiseGradients = {
  wine: 'from-wine-600 via-wine-800 to-wine-950',
  ember: 'from-ember via-wine-700 to-wine-950',
  gold: 'from-gold via-ember to-wine-800',
  rose: 'from-rose via-ember to-wine-800',
  night: 'from-night-600 via-wine-950 to-night',
  sunset: 'from-gold via-rose to-wine-800',
};

export default function About() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* ---------- Fotos ---------- */}
          <Reveal direction="right" className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="relative pb-16 pl-6 pt-6">
              {/* Foto trasera */}
              <div
                className="absolute left-0 top-0 w-[70%] rotate-[-6deg] rounded-2xl border-4 border-cream bg-cream p-2 shadow-soft dark:border-night-700"
                style={{ transform: `rotate(${about.photos[0].rotate}deg)` }}
              >
                <img
                  src={assetUrl(about.photos[0].src)}
                  alt="Sofía Lezcano"
                  className="aspect-[3/4] w-full rounded-xl object-cover"
                />
              </div>
              {/* Foto frontal */}
              <div
                className="relative ml-auto w-[70%] rounded-2xl border-4 border-cream bg-cream p-2 shadow-card dark:border-night-700"
                style={{ transform: `rotate(${about.photos[1].rotate}deg)` }}
              >
                <img
                  src={assetUrl(about.photos[1].src)}
                  alt="Sofía Lezcano"
                  className="aspect-[3/4] w-full rounded-xl object-cover"
                />
                <div className="px-2 py-2 text-right">
                  <span className="font-script text-xl text-wine dark:text-gold">
                    con cariño
                  </span>
                </div>
              </div>
              {/* Estrellita decorativa */}
              <svg
                viewBox="0 0 24 24"
                className="absolute -right-2 top-2 h-8 w-8 text-gold"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0c.6 6 5.4 10.8 12 12-6.6 1.2-11.4 6-12 12-.6-6-5.4-10.8-12-12C6.6 10.8 11.4 6 12 0z" />
              </svg>
            </div>
          </Reveal>

          {/* ---------- Texto ---------- */}
          <div>
            <Reveal>
              <p className="eyebrow text-wine dark:text-gold">{about.eyebrow}</p>
              <p className="mt-2 font-script text-3xl text-ember dark:text-rose">{about.script}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight text-ink dark:text-cream sm:text-5xl">
                {about.title}
              </h2>
            </Reveal>

            <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-ink/70 dark:text-cream/70">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {/* Botón destacado: hoja de vida */}
            <Reveal delay={0.12} className="mt-9">
              <motion.a
                href={assetUrl(site.cv)}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2.5 rounded-full bg-wine px-7 py-3.5 text-sm font-semibold text-cream shadow-soft dark:bg-gold dark:text-night"
              >
                <FileText className="h-4 w-4" />
                {about.cvLabel}
              </motion.a>
            </Reveal>

            {/* Herramientas */}
            <div className="mt-9">
              <Reveal delay={0.18}>
                <p className="eyebrow mb-4 text-ink/50 dark:text-cream/50">Herramientas</p>
              </Reveal>
              <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3" stagger={0.05} delayChildren={0.15}>
                {tools.map((tool) => (
                  <Item key={tool.name}>
                    <div className="flex h-full items-center gap-3 rounded-2xl border border-ink/10 bg-cream-50 px-3 py-3 shadow-sm transition-colors hover:border-wine/30 dark:border-cream/10 dark:bg-night-800 dark:hover:border-gold/30">
                      {/* Insignia siempre clara, para que los logos con líneas
                          oscuras (CapCut, Unity) se vean bien en modo oscuro */}
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white p-1.5 ring-1 ring-ink/5">
                        <img
                          src={assetUrl(tool.icon)}
                          alt={tool.name}
                          className="h-full w-full object-contain"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-ink dark:text-cream">
                          {tool.name}
                        </span>
                        {tool.subtitle && (
                          <span className="block truncate text-xs text-ink/50 dark:text-cream/50">
                            {tool.subtitle}
                          </span>
                        )}
                      </span>
                    </div>
                  </Item>
                ))}
              </Stagger>
            </div>
          </div>
        </div>

        {/* ---------- Áreas de especialidad ---------- */}
        <div className="mt-28">
          <div className="mx-auto max-w-xl text-center">
            <Reveal>
              <p className="eyebrow text-wine dark:text-gold">{expertise.eyebrow}</p>
              <p className="mt-2 font-script text-3xl text-ember dark:text-rose">
                {expertise.script}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-2 text-balance text-4xl font-semibold leading-tight text-ink dark:text-cream sm:text-5xl">
                {expertise.title}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-14">
            <Carousel gap={20}>
              {expertise.items.map((item, i) => {
                const Icon = expertiseIconMap[item.icon] || Layers;
                return (
                  <div
                    key={item.title}
                    className={`group relative h-[300px] w-[280px] shrink-0 select-none overflow-hidden rounded-3xl bg-gradient-to-br p-7 shadow-soft transition-shadow duration-300 hover:shadow-card sm:h-[270px] sm:w-[320px] ${
                      expertiseGradients[item.theme] || expertiseGradients.wine
                    }`}
                  >
                    {/* Capa oscura para que el texto crema siempre se lea bien,
                        sin importar qué tan claro sea el degradado de fondo */}
                    <div className="pointer-events-none absolute inset-0 bg-wine-950/55" />

                    {/* Número fantasma, estilo editorial */}
                    <span className="pointer-events-none absolute -right-1 -top-3 select-none font-serif text-7xl italic text-cream/10 transition-colors duration-300 group-hover:text-cream/20">
                      0{i + 1}
                    </span>

                    <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-cream/15 text-cream backdrop-blur-sm transition-colors duration-300 group-hover:bg-gold group-hover:text-night">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="relative mt-5 text-xl font-semibold text-cream">
                      {item.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-cream/75">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </Carousel>
          </Reveal>
        </div>

        {/* ---------- Lo que sé hacer (barra animada en bucle) ---------- */}
        <Reveal className="mt-14">
          <p className="eyebrow mb-6 text-center text-ink/50 dark:text-cream/50">
            Lo que sé hacer
          </p>
          <SkillsMarquee items={skills} />
        </Reveal>
      </div>
    </section>
  );
}
