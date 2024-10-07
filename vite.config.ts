import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import {defineConfig} from "vite";

export default defineConfig({
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
