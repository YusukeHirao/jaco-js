import addSemivoicedMarks from './fn/addSemivoicedMarks';
import addVoicedMarks from './fn/addVoicedMarks';
import byteSize from './fn/byteSize';
import charAt from './fn/charAt';
import charCodeAt from './fn/charCodeAt';
import combinateSoundMarks from './fn/combinateSoundMarks';
import concat from './fn/concat';
import convertIterationMarks from './fn/convertIterationMarks';
import convertProlongedSoundMarks from './fn/convertProlongedSoundMarks';
import endWith from './fn/endWith';
import has from './fn/has';
import hasSmallLetter from './fn/hasSmallLetter';
import hasSurrogatePair from './fn/hasSurrogatePair';
import hasUnpairedSurrogate from './fn/hasUnpairedSurrogate';
import includes from './fn/includes';
import indexOf from './fn/indexOf';
import is from './fn/is';
import isEmpty from './fn/isEmpty';
import isNumeric from './fn/isNumeric';
import isOnly from './fn/isOnly';
import isOnlyHiragana from './fn/isOnlyHiragana';
import isOnlyKatakana from './fn/isOnlyKatakana';
import lastIndexOf from './fn/lastIndexOf';
import matches from './fn/matches';
import padEnd from './fn/padEnd';
import padStart from './fn/padStart';
import remove from './fn/remove';
import removeUnpairedSurrogate from './fn/removeUnpairedSurrogate';
import removeVoicedMarks from './fn/removeVoicedMarks';
import repeat from './fn/repeat';
import replace from './fn/replace';
import replaceFromMap from './fn/replaceFromMap';
import search from './fn/search';
import slice from './fn/slice';
import split from './fn/split';
import startsWith from './fn/startsWith';
import substr from './fn/substr';
import substring from './fn/substring';
import test from './fn/test';
import toBasicLetter from './fn/toBasicLetter';
import toHiragana from './fn/toHiragana';
import toKatakana from './fn/toKatakana';
import toNarrow from './fn/toNarrow';
import toNarrowAlphanumeric from './fn/toNarrowAlphanumeric';
import toNarrowJapanese from './fn/toNarrowJapanese';
import toNarrowKatakana from './fn/toNarrowKatakana';
import toNarrowSign from './fn/toNarrowSign';
import toNarrowSymbolForJapanese from './fn/toNarrowSymbolForJapanese';
import toNumeric from './fn/toNumeric';
import toPhoeticKana from './fn/toPhoeticKana';
import toWide from './fn/toWide';
import toWideAlphanumeric from './fn/toWideAlphanumeric';
import toWideJapanese from './fn/toWideJapanese';
import toWideKatakana from './fn/toWideKatakana';
import toWideSign from './fn/toWideSign';
import toWideSymbolForJapanese from './fn/toWideSymbolForJapanese';
import arrayize from './util/arrayize';
/**
 * ## Jacoクラス
 *
 * 日本語やマルチバイト文字・ASCII文字を扱いやすくするためのラッパークラス
 *
 * 文字列クラスを継承してはいないがメソッドは同等のものが実装されている。
 * ただし基本的にほとんどのメソッドが破壊的メソッドかつチェインナブルである。
 *
 * @version 2.0.0
 * @since 0.1.0
 */
var Jaco = /** @class */ (function () {
    /**
     * コンストラクタ
     *
     * ```javascript
     * var a = new Jaco("あああ");
     * ```
     *
     * @version 2.0.0
     * @since 0.1.0
     * @param str 対象の文字列
     */
    function Jaco(str) {
        // tslint:disable-line:no-any
        this.$ = "" + str;
    }
    Object.defineProperty(Jaco.prototype, "length", {
        /**
         * 文字列長
         *
         * - サロゲートペアを考慮する
         *
         * @version 2.0.0
         * @since 2.0.0
         * @readonly
         */
        get: function () {
            return arrayize(this.$).length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 半濁点を追加する
     *
     * @version 2.0.0
     * @since 1.1.0
     */
    Jaco.prototype.addSemivoicedMarks = function () {
        return new Jaco(addSemivoicedMarks(this.$));
    };
    /**
     * 濁点を追加する
     *
     * @version 2.0.0
     * @since 1.1.0
     */
    Jaco.prototype.addVoicedMarks = function () {
        return new Jaco(addVoicedMarks(this.$));
    };
    /**
     * 後方結合
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param element 結合する文字列
     */
    Jaco.prototype.append = function (element) {
        return new Jaco(concat(this, element));
    };
    /**
     * 文字列のバイトサイズを返す
     *
     * @version 0.2.0
     * @since 0.2.0
     */
    Jaco.prototype.byteSize = function () {
        return byteSize(this.$);
    };
    /**
     * 文字列から指定位置の文字を返す
     *
     * - サロゲートペアを考慮する
     * - String.prototype.charAt とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param index 指定位置
     */
    Jaco.prototype.charAt = function (index) {
        if (index === void 0) { index = 0; }
        return new Jaco(charAt(this.$, index));
    };
    /**
     * 指定位置のUnicodeコードポイントを返す
     *
     * - サロゲートペアを考慮する
     * - String.prototype.charCodeAt とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param charCodeAt 指定位置
     */
    Jaco.prototype.charCodeAt = function (index) {
        if (index === void 0) { index = 0; }
        return charCodeAt(this.$, index);
    };
    /**
     * コピーを生成する
     *
     * @version 0.2.0
     * @since 0.2.0
     */
    Jaco.prototype.clone = function () {
        return new Jaco(this.$);
    };
    /**
     * 濁点・半濁点とひらがな・かたかなを結合させる
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param convertOnly ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
     */
    Jaco.prototype.combinateSoundMarks = function (convertOnly) {
        if (convertOnly === void 0) { convertOnly = false; }
        return new Jaco(combinateSoundMarks(this.$, convertOnly));
    };
    /**
     * 文字列連結をおこなう
     *
     * - String.prototype.concat とは非互換
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param ...args 文字列もしくはJacoインスタンス
     */
    Jaco.prototype.concat = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Jaco(concat(this.$, args));
    };
    /**
     * 繰り返し記号をかなに置き換える
     *
     * @version 2.0.0
     * @since 1.1.0
     */
    Jaco.prototype.convertIterationMarks = function () {
        return new Jaco(convertIterationMarks(this.$));
    };
    /**
     * 長音符をかなに置き換える
     *
     * @version 2.0.0
     * @since 1.1.0
     */
    Jaco.prototype.convertProlongedSoundMarks = function () {
        return new Jaco(convertProlongedSoundMarks(this.$));
    };
    /**
     * 引数に指定された文字列が末尾と合致するか
     *
     * - サロゲートペアを考慮する
     * - String.prototype.endWith とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param search 合致対象文字列
     * @param position 末尾の位置
     */
    Jaco.prototype.endWith = function (search, position) {
        return endWith(this.$, search, position);
    };
    /**
     * 該当の文字のいずれかを含んでいるかどうか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param characters 文字セット
     * @return 結果の真偽
     */
    Jaco.prototype.has = function (characters) {
        return has(this.$, characters);
    };
    /**
     * 小書き文字を含むかどうか
     *
     * @version 1.1.0
     * @since 1.1.0
     * @return 小書き文字を含むかどうか
     */
    Jaco.prototype.hasSmallLetter = function () {
        return hasSmallLetter(this.$);
    };
    /**
     * サロゲートペア文字列を含んでいるかどうか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return 結果の真偽
     */
    Jaco.prototype.hasSurrogatePair = function () {
        return hasSurrogatePair(this.$);
    };
    /**
     * ペアになっていないサロゲートコードポイントを含んでいるかどうか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return 結果の真偽
     */
    Jaco.prototype.hasUnpairedSurrogate = function () {
        return hasUnpairedSurrogate(this.$);
    };
    /**
     * 引数に指定された文字列が部分合致するか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param search 合致対象文字列
     * @param position 開始位置
     * @return 合致したかどうか
     */
    Jaco.prototype.includes = function (search, position) {
        if (position === void 0) { position = 0; }
        return includes(this.$, search, position);
    };
    /**
     * 指定された文字列が最初に現れるインデックスを返す
     *
     * - サロゲートペアを考慮する
     * - String.prototype.indexOf とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param search 検索文字列
     * @param fromIndex 検索位置
     */
    Jaco.prototype.indexOf = function (search, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        return indexOf(this.$, search, fromIndex);
    };
    /**
     * 完全マッチ
     *
     * @version 0.2.0
     * @since 0.2.0
     * @param target 比較する文字列
     */
    Jaco.prototype.is = function (target) {
        return is(this.$, target);
    };
    /**
     * 文字が空かどうか
     *
     * @version 0.2.0
     * @since 0.2.0
     */
    Jaco.prototype.isEmpty = function () {
        return isEmpty(this.$);
    };
    /**
     * 数字だけで構成されているかどうか
     *
     * @version 2.0.0
     * @since 0.5.0
     * @param negative 負の数値も含めてチェックするかどうか
     * @param floatingPoint 小数としてチェックするかどうか
     * @return 結果の真偽
     */
    Jaco.prototype.isNumeric = function (negative, floatingPoint) {
        if (negative === void 0) { negative = true; }
        if (floatingPoint === void 0) { floatingPoint = true; }
        return isNumeric(this.$, negative, floatingPoint);
    };
    /**
     * 該当の文字だけで構成されているかどうか
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param characters 文字セット
     * @return 結果の真偽
     */
    Jaco.prototype.isOnly = function (characters) {
        return isOnly(this.$, characters);
    };
    /**
     * ひらがなだけで構成されているかどうか
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return 結果の真偽
     */
    Jaco.prototype.isOnlyHiragana = function () {
        return isOnlyHiragana(this.$);
    };
    /**
     * カタカナだけで構成されているかどうか
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return 結果の真偽
     */
    Jaco.prototype.isOnlyKatakana = function () {
        return isOnlyKatakana(this.$);
    };
    /**
     * 指定された文字列が最後に現れるインデックスを返す
     *
     * - サロゲートペアを考慮する
     * - String.prototype.lastIndexOf とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param search 検索文字列
     * @param [fromIndex] 検索位置
     *
     */
    Jaco.prototype.lastIndexOf = function (search, fromIndex) {
        if (fromIndex === void 0) { fromIndex = Infinity; }
        return lastIndexOf(this.$, search, fromIndex);
    };
    /**
     * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を得る
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param regexp パターン
     */
    Jaco.prototype.match = function (regexp) {
        return this.$.match(regexp);
    };
    /**
     * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を純粋な配列で得る
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param pattern パターン
     */
    Jaco.prototype.matches = function (pattern) {
        return matches(this.$, pattern);
    };
    /**
     * 【未実装】Unicode 正規化形式を返す
     *
     * TODO: 日本語に関係する文字になるべく対応する
     *
     * - String.prototype.normalize とは非互換
     *
     * @version x.x.x
     * @since x.x.x
     * @param form 正規化形式の種類
     */
    Jaco.prototype.normalize = function (form) {
        if (form === void 0) { form = 'NFC'; }
        throw Error("No support method yet");
    };
    /**
     * 最終的な文字列が指定された長さに到達するように文字列で延長する
     *
     * - サロゲートペアを考慮する
     * - String.prototype.padEnd とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param targetLength 最終的な長さ
     * @param padString 延長する文字列
     */
    Jaco.prototype.padEnd = function (targetLength, padString) {
        if (padString === void 0) { padString = ' '; }
        return new Jaco(padEnd(this.$, targetLength, padString));
    };
    /**
     * 最終的な文字列が指定された長さに到達するように文字列を先頭に追加する
     *
     * - サロゲートペアを考慮する
     * - String.prototype.padStart とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param targetLength 最終的な長さ
     * @param padString 延長する文字列
     */
    Jaco.prototype.padStart = function (targetLength, padString) {
        if (padString === void 0) { padString = ' '; }
        return new Jaco(padStart(this.$, targetLength, padString));
    };
    /**
     * 前方結合
     *
     * ```javascript
     * new Jaco("あああ").prepend("いいい").toString() // => "いいいあああ"
     * ```
     *
     * @version 0.2.0
     * @since 0.2.0
     * @param element 結合する文字列
     */
    Jaco.prototype.prepend = function (element) {
        return new Jaco(concat(element, this));
    };
    /**
     * 文字列を取り除く
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param pattern 取り除く文字列
     */
    Jaco.prototype.remove = function (pattern) {
        return new Jaco(remove(this.$, pattern));
    };
    /**
     * ペアになっていないサロゲートコードポイントの削除
     *
     * @version 2.0.0
     * @since 2.0.0
     */
    Jaco.prototype.removeUnpairedSurrogate = function () {
        return new Jaco(removeUnpairedSurrogate(this.$));
    };
    /**
     * 濁点・半濁点を取り除く
     *
     * @version 1.1.0
     * @since 1.1.0
     * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
     */
    Jaco.prototype.removeVoicedMarks = function (ignoreSingleMark) {
        if (ignoreSingleMark === void 0) { ignoreSingleMark = false; }
        return new Jaco(removeVoicedMarks(this.$, ignoreSingleMark));
    };
    /**
     * 文字列を繰り返す
     *
     * - String.prototype.repeat とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param times 繰り返しの回数
     */
    Jaco.prototype.repeat = function (times) {
        if (times === void 0) { times = 0; }
        return new Jaco(repeat(this.$, times));
    };
    /**
     * 文字列をパターンで置換する
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param pattern  対象のパターン
     * @param replacement 置換する文字列
     */
    Jaco.prototype.replace = function (pattern, replacement) {
        return new Jaco(replace(this.$, pattern, replacement));
    };
    /**
     * キーがパターン・値が置換文字列のハッシュマップによって置換する
     *
     * @version 2.0.0
     * @since 0.1.0
     * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
     */
    Jaco.prototype.replaceFromMap = function (convMap) {
        return new Jaco(replaceFromMap(this.$, convMap));
    };
    /**
     * 正規表現にマッチしたインデックスを返す
     *
     * - サロゲートペアを考慮する
     * - String.prototype.search とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param pattern パターン
     */
    Jaco.prototype.search = function (pattern) {
        return search(this.$, pattern);
    };
    /**
     * 文字位置による抽出
     *
     * - サロゲートペアを考慮する
     * - String.prototype.slice とは非互換
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param start 開始インデックス
     * @param end 終了インデックス 省略すると最後まで
     */
    Jaco.prototype.slice = function (start, end) {
        return new Jaco(slice(this.$, start, end));
    };
    /**
     * 文字列の配列に分割する
     *
     * - String.prototype.split とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param separator 区切り文字
     * @param limit 配列の数を指定
     */
    Jaco.prototype.split = function (separator, limit) {
        return split(this.$, separator, limit);
    };
    /**
     * 引数に指定された文字列が先頭と合致するか
     *
     * - サロゲートペアを考慮する
     * - String.prototype.startsWith とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param search 合致対象文字列
     * @param position 先頭の位置
     */
    Jaco.prototype.startsWith = function (search, position) {
        if (position === void 0) { position = 0; }
        return startsWith(this.$, search, position);
    };
    /**
     * 指定した位置から指定した数だけ文字列を抽出
     *
     * - サロゲートペアを考慮する
     * - String.prototype.substr とは非互換
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param start 開始インデックス
     * @param length 指定数
     */
    Jaco.prototype.substr = function (start, length) {
        return new Jaco(substr(this.$, start, length));
    };
    /**
     * 指定した位置の間の文字列を抽出
     *
     * - サロゲートペアを考慮する
     * - String.prototype.substring とは非互換
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param indexA インデックス
     * @param indexB インデックス
     */
    Jaco.prototype.substring = function (indexA, indexB) {
        return new Jaco(substring(this.$, indexA, indexB));
    };
    /**
     * パターンとマッチするかどうか
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param pattern パターン
     */
    Jaco.prototype.test = function (pattern) {
        return test(this.$, pattern);
    };
    /**
     * 小書き文字を基底文字に変換する
     *
     * @version 1.1.0
     * @since 1.1.0
     */
    Jaco.prototype.toBasicLetter = function () {
        return new Jaco(toBasicLetter(this.$));
    };
    /**
     * ひらがなに変換する
     *
     * 第一引数に true を渡した場合、濁点・半濁点は基本的に結合される
     * ヷヸヹヺは文字が存在しないため ひらがな + 結合文字でない濁点・半濁点 となる
     *
     * @version 0.2.0
     * @since 0.1.0
     * @param isCombinate 濁点・半濁点を結合文字にするかどうか
     */
    Jaco.prototype.toHiragana = function (isCombinate) {
        if (isCombinate === void 0) { isCombinate = false; }
        return new Jaco(toHiragana(this.$, isCombinate));
    };
    /**
     * カタカナに変換する
     *
     * @version 0.2.0
     * @since 0.1.0
     * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
     */
    Jaco.prototype.toKatakana = function (toWide) {
        if (toWide === void 0) { toWide = true; }
        return new Jaco(toKatakana(this.$, toWide));
    };
    /**
     * 英字の大文字を小文字に変換する
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return インスタンス自身
     */
    Jaco.prototype.toLowerCase = function () {
        return new Jaco(this.$.toLowerCase());
    };
    /**
     * 半角に変換
     *
     * @version 2.0.0
     * @since 0.4.0
     */
    Jaco.prototype.toNarrow = function (convertJapaneseChars) {
        if (convertJapaneseChars === void 0) { convertJapaneseChars = false; }
        return new Jaco(toNarrow(this.$, convertJapaneseChars));
    };
    /**
     * 英数字を半角に変換
     *
     * @version 2.0.0
     * @since 1.3.0
     */
    Jaco.prototype.toNarrowAlphanumeric = function () {
        return new Jaco(toNarrowAlphanumeric(this.$));
    };
    /**
     * カタカナと日本語で使われる記号を半角に変換
     *
     * @version 0.4.0
     * @since 0.4.0
     */
    Jaco.prototype.toNarrowJapanese = function () {
        return new Jaco(toNarrowJapanese(this.$));
    };
    /**
     * 半角カタカナに変換する
     *
     * @version 0.6.0
     * @since 0.1.0
     * @param fromHiragana ひらがなも変換する
     */
    Jaco.prototype.toNarrowKatakana = function (fromHiragana) {
        if (fromHiragana === void 0) { fromHiragana = false; }
        return new Jaco(toNarrowKatakana(this.$, fromHiragana));
    };
    /**
     * 記号を半角に変換する
     *
     * @version 2.0.0
     * @since 2.0.0
     */
    Jaco.prototype.toNarrowSign = function () {
        return new Jaco(toNarrowSign(this.$));
    };
    /**
     * 日本語で使われる記号を半角に変換
     *
     * @version 2.0.0
     * @since 0.4.0
     */
    Jaco.prototype.toNarrowSymbolForJapanese = function () {
        return new Jaco(toNarrowSymbolForJapanese(this.$));
    };
    /**
     * 数値に変換する
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return 数値
     */
    Jaco.prototype.toNumber = function () {
        return parseFloat(this.$);
    };
    /**
     * 数字に変換する
     *
     * @version 0.5.0
     * @since 0.5.0
     * @param negative 負の値を許可してマイナスをつけるかどうか
     * @param floatingPoint 小数を許可してドットをつけるかどうか
     */
    Jaco.prototype.toNumeric = function (negative, floatingPoint) {
        if (negative === void 0) { negative = false; }
        if (floatingPoint === void 0) { floatingPoint = false; }
        return new Jaco(toNumeric(this.$, negative, floatingPoint));
    };
    /**
     * よみの文字に変換する
     * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
     *
     * @version 1.1.0
     * @since 1.1.0
     */
    Jaco.prototype.toPhoeticKana = function () {
        return new Jaco(toPhoeticKana(this.$));
    };
    /**
     * 明示もしくは暗黙の文字列変換メソッド
     *
     * @version 0.1.0
     * @since 0.1.0
     * @return インスタンス自身が保持する文字列
     */
    Jaco.prototype.toString = function () {
        return this.$;
    };
    /**
     * 英字の小文字を大文字に変換する
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return インスタンス自身
     */
    Jaco.prototype.toUpperCase = function () {
        return new Jaco(this.$.toUpperCase());
    };
    /**
     * 全角に変換
     *
     * @version 0.4.0
     * @since 0.4.0
     */
    Jaco.prototype.toWide = function () {
        return new Jaco(toWide(this.$));
    };
    /**
     * 英数字を全角に変換
     *
     * @version 2.0.0
     * @since 1.3.0
     */
    Jaco.prototype.toWideAlphanumeric = function () {
        return new Jaco(toWideAlphanumeric(this.$));
    };
    /**
     * カタカナと日本語で使われる記号を全角に変換
     *
     * @version 0.4.0
     * @since 0.4.0
     */
    Jaco.prototype.toWideJapanese = function () {
        return new Jaco(toWideJapanese(this.$));
    };
    /**
     * 全角カタカナに変換する
     *
     * @version 0.2.0
     * @since 0.1.0
     */
    Jaco.prototype.toWideKatakana = function () {
        return new Jaco(toWideKatakana(this.$));
    };
    /**
     * 記号を全角に変換する
     *
     * @version 2.0.0
     * @since 2.0.0
     */
    Jaco.prototype.toWideSign = function () {
        return new Jaco(toWideSign(this.$));
    };
    /**
     * 日本語で使われる記号を全角に変換
     *
     * @version 2.0.0
     * @since 0.4.0
     */
    Jaco.prototype.toWideSymbolForJapanese = function () {
        return new Jaco(toWideSymbolForJapanese(this.$));
    };
    /**
     * 先頭と末尾の空白を取り除く
     *
     * @version 2.0.0
     * @since 0.2.0
     */
    Jaco.prototype.trim = function () {
        return new Jaco(this.$.trim());
    };
    /**
     * 先頭の空白を取り除く
     *
     * @version 2.0.0
     * @since 2.0.0
     */
    Jaco.prototype.trimLeft = function () {
        return new Jaco(remove(this.$, /^\s+/));
    };
    /**
     * 末尾の空白を取り除く
     *
     * @version 2.0.0
     * @since 2.0.0
     */
    Jaco.prototype.trimRight = function () {
        return new Jaco(remove(this.$, /\s+$/));
    };
    /**
     * 暗黙の値変換に呼び出されるメソッド
     *
     * @version 0.1.0
     * @since 0.1.0
     * @return インスタンス自身が保持する文字列
     */
    Jaco.prototype.valueOf = function () {
        return this.toString();
    };
    /**
     * イテレータ
     *
     * 要素の型は `string` ではなく `Jaco`
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return イテレータブル `<Jaco>`
     */
    Jaco.prototype[Symbol.iterator] = function () {
        var _this = this;
        var counter = 0;
        var iterator = {
            next: function () {
                var count = counter++;
                var item = arrayize(_this.$)[count];
                var result = {
                    value: new Jaco(item),
                    done: _this.length <= count
                };
                return result;
            }
        };
        return iterator;
    };
    return Jaco;
}());
export default Jaco;
