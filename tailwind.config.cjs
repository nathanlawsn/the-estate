/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-orange': '#FF834B',
				'primary-purple': '#522D43',
				'off-white': '#F2F2F2',
				'grey-light': '#EDEDED',
			},
			fontFamily: {
				sans: ["NeueMontreal", ...defaultTheme.fontFamily.sans],
      		},
		},
	},
	plugins: [],
}
