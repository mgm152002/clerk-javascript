import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host:true,
    proxy: {
      '/protected': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/protected/, ''),
      },
    },
    port:8080
  },
});