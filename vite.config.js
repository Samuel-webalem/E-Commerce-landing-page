import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/E-Commerce-Product-page/",
  plugins: [svelte()],
  assetsInclude: ['**/*.jpg']
})
