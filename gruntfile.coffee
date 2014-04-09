module.exports = (grunt) ->

	# Package Data
	pkg = grunt.file.readJSON 'package.json'

	# Project configuration.
	grunt.initConfig

		typescript:
			options:
				comments: on
			jaco:
				src: [
					'src/jaco.ts'
				]
				dest: 'lib/jaco.js'

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
	]

	# Tasks
	log = grunt.log
	proc = require 'child_process'
	exec = proc.exec

	grunt.loadNpmTasks 'grunt-typescript'
	grunt.loadNpmTasks 'grunt-contrib-watch'

	grunt.registerTask 'update', 'Update Revision', ->
		pkg.revision += 1
		grunt.file.write 'package.json', JSON.stringify(pkg, null, 2)

	grunt.registerTask 'gitcommit', 'Git Commit', ->
		exec "/usr/local/git/bin/git commit -a -m 'dev (grunt commit r#{pkg.revision})'"
