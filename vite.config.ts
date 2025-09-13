import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
      server: {
        host: '0.0.0.0',
        port: 5000,
        strictPort: true,
        allowedHosts: true,
        hmr: {
          clientPort: 5000
        },
        proxy: {
          '/api': {
            target: 'http://localhost:3001',
            changeOrigin: true,
            secure: false
          }
        }
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
