/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				head: ["McLaren", "cursive"],
				body: ["Montserrat", "sans-serif"],
			},
			gridTemplateColumns: {
				"auto-fill": "repeat(auto-fill, minmax(min(200px,100%),1fr))",
			},
			backgroundImage: {
				pattern: "url(`${imagePath}`)",
			},
		},
	},
	plugins: [],
};
