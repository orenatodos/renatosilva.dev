import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				xl: '768px'
			}
		},
		extend: {
			boxShadow: {
				shape:
					'0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)'
			},
			fontFamily: {
				sans: ['Geist Sans', ...fontFamily.sans],
				mono: ['Geist Mono', ...fontFamily.mono]
			}
		}
	},
	plugins: [require('tailwind-scrollbar')]
}
