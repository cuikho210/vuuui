import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import { glob } from 'glob'
import { extname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: resolve(__dirname, './tsconfig-build.json'),
      copyDtsFiles: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer({}) as any],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', '@vuuui/styles'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
      input: Object.fromEntries(
        glob
          .sync('src/**/*.{ts,tsx}')
          .map((file) => [
            relative('src', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
    },
  },
})
