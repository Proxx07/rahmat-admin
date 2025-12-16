import * as process from 'node:process';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      vue(),
      mode === 'development' && mkcert(),
    ],

    server: {
      open: true,
      port: 1234,
      /* proxy: {
        '/api': {
          target: 'https://test.test.test/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '/api/'),
        },
      }, */
    },

    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "@/styles/responsive.scss" as *;',
        },
      },
    },

    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      ],
    },
  };
});
