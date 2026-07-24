import { motion, useReducedMotion } from 'framer-motion';

// Curva de suavizado tipo "premium" (ease-out expresivo)
const EASE = [0.22, 1, 0.36, 1];

const directions = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Reveal — envuelve cualquier contenido para que aparezca con
 * "fade-in + slide" cuando entra en pantalla al hacer scroll.
 */
export function Reveal({
  children,
  as = 'div',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.25,
  className = '',
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const offset = directions[direction] || directions.up;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Stagger — contenedor que revela a sus hijos <Item> uno tras otro.
 */
export function Stagger({
  children,
  as = 'div',
  className = '',
  stagger = 0.12,
  delayChildren = 0.05,
  once = true,
  amount = 0.2,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Item — cada elemento hijo de <Stagger>. */
export function Item({ children, as = 'div', direction = 'up', className = '', ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const offset = directions[direction] || directions.up;

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offset },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.65, ease: EASE },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
