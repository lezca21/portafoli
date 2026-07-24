import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

/** Una tarjeta con un documento incrustado + su enlace "Ver en X". */
export function EmbedCard({ embed, projectTitle, delay = 0 }) {
  return (
    <Reveal delay={delay} className="mb-6">
      <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-50 p-3 shadow-card dark:border-cream/10 dark:bg-night-800">
        <div
          className="relative w-full overflow-hidden rounded-[1.5rem] bg-night-700"
          style={{ paddingTop: `${embed.ratio}%` }}
        >
          <iframe
            loading="lazy"
            src={embed.url}
            title={`${embed.title} — ${projectTitle}`}
            allow="fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        <div className="px-2 pb-1 pt-4 text-center">
          {embed.platform && (
            <p className="eyebrow text-[10px] text-ink/40 dark:text-cream/40">{embed.platform}</p>
          )}
          <p className="mt-1 font-serif text-lg font-semibold text-ink dark:text-cream">
            {embed.title}
          </p>
        </div>
      </div>

      {embed.viewUrl && (
        <div className="mt-3 text-center">
          <a
            href={embed.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-wine transition-colors hover:text-wine-700 dark:text-gold dark:hover:text-gold/80"
          >
            Ver en {embed.platform || 'la fuente original'}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      )}
    </Reveal>
  );
}

// Altura aproximada (en las mismas unidades que "ratio") que ocupan el
// título y el enlace "Ver en X" debajo de cada iframe, para poder
// repartir los documentos en columnas parejas.
const CARD_CHROME = 130;

/** Reparte los documentos en 2 columnas, siempre agregando el siguiente
 * a la columna que va más corta — así ninguna queda con espacio vacío
 * debajo, sin importar qué tan distinta sea la altura de cada uno. */
function distributeIntoColumns(embeds) {
  const columns = [
    { items: [], height: 0 },
    { items: [], height: 0 },
  ];
  for (const embed of embeds) {
    const target = columns[0].height <= columns[1].height ? columns[0] : columns[1];
    target.items.push(embed);
    target.height += embed.ratio + CARD_CHROME;
  }
  return columns.map((c) => c.items);
}

/**
 * EmbedGrid — muestra uno o varios documentos incrustados (Canva, Figma,
 * etc.), cada uno con su proporción real y un enlace para verlo directo
 * en la plataforma original.
 *
 * `embeds`: [{ title, platform, url, viewUrl?, ratio }]
 *   - ratio: el % de "padding-top" que da la proporción real del diseño
 *     (alto/ancho × 100). Ej: un iframe de 800×450 → ratio: 56.25
 *
 * Se reparten en 2 columnas por altura (no por orden), así el siguiente
 * documento siempre cae debajo del más corto — sin huecos vacíos.
 */
export default function EmbedGrid({ embeds, title }) {
  if (!embeds?.length) return null;

  // Un solo documento: se muestra grande, de lado a lado (no tiene
  // sentido repartirlo en 2 columnas y dejar la otra mitad vacía).
  if (embeds.length === 1) {
    return (
      <div className="container-x mt-16">
        <Reveal className="text-center">
          <p className="eyebrow text-wine dark:text-gold">Ver el proceso</p>
          <p className="mt-2 font-script text-3xl text-ember dark:text-rose">
            Documentos del proyecto
          </p>
        </Reveal>
        <div className="mt-10">
          <EmbedCard embed={embeds[0]} projectTitle={title} />
        </div>
      </div>
    );
  }

  const [colA, colB] = distributeIntoColumns(embeds);

  return (
    <div className="container-x mt-16">
      <Reveal className="text-center">
        <p className="eyebrow text-wine dark:text-gold">Ver el proceso</p>
        <p className="mt-2 font-script text-3xl text-ember dark:text-rose">
          Documentos del proyecto
        </p>
      </Reveal>

      {/* Escritorio/tablet: 2 columnas repartidas por altura */}
      <div className="mt-10 hidden gap-6 sm:flex">
        <div className="flex-1">
          {colA.map((embed, i) => (
            <EmbedCard key={embed.url} embed={embed} projectTitle={title} delay={i * 0.08} />
          ))}
        </div>
        <div className="flex-1">
          {colB.map((embed, i) => (
            <EmbedCard key={embed.url} embed={embed} projectTitle={title} delay={i * 0.08} />
          ))}
        </div>
      </div>

      {/* Móvil: una sola columna, en el orden original */}
      <div className="mt-10 sm:hidden">
        {embeds.map((embed, i) => (
          <EmbedCard key={embed.url} embed={embed} projectTitle={title} delay={i * 0.08} />
        ))}
      </div>
    </div>
  );
}
