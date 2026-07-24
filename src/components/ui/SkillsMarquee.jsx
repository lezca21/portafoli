import { motion, useReducedMotion } from 'framer-motion';

function Row({ items, direction = 'left', duration = 26 }) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];
  const animate = reduce ? {} : { x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] };

  return (
    <div className="flex overflow-hidden">
      <motion.ul
        className="flex shrink-0 items-center gap-3 pr-3"
        animate={animate}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {loop.map((skill, i) => (
          <li
            key={i}
            className="whitespace-nowrap rounded-full border border-wine/20 bg-wine/5 px-5 py-2.5 text-sm font-medium text-wine transition-colors dark:border-gold/20 dark:bg-gold/5 dark:text-gold"
          >
            {skill}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

/**
 * SkillsMarquee — "barra de lo que sé hacer": dos filas de chips que
 * se desplazan en bucle continuo, cada una en dirección opuesta.
 */
export default function SkillsMarquee({ items }) {
  const half = Math.ceil(items.length / 2);
  const row1 = items.slice(0, half);
  const row2 = items.slice(half);

  return (
    <div className="-mx-6 space-y-3 sm:-mx-8 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <Row items={row1} direction="left" duration={28} />
      <Row items={row2.length ? row2 : row1} direction="right" duration={24} />
    </div>
  );
}
