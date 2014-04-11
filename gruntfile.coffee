module.exports = (grunt) ->

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
					exclude: 'DefinitelyTyped'
					# themedir: 'docs_theme'

		watch:
			scripts:
				files: [
					"<%= typescript.jaco.src %>"
				]
				tasks: [
					'typescript'
					'update'
					'gitcommit'
				]
				options:
					interrupt: on

	grunt.registerTask 'default', [
		'typescript'
		'yuidoc'
	]

	# Tasks
	log = grunt.log
	proc = require 'child_process'
	exec = proc.exec

	grunt.loadNpmTasks 'grunt-typescript'
	grunt.loadNpmTasks 'grunt-contrib-yuidoc'
	grunt.loadNpmTasks 'grunt-contrib-watch'

	grunt.registerTask 'update', 'Update Revision', ->
		pkg.revision += 1
		grunt.file.write 'package.json', JSON.stringify(pkg, null, 2)

	grunt.registerTask 'gitcommit', 'Git Commit', ->
		exec "/usr/local/git/bin/git commit -a -m 'dev (grunt commit r#{pkg.revision})'"
