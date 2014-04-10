var should = require('should');
var jaco = require('../lib/jaco.js');

describe('jaco', function () {
	it('半角を全角カタカナに変換', function () {
		jaco.katakana('ｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞ').should.equal('ガガガガガガガガ');
	});
	it('ひらがなをカタカナに変換', function () {
		jaco.katakana('がががががががが').should.equal('ガガガガガガガガ');
	});
	it('カタカナをひらがなに変換', function () {
		jaco.hiragana('ガガガガガガガガ').should.equal('がががががががが');
	});
});
