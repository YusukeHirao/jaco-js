import Jaco from '../jaco.js';

import { test, expect } from 'vitest';

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

// constructor
test('newされたインスタンスは別のオブジェクト', () => {
  const a = new Jaco('あ');
  const b = new Jaco('あ');
  expect(a).not.toBe(b);
});

// length
test('文字列長', () => {
  const a = new Jaco('魚花');
  expect(a).toHaveLength(2);
});

// length
test('文字列長2', () => {
  const a = new Jaco('𩸽のひらき');
  expect(a).toHaveLength(5);
});

// addVoicedMarks()
test('濁点付加', () => {
  const a = new Jaco('あかうはひふへほハヒフヘホ');
  expect(a.addVoicedMarks().toString()).toBe('あがうばびぶべぼバビブベボ');
});

// addSemivoicedMarks()
test('半濁点付加', () => {
  const a = new Jaco('あかうはひふへほハヒフヘホ');
  expect(a.addSemivoicedMarks().toString()).toBe('あかうぱぴぷぺぽパピプペポ');
});

// byteSize()
test('バイト数', () => {
  const a = new Jaco('あいうえおabc');
  expect(a.byteSize()).toBe(18);
});

// byteSize()
test('バイト数2', () => {
  const a = new Jaco('あ い う え\nお a b c');
  expect(a.byteSize()).toBe(25);
});

// clone()
test('コピー', () => {
  const a = new Jaco('あ');
  const b = a.clone();
  expect(a).not.toBe(b);
});

// clone()
test('コピー2', () => {
  const a = new Jaco('あ');
  const b = a.clone();
  expect(a.toString()).toBe(b.toString());
});

// combinateSoundMarks()
test('濁点・半濁点の結合', () => {
  const a = new Jaco('か゛き゛く゛け゛こ゛');
  expect(a.combinateSoundMarks(true).toString()).toBe('がぎぐげご');
});

// combinateSoundMarks()
test('濁点・半濁点の結合2', () => {
  const a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
  expect(a.combinateSoundMarks(true).toString()).toBe('ぱぴぷぺぽ');
});

// combinateSoundMarks()
test('濁点・半濁点の結合3', () => {
  const a = new Jaco('か゛き゛く゛け゛こ゛');
  expect(a.combinateSoundMarks().toString()).toBe('がぎぐげご');
});

// combinateSoundMarks()
test('濁点・半濁点の結合4', () => {
  const a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
  expect(a.combinateSoundMarks().toString()).toBe('ぱぴぷぺぽ');
});

// combinateSoundMarks()
test('濁点・半濁点の結合5', () => {
  const a = new Jaco('がぎぐげご');
  expect(a.combinateSoundMarks().toString()).toBe('がぎぐげご');
});

// combinateSoundMarks()
test('濁点・半濁点の結合6', () => {
  const a = new Jaco('ぱぴぷぺぽ');
  expect(a.combinateSoundMarks().toString()).toBe('ぱぴぷぺぽ');
});

// convertIterationMarks()
test('繰り返し記号変換', () => {
  expect(new Jaco('がくもんのすゝめ').convertIterationMarks().toString()).toBe(
    'がくもんのすすめ',
  );
});

// convertIterationMarks()
test('繰り返し記号変換2', () => {
  expect(
    new Jaco('がくもんのすゝゝゝゝゝゝゝゝゝゝゝゝめ')
      .convertIterationMarks()
      .toString(),
  ).toBe('がくもんのすすすすすすすすすすすすすめ');
});

// convertIterationMarks()
test('繰り返し記号変換3', () => {
  expect(
    new Jaco('がくもんのすゝゝゝゞゝゝゝゝゝゝゝゝゝめ')
      .convertIterationMarks()
      .toString(),
  ).toBe('がくもんのすすすすずすすすすすすすすすめ');
});

// convertIterationMarks()
test('繰り返し記号変換4', () => {
  expect(
    new Jaco('ゝゞあゝゞかゞゝがゝゞゝ').convertIterationMarks().toString(),
  ).toBe('ゝゞあああかがかがかがか');
});

// convertIterationMarks()
test('繰り返し記号変換5', () => {
  expect(
    new Jaco('ガクモンノスヽヽヽヽヽヽヽヽヽヽヽヽメ')
      .convertIterationMarks()
      .toString(),
  ).toBe('ガクモンノスススススススススススススメ');
});

// convertIterationMarks()
test('繰り返し記号変換6', () => {
  expect(
    new Jaco('ヽヾアヽヾカヾヽガヽヾヽ').convertIterationMarks().toString(),
  ).toBe('ヽヾアアアカガカガカガカ');
});

// convertProlongedSoundMarks()
test('長音符変換', () => {
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
  expect(a2.convertProlongedSoundMarks().toString()).toBe(b);
});

// convertProlongedSoundMarks()
test('長音符変換2', () => {
  expect(
    new Jaco('ウバッシャアーーーーーーーーー')
      .convertProlongedSoundMarks()
      .toString(),
  ).toBe('ウバッシャアアアアアアアアアア');
});

// has()
test('含むかどうか', () => {
  const a = new Jaco('いろは');
  expect(a.has('い')).toBe(true);
});

// has()
test('含むかどうか2', () => {
  const a = new Jaco('いろは');
  expect(a.has(new Jaco('い'))).toBe(true);
});

// has()
test('含むかどうか3', () => {
  const a = new Jaco('いろは');
  expect(a.has(new Jaco('あ'))).toBe(false);
});

// has()
test('含むかどうか4', () => {
  const a = new Jaco('いろは');
  expect(a.has('いろ')).toBe(true);
});

// has()
test('含むかどうか5', () => {
  const a = new Jaco('いろは');
  expect(a.has('いは')).toBe(true);
});

// has()
test('含むかどうか6', () => {
  const a = new Jaco('いろは');
  expect(a.has('ろは')).toBe(true);
});

// has()
test('含むかどうか7', () => {
  const a = new Jaco('いろは');
  expect(a.has('にほへと')).toBe(false);
});

// has()
test('含むかどうか8', () => {
  const a = new Jaco('いろは');
  expect(a.has('a-z')).toBe(false);
});

// has()
test('含むかどうか9', () => {
  const a = new Jaco('いろは');
  expect(a.has('あ-ん')).toBe(true);
});

// hasSmallLetter
test('小書き文字の検知', () => {
  expect(
    new Jaco(
      'ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ',
    ).hasSmallLetter(),
  ).toBe(true);
});

// hasSmallLetter
test('小書き文字の検知2', () => {
  expect(new Jaco('あァァァんまりだァァアァ').hasSmallLetter()).toBe(true);
});

// hasSmallLetter
test('小書き文字の検知3', () => {
  expect(new Jaco('あいうえお').hasSmallLetter()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知', () => {
  expect(new Jaco('𩸽のひらき').hasSurrogatePair()).toBe(true);
});

// hasSurrogatePair
test('サロゲートペア検知2', () => {
  expect(new Jaco('ほっけのひらき').hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知3 (上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(new Jaco(BEFORE_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知4 (上位サロゲートのみ)', () => {
  expect(new Jaco(START_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知5 (上位サロゲートのみ 最後のコードポイント)', () => {
  expect(new Jaco(END_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知6 (下位サロゲートのみ)', () => {
  expect(new Jaco(START_LOW).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知7 (下位サロゲートのみ 最後のコードポイント)', () => {
  expect(new Jaco(END_LOW).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知8 (下位サロゲートのコードポイントひとつ次の文字)', () => {
  expect(new Jaco(AFTER_LOW).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知9 (上位サロゲートのコードポイントひとつ前の文字 + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(new Jaco(BEFORE_HIGH + BEFORE_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知10 (上位サロゲートのみ + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(new Jaco(START_HIGH + BEFORE_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知11 (上位サロゲートのみ 最後のコードポイント + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(new Jaco(END_HIGH + BEFORE_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知12 (下位サロゲートのみ + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(new Jaco(START_LOW + BEFORE_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知13 (下位サロゲートのコードポイントひとつ次の文字 + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(new Jaco(AFTER_LOW + BEFORE_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知14 (下位サロゲート コードポイントひとつ次 + 上位サロゲートのコードポイントひとつ前の文字)', () => {
  expect(new Jaco(AFTER_LOW + BEFORE_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知15 (上位サロゲートのコードポイントひとつ前の文字 + 上位サロゲート)', () => {
  expect(new Jaco(BEFORE_HIGH + START_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知16 (上位サロゲートのみ + 上位サロゲート)', () => {
  expect(new Jaco(START_HIGH + START_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知17 (上位サロゲートのみ 最後のコードポイント + 上位サロゲート)', () => {
  expect(new Jaco(END_HIGH + START_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知18 (下位サロゲートのみ + 上位サロゲート)', () => {
  expect(new Jaco(END_LOW + START_LOW).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知19 (下位サロゲートのコードポイントひとつ次の文字 + 上位サロゲート)', () => {
  expect(new Jaco(AFTER_LOW + START_HIGH).hasSurrogatePair()).toBe(false);
});

// hasSurrogatePair
test('サロゲートペア検知20 (下位サロゲート コードポイントひとつ次 + 上位サロゲート)', () => {
  expect(new Jaco(AFTER_LOW + START_LOW).hasSurrogatePair()).toBe(false);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知', () => {
  expect(new Jaco('𩸽のひらき').hasUnpairedSurrogate()).toBe(false);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知2', () => {
  expect(new Jaco('𩸽𩸽𩸽𩸽𩸽').hasUnpairedSurrogate()).toBe(false);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知3', () => {
  expect(new Jaco('ほっけのひらき').hasUnpairedSurrogate()).toBe(false);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知4', () => {
  expect(new Jaco(BEFORE_HIGH).hasUnpairedSurrogate()).toBe(false);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知5', () => {
  expect(new Jaco(BEFORE_HIGH + START_HIGH).hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知6', () => {
  expect(
    new Jaco(BEFORE_HIGH + START_HIGH + END_HIGH).hasUnpairedSurrogate(),
  ).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知7', () => {
  expect(new Jaco('\ud867ほっけのひらき').hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知8', () => {
  expect(new Jaco('ほっけのひらき\ud867').hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知9', () => {
  expect(new Jaco('ほっけ\ud867のひらき').hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知10', () => {
  expect(new Jaco('ほっけ\ude3dのひらき').hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知11', () => {
  expect(new Jaco('𩸽\ude3dのひらき').hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知12', () => {
  expect(new Jaco('𩸽\ud867のひらき').hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知13', () => {
  expect(new Jaco('\ude3d𩸽のひらき').hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知14', () => {
  expect(new Jaco('\ud867𩸽のひらき').hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知15', () => {
  expect(new Jaco('ひらきにする𩸽\ud867').hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知16', () => {
  expect(new Jaco('ひらきにする𩸽\ude3d').hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知17', () => {
  expect(new Jaco('ひらきにする\ud867𩸽').hasUnpairedSurrogate()).toBe(true);
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知18', () => {
  expect(new Jaco('ひらきにする\ude3d𩸽').hasUnpairedSurrogate()).toBe(true);
});

// is()
test('完全マッチ', () => {
  const a = new Jaco('いろは');
  expect(a.is('いろは')).toBe(true);
});

// is()
test('完全マッチ2', () => {
  const a = new Jaco('いろは');
  expect(a.is(new Jaco('いろは'))).toBe(true);
});

// is()
test('完全マッチ3', () => {
  const a = new Jaco('いろは');
  expect(a.is('いろはに')).toBe(false);
});

// is()
test('完全マッチ4', () => {
  const a = new Jaco('いろは');
  expect(a.is(new Jaco('いろはに'))).toBe(false);
});

// isEmpty()
test('空', () => {
  const a = new Jaco('');
  expect(a.isEmpty()).toBe(true);
});
test('空2', () => {
  const a = new Jaco(' ');
  expect(a.isEmpty()).toBe(false);
});

// isNumeric()
test('数字かどうか1', () => {
  const a = new Jaco(' ２３ｓ０３ｓｄｋふぁえ');
  expect(a.isNumeric()).toBe(false);
});

// isNumeric()
test('数字かどうか2', () => {
  const a = new Jaco('２３０３');
  expect(a.isNumeric()).toBe(false);
});

// isNumeric()
test('数字かどうか3', () => {
  const a = new Jaco('000012303234');
  expect(a.isNumeric()).toBe(true);
});

// isNumeric()
test('数字かどうか4', () => {
  const a = new Jaco('-123.3234');
  expect(a.isNumeric()).toBe(true);
});

// isNumeric()
test('数字かどうか5', () => {
  const a = new Jaco('-123.3234.');
  expect(a.isNumeric()).toBe(false);
});

// isNumeric()
test('数字かどうか6', () => {
  const a = new Jaco('12-3.3234.');
  expect(a.isNumeric()).toBe(false);
});

// isNumeric()
test('数字かどうか7', () => {
  const a = new Jaco('.3234');
  expect(a.isNumeric()).toBe(true);
});

// isNumeric()
test('数字かどうか8', () => {
  const a = new Jaco('-.3234');
  expect(a.isNumeric()).toBe(true);
});

// isNumeric()
test('数字かどうか9', () => {
  const a = new Jaco('.3234');
  expect(a.isNumeric(false)).toBe(true);
});

// isNumeric()
test('数字かどうか10', () => {
  const a = new Jaco('-.3234');
  expect(a.isNumeric(true)).toBe(true);
});

// isNumeric()
test('数字かどうか11', () => {
  const a = new Jaco('.3234');
  expect(a.isNumeric(true, true)).toBe(true);
});

// isNumeric()
test('数字かどうか12', () => {
  const a = new Jaco('-.3234');
  expect(a.isNumeric(true, false)).toBe(false);
});

// isNumeric()
test('数字かどうか13', () => {
  const a = new Jaco('.3234');
  expect(a.isNumeric(false, false)).toBe(false);
});

// isNumeric()
test('数字かどうか14', () => {
  const a = new Jaco('-.3234');
  expect(a.isNumeric(false, true)).toBe(false);
});

// isOnly()
test('該当の文字のみ', () => {
  const a = new Jaco('いろは');
  expect(a.isOnly('いろはにほへと')).toBe(true);
});

// isOnly()
test('該当の文字のみ2', () => {
  const a = new Jaco('いろは');
  expect(a.isOnly('いはにほへと')).toBe(false);
});

// isOnly()
test('該当の文字のみ3', () => {
  const a = new Jaco('abcいろは');
  expect(a.isOnly('いろはにほへと')).toBe(false);
});

// isOnly()
test('該当の文字のみ4', () => {
  const a = new Jaco('いろは');
  expect(a.isOnly('いろは')).toBe(true);
});

// isOnly()
test('該当の文字のみ5', () => {
  const a = new Jaco('いろは');
  expect(a.isOnly('いろ')).toBe(false);
});

// isOnly()
test('該当の文字のみ6', () => {
  const a = new Jaco('いろは');
  expect(a.isOnly('いろろろろははははにににに')).toBe(true);
});

// isOnly()
test('該当の文字のみ7', () => {
  const a = new Jaco('いろはち');
  expect(a.isOnly('いろはにほへと')).toBe(false);
});

// isOnly()
test('該当の文字のみ8', () => {
  const a = new Jaco('いろはち');
  expect(a.isOnly(']()[][')).toBe(false);
});

// isOnly()
test('該当の文字のみ9', () => {
  const a = new Jaco('\\');
  expect(a.isOnly(']()[]\\')).toBe(true);
});

// isOnly()
test('該当の文字のみ10', () => {
  const a = new Jaco('\\');
  expect(a.isOnly('\\')).toBe(true);
});

// isOnly()
test('該当の文字のみ11', () => {
  const a = new Jaco('\\あ\\');
  expect(a.isOnly('\\あ')).toBe(true);
});

// isOnly()
test('該当の文字のみ12', () => {
  const a = new Jaco('^^^');
  expect(a.isOnly('^')).toBe(true);
});

// isOnly()
test('該当の文字のみ13', () => {
  const a = new Jaco('^$^');
  expect(a.isOnly('$^')).toBe(true);
});

// isOnly()
test('該当の文字のみ14', () => {
  const a = new Jaco('あいうえお');
  expect(a.isOnly('あ-お')).toBe(true);
});

// isOnly()
test('該当の文字のみ15', () => {
  const a = new Jaco('あいうえおか');
  expect(a.isOnly('あ-お')).toBe(false);
});

// isOnlyHiragana()
test('ひらがなのみ', () => {
  const test = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
  ].join('');
  const a = new Jaco(test);
  expect(a.isOnlyHiragana()).toBe(true);
});

// isOnlyHiragana()
test('ひらがなのみ2', () => {
  const test = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
  ].join('');
  const a = new Jaco(test);
  expect(a.isOnlyHiragana()).toBe(false);
});

// isOnlyHiragana()
test('ひらがなのみ3', () => {
  const test = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛漢字',
  ].join('');
  const a = new Jaco(test);
  expect(a.isOnlyHiragana()).toBe(false);
});

// isOnlyHiragana()
test('ひらがなのみ4', () => {
  const test = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛123',
  ].join('');
  const a = new Jaco(test);
  expect(a.isOnlyHiragana()).toBe(false);
});

// isOnlyHiragana()
test('ひらがなのみ5', () => {
  const test = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛abc',
  ].join('');
  const a = new Jaco(test);
  expect(a.isOnlyHiragana()).toBe(false);
});

// isOnlyKatakana()
test('カタカナのみ', () => {
  const test = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜',
  ].join('');
  const a = new Jaco(test);
  expect(a.isOnlyKatakana()).toBe(true);
});

// isOnlyKatakana()
test('カタカナのみ2', () => {
  const test = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
  ].join('');
  const a = new Jaco(test);
  expect(a.isOnlyKatakana()).toBe(false);
});

// isOnlyKatakana()
test('カタカナのみ3', () => {
  const test = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜漢字',
  ].join('');
  const a = new Jaco(test);
  expect(a.isOnlyKatakana()).toBe(false);
});

// isOnlyKatakana()
test('カタカナのみ4', () => {
  const test = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜123',
  ].join('');
  const a = new Jaco(test);
  expect(a.isOnlyKatakana()).toBe(false);
});

// isOnlyKatakana()
test('カタカナのみ5', () => {
  const test = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜abc',
  ].join('');
  const a = new Jaco(test);
  expect(a.isOnlyKatakana()).toBe(false);
});

// remove()
test('削除', () => {
  const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
  expect(a.remove('aBc').toString()).toBe('DeFgHiJkLmNoPqRsTuVwXyZ');
});

// remove()
test('削除2', () => {
  const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
  expect(a.remove(/[a-z]/).toString()).toBe('BcDeFgHiJkLmNoPqRsTuVwXyZ');
});

// remove()
test('削除3', () => {
  const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
  expect(a.remove(/[a-z]/g).toString()).toBe('BDFHJLNPRTVXZ');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除', () => {
  expect(new Jaco('𩸽のひらき').removeUnpairedSurrogate().toString()).toBe(
    '𩸽のひらき',
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除2', () => {
  expect(new Jaco('𩸽𩸽𩸽𩸽𩸽').removeUnpairedSurrogate().toString()).toBe(
    '𩸽𩸽𩸽𩸽𩸽',
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除3', () => {
  expect(
    new Jaco('\ude3d\ud867\ude3d\ud867\ude3d\ud867')
      .removeUnpairedSurrogate()
      .toString(),
  ).toBe('𩸽𩸽');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除4', () => {
  expect(new Jaco('ほっけのひらき').removeUnpairedSurrogate().toString()).toBe(
    'ほっけのひらき',
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除5', () => {
  expect(
    new Jaco(`${START_HIGH}ほっけのひらき`)
      .removeUnpairedSurrogate()
      .toString(),
  ).toBe('ほっけのひらき');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除6', () => {
  expect(
    new Jaco(`ほっけのひらき${END_LOW}`).removeUnpairedSurrogate().toString(),
  ).toBe('ほっけのひらき');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除7', () => {
  expect(
    new Jaco(`${START_HIGH}ほっけのひらき`)
      .removeUnpairedSurrogate()
      .toString(),
  ).toBe('ほっけのひらき');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除8', () => {
  expect(
    new Jaco(`ほっけのひらき${END_LOW}`).removeUnpairedSurrogate().toString(),
  ).toBe('ほっけのひらき');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除9', () => {
  expect(
    new Jaco('ほっけ\ud867のひらき').removeUnpairedSurrogate().toString(),
  ).toBe('ほっけのひらき');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除10', () => {
  expect(
    new Jaco('ほっけ\ude3dのひらき').removeUnpairedSurrogate().toString(),
  ).toBe('ほっけのひらき');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除11', () => {
  expect(
    new Jaco('𩸽\ude3dのひらき').removeUnpairedSurrogate().toString(),
  ).toBe('𩸽のひらき');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除12', () => {
  expect(
    new Jaco('𩸽\ud867のひらき').removeUnpairedSurrogate().toString(),
  ).toBe('𩸽のひらき');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除13', () => {
  expect(
    new Jaco('\ude3d𩸽のひらき').removeUnpairedSurrogate().toString(),
  ).toBe('𩸽のひらき');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除14', () => {
  expect(
    new Jaco('\ud867𩸽のひらき').removeUnpairedSurrogate().toString(),
  ).toBe('𩸽のひらき');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除15', () => {
  expect(
    new Jaco('ひらきにする𩸽\ud867').removeUnpairedSurrogate().toString(),
  ).toBe('ひらきにする𩸽');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除16', () => {
  expect(
    new Jaco('ひらきにする𩸽\ude3d').removeUnpairedSurrogate().toString(),
  ).toBe('ひらきにする𩸽');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除17', () => {
  expect(
    new Jaco('ひらきにする\ud867𩸽').removeUnpairedSurrogate().toString(),
  ).toBe('ひらきにする𩸽');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除18', () => {
  expect(
    new Jaco('ひらきにする\ude3d𩸽').removeUnpairedSurrogate().toString(),
  ).toBe('ひらきにする𩸽');
});

// removeVoicedMarks()
test('濁点・半濁点除去', () => {
  const a = [
    'がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ',
    'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヷヸヴヹヺ',
  ].join('');
  const a2 = new Jaco(a);
  const b = [
    'かきくけこさしすせそたちつてとはひふへほはひふへほ',
    'カキクケコサシスセソタチツテトハヒフヘホハヒフヘホワイウエヲ',
  ].join('');
  expect(a2.removeVoicedMarks().toString()).toBe(b);
});

// replaceFromMap()
test('マップから置換', () => {
  const a = new Jaco('abcdeABCDE');
  expect(
    a
      .replaceFromMap({
        abc: 'z',
        ABC: 'Z',
      })
      .toString(),
  ).toBe('zdeZDE');
});

// test()
test('テスト', () => {
  const a = new Jaco('あいう');
  expect(a.test('あいう')).toBe(true);
});

// test()
test('テスト2', () => {
  const a = new Jaco('あいう');
  expect(a.test(/^あ/)).toBe(true);
});

// test()
test('テスト3', () => {
  const a = new Jaco('あいう');
  expect(a.test('あいうえ')).toBe(false);
});

// test()
test('テスト4', () => {
  const a = new Jaco('あいう');
  expect(a.test(/あ$/)).toBe(false);
});

// toBasicLetter()
test('小書き文字を基底文字に変換', () => {
  const a = new Jaco('あァァァんまりだァァアァ');
  expect(a.toBasicLetter().toString()).toBe('あアアアんまりだアアアア');
});

// toHiragana()
test('ひらがなに変換', () => {
  const a = new Jaco(
    [
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
      'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
      'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
      'ボパピプペポヷヸヴヹヺ',
    ].join(''),
  );
  const b = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
    'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
    'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
    'ぽわ゛ゐ゛ゔゑ゛を゛',
  ].join('');
  expect(a.toHiragana().toString()).toBe(b);
});

// toHiragana()
test('ひらがなに変換2', () => {
  const a = new Jaco(
    [
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
      'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
      'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
      'ボパピプペポヷヸヴヹヺ',
    ].join(''),
  );
  const b = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙をぁぃぅぇぉゃゅょっーあ',
    'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
    'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
    'ぽわ゙ゐ゙ゔゑ゙を゙',
  ].join('');
  expect(a.toHiragana(true).toString()).toBe(b);
});

// toHiragana()
test('ひらがなに変換3', () => {
  const a = new Jaco(
    [
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
      'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
      'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
      'ボパピプペポヷヸヴヹヺ',
    ].join(''),
  );
  const b = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
    'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
    'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
    'ぽわ゛ゐ゛ゔゑ゛を゛',
  ].join('');
  expect(a.toHiragana(false).toString()).toBe(b);
});

// toHiragana()
test('ひらがな以外は変換しない', () => {
  const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）');
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）';
  expect(a.toHiragana().toString()).toBe(b);
});

// toHiragana()
test('ひらがな以外は変換しない2', () => {
  const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）');
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）';
  expect(a.toHiragana(true).toString()).toBe(b);
});

// toKatakana()
test('カタカナに変換', () => {
  const a = new Jaco(
    [
      '。「」、・',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
    ].join(''),
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
  ].join('');
  expect(a.toKatakana().toString()).toBe(b);
});

// toKatakana()
test('カタカナに変換2', () => {
  const a = new Jaco(
    [
      '。「」、・',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙', // 結合文字濁点・半濁点
    ].join(''),
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
  ].join('');
  expect(a.toKatakana().toString()).toBe(b);
});

// toKatakana()
test('カタカナに変換3', () => {
  const a = new Jaco(
    [
      '。「」、・',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
    ].join(''),
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
  ].join('');
  expect(a.toKatakana(true).toString()).toBe(b);
});

// toKatakana()
test('カタカナに変換4', () => {
  const a = new Jaco(
    [
      '。「」、・',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙', // 結合文字濁点・半濁点
    ].join(''),
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
  ].join('');
  expect(a.toKatakana(true).toString()).toBe(b);
});

// toKatakana()
test('カタカナに変換5', () => {
  const a = new Jaco(
    [
      '。「」、・',
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
    ].join(''),
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
  ].join('');
  expect(a.toKatakana(true).toString()).toBe(b);
});

// toKatakana()
test('カタカナに変換6', () => {
  const a = new Jaco(
    [
      '。「」、・',
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙', // 結合文字濁点・半濁点
    ].join(''),
  );
  const b = [
    '。「」、・',
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
    'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
  ].join('');
  expect(a.toKatakana(false).toString()).toBe(b);
});

// toKatakana()
test('カタカナ以外は変換しない', () => {
  const a = new Jaco(
    '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・',
  );
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
  expect(a.toKatakana().toString()).toBe(b);
});

// toKatakana()
test('カタカナ以外は変換しない2', () => {
  const a = new Jaco(
    '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・',
  );
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
  expect(a.toKatakana(true).toString()).toBe(b);
});

// toNarrow()
test('半角化', () => {
  const a = new Jaco(
    [
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
    ].join(''),
  );
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
  expect(a.toNarrow().toString()).toBe(b);
});

// toNarrow()
test('半角化2', () => {
  const a = new Jaco(
    [
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
    ].join(''),
  );
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
  expect(a.toNarrow(true).toString()).toBe(b);
});

// toNarrow()
test('半角化3', () => {
  const a = new Jaco(['Ａ', '\n', 'Ｂ'].join(''));
  const b = ['A', '\n', 'B'].join('');
  expect(a.toNarrow(true).toString()).toBe(b);
});

// toNarrow()
test('半角化4', () => {
  const a = new Jaco(['Ａ', '\r', 'Ｂ'].join(''));
  const b = ['A', '\r', 'B'].join('');
  expect(a.toNarrow(true).toString()).toBe(b);
});

// toNarrow()
test('半角化5', () => {
  const a = new Jaco(['Ａ', '\r\n', 'Ｂ'].join(''));
  const b = ['A', '\r\n', 'B'].join('');
  expect(a.toNarrow(true).toString()).toBe(b);
});

// toNarrow()
test('半角化6', () => {
  const a = new Jaco(['Ａ', '\r\n', 'Ｂ'].join(''));
  const b = ['A', ' ', 'B'].join('');
  expect(a.toNarrow(true).toString()).not.toBe(b);
});

// toNarrow()
test('半角化7', () => {
  const a = new Jaco(['Ａ', '\r\n', 'Ｂ'].join(''));
  const b = ['A', '\r', 'B'].join('');
  expect(a.toNarrow(true).toString()).not.toBe(b);
});

// toNarrow()
test('半角化8', () => {
  const a = new Jaco(['Ａ', '\r', 'Ｂ'].join(''));
  const b = ['A', '\r\n', 'B'].join('');
  expect(a.toNarrow(true).toString()).not.toBe(b);
});

// toNarrowAlphanumeric()
test('英数字を半角に変換', () => {
  const a = new Jaco(
    [
      '！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
      'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
      'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝',
    ].join(''),
  );
  const b = [
    '！＂＃＄％＆＇（）＊＋，－．／0123456789：；＜＝＞？＠',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ［］＾＿｀',
    'abcdefghijklmnopqrstuvwxyz｛｜｝',
  ].join('');
  expect(a.toNarrowAlphanumeric().toString()).toBe(b);
});

// toNarrowJapanese()
test('日本語半角化', () => {
  const a = new Jaco(
    [
      '。「」、・',
      'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
      'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
      'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
    ].join(''),
  );
  const b = [
    '｡｢｣､･',
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
    'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
    'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞ',
  ].join('');
  expect(a.toNarrowJapanese().toString()).toBe(b);
});

// toNarrowKatakana()
test('半角カタカナに変換', () => {
  const a = new Jaco(
    [
      '。「」、・',
      'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
      'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
      'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
    ].join(''),
  );
  const b = [
    '。「」、・',
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
    'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
    'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞ',
  ].join('');
  expect(a.toNarrowKatakana().toString()).toBe(b);
});

// toNarrowKatakana()
test('半角カタカナに変換2', () => {
  const a = new Jaco(
    [
      '。「」、・',
      'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
      'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
      'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
    ].join(''),
  );
  const b = [
    '。「」、・',
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
    'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
    'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
  ].join('');
  expect(a.toNarrowKatakana(true).toString()).toBe(b);
});

// toNarrowKatakana()
test('カタカナとひらがな以外は変換しない', () => {
  const a = new Jaco(
    '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・',
  );
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
  expect(a.toNarrowKatakana().toString()).toBe(b);
});

// toNarrowKatakana()
test('カタカナとひらがな以外は変換しない2', () => {
  const a = new Jaco(
    '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・',
  );
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
  expect(a.toNarrowKatakana(true).toString()).toBe(b);
});

// toNarrowSign()
test('記号を半角に変換', () => {
  const a = new Jaco(
    [
      '！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
      'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
      'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝',
    ].join(''),
  );
  const b = [
    '!"#$%&\'()*+,-./０１２３４５６７８９:;<=>?@Ａ',
    'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ[]^_`ａｂｃｄ',
    'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ{|}',
  ].join('');
  expect(a.toNarrowSign().toString()).toBe(b);
});

// toNarrowSymbolForJapanese()
test('日本語記号の半角化', () => {
  const a = new Jaco('。「」、・');
  const b = '｡｢｣､･';
  expect(a.toNarrowSymbolForJapanese().toString()).toBe(b);
});

// toNumber()
test('数値変換', () => {
  const a = new Jaco('123');
  expect(a.toNumber()).toBe(123);
});

// toNumber()
test('数値変換2', () => {
  const a = new Jaco('123.45');
  expect(a.toNumber()).toBe(123.45);
});

// toNumber()
test('数値変換3', () => {
  const a = new Jaco('-123');
  expect(a.toNumber()).toBe(-123);
});

// toNumber()
test('数値変換4', () => {
  const a = new Jaco('0123');
  expect(a.toNumber()).toBe(123);
});

// toNumber()
test('数値変換5', () => {
  const a = new Jaco('0.123');
  expect(a.toNumber()).toBe(0.123);
});

// toNumber()
test('数値変換6', () => {
  const a = new Jaco('.123');
  expect(a.toNumber()).toBe(0.123);
});

// toNumber()
test('数値変換7', () => {
  const a = new Jaco('あ');
  expect(isNaN(a.toNumber())).toBe(true);
});

// toNumeric()
test('数字化', () => {
  const a = new Jaco(' ２３ｓ０３ｓｄｋふぁえ');
  const b = '2303';
  expect(a.toNumeric().toString()).toBe(b);
});

// toNumeric()
test('数字化2', () => {
  const a = new Jaco(' ー-.。２.３ｓ０。３.ｓｄｋふぁえ');
  const b = '2303';
  expect(a.toNumeric().toString()).toBe(b);
});

// toNumeric()
test('数字化3', () => {
  const a = new Jaco(' ２-３ｓ０３ｓｄｋふぁえ');
  const b = '2303';
  expect(a.toNumeric(true).toString()).toBe(b);
});

// toNumeric()
test('数字化4', () => {
  const a = new Jaco('- ２３ｓ０３ｓｄｋふぁえ');
  const b = '-2303';
  expect(a.toNumeric(true).toString()).toBe(b);
});

// toNumeric()
test('数字化5', () => {
  const a = new Jaco(' -２-３-.ｓ０.３ｓｄｋふぁえ');
  const b = '-23.03';
  expect(a.toNumeric(true, true).toString()).toBe(b);
});

// toNumeric()
test('数字化6', () => {
  const a = new Jaco(' ２３.-.-ｓ０３.ｓｄｋふぁえ');
  const b = '23.03';
  expect(a.toNumeric(true, true).toString()).toBe(b);
});

// toNumeric()
test('数字化7', () => {
  const a = new Jaco('- ２３ｓ０３ｓｄｋふぁえ...');
  const b = '2303';
  expect(a.toNumeric(false, true).toString()).toBe(b);
});

// toPhoeticKana
test('よみ変換', () => {
  expect(new Jaco('あーぁあゝアア').toPhoeticKana().toString()).toBe(
    'あああああああ',
  );
});

// toString()
test('暗黙の型変換 文字列に変換', () => {
  const a = new Jaco('あ');
  expect(`${a}い`).toBe('あい');
});

// toWide()
test('全角化', () => {
  const a = new Jaco(
    [
      ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
      'abcdefghijklmnopqrstuvwxyz{|}~',
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
      'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞわﾞゐﾞゔゑﾞをﾞ',
      '｡｢｣､･',
    ].join(''),
  );
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
  expect(a.toWide().toString()).toBe(b);
});

// toWideAlphanumeric()
test('英数字を全角に変換', () => {
  const a = new Jaco(
    [
      '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
      'abcdefghijklmnopqrstuvwxyz{|}',
    ].join(''),
  );
  const b = [
    '!"#$%&\'()*+,-./０１２３４５６７８９:;<=>?@Ａ',
    'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ[]^_`ａｂｃｄ',
    'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ{|}',
  ].join('');
  expect(a.toWideAlphanumeric().toString()).toBe(b);
});

// toWideJapanese()
test('日本語全角化', () => {
  const a = new Jaco(
    [
      '｡｢｣､･',
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
    ].join(''),
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
  ].join('');
  expect(a.toWideJapanese().toString()).toBe(b);
});

// toWideKatakana()
test('全角カタカナに変換', () => {
  const a = new Jaco(
    [
      '｡｢｣､･',
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
    ].join(''),
  );
  const b = [
    '｡｢｣､･',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛',
  ].join('');
  expect(a.toWideKatakana().toString()).toBe(b);
});

// toWideSign()
test('記号を全角に変換', () => {
  const a = new Jaco(
    [
      '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
      'abcdefghijklmnopqrstuvwxyz{|}',
    ].join(''),
  );
  const b = [
    '！＂＃＄％＆＇（）＊＋，－．／0123456789：；＜＝＞？＠',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ［］＾＿｀',
    'abcdefghijklmnopqrstuvwxyz｛｜｝',
  ].join('');
  expect(a.toWideSign().toString()).toBe(b);
});

// toWideSymbolForJapanese()
test('日本語記号の全角化', () => {
  const a = new Jaco('｡｢｣､･');
  const b = '。「」、・';
  expect(a.toWideSymbolForJapanese().toString()).toBe(b);
});

// valueOf()
test('暗黙の型変換 文字列に変換後さらに数値に変換される', () => {
  const a = new Jaco('1');
  expect(+a).toBe(1);
});

// [@@iterator]()
test('イテレータ', () => {
  const a = new Jaco('𩸽のひらき');
  const b: string[] = [];
  for (const j of a) {
    b.push(j.toString());
  }
  expect(b.join('')).toBe('𩸽のひらき');
});

// [@@iterator]()
test('イテレータ2', () => {
  const a = new Jaco('𩸽のひらき');
  const b = Array.from(a);
  expect(b.join('')).toBe('𩸽のひらき');
});
