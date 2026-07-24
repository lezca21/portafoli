import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { hero, site } from '../data/content';
import assetUrl from '../utils/assetUrl';
import Mascot from './ui/Mascot';

const EASE = [0.22, 1, 0.36, 1];

/** Estrellita que brilla (parpadea) en bucle — el mismo motivo de 4 puntas usado en la cinta y en "Sobre mí". */
function Sparkle({ className = '', size = 16, delay = 0, duration = 2.4 }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`pointer-events-none absolute text-gold ${className}`}
      style={{ width: size, height: size }}
      animate={{ opacity: [0.15, 1, 0.15], scale: [0.7, 1.15, 0.7] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M12 0c.6 6 5.4 10.8 12 12-6.6 1.2-11.4 6-12 12-.6-6-5.4-10.8-12-12C6.6 10.8 11.4 6 12 0z" />
    </motion.svg>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[92vh] items-center overflow-hidden pb-24 pt-40 text-cream"
    >
      {/* Fondo vinotinto oscuro, sin aclarar — se funde sin costura con la cinta de abajo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#2C0109_0%,#5C0212_32%,#790216_68%,#790216_100%)] dark:bg-[linear-gradient(180deg,#1A0C0D_0%,#301618_35%,#3d1d1f_68%,#42010d_100%)]"
      />
      <div className="grain absolute inset-0 -z-10 opacity-60" />

      {/* Resplandores decorativos — sutiles, solo en las esquinas */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-48 -top-40 h-[30rem] w-[30rem] rounded-full bg-gold/[0.14] blur-[130px]"
      />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[22rem] w-[22rem] rounded-full bg-ember/[0.14] blur-[120px]" />

      {/* Estrellitas brillando, dispersas por el fondo */}
      <Sparkle className="left-[6%] top-[22%]" size={14} delay={0} duration={2.2} />
      <Sparkle className="left-[38%] top-[14%]" size={10} delay={0.6} duration={2.6} />
      <Sparkle className="right-[6%] top-[62%] hidden sm:block" size={18} delay={1.1} duration={2.8} />
      <Sparkle className="left-[14%] top-[78%]" size={12} delay={1.6} duration={2.4} />
      <Sparkle className="left-[46%] top-[70%] hidden lg:block" size={9} delay={0.3} duration={2.1} />

      <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---------- Texto (breve y directo) ---------- */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow text-gold">{hero.eyebrow}</span>
          </motion.div>

          <motion.p variants={item} className="mb-2 font-script text-3xl text-rose sm:text-4xl">
            {hero.greeting}
          </motion.p>

          <h1 className="text-balance font-serif text-6xl font-semibold leading-[1.02] tracking-tight text-cream sm:text-7xl lg:text-8xl">
            {hero.titleLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '110%' },
                    show: { y: 0, transition: { duration: 0.9, ease: EASE } },
                  }}
                  className={`inline-block ${line.accent ? 'italic text-gold' : ''}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Botón + meta */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-5">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/proyectos"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-night shadow-soft"
              >
                {hero.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <span className="flex items-center gap-1.5 text-sm text-cream/70">
              <MapPin className="h-4 w-4" />
              {site.location}
            </span>
          </motion.div>
        </motion.div>

        {/* ---------- Foto ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.25 }}
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto"
        >
          {/* Cuadrito dorado punteado girando lento, envolviendo la foto */}
          <div className="absolute -inset-6 -z-10 animate-spin-slow rounded-[2.5rem] border-2 border-dashed border-gold/50" />

          <motion.div
            style={{ y: photoY }}
            className="relative rotate-[-3deg] rounded-[2rem] border-4 border-cream bg-cream p-2 shadow-card"
          >
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={assetUrl(hero.photo)}
                alt="Sofía Lezcano"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* Pie tipo polaroid */}
            <div className="flex items-center justify-between px-3 py-3">
              <span className="font-script text-2xl text-wine">Sofía</span>
              <span className="eyebrow text-[10px] text-ink/50">{hero.photoCaption}</span>
            </div>
          </motion.div>

          {/* Mascota flotante */}
          <div className="absolute -bottom-5 -left-5">
            <Mascot size={76} float />
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 md:flex"
      >
        <span className="eyebrow text-[10px]">Desliza</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="block h-9 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.a>
    </section>
  );
}
