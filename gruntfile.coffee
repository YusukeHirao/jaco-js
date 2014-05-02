module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-typescript'
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-yuidoc'
	grunt.loadNpmTasks 'grunt-contrib-watch'

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
			jaco:
				src: [
					'src/jaco.ts'
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

		yuidoc:
			app:
				name: '<%= pkg.name %>'
				description: '<%= pkg.description %>'
				version: '<%= pkg.version %>'
				options:
					paths: 'src/'
					outdir: 'docs/'
					extension: '.ts'
					exclude: 'DefinitelyTyped,*.d.ts'
					themedir: 'docs_theme'

		watch:
			scripts:
				files: [
					"<%= typescript.jaco.src %>"
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
		'yuidoc'
	]
