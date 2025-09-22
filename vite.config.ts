/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	base: '/jobSiteTwo/',
	test: {
		globals: true,
		setupFiles: './src/setupTests.ts',
		environment: 'jsdom',
	},
})
