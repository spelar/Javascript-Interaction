'use strict';

var gulp = require('gulp');
var	gutil = require('gulp-util');
var	gulp_if = require('gulp-if');
var	browserSync = require('browser-sync').create();
var	sourcemaps = require('gulp-sourcemaps');
var	sass = require('gulp-sass');
var	uglify = require('gulp-uglify');
var	browserify = require('browserify');
var	source = require('vinyl-source-stream');
var	buffer = require('vinyl-buffer');
var	config = require('./config');

global.process.build = false;

gulp.task('default', ['watch']);

gulp.task('watch', function() {
	gulp.watch(config.paths.sass.src, ['sass']);
	gulp.watch(config.paths.browserify.watch_files, ['browserify']);
});

gulp.task('sass', function() {
	gulp
		.src(config.paths.sass.src)
		.pipe(sourcemaps.init())
		.pipe(sass(config.options.sass ).on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest( config.paths.sass.dest));
});

gulp.task('browserify', function() {
	var bsr = browserify( config.options.browserify );
	bsr
		.bundle()
		.pipe( source( config.paths.browserify.output_filename ) )
		.pipe( gulp.dest( config.paths.browserify.dest ) );
});
