/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FF6363",
				secondary: "#4C1D95",
				ternary: "#38A3A5",
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
