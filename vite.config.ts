import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-vuedoc'
import { VitePWA } from 'vite-plugin-pwa'
import imagetools from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  plugins: [
    vue(),
    markdown({}),
    imagetools(),
    VitePWA({
      manifest: {
        short_name: 'Jonas Kruckenberg',
        name: 'Jonas Kruckenberg | Portfolio',
        background_color: '#333333',
        theme_color: '#e63946',
        display: 'minimal-ui',
        icons: [
          {
            src: '/pwa-192x192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'any'
          },
          {
            src: '/pwa-192x192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'maskable'
          },
          {
            src: '/pwa-512x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any'
          },
          {
            src: '/pwa-512x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable'
          }
        ]
      },
      strategies: 'generateSW',
      outDir: 'dist',
    })
  ],
  // @ts-ignore
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    mock: true
  },
  optimizeDeps: {
    include: ['animejs/lib/anime.es.js']
  }
})
