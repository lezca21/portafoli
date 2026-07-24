import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../../data/content';

/**
 * Mascot — "Soleza", el solecito de Sofía, dentro de una insignia
 * color crema para que se vea bien en modo claro y oscuro.
 * Con "float" hace un suave vaivén flotante.
 */
export default function Mascot({ size = 56, float = false, className = '' }) {
  const reduce = useReducedMotion();
  const animate = float && !reduce ? { y: [0, -8, 0], rotate: [0, -4, 0] } : {};

  return (
    <motion.span
      className={`inline-grid place-items-center rounded-full bg-cream shadow-soft ring-1 ring-wine/10 ${className}`}
      style={{ width: size, height: size }}
      animate={animate}
      transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
    >
      <img
        src={site.mascot}
        alt="Soleza, la mascota de Sofía"
        className="h-[68%] w-[68%] object-contain"
        draggable="false"
      />
    </motion.span>
  );
}
