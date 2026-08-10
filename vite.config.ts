import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: ruta del repo en GitHub Pages (popifresco12.github.io/kinomori-site/)
export default defineConfig({
  plugins: [react()],
  base: '/kinomori-site/',
})
