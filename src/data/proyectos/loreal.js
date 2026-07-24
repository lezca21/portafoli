// ✏️ Un archivo = un proyecto. Copia este archivo para crear uno nuevo
// y agrégalo en `src/data/proyectos/index.js`.
//
// Las imágenes de este proyecto van en:
//   public/proyectos/loreal/
// y aquí las referencias como '/proyectos/loreal/nombre.jpg'

export default {
  slug: 'loreal',
  title: "L'Oréal",
  category: 'Concepto de Producto · Innovación',
  year: '2025',
  theme: 'night',
  description:
    'NOUS: Eternal Scent es un concepto innovador de perfumería sólida de lujo diseñado para parejas en el marco de su boda. La propuesta transforma la memoria emocional en una fragancia irrepetible creada en tiempo real a través de la confluencia entre tecnología neurosensorial, algoritmos de sincronía emocional y la infraestructura de personalización de L\'Oréal.',
  tags: ['Innovación', 'Perfumería de lujo', 'Neurotecnología', 'Sostenibilidad', 'Branding'],
  cover: '/proyectos/loreal/cover.png',
  // ⏳ Pendiente: si tienes una imagen de cabecera distinta a "cover",
  // agrégala aquí como headerImage: '/proyectos/loreal/header.png'.
  // ⏳ Pendiente: agrega aquí el link de Behance cuando lo tengas, ej:
  // behanceUrl: 'https://www.behance.net/gallery/XXXXXXXX/LOreal',

  // Diseño de Canva incrustado en la página de detalle.
  embeds: [
    {
      title: 'Presentación NOUS',
      platform: 'Canva',
      url: 'https://www.canva.com/design/DAHMBP0v7YQ/1x0u2kkPLPkYIsvwf4NncA/view?embed',
      viewUrl:
        'https://www.canva.com/design/DAHMBP0v7YQ/1x0u2kkPLPkYIsvwf4NncA/view?utm_content=DAHMBP0v7YQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
      ratio: 56.25,
    },
  ],

  // Cada bloque puede ser un párrafo simple (string) o una sección con
  // título: { heading, text, items?, full? }.
  // "full: true" = se muestra a todo el ancho como texto plano (sin
  // tarjeta), igual que el Resumen — para una intro corta antes del resto.
  content: [
    {
      heading: 'El Desafío',
      text: 'Desafío global: Craft the Future of Luxury Fragrance — diseñar el futuro de la perfumería de lujo o experiencia de lujo mediante tecnología, ciencia y personalización masiva.',
      full: true,
    },
    {
      heading: 'La Problemática y Oportunidad de Mercado',
      text: 'Las bodas tradicionales se enfocan en la captura visual (fotografía y video), ignorando que el olfato es el único sentido con conexión directa e inmediata con la memoria emocional.',
      items: [
        '78% de las parejas están dispuestas a pagar más por experiencias exclusivas y personalizadas para su boda.',
        '2.4 millones de bodas anuales proyectadas en los mercados objetivo (México, Colombia y España).',
      ],
    },
    {
      heading: 'La Experiencia NOUS — Proceso en 3 pasos',
      text: 'Un recorrido sensorial en tres etapas, del registro biométrico a la identidad final de la fragancia:',
      items: [
        'Conexión Sensorial — registro de señales fisiológicas en tiempo real (actividad cerebral EEG, ritmo cardíaco y respuesta emocional) mientras la pareja explora distintas familias olfativas.',
        'Sincronía Emocional — un algoritmo propietario procesa la bio-información de ambas personas para hallar el punto exacto de convergencia emocional y sintetizar una fragancia verdaderamente compartida.',
        'Creación de Identidad — mediante preguntas sobre su historia de amor, una IA integrada genera un nombre único y significativo para la esencia.',
      ],
    },
    {
      heading: 'Innovación Tecnológica y Sostenibilidad',
      text: 'Un ecosistema construido sobre tecnología real de L\'Oréal, pensado también para reducir su huella:',
      items: [
        'Tecnología L\'Oréal Perso — adaptación del ecosistema de formulación personalizada en tiempo real de L\'Oréal.',
        'Medición neuro-sensorial — sensores EEG para el diagnóstico objetivo de las respuestas emocionales ante estímulos olfativos.',
        'Formato sólido sustentable — hasta 90% más ligero y compacto que la perfumería líquida convencional, reduciendo drásticamente la huella de carbono en logística y empaque.',
        'Diseño personalizado de empaque — estuche de alta joyería grabado con láser de precisión, con iniciales, fecha del enlace y simbología propia de la pareja.',
      ],
    },
  ],
  gallery: [],
};
