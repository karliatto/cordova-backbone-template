'use strict';

module.exports = {
	all: {
		files: [
			{
				nonull: true,
				src: 'index.html',
				dest: 'www/index.html'
      },
      {
        nonull: true,
        src: 'build/all.js',
        dest: 'www/js/all.js'
      },
      {
        nonull: true,
        src: 'build/all.css',
        dest: 'www/css/all.css'
      },
      {
				expand: true,
				flatten: true,
				cwd: 'node_modules/onsenui/css/material-design-iconic-font/',
				src: [
					'fonts/**/*.{ttf,eot,svg,woff,woff2}'
				],
				dest: 'www/fonts/'
			},
			{
				nonull: true,
				src: 'node_modules/onsenui/css/font_awesome/css/font-awesome.min.css',
				dest: 'www/vendor/onsen/css/font_awesome/css/font-awesome.min.css'
			},
			{
				nonull: true,
				src: 'node_modules/onsenui/css/ionicons/css/ionicons.min.css',
				dest: 'www/vendor/onsen/css/ionicons/css/ionicons.min.css'
			},
			{
				nonull: true,
				src: 'node_modules/onsenui/css/material-design-iconic-font/css/material-design-iconic-font.min.css',
				dest: 'www/vendor/onsen/css/material-design-iconic-font/css/material-design-iconic-font.min.css'
			},
			{
				nonull: true,
				src: 'node_modules/onsenui/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.woff2',
				dest: 'www/vendor/onsen/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.woff2'
			},
			{
				nonull: true,
				src: 'node_modules/onsenui/css/onsenui.css',
				dest: 'www/vendor/onsen/css/onsenui.css'
			},
			{
				nonull: true,
				src: 'node_modules/onsenui/css/onsen-css-components.css',
				dest: 'www/vendor/onsen/css/onsen-css-components.css'
			},
			{
				nonull: true,
				src: 'node_modules/onsenui/js/onsenui.js',
				dest: 'www/vendor/onsen/js/onsenui.js'
			}
		]
	}
};