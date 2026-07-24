import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // En GitHub Pages el sitio vive en una subcarpeta (lezca21.github.io/portafoli/),
  // así que las rutas de los archivos necesitan ese prefijo. En Netlify y en
  // desarrollo local el sitio vive en la raíz, así que se deja "/" normal.
  // El workflow de GitHub Actions activa esto con GITHUB_PAGES=true.
  base: process.env.GITHUB_PAGES === 'true' ? '/portafoli/' : '/',
})
