import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Carousel — una fila horizontal que se puede arrastrar (mouse/touch)
 * o navegar con flechas. Los hijos deben tener un ancho fijo (ej. w-80 shrink-0).
 */
export default function Carousel({ children, gap = 20, className = '' }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    function measure() {
      if (!containerRef.current || !trackRef.current) return;
      const overflow = trackRef.current.scrollWidth - containerRef.current.offsetWidth;
      const next = overflow > 0 ? overflow : 0;
      setMaxScroll(next);
      setAtEnd(x.get() <= -next + 1);
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  useMotionValueEvent(x, 'change', (latest) => {
    setAtStart(latest >= -1);
    setAtEnd(latest <= -maxScroll + 1);
  });

  const scrollByCard = (direction) => {
    const card = trackRef.current?.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + gap : 320;
    const target = Math.min(0, Math.max(-maxScroll, x.get() - direction * step));
    animate(x, target, { type: 'spring', stiffness: 300, damping: 34 });
  };

  return (
    <div className={`relative ${className}`}>
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex cursor-grab active:cursor-grabbing"
          style={{ x, gap }}
          drag={maxScroll > 0 ? 'x' : false}
          dragConstraints={{ left: -maxScroll, right: 0 }}
          dragElastic={0.06}
        >
          {children}
        </motion.div>
      </div>

      {maxScroll > 0 && (
        <>
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Anterior"
            className="absolute -left-4 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full border border-ink/10 bg-cream shadow-soft transition-opacity disabled:opacity-0 sm:grid dark:border-cream/10 dark:bg-night-800"
          >
            <span className="grid h-11 w-11 place-items-center">
              <ChevronLeft className="h-5 w-5 text-ink dark:text-cream" />
            </span>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Siguiente"
            className="absolute -right-4 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full border border-ink/10 bg-cream shadow-soft transition-opacity disabled:opacity-0 sm:grid dark:border-cream/10 dark:bg-night-800"
          >
            <span className="grid h-11 w-11 place-items-center">
              <ChevronRight className="h-5 w-5 text-ink dark:text-cream" />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
