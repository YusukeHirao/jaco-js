'use strict';

import { exec } from 'child_process';
import should from 'should';
import * as fs from 'fs';
import Jaco from '../lib/Jaco.js';

describe('Jaco Class', function () {

	// constructor
	it('newされたインスタンスは別のオブジェクト', function () {
		var a = new Jaco('あ');
		var b = new Jaco('あ');
		a.should.not.equal(b);
	});

	// toString()
	it('暗黙の型変換 文字列に変換', function () {
		var a = new Jaco('あ');
		(a + 'い').should.equal('あい');
	});

	// valueOf()
	it('暗黙の型変換 文字列に変換後さらに数値に変換される', function () {
		var a = new Jaco('1');
		(+a).should.equal(1);
	});

	// concat()
	it('連結', function () {
		var a = new Jaco('あ');
		a.concat('い', new Jaco('う'), 'え', new Jaco('お'));
		a.toString().should.equal('あいうえお');
	});

	// replace()
	it('置換', function () {
		var a = new Jaco('abcdeABCDE');
		a.replace(/abc/ig, 'z');
		a.toString().should.equal('zdezDE');
	});

	// slice()
	it('抽出', function () {
		var a = new Jaco('いろはにほへと');
		var b = a._str.slice(1, 5);
		b.toString().should.equal('ろはにほ');
	});
	it('抽出2', function () {
		var a = new Jaco('いろはにほへと');
		var b = a._str.slice(1);
		b.toString().should.equal('ろはにほへと');
	});

	// substr()
	it('抽出3', function () {
		var a = new Jaco('いろはにほへと');
		var b = a._str.substr(1, 2);
		b.toString().should.equal('ろは');
	});
	it('抽出4', function () {
		var a = new Jaco('いろはにほへと');
		var b = a._str.substr(1);
		b.toString().should.equal('ろはにほへと');
	});

	// substring()
	it('抽出5', function () {
		var a = new Jaco('いろはにほへと');
		var b = a._str.substring(0, 2);
		b.toString().should.equal('いろ');
	});
	it('抽出6', function () {
		var a = new Jaco('いろはにほへと');
		var b = a._str.substring(1, 3);
		b.toString().should.equal('ろは');
	});

	// toLowerCase()
	it('小文字に変換', function () {
		var a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.toLowerCase().toString().should.equal('abcdefghijklmnopqrstuvwxyz');
	});

	// toUpperCase()
	it('大文字に変換', function () {
		var a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.toUpperCase().toString().should.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
	});

	// remove()
	it('削除', function () {
		var a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.remove('aBc');
		a.toString().should.equal('DeFgHiJkLmNoPqRsTuVwXyZ');
	});
	it('削除2', function () {
		var a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.remove(/[a-z]/);
		a.toString().should.equal('BcDeFgHiJkLmNoPqRsTuVwXyZ');
	});
	it('削除3', function () {
		var a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.remove(/[a-z]/g);
		a.toString().should.equal('BDFHJLNPRTVXZ');
	});

	// trim()
	it('前後の空白を削除', function () {
		var a = new Jaco('a b');
		a.trim();
		a.toString().should.equal('a b');
	});
	it('前後の空白を削除2', function () {
		var a = new Jaco(' a b');
		a.trim();
		a.toString().should.equal('a b');
	});
	it('前後の空白を削除3', function () {
		var a = new Jaco('a b  　');
		a.trim();
		a.toString().should.equal('a b');
	});
	it('前後の空白を削除4', function () {
		var a = new Jaco('　a 　b\n');
		a.trim();
		a.toString().should.equal('a 　b');
	});

	// size()
	it('文字数', function () {
		var a = new Jaco('あいうえおabc');
		a.size().should.equal(8);
	});
	it('文字数2', function () {
		var a = new Jaco('あ い う え\nお a b c');
		a.size().should.equal(15);
	});

	// byteSize()
	it('バイト数', function () {
		var a = new Jaco('あいうえおabc');
		a.byteSize().should.equal(18);
	});
	it('バイト数2', function () {
		var a = new Jaco('あ い う え\nお a b c');
		a.byteSize().should.equal(25);
	});

	// isEmpty()
	it('空', function () {
		var a = new Jaco('');
		a.isEmpty().should.ok;
	});
	it('空2', function () {
		var a = new Jaco(' ');
		a.isEmpty().should.not.ok;
	});

	// clone()
	it('コピー', function () {
		var a = new Jaco('あ');
		var b = a.clone();
		a.should.not.equal(b);
	});
	it('コピー', function () {
		var a = new Jaco('あ');
		var b = a.clone();
		a.toString().should.equal(b.toString());
	});

	// test()
	it('テスト', function () {
		var a = new Jaco('あいう');
		a.test('あいう').should.ok;
	});
	it('テスト2', function () {
		var a = new Jaco('あいう');
		a.test(/^あ/).should.ok;
	});
	it('テスト', function () {
		var a = new Jaco('あいう');
		a.test('あいうえ').should.not.ok;
	});
	it('テスト2', function () {
		var a = new Jaco('あいう');
		a.test(/あ$/).should.not.ok;
	});

	// prepend()
	it('前方結合', function () {
		var a = new Jaco('うえお');
		a.prepend('あい').toString().should.equal('あいうえお');
	});
	it('前方結合2', function () {
		var a = new Jaco('にほへと');
		a.prepend(new Jaco('いろは')).toString().should.equal('いろはにほへと');
	});
	// append()
	it('後方結合', function () {
		var a = new Jaco('あい');
		a.append('うえお').toString().should.equal('あいうえお');
	});
	it('後方結合2', function () {
		var a = new Jaco('いろは');
		a.append(new Jaco('にほへと')).toString().should.equal('いろはにほへと');
	});

	// is()
	it('完全マッチ', function () {
		var a = new Jaco('いろは');
		a.is('いろは').should.ok;
	});
	it('完全マッチ2', function () {
		var a = new Jaco('いろは');
		a.is(new Jaco('いろは')).should.ok;
	});
	it('完全マッチ3', function () {
		var a = new Jaco('いろは');
		a.is('いろはに').should.not.ok;
	});
	it('完全マッチ4', function () {
		var a = new Jaco('いろは');
		a.is(new Jaco('いろはに')).should.not.ok;
	});

	// has()
	it('含むかどうか', function () {
		var a = new Jaco('いろは');
		a.has('い').should.ok;
	});
	it('含むかどうか2', function () {
		var a = new Jaco('いろは');
		a.has(new Jaco('い')).should.ok;
	});
	it('含むかどうか3', function () {
		var a = new Jaco('いろは');
		a.has(new Jaco('あ')).should.not.ok;
	});
	it('含むかどうか4', function () {
		var a = new Jaco('いろは');
		a.has('いろ').should.ok;
	});
	it('含むかどうか5', function () {
		var a = new Jaco('いろは');
		a.has('いは').should.not.ok;
	});
	it('含むかどうか6', function () {
		var a = new Jaco('いろは');
		a.has('ろは').should.ok;
	});

	// isOnly()
	it('該当の文字のみ', function () {
		var a = new Jaco('いろは');
		a.isOnly('いろはにほへと').should.ok;
	});
	it('該当の文字のみ2', function () {
		var a = new Jaco('いろは');
		a.isOnly('いはにほへと').should.not.ok;
	});
	it('該当の文字のみ3', function () {
		var a = new Jaco('abcいろは');
		a.isOnly('いろはにほへと').should.not.ok;
	});
	it('該当の文字のみ4', function () {
		var a = new Jaco('いろは');
		a.isOnly('いろは').should.ok;
	});
	it('該当の文字のみ5', function () {
		var a = new Jaco('いろは');
		a.isOnly('いろ').should.not.ok;
	});
	it('該当の文字のみ6', function () {
		var a = new Jaco('いろは');
		a.isOnly('いろろろろははははにににに').should.ok;
	});
	it('該当の文字のみ7', function () {
		var a = new Jaco('いろはち');
		a.isOnly('いろはにほへと').should.not.ok;
	});

	// toNumber()
	it('数値変換', function () {
		var a = new Jaco('123');
		a.toNumber().should.equal(123);
	});
	it('数値変換2', function () {
		var a = new Jaco('123.45');
		a.toNumber().should.equal(123.45);
	});
	it('数値変換3', function () {
		var a = new Jaco('-123');
		a.toNumber().should.equal(-123);
	});
	it('数値変換4', function () {
		var a = new Jaco('0123');
		a.toNumber().should.equal(123);
	});
	it('数値変換5', function () {
		var a = new Jaco('0.123');
		a.toNumber().should.equal(0.123);
	});
	it('数値変換6', function () {
		var a = new Jaco('.123');
		a.toNumber().should.equal(0.123);
	});
	it('数値変換7', function () {
		var a = new Jaco('あ');
		a.toNumber().should.be.NaN;
	});

	// isOnlyHiragana()
	it('ひらがなのみ', function () {
		var test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join('');
		var a = new Jaco(test);
		a.isOnlyHiragana().should.ok;
	});
	it('ひらがなのみ2', function () {
		var test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ'
		].join('');
		var a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok;
	});
	it('ひらがなのみ3', function () {
		var test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛漢字'
		].join('');
		var a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok;
	});
	it('ひらがなのみ4', function () {
		var test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛123'
		].join('');
		var a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok;
	});
	it('ひらがなのみ5', function () {
		var test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛abc'
		].join('');
		var a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok;
	});

	// isOnlyKatakana()
	it('カタカナのみ', function () {
		var test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜'
		].join('');
		var a = new Jaco(test);
		a.isOnlyKatakana().should.ok;
	});
	it('カタカナのみ2', function () {
		var test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join('');
		var a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok;
	});
	it('カタカナのみ3', function () {
		var test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜漢字'
		].join('');
		var a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok;
	});
	it('カタカナのみ4', function () {
		var test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜123'
		].join('');
		var a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok;
	});
	it('カタカナのみ5', function () {
		var test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜abc'
		].join('');
		var a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok;
	});

	// combinate()
	it('濁点の結合文字化', function () {
		var a = new Jaco('か゛き゛く゛け゛こ゛');
		a.combinate().toString().should.equal('がぎぐげご');
	});
	it('半濁点の結合文字化', function () {
		var a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
		a.combinate().toString().should.equal('ぱぴぷぺぽ');
	});

	// combinateSoundMarks(true)
	it('濁点の結合文字化2', function () {
		var a = new Jaco('か゛き゛く゛け゛こ゛');
		a.combinateSoundMarks(true).toString().should.equal('がぎぐげご');
	});
	it('半濁点の結合文字化2', function () {
		var a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
		a.combinateSoundMarks(true).toString().should.equal('ぱぴぷぺぽ');
	});

	// combinateSoundMarks()
	it('濁点・半濁点の結合', function () {
		var a = new Jaco('か゛き゛く゛け゛こ゛');
		a.combinateSoundMarks().toString().should.equal('がぎぐげご');
	});
	it('濁点・半濁点の結合2', function () {
		var a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
		a.combinateSoundMarks().toString().should.equal('ぱぴぷぺぽ');
	});
	it('濁点・半濁点の結合3', function () {
		var a = new Jaco('がぎぐげご');
		a.combinateSoundMarks().toString().should.equal('がぎぐげご');
	});
	it('濁点・半濁点の結合4', function () {
		var a = new Jaco('ぱぴぷぺぽ');
		a.combinateSoundMarks().toString().should.equal('ぱぴぷぺぽ');
	});

	// toHiragana()
	it('ひらがなに変換', function () {
		var a = new Jaco([
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ'
		].join(''));
		var b = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゛ゐ゛ゔゑ゛を゛'
		].join('');
		a.toHiragana().toString().should.equal(b);
	});
	it('ひらがなに変換2', function () {
		var a = new Jaco([
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ'
		].join(''));
		var b = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゙ゐ゙ゔゑ゙を゙'
		].join('');
		a.toHiragana(true).toString().should.equal(b);
	});
	it('ひらがなに変換3', function () {
		var a = new Jaco([
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ'
		].join(''));
		var b = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゛ゐ゛ゔゑ゛を゛'
		].join('');
		a.toHiragana(false).toString().should.equal(b);
	});
	it('ひらがな以外は変換しない', function () {
		var a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）');
		var b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）';
		a.toHiragana().toString().should.equal(b);
	});
	it('ひらがな以外は変換しない2', function () {
		var a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）');
		var b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）';
		a.toHiragana(true).toString().should.equal(b);
	});

	// toKatakana()
	it('カタカナに変換', function () {
		var a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join(''));
		var b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ'
		].join('');
		a.toKatakana().toString().should.equal(b);
	});
	it('カタカナに変換2', function () {
		var a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙' // 結合文字濁点・半濁点
		].join(''));
		var b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ'
		].join('');
		a.toKatakana().toString().should.equal(b);
	});
	it('カタカナに変換3', function () {
		var a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join(''));
		var b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ'
		].join('');
		a.toKatakana(true).toString().should.equal(b);
	});
	it('カタカナに変換4', function () {
		var a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙' // 結合文字濁点・半濁点
		].join(''));
		var b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ'
		].join('');
		a.toKatakana(true).toString().should.equal(b);
	});
	it('カタカナに変換5', function () {
		var a = new Jaco([
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join(''));
		var b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ'
		].join('');
		a.toKatakana(true).toString().should.equal(b);
	});
	it('カタカナに変換6', function () {
		var a = new Jaco([
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙' // 結合文字濁点・半濁点
		].join(''));
		var b = [
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ'
		].join('');
		a.toKatakana(false).toString().should.equal(b);
	});
	it('カタカナ以外は変換しない', function () {
		var a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		var b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toKatakana().toString().should.equal(b);
	});
	it('カタカナ以外は変換しない2', function () {
		var a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		var b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toKatakana(true).toString().should.equal(b);
	});

	// toNarrowKatakana()
	it('半角カタカナに変換', function () {
		var a = new Jaco([
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join(''));
		var b = [
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞ'
		].join('');
		a.toNarrowKatakana().toString().should.equal(b);
	});
	it('半角カタカナに変換2', function () {
		var a = new Jaco([
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join(''));
		var b = [
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ'
		].join('');
		a.toNarrowKatakana(true).toString().should.equal(b);
	});
	it('カタカナとひらがな以外は変換しない', function () {
		var a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		var b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toNarrowKatakana().toString().should.equal(b);
	});
	it('カタカナとひらがな以外は変換しない2', function () {
		var a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		var b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toNarrowKatakana(true).toString().should.equal(b);
	});

	// toWideKatakana()
	it('全角カタカナに変換', function () {
		var a = new Jaco([
			'｡｢｣､･',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join(''));
		var b = [
			'｡｢｣､･',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join('');
		a.toWideKatakana().toString().should.equal(b);
	});

	// toNarrowJapneseSymbol()
	it('日本語記号の半角化', function () {
		var a = new Jaco('。「」、・');
		var b = '｡｢｣､･';
		a.toNarrowJapneseSymbol().toString().should.equal(b);
	});

	// toWideJapneseSymbol()
	it('日本語記号の全角化', function () {
		var a = new Jaco('｡｢｣､･');
		var b = '。「」、・';
		a.toWideJapneseSymbol().toString().should.equal(b);
	});

	// toNarrowJapnese()
	it('日本語半角化', function () {
		var a = new Jaco([
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join(''));
		var b = [
			'｡｢｣､･',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞ'
		].join('');
		a.toNarrowJapnese().toString().should.equal(b);
	});

	// toWideJapnese()
	it('日本語全角化', function () {
		var a = new Jaco([
			'｡｢｣､･',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join(''));
		var b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join('');
		a.toWideJapnese().toString().should.equal(b);
	});

	// toNarrow()
	it('半角化', function () {
		var a = new Jaco([
			'　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
			'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
			'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゙ゐ゙ゔゑ゙を゙',
			'。「」、・'
		].join(''));
		var b = [
			' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
			'abcdefghijklmnopqrstuvwxyz{|}~',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゙ゐ゙ゔゑ゙を゙',
			'。「」、・'
		].join('');
		a.toNarrow().toString().should.equal(b);
	});
	it('半角化2', function () {
		var a = new Jaco([
			'　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
			'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
			'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゙ゐ゙ゔゑ゙を゙',
			'。「」、・'
		].join(''));
		var b = [
			' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
			'abcdefghijklmnopqrstuvwxyz{|}~',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞわﾞゐﾞゔゑﾞをﾞ',
			'｡｢｣､･'
		].join('');
		a.toNarrow(true).toString().should.equal(b);
	});

	// toWide()
	it('全角化', function () {
		var a = new Jaco([
			' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
			'abcdefghijklmnopqrstuvwxyz{|}~',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞわﾞゐﾞゔゑﾞをﾞ',
			'｡｢｣､･'
		].join(''));
		var b = [
			'　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
			'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
			'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゛ゐ゛ゔゑ゛を゛',
			'。「」、・'
		].join('');
		a.toWide().toString().should.equal(b);
	});

	// toNumeric() v0.5.0で追加
	it('数字化', function () {
		var a = new Jaco(' ２３ｓ０３ｓｄｋふぁえ');
		var b = '2303';
		a.toNumeric().toString().should.equal(b);
	});
	it('数字化2', function () {
		var a = new Jaco(' ー-.。２.３ｓ０。３.ｓｄｋふぁえ');
		var b = '2303';
		a.toNumeric().toString().should.equal(b);
	});
	it('数字化3', function () {
		var a = new Jaco(' ２-３ｓ０３ｓｄｋふぁえ');
		var b = '2303';
		a.toNumeric(true).toString().should.equal(b);
	});
	it('数字化4', function () {
		var a = new Jaco('- ２３ｓ０３ｓｄｋふぁえ');
		var b = '-2303';
		a.toNumeric(true).toString().should.equal(b);
	});
	it('数字化5', function () {
		var a = new Jaco(' -２-３-.ｓ０.３ｓｄｋふぁえ');
		var b = '-23.03';
		a.toNumeric(true, true).toString().should.equal(b);
	});
	it('数字化6', function () {
		var a = new Jaco(' ２３.-.-ｓ０３.ｓｄｋふぁえ');
		var b = '23.03';
		a.toNumeric(true, true).toString().should.equal(b);
	});
	it('数字化7', function () {
		var a = new Jaco('- ２３ｓ０３ｓｄｋふぁえ...');
		var b = '2303';
		a.toNumeric(false, true).toString().should.equal(b);
	});

	// isNumeric() v0.5.0で追加
	it('数字かどうか1', function () {
		var a = new Jaco(' ２３ｓ０３ｓｄｋふぁえ');
		a.isNumeric().should.not.ok;
	});
	it('数字かどうか2', function () {
		var a = new Jaco('２３０３');
		a.isNumeric().should.not.ok;
	});
	it('数字かどうか3', function () {
		var a = new Jaco('000012303234');
		a.isNumeric().should.ok;
	});
	it('数字かどうか4', function () {
		var a = new Jaco('-123.3234');
		a.isNumeric().should.ok;
	});
	it('数字かどうか5', function () {
		var a = new Jaco('-123.3234.');
		a.isNumeric().should.not.ok;
	});
	it('数字かどうか6', function () {
		var a = new Jaco('12-3.3234.');
		a.isNumeric().should.not.ok;
	});
	it('数字かどうか7', function () {
		var a = new Jaco('.3234');
		a.isNumeric().should.ok;
	});
	it('数字かどうか8', function () {
		var a = new Jaco('-.3234');
		a.isNumeric().should.ok;
	});
	it('数字かどうか9', function () {
		var a = new Jaco('.3234');
		a.isNumeric(false).should.ok;
	});
	it('数字かどうか10', function () {
		var a = new Jaco('-.3234');
		a.isNumeric(true).should.ok;
	});
	it('数字かどうか11', function () {
		var a = new Jaco('.3234');
		a.isNumeric(true, true).should.ok;
	});
	it('数字かどうか12', function () {
		var a = new Jaco('-.3234');
		a.isNumeric(true, false).should.not.ok;
	});
	it('数字かどうか13', function () {
		var a = new Jaco('.3234');
		a.isNumeric(false, false).should.not.ok;
	});
	it('数字かどうか14', function () {
		var a = new Jaco('-.3234');
		a.isNumeric(false, true).should.not.ok;
	});
	it('濁点・半濁点除去', function () {
		var a = [
			'がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ',
			'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヷヸヴヹヺ'
		].join('');
		var a2 = new Jaco(a);
		var b = [
			'かきくけこさしすせそたちつてとはひふへほはひふへほ',
			'カキクケコサシスセソタチツテトハヒフヘホハヒフヘホワイウエヲ'
		].join('');
		a2.removeVoicedMarks().toString().should.equal(b);
	});
	it('長音符変換', function () {
		var a = [
			'あーぁーかーゕーがーさーざーたーだーなーはーばーぱーまーやーゃーらー',
			'わーゎーいーぃーきーぎーしーじーちーぢーにーひーびーぴーみーりーゐー',
			'うーぅーゔーくーぐーすーずーつーづーぬーふーぶーぷーむーゆーゅーるー',
			'えーぇーけーゖーげーせーぜーてーでーねーへーべーぺーめーれーゑーおー',
			'ぉーこーごーそーぞーとーどーのーほーぼーぽーもーよーょーろーをー',
			'アーァーカーヵーガーサーザーターダーナーハーバーパーマーヤーャーラー',
			'ワーヮーイーィーキーギーシージーチーヂーニーヒービーピーミーリーヰー',
			'ウーゥーヴークーグースーズーツーヅーヌーフーブープームーユーュールー',
			'エーェーケーヶーゲーセーゼーテーデーネーヘーベーペーメーレーヱーオー',
			'ォーコーゴーソーゾートードーノーホーボーポーモーヨーョーローヲー',
			'ヷーヸーヹーヺー',
			'んーっーンーッー'
		].join('');
		var a2 = new Jaco(a);
		var b = [
			'ああぁあかあゕあがあさあざあたあだあなあはあばあぱあまあやあゃあらあ',
			'わあゎあいいぃいきいぎいしいじいちいぢいにいひいびいぴいみいりいゐい',
			'ううぅうゔうくうぐうすうずうつうづうぬうふうぶうぷうむうゆうゅうるう',
			'ええぇえけえゖえげえせえぜえてえでえねえへえべえぺえめえれえゑえおお',
			'ぉおこおごおそおぞおとおどおのおほおぼおぽおもおよおょおろおをお',
			'アアァアカアヵアガアサアザアタアダアナアハアバアパアマアヤアャアラア',
			'ワアヮアイイィイキイギイシイジイチイヂイニイヒイビイピイミイリイヰイ',
			'ウウゥウヴウクウグウスウズウツウヅウヌウフウブウプウムウユウュウルウ',
			'エエェエケエヶエゲエセエゼエテエデエネエヘエベエペエメエレエヱエオオ',
			'ォオコオゴオソオゾオトオドオノオホオボオポオモオヨオョオロオヲオ',
			'ヷアヸイヹエヺオ',
			'んんっっンンッッ'
		].join('');
		a2.convertProlongedSoundMarks().toString().should.equal(b);
	});
	it('長音符変換2', function () {
		new Jaco('ウバッシャアーーーーーーーーー').convertProlongedSoundMarks().toString().should.equal('ウバッシャアアアアアアアアアア');
	});
	it('繰り返し記号変換', function () {
		new Jaco('がくもんのすゝめ').convertIterationMarks().toString().should.equal('がくもんのすすめ');
	});
	it('繰り返し記号変換2', function () {
		new Jaco('がくもんのすゝゝゝゝゝゝゝゝゝゝゝゝめ').convertIterationMarks().toString().should.equal('がくもんのすすすすすすすすすすすすすめ');
	});
	it('繰り返し記号変換3', function () {
		new Jaco('がくもんのすゝゝゝゞゝゝゝゝゝゝゝゝゝめ').convertIterationMarks().toString().should.equal('がくもんのすすすすずすすすすすすすすすめ');
	});
	it('繰り返し記号変換4', function () {
		new Jaco('ゝゞあゝゞかゞゝがゝゞゝ').convertIterationMarks().toString().should.equal('ゝゞあああかがかがかがか');
	});

	it('よみ変換', function () {
		new Jaco('あーぁあゝアア').toPhoeticKana().toString().should.equal('あああああああ');
	});


});

describe('Jaco Static Methods', function () {
	it('半角を全角カタカナに変換', function () {
		Jaco.katakanize('ｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞ').should.equal('ガガガガガガガガ');
	});
	it('ひらがなをカタカナに変換', function () {
		var test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
		].join('');
		var mean = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ'
		].join('');
		Jaco.katakanize(test).should.equal(mean);
	});
	it('カタカナをひらがなに変換', function () {
		var test = [
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ'
		].join('');
		var mean = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゛ゐ゛ゔゑ゛を゛'
		].join('');
		Jaco.hiraganize(test).should.equal(mean);
	});
	it('カタカナをひらがなに変換(濁点・半濁点を結合文字に変換)', function () {
		var test = [
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ'
		].join('');
		var mean = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゙ゐ゙ゔゑ゙を゙'
		].join('');
		Jaco.hiraganize(test, true).should.equal(mean);
	});
	it('カタカナをひらがなに変換', function () {
		Jaco.hiraganize('ガガガガガガガガ').should.equal('がががががががが');
	});
	it('カタカナをひらがなに変換', function () {
		Jaco.hiraganize('ガガガガガガガガ').should.equal('がががががががが');
	});
	it('五十音順ソート', function() {
		var origin = [
			'きたきゅうしゅうし',
			'ふくおかし',
			'おおむたし',
			'くるめし',
			'のおがたし',
			'いいづかし',
			'たがわし',
			'やながわし',
			'やめし',
			'ちくごし',
			'おおかわし',
			'ゆくはしし',
			'ぶぜんし',
			'なかまし',
			'おごおりし',
			'ちくしのし',
			'かすがし',
			'おおのじょうし',
			'むなかたし',
			'だざいふし',
			'こがし',
			'ふくつし',
			'うきはし',
			'みやわかし',
			'かまし',
			'あさくらし',
			'みやまし',
			'いとしまし',
			'ちくしぐん',
			'かすやぐん',
			'おんがぐん',
			'くらてぐん',
			'かほぐん',
			'あさくらぐん',
			'みいぐん',
			'みずまぐん',
			'やめぐん',
			'たがわぐん',
			'みやこぐん',
			'ちくじょうぐん'
		];
		var sorted = Jaco.naturalKanaSort(origin);
		sorted.should.eql([
			'あさくらぐん',
			'あさくらし',
			'いいづかし',
			'いとしまし',
			'うきはし',
			'おおかわし',
			'おおのじょうし',
			'おおむたし',
			'おごおりし',
			'おんがぐん',
			'かすがし',
			'かすやぐん',
			'かほぐん',
			'かまし',
			'きたきゅうしゅうし',
			'くらてぐん',
			'くるめし',
			'こがし',
			'たがわぐん',
			'たがわし',
			'だざいふし',
			'ちくごし',
			'ちくしぐん',
			'ちくしのし',
			'ちくじょうぐん',
			'なかまし',
			'のおがたし',
			'ふくおかし',
			'ふくつし',
			'ぶぜんし',
			'みいぐん',
			'みずまぐん',
			'みやこぐん',
			'みやまし',
			'みやわかし',
			'むなかたし',
			'やながわし',
			'やめぐん',
			'やめし',
			'ゆくはしし'
		]);
	});
	it('五十音順ソート2', function() {
		var origin = [
			'あい゛',
			'あい'
		];
		var sorted = Jaco.naturalKanaSort(origin);
		sorted.should.eql([
			'あい',
			'あい゛'
		]);
	});
	it('五十音順ソート3', function() {
		var origin = [
			'あい',
			'あー'
		];
		var sorted = Jaco.naturalKanaSort(origin);
		sorted.should.eql([
			'あー',
			'あい'
		]);
	});
	it('五十音順ソート4', function() {
		var origin = [
			'かゞくのこ',
			'がゝくのと'
		];
		var sorted = Jaco.naturalKanaSort(origin);
		sorted.should.eql([
			'かゞくのこ',
			'がゝくのと'
		]);
	});
	it('五十音順ソート5', function() {
		var origin = [
			'ほぼぼぼ',
			'ほぼほぼ',
			'ぼぼほぼ',
			'ほぼほほ'
		];
		var sorted = Jaco.naturalKanaSort(origin);
		sorted.should.eql([
			'ほぼほほ',
			'ほぼほぼ',
			'ほぼぼぼ',
			'ぼぼほぼ'
		]);
	});
	it('五十音順ソート6', function() {
		var origin = [
			'ほぼぼゞ',
			'ほぼゝぼ',
			'ぼぼゝぼ',
			'ほゞほゝ'
		];
		var sorted = Jaco.naturalKanaSort(origin);
		sorted.should.eql([
			'ほゞほゝ',
			'ほぼゝぼ',
			'ほぼぼゞ',
			'ぼぼゝぼ'
		]);
	});
	it('五十音順ソート7', function() {
		var origin = [
			'ばああ',
			'ハあぁ',
			'ハああ',
			'パああ',
			'ばあぁ',
			'ばあー',
			'パあぁ',
			'はあゝ',
			'はああ',
			'バあー',
			'はあー',
			'バあぁ',
			'はあぁ',
			'ハあゝ',
			'ばあゝ',
			'バあゝ',
			'ぱああ',
			'ぱあぁ',
			'ハあー',
			'バああ',
			'ぱあー',
			'ぱあゝ',
			'パあー',
			'パあゝ'
		];
		var sorted = Jaco.naturalKanaSort(origin);
		sorted.should.eql([
			'はあー',
			'ハあー',
			'はあぁ',
			'ハあぁ',
			'はあゝ',
			'ハあゝ',
			'はああ',
			'ハああ',
			'ばあー',
			'バあー',
			'ばあぁ',
			'バあぁ',
			'ばあゝ',
			'バあゝ',
			'ばああ',
			'バああ',
			'ぱあー',
			'パあー',
			'ぱあぁ',
			'パあぁ',
			'ぱあゝ',
			'パあゝ',
			'ぱああ',
			'パああ'
		]);
	});
	it('五十音順ソート8', function() {
		var origin = [
			'ベンティアドショットヘーゼルナッツバニラアーモンドキャラメルエキストラホイップキャラメルソースモカソースランバチップチョコレートクリームフラペチーノ',
			'キャプテン・ファンタスティック・ファースター・ザン・スーパーマン・スパイダーマン・バットマン・ウルヴァリン・ハルク・アンド・ザ・フラッシュ・コンバインド',
			'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'クルンテープマハーナコーン・アモンラッタナコーシン まヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'クルンテープマハーナコーン・アモンラッタナコォシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'チャーゴグガゴグマンチャウグガゴグチャウバナガンガマウグ',
			'ランヴァイル・プルグウィンギル・ゴゲリフウィルンドロブル・ランティシリオゴゴゴホ',
			'リュウグウノオトヒメノモトユイノキリハズシ',
			'ミツクリエナガチョウチンアンコウ',
			'オガサワラチビヒョウタンヒゲナガゾウムシ',
			'パブロ・ディエゴ・ホセ・フランシスコ・デ・パウラ・ファン・ネポムセノ・マリア・デ・ロス・レメディオス・クリスピン・クリスピニャーノ・デ・ラ・サンテシマ・トリニダー・ルイス・イ・ピカソ'
		];
		var sorted = Jaco.naturalKanaSort(origin);
		sorted.should.eql([
			'オガサワラチビヒョウタンヒゲナガゾウムシ',
			'キャプテン・ファンタスティック・ファースター・ザン・スーパーマン・スパイダーマン・バットマン・ウルヴァリン・ハルク・アンド・ザ・フラッシュ・コンバインド',
			'クルンテープマハーナコーン・アモンラッタナコーシン まヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'クルンテープマハーナコーン・アモンラッタナコーシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'クルンテープマハーナコーン・アモンラッタナコォシン マヒンタラーユッタヤーマハーディロック・ポップノッパラッタ・ラーチャターニーブリーロム・ウドムラーチャニウェート・マハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット',
			'チャーゴグガゴグマンチャウグガゴグチャウバナガンガマウグ',
			'パブロ・ディエゴ・ホセ・フランシスコ・デ・パウラ・ファン・ネポムセノ・マリア・デ・ロス・レメディオス・クリスピン・クリスピニャーノ・デ・ラ・サンテシマ・トリニダー・ルイス・イ・ピカソ',
			'ベンティアドショットヘーゼルナッツバニラアーモンドキャラメルエキストラホイップキャラメルソースモカソースランバチップチョコレートクリームフラペチーノ',
			'ミツクリエナガチョウチンアンコウ',
			'ランヴァイル・プルグウィンギル・ゴゲリフウィルンドロブル・ランティシリオゴゴゴホ',
			'リュウグウノオトヒメノモトユイノキリハズシ'
		]);
	});
	it('五十音順ソート9', function() {
		var origin = [
			'dパああ',
			'eばあぁ',
			'cハああ',
			'fパあぁ',
			'fバあぁ2',
			'fばあー',
			'bハあぁ',
			'fバあー',
			'７ぱあゝ',
			'aばああ',
			'fはあー1',
			'８パあー',
			'４ハあー',
			'fはああ',
			'fハあゝ4',
			'fはあぁ3',
			'６ぱあー',
			'1バあゝ',
			'2ぱああ',
			'３ぱあぁ',
			'0ばあゝ',
			'５バああ',
			'fはあゝ',
			'９パあゝ'
		];
		var sorted = Jaco.naturalKanaSort(origin);
		sorted.should.eql([
			'0ばあゝ',
			'1バあゝ',
			'2ぱああ',
			'３ぱあぁ',
			'４ハあー',
			'５バああ',
			'６ぱあー',
			'７ぱあゝ',
			'８パあー',
			'９パあゝ',
			'aばああ',
			'bハあぁ',
			'cハああ',
			'dパああ',
			'eばあぁ',
			'fはあゝ',
			'fはああ',
			'fばあー',
			'fバあー',
			'fパあぁ',
			'fはあー1',
			'fバあぁ2',
			'fはあぁ3',
			'fハあゝ4'
		]);
	});
	it('五十音順ソート10', function() {
		var origin = [
			'あぁああ',
			'ああぁァ',
			'あかカぁ',
			'ァアァカ'
		];
		var sorted = Jaco.naturalKanaSort(origin);
		sorted.should.eql([
			'あぁああ',
			'ああぁァ',
			'ァアァカ',
			'あかカぁ'
		]);
	});
	it('五十音順ソート11(引数なし)', function(done) {
		try {
			var sorted = Jaco.naturalKanaSort();
		} catch (error) {
			done();
		}
	});
});

describe('jaco command', function () {

	var HELP_STDOUT = '\n\
  Usage: jaco [options] <string> [fileOption] <path>\n\
\n\
  Options:\n\
\n\
    -h, --help                 output usage information\n\
    -V, --version              output the version number\n\
    -f, --file <path>          convert in file\n\
    -o, --output <path>        output to file\n\
    -K, --katakanize [string]  katakanize method\n\
    -H, --hiraganize [string]  hiraganize method\n\
\n';

	it('引数なしでヘルプが出力', function(done) {
		exec('./bin/jaco', function(error, stdout, stderr) {
			stdout.should.equal(HELP_STDOUT);
			should.not.exist(error);
			done();
		});
	});

	it('引数 -h でヘルプが出力', function(done) {
		exec('./bin/jaco -h', function(error, stdout, stderr) {
			stdout.should.equal(HELP_STDOUT);
			should.not.exist(error);
			done();
		});
	});

	it('引数 --help でヘルプが出力', function(done) {
		exec('./bin/jaco --help', function(error, stdout, stderr) {
			stdout.should.equal(HELP_STDOUT);
			should.not.exist(error);
			done();
		});
	});

	it('引数 -K のみ', function(done) {
		exec('./bin/jaco -K', function(error, stdout, stderr) {
			/^jaco:\s[0-9]+ms$/.test(stdout.trim()).should.ok;
			should.not.exist(error);
			done();
		});
	});

	it('引数 -H のみ', function(done) {
		exec('./bin/jaco -H', function(error, stdout, stderr) {
			/^jaco:\s[0-9]+ms$/.test(stdout.trim()).should.ok;
			should.not.exist(error);
			done();
		});
	});

	it('引数 -K と 文字列', function(done) {
		exec('./bin/jaco -K あいうえお', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[0].should.equal('アイウエオ');
			should.not.exist(error);
			done();
		});
	});

	it('引数 -H と 文字列', function(done) {
		exec('./bin/jaco -H アイウエオ', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[0].should.equal('あいうえお');
			should.not.exist(error);
			done();
		});
	});

	it('引数 -H と -K と 文字列', function(done) {
		exec('./bin/jaco -H ドラえもん -K ドラえもん', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[0].should.equal('どらえもん');
			line[1].should.equal('ドラエモン');
			should.not.exist(error);
			done();
		});
	});

	it('引数 -H と -K と 文字列 (順序逆)', function(done) {
		exec('./bin/jaco -K ドラえもん -H ドラえもん', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[0].should.equal('ドラエモン');
			line[1].should.equal('どらえもん');
			should.not.exist(error);
			done();
		});
	});

	it('引数 -f のみでエラー出力', function(done) {
		exec('./bin/jaco -f', function(error, stdout, stderr) {
			stderr.trim().should.equal('error: option `-f, --file <path>\' argument missing');
			should.exist(error);
			done();
		});
	});

	it('引数 -f と 存在しないパスでエラー出力', function(done) {
		exec('./bin/jaco -f xxx/xxx', function(error, stdout, stderr) {
			stderr.trim().should.equal('no such file or directory "xxx/xxx"');
			should.not.exist(error);
			done();
		});
	});

	it('引数 -f と テキストファイル (変換オプションなし)', function(done) {
		exec('./bin/jaco -f test/test.txt', function(error, stdout, stderr) {
			/^jaco:\s[0-9]+ms$/.test(stdout.trim()).should.ok;
			should.not.exist(error);
			done();
		});
	});

	it('引数 -K と -f と テキストファイル', function(done) {
		exec('./bin/jaco -K -f test/test.txt', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[0].should.equal('test/test.txt - converting "katakanize" method');
			line[1].should.equal('テスト');
			line[2].should.equal('テスト');
			line[3].should.equal('テスト');
			line[4].should.equal('[EOF]');
			should.not.exist(error);
			done();
		});
	});

	it('引数 -H と -f と テキストファイル', function(done) {
		exec('./bin/jaco -H -f test/test.txt', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[0].should.equal('test/test.txt - converting "hiraganize" method');
			line[1].should.equal('てすと');
			line[2].should.equal('てすと');
			line[3].should.equal('てすと');
			line[4].should.equal('[EOF]');
			should.not.exist(error);
			done();
		});
	});

	it('TODO: 引数 -H と -K 同時の -f ファイル変換', function(done) {
		exec('./bin/jaco -H -K -f test/test.txt', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[0].should.equal('test/test.txt - converting "katakanize" method');
			line[1].should.equal('テスト');
			line[2].should.equal('テスト');
			line[3].should.equal('テスト');
			line[4].should.equal('[EOF]');
			should.not.exist(error);
			done();
		});
	});

	it('TODO: 引数 -H と -K 同時の -f ファイル変換（-H -K 引数反転 -K の優先の確認）', function(done) {
		exec('./bin/jaco -K -H -f test/test.txt', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[0].should.equal('test/test.txt - converting "katakanize" method');
			line[1].should.equal('テスト');
			line[2].should.equal('テスト');
			line[3].should.equal('テスト');
			line[4].should.equal('[EOF]');
			should.not.exist(error);
			done();
		});
	});

	it('TODO: 引数 -o のみでエラー出力', function(done) {
		exec('./bin/jaco -o', function(error, stdout, stderr) {
			stderr.trim().should.equal('error: option `-o, --output <path>\' argument missing');
			should.exist(error);
			done();
		});
	});

	it('TODO: 引数 -o あり -f なしでエラー出力', function(done) {
		exec('./bin/jaco -o test/test-r.txt', function(error, stdout, stderr) {
			stderr.trim().should.equal('error: option `-f, --file <path>\' argument missing');
			should.not.exist(error);
			done();
		});
	});

	it('TODO: 引数 -o ファイル生成', function(done) {
		exec('rm test/test-r.txt; ./bin/jaco -K -f test/test.txt -o test/test-r.txt; cat test/test-r.txt', function(error, stdout, stderr) {
			fs.existsSync('test/test-r.txt').should.ok;
			done();
		});
	});

	it('TODO: 引数 -o 変更権限なしでエラー出力', function(done) {
		exec('chmod 444 test/test-r.txt; ./bin/jaco -K -f test/test.txt -o test/test-r.txt', function(error, stdout, stderr) {
			stderr.trim().should.equal('cannot create/write to file "test/test-r.txt"');
			should.not.exist(error);
			done();
		});
	});

	it('TODO: 引数 -H 変換で -o の出力', function(done) {
		exec('chmod 755 test/test-r.txt; ./bin/jaco -H -f test/test.txt -o test/test-r.txt; cat test/test-r.txt', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[1].should.equal('てすと');
			line[2].should.equal('てすと');
			line[3].should.equal('てすと');
			should.not.exist(error);
			done();
		});
	});


	it('TODO: 引数 -K 変換で -o の出力', function(done) {
		exec('chmod 755 test/test-r.txt; ./bin/jaco -K -f test/test.txt -o test/test-r.txt; cat test/test-r.txt', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[1].should.equal('テスト');
			line[2].should.equal('テスト');
			line[3].should.equal('テスト');
			should.not.exist(error);
			done();
		});
	});

	it('TODO: 引数 -H と -K 同時の -f ファイル変換 -o で出力 (※最初に指定されたオプションが優先)', function(done) {
		exec('chmod 755 test/test-r.txt; ./bin/jaco -H -K -f test/test.txt -o test/test-r.txt; cat test/test-r.txt', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[1].should.equal('てすと');
			line[2].should.equal('てすと');
			line[3].should.equal('てすと');
			should.not.exist(error);
			done();
		});
	});

	it('TODO: 引数 -H と -K 同時の -f ファイル変換 -o で出力 (順番逆) (※最初に指定されたオプションが優先)', function(done) {
		exec('chmod 755 test/test-r.txt; ./bin/jaco -K -H -f test/test.txt -o test/test-r.txt; cat test/test-r.txt', function(error, stdout, stderr) {
			var line = stdout.split(/[\n\r]+/);
			line[1].should.equal('テスト');
			line[2].should.equal('テスト');
			line[3].should.equal('テスト');
			should.not.exist(error);
			done();
		});
	});

});
