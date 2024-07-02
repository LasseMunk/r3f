/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FF6363",
				secondary: "#ffecc5",
				ternary: "#1e968a",
				darkGrey: "#1F2937",
				lightGrey: "#e5e7eb",
			},
		},
		lineHeight: {
			custom: 2.2,
		},
		fontWeight: {
			custom: 400,
		},
	},
	plugins: [],
};
