import { exec } from 'child_process';
import should from 'should';

import 'babel-polyfill';

describe('jaco command', () => {

	const HELP_STDOUT = `
  Usage: jaco [options] <path or string>

  Options:

    -h, --help                         output usage information
    -V, --version                      output the version number
    -K, --katakanize <path or string>  convert to Katakana
    -H, --hiraganize <path or string>  convert to Hiragana

`;

	it('引数なしでヘルプが出力', (done) => {
		exec('./bin/jaco', (error, stdout) => {
			stdout.should.equal(HELP_STDOUT);
			should.not.exist(error);
			done();
		});
	});

	it('引数 -h でヘルプが出力', (done) => {
		exec('./bin/jaco -h', (error, stdout) => {
			stdout.should.equal(HELP_STDOUT);
			should.not.exist(error);
			done();
		});
	});

	it('引数 --help でヘルプが出力', (done) => {
		exec('./bin/jaco --help', (error, stdout) => {
			stdout.should.equal(HELP_STDOUT);
			should.not.exist(error);
			done();
		});
	});

	it('引数 -K のみでエラー出力', (done) => {
		exec('./bin/jaco -K', (error, stdout, stderr) => {
			stderr.trim().should.equal("error: option `-K, --katakanize <path or string>' argument missing");
			should.exist(error);
			done();
		});
	});

	it('引数 -H のみ', (done) => {
		exec('./bin/jaco -H', (error, stdout, stderr) => {
			stderr.trim().should.equal("error: option `-H, --hiraganize <path or string>' argument missing");
			should.exist(error);
			done();
		});
	});

	it('引数 -K と 文字列', (done) => {
		exec('./bin/jaco -K あいうえお', (error, stdout) => {
			const line = stdout.split(/[\n\r]+/);
			line[0].should.equal('アイウエオ');
			should.not.exist(error);
			done();
		});
	});

	it('引数 -H と 文字列', (done) => {
		exec('./bin/jaco -H アイウエオ', (error, stdout) => {
			const line = stdout.split(/[\n\r]+/);
			line[0].should.equal('あいうえお');
			should.not.exist(error);
			done();
		});
	});

	it('引数 -H と -K と 文字列', (done) => {
		exec('./bin/jaco -H ドラえもん -K ドラえもん', (error, stdout) => {
			const line = stdout.split(/[\n\r]+/);
			line[0].should.equal('どらえもん');
			line[1].should.equal('ドラエモン');
			should.not.exist(error);
			done();
		});
	});

	it('引数 -H と -K と 文字列 (順序逆)', (done) => {
		exec('./bin/jaco -K ドラえもん -H ドラえもん', (error, stdout) => {
			const line = stdout.split(/[\n\r]+/);
			line[0].should.equal('ドラエモン');
			line[1].should.equal('どらえもん');
			should.not.exist(error);
			done();
		});
	});

	it('引数 -K と テキストファイル', (done) => {
		exec('./bin/jaco -K test/test.txt', (error, stdout) => {
			const line = stdout.split(/[\n\r]+/);
			line[0].should.equal('テスト');
			line[1].should.equal('テスト');
			line[2].should.equal('テスト');
			should.not.exist(error);
			done();
		});
	});

	it('引数 -H と テキストファイル', (done) => {
		exec('./bin/jaco -H test/test.txt', (error, stdout) => {
			const line = stdout.split(/[\n\r]+/);
			line[0].should.equal('てすと');
			line[1].should.equal('てすと');
			line[2].should.equal('てすと');
			should.not.exist(error);
			done();
		});
	});

});
