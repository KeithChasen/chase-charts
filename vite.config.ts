import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';

export default defineConfig(({ command }) => {
	const isBuild = command === 'build';

	return {
		root: isBuild ? '.' : 'demo',
		plugins: [react(), isBuild && dts({ insertTypesEntry: true })].filter(
			Boolean
		),

		resolve: {
			alias: {
				'chase-charts': path.resolve(__dirname, 'src'),
			},
		},

		build: isBuild
			? {
					lib: {
						entry: 'src/index.ts',
						name: 'ChaseCharts',
						fileName: format => `chase-charts.${format}.js`,
						formats: ['es', 'umd'],
					},
					rollupOptions: {
						external: ['react', 'react-dom'],
						output: {
							globals: {
								react: 'React',
								'react-dom': 'ReactDOM',
							},
						},
					},
				}
			: undefined,
	};
});
