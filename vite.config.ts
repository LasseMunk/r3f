import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/r3f",
	plugins: [react({ include: "**/*.tsx" })],
	server: {
		open: true,
	},
});
