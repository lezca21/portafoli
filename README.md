# 🌞 Portafolio de Sofía Lezcano

Portafolio profesional hecho con **React + Vite**, **Tailwind CSS**, **Framer Motion** y
**React Router**. Diseño editorial cálido (vino/borgoña + crema), menú flotante en cápsula,
modo claro/oscuro, y animaciones premium.

---

## 🚀 Cómo verlo en tu computador

Abre una terminal **dentro de esta carpeta** (`portafolio`) y ejecuta:

```bash
npm install      # solo la primera vez (descarga lo necesario)
npm run dev      # enciende el sitio
```

Luego abre en tu navegador: **http://localhost:5173**

Para **apagarlo**: en la terminal presiona `Ctrl + C`.

> 💡 Ya tienes Node.js instalado, así que `npm` funciona. Cada vez que quieras
> trabajar en el sitio, solo repite `npm run dev`.

---

## ✏️ Cómo editar tu contenido (¡lo más importante!)

### 📄 `src/data/content.js`

Ahí puedes cambiar:

- Tu nombre, rol, correo, teléfono y ubicación.
- El título del inicio (a propósito es breve — el resto de tu historia va en "Sobre mí").
- Tus enlaces de redes sociales (Instagram, LinkedIn, Behance, correo, WhatsApp) — se
  muestran directamente en la sección de Contacto.
- Las fotos de la galería y sus descripciones.

Guarda el archivo y el sitio se actualizará solo (si `npm run dev` está encendido).

### 🗂️ `src/data/proyectos/` — tus proyectos

Cada proyecto es **su propio archivo** (ej. `fragmentos.js`), y tiene además **su propia
página** en el sitio (`/proyectos/<slug>`) con navegación anterior/siguiente automática.

**Para agregar un proyecto nuevo:**

1. Copia un archivo existente de `src/data/proyectos/` (ej. `fragmentos.js`) y ponle un
   nombre nuevo, por ejemplo `mi-proyecto-nuevo.js`.
2. Edita sus datos: `slug` (único, sin espacios), `title`, `category`, `year`,
   `description`, `tags`, `content` (párrafos largos para su página de detalle).
3. Crea su carpeta de imágenes: `public/proyectos/mi-proyecto-nuevo/` y coloca ahí tu
   portada y galería.
4. En ese archivo, define `cover: '/proyectos/mi-proyecto-nuevo/portada.jpg'` (si no
   pones portada, se usa un degradado elegante automáticamente).
5. Ábrelo en `src/data/proyectos/index.js`: impórtalo y agrégalo al arreglo `proyectos`.

¡Listo! Aparecerá solo en `/proyectos` y tendrá su página de detalle en
`/proyectos/mi-proyecto-nuevo`.

---

## 🖼️ Cómo cambiar o agregar fotos (galería de Fotografía)

Tus imágenes están en `public/imagenes/`:

- **Fotos tuyas / galería:** `public/imagenes/mias/`
- **Íconos de herramientas:** `public/imagenes/iconos/`

Para **agregar una foto nueva a la galería**:

1. Copia tu foto a `public/imagenes/mias/` (por ejemplo `imagen7.jpeg`).
2. En `src/data/content.js`, dentro de `photography.photos`, añade una línea:
   ```js
   { src: '/imagenes/mias/imagen7.jpeg', caption: 'Mi título' },
   ```

> Nota: usa nombres **sin espacios ni tildes** (ej. `imagen7.jpeg`, no `imagen 7.jpeg`).

---

## 🎨 Cómo cambiar los colores

Los colores están en **`tailwind.config.js`** (sección `colors`).
Cambia el valor de `wine.DEFAULT` (tu vino principal `#790216`) y listo.

Si algún día quieres probar tu **paleta alternativa (morados + naranjas + amarillos)**,
reemplaza en `tailwind.config.js`:

```js
wine:  { DEFAULT: '#6D28D9', 600:'#7C3AED', 700:'#6D28D9', 800:'#5B21B6', 900:'#4C1D95', 950:'#2E1065' }, // morado
ember: '#F97316', // naranja
gold:  '#FBBF24', // amarillo
```

## ✒️ Tipografías

**Lora** (títulos, editorial) + **Nunito** (texto, cálida) + **Dancing Script** (acentos
en cursiva). Se cambian en `index.html` (el link de Google Fonts) y en
`tailwind.config.js` (sección `fontFamily`) — y también en `src/index.css` si quieres
tocar los valores por defecto de `body`/`h1-h4`.

## 🌗 Modo claro / oscuro

El sitio abre en **modo claro** por defecto. El botón (sol/luna) del menú lo cambia.
Para que abra en **oscuro** por defecto, en `src/hooks/useTheme.js` cambia
`return 'light';` por `return 'dark';`.

---

## 📦 Publicar el sitio en internet (gratis)

1. Genera la versión final:
   ```bash
   npm run build
   ```
   Esto crea una carpeta **`dist/`**.
2. Entra a **[netlify.com/drop](https://app.netlify.com/drop)** o **[vercel.com](https://vercel.com)**
   y **arrastra la carpeta `dist/`**. ¡Listo, tendrás un enlace público!

> ⚠️ Como el sitio ahora tiene varias páginas (rutas), si usas Netlify Drop asegúrate de
> que el hosting redirija todas las rutas a `index.html` (Netlify y Vercel lo hacen solo
> automáticamente para proyectos Vite/React; si usas otro hosting, busca "SPA fallback").

---

## 🗂️ Estructura del proyecto

```
portafolio/
├─ public/
│  ├─ imagenes/mias/        ← tus fotos (galería, sobre mí, inicio)
│  ├─ imagenes/iconos/      ← mascota "Soleza" (también es el favicon) + herramientas
│  ├─ proyectos/<slug>/     ← imágenes de cada proyecto (una carpeta por proyecto)
│  └─ cv/                   ← tu hoja de vida (PDF)
├─ src/
│  ├─ data/content.js       ← ⭐ contenido general editable (inicio, sobre mí, contacto...)
│  ├─ data/proyectos/       ← ⭐ un archivo por proyecto + index.js que los reúne
│  ├─ pages/                ← Home, ProjectsPage (listado), ProjectDetailPage (detalle)
│  ├─ components/           ← las secciones (Hero, About, Navbar, etc.)
│  │  └─ ui/                ← piezas reutilizables (animaciones, botones, marquee)
│  ├─ hooks/useTheme.js     ← modo claro/oscuro
│  ├─ App.jsx               ← define las rutas del sitio
│  └─ index.css             ← estilos base
└─ tailwind.config.js       ← 🎨 colores y tipografías
```

---

Hecho con cariño 🌞
