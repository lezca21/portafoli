// ✏️ Un archivo = un proyecto. Copia este archivo para crear uno nuevo
// y agrégalo en `src/data/proyectos/index.js`.
//
// Las imágenes de este proyecto van en:
//   public/proyectos/aeternum/
// y aquí las referencias como '/proyectos/aeternum/nombre.jpg'

export default {
  slug: 'aeternum',
  title: 'Aeternum',
  category: 'Videojuego 3D · Narrativa Interactiva',
  year: '2025',
  theme: 'wine',
  description:
    '"Aeternum" (Nada dura para siempre) es un videojuego 3D narrativo de exploración e interacción que recrea el complejo romance y la travesía de Arturo Cova y Alicia, personajes emblemáticos de la obra literaria colombiana La Vorágine. A través de mecánicas de exploración, diálogos estilo novela gráfica y resolución de acertijos, el jugador vive la transformación psicológica de los personajes y su constante lucha contra la selva y la adversidad.',
  tags: ['Videojuego 3D', 'Narrativa Interactiva', 'Unity', 'Diseño de Personajes', 'Literatura Colombiana'],
  cover: '/proyectos/aeternum/cover.png',
  headerImage: '/proyectos/aeternum/header.png',
  behanceUrl: 'https://www.behance.net/gallery/246168131/Aeternum',

  // Diseño de Canva incrustado, al lado del botón de Behance.
  embeds: [
    {
      title: 'One Page, Comp. G',
      platform: 'Canva',
      url: 'https://www.canva.com/design/DAF-q-ri0qk/lCOu1ithpcms4LY4jWy4uQ/view?embed',
      viewUrl:
        'https://www.canva.com/design/DAF-q-ri0qk/lCOu1ithpcms4LY4jWy4uQ/view?utm_content=DAF-q-ri0qk&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
      ratio: 56.25,
    },
  ],

  content: [
    {
      heading: 'El Desafío',
      text: 'Adaptar un clásico de la literatura colombiana a una experiencia interactiva en 3D, manteniendo la carga dramática y la narrativa crítica sobre la psique humana frente al entorno hostil de la selva.',
      full: true,
    },
  ],
  gallery: [],
};
