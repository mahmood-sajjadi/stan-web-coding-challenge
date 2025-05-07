import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mockResponse from './challenge/feed/sample.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        configure: (proxy) => {
          proxy.on('proxyReq', (_, req, res) => {
            if (req.url === '/api/list') {
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(mockResponse));
            }
          });
        }
      },
    },
  },
})
