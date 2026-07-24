// ✏️ Un archivo = un proyecto. Copia este archivo para crear uno nuevo
// y agrégalo en `src/data/proyectos/index.js`.
//
// Las imágenes de este proyecto van en:
//   public/proyectos/morfosis/
// y aquí las referencias como '/proyectos/morfosis/nombre.jpg'

export default {
  slug: 'morfosis',
  title: 'Morfosis',
  category: 'Diseño Transmedia',
  year: '2025',
  theme: 'ember',
  description:
    'Morfosis es un ambicioso universo transmedia de ciencia ficción steampunk donde habitan insectos conscientes en una sociedad marcadamente jerarquizada y polarizada. El proyecto combina una rica mitología, narrativa transmedia, diseño de videojuegos, experiencias inmersivas en realidad mixta y prototipado de producto físico.',
  tags: ['Transmedia Design', 'Concept Art & Character Design', 'UI/UX Design', 'Unity', 'Steampunk'],
  cover: '/proyectos/morfosis/cover.png',
  // Imagen grande de cabecera en la página de detalle (opcional).
  // Si no se define, se usa "cover" también ahí.
  headerImage: '/proyectos/morfosis/header.png',
  // Link del proyecto en Behance (botón en la página de detalle)
  behanceUrl: 'https://www.behance.net/gallery/246165477/Morfosis',
  content: [
    'La historia explora la brecha socioeconómica entre la élite gobernante, alojada en la opulencia del Palacio Real, y la clase trabajadora que habita los hostiles suburbios de Entomópolis. Todo gira en torno al control de la energía, la religión falaz de la "Iridiscencia" y la promesa de trascender hacia Iris, un supuesto paraíso divino.',
    'El desarrollo integral del proyecto abarcó modelado 3D, ilustración de concept art, diseño de interfaz (UI/UX) y fabricación digital en impresión 3D, dando vida a este universo desde la narrativa hasta el objeto físico.',
  ],
  // Logros y reconocimientos — se muestran como una lista destacada
  // en la página de detalle (opcional; omite el campo si no aplica).
  highlights: [
    'Ganador a Mejor Proyecto del pregrado de Diseño Interactivo en Inventiva 🎪',
    'Exposición en Comic-Con 2025',
    'Desarrollo integral de prototipado: modelado 3D, concept art, diseño UI/UX y fabricación digital en impresión 3D',
  ],
  // Fotos de momentos reales — se muestran en una mini-galería animada
  // al lado de "Logros y reconocimientos". Cada una puede llevar "caption".
  gallery: [
    { src: '/proyectos/morfosis/momento1.jpeg', caption: 'Comic-Con 2025' },
    { src: '/proyectos/morfosis/momento2.jpeg', caption: 'Presentando el universo Morfosis' },
    { src: '/proyectos/morfosis/momento3.jpeg', caption: 'Ganadores en Inventiva' },
    { src: '/proyectos/morfosis/momento4.jpeg', caption: 'Premios Pixel' },
  ],
};
