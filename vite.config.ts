import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: { main: 'index.html', estimate: 'estimate.html' },
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
