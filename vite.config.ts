import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'
import mockResponse from './challenge/feed/sample.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js'
  },
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
