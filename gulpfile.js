const gulp = require('gulp');
const wpGilp = require('webpack-stream');
const webpack = require('webpack');
const ts = require('gulp-typescript');
const docs = require('gulp-typedoc');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const header = require('gulp-header');
const moment = require('moment');
const runSequence = require('run-sequence');
const git = require('git-rev-sync');
const pkg = require('./package.json');

const banner = `/**!
* ${pkg.name} - v${pkg.version}
* revision: ${git.long()}
* update: ${moment().format('YYYY-MM-DD')}
* Author: ${pkg.author} [${pkg.homepage}]
* Github: ${pkg.repository.url}
* License: Licensed under the ${pkg.license} License
*/

`;

gulp.task('ts', () => {
	const tsfiles = gulp.src('src/**/*.ts').pipe(ts('tsconfig.json'));
	tsfiles.js.pipe(babel()).pipe(gulp.dest('./lib/'));
	tsfiles.dts.pipe(gulp.dest('./lib/'));
});

gulp.task('pack', () => {
	gulp
		.src('./lib/index.js')
		.pipe(wpGilp({
			plugins: [new webpack.optimize.AggressiveMergingPlugin()],
			output: {
				filename: 'jaco.js',
			},
		}, webpack))
		.pipe(header(banner))
		.pipe(gulp.dest('./dist/'))
		.pipe(gulp.dest(`./dist/v${pkg.version}/`));
});

gulp.task('compress', () => {
	gulp
		.src('./dist/jaco.js')
		.pipe(uglify())
		.pipe(rename('jaco.min.js'))
		.pipe(header(banner))
		.pipe(gulp.dest('./dist/'))
		.pipe(gulp.dest(`./dist/v${pkg.version}/`));
});

gulp.task('docs', () => {
	gulp
		.src('src/jaco.ts')
		.pipe(docs({
			module: 'commonjs',
			target: 'es2017',
			mode: 'file',
			json: './api.json',
			exclude: 'node_modules',
		}))
		.pipe(gulp.dest('./docs/'));
});

gulp.task('dev-ts', (cb) => {
	runSequence('ts', cb);
});

gulp.task('dev-web', (cb) => {
	runSequence('ts', 'pack', cb);
});

gulp.task('watch', () => {
	gulp.watch('src/**/*.ts', ['dev-web']);
});

gulp.task('build', (cb) => {
	runSequence('ts', 'pack', 'compress', cb);
});

gulp.task('default', (cb) => {
	runSequence('build', cb);
});
