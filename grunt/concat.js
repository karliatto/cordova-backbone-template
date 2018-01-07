'use strict';

module.exports = {
	all_css: {
		nonull: true,
		src: [
			'css/*.css',
			// 'node_modules/onsenui/css/**/*.css',
			// 'node_modules/onsenui/css-components-src/src/components/*.css',
			// 'node_modules/onsenui/css-components-src/src/theme.css',
			// 'node_modules/onsenui/css-components-src/src/components/index.css',
			// 'node_modules/onsenui/css-components-src/src/iphonex-support/index.css',
			// 'node_modules/onsenui/css/font_awesome/css/font-awesome.min.css',
			// 'node_modules/onsenui/css/ionicons/css/ionicons.min.css',
			// 'node_modules/onsenui/css/material-design-iconic-font/css/material-design-iconic-font.min.css',
			// 'node_modules/onsenui/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.woff2'

		],
		dest: 'build/all.css'
	},
	all_js: {
		nonull: true,
		src: [
			// Dependencies:
			'node_modules/jquery/dist/jquery.js',
			'node_modules/underscore/underscore.js',
			'node_modules/backbone/backbone.js',
	  		'node_modules/handlebars/dist/handlebars.js',
			'node_modules/onsenui/js/onsenui.min.js',

			// Application files:
			'js/*.js'
		],
		dest: 'build/all.js'
	}
};