import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

/**
 * Botón para cambiar entre modo claro y oscuro,
 * con una transición suave del ícono.
 */
export default function ThemeToggle({ theme, toggle, small = false }) {
  const isDark = theme === 'dark';
  const size = small ? 'h-9 w-9' : 'h-10 w-10';
  const iconSize = small ? 'h-4 w-4' : 'h-[18px] w-[18px]';
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      className={`relative grid ${size} shrink-0 place-items-center overflow-hidden rounded-full text-ink transition-colors hover:text-wine dark:text-cream dark:hover:text-gold`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="absolute"
        >
          {isDark ? <Moon className={iconSize} /> : <Sun className={iconSize} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
