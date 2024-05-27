import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { extname, relative, resolve } from 'path'
import dts from 'vite-plugin-dts'
import autoprefixer from 'autoprefixer'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { glob } from 'glob'
import { fileURLToPath } from 'node:url'

export default defineConfig({
	plugins: [
		solid(),
		libInjectCss(),
		dts({
			tsconfigPath: resolve(__dirname, './tsconfig-build.json'),
			copyDtsFiles: true,
		}),
	],
	css: {
		postcss: {
			plugins: [
				autoprefixer({}) as any,
			],
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: [
				'solid-js',
				'solidjs-remixicon',
				'@vuuui/styles',
			],
			output: {
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js',
			},
			input: Object.fromEntries(
				glob.sync('src/**/*.{ts,tsx}').map(file => [
					relative(
						'src',
						file.slice(0, file.length - extname(file).length)
					),
					fileURLToPath(new URL(file, import.meta.url))
				]),
			),
		},
	},
})
