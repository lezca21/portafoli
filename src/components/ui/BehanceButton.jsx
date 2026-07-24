import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { Behance } from './BrandIcons';

/**
 * BehanceButton — tarjeta destacada con un botón elegante que lleva
 * directo al proyecto en Behance (se abre en una pestaña nueva).
 *
 * `inline`: si es true, no agrega su propio contenedor "container-x"
 * ni lo centra con un ancho máximo — se usa cuando ya va anidado
 * dentro de otra columna (ej. debajo de "Logros y reconocimientos").
 */
export default function BehanceButton({ url, inline = false }) {
  if (!url) return null;

  const card = (
    <Reveal
      className={`relative overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-50 px-8 py-12 text-center shadow-card dark:border-cream/10 dark:bg-night-800 ${
        inline ? 'mt-8' : 'mx-auto max-w-xl'
      }`}
    >
      {/* Resplandor decorativo */}
      <div className="pointer-events-none absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gold/20 blur-[80px]" />

      <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-wine text-cream shadow-soft dark:bg-gold dark:text-night">
        <Behance className="h-7 w-7" />
      </div>

      <p className="relative mt-6 font-script text-3xl text-ember dark:text-rose">
        Caso completo
      </p>
      <h3 className="relative mt-1 font-serif text-2xl font-semibold text-ink dark:text-cream">
        Míralo en Behance
      </h3>

      <motion.a
        href={url}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="group relative mt-7 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-wine via-ember to-gold px-8 py-4 text-sm font-semibold text-cream shadow-soft"
      >
        <Behance className="h-4 w-4" />
        Ver proyecto en Behance
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </motion.a>
    </Reveal>
  );

  if (inline) return card;

  return <div className="container-x mt-16">{card}</div>;
}
