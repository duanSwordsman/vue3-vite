import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      cpts: resolve(__dirname, 'src/components'),
      vws: resolve(__dirname, 'src/views'),
    },
  },
  base: './', // 打包路径
});
