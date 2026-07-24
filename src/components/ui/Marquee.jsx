import { motion, useReducedMotion } from 'framer-motion';

// Estrella decorativa entre palabras
function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mx-6 h-4 w-4 shrink-0 text-gold sm:mx-10"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c.6 6 5.4 10.8 12 12-6.6 1.2-11.4 6-12 12-.6-6-5.4-10.8-12-12C6.6 10.8 11.4 6 12 0z" />
    </svg>
  );
}

/**
 * Marquee — cinta de texto que se desplaza infinitamente.
 */
export default function Marquee({ items, duration = 34 }) {
  const reduce = useReducedMotion();
  // Duplicamos el contenido para que el bucle sea perfecto
  const loop = [...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <motion.ul
        className="flex shrink-0 items-center"
        animate={reduce ? {} : { x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <li key={i} className="flex items-center">
            <span className="font-serif text-2xl italic tracking-tight sm:text-4xl md:text-5xl">
              {item}
            </span>
            <Star />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
