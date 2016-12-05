import Jaco from '../lib/jaco';
import should from 'should';

import 'babel-polyfill';

/**
 * `U+D7FF` 上位サロゲートのコードポイントひとつ前の文字
 */
const BEFORE_HIGH = '\uD7FF';

/**
 * `U+D800` 最初の上位サロゲート文字
 */
const START_HIGH = '\uD800';

/**
 * `U+DBFF` 最後の上位サロゲート文字
 */
const END_HIGH = '\uDBFF';

/**
 * `U+DC00` 最初の上位サロゲート文字
 */
const START_LOW = '\uDC00';

/**
 * `U+DFFF` 最後の下位サロゲート文字
 */
const END_LOW = '\uDFFF';

/**
 * `U+E000` 最後の下位サロゲート文字のコードポイントひとつ次の文字
 */
const AFTER_LOW = '\uE000';

describe('Jaco Class', () => {

	// constructor
	it('newされたインスタンスは別のオブジェクト', () => {
		const a = new Jaco('あ');
		const b = new Jaco('あ');
		a.should.not.equal(b);
	});

	// length
	it('文字列長', () => {
		const a = new Jaco('魚花');
		a.length.should.equal(2);
	});

	// length
	it('文字列長', () => {
		const a = new Jaco('𩸽のひらき');
		a.length.should.equal(5);
	});

	// append()
	it('後方結合', () => {
		const a = new Jaco('あい');
		a.append('うえお').toString().should.equal('あいうえお');
	});

	// append()
	it('後方結合2', () => {
		const a = new Jaco('いろは');
		a.append(new Jaco('にほへと')).toString().should.equal('いろはにほへと');
	});

	// byteSize()
	it('バイト数', () => {
		const a = new Jaco('あいうえおabc');
		a.byteSize().should.equal(18);
	});

	// byteSize()
	it('バイト数2', () => {
		const a = new Jaco('あ い う え\nお a b c');
		a.byteSize().should.equal(25);
	});

	// charAt()
	it('抜き出し', () => {
		const a = new Jaco('𩸽のひらき');
		a.charAt().toString().should.equal('𩸽');
	});

	// charAt()
	it('抜き出し2', () => {
		const a = new Jaco('𩸽のひらき');
		a.charAt(0).toString().should.equal('𩸽');
	});

	// charAt()
	it('抜き出し3', () => {
		const a = new Jaco('𩸽のひらき');
		a.charAt(1).toString().should.equal('の');
	});

	// charAt()
	it('抜き出し4', () => {
		const a = new Jaco('𩸽のひらき');
		a.charAt(99).toString().should.equal('');
	});

	// charCodeAt()
	it('コード抜き出し', () => {
		const a = new Jaco('𩸽のひらき');
		a.charCodeAt().should.equal(0x29E3D);
	});

	// charCodeAt()
	it('コード抜き出し2', () => {
		const a = new Jaco('𩸽のひらき');
		a.charCodeAt(0).should.equal(0x29E3D);
	});

	// charCodeAt()
	it('コード抜き出し3', () => {
		const a = new Jaco('𩸽のひらき');
		a.charCodeAt(1).should.equal(0x306e);
	});

	// charCodeAt()
	it('コード抜き出し4', () => {
		const a = new Jaco('𩸽のひらき');
		a.charCodeAt(99).should.be.eql(NaN);
	});

	// clone()
	it('コピー', () => {
		const a = new Jaco('あ');
		const b = a.clone();
		a.should.not.equal(b);
	});

	// clone()
	it('コピー', () => {
		const a = new Jaco('あ');
		const b = a.clone();
		a.toString().should.equal(b.toString());
	});

	// combinateSoundMarks()
	it('濁点・半濁点の結合', () => {
		const a = new Jaco('か゛き゛く゛け゛こ゛');
		a.combinateSoundMarks(true).toString().should.equal('がぎぐげご');
	});

	// combinateSoundMarks()
	it('濁点・半濁点の結合2', () => {
		const a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
		a.combinateSoundMarks(true).toString().should.equal('ぱぴぷぺぽ');
	});

	// combinateSoundMarks()
	it('濁点・半濁点の結合3', () => {
		const a = new Jaco('か゛き゛く゛け゛こ゛');
		a.combinateSoundMarks().toString().should.equal('がぎぐげご');
	});

	// combinateSoundMarks()
	it('濁点・半濁点の結合4', () => {
		const a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
		a.combinateSoundMarks().toString().should.equal('ぱぴぷぺぽ');
	});

	// combinateSoundMarks()
	it('濁点・半濁点の結合5', () => {
		const a = new Jaco('がぎぐげご');
		a.combinateSoundMarks().toString().should.equal('がぎぐげご');
	});

	// combinateSoundMarks()
	it('濁点・半濁点の結合6', () => {
		const a = new Jaco('ぱぴぷぺぽ');
		a.combinateSoundMarks().toString().should.equal('ぱぴぷぺぽ');
	});

	// concat()
	it('連結', () => {
		const a = new Jaco('あ');
		a.concat('い', new Jaco('う'), 'え', new Jaco('お'), ['か', new Jaco('き')]).toString().should.equal('あいうえおかき');
	});

	// convertIterationMarks()
	it('繰り返し記号変換', () => {
		new Jaco('がくもんのすゝめ').convertIterationMarks().toString().should.equal('がくもんのすすめ');
	});

	// convertIterationMarks()
	it('繰り返し記号変換2', () => {
		new Jaco('がくもんのすゝゝゝゝゝゝゝゝゝゝゝゝめ').convertIterationMarks().toString().should.equal('がくもんのすすすすすすすすすすすすすめ');
	});

	// convertIterationMarks()
	it('繰り返し記号変換3', () => {
		new Jaco('がくもんのすゝゝゝゞゝゝゝゝゝゝゝゝゝめ').convertIterationMarks().toString().should.equal('がくもんのすすすすずすすすすすすすすすめ');
	});

	// convertIterationMarks()
	// TODO: これあってる？
	it('繰り返し記号変換4', () => {
		new Jaco('ゝゞあゝゞかゞゝがゝゞゝ').convertIterationMarks().toString().should.equal('ゝゞあああかがかがかがか');
	});

	// convertProlongedSoundMarks()
	it('長音符変換', () => {
		const a = [
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
			'んーっーンーッー',
		].join('');
		const a2 = new Jaco(a);
		const b = [
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
			'んんっっンンッッ',
		].join('');
		a2.convertProlongedSoundMarks().toString().should.equal(b);
	});

	// convertProlongedSoundMarks()
	it('長音符変換2', () => {
		new Jaco('ウバッシャアーーーーーーーーー').convertProlongedSoundMarks().toString().should.equal('ウバッシャアアアアアアアアアア');
	});

	// endWith()
	it('末尾合致 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.endWith('ひらき').should.ok();
	});

	// endWith()
	it('末尾合致2 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.endWith('𩸽の').should.not.ok();
	});

	// endWith()
	it('末尾合致3 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.endWith('ひら', 4).should.ok();
	});

	// endWith()
	it('末尾合致4 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.endWith('𩸽の', 2).should.ok();
	});

	// endWith()
	it('末尾合致5 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.endWith(new Jaco('ひら'), 4).should.ok();
	});

	// endWith()
	it('末尾合致6 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.endWith(new Jaco('𩸽の'), 2).should.ok();
	});

	// has()
	it('含むかどうか', () => {
		const a = new Jaco('いろは');
		a.has('い').should.ok();
	});

	// has()
	it('含むかどうか2', () => {
		const a = new Jaco('いろは');
		a.has(new Jaco('い')).should.ok();
	});

	// has()
	it('含むかどうか3', () => {
		const a = new Jaco('いろは');
		a.has(new Jaco('あ')).should.not.ok();
	});

	// has()
	it('含むかどうか4', () => {
		const a = new Jaco('いろは');
		a.has('いろ').should.ok();
	});

	// has()
	it('含むかどうか5', () => {
		const a = new Jaco('いろは');
		a.has('いは').should.ok();
	});

	// has()
	it('含むかどうか6', () => {
		const a = new Jaco('いろは');
		a.has('ろは').should.ok();
	});

	// has()
	it('含むかどうか7', () => {
		const a = new Jaco('いろは');
		a.has('にほへと').should.not.ok();
	});

	// has()
	it('含むかどうか8', () => {
		const a = new Jaco('いろは');
		a.has('a-z').should.not.ok();
	});

	// has()
	it('含むかどうか9', () => {
		const a = new Jaco('いろは');
		a.has('あ-ん').should.ok();
	});

	// hasSurrogatePair
	it('サロゲートペア検知', () => {
		new Jaco('𩸽のひらき').hasSurrogatePair().should.be.true();
	});

	// hasSurrogatePair
	it('サロゲートペア検知2', () => {
		new Jaco('ほっけのひらき').hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知3 (上位サロゲートのコードポイントひとつ前の文字)', () => {
		new Jaco(BEFORE_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知4 (上位サロゲートのみ)', () => {
		new Jaco(START_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知5 (上位サロゲートのみ 最後のコードポイント)', () => {
		new Jaco(END_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知6 (下位サロゲートのみ)', () => {
		new Jaco(START_LOW).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知7 (下位サロゲートのみ 最後のコードポイント)', () => {
		new Jaco(END_LOW).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知8 (下位サロゲートのコードポイントひとつ次の文字)', () => {
		new Jaco(AFTER_LOW).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知9 (上位サロゲートのコードポイントひとつ前の文字 + 上位サロゲートのコードポイントひとつ前の文字)', () => {
		new Jaco(BEFORE_HIGH + BEFORE_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知10 (上位サロゲートのみ + 上位サロゲートのコードポイントひとつ前の文字)', () => {
		new Jaco(START_HIGH + BEFORE_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知11 (上位サロゲートのみ 最後のコードポイント + 上位サロゲートのコードポイントひとつ前の文字)', () => {
		new Jaco(END_HIGH + BEFORE_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知12 (下位サロゲートのみ + 上位サロゲートのコードポイントひとつ前の文字)', () => {
		new Jaco(START_LOW + BEFORE_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知13 (下位サロゲートのコードポイントひとつ次の文字 + 上位サロゲートのコードポイントひとつ前の文字)', () => {
		new Jaco(AFTER_LOW + BEFORE_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知14 (下位サロゲート コードポイントひとつ次 + 上位サロゲートのコードポイントひとつ前の文字)', () => {
		new Jaco(AFTER_LOW + BEFORE_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知15 (上位サロゲートのコードポイントひとつ前の文字 + 上位サロゲート)', () => {
		new Jaco(BEFORE_HIGH + START_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知16 (上位サロゲートのみ + 上位サロゲート)', () => {
		new Jaco(START_HIGH + START_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知17 (上位サロゲートのみ 最後のコードポイント + 上位サロゲート)', () => {
		new Jaco(END_HIGH + START_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知18 (下位サロゲートのみ + 上位サロゲート)', () => {
		new Jaco(END_LOW + START_LOW).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知19 (下位サロゲートのコードポイントひとつ次の文字 + 上位サロゲート)', () => {
		new Jaco(AFTER_LOW + START_HIGH).hasSurrogatePair().should.be.false();
	});

	// hasSurrogatePair
	it('サロゲートペア検知20 (下位サロゲート コードポイントひとつ次 + 上位サロゲート)', () => {
		new Jaco(AFTER_LOW + START_LOW).hasSurrogatePair().should.be.false();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知', () => {
		new Jaco('𩸽のひらき').hasUnpairedSurrogate().should.be.false();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知2', () => {
		new Jaco('𩸽𩸽𩸽𩸽𩸽').hasUnpairedSurrogate().should.be.false();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知3', () => {
		new Jaco('ほっけのひらき').hasUnpairedSurrogate().should.be.false();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知4', () => {
		new Jaco(BEFORE_HIGH).hasUnpairedSurrogate().should.be.false();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知5', () => {
		new Jaco(BEFORE_HIGH + START_HIGH).hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知6', () => {
		new Jaco(BEFORE_HIGH + START_HIGH + END_HIGH).hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知7', () => {
		new Jaco('\ud867ほっけのひらき').hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知8', () => {
		new Jaco('ほっけのひらき\ud867').hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知9', () => {
		new Jaco('ほっけ\ud867のひらき').hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知10', () => {
		new Jaco('ほっけ\ude3dのひらき').hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知11', () => {
		new Jaco('𩸽\ude3dのひらき').hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知12', () => {
		new Jaco('𩸽\ud867のひらき').hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知13', () => {
		new Jaco('\ude3d𩸽のひらき').hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知14', () => {
		new Jaco('\ud867𩸽のひらき').hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知15', () => {
		new Jaco('ひらきにする𩸽\ud867').hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知16', () => {
		new Jaco('ひらきにする𩸽\ude3d').hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知17', () => {
		new Jaco('ひらきにする\ud867𩸽').hasUnpairedSurrogate().should.be.true();
	});

	// hasUnpairedSurrogate
	it('不完全サロゲートペア検知18', () => {
		new Jaco('ひらきにする\ude3d𩸽').hasUnpairedSurrogate().should.be.true();
	});

	// includes()
	it('部分合致', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.includes('𩸽の').should.ok();
	});

	// includes()
	it('部分合致2', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.includes('の刺し身の切り').should.ok();
	});

	// includes()
	it('部分合致3', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.includes('𩸽の刺しの切り身').should.not.ok();
	});

	// indexOf()
	it('前方検索', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.indexOf('の').should.equal(1);
	});

	// indexOf()
	it('前方検索2', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.indexOf('の', 3).should.equal(5);
	});

	// indexOf()
	it('前方検索3', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.indexOf(new Jaco('の')).should.equal(1);
	});

	// indexOf()
	it('前方検索4', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.indexOf(new Jaco('の'), 3).should.equal(5);
	});

	// indexOf()
	it('前方検索5', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.indexOf(new Jaco('挿し')).should.equal(-1);
	});

	// indexOf()
	it('前方検索6', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.indexOf(new Jaco('𩸽の刺し')).should.equal(0);
	});

	// indexOf()
	it('前方検索7', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.indexOf(new Jaco('身の切り身')).should.equal(4);
	});

	// is()
	it('完全マッチ', () => {
		const a = new Jaco('いろは');
		a.is('いろは').should.ok();
	});

	// is()
	it('完全マッチ2', () => {
		const a = new Jaco('いろは');
		a.is(new Jaco('いろは')).should.ok();
	});

	// is()
	it('完全マッチ3', () => {
		const a = new Jaco('いろは');
		a.is('いろはに').should.not.ok();
	});

	// is()
	it('完全マッチ4', () => {
		const a = new Jaco('いろは');
		a.is(new Jaco('いろはに')).should.not.ok();
	});

	// isEmpty()
	it('空', () => {
		const a = new Jaco('');
		a.isEmpty().should.ok();
	});
	it('空2', () => {
		const a = new Jaco(' ');
		a.isEmpty().should.not.ok();
	});

	// isNumeric()
	it('数字かどうか1', () => {
		const a = new Jaco(' ２３ｓ０３ｓｄｋふぁえ');
		a.isNumeric().should.not.ok();
	});

	// isNumeric()
	it('数字かどうか2', () => {
		const a = new Jaco('２３０３');
		a.isNumeric().should.not.ok();
	});

	// isNumeric()
	it('数字かどうか3', () => {
		const a = new Jaco('000012303234');
		a.isNumeric().should.ok();
	});

	// isNumeric()
	it('数字かどうか4', () => {
		const a = new Jaco('-123.3234');
		a.isNumeric().should.ok();
	});

	// isNumeric()
	it('数字かどうか5', () => {
		const a = new Jaco('-123.3234.');
		a.isNumeric().should.not.ok();
	});

	// isNumeric()
	it('数字かどうか6', () => {
		const a = new Jaco('12-3.3234.');
		a.isNumeric().should.not.ok();
	});

	// isNumeric()
	it('数字かどうか7', () => {
		const a = new Jaco('.3234');
		a.isNumeric().should.ok();
	});

	// isNumeric()
	it('数字かどうか8', () => {
		const a = new Jaco('-.3234');
		a.isNumeric().should.ok();
	});

	// isNumeric()
	it('数字かどうか9', () => {
		const a = new Jaco('.3234');
		a.isNumeric(false).should.ok();
	});

	// isNumeric()
	it('数字かどうか10', () => {
		const a = new Jaco('-.3234');
		a.isNumeric(true).should.ok();
	});

	// isNumeric()
	it('数字かどうか11', () => {
		const a = new Jaco('.3234');
		a.isNumeric(true, true).should.ok();
	});

	// isNumeric()
	it('数字かどうか12', () => {
		const a = new Jaco('-.3234');
		a.isNumeric(true, false).should.not.ok();
	});

	// isNumeric()
	it('数字かどうか13', () => {
		const a = new Jaco('.3234');
		a.isNumeric(false, false).should.not.ok();
	});

	// isNumeric()
	it('数字かどうか14', () => {
		const a = new Jaco('-.3234');
		a.isNumeric(false, true).should.not.ok();
	});

	// isOnly()
	it('該当の文字のみ', () => {
		const a = new Jaco('いろは');
		a.isOnly('いろはにほへと').should.ok();
	});

	// isOnly()
	it('該当の文字のみ2', () => {
		const a = new Jaco('いろは');
		a.isOnly('いはにほへと').should.not.ok();
	});

	// isOnly()
	it('該当の文字のみ3', () => {
		const a = new Jaco('abcいろは');
		a.isOnly('いろはにほへと').should.not.ok();
	});

	// isOnly()
	it('該当の文字のみ4', () => {
		const a = new Jaco('いろは');
		a.isOnly('いろは').should.ok();
	});

	// isOnly()
	it('該当の文字のみ5', () => {
		const a = new Jaco('いろは');
		a.isOnly('いろ').should.not.ok();
	});

	// isOnly()
	it('該当の文字のみ6', () => {
		const a = new Jaco('いろは');
		a.isOnly('いろろろろははははにににに').should.ok();
	});

	// isOnly()
	it('該当の文字のみ7', () => {
		const a = new Jaco('いろはち');
		a.isOnly('いろはにほへと').should.not.ok();
	});

	// isOnly()
	it('該当の文字のみ8', () => {
		const a = new Jaco('いろはち');
		a.isOnly(']()[][').should.not.ok();
	});

	// isOnly()
	it('該当の文字のみ9', () => {
		const a = new Jaco('\\');
		a.isOnly(']()[]\\').should.ok();
	});

	// isOnly()
	it('該当の文字のみ10', () => {
		const a = new Jaco('\\');
		a.isOnly('\\').should.ok();
	});

	// isOnly()
	it('該当の文字のみ11', () => {
		const a = new Jaco('\\あ\\');
		a.isOnly('\\あ').should.ok();
	});

	// isOnly()
	it('該当の文字のみ12', () => {
		const a = new Jaco('^^^');
		a.isOnly('^').should.ok();
	});

	// isOnly()
	it('該当の文字のみ13', () => {
		const a = new Jaco('^$^');
		a.isOnly('$^').should.ok();
	});

	// isOnly()
	it('該当の文字のみ14', () => {
		const a = new Jaco('あいうえお');
		a.isOnly('あ-お').should.ok();
	});

	// isOnly()
	it('該当の文字のみ15', () => {
		const a = new Jaco('あいうえおか');
		a.isOnly('あ-お').should.not.ok();
	});

	// isOnlyHiragana()
	it('ひらがなのみ', () => {
		const test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		const a = new Jaco(test);
		a.isOnlyHiragana().should.ok();
	});

	// isOnlyHiragana()
	it('ひらがなのみ2', () => {
		const test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		const a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok();
	});

	// isOnlyHiragana()
	it('ひらがなのみ3', () => {
		const test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛漢字',
		].join('');
		const a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok();
	});

	// isOnlyHiragana()
	it('ひらがなのみ4', () => {
		const test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛123',
		].join('');
		const a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok();
	});

	// isOnlyHiragana()
	it('ひらがなのみ5', () => {
		const test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛abc',
		].join('');
		const a = new Jaco(test);
		a.isOnlyHiragana().should.not.ok();
	});

	// isOnlyKatakana()
	it('カタカナのみ', () => {
		const test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜',
		].join('');
		const a = new Jaco(test);
		a.isOnlyKatakana().should.ok();
	});

	// isOnlyKatakana()
	it('カタカナのみ2', () => {
		const test = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		const a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok();
	});

	// isOnlyKatakana()
	it('カタカナのみ3', () => {
		const test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜漢字',
		].join('');
		const a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok();
	});

	// isOnlyKatakana()
	it('カタカナのみ4', () => {
		const test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜123',
		].join('');
		const a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok();
	});

	// isOnlyKatakana()
	it('カタカナのみ5', () => {
		const test = [
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜abc',
		].join('');
		const a = new Jaco(test);
		a.isOnlyKatakana().should.not.ok();
	});

	// lastIndexOf()
	it('後方検索', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.lastIndexOf('の').should.equal(5);
	});

	// lastIndexOf()
	it('後方検索2', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.lastIndexOf('の', 0).should.equal(-1);
	});

	// lastIndexOf()
	it('後方検索3', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.lastIndexOf(new Jaco('の')).should.equal(5);
	});

	// lastIndexOf()
	it('後方検索4', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.lastIndexOf(new Jaco('の'), 0).should.equal(-1);
	});

	// lastIndexOf()
	it('後方検索5', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.lastIndexOf(new Jaco('挿し')).should.equal(-1);
	});

	// match()
	it('マッチ', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.match(/の/g).should.be.eql(['の', 'の']);
	});

	// match()
	it('マッチ2', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		Array.from(a.match(/.+(の).+/)).should.be.eql(['𩸽の刺し身の切り身', 'の']);
	});

	// match()
	it('マッチ3', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		should(a.match(/挿し/)).not.be.ok();
	});

	// matches()
	it('マッチ取得', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.matches(/の/g).should.be.eql(['の', 'の']);
	});

	// matches()
	it('マッチ取得', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		Array.from(a.matches(/.+(の).+/)).should.be.eql(['𩸽の刺し身の切り身', 'の']);
	});

	// matches()
	it('マッチ取得3', () => {
		const a = new Jaco('𩸽の刺し身の切り身');
		a.matches(/挿し/).should.be.eql([]);
	});

	// padEnd()
	it('後ろ埋め', () => {
		const a = new Jaco('𩸽');
		a.padEnd(3).toString().should.equal('𩸽  ');
	});

	// padEnd()
	it('後ろ埋め2', () => {
		const a = new Jaco('𩸽');
		a.padEnd(3, '𩸽').toString().should.equal('𩸽𩸽𩸽');
	});

	// padEnd()
	it('後ろ埋め3', () => {
		const a = new Jaco('a');
		a.padEnd(3, '𩸽').toString().should.equal('a𩸽𩸽');
	});

	// padEnd()
	it('後ろ埋め4', () => {
		const a = new Jaco('𩸽のひらき');
		a.padEnd(3).toString().should.equal('𩸽のひ');
	});

	// padEnd()
	it('後ろ埋め5', () => {
		const a = new Jaco('𩸽のひらき');
		a.padEnd(3, 'abc').toString().should.equal('𩸽のひ');
	});

	// padEnd()
	it('後ろ埋め6', () => {
		const a = new Jaco('𩸽のひらき');
		a.padEnd(10, 'abc').toString().should.equal('𩸽のひらきabcab');
	});

	// padEnd()
	it('後ろ埋め7', () => {
		const a = new Jaco('𩸽のひらき');
		a.padEnd(-1).toString().should.equal('𩸽のひらき');
	});

	// padStart()
	it('前埋め', () => {
		const a = new Jaco('𩸽');
		a.padStart(3).toString().should.equal('  𩸽');
	});

	// padStart()
	it('前埋め2', () => {
		const a = new Jaco('𩸽');
		a.padStart(3, '𩸽').toString().should.equal('𩸽𩸽𩸽');
	});

	// padStart()
	it('前埋め3', () => {
		const a = new Jaco('a');
		a.padStart(3, '𩸽').toString().should.equal('𩸽𩸽a');
	});

	// padStart()
	it('前埋め4', () => {
		const a = new Jaco('𩸽のひらき');
		a.padStart(3).toString().should.equal('𩸽のひ');
	});

	// padStart()
	it('前埋め5', () => {
		const a = new Jaco('𩸽のひらき');
		a.padStart(3, 'abc').toString().should.equal('𩸽のひ');
	});

	// padStart()
	it('前埋め6', () => {
		const a = new Jaco('𩸽のひらき');
		a.padStart(10, 'abc').toString().should.equal('abcab𩸽のひらき');
	});

	// padStart()
	it('前埋め7', () => {
		const a = new Jaco('𩸽のひらき');
		a.padStart(-1).toString().should.equal('𩸽のひらき');
	});

	// prepend()
	it('前方結合', () => {
		const a = new Jaco('うえお');
		a.prepend('あい').toString().should.equal('あいうえお');
	});

	// prepend()
	it('前方結合2', () => {
		const a = new Jaco('にほへと');
		a.prepend(new Jaco('いろは')).toString().should.equal('いろはにほへと');
	});

	// remove()
	it('削除', () => {
		const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.remove('aBc').toString().should.equal('DeFgHiJkLmNoPqRsTuVwXyZ');
	});

	// remove()
	it('削除2', () => {
		const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.remove(/[a-z]/).toString().should.equal('BcDeFgHiJkLmNoPqRsTuVwXyZ');
	});

	// remove()
	it('削除3', () => {
		const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.remove(/[a-z]/g).toString().should.equal('BDFHJLNPRTVXZ');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除', () => {
		new Jaco('𩸽のひらき').removeUnpairedSurrogate().toString().should.equal('𩸽のひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除2', () => {
		new Jaco('𩸽𩸽𩸽𩸽𩸽').removeUnpairedSurrogate().toString().should.equal('𩸽𩸽𩸽𩸽𩸽');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除3', () => {
		new Jaco('\ude3d\ud867\ude3d\ud867\ude3d\ud867').removeUnpairedSurrogate().toString().should.equal('𩸽𩸽');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除4', () => {
		new Jaco('ほっけのひらき').removeUnpairedSurrogate().toString().should.equal('ほっけのひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除5', () => {
		new Jaco(`${START_HIGH}ほっけのひらき`).removeUnpairedSurrogate().toString().should.equal('ほっけのひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除6', () => {
		new Jaco(`ほっけのひらき${END_LOW}`).removeUnpairedSurrogate().toString().should.equal('ほっけのひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除7', () => {
		new Jaco(`${START_HIGH}ほっけのひらき`).removeUnpairedSurrogate().toString().should.equal('ほっけのひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除8', () => {
		new Jaco(`ほっけのひらき${END_LOW}`).removeUnpairedSurrogate().toString().should.equal('ほっけのひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除9', () => {
		new Jaco('ほっけ\ud867のひらき').removeUnpairedSurrogate().toString().should.equal('ほっけのひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除10', () => {
		new Jaco('ほっけ\ude3dのひらき').removeUnpairedSurrogate().toString().should.equal('ほっけのひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除11', () => {
		new Jaco('𩸽\ude3dのひらき').removeUnpairedSurrogate().toString().should.equal('𩸽のひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除12', () => {
		new Jaco('𩸽\ud867のひらき').removeUnpairedSurrogate().toString().should.equal('𩸽のひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除13', () => {
		new Jaco('\ude3d𩸽のひらき').removeUnpairedSurrogate().toString().should.equal('𩸽のひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除14', () => {
		new Jaco('\ud867𩸽のひらき').removeUnpairedSurrogate().toString().should.equal('𩸽のひらき');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除15', () => {
		new Jaco('ひらきにする𩸽\ud867').removeUnpairedSurrogate().toString().should.equal('ひらきにする𩸽');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除16', () => {
		new Jaco('ひらきにする𩸽\ude3d').removeUnpairedSurrogate().toString().should.equal('ひらきにする𩸽');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除17', () => {
		new Jaco('ひらきにする\ud867𩸽').removeUnpairedSurrogate().toString().should.equal('ひらきにする𩸽');
	});

	// removeUnpairedSurrogate
	it('不完全サロゲートペアの削除18', () => {
		new Jaco('ひらきにする\ude3d𩸽').removeUnpairedSurrogate().toString().should.equal('ひらきにする𩸽');
	});

	// removeVoicedMarks()
	it('濁点・半濁点除去', () => {
		const a = [
			'がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ',
			'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		const a2 = new Jaco(a);
		const b = [
			'かきくけこさしすせそたちつてとはひふへほはひふへほ',
			'カキクケコサシスセソタチツテトハヒフヘホハヒフヘホワイウエヲ',
		].join('');
		a2.removeVoicedMarks().toString().should.equal(b);
	});

	// repeat()
	it('くりかえし', () => {
		const a = new Jaco('あ');
		a.repeat(3).toString().should.equal('あああ');
	});

	// repeat()
	it('くりかえし2', () => {
		const a = new Jaco('𩸽と');
		a.repeat(6).toString().should.equal('𩸽と𩸽と𩸽と𩸽と𩸽と𩸽と');
	});

	// repeat()
	it('くりかえし3', () => {
		const a = new Jaco('𩸽');
		a.repeat(0).toString().should.equal('');
	});

	// repeat()
	it('くりかえし4', () => {
		const a = new Jaco('𩸽');
		a.repeat().toString().should.equal('');
	});

	// repeat()
	it('くりかえし5 小数点切り捨て', () => {
		const a = new Jaco('𩸽');
		a.repeat(3.5).toString().should.equal('𩸽𩸽𩸽');
	});

	// repeat()
	it('くりかえし6 負の数は0強制', () => {
		const a = new Jaco('𩸽');
		a.repeat(-1).toString().should.equal('');
	});

	// repeat()
	it('くりかえし7 無限エラー', (done) => {
		const a = new Jaco('𩸽');
		try {
			a.repeat(Infinity);
		} catch (e) {
			done();
		}
	});

	// replace()
	it('置換', () => {
		const a = new Jaco('abcdeABCDE');
		a.replace(/abc/ig, 'z').toString().should.equal('zdezDE');
	});

	// replace()
	it('置換2', () => {
		const a = new Jaco('abcdeABCDE');
		a.replace('abc', 'z').toString().should.equal('zdeABCDE');
	});

	// replace()
	it('置換3', () => {
		const a = new Jaco('abcdeABCDE');
		a.replace(new Jaco('abc'), 'z').toString().should.equal('zdeABCDE');
	});

	// replaceFromMap()
	it('マップから置換', () => {
		const a = new Jaco('abcdeABCDE');
		a.replaceFromMap({
			abc: 'z',
			ABC: 'Z',
		}).toString().should.equal('zdeZDE');
	});

	// search()
	it('検索', () => {
		const a = new Jaco('食べたい𩸽');
		a.search(/𩸽/).should.equal(4);
	});

	// search()
	it('検索2', () => {
		const a = new Jaco('𩸽の刺し身');
		a.search(/の/).should.equal(1);
	});

	// search()
	it('検索3', () => {
		const a = new Jaco('食べたい𩸽の刺し身');
		a.search('の').should.equal(5);
	});

	// search()
	it('検索4', () => {
		const a = new Jaco('𩸽の刺し身');
		a.search(new Jaco('の')).should.equal(1);
	});

	// slice()
	it('抽出', () => {
		const a = new Jaco('いろはにほへと');
		const b = a.slice(1, 5);
		b.toString().should.equal('ろはにほ');
	});

	// slice()
	it('抽出2', () => {
		const a = new Jaco('いろはにほへと');
		const b = a.slice(1);
		b.toString().should.equal('ろはにほへと');
	});

	// slice()
	it('抽出3', () => {
		const a = new Jaco('𩸽の刺し身');
		const b = a.slice(1, 3);
		b.toString().should.equal('の刺');
	});

	// slice()
	it('抽出4', () => {
		const a = new Jaco('𩸽の刺し身');
		const b = a.slice(1);
		b.toString().should.equal('の刺し身');
	});

	// split()
	it('分割', () => {
		const a = new Jaco('𩸽の刺し身');
		a.split('の').should.be.eql(['𩸽', '刺し身']);
	});

	// split()
	it('分割2', () => {
		const a = new Jaco('asadafa');
		a.split('a').should.be.eql(['', 's', 'd', 'f', '']);
	});

	// split()
	it('分割3', () => {
		const a = new Jaco('asadafa');
		a.split(/a/).should.be.eql(['', 's', 'd', 'f', '']);
	});

	// split()
	it('分割4', () => {
		const a = new Jaco('asadafa');
		a.split(/a/g).should.be.eql(['', 's', 'd', 'f', '']);
	});

	// split()
	it('分割5', () => {
		const a = new Jaco('asadafa');
		a.split(/(a)/).should.be.eql(['', 'a', 's', 'a', 'd', 'a', 'f', 'a', '']);
	});

	// startsWith()
	it('先頭合致 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.startsWith('𩸽のひらき').should.ok();
	});

	// startsWith()
	it('先頭合致2 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.startsWith('のひらき').should.not.ok();
	});

	// startsWith()
	it('先頭合致3 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.startsWith('ひら', 2).should.ok();
	});

	// startsWith()
	it('先頭合致4 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.startsWith('ひらき', 2).should.ok();
	});

	// startsWith()
	it('先頭合致5 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.startsWith(new Jaco('ら'), 3).should.ok();
	});

	// startsWith()
	it('先頭合致6 ', () => {
		const a = new Jaco('𩸽のひらき');
		a.startsWith(new Jaco('𩸽の'), 0).should.ok();
	});

	// substr()
	it('長さで抽出', () => {
		const a = new Jaco('いろはにほへと');
		const b = a.substr(1, 2);
		b.toString().should.equal('ろは');
	});

	// substr()
	it('長さで抽出2', () => {
		const a = new Jaco('いろはにほへと');
		const b = a.substr(1);
		b.toString().should.equal('ろはにほへと');
	});

	// substr()
	it('長さで抽出3', () => {
		const a = new Jaco('𩸽の刺し身');
		const b = a.substr(2, 3);
		b.toString().should.equal('刺し身');
	});

	// substr()
	it('長さで抽出4', () => {
		const a = new Jaco('𩸽の刺し身');
		const b = a.substr(-1, 1);
		b.toString().should.equal('身');
	});

	// substring()
	it('インデックスから抽出', () => {
		const a = new Jaco('いろはにほへと');
		const b = a.substring(0, 2);
		b.toString().should.equal('いろ');
	});

	// substring()
	it('インデックスから抽出2', () => {
		const a = new Jaco('いろはにほへと');
		const b = a.substring(1, 3);
		b.toString().should.equal('ろは');
	});

	// substring()
	it('インデックスから抽出3', () => {
		const a = new Jaco('𩸽の刺し身');
		const b = a.substring(1, 4);
		b.toString().should.equal('の刺し');
	});

	// substring()
	it('インデックスから抽出4', () => {
		const a = new Jaco('𩸽の刺し身');
		const b = a.substring(4, 1);
		b.toString().should.equal('の刺し');
	});

	// substring()
	it('インデックスから抽出5', () => {
		const a = new Jaco('𩸽の刺し身');
		const b = a.substring(-5, 16);
		b.toString().should.equal('𩸽の刺し身');
	});

	// test()
	it('テスト', () => {
		const a = new Jaco('あいう');
		a.test('あいう').should.ok();
	});

	// test()
	it('テスト2', () => {
		const a = new Jaco('あいう');
		a.test(/^あ/).should.ok();
	});

	// test()
	it('テスト3', () => {
		const a = new Jaco('あいう');
		a.test('あいうえ').should.not.ok();
	});

	// test()
	it('テスト4', () => {
		const a = new Jaco('あいう');
		a.test(/あ$/).should.not.ok();
	});

	// toHiragana()
	it('ひらがなに変換', () => {
		const a = new Jaco([
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ',
		].join(''));
		const b = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		a.toHiragana().toString().should.equal(b);
	});

	// toHiragana()
	it('ひらがなに変換2', () => {
		const a = new Jaco([
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ',
		].join(''));
		const b = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゙ゐ゙ゔゑ゙を゙',
		].join('');
		a.toHiragana(true).toString().should.equal(b);
	});

	// toHiragana()
	it('ひらがなに変換3', () => {
		const a = new Jaco([
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
			'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
			'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
			'ボパピプペポヷヸヴヹヺ',
		].join(''));
		const b = [
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
			'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
			'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
			'ぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		a.toHiragana(false).toString().should.equal(b);
	});

	// toHiragana()
	it('ひらがな以外は変換しない', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）';
		a.toHiragana().toString().should.equal(b);
	});

	// toHiragana()
	it('ひらがな以外は変換しない2', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）';
		a.toHiragana(true).toString().should.equal(b);
	});

	// toKatakana()
	it('カタカナに変換', () => {
		const a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana().toString().should.equal(b);
	});

	// toKatakana()
	it('カタカナに変換2', () => {
		const a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙', // 結合文字濁点・半濁点
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana().toString().should.equal(b);
	});

	// toKatakana()
	it('カタカナに変換3', () => {
		const a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana(true).toString().should.equal(b);
	});

	// toKatakana()
	it('カタカナに変換4', () => {
		const a = new Jaco([
			'。「」、・',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙', // 結合文字濁点・半濁点
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana(true).toString().should.equal(b);
	});

	// toKatakana()
	it('カタカナに変換5', () => {
		const a = new Jaco([
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana(true).toString().should.equal(b);
	});

	// toKatakana()
	it('カタカナに変換6', () => {
		const a = new Jaco([
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙', // 結合文字濁点・半濁点
		].join(''));
		const b = [
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
		].join('');
		a.toKatakana(false).toString().should.equal(b);
	});

	// toKatakana()
	it('カタカナ以外は変換しない', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toKatakana().toString().should.equal(b);
	});

	// toKatakana()
	it('カタカナ以外は変換しない2', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toKatakana(true).toString().should.equal(b);
	});

	// toLowerCase()
	it('小文字に変換', () => {
		const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.toLowerCase().toString().should.equal('abcdefghijklmnopqrstuvwxyz');
	});

	// toNarrow()
	it('半角化', () => {
		const a = new Jaco([
			'　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
			'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
			'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゙ゐ゙ゔゑ゙を゙',
			'。「」、・',
		].join(''));
		const b = [
			' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
			'abcdefghijklmnopqrstuvwxyz{|}~',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゙ゐ゙ゔゑ゙を゙',
			'。「」、・',
		].join('');
		a.toNarrow().toString().should.equal(b);
	});

	// toNarrow()
	it('半角化2', () => {
		const a = new Jaco([
			'　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
			'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
			'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゙ゐ゙ゔゑ゙を゙',
			'。「」、・',
		].join(''));
		const b = [
			' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
			'abcdefghijklmnopqrstuvwxyz{|}~',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞわﾞゐﾞゔゑﾞをﾞ',
			'｡｢｣､･',
		].join('');
		a.toNarrow(true).toString().should.equal(b);
	});

	// toNarrow()
	it('半角化3', () => {
		const a = new Jaco([
			'Ａ',
			'\n',
			'Ｂ',
		].join(''));
		const b = [
			'A',
			'\n',
			'B',
		].join('');
		a.toNarrow(true).toString().should.equal(b);
	});

	// toNarrow()
	it('半角化4', () => {
		const a = new Jaco([
			'Ａ',
			'\r',
			'Ｂ',
		].join(''));
		const b = [
			'A',
			'\r',
			'B',
		].join('');
		a.toNarrow(true).toString().should.equal(b);
	});

	// toNarrow()
	it('半角化5', () => {
		const a = new Jaco([
			'Ａ',
			'\r\n',
			'Ｂ',
		].join(''));
		const b = [
			'A',
			'\r\n',
			'B',
		].join('');
		a.toNarrow(true).toString().should.equal(b);
	});

	// toNarrow()
	it('半角化6', () => {
		const a = new Jaco([
			'Ａ',
			'\r\n',
			'Ｂ',
		].join(''));
		const b = [
			'A',
			' ',
			'B',
		].join('');
		a.toNarrow(true).toString().should.not.equal(b);
	});

	// toNarrow()
	it('半角化6', () => {
		const a = new Jaco([
			'Ａ',
			'\r\n',
			'Ｂ',
		].join(''));
		const b = [
			'A',
			'\r',
			'B',
		].join('');
		a.toNarrow(true).toString().should.not.equal(b);
	});

	// toNarrow()
	it('半角化7', () => {
		const a = new Jaco([
			'Ａ',
			'\r',
			'Ｂ',
		].join(''));
		const b = [
			'A',
			'\r\n',
			'B',
		].join('');
		a.toNarrow(true).toString().should.not.equal(b);
	});

	// toNarrowJapanese()
	it('日本語半角化', () => {
		const a = new Jaco([
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'｡｢｣､･',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞ',
		].join('');
		a.toNarrowJapanese().toString().should.equal(b);
	});

	// toNarrowKatakana()
	it('半角カタカナに変換', () => {
		const a = new Jaco([
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞ',
		].join('');
		a.toNarrowKatakana().toString().should.equal(b);
	});

	// toNarrowKatakana()
	it('半角カタカナに変換2', () => {
		const a = new Jaco([
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
		].join('');
		a.toNarrowKatakana(true).toString().should.equal(b);
	});

	// toNarrowKatakana()
	it('カタカナとひらがな以外は変換しない', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toNarrowKatakana().toString().should.equal(b);
	});

	// toNarrowKatakana()
	it('カタカナとひらがな以外は変換しない2', () => {
		const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・');
		const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
		a.toNarrowKatakana(true).toString().should.equal(b);
	});

	// toNarrowSymbolForJapanese()
	it('日本語記号の半角化', () => {
		const a = new Jaco('。「」、・');
		const b = '｡｢｣､･';
		a.toNarrowSymbolForJapanese().toString().should.equal(b);
	});

	// toNumber()
	it('数値変換', () => {
		const a = new Jaco('123');
		a.toNumber().should.equal(123);
	});

	// toNumber()
	it('数値変換2', () => {
		const a = new Jaco('123.45');
		a.toNumber().should.equal(123.45);
	});

	// toNumber()
	it('数値変換3', () => {
		const a = new Jaco('-123');
		a.toNumber().should.equal(-123);
	});

	// toNumber()
	it('数値変換4', () => {
		const a = new Jaco('0123');
		a.toNumber().should.equal(123);
	});

	// toNumber()
	it('数値変換5', () => {
		const a = new Jaco('0.123');
		a.toNumber().should.equal(0.123);
	});

	// toNumber()
	it('数値変換6', () => {
		const a = new Jaco('.123');
		a.toNumber().should.equal(0.123);
	});

	// toNumber()
	it('数値変換7', () => {
		const a = new Jaco('あ');
		a.toNumber().should.be.NaN;
	});

	// toNumeric()
	it('数字化', () => {
		const a = new Jaco(' ２３ｓ０３ｓｄｋふぁえ');
		const b = '2303';
		a.toNumeric().toString().should.equal(b);
	});

	// toNumeric()
	it('数字化2', () => {
		const a = new Jaco(' ー-.。２.３ｓ０。３.ｓｄｋふぁえ');
		const b = '2303';
		a.toNumeric().toString().should.equal(b);
	});

	// toNumeric()
	it('数字化3', () => {
		const a = new Jaco(' ２-３ｓ０３ｓｄｋふぁえ');
		const b = '2303';
		a.toNumeric(true).toString().should.equal(b);
	});

	// toNumeric()
	it('数字化4', () => {
		const a = new Jaco('- ２３ｓ０３ｓｄｋふぁえ');
		const b = '-2303';
		a.toNumeric(true).toString().should.equal(b);
	});

	// toNumeric()
	it('数字化5', () => {
		const a = new Jaco(' -２-３-.ｓ０.３ｓｄｋふぁえ');
		const b = '-23.03';
		a.toNumeric(true, true).toString().should.equal(b);
	});

	// toNumeric()
	it('数字化6', () => {
		const a = new Jaco(' ２３.-.-ｓ０３.ｓｄｋふぁえ');
		const b = '23.03';
		a.toNumeric(true, true).toString().should.equal(b);
	});

	// toNumeric()
	it('数字化7', () => {
		const a = new Jaco('- ２３ｓ０３ｓｄｋふぁえ...');
		const b = '2303';
		a.toNumeric(false, true).toString().should.equal(b);
	});

	// toPhoeticKana
	it('よみ変換', () => {
		new Jaco('あーぁあゝアア').toPhoeticKana().toString().should.equal('あああああああ');
	});

	// toString()
	it('暗黙の型変換 文字列に変換', () => {
		const a = new Jaco('あ');
		`${a}い`.should.equal('あい');
	});

	// toUpperCase()
	it('大文字に変換', () => {
		const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
		a.toUpperCase().toString().should.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
	});

	// toWide()
	it('全角化', () => {
		const a = new Jaco([
			' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
			'abcdefghijklmnopqrstuvwxyz{|}~',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞわﾞゐﾞゔゑﾞをﾞ',
			'｡｢｣､･',
		].join(''));
		const b = [
			'　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
			'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
			'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜ガギグゲゴザジズゼゾ',
			'ダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛わ゛ゐ゛ゔゑ゛を゛',
			'。「」、・',
		].join('');
		a.toWide().toString().should.equal(b);
	});

	// toWideJapanese()
	it('日本語全角化', () => {
		const a = new Jaco([
			'｡｢｣､･',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'。「」、・',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		a.toWideJapanese().toString().should.equal(b);
	});

	// toWideKatakana()
	it('全角カタカナに変換', () => {
		const a = new Jaco([
			'｡｢｣､･',
			'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
			'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join(''));
		const b = [
			'｡｢｣､･',
			'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
			'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
			'ヅデドバビブベボパピプペポヷヸヴヹヺ',
			'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
			'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
			'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
		].join('');
		a.toWideKatakana().toString().should.equal(b);
	});

	// toWideSymbolForJapanese()
	it('日本語記号の全角化', () => {
		const a = new Jaco('｡｢｣､･');
		const b = '。「」、・';
		a.toWideSymbolForJapanese().toString().should.equal(b);
	});

	// valueOf()
	it('暗黙の型変換 文字列に変換後さらに数値に変換される', () => {
		const a = new Jaco('1');
		(+a).should.equal(1);
	});

	// trim()
	it('前後の空白を削除', () => {
		const a = new Jaco('a b');
		a.trim();
		a.toString().should.equal('a b');
	});

	// trim()
	it('前後の空白を削除2', () => {
		const a = new Jaco(' a b');
		a.trim().toString().should.equal('a b');
	});

	// trim()
	it('前後の空白を削除3', () => {
		const a = new Jaco('a b  　');
		a.trim().toString().should.equal('a b');
	});

	// trim()
	it('前後の空白を削除4', () => {
		const a = new Jaco('　a 　b\n');
		a.trim().toString().should.equal('a 　b');
	});

	// trimLeft()
	it('前の空白を削除', () => {
		const a = new Jaco('a b');
		a.trimLeft().toString().should.equal('a b');
	});

	// trimLeft()
	it('前の空白を削除2', () => {
		const a = new Jaco(' a b');
		a.trimLeft().toString().should.equal('a b');
	});

	// trimLeft()
	it('前の空白を削除3', () => {
		const a = new Jaco('a b  　');
		a.trimLeft().toString().should.equal('a b  　');
	});

	// trimLeft()
	it('前の空白を削除4', () => {
		const a = new Jaco('　a 　b\n');
		a.trimLeft().toString().should.equal('a 　b\n');
	});

	// trimRight()
	it('後ろの空白を削除', () => {
		const a = new Jaco('a b');
		a.trimRight().toString().should.equal('a b');
	});

	// trimRight()
	it('後ろの空白を削除2', () => {
		const a = new Jaco(' a b');
		a.trimRight().toString().should.equal(' a b');
	});

	// trimRight()
	it('後ろの空白を削除3', () => {
		const a = new Jaco('a b  　');
		a.trimRight().toString().should.equal('a b');
	});

	// trimRight()
	it('後ろの空白を削除4', () => {
		const a = new Jaco('　a 　b\n');
		a.trimRight().toString().should.equal('　a 　b');
	});

	// [@@iterator]()
	it('イテレータ', () => {
		const a = new Jaco('𩸽のひらき');
		const b = [];
		for (const j of a) {
			b.push(j.toString());
		}
		b.join('').should.equal('𩸽のひらき');
	});

	// [@@iterator]()
	it('イテレータ2', () => {
		const a = new Jaco('𩸽のひらき');
		const b = Array.from(a);
		b.join('').should.equal('𩸽のひらき');
	});

});
