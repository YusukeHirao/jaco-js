module.exports = (grunt) ->

	grunt.loadNpmTasks 'grunt-typescript'
	grunt.loadNpmTasks 'grunt-contrib-yuidoc'
	grunt.loadNpmTasks 'grunt-contrib-watch'

	# Package Data
	pkg = grunt.file.readJSON 'package.json'

	# Project configuration.
	grunt.initConfig

		pkg: pkg

		typescript:
			options:
				comments: on
			jaco:
				src: [
					'src/jaco.ts'
				]
				dest: 'lib/jaco.js'

		yuidoc:
			app:
				name: '<%= pkg.name %>'
				description: '<%= pkg.description %>'
				version: '<%= pkg.version %>'
				# url: '<%= pkg.website %>'
				options:
					paths: 'src/'
					outdir: 'docs/'
					extension: '.ts'
					exclude: 'DefinitelyTyped,*.d.ts'
					# themedir: 'docs_theme'

		watch:
			scripts:
				files: [
					"<%= typescript.jaco.src %>"
				]
				tasks: [
					'typescript'
				]
				options:
					interrupt: on

	grunt.registerTask 'default', [
		'typescript'
		'yuidoc'
	]
