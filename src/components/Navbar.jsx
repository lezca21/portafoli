import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { site } from '../data/content';
import Mascot from './ui/Mascot';
import ThemeToggle from './ui/ThemeToggle';

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre mí', to: '/#sobre-mi' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Fotografía', to: '/#fotografia' },
  { label: 'Contacto', to: '/#contacto' },
];

/** Pastilla de navegación central: enlaces con morphing al pasar el cursor. */
function NavPill() {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  const isActive = (to) => {
    if (to === '/proyectos') return location.pathname.startsWith('/proyectos');
    if (to === '/') return location.pathname === '/' && !location.hash;
    return location.pathname === '/' && location.hash === to.replace('/', '');
  };

  return (
    <ul
      onMouseLeave={() => setHovered(null)}
      className="hidden items-center gap-1 rounded-full border border-ink/10 bg-cream/70 p-1.5 shadow-soft backdrop-blur-lg md:flex dark:border-cream/10 dark:bg-night-800/70"
    >
      {links.map((link) => {
        const active = isActive(link.to);
        return (
          <li key={link.to} className="relative" onMouseEnter={() => setHovered(link.to)}>
            {(hovered === link.to || (!hovered && active)) && (
              <motion.span
                layoutId="nav-pill"
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                className="absolute inset-0 rounded-full bg-wine dark:bg-gold"
              />
            )}
            <Link
              to={link.to}
              className={`relative z-10 block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                hovered === link.to || active
                  ? 'text-cream dark:text-night'
                  : 'text-ink/75 dark:text-cream/75'
              }`}
            >
              <motion.span whileTap={{ scale: 0.9 }} className="inline-block">
                {link.label}
              </motion.span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5"
    >
      <div className="container-x flex items-center justify-between gap-3">
        {/* Cápsula: Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 rounded-full border border-ink/10 bg-cream/70 py-1.5 pl-1.5 pr-4 shadow-soft backdrop-blur-lg transition-transform hover:scale-[1.02] dark:border-cream/10 dark:bg-night-800/70"
        >
          <Mascot size={38} />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-base font-semibold tracking-tight text-ink dark:text-cream">
              {site.name}
            </span>
            <span className="eyebrow mt-0.5 text-[8px] text-wine/70 dark:text-gold/80">
              Diseñadora
            </span>
          </span>
        </Link>

        {/* Cápsula: enlaces (escritorio) */}
        <NavPill />

        {/* Cápsula: acciones */}
        <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-cream/70 p-1.5 shadow-soft backdrop-blur-lg dark:border-cream/10 dark:bg-night-800/70">
          <ThemeToggle theme={theme} toggle={toggle} small />
          {/* Botón de menú (móvil) */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="grid h-9 w-9 place-items-center rounded-full text-ink md:hidden dark:text-cream"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil (panel flotante debajo de las cápsulas) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="container-x mt-3 md:hidden"
          >
            <motion.ul
              className="flex flex-col gap-1 rounded-3xl border border-ink/10 bg-cream/95 p-4 shadow-card backdrop-blur-lg dark:border-cream/10 dark:bg-night-800/95"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } } }}
            >
              {links.map((link) => (
                <motion.li
                  key={link.to}
                  variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
                >
                  <Link
                    to={link.to}
                    className="block rounded-2xl px-4 py-3 font-serif text-xl text-ink transition-colors hover:bg-wine/10 hover:text-wine dark:text-cream dark:hover:bg-gold/10 dark:hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
