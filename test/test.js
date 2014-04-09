var should = require('should');
var jaco = require('../lib/jaco.js');

describe('jaco', function () {
	it('カタカナに変換', function () {
		jaco.katakana('ｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞ').should.equal('ガガガガガガガガ');
	})
});
