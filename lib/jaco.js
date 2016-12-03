"use strict";
const addSemivoicedMarks_1 = require("./fn/addSemivoicedMarks");
const addVoicedMarks_1 = require("./fn/addVoicedMarks");
const byteSize_1 = require("./fn/byteSize");
const charAt_1 = require("./fn/charAt");
const charCodeAt_1 = require("./fn/charCodeAt");
const combinateSoundMarks_1 = require("./fn/combinateSoundMarks");
const concat_1 = require("./fn/concat");
const convertIterationMarks_1 = require("./fn/convertIterationMarks");
const convertProlongedSoundMarks_1 = require("./fn/convertProlongedSoundMarks");
const endWith_1 = require("./fn/endWith");
const has_1 = require("./fn/has");
const hasSmallLetter_1 = require("./fn/hasSmallLetter");
const hasSurrogatePair_1 = require("./fn/hasSurrogatePair");
const hasUnpairedSurrogate_1 = require("./fn/hasUnpairedSurrogate");
const includes_1 = require("./fn/includes");
const indexOf_1 = require("./fn/indexOf");
const is_1 = require("./fn/is");
const isEmpty_1 = require("./fn/isEmpty");
const isNumeric_1 = require("./fn/isNumeric");
const isOnly_1 = require("./fn/isOnly");
const isOnlyHiragana_1 = require("./fn/isOnlyHiragana");
const isOnlyKatakana_1 = require("./fn/isOnlyKatakana");
const lastIndexOf_1 = require("./fn/lastIndexOf");
const matches_1 = require("./fn/matches");
const padEnd_1 = require("./fn/padEnd");
const padStart_1 = require("./fn/padStart");
const remove_1 = require("./fn/remove");
const removeUnpairedSurrogate_1 = require("./fn/removeUnpairedSurrogate");
const removeVoicedMarks_1 = require("./fn/removeVoicedMarks");
const repeat_1 = require("./fn/repeat");
const replace_1 = require("./fn/replace");
const replaceFromMap_1 = require("./fn/replaceFromMap");
const search_1 = require("./fn/search");
const slice_1 = require("./fn/slice");
const split_1 = require("./fn/split");
const startsWith_1 = require("./fn/startsWith");
const substr_1 = require("./fn/substr");
const substring_1 = require("./fn/substring");
const test_1 = require("./fn/test");
const toBasicLetter_1 = require("./fn/toBasicLetter");
const toHiragana_1 = require("./fn/toHiragana");
const toKatakana_1 = require("./fn/toKatakana");
const toNarrow_1 = require("./fn/toNarrow");
const toNarrowJapnese_1 = require("./fn/toNarrowJapnese");
const toNarrowKatakana_1 = require("./fn/toNarrowKatakana");
const toNarrowSymbolForJapanese_1 = require("./fn/toNarrowSymbolForJapanese");
const toNumeric_1 = require("./fn/toNumeric");
const toPhoeticKana_1 = require("./fn/toPhoeticKana");
const toWide_1 = require("./fn/toWide");
const toWideJapnese_1 = require("./fn/toWideJapnese");
const toWideKatakana_1 = require("./fn/toWideKatakana");
const toWideSymbolForJapanese_1 = require("./fn/toWideSymbolForJapanese");
const arrayize_1 = require("./util/arrayize");
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
class Jaco {
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
    constructor(str) {
        this.$ = `${str}`;
    }
    /**
     * 文字列長
     *
     * - サロゲートペアを考慮する
     *
     * @version 2.0.0
     * @since 2.0.0
     * @readonly
     */
    get length() {
        return arrayize_1.default(this.$).length;
    }
    /**
     * 半濁点を追加する
     *
     * @version 2.0.0
     * @since 1.1.0
     */
    addSemivoicedMarks() {
        return new Jaco(addSemivoicedMarks_1.default(this.$));
    }
    /**
     * 濁点を追加する
     *
     * @version 2.0.0
     * @since 1.1.0
     */
    addVoicedMarks() {
        return new Jaco(addVoicedMarks_1.default(this.$));
    }
    /**
     * 後方結合
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param element 結合する文字列
     */
    append(element) {
        return new Jaco(concat_1.default(this, element));
    }
    /**
     * 文字列のバイトサイズを返す
     *
     * @version 0.2.0
     * @since 0.2.0
     */
    byteSize() {
        return byteSize_1.default(this.$);
    }
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
    charAt(index = 0) {
        return new Jaco(charAt_1.default(this.$, index));
    }
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
    charCodeAt(index = 0) {
        return charCodeAt_1.default(this.$, index);
    }
    /**
     * コピーを生成する
     *
     * @version 0.2.0
     * @since 0.2.0
     */
    clone() {
        return new Jaco(this.$);
    }
    /**
     * 濁点・半濁点とひらがな・かたかなを結合させる
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param convertOnly ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
     */
    combinateSoundMarks(convertOnly = false) {
        return new Jaco(combinateSoundMarks_1.default(this.$, convertOnly));
    }
    /**
     * 文字列連結をおこなう
     *
     * - String.prototype.concat とは非互換
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param ...args 文字列もしくはJacoインスタンス
     */
    concat(...args) {
        return new Jaco(concat_1.default(this.$, args));
    }
    /**
     * 繰り返し記号をかなに置き換える
     *
     * @version 2.0.0
     * @since 1.1.0
     */
    convertIterationMarks() {
        return new Jaco(convertIterationMarks_1.default(this.$));
    }
    /**
     * 長音符をかなに置き換える
     *
     * @version 2.0.0
     * @since 1.1.0
     */
    convertProlongedSoundMarks() {
        return new Jaco(convertProlongedSoundMarks_1.default(this.$));
    }
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
    endWith(search, position) {
        return endWith_1.default(this.$, search, position);
    }
    /**
     * 該当の文字のいずれかを含んでいるかどうか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param characters 文字セット
     * @return 結果の真偽
     */
    has(characters) {
        return has_1.default(this.$, characters);
    }
    /**
     * 小書き文字を含むかどうか
     *
     * TODO: test
     *
     * @version 1.1.0
     * @since 1.1.0
     * @return 小書き文字を含むかどうか
     */
    hasSmallLetter() {
        return hasSmallLetter_1.default(this.$);
    }
    /**
     * サロゲートペア文字列を含んでいるかどうか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return 結果の真偽
     */
    hasSurrogatePair() {
        return hasSurrogatePair_1.default(this.$);
    }
    /**
     * ペアになっていないサロゲートコードポイントを含んでいるかどうか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return 結果の真偽
     */
    hasUnpairedSurrogate() {
        return hasUnpairedSurrogate_1.default(this.$);
    }
    /**
     * 引数に指定された文字列が部分合致するか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param search 合致対象文字列
     * @param position 開始位置
     * @return 合致したかどうか
     */
    includes(search, position = 0) {
        return includes_1.default(this.$, search, position);
    }
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
    indexOf(search, fromIndex = 0) {
        return indexOf_1.default(this.$, search, fromIndex);
    }
    /**
     * 完全マッチ
     *
     * @version 0.2.0
     * @since 0.2.0
     * @param target 比較する文字列
     */
    is(target) {
        return is_1.default(this.$, target);
    }
    /**
     * 文字が空かどうか
     *
     * @version 0.2.0
     * @since 0.2.0
     */
    isEmpty() {
        return isEmpty_1.default(this.$);
    }
    /**
     * 数字だけで構成されているかどうか
     *
     * @version 2.0.0
     * @since 0.5.0
     * @param negative 負の数値も含めてチェックするかどうか
     * @param floatingPoint 小数としてチェックするかどうか
     * @return 結果の真偽
     */
    isNumeric(negative = true, floatingPoint = true) {
        return isNumeric_1.default(this.$, negative, floatingPoint);
    }
    /**
     * 該当の文字だけで構成されているかどうか
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param characters 文字セット
     * @return 結果の真偽
     */
    isOnly(characters) {
        return isOnly_1.default(this.$, characters);
    }
    /**
     * ひらがなだけで構成されているかどうか
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return 結果の真偽
     */
    isOnlyHiragana() {
        return isOnlyHiragana_1.default(this.$);
    }
    /**
     * カタカナだけで構成されているかどうか
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return 結果の真偽
     */
    isOnlyKatakana() {
        return isOnlyKatakana_1.default(this.$);
    }
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
    lastIndexOf(search, fromIndex = Infinity) {
        return lastIndexOf_1.default(this.$, search, fromIndex);
    }
    /**
     * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を得る
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param regexp パターン
     */
    match(regexp) {
        return this.$.match(regexp);
    }
    /**
     * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を純粋な配列で得る
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param pattern パターン
     */
    matches(pattern) {
        return matches_1.default(this.$, pattern);
    }
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
    normalize(form = 'NFC') {
        throw Error(`No support method yet`);
    }
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
    padEnd(targetLength, padString = ' ') {
        return new Jaco(padEnd_1.default(this.$, targetLength, padString));
    }
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
    padStart(targetLength, padString = ' ') {
        return new Jaco(padStart_1.default(this.$, targetLength, padString));
    }
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
    prepend(element) {
        return new Jaco(concat_1.default(element, this));
    }
    /**
     * 文字列を取り除く
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param pattern 取り除く文字列
     */
    remove(pattern) {
        return new Jaco(remove_1.default(this.$, pattern));
    }
    /**
     * ペアになっていないサロゲートコードポイントの削除
     *
     * @version 2.0.0
     * @since 2.0.0
     */
    removeUnpairedSurrogate() {
        return new Jaco(removeUnpairedSurrogate_1.default(this.$));
    }
    /**
     * 濁点・半濁点を取り除く
     *
     * @version 1.1.0
     * @since 1.1.0
     * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
     */
    removeVoicedMarks(ignoreSingleMark = false) {
        return new Jaco(removeVoicedMarks_1.default(this.$, ignoreSingleMark));
    }
    /**
     * 文字列を繰り返す
     *
     * - String.prototype.repeat とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param times 繰り返しの回数
     */
    repeat(times = 0) {
        return new Jaco(repeat_1.default(this.$, times));
    }
    /**
     * 文字列をパターンで置換する
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param pattern  対象のパターン
     * @param replacement 置換する文字列
     */
    replace(pattern, replacement) {
        return new Jaco(replace_1.default(this.$, pattern, replacement));
    }
    /**
     * キーがパターン・値が置換文字列のハッシュマップによって置換する
     *
     * @version 2.0.0
     * @since 0.1.0
     * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
     */
    replaceFromMap(convMap) {
        return new Jaco(replaceFromMap_1.default(this.$, convMap));
    }
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
    search(pattern) {
        return search_1.default(this.$, pattern);
    }
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
    slice(start, end) {
        return new Jaco(slice_1.default(this.$, start, end));
    }
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
    split(separator, limit) {
        return split_1.default(this.$, separator, limit);
    }
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
    startsWith(search, position = 0) {
        return startsWith_1.default(this.$, search, position);
    }
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
    substr(start, length) {
        return new Jaco(substr_1.default(this.$, start, length));
    }
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
    substring(indexA, indexB) {
        return new Jaco(substring_1.default(this.$, indexA, indexB));
    }
    /**
     * パターンとマッチするかどうか
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param pattern パターン
     */
    test(pattern) {
        return test_1.default(this.$, pattern);
    }
    /**
     * 小書き文字を基底文字に変換する
     *
     * TODO: test
     *
     * @version 1.1.0
     * @since 1.1.0
     */
    toBasicLetter() {
        return new Jaco(toBasicLetter_1.default(this.$));
    }
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
    toHiragana(isCombinate = false) {
        return new Jaco(toHiragana_1.default(this.$, isCombinate));
    }
    /**
     * カタカナに変換する
     *
     * @version 0.2.0
     * @since 0.1.0
     * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
     */
    toKatakana(toWide = true) {
        return new Jaco(toKatakana_1.default(this.$, toWide));
    }
    /**
     * 英字の大文字を小文字に変換する
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return インスタンス自身
     */
    toLowerCase() {
        return new Jaco(this.$.toLowerCase());
    }
    /**
     * 半角に変換
     *
     * @version 2.0.0
     * @since 0.4.0
     */
    toNarrow(convertJapaneseChars = false) {
        return new Jaco(toNarrow_1.default(this.$, convertJapaneseChars));
    }
    /**
     * カタカナと日本語で使われる記号を半角に変換
     *
     * @version 0.4.0
     * @since 0.4.0
     */
    toNarrowJapnese() {
        return new Jaco(toNarrowJapnese_1.default(this.$));
    }
    /**
     * 半角カタカナに変換する
     *
     * @version 0.6.0
     * @since 0.1.0
     * @param fromHiragana ひらがなも変換する
     */
    toNarrowKatakana(fromHiragana = false) {
        return new Jaco(toNarrowKatakana_1.default(this.$, fromHiragana));
    }
    /**
     * 日本語で使われる記号を半角に変換
     *
     * @version 2.0.0
     * @since 0.4.0
     */
    toNarrowSymbolForJapanese() {
        return new Jaco(toNarrowSymbolForJapanese_1.default(this.$));
    }
    /**
     * 数値に変換する
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return 数値
     */
    toNumber() {
        return parseFloat(this.$);
    }
    /**
     * 数字に変換する
     *
     * @version 0.5.0
     * @since 0.5.0
     * @param negative 負の値を許可してマイナスをつけるかどうか
     * @param floatingPoint 小数を許可してドットをつけるかどうか
     */
    toNumeric(negative = false, floatingPoint = false) {
        return new Jaco(toNumeric_1.default(this.$, negative, floatingPoint));
    }
    /**
     * よみの文字に変換する
     * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
     *
     * TODO: test
     *
     * @version 1.1.0
     * @since 1.1.0
     */
    toPhoeticKana() {
        return new Jaco(toPhoeticKana_1.default(this.$));
    }
    /**
     * 明示もしくは暗黙の文字列変換メソッド
     *
     * @version 0.1.0
     * @since 0.1.0
     * @return インスタンス自身が保持する文字列
     */
    toString() {
        return this.$;
    }
    /**
     * 英字の小文字を大文字に変換する
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return インスタンス自身
     */
    toUpperCase() {
        return new Jaco(this.$.toUpperCase());
    }
    /**
     * 全角に変換
     *
     * @version 0.4.0
     * @since 0.4.0
     */
    toWide() {
        return new Jaco(toWide_1.default(this.$));
    }
    /**
     * カタカナと日本語で使われる記号を全角に変換
     *
     * @version 0.4.0
     * @since 0.4.0
     */
    toWideJapnese() {
        return new Jaco(toWideJapnese_1.default(this.$));
    }
    /**
     * 全角カタカナに変換する
     *
     * @version 0.2.0
     * @since 0.1.0
     */
    toWideKatakana() {
        return new Jaco(toWideKatakana_1.default(this.$));
    }
    /**
     * 日本語で使われる記号を全角に変換
     *
     * @version 2.0.0
     * @since 0.4.0
     */
    toWideSymbolForJapanese() {
        return new Jaco(toWideSymbolForJapanese_1.default(this.$));
    }
    /**
     * 先頭と末尾の空白を取り除く
     *
     * @version 2.0.0
     * @since 0.2.0
     */
    trim() {
        return new Jaco(this.$.trim());
    }
    /**
     * 先頭の空白を取り除く
     *
     * @version 2.0.0
     * @since 2.0.0
     */
    trimLeft() {
        return new Jaco(remove_1.default(this.$, /^\s+/));
    }
    /**
     * 末尾の空白を取り除く
     *
     * @version 2.0.0
     * @since 2.0.0
     */
    trimRight() {
        return new Jaco(remove_1.default(this.$, /\s+$/));
    }
    /**
     * 暗黙の値変換に呼び出されるメソッド
     *
     * @version 0.1.0
     * @since 0.1.0
     * @return インスタンス自身が保持する文字列
     */
    valueOf() {
        return this.toString();
    }
    /**
     * イテレータ
     *
     * 要素の型は `string` ではなく `Jaco`
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return イテレータブル `<Jaco>`
     */
    [Symbol.iterator]() {
        let counter = 0;
        const iterator = {
            next: () => {
                const count = counter++;
                const item = arrayize_1.default(this.$)[count];
                const result = {
                    value: item != null ? new Jaco(item) : undefined,
                    done: this.length <= count,
                };
                return result;
            },
        };
        return iterator;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Jaco;
