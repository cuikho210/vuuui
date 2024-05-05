import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [
		solid(),
		dts(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: ['solid-js'],
			output: {
				entryFileNames: '[name].js',
			},
		},
	},
})
