var should = require('should');
var jaco = require('../lib/jaco.min.js');
var Jaco = jaco.Jaco;

describe('Jaco Class', function () {

	// constructor
	it('newされたインスタンスは別のオブジェクト', function () {
		var a = new Jaco('あ');
		var b = new Jaco('あ');
		a.should.not.equal(b);
	});
	it('newがなくてもコンストラクタとして機能する', function () {
		var a = Jaco('あ');
		(a instanceof Jaco).should.ok;
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
		a.concat('い', new Jaco('う'), 'え', Jaco('お'));
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

});

describe('jaco Module', function () {
	it('半角を全角カタカナに変換', function () {
		jaco.katakanize('ｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞｶﾞ').should.equal('ガガガガガガガガ');
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
		jaco.katakanize(test).should.equal(mean);
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
		jaco.hiraganize(test).should.equal(mean);
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
		jaco.hiraganize(test, true).should.equal(mean);
	});
	it('カタカナをひらがなに変換', function () {
		jaco.hiraganize('ガガガガガガガガ').should.equal('がががががががが');
	});
	it('カタカナをひらがなに変換', function () {
		jaco.hiraganize('ガガガガガガガガ').should.equal('がががががががが');
	});
});
