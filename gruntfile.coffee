module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-typescript'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-typedoc'

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
					'lib/jaco.js'
				]
				dest: 'lib/jaco.js'

		uglify:
			options:
				banner: '<%= meta.banner %>\n\n'
			jaco:
				files:
					'lib/jaco.min.js': ['lib/jaco.js']

		typedoc:
			app:
				src: 'src/index.ts'
				options:
					name: '<%= pkg.name %>'
					out: 'docs/'

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
		'typescript'
		'concat'
		'uglify'
		'typedoc'
	]
