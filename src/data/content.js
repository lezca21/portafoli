// ============================================================
//  CONTENIDO DEL PORTAFOLIO — Sofía Lezcano
//  ✏️  Este es el ÚNICO archivo que necesitas tocar para
//     cambiar textos, fotos y datos de contacto.
//
//  🗂️  Los PROYECTOS ya no están aquí: viven en
//      src/data/proyectos/ (un archivo por proyecto).
// ============================================================

export const site = {
  name: 'Sofía Lezcano',
  fullName: 'Sofía Lezcano Sánchez',
  role: 'Diseñadora Interactiva · UX/UI',
  location: 'Medellín, Colombia',
  email: 'slezcano2103@gmail.com',
  phone: '+57 305 297 0006',
  phoneRaw: '573052970006', // para WhatsApp (sin espacios ni +)
  cv: '/cv/Sofia-Lezcano-CV.pdf',
  mascot: '/imagenes/iconos/soleza.png',
  instagram: 'https://www.instagram.com/solezcam?igsh=MWZ5dWJienVob215NQ==',
};

// Redes sociales — reemplaza el "url" por tus enlaces reales
export const socials = [
  {
    name: 'Instagram',
    handle: '@solezcam',
    icon: 'Instagram',
    url: 'https://www.instagram.com/solezcam?igsh=MWZ5dWJienVob215NQ==',
  },
  {
    name: 'LinkedIn',
    handle: 'sofialezcanos',
    icon: 'Linkedin',
    url: 'https://www.linkedin.com/in/sofialezcanos',
  },
  {
    name: 'Behance',
    handle: 'sofialezcano1',
    icon: 'Behance',
    url: 'https://www.behance.net/sofialezcano1',
  },
  {
    name: 'Correo',
    handle: 'slezcano2103@gmail.com',
    icon: 'Mail',
    url: 'mailto:slezcano2103@gmail.com',
  },
];

// ---------- INICIO (Hero) ----------
// Breve y directo a propósito — el resto de mi historia va en "Sobre mí".
export const hero = {
  eyebrow: 'UX/UI · Diseño interactivo',
  greeting: 'Hola, soy Sofía',
  // El título se divide en líneas; la línea marcada como { accent: true }
  // se muestra en cursiva y color dorado.
  titleLines: [
    { text: 'Diseño que' },
    { text: 'se siente.', accent: true },
  ],
  primaryCta: 'Ver proyectos',
  photo: '/imagenes/mias/imagen1.jpeg',
  photoCaption: 'Medellín · 2025',
};

// Palabras que giran en la cinta (marquee) bajo el inicio
export const marqueeItems = [
  'Diseño UX/UI',
  'Diseño de servicios',
  'Fotografía',
  'Liderazgo',
  'Estrategia digital',
  'Empatía',
  'Dirección de arte',
];

// ---------- SOBRE MÍ ----------
export const about = {
  eyebrow: 'Un poco sobre mí',
  script: '¿Quién está detrás?',
  title: 'Diseño desde la empatía y con intención.',
  paragraphs: [
    'Soy Sofía Lezcano, diseñadora interactiva y estudiante de Diseño Interactivo en la Universidad EAFIT. Me apasiona crear espacios y experiencias, con un enfoque especial en UX y diseño de servicios para transformar ideas en recorridos significativos.',
    'Me distingo por una comunicación efectiva y asertiva, junto con una alta capacidad de adaptación en entornos dinámicos. Gracias a mi empatía y comprensión del usuario, desarrollo soluciones creativas y potencio el trabajo en equipo para alcanzar objetivos de alto impacto.',
  ],
  photos: [
    { src: '/imagenes/mias/imagen2.jpeg', rotate: -5 },
    { src: '/imagenes/mias/imagen3.jpeg', rotate: 4 },
  ],
  cvLabel: 'Ver mi hoja de vida',
};

// Áreas de especialidad — tarjetas numeradas estilo editorial
export const expertise = {
  eyebrow: 'Cómo trabajo',
  script: 'Mis áreas de especialidad',
  title: 'Del concepto a la experiencia final.',
  items: [
    {
      icon: 'Layers',
      title: 'Diseño Transmedia',
      text: 'Expando historias y experiencias a través de múltiples plataformas, creando universos cohesivos e interactivos que conectan profundamente con la audiencia.',
      theme: 'wine',
    },
    {
      icon: 'Lightbulb',
      title: 'Pensamiento Creativo',
      text: 'Abordo desafíos complejos desde perspectivas innovadoras para transformar problemas en soluciones funcionales y cuidadas.',
      theme: 'gold',
    },
    {
      icon: 'Users',
      title: 'Liderazgo Colaborativo',
      text: 'Acompaño y potencio el talento del equipo, facilitando la comunicación y la sinergia para alcanzar metas comunes.',
      theme: 'ember',
    },
    {
      icon: 'Target',
      title: 'Estrategia Digital',
      text: 'Conecto la creatividad con los objetivos de cada proyecto, planificando propuestas con visión global e impacto real.',
      theme: 'rose',
    },
    {
      icon: 'Code2',
      title: 'Desarrollo e Interacción',
      text: 'Llevo las ideas y prototipos a la realidad técnica, integrando lógica de programación y entornos interactivos funcionales.',
      theme: 'night',
    },
    {
      icon: 'LayoutGrid',
      title: 'Diseño UX/UI',
      text: 'Creo interfaces intuitivas y experiencias digitales centradas en la usabilidad, conectando la estética visual con las necesidades del usuario.',
      theme: 'sunset',
    },
  ],
};

// Conocimientos — se muestran en una barra animada (marquee de dos filas)
export const skills = [
  'Diseño UX/UI',
  'Diseño de servicios',
  'Estrategia digital',
  'Investigación de usuario',
  'Prototipado',
  'Suite Adobe',
  'Fotografía',
  'Liderazgo de equipos',
  'Resolución creativa',
];

// Herramientas que uso — sus logos reales, en public/imagenes/iconos/.
// "subtitle" es opcional (se usa en la de Inteligencia Artificial).
export const tools = [
  { name: 'Adobe', icon: '/imagenes/iconos/adobe.png' },
  { name: 'Figma', icon: '/imagenes/iconos/figma.png' },
  { name: 'Miro', icon: '/imagenes/iconos/miro.png' },
  { name: 'CapCut', icon: '/imagenes/iconos/capcut.png' },
  { name: 'Maya', icon: '/imagenes/iconos/maya.png' },
  { name: 'Unity', icon: '/imagenes/iconos/unity.png' },
  { name: 'Canva', icon: '/imagenes/iconos/canva.png' },
  {
    name: 'Inteligencia Artificial',
    subtitle: 'Claude y Gemini',
    icon: '/imagenes/iconos/ia.png',
  },
];

// ---------- FOTOGRAFÍA ----------
export const photography = {
  eyebrow: 'A través de mi lente',
  script: 'Fragmentos de vida',
  title: 'Momentos que quise guardar.',
  subtitle:
    'Luz, color y pequeños instantes capturados por mí. Cada foto es un fragmento de una historia.',
  instagramLabel: 'Sígueme en Instagram',
  // Puedes agregar más fotos a la carpeta public/imagenes/fotografia
  // y añadirlas aquí con su descripción.
  photos: [
    { src: '/imagenes/fotografia/foto1.jpeg', caption: 'Piel y neón', tall: true },
    { src: '/imagenes/fotografia/foto2.jpeg', caption: 'Reflejos', tall: true },
    { src: '/imagenes/fotografia/foto3.jpeg', caption: 'Vuelo' },
    { src: '/imagenes/fotografia/foto4.jpeg', caption: 'Tejido' },
    { src: '/imagenes/fotografia/foto5.jpeg', caption: 'Elegancia' },
    { src: '/imagenes/fotografia/foto6.jpeg', caption: 'Orilla' },
    { src: '/imagenes/fotografia/foto7.jpeg', caption: 'Quietud', tall: true },
    { src: '/imagenes/fotografia/foto8.jpeg', caption: 'Curiosidad' },
  ],
};

// ---------- CONTACTO ----------
export const contact = {
  script: '¿Creamos algo juntos?',
  title: 'Sígueme y escríbeme.',
  subtitle:
    'Estoy abierta a proyectos, colaboraciones y prácticas. Encuéntrame en cualquiera de estos canales.',
};
