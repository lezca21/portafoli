import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { photography, site } from '../data/content';
import assetUrl from '../utils/assetUrl';
import { Reveal } from './ui/Reveal';
import { Instagram } from './ui/BrandIcons';

export default function Photography() {
  const photos = photography.photos;
  const [index, setIndex] = useState(null); // null = cerrado
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % photos.length),
    [photos.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + photos.length) % photos.length),
    [photos.length],
  );

  // Teclado: Esc para cerrar, flechas para navegar
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, next, prev]);

  return (
    <section id="fotografia" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        {/* Encabezado */}
        <div className="mb-14 text-center">
          <Reveal>
            <p className="eyebrow text-wine dark:text-gold">{photography.eyebrow}</p>
            <p className="mt-2 font-script text-4xl text-ember dark:text-rose sm:text-5xl">
              {photography.script}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 text-balance text-4xl font-semibold text-ink dark:text-cream sm:text-5xl">
              {photography.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-ink/65 dark:text-cream/65">
              {photography.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-7">
            <motion.a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-ember via-wine to-gold px-7 py-3.5 text-sm font-semibold text-cream shadow-soft"
            >
              <Instagram className="h-4 w-4" />
              {photography.instagramLabel}
            </motion.a>
          </Reveal>
        </div>

        {/* Galería tipo masonry */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-3xl border-4 border-cream bg-cream text-left shadow-soft dark:border-night-700"
            >
              <div className="overflow-hidden rounded-[1.25rem]">
                <img
                  src={assetUrl(photo.src)}
                  alt={photo.caption}
                  className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
              </div>
              {/* Velo + descripción */}
              <div className="pointer-events-none absolute inset-1 rounded-[1.25rem] bg-gradient-to-t from-wine-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="font-script text-2xl text-cream drop-shadow">
                  {photo.caption}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/90 text-wine">
                  <Plus className="h-4 w-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ---------- Lightbox ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed inset-0 z-[60] grid place-items-center bg-night/90 p-4 backdrop-blur-md sm:p-8"
          >
            {/* Cerrar */}
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Anterior */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Imagen */}
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="flex max-h-[85vh] max-w-3xl flex-col items-center"
              >
                <img
                  src={assetUrl(photos[index].src)}
                  alt={photos[index].caption}
                  className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-card"
                />
                <figcaption className="mt-4 font-script text-3xl text-cream">
                  {photos[index].caption}
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {/* Siguiente */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
