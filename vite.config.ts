
import react from '@vitejs/plugin-react';
import {} from 'vite-plugin-compression'
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig(async () => {
  return {
    plugins: [
      react(),
      ViteEjsPlugin({
        module: '/src/client/index.tsx',
        title: '買えるオーガニック',
      }),
    ],
  };
});
