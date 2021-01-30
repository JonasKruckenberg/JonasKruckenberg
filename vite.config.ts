import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-vuedoc'
import { VitePWA } from 'vite-plugin-pwa'
import imageset from 'vite-plugin-imageset'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  plugins: [
    markdown({}),
    vue(),
    {
      ...imageset(),
      enforce: 'pre',
    },
    {
      ...VitePWA({
        strategies: 'generateSW',
        outDir: 'dist',
      }),
      enforce: 'post'
    },
  ],
  // @ts-ignore
  ssgOptions: {
    script: 'async',
    formatting: 'minify'
  },
  optimizeDeps: {
    include: ['animejs/lib/anime.es.js']
  }
})
