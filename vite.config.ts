import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// [https://vite.dev/config/](https://vite.dev/config/)
export default defineConfig({
  plugins: [vue()],
  base: '/', // Changed from '/vant-links/' to '/'
  build: {
    outDir: 'dist',
  },
})