/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{html,js}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		fontFamily: {
		  'sans': ['ui-sans-serif', 'system-ui'],
		  'serif': ['ui-serif', 'Georgia'],
		  'mono': ['ui-monospace', 'SFMono-Regular'],
		  'display': ['Oswald'],
		  'body': ['"Open Sans"'],
		}
	  },
	daisyui: {
		
	},
	plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
