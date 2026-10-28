import react from '@vitejs/plugin-react';
import { defineConfig, type ProxyOptions } from 'vite';

// The CMS NPPES registry sends no CORS headers, so the estimator calls it through this proxy.
// Production hosting needs the same rewrite: /api/npi -> https://npiregistry.cms.hhs.gov/api/
const npiProxy: Record<string, ProxyOptions> = {
  '/api/npi': {
    target: 'https://npiregistry.cms.hhs.gov',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api\/npi/, '/api/'),
  },
};

export default defineConfig({
  plugins: [react()],
  server: { proxy: npiProxy },
  preview: { proxy: npiProxy },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        estimate: 'estimate.html',
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-dom/client'],
          gsap: ['gsap', 'gsap/ScrollTrigger', 'gsap/SplitText', '@gsap/react'],
          motion: ['motion/react'],
        },
      },
    },
  },
});
