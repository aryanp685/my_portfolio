import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { CONTACT_EMAIL } from './src/lib/contact.js'

export default defineConfig({
  plugins: [react() ,tailwindcss()],
  server: {
    allowedHosts: true,
    proxy: {
      '/api/contact': {
        target: 'https://formsubmit.co',
        changeOrigin: true,
        rewrite: () => `/ajax/${CONTACT_EMAIL}`,
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            const host = req.headers.host || 'localhost:5173'
            proxyReq.setHeader('Origin', `https://${host}`)
            proxyReq.setHeader('Referer', `https://${host}/`)
          })
        },
      },
    },
  },
})
