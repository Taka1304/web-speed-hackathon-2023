
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig(async () => {
  return {
    build: {
      assetsInlineLimit: 20480,
      cssCodeSplit: true,
      cssTarget: 'es6',
      minify: true,
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 40960,
        },
        plugins: [
          visualizer(),
        ],
      },
      target: 'es2015',
    },
    plugins: [
      react(),
      ViteEjsPlugin({
        module: '/src/client/index.tsx',
        title: '買えるオーガニック',
      }),
    ],
  };
});
