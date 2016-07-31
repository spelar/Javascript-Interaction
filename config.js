'use strict';

var root = './src/';

var paths = {
  'sass': {
		'src': root + 'sass/**/*.{sass,scss}',
		'dest': root + 'css'
	},
  'browserify': {
    'src': [root + 'js/app.js'],
    'watch_files': [root + 'js/*.js', root + 'js/app/**/*.js'],
    'dest': root + 'js/bundle/',
    'output_filename': 'app.js'
  }
};

var options = {
	'sass': {
		'outputStyle': 'compressed'
	},
  'browserify': {
    'entries': paths.browserify.src
  }
};

module.exports = {
	'paths': paths,
	'options': options
};
