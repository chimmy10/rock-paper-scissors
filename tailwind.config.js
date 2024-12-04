/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			boxShadow: {
				"inner-heavy": "inset 0 8px 10px rgba(0, 0, 0, 0.4)", // Custom inner shadow
			},
		},
	},
	plugins: [],
};
