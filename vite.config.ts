import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// [https://vite.dev/config/](https://vite.dev/config/)
export default defineConfig({
  plugins: [vue()],
  base: '/vant-links/', // Agrega la ruta base para GitHub Pages
  build: {
    outDir: 'dist',
  },
})