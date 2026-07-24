// ============================================================
//  ÍNDICE DE PROYECTOS
//  ✏️ Para AGREGAR un proyecto nuevo:
//     1. Copia un archivo de esta carpeta (ej. morfosis.js) y
//        cámbiale el nombre y los datos (slug único, título, etc.)
//     2. Crea su carpeta de imágenes en:
//        public/proyectos/<tu-slug>/
//     3. Impórtalo abajo y agrégalo al arreglo `proyectos`.
// ============================================================

import ihomotic from './ihomotic';
import morfosis from './morfosis';
import trasMisHuellas from './tras-mis-huellas';
import bancolombia from './bancolombia';
import aeternum from './aeternum';
import loreal from './loreal';

export const proyectos = [ihomotic, morfosis, trasMisHuellas, loreal, aeternum, bancolombia];

export function getProyectoBySlug(slug) {
  return proyectos.find((p) => p.slug === slug);
}

export function getAdyacentes(slug) {
  const i = proyectos.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: proyectos[(i - 1 + proyectos.length) % proyectos.length],
    next: proyectos[(i + 1) % proyectos.length],
  };
}
