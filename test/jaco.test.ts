import Jaco from '../jaco';

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
test('newされたインスタンスは別のオブジェクト', t => {
  const a = new Jaco('あ');
  const b = new Jaco('あ');
  t.not(a, b);
});

// length
test('文字列長', t => {
  const a = new Jaco('魚花');
  t.is(a.length, 2);
});

// length
test('文字列長', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.length, 5);
});

// addVoicedMarks()
test('濁点付加', t => {
  const a = new Jaco('あかうはひふへほハヒフヘホ');
  t.is(a.addVoicedMarks().toString(), 'あがうばびぶべぼバビブベボ');
});

// addSemivoicedMarks()
test('半濁点付加', t => {
  const a = new Jaco('あかうはひふへほハヒフヘホ');
  t.is(a.addSemivoicedMarks().toString(), 'あかうぱぴぷぺぽパピプペポ');
});

// append()
test('後方結合', t => {
  const a = new Jaco('あい');
  t.is(a.append('うえお').toString(), 'あいうえお');
});

// append()
test('後方結合2', t => {
  const a = new Jaco('いろは');
  t.is(a.append(new Jaco('にほへと')).toString(), 'いろはにほへと');
});

// byteSize()
test('バイト数', t => {
  const a = new Jaco('あいうえおabc');
  t.is(a.byteSize(), 18);
});

// byteSize()
test('バイト数2', t => {
  const a = new Jaco('あ い う え\nお a b c');
  t.is(a.byteSize(), 25);
});

// charAt()
test('抜き出し', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.charAt().toString(), '𩸽');
});

// charAt()
test('抜き出し2', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.charAt(0).toString(), '𩸽');
});

// charAt()
test('抜き出し3', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.charAt(1).toString(), 'の');
});

// charAt()
test('抜き出し4', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.charAt(99).toString(), '');
});

// charCodeAt()
test('コード抜き出し', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.charCodeAt(), 0x29e3d);
});

// charCodeAt()
test('コード抜き出し2', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.charCodeAt(0), 0x29e3d);
});

// charCodeAt()
test('コード抜き出し3', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.charCodeAt(1), 0x306e);
});

// charCodeAt()
test('コード抜き出し4', t => {
  const a = new Jaco('𩸽のひらき');
  t.true(isNaN(a.charCodeAt(99)));
});

// clone()
test('コピー', t => {
  const a = new Jaco('あ');
  const b = a.clone();
  t.not(a, b);
});

// clone()
test('コピー', t => {
  const a = new Jaco('あ');
  const b = a.clone();
  t.is(a.toString(), b.toString());
});

// combinateSoundMarks()
test('濁点・半濁点の結合', t => {
  const a = new Jaco('か゛き゛く゛け゛こ゛');
  t.is(a.combinateSoundMarks(true).toString(), 'がぎぐげご');
});

// combinateSoundMarks()
test('濁点・半濁点の結合2', t => {
  const a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
  t.is(a.combinateSoundMarks(true).toString(), 'ぱぴぷぺぽ');
});

// combinateSoundMarks()
test('濁点・半濁点の結合3', t => {
  const a = new Jaco('か゛き゛く゛け゛こ゛');
  t.is(a.combinateSoundMarks().toString(), 'がぎぐげご');
});

// combinateSoundMarks()
test('濁点・半濁点の結合4', t => {
  const a = new Jaco('は゜ひ゜ふ゜へ゜ほ゜');
  t.is(a.combinateSoundMarks().toString(), 'ぱぴぷぺぽ');
});

// combinateSoundMarks()
test('濁点・半濁点の結合5', t => {
  const a = new Jaco('がぎぐげご');
  t.is(a.combinateSoundMarks().toString(), 'がぎぐげご');
});

// combinateSoundMarks()
test('濁点・半濁点の結合6', t => {
  const a = new Jaco('ぱぴぷぺぽ');
  t.is(a.combinateSoundMarks().toString(), 'ぱぴぷぺぽ');
});

// concat()
test('連結', t => {
  const a = new Jaco('あ');
  t.is(
    a
      .concat('い', new Jaco('う'), 'え', new Jaco('お'), [
        'か',
        new Jaco('き')
      ])
      .toString(),
    'あいうえおかき'
  );
});

// convertIterationMarks()
test('繰り返し記号変換', t => {
  t.is(
    new Jaco('がくもんのすゝめ').convertIterationMarks().toString(),
    'がくもんのすすめ'
  );
});

// convertIterationMarks()
test('繰り返し記号変換2', t => {
  t.is(
    new Jaco('がくもんのすゝゝゝゝゝゝゝゝゝゝゝゝめ')
      .convertIterationMarks()
      .toString(),
    'がくもんのすすすすすすすすすすすすすめ'
  );
});

// convertIterationMarks()
test('繰り返し記号変換3', t => {
  t.is(
    new Jaco('がくもんのすゝゝゝゞゝゝゝゝゝゝゝゝゝめ')
      .convertIterationMarks()
      .toString(),
    'がくもんのすすすすずすすすすすすすすすめ'
  );
});

// convertIterationMarks()
test('繰り返し記号変換4', t => {
  t.is(
    new Jaco('ゝゞあゝゞかゞゝがゝゞゝ').convertIterationMarks().toString(),
    'ゝゞあああかがかがかがか'
  );
});

// convertIterationMarks()
test('繰り返し記号変換5', t => {
  t.is(
    new Jaco('ガクモンノスヽヽヽヽヽヽヽヽヽヽヽヽメ')
      .convertIterationMarks()
      .toString(),
    'ガクモンノスススススススススススススメ'
  );
});

// convertIterationMarks()
test('繰り返し記号変換6', t => {
  t.is(
    new Jaco('ヽヾアヽヾカヾヽガヽヾヽ').convertIterationMarks().toString(),
    'ヽヾアアアカガカガカガカ'
  );
});

// convertProlongedSoundMarks()
test('長音符変換', t => {
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
    'んーっーンーッー'
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
    'んんっっンンッッ'
  ].join('');
  t.is(a2.convertProlongedSoundMarks().toString(), b);
});

// convertProlongedSoundMarks()
test('長音符変換2', t => {
  t.is(
    new Jaco('ウバッシャアーーーーーーーーー')
      .convertProlongedSoundMarks()
      .toString(),
    'ウバッシャアアアアアアアアアア'
  );
});

// endWith()
test('末尾合致 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.true(a.endWith('ひらき'));
});

// endWith()
test('末尾合致2 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.false(a.endWith('𩸽の'));
});

// endWith()
test('末尾合致3 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.true(a.endWith('ひら', 4));
});

// endWith()
test('末尾合致4 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.true(a.endWith('𩸽の', 2));
});

// endWith()
test('末尾合致5 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.true(a.endWith(new Jaco('ひら'), 4));
});

// endWith()
test('末尾合致6 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.true(a.endWith(new Jaco('𩸽の'), 2));
});

// has()
test('含むかどうか', t => {
  const a = new Jaco('いろは');
  t.true(a.has('い'));
});

// has()
test('含むかどうか2', t => {
  const a = new Jaco('いろは');
  t.true(a.has(new Jaco('い')));
});

// has()
test('含むかどうか3', t => {
  const a = new Jaco('いろは');
  t.false(a.has(new Jaco('あ')));
});

// has()
test('含むかどうか4', t => {
  const a = new Jaco('いろは');
  t.true(a.has('いろ'));
});

// has()
test('含むかどうか5', t => {
  const a = new Jaco('いろは');
  t.true(a.has('いは'));
});

// has()
test('含むかどうか6', t => {
  const a = new Jaco('いろは');
  t.true(a.has('ろは'));
});

// has()
test('含むかどうか7', t => {
  const a = new Jaco('いろは');
  t.false(a.has('にほへと'));
});

// has()
test('含むかどうか8', t => {
  const a = new Jaco('いろは');
  t.false(a.has('a-z'));
});

// has()
test('含むかどうか9', t => {
  const a = new Jaco('いろは');
  t.true(a.has('あ-ん'));
});

// hasSmallLetter
test('小書き文字の検知', t => {
  t.true(
    new Jaco(
      'ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ'
    ).hasSmallLetter()
  );
});

// hasSmallLetter
test('小書き文字の検知2', t => {
  t.true(new Jaco('あァァァんまりだァァアァ').hasSmallLetter());
});

// hasSmallLetter
test('小書き文字の検知3', t => {
  t.false(new Jaco('あいうえお').hasSmallLetter());
});

// hasSurrogatePair
test('サロゲートペア検知', t => {
  t.true(new Jaco('𩸽のひらき').hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知2', t => {
  t.false(new Jaco('ほっけのひらき').hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知3 (上位サロゲートのコードポイントひとつ前の文字)', t => {
  t.false(new Jaco(BEFORE_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知4 (上位サロゲートのみ)', t => {
  t.false(new Jaco(START_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知5 (上位サロゲートのみ 最後のコードポイント)', t => {
  t.false(new Jaco(END_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知6 (下位サロゲートのみ)', t => {
  t.false(new Jaco(START_LOW).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知7 (下位サロゲートのみ 最後のコードポイント)', t => {
  t.false(new Jaco(END_LOW).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知8 (下位サロゲートのコードポイントひとつ次の文字)', t => {
  t.false(new Jaco(AFTER_LOW).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知9 (上位サロゲートのコードポイントひとつ前の文字 + 上位サロゲートのコードポイントひとつ前の文字)', t => {
  t.false(new Jaco(BEFORE_HIGH + BEFORE_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知10 (上位サロゲートのみ + 上位サロゲートのコードポイントひとつ前の文字)', t => {
  t.false(new Jaco(START_HIGH + BEFORE_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知11 (上位サロゲートのみ 最後のコードポイント + 上位サロゲートのコードポイントひとつ前の文字)', t => {
  t.false(new Jaco(END_HIGH + BEFORE_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知12 (下位サロゲートのみ + 上位サロゲートのコードポイントひとつ前の文字)', t => {
  t.false(new Jaco(START_LOW + BEFORE_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知13 (下位サロゲートのコードポイントひとつ次の文字 + 上位サロゲートのコードポイントひとつ前の文字)', t => {
  t.false(new Jaco(AFTER_LOW + BEFORE_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知14 (下位サロゲート コードポイントひとつ次 + 上位サロゲートのコードポイントひとつ前の文字)', t => {
  t.false(new Jaco(AFTER_LOW + BEFORE_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知15 (上位サロゲートのコードポイントひとつ前の文字 + 上位サロゲート)', t => {
  t.false(new Jaco(BEFORE_HIGH + START_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知16 (上位サロゲートのみ + 上位サロゲート)', t => {
  t.false(new Jaco(START_HIGH + START_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知17 (上位サロゲートのみ 最後のコードポイント + 上位サロゲート)', t => {
  t.false(new Jaco(END_HIGH + START_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知18 (下位サロゲートのみ + 上位サロゲート)', t => {
  t.false(new Jaco(END_LOW + START_LOW).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知19 (下位サロゲートのコードポイントひとつ次の文字 + 上位サロゲート)', t => {
  t.false(new Jaco(AFTER_LOW + START_HIGH).hasSurrogatePair());
});

// hasSurrogatePair
test('サロゲートペア検知20 (下位サロゲート コードポイントひとつ次 + 上位サロゲート)', t => {
  t.false(new Jaco(AFTER_LOW + START_LOW).hasSurrogatePair());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知', t => {
  t.false(new Jaco('𩸽のひらき').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知2', t => {
  t.false(new Jaco('𩸽𩸽𩸽𩸽𩸽').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知3', t => {
  t.false(new Jaco('ほっけのひらき').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知4', t => {
  t.false(new Jaco(BEFORE_HIGH).hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知5', t => {
  t.true(new Jaco(BEFORE_HIGH + START_HIGH).hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知6', t => {
  t.true(new Jaco(BEFORE_HIGH + START_HIGH + END_HIGH).hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知7', t => {
  t.true(new Jaco('\ud867ほっけのひらき').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知8', t => {
  t.true(new Jaco('ほっけのひらき\ud867').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知9', t => {
  t.true(new Jaco('ほっけ\ud867のひらき').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知10', t => {
  t.true(new Jaco('ほっけ\ude3dのひらき').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知11', t => {
  t.true(new Jaco('𩸽\ude3dのひらき').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知12', t => {
  t.true(new Jaco('𩸽\ud867のひらき').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知13', t => {
  t.true(new Jaco('\ude3d𩸽のひらき').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知14', t => {
  t.true(new Jaco('\ud867𩸽のひらき').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知15', t => {
  t.true(new Jaco('ひらきにする𩸽\ud867').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知16', t => {
  t.true(new Jaco('ひらきにする𩸽\ude3d').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知17', t => {
  t.true(new Jaco('ひらきにする\ud867𩸽').hasUnpairedSurrogate());
});

// hasUnpairedSurrogate
test('不完全サロゲートペア検知18', t => {
  t.true(new Jaco('ひらきにする\ude3d𩸽').hasUnpairedSurrogate());
});

// includes()
test('部分合致', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.true(a.includes('𩸽の'));
});

// includes()
test('部分合致2', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.true(a.includes('の刺し身の切り'));
});

// includes()
test('部分合致3', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.false(a.includes('𩸽の刺しの切り身'));
});

// indexOf()
test('前方検索', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.indexOf('の'), 1);
});

// indexOf()
test('前方検索2', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.indexOf('の', 3), 5);
});

// indexOf()
test('前方検索3', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.indexOf(new Jaco('の')), 1);
});

// indexOf()
test('前方検索4', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.indexOf(new Jaco('の'), 3), 5);
});

// indexOf()
test('前方検索5', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.indexOf(new Jaco('挿し')), -1);
});

// indexOf()
test('前方検索6', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.indexOf(new Jaco('𩸽の刺し')), 0);
});

// indexOf()
test('前方検索7', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.indexOf(new Jaco('身の切り身')), 4);
});

// is()
test('完全マッチ', t => {
  const a = new Jaco('いろは');
  t.true(a.is('いろは'));
});

// is()
test('完全マッチ2', t => {
  const a = new Jaco('いろは');
  t.true(a.is(new Jaco('いろは')));
});

// is()
test('完全マッチ3', t => {
  const a = new Jaco('いろは');
  t.false(a.is('いろはに'));
});

// is()
test('完全マッチ4', t => {
  const a = new Jaco('いろは');
  t.false(a.is(new Jaco('いろはに')));
});

// isEmpty()
test('空', t => {
  const a = new Jaco('');
  t.true(a.isEmpty());
});
test('空2', t => {
  const a = new Jaco(' ');
  t.false(a.isEmpty());
});

// isNumeric()
test('数字かどうか1', t => {
  const a = new Jaco(' ２３ｓ０３ｓｄｋふぁえ');
  t.false(a.isNumeric());
});

// isNumeric()
test('数字かどうか2', t => {
  const a = new Jaco('２３０３');
  t.false(a.isNumeric());
});

// isNumeric()
test('数字かどうか3', t => {
  const a = new Jaco('000012303234');
  t.true(a.isNumeric());
});

// isNumeric()
test('数字かどうか4', t => {
  const a = new Jaco('-123.3234');
  t.true(a.isNumeric());
});

// isNumeric()
test('数字かどうか5', t => {
  const a = new Jaco('-123.3234.');
  t.false(a.isNumeric());
});

// isNumeric()
test('数字かどうか6', t => {
  const a = new Jaco('12-3.3234.');
  t.false(a.isNumeric());
});

// isNumeric()
test('数字かどうか7', t => {
  const a = new Jaco('.3234');
  t.true(a.isNumeric());
});

// isNumeric()
test('数字かどうか8', t => {
  const a = new Jaco('-.3234');
  t.true(a.isNumeric());
});

// isNumeric()
test('数字かどうか9', t => {
  const a = new Jaco('.3234');
  t.true(a.isNumeric(false));
});

// isNumeric()
test('数字かどうか10', t => {
  const a = new Jaco('-.3234');
  t.true(a.isNumeric(true));
});

// isNumeric()
test('数字かどうか11', t => {
  const a = new Jaco('.3234');
  t.true(a.isNumeric(true, true));
});

// isNumeric()
test('数字かどうか12', t => {
  const a = new Jaco('-.3234');
  t.false(a.isNumeric(true, false));
});

// isNumeric()
test('数字かどうか13', t => {
  const a = new Jaco('.3234');
  t.false(a.isNumeric(false, false));
});

// isNumeric()
test('数字かどうか14', t => {
  const a = new Jaco('-.3234');
  t.false(a.isNumeric(false, true));
});

// isOnly()
test('該当の文字のみ', t => {
  const a = new Jaco('いろは');
  t.true(a.isOnly('いろはにほへと'));
});

// isOnly()
test('該当の文字のみ2', t => {
  const a = new Jaco('いろは');
  t.false(a.isOnly('いはにほへと'));
});

// isOnly()
test('該当の文字のみ3', t => {
  const a = new Jaco('abcいろは');
  t.false(a.isOnly('いろはにほへと'));
});

// isOnly()
test('該当の文字のみ4', t => {
  const a = new Jaco('いろは');
  t.true(a.isOnly('いろは'));
});

// isOnly()
test('該当の文字のみ5', t => {
  const a = new Jaco('いろは');
  t.false(a.isOnly('いろ'));
});

// isOnly()
test('該当の文字のみ6', t => {
  const a = new Jaco('いろは');
  t.true(a.isOnly('いろろろろははははにににに'));
});

// isOnly()
test('該当の文字のみ7', t => {
  const a = new Jaco('いろはち');
  t.false(a.isOnly('いろはにほへと'));
});

// isOnly()
test('該当の文字のみ8', t => {
  const a = new Jaco('いろはち');
  t.false(a.isOnly(']()[]['));
});

// isOnly()
test('該当の文字のみ9', t => {
  const a = new Jaco('\\');
  t.true(a.isOnly(']()[]\\'));
});

// isOnly()
test('該当の文字のみ10', t => {
  const a = new Jaco('\\');
  t.true(a.isOnly('\\'));
});

// isOnly()
test('該当の文字のみ11', t => {
  const a = new Jaco('\\あ\\');
  t.true(a.isOnly('\\あ'));
});

// isOnly()
test('該当の文字のみ12', t => {
  const a = new Jaco('^^^');
  t.true(a.isOnly('^'));
});

// isOnly()
test('該当の文字のみ13', t => {
  const a = new Jaco('^$^');
  t.true(a.isOnly('$^'));
});

// isOnly()
test('該当の文字のみ14', t => {
  const a = new Jaco('あいうえお');
  t.true(a.isOnly('あ-お'));
});

// isOnly()
test('該当の文字のみ15', t => {
  const a = new Jaco('あいうえおか');
  t.false(a.isOnly('あ-お'));
});

// isOnlyHiragana()
test('ひらがなのみ', t => {
  const test = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
  ].join('');
  const a = new Jaco(test);
  t.true(a.isOnlyHiragana());
});

// isOnlyHiragana()
test('ひらがなのみ2', t => {
  const test = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ'
  ].join('');
  const a = new Jaco(test);
  t.false(a.isOnlyHiragana());
});

// isOnlyHiragana()
test('ひらがなのみ3', t => {
  const test = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛漢字'
  ].join('');
  const a = new Jaco(test);
  t.false(a.isOnlyHiragana());
});

// isOnlyHiragana()
test('ひらがなのみ4', t => {
  const test = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛123'
  ].join('');
  const a = new Jaco(test);
  t.false(a.isOnlyHiragana());
});

// isOnlyHiragana()
test('ひらがなのみ5', t => {
  const test = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛abc'
  ].join('');
  const a = new Jaco(test);
  t.false(a.isOnlyHiragana());
});

// isOnlyKatakana()
test('カタカナのみ', t => {
  const test = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜'
  ].join('');
  const a = new Jaco(test);
  t.true(a.isOnlyKatakana());
});

// isOnlyKatakana()
test('カタカナのみ2', t => {
  const test = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
  ].join('');
  const a = new Jaco(test);
  t.false(a.isOnlyKatakana());
});

// isOnlyKatakana()
test('カタカナのみ3', t => {
  const test = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜漢字'
  ].join('');
  const a = new Jaco(test);
  t.false(a.isOnlyKatakana());
});

// isOnlyKatakana()
test('カタカナのみ4', t => {
  const test = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜123'
  ].join('');
  const a = new Jaco(test);
  t.false(a.isOnlyKatakana());
});

// isOnlyKatakana()
test('カタカナのみ5', t => {
  const test = [
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゜abc'
  ].join('');
  const a = new Jaco(test);
  t.false(a.isOnlyKatakana());
});

// lastIndexOf()
test('後方検索', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.lastIndexOf('の'), 5);
});

// lastIndexOf()
test('後方検索2', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.lastIndexOf('の', 0), -1);
});

// lastIndexOf()
test('後方検索3', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.lastIndexOf(new Jaco('の')), 5);
});

// lastIndexOf()
test('後方検索4', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.lastIndexOf(new Jaco('の'), 0), -1);
});

// lastIndexOf()
test('後方検索5', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.is(a.lastIndexOf(new Jaco('挿し')), -1);
});

// match()
test('マッチ', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.deepEqual(Array.from(a.match(/の/g)), ['の', 'の']);
});

// match()
test('マッチ2', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.deepEqual(Array.from(a.match(/.+(の).+/)), ['𩸽の刺し身の切り身', 'の']);
});

// match()
test('マッチ3', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.falsy(a.match(/挿し/));
});

// matches()
test('マッチ取得', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.deepEqual(Array.from(a.matches(/の/g)), ['の', 'の']);
});

// matches()
test('マッチ取得', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.deepEqual(Array.from(a.matches(/.+(の).+/)), ['𩸽の刺し身の切り身', 'の']);
});

// matches()
test('マッチ取得3', t => {
  const a = new Jaco('𩸽の刺し身の切り身');
  t.deepEqual(Array.from(a.matches(/挿し/)), []);
});

// padEnd()
test('後ろ埋め', t => {
  const a = new Jaco('𩸽');
  t.is(a.padEnd(3).toString(), '𩸽  ');
});

// padEnd()
test('後ろ埋め2', t => {
  const a = new Jaco('𩸽');
  t.is(a.padEnd(3, '𩸽').toString(), '𩸽𩸽𩸽');
});

// padEnd()
test('後ろ埋め3', t => {
  const a = new Jaco('a');
  t.is(a.padEnd(3, '𩸽').toString(), 'a𩸽𩸽');
});

// padEnd()
test('後ろ埋め4', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.padEnd(3).toString(), '𩸽のひ');
});

// padEnd()
test('後ろ埋め5', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.padEnd(3, 'abc').toString(), '𩸽のひ');
});

// padEnd()
test('後ろ埋め6', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.padEnd(10, 'abc').toString(), '𩸽のひらきabcab');
});

// padEnd()
test('後ろ埋め7', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.padEnd(-1).toString(), '𩸽のひらき');
});

// padStart()
test('前埋め', t => {
  const a = new Jaco('𩸽');
  t.is(a.padStart(3).toString(), '  𩸽');
});

// padStart()
test('前埋め2', t => {
  const a = new Jaco('𩸽');
  t.is(a.padStart(3, '𩸽').toString(), '𩸽𩸽𩸽');
});

// padStart()
test('前埋め3', t => {
  const a = new Jaco('a');
  t.is(a.padStart(3, '𩸽').toString(), '𩸽𩸽a');
});

// padStart()
test('前埋め4', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.padStart(3).toString(), '𩸽のひ');
});

// padStart()
test('前埋め5', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.padStart(3, 'abc').toString(), '𩸽のひ');
});

// padStart()
test('前埋め6', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.padStart(10, 'abc').toString(), 'abcab𩸽のひらき');
});

// padStart()
test('前埋め7', t => {
  const a = new Jaco('𩸽のひらき');
  t.is(a.padStart(-1).toString(), '𩸽のひらき');
});

// prepend()
test('前方結合', t => {
  const a = new Jaco('うえお');
  t.is(a.prepend('あい').toString(), 'あいうえお');
});

// prepend()
test('前方結合2', t => {
  const a = new Jaco('にほへと');
  t.is(a.prepend(new Jaco('いろは')).toString(), 'いろはにほへと');
});

// remove()
test('削除', t => {
  const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
  t.is(a.remove('aBc').toString(), 'DeFgHiJkLmNoPqRsTuVwXyZ');
});

// remove()
test('削除2', t => {
  const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
  t.is(a.remove(/[a-z]/).toString(), 'BcDeFgHiJkLmNoPqRsTuVwXyZ');
});

// remove()
test('削除3', t => {
  const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
  t.is(a.remove(/[a-z]/g).toString(), 'BDFHJLNPRTVXZ');
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除', t => {
  t.is(
    new Jaco('𩸽のひらき').removeUnpairedSurrogate().toString(),
    '𩸽のひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除2', t => {
  t.is(
    new Jaco('𩸽𩸽𩸽𩸽𩸽').removeUnpairedSurrogate().toString(),
    '𩸽𩸽𩸽𩸽𩸽'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除3', t => {
  t.is(
    new Jaco('\ude3d\ud867\ude3d\ud867\ude3d\ud867')
      .removeUnpairedSurrogate()
      .toString(),
    '𩸽𩸽'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除4', t => {
  t.is(
    new Jaco('ほっけのひらき').removeUnpairedSurrogate().toString(),
    'ほっけのひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除5', t => {
  t.is(
    new Jaco(`${START_HIGH}ほっけのひらき`)
      .removeUnpairedSurrogate()
      .toString(),
    'ほっけのひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除6', t => {
  t.is(
    new Jaco(`ほっけのひらき${END_LOW}`).removeUnpairedSurrogate().toString(),
    'ほっけのひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除7', t => {
  t.is(
    new Jaco(`${START_HIGH}ほっけのひらき`)
      .removeUnpairedSurrogate()
      .toString(),
    'ほっけのひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除8', t => {
  t.is(
    new Jaco(`ほっけのひらき${END_LOW}`).removeUnpairedSurrogate().toString(),
    'ほっけのひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除9', t => {
  t.is(
    new Jaco('ほっけ\ud867のひらき').removeUnpairedSurrogate().toString(),
    'ほっけのひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除10', t => {
  t.is(
    new Jaco('ほっけ\ude3dのひらき').removeUnpairedSurrogate().toString(),
    'ほっけのひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除11', t => {
  t.is(
    new Jaco('𩸽\ude3dのひらき').removeUnpairedSurrogate().toString(),
    '𩸽のひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除12', t => {
  t.is(
    new Jaco('𩸽\ud867のひらき').removeUnpairedSurrogate().toString(),
    '𩸽のひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除13', t => {
  t.is(
    new Jaco('\ude3d𩸽のひらき').removeUnpairedSurrogate().toString(),
    '𩸽のひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除14', t => {
  t.is(
    new Jaco('\ud867𩸽のひらき').removeUnpairedSurrogate().toString(),
    '𩸽のひらき'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除15', t => {
  t.is(
    new Jaco('ひらきにする𩸽\ud867').removeUnpairedSurrogate().toString(),
    'ひらきにする𩸽'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除16', t => {
  t.is(
    new Jaco('ひらきにする𩸽\ude3d').removeUnpairedSurrogate().toString(),
    'ひらきにする𩸽'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除17', t => {
  t.is(
    new Jaco('ひらきにする\ud867𩸽').removeUnpairedSurrogate().toString(),
    'ひらきにする𩸽'
  );
});

// removeUnpairedSurrogate
test('不完全サロゲートペアの削除18', t => {
  t.is(
    new Jaco('ひらきにする\ude3d𩸽').removeUnpairedSurrogate().toString(),
    'ひらきにする𩸽'
  );
});

// removeVoicedMarks()
test('濁点・半濁点除去', t => {
  const a = [
    'がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ',
    'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヷヸヴヹヺ'
  ].join('');
  const a2 = new Jaco(a);
  const b = [
    'かきくけこさしすせそたちつてとはひふへほはひふへほ',
    'カキクケコサシスセソタチツテトハヒフヘホハヒフヘホワイウエヲ'
  ].join('');
  t.is(a2.removeVoicedMarks().toString(), b);
});

// repeat()
test('くりかえし', t => {
  const a = new Jaco('あ');
  t.is(a.repeat(3).toString(), 'あああ');
});

// repeat()
test('くりかえし2', t => {
  const a = new Jaco('𩸽と');
  t.is(a.repeat(6).toString(), '𩸽と𩸽と𩸽と𩸽と𩸽と𩸽と');
});

// repeat()
test('くりかえし3', t => {
  const a = new Jaco('𩸽');
  t.is(a.repeat(0).toString(), '');
});

// repeat()
test('くりかえし4', t => {
  const a = new Jaco('𩸽');
  t.is(a.repeat().toString(), '');
});

// repeat()
test('くりかえし5 小数点切り捨て', t => {
  const a = new Jaco('𩸽');
  t.is(a.repeat(3.5).toString(), '𩸽𩸽𩸽');
});

// repeat()
test('くりかえし6 負の数は0強制', t => {
  const a = new Jaco('𩸽');
  t.is(a.repeat(-1).toString(), '');
});

// repeat()
test('くりかえし7 無限エラー', t => {
  const a = new Jaco('𩸽');
  try {
    a.repeat(Infinity);
  } catch (e) {
    t.pass();
  }
});

// replace()
test('置換', t => {
  const a = new Jaco('abcdeABCDE');
  t.is(a.replace(/abc/gi, 'z').toString(), 'zdezDE');
});

// replace()
test('置換2', t => {
  const a = new Jaco('abcdeABCDE');
  t.is(a.replace('abc', 'z').toString(), 'zdeABCDE');
});

// replace()
test('置換3', t => {
  const a = new Jaco('abcdeABCDE');
  t.is(a.replace(new Jaco('abc'), 'z').toString(), 'zdeABCDE');
});

// replaceFromMap()
test('マップから置換', t => {
  const a = new Jaco('abcdeABCDE');
  t.is(
    a
      .replaceFromMap({
        abc: 'z',
        ABC: 'Z'
      })
      .toString(),
    'zdeZDE'
  );
});

// search()
test('検索', t => {
  const a = new Jaco('食べたい𩸽');
  t.is(a.search(/𩸽/), 4);
});

// search()
test('検索2', t => {
  const a = new Jaco('𩸽の刺し身');
  t.is(a.search(/の/), 1);
});

// search()
test('検索3', t => {
  const a = new Jaco('食べたい𩸽の刺し身');
  t.is(a.search('の'), 5);
});

// search()
test('検索4', t => {
  const a = new Jaco('𩸽の刺し身');
  t.is(a.search(new Jaco('の')), 1);
});

// slice()
test('抽出', t => {
  const a = new Jaco('いろはにほへと');
  const b = a.slice(1, 5);
  t.is(b.toString(), 'ろはにほ');
});

// slice()
test('抽出2', t => {
  const a = new Jaco('いろはにほへと');
  const b = a.slice(1);
  t.is(b.toString(), 'ろはにほへと');
});

// slice()
test('抽出3', t => {
  const a = new Jaco('𩸽の刺し身');
  const b = a.slice(1, 3);
  t.is(b.toString(), 'の刺');
});

// slice()
test('抽出4', t => {
  const a = new Jaco('𩸽の刺し身');
  const b = a.slice(1);
  t.is(b.toString(), 'の刺し身');
});

// split()
test('分割', t => {
  const a = new Jaco('𩸽の刺し身');
  t.deepEqual(a.split('の'), ['𩸽', '刺し身']);
});

// split()
test('分割2', t => {
  const a = new Jaco('asadafa');
  t.deepEqual(a.split('a'), ['', 's', 'd', 'f', '']);
});

// split()
test('分割3', t => {
  const a = new Jaco('asadafa');
  t.deepEqual(a.split(/a/), ['', 's', 'd', 'f', '']);
});

// split()
test('分割4', t => {
  const a = new Jaco('asadafa');
  t.deepEqual(a.split(/a/g), ['', 's', 'd', 'f', '']);
});

// split()
test('分割5', t => {
  const a = new Jaco('asadafa');
  t.deepEqual(a.split(/(a)/), ['', 'a', 's', 'a', 'd', 'a', 'f', 'a', '']);
});

// startsWith()
test('先頭合致 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.true(a.startsWith('𩸽のひらき'));
});

// startsWith()
test('先頭合致2 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.false(a.startsWith('のひらき'));
});

// startsWith()
test('先頭合致3 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.true(a.startsWith('ひら', 2));
});

// startsWith()
test('先頭合致4 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.true(a.startsWith('ひらき', 2));
});

// startsWith()
test('先頭合致5 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.true(a.startsWith(new Jaco('ら'), 3));
});

// startsWith()
test('先頭合致6 ', t => {
  const a = new Jaco('𩸽のひらき');
  t.true(a.startsWith(new Jaco('𩸽の'), 0));
});

// substr()
test('長さで抽出', t => {
  const a = new Jaco('いろはにほへと');
  const b = a.substr(1, 2);
  t.is(b.toString(), 'ろは');
});

// substr()
test('長さで抽出2', t => {
  const a = new Jaco('いろはにほへと');
  const b = a.substr(1);
  t.is(b.toString(), 'ろはにほへと');
});

// substr()
test('長さで抽出3', t => {
  const a = new Jaco('𩸽の刺し身');
  const b = a.substr(2, 3);
  t.is(b.toString(), '刺し身');
});

// substr()
test('長さで抽出4', t => {
  const a = new Jaco('𩸽の刺し身');
  const b = a.substr(-1, 1);
  t.is(b.toString(), '身');
});

// substring()
test('インデックスから抽出', t => {
  const a = new Jaco('いろはにほへと');
  const b = a.substring(0, 2);
  t.is(b.toString(), 'いろ');
});

// substring()
test('インデックスから抽出2', t => {
  const a = new Jaco('いろはにほへと');
  const b = a.substring(1, 3);
  t.is(b.toString(), 'ろは');
});

// substring()
test('インデックスから抽出3', t => {
  const a = new Jaco('𩸽の刺し身');
  const b = a.substring(1, 4);
  t.is(b.toString(), 'の刺し');
});

// substring()
test('インデックスから抽出4', t => {
  const a = new Jaco('𩸽の刺し身');
  const b = a.substring(4, 1);
  t.is(b.toString(), 'の刺し');
});

// substring()
test('インデックスから抽出5', t => {
  const a = new Jaco('𩸽の刺し身');
  const b = a.substring(-5, 16);
  t.is(b.toString(), '𩸽の刺し身');
});

// test()
test('テスト', t => {
  const a = new Jaco('あいう');
  t.true(a.test('あいう'));
});

// test()
test('テスト2', t => {
  const a = new Jaco('あいう');
  t.true(a.test(/^あ/));
});

// test()
test('テスト3', t => {
  const a = new Jaco('あいう');
  t.false(a.test('あいうえ'));
});

// test()
test('テスト4', t => {
  const a = new Jaco('あいう');
  t.false(a.test(/あ$/));
});

// toBasicLetter()
test('小書き文字を基底文字に変換', t => {
  const a = new Jaco('あァァァんまりだァァアァ');
  t.is(a.toBasicLetter().toString(), 'あアアアんまりだアアアア');
});

// toHiragana()
test('ひらがなに変換', t => {
  const a = new Jaco(
    [
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
      'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
      'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
      'ボパピプペポヷヸヴヹヺ'
    ].join('')
  );
  const b = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
    'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
    'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
    'ぽわ゛ゐ゛ゔゑ゛を゛'
  ].join('');
  t.is(a.toHiragana().toString(), b);
});

// toHiragana()
test('ひらがなに変換2', t => {
  const a = new Jaco(
    [
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
      'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
      'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
      'ボパピプペポヷヸヴヹヺ'
    ].join('')
  );
  const b = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙をぁぃぅぇぉゃゅょっーあ',
    'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
    'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
    'ぽわ゙ゐ゙ゔゑ゙を゙'
  ].join('');
  t.is(a.toHiragana(true).toString(), b);
});

// toHiragana()
test('ひらがなに変換3', t => {
  const a = new Jaco(
    [
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞヲァィゥェォャ',
      'ュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',
      'マミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベ',
      'ボパピプペポヷヸヴヹヺ'
    ].join('')
  );
  const b = [
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛をぁぃぅぇぉゃゅょっーあ',
    'いうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも',
    'やゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺ',
    'ぽわ゛ゐ゛ゔゑ゛を゛'
  ].join('');
  t.is(a.toHiragana(false).toString(), b);
});

// toHiragana()
test('ひらがな以外は変換しない', t => {
  const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）');
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）';
  t.is(a.toHiragana().toString(), b);
});

// toHiragana()
test('ひらがな以外は変換しない2', t => {
  const a = new Jaco('012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）');
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）';
  t.is(a.toHiragana(true).toString(), b);
});

// toKatakana()
test('カタカナに変換', t => {
  const a = new Jaco(
    [
      '。「」、・',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
    ].join('')
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ'
  ].join('');
  t.is(a.toKatakana().toString(), b);
});

// toKatakana()
test('カタカナに変換2', t => {
  const a = new Jaco(
    [
      '。「」、・',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙' // 結合文字濁点・半濁点
    ].join('')
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ'
  ].join('');
  t.is(a.toKatakana().toString(), b);
});

// toKatakana()
test('カタカナに変換3', t => {
  const a = new Jaco(
    [
      '。「」、・',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
    ].join('')
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ'
  ].join('');
  t.is(a.toKatakana(true).toString(), b);
});

// toKatakana()
test('カタカナに変換4', t => {
  const a = new Jaco(
    [
      '。「」、・',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙' // 結合文字濁点・半濁点
    ].join('')
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ'
  ].join('');
  t.is(a.toKatakana(true).toString(), b);
});

// toKatakana()
test('カタカナに変換5', t => {
  const a = new Jaco(
    [
      '。「」、・',
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
    ].join('')
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ'
  ].join('');
  t.is(a.toKatakana(true).toString(), b);
});

// toKatakana()
test('カタカナに変換6', t => {
  const a = new Jaco(
    [
      '。「」、・',
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゙ゐ゙ゔゑ゙を゙' // 結合文字濁点・半濁点
    ].join('')
  );
  const b = [
    '。「」、・',
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
    'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ'
  ].join('');
  t.is(a.toKatakana(false).toString(), b);
});

// toKatakana()
test('カタカナ以外は変換しない', t => {
  const a = new Jaco(
    '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・'
  );
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
  t.is(a.toKatakana().toString(), b);
});

// toKatakana()
test('カタカナ以外は変換しない2', t => {
  const a = new Jaco(
    '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・'
  );
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
  t.is(a.toKatakana(true).toString(), b);
});

// toLowerCase()
test('小文字に変換', t => {
  const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
  t.is(a.toLowerCase().toString(), 'abcdefghijklmnopqrstuvwxyz');
});

// toNarrow()
test('半角化', t => {
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
      '。「」、・'
    ].join('')
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
    '。「」、・'
  ].join('');
  t.is(a.toNarrow().toString(), b);
});

// toNarrow()
test('半角化2', t => {
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
      '。「」、・'
    ].join('')
  );
  const b = [
    ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
    'abcdefghijklmnopqrstuvwxyz{|}~',
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟｶﾞｷﾞｸﾞｹﾞ',
    'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
    'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞわﾞゐﾞゔゑﾞをﾞ',
    '｡｢｣､･'
  ].join('');
  t.is(a.toNarrow(true).toString(), b);
});

// toNarrow()
test('半角化3', t => {
  const a = new Jaco(['Ａ', '\n', 'Ｂ'].join(''));
  const b = ['A', '\n', 'B'].join('');
  t.is(a.toNarrow(true).toString(), b);
});

// toNarrow()
test('半角化4', t => {
  const a = new Jaco(['Ａ', '\r', 'Ｂ'].join(''));
  const b = ['A', '\r', 'B'].join('');
  t.is(a.toNarrow(true).toString(), b);
});

// toNarrow()
test('半角化5', t => {
  const a = new Jaco(['Ａ', '\r\n', 'Ｂ'].join(''));
  const b = ['A', '\r\n', 'B'].join('');
  t.is(a.toNarrow(true).toString(), b);
});

// toNarrow()
test('半角化6', t => {
  const a = new Jaco(['Ａ', '\r\n', 'Ｂ'].join(''));
  const b = ['A', ' ', 'B'].join('');
  t.not(a.toNarrow(true).toString(), b);
});

// toNarrow()
test('半角化6', t => {
  const a = new Jaco(['Ａ', '\r\n', 'Ｂ'].join(''));
  const b = ['A', '\r', 'B'].join('');
  t.not(a.toNarrow(true).toString(), b);
});

// toNarrow()
test('半角化7', t => {
  const a = new Jaco(['Ａ', '\r', 'Ｂ'].join(''));
  const b = ['A', '\r\n', 'B'].join('');
  t.not(a.toNarrow(true).toString(), b);
});

// toNarrowAlphanumeric()
test('英数字を半角に変換', t => {
  const a = new Jaco(
    [
      '！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
      'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
      'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝'
    ].join('')
  );
  const b = [
    '！＂＃＄％＆＇（）＊＋，－．／0123456789：；＜＝＞？＠',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ［］＾＿｀',
    'abcdefghijklmnopqrstuvwxyz｛｜｝'
  ].join('');
  t.is(a.toNarrowAlphanumeric().toString(), b);
});

// toNarrowJapanese()
test('日本語半角化', t => {
  const a = new Jaco(
    [
      '。「」、・',
      'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
      'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
      'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
    ].join('')
  );
  const b = [
    '｡｢｣､･',
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
    'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
    'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞ'
  ].join('');
  t.is(a.toNarrowJapanese().toString(), b);
});

// toNarrowKatakana()
test('半角カタカナに変換', t => {
  const a = new Jaco(
    [
      '。「」、・',
      'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
      'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
      'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
    ].join('')
  );
  const b = [
    '。「」、・',
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
    'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
    'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞ'
  ].join('');
  t.is(a.toNarrowKatakana().toString(), b);
});

// toNarrowKatakana()
test('半角カタカナに変換2', t => {
  const a = new Jaco(
    [
      '。「」、・',
      'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
      'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
      'ヅデドバビブベボパピプペポヷヸヴヹヺ゛゛',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
    ].join('')
  );
  const b = [
    '。「」、・',
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
    'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞﾞﾞ',
    'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
    'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ'
  ].join('');
  t.is(a.toNarrowKatakana(true).toString(), b);
});

// toNarrowKatakana()
test('カタカナとひらがな以外は変換しない', t => {
  const a = new Jaco(
    '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・'
  );
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
  t.is(a.toNarrowKatakana().toString(), b);
});

// toNarrowKatakana()
test('カタカナとひらがな以外は変換しない2', t => {
  const a = new Jaco(
    '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・'
  );
  const b = '012０１２abcａｂｃABCＡＢＣ!"#$%&\'()！＂＃＄％＆＇（）。「」、・';
  t.is(a.toNarrowKatakana(true).toString(), b);
});

// toNarrowSign()
test('記号を半角に変換', t => {
  const a = new Jaco(
    [
      '！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠Ａ',
      'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＾＿｀ａｂｃｄ',
      'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝'
    ].join('')
  );
  const b = [
    '!"#$%&\'()*+,-./０１２３４５６７８９:;<=>?@Ａ',
    'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ[]^_`ａｂｃｄ',
    'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ{|}'
  ].join('');
  t.is(a.toNarrowSign().toString(), b);
});

// toNarrowSymbolForJapanese()
test('日本語記号の半角化', t => {
  const a = new Jaco('。「」、・');
  const b = '｡｢｣､･';
  t.is(a.toNarrowSymbolForJapanese().toString(), b);
});

// toNumber()
test('数値変換', t => {
  const a = new Jaco('123');
  t.is(a.toNumber(), 123);
});

// toNumber()
test('数値変換2', t => {
  const a = new Jaco('123.45');
  t.is(a.toNumber(), 123.45);
});

// toNumber()
test('数値変換3', t => {
  const a = new Jaco('-123');
  t.is(a.toNumber(), -123);
});

// toNumber()
test('数値変換4', t => {
  const a = new Jaco('0123');
  t.is(a.toNumber(), 123);
});

// toNumber()
test('数値変換5', t => {
  const a = new Jaco('0.123');
  t.is(a.toNumber(), 0.123);
});

// toNumber()
test('数値変換6', t => {
  const a = new Jaco('.123');
  t.is(a.toNumber(), 0.123);
});

// toNumber()
test('数値変換7', t => {
  const a = new Jaco('あ');
  t.true(isNaN(a.toNumber()));
});

// toNumeric()
test('数字化', t => {
  const a = new Jaco(' ２３ｓ０３ｓｄｋふぁえ');
  const b = '2303';
  t.is(a.toNumeric().toString(), b);
});

// toNumeric()
test('数字化2', t => {
  const a = new Jaco(' ー-.。２.３ｓ０。３.ｓｄｋふぁえ');
  const b = '2303';
  t.is(a.toNumeric().toString(), b);
});

// toNumeric()
test('数字化3', t => {
  const a = new Jaco(' ２-３ｓ０３ｓｄｋふぁえ');
  const b = '2303';
  t.is(a.toNumeric(true).toString(), b);
});

// toNumeric()
test('数字化4', t => {
  const a = new Jaco('- ２３ｓ０３ｓｄｋふぁえ');
  const b = '-2303';
  t.is(a.toNumeric(true).toString(), b);
});

// toNumeric()
test('数字化5', t => {
  const a = new Jaco(' -２-３-.ｓ０.３ｓｄｋふぁえ');
  const b = '-23.03';
  t.is(a.toNumeric(true, true).toString(), b);
});

// toNumeric()
test('数字化6', t => {
  const a = new Jaco(' ２３.-.-ｓ０３.ｓｄｋふぁえ');
  const b = '23.03';
  t.is(a.toNumeric(true, true).toString(), b);
});

// toNumeric()
test('数字化7', t => {
  const a = new Jaco('- ２３ｓ０３ｓｄｋふぁえ...');
  const b = '2303';
  t.is(a.toNumeric(false, true).toString(), b);
});

// toPhoeticKana
test('よみ変換', t => {
  t.is(new Jaco('あーぁあゝアア').toPhoeticKana().toString(), 'あああああああ');
});

// toString()
test('暗黙の型変換 文字列に変換', t => {
  const a = new Jaco('あ');
  t.is(`${a}い`, 'あい');
});

// toUpperCase()
test('大文字に変換', t => {
  const a = new Jaco('aBcDeFgHiJkLmNoPqRsTuVwXyZ');
  t.is(a.toUpperCase().toString(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
});

// toWide()
test('全角化', t => {
  const a = new Jaco(
    [
      ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
      'abcdefghijklmnopqrstuvwxyz{|}~',
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
      'をぁぃぅぇぉゃゅょっｰあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわﾞゐﾞゔゑﾞをﾞわﾞゐﾞゔゑﾞをﾞ',
      '｡｢｣､･'
    ].join('')
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
    '。「」、・'
  ].join('');
  t.is(a.toWide().toString(), b);
});

// toWideAlphanumeric()
test('英数字を全角に変換', t => {
  const a = new Jaco(
    [
      '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
      'abcdefghijklmnopqrstuvwxyz{|}'
    ].join('')
  );
  const b = [
    '!"#$%&\'()*+,-./０１２３４５６７８９:;<=>?@Ａ',
    'ＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ[]^_`ａｂｃｄ',
    'ｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ{|}'
  ].join('');
  t.is(a.toWideAlphanumeric().toString(), b);
});

// toWideJapanese()
test('日本語全角化', t => {
  const a = new Jaco(
    [
      '｡｢｣､･',
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
    ].join('')
  );
  const b = [
    '。「」、・',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
  ].join('');
  t.is(a.toWideJapanese().toString(), b);
});

// toWideKatakana()
test('全角カタカナに変換', t => {
  const a = new Jaco(
    [
      '｡｢｣､･',
      'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｶﾞｷﾞｸﾞｹﾞ',
      'ｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾜﾞｲﾞｳﾞｴﾞｦﾞ',
      'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
      'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
      'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
    ].join('')
  );
  const b = [
    '｡｢｣､･',
    'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌ',
    'ネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂ',
    'ヅデドバビブベボパピプペポヷヸヴヹヺ',
    'をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬ',
    'ねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢ',
    'づでどばびぶべぼぱぴぷぺぽわ゛ゐ゛ゔゑ゛を゛'
  ].join('');
  t.is(a.toWideKatakana().toString(), b);
});

// toWideSign()
test('記号を全角に変換', t => {
  const a = new Jaco(
    [
      '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`',
      'abcdefghijklmnopqrstuvwxyz{|}'
    ].join('')
  );
  const b = [
    '！＂＃＄％＆＇（）＊＋，－．／0123456789：；＜＝＞？＠',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ［］＾＿｀',
    'abcdefghijklmnopqrstuvwxyz｛｜｝'
  ].join('');
  t.is(a.toWideSign().toString(), b);
});

// toWideSymbolForJapanese()
test('日本語記号の全角化', t => {
  const a = new Jaco('｡｢｣､･');
  const b = '。「」、・';
  t.is(a.toWideSymbolForJapanese().toString(), b);
});

// valueOf()
test('暗黙の型変換 文字列に変換後さらに数値に変換される', t => {
  const a = new Jaco('1');
  t.is(+a, 1);
});

// trim()
test('前後の空白を削除', t => {
  const a = new Jaco('a b');
  a.trim();
  t.is(a.toString(), 'a b');
});

// trim()
test('前後の空白を削除2', t => {
  const a = new Jaco(' a b');
  t.is(a.trim().toString(), 'a b');
});

// trim()
test('前後の空白を削除3', t => {
  const a = new Jaco('a b  　');
  t.is(a.trim().toString(), 'a b');
});

// trim()
test('前後の空白を削除4', t => {
  const a = new Jaco('　a 　b\n');
  t.is(a.trim().toString(), 'a 　b');
});

// trimLeft()
test('前の空白を削除', t => {
  const a = new Jaco('a b');
  t.is(a.trimLeft().toString(), 'a b');
});

// trimLeft()
test('前の空白を削除2', t => {
  const a = new Jaco(' a b');
  t.is(a.trimLeft().toString(), 'a b');
});

// trimLeft()
test('前の空白を削除3', t => {
  const a = new Jaco('a b  　');
  t.is(a.trimLeft().toString(), 'a b  　');
});

// trimLeft()
test('前の空白を削除4', t => {
  const a = new Jaco('　a 　b\n');
  t.is(a.trimLeft().toString(), 'a 　b\n');
});

// trimRight()
test('後ろの空白を削除', t => {
  const a = new Jaco('a b');
  t.is(a.trimRight().toString(), 'a b');
});

// trimRight()
test('後ろの空白を削除2', t => {
  const a = new Jaco(' a b');
  t.is(a.trimRight().toString(), ' a b');
});

// trimRight()
test('後ろの空白を削除3', t => {
  const a = new Jaco('a b  　');
  t.is(a.trimRight().toString(), 'a b');
});

// trimRight()
test('後ろの空白を削除4', t => {
  const a = new Jaco('　a 　b\n');
  t.is(a.trimRight().toString(), '　a 　b');
});

// [@@iterator]()
test('イテレータ', t => {
  const a = new Jaco('𩸽のひらき');
  const b = [];
  for (const j of a) {
    b.push(j.toString());
  }
  t.is(b.join(''), '𩸽のひらき');
});

// [@@iterator]()
test('イテレータ2', t => {
  const a = new Jaco('𩸽のひらき');
  const b = Array.from(a);
  t.is(b.join(''), '𩸽のひらき');
});
