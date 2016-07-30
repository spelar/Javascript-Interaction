'use strict';

var root = './src/';

var paths = {
  'sass': {
		'src': root + 'sass/**/*.{sass,scss}',
		'dest': root + 'css'
	}
};

var options = {
	'sass': {
		'outputStyle': 'compressed'
	}
};

module.exports = {
	'paths': paths,
	'options': options
};
