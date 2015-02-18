module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-typescript'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-dtsm'
	grunt.loadNpmTasks 'grunt-tslint'

	# Package Data
	pkg = grunt.file.readJSON 'package.json'

	# Project configuration.
	grunt.initConfig

		pkg: pkg

		meta:
			banner: '''
				/*!
				 * <%= pkg.name %> - v<%= pkg.version %>
				 * <%= pkg.description %>
				 * update: <%= grunt.template.today("yyyy-mm-dd") %>
				 * Author: <%= pkg.author %> [<%= pkg.homepage %>]
				 * Repository: <%= pkg.repository.url %>
				 * License: <%= pkg.license %>
				 */
			'''

		typescript:
			options:
				comments: on
				declaration: on
				module: 'commonjs'
			jaco:
				src: [
					'src/index.ts'
				]
				dest: 'lib/jaco.js'

		concat:
			options:
				banner: '<%= meta.banner %>\n\n'
			jaco:
				src: [
					'src/__wrap/__intro.js'
					'lib/jaco.js'
					'src/__wrap/__outro.js'
				]
				dest: 'lib/jaco.js'

		uglify:
			options:
				banner: '<%= meta.banner %>\n\n'
				sourceMap: on
			jaco:
				files:
					'lib/jaco.min.js': ['lib/jaco.js']

		dtsm:
			main:
				options:
					config: 'dtsm.json'

		tslint:
			options:
				configuration: grunt.file.readJSON 'tslint.json'
			files:
				src: [
					'src/jaco/Jaco.ts'
					'src/jaco.ts'
					'src/index.ts'
				]

		watch:
			scripts:
				files: [
					'src/*.ts'
					'src/**/*.ts'
				]
				tasks: [
					'typescript'
					'concat'
				]
				options:
					interrupt: on

	grunt.registerTask 'default', [
		'dtsm'
		'tslint'
		'typescript'
		'concat'
		'uglify'
	]
