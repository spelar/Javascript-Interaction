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
