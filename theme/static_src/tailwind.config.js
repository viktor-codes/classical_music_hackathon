/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
	content: [
		// Templates within your Django apps
		'../templates/**/*.html',
		'../../templates/**/*.html',
		'../../**/templates/**/*.html',

		// JavaScript files: include only specific directories or exclude node_modules
		'../../**/*.js',
		'!../../**/node_modules/**/*.js', // Exclude node_modules
	],

	theme: {
		extend: {
			screens: {
				widescreen: { raw: '(min-aspect-ratio: 3/2)' },
				tallscreen: { raw: '(max-aspect-ratio: 13/20)' },
			},
		},
		keyframes: {
			'open-menu': {
				'0%': { transform: 'scaleY(0)' },
				'80%': { transform: 'scaleY(1.2)' },
				'100%': { transform: 'scaleY(1)' },
			},
		},
		animation: {
			'open-menu': 'open-menu 0.5s ease-in-out forwards',
		},
	},

	plugins: [
		/**
		 * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
		 * for forms. If you don't like it or have own styling for forms,
		 * comment the line below to disable '@tailwindcss/forms'.
		 */
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
	],
}
