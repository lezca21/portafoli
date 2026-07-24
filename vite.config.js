import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // En GitHub Pages el sitio vive en la subcarpeta /portafoli/
  base: mode === 'production' || process.env.GITHUB_PAGES === 'true' ? '/portafoli/' : '/',
}))
