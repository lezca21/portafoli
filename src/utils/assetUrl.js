/**
 * Adapta una ruta de archivo estático (ej. /imagenes/mias/foto.jpg)
 * al prefijo de base configurado en Vite (ej. /portafoli/ en GitHub Pages).
 */
export function assetUrl(path) {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

export default assetUrl;
