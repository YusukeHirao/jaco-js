gulp = require 'gulp'
ts = require 'gulp-typescript'
tsc = require 'typescript'
babel = require 'gulp-babel'
rename = require 'gulp-rename'
header = require 'gulp-header'
moment = require 'moment'
source = require 'vinyl-source-stream'
buffer = require 'vinyl-buffer'
browserify = require 'browserify'
uglify = require 'gulp-uglify'
project = ts.createProject './tsconfig.json', typescript: tsc

pkg = require './package.json'
banner = """/**!
	 * <%= pkg.name %> - v<%= pkg.version %>
	 * update: <%= moment().format("YYYY-MM-DD") %>
	 * Author: <%= pkg.author %>
	 * Github: <%= pkg.repository.url %>
	 * License: Licensed under the <%= pkg.license %> License
	 */


"""

gulp.task 'build', () ->
	project.src()
		.pipe ts project
		.js
		.pipe babel presets: ['es2015']
		.pipe rename (path) => path.dirname = ''
		.pipe header banner, pkg: pkg, moment: moment
		.pipe gulp.dest './lib/'

gulp.task 'build-browser', ->
	browserify
		entries: ['./src/jaco-browser.js']
	.bundle()
	.pipe source 'jaco.min.js'
	.pipe buffer()
	.pipe uglify()
	.pipe header banner, pkg: pkg, moment: moment
	.pipe gulp.dest './dist/'

gulp.task 'default', ['build']
