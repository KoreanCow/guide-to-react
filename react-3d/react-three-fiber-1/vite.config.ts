import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({

      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'react-3d',
        short_name: '3D_Sphere',
        start_url: '/',
        scope: ".",
        lang: 'ko-KR',
        display: 'fullscreen',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/img/icons/android-icon-36x36.png',
            type: 'image/png',
            sizes: '36x36'
          },
          {
            src: "/img/icons/android-icon-48x48.png",
            type: "image/png",
            sizes: "48x48"
          },
          {
            src: "/img/icons/android-icon-72x72.png",
            type: "image/png",
            sizes: "72x72"
          },
          {
            src: "/img/icons/android-icon-96x96.png",
            type: "image/png",
            sizes: "96x96"
          },
        ]
      }
    })
  ],
})
