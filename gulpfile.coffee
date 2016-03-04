gulp = require 'gulp'
ts = require 'gulp-typescript'
tsc = require 'typescript'
babel = require 'gulp-babel'
rename = require 'gulp-rename'
header = require 'gulp-header'
moment = require 'moment'
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

gulp.task 'default', ['build']
