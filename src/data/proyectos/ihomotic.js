// ✏️ Un archivo = un proyecto. Copia este archivo para crear uno nuevo
// y agrégalo en `src/data/proyectos/index.js`.
//
// Las imágenes de este proyecto van en:
//   public/proyectos/ihomotic/
// y aquí las referencias como '/proyectos/ihomotic/nombre.jpg'

export default {
  slug: 'ihomotic',
  title: 'iHomotic',
  category: 'UX / UI · Estrategia de servicio',
  year: '2025',
  // Colores de marca reales de iHomotic — se usan como degradado en vez
  // del tema de color genérico. El orden importa (va de claro a oscuro).
  colors: ['#E3E3E4', '#9BC462', '#7B5AA2', '#081C35'],
  description:
    'i-Homotic desarrollaba tecnología de domótica 100% nacional sin costos recurrentes, pero dependía exclusivamente del boca a boca. La falta de evidencia digital estructurada generaba desconfianza y parálisis de decisión en el cliente objetivo ("El Explorador Informado").',
  tags: ['Research', 'Service Design', 'React + Three.js', 'Branding', 'Testing con usuarios'],
  // Portada (tarjeta) y cabecera grande de la página de detalle.
  cover: '/proyectos/ihomotic/cover.png',
  headerImage: '/proyectos/ihomotic/header.png',
  // ⏳ Pendiente: agrega aquí el link de Behance cuando lo tengas, ej:
  // behanceUrl: 'https://www.behance.net/gallery/XXXXXXXX/iHomotic',

  // Documentos incrustados en la página de detalle (Canva, Figma, etc.)
  // — se muestran lado a lado. "ratio" es la proporción real de cada
  // diseño (alto/ancho × 100) para que no se deforme.
  embeds: [
    {
      title: 'Presentación completa',
      platform: 'Canva',
      url: 'https://www.canva.com/design/DAHKfrUTFL4/9-NkEdZ2bVIH3LpWgC3b3w/view?embed',
      viewUrl:
        'https://www.canva.com/design/DAHKfrUTFL4/9-NkEdZ2bVIH3LpWgC3b3w/view?utm_content=DAHKfrUTFL4&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
      ratio: 141.4141,
    },
    {
      title: 'Manual técnico de stand',
      platform: 'Canva',
      url: 'https://www.canva.com/design/DAHKZ4vOV10/YDbxLFI5zUNs4myL-eu7jw/view?embed',
      viewUrl:
        'https://www.canva.com/design/DAHKZ4vOV10/YDbxLFI5zUNs4myL-eu7jw/view?utm_content=DAHKZ4vOV10&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
      ratio: 234.375,
    },
    {
      title: 'Manual de marca',
      platform: 'Canva',
      url: 'https://www.canva.com/design/DAHQKRwybHg/_b_F46AbpivduyTd3SGwUg/view?embed',
      viewUrl:
        'https://www.canva.com/design/DAHQKRwybHg/_b_F46AbpivduyTd3SGwUg/view?utm_content=DAHQKRwybHg&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
      // Panorámico (más ancho que alto) — se muestra centrado debajo de
      // los otros dos, no apretado en la misma fila.
      ratio: 58.3333,
    },
  ],

  // Cada bloque puede ser un párrafo simple (string) o una sección con
  // título: { heading, text, items? }.
  content: [
    {
      heading: 'El Objetivo',
      text: 'Implementar una estrategia de servicio de experiencia para i-Homotic que permita a la empresa ser descubierta, evaluada y validada por clientes potenciales más allá del voz a voz, a través de canales digitales y experiencias presenciales que comuniquen su propuesta de valor con coherencia visual, pedagogía accesible y credibilidad verificable.',
    },
    {
      heading: 'La Solución',
      text: 'Un ecosistema articulado en tres entregables centrales:',
      items: [
        'Sitio Web Interactivo — desarrollado en React y Three.js, con visualizador 3D de viviendas y calculadora de presupuesto.',
        'Stand Inmersivo (42 m²) — módulo espacial para ferias tipo "fragmento de hogar" con dispositivos físicos manipulables.',
        'Manual de Marca — sistema de identidad visual de 18 páginas para unificar todos los puntos de contacto.',
      ],
    },
    {
      heading: 'Validación',
      text: '39 sesiones de pruebas cualitativas con 17 usuarios. Se logró un 94% de completación autónoma de tareas, con calificaciones Likert promedio de 4.3/5 en el sitio web, 4.7/5 en el stand 3D y 4.3/5 en el manual de marca.',
    },
  ],
  gallery: [],
};
