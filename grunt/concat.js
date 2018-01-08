'use strict';

module.exports = {
	all_css: {
		nonull: true,
		src: [
			'css/*.css',
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

			// Application files:
			'js/main.js'
		],
		dest: 'build/all.js'
	}
};