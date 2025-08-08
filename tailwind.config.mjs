/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg: '#FEFCFB',
				paper: '#FAF8F5',
				ink: '#2C2B28',
				muted: '#6B6B6B',
				accent: '#D4A574',
				sand: '#E8D5C4',
				sage: '#A8B5A0',
				peach: '#E6B899',
			},
			fontFamily: {
				'display': ['Playfair Display', 'serif'],
				'body': ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}