import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
				additionalData: `@use "./src/styles/variables.scss" as *;`,
			},
		},
		postcss: {
			plugins: [autoprefixer({})],
		},
	},
});
