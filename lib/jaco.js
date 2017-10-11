"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var addSemivoicedMarks_1 = require("./fn/addSemivoicedMarks");
var addVoicedMarks_1 = require("./fn/addVoicedMarks");
var byteSize_1 = require("./fn/byteSize");
var charAt_1 = require("./fn/charAt");
var charCodeAt_1 = require("./fn/charCodeAt");
var combinateSoundMarks_1 = require("./fn/combinateSoundMarks");
var concat_1 = require("./fn/concat");
var convertIterationMarks_1 = require("./fn/convertIterationMarks");
var convertProlongedSoundMarks_1 = require("./fn/convertProlongedSoundMarks");
var endWith_1 = require("./fn/endWith");
var has_1 = require("./fn/has");
var hasSmallLetter_1 = require("./fn/hasSmallLetter");
var hasSurrogatePair_1 = require("./fn/hasSurrogatePair");
var hasUnpairedSurrogate_1 = require("./fn/hasUnpairedSurrogate");
var includes_1 = require("./fn/includes");
var indexOf_1 = require("./fn/indexOf");
var is_1 = require("./fn/is");
var isEmpty_1 = require("./fn/isEmpty");
var isNumeric_1 = require("./fn/isNumeric");
var isOnly_1 = require("./fn/isOnly");
var isOnlyHiragana_1 = require("./fn/isOnlyHiragana");
var isOnlyKatakana_1 = require("./fn/isOnlyKatakana");
var lastIndexOf_1 = require("./fn/lastIndexOf");
var matches_1 = require("./fn/matches");
var padEnd_1 = require("./fn/padEnd");
var padStart_1 = require("./fn/padStart");
var remove_1 = require("./fn/remove");
var removeUnpairedSurrogate_1 = require("./fn/removeUnpairedSurrogate");
var removeVoicedMarks_1 = require("./fn/removeVoicedMarks");
var repeat_1 = require("./fn/repeat");
var replace_1 = require("./fn/replace");
var replaceFromMap_1 = require("./fn/replaceFromMap");
var search_1 = require("./fn/search");
var slice_1 = require("./fn/slice");
var split_1 = require("./fn/split");
var startsWith_1 = require("./fn/startsWith");
var substr_1 = require("./fn/substr");
var substring_1 = require("./fn/substring");
var test_1 = require("./fn/test");
var toBasicLetter_1 = require("./fn/toBasicLetter");
var toHiragana_1 = require("./fn/toHiragana");
var toKatakana_1 = require("./fn/toKatakana");
var toNarrow_1 = require("./fn/toNarrow");
var toNarrowAlphanumeric_1 = require("./fn/toNarrowAlphanumeric");
var toNarrowJapanese_1 = require("./fn/toNarrowJapanese");
var toNarrowKatakana_1 = require("./fn/toNarrowKatakana");
var toNarrowSign_1 = require("./fn/toNarrowSign");
var toNarrowSymbolForJapanese_1 = require("./fn/toNarrowSymbolForJapanese");
var toNumeric_1 = require("./fn/toNumeric");
var toPhoeticKana_1 = require("./fn/toPhoeticKana");
var toWide_1 = require("./fn/toWide");
var toWideAlphanumeric_1 = require("./fn/toWideAlphanumeric");
var toWideJapanese_1 = require("./fn/toWideJapanese");
var toWideKatakana_1 = require("./fn/toWideKatakana");
var toWideSign_1 = require("./fn/toWideSign");
var toWideSymbolForJapanese_1 = require("./fn/toWideSymbolForJapanese");
var arrayize_1 = require("./util/arrayize");
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

var Jaco = function () {
    _createClass(Jaco, [{
        key: "length",

        /**
         * 文字列長
         *
         * - サロゲートペアを考慮する
         *
         * @version 2.0.0
         * @since 2.0.0
         * @readonly
         */
        get: function get() {
            return arrayize_1.default(this.$).length;
        }
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

    }]);

    function Jaco(str) {
        _classCallCheck(this, Jaco);

        this.$ = "" + str;
    }
    /**
     * 半濁点を追加する
     *
     * @version 2.0.0
     * @since 1.1.0
     */


    _createClass(Jaco, [{
        key: "addSemivoicedMarks",
        value: function addSemivoicedMarks() {
            return new Jaco(addSemivoicedMarks_1.default(this.$));
        }
        /**
         * 濁点を追加する
         *
         * @version 2.0.0
         * @since 1.1.0
         */

    }, {
        key: "addVoicedMarks",
        value: function addVoicedMarks() {
            return new Jaco(addVoicedMarks_1.default(this.$));
        }
        /**
         * 後方結合
         *
         * @version 2.0.0
         * @since 0.2.0
         * @param element 結合する文字列
         */

    }, {
        key: "append",
        value: function append(element) {
            return new Jaco(concat_1.default(this, element));
        }
        /**
         * 文字列のバイトサイズを返す
         *
         * @version 0.2.0
         * @since 0.2.0
         */

    }, {
        key: "byteSize",
        value: function byteSize() {
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

    }, {
        key: "charAt",
        value: function charAt() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

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

    }, {
        key: "charCodeAt",
        value: function charCodeAt() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            return charCodeAt_1.default(this.$, index);
        }
        /**
         * コピーを生成する
         *
         * @version 0.2.0
         * @since 0.2.0
         */

    }, {
        key: "clone",
        value: function clone() {
            return new Jaco(this.$);
        }
        /**
         * 濁点・半濁点とひらがな・かたかなを結合させる
         *
         * @version 2.0.0
         * @since 2.0.0
         * @param convertOnly ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
         */

    }, {
        key: "combinateSoundMarks",
        value: function combinateSoundMarks() {
            var convertOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

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

    }, {
        key: "concat",
        value: function concat() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return new Jaco(concat_1.default(this.$, args));
        }
        /**
         * 繰り返し記号をかなに置き換える
         *
         * @version 2.0.0
         * @since 1.1.0
         */

    }, {
        key: "convertIterationMarks",
        value: function convertIterationMarks() {
            return new Jaco(convertIterationMarks_1.default(this.$));
        }
        /**
         * 長音符をかなに置き換える
         *
         * @version 2.0.0
         * @since 1.1.0
         */

    }, {
        key: "convertProlongedSoundMarks",
        value: function convertProlongedSoundMarks() {
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

    }, {
        key: "endWith",
        value: function endWith(search, position) {
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

    }, {
        key: "has",
        value: function has(characters) {
            return has_1.default(this.$, characters);
        }
        /**
         * 小書き文字を含むかどうか
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return 小書き文字を含むかどうか
         */

    }, {
        key: "hasSmallLetter",
        value: function hasSmallLetter() {
            return hasSmallLetter_1.default(this.$);
        }
        /**
         * サロゲートペア文字列を含んでいるかどうか
         *
         * @version 2.0.0
         * @since 2.0.0
         * @return 結果の真偽
         */

    }, {
        key: "hasSurrogatePair",
        value: function hasSurrogatePair() {
            return hasSurrogatePair_1.default(this.$);
        }
        /**
         * ペアになっていないサロゲートコードポイントを含んでいるかどうか
         *
         * @version 2.0.0
         * @since 2.0.0
         * @return 結果の真偽
         */

    }, {
        key: "hasUnpairedSurrogate",
        value: function hasUnpairedSurrogate() {
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

    }, {
        key: "includes",
        value: function includes(search) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

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

    }, {
        key: "indexOf",
        value: function indexOf(search) {
            var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return indexOf_1.default(this.$, search, fromIndex);
        }
        /**
         * 完全マッチ
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param target 比較する文字列
         */

    }, {
        key: "is",
        value: function is(target) {
            return is_1.default(this.$, target);
        }
        /**
         * 文字が空かどうか
         *
         * @version 0.2.0
         * @since 0.2.0
         */

    }, {
        key: "isEmpty",
        value: function isEmpty() {
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

    }, {
        key: "isNumeric",
        value: function isNumeric() {
            var negative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var floatingPoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

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

    }, {
        key: "isOnly",
        value: function isOnly(characters) {
            return isOnly_1.default(this.$, characters);
        }
        /**
         * ひらがなだけで構成されているかどうか
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return 結果の真偽
         */

    }, {
        key: "isOnlyHiragana",
        value: function isOnlyHiragana() {
            return isOnlyHiragana_1.default(this.$);
        }
        /**
         * カタカナだけで構成されているかどうか
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return 結果の真偽
         */

    }, {
        key: "isOnlyKatakana",
        value: function isOnlyKatakana() {
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

    }, {
        key: "lastIndexOf",
        value: function lastIndexOf(search) {
            var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

            return lastIndexOf_1.default(this.$, search, fromIndex);
        }
        /**
         * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を得る
         *
         * @version 2.0.0
         * @since 2.0.0
         * @param regexp パターン
         */

    }, {
        key: "match",
        value: function match(regexp) {
            return this.$.match(regexp);
        }
        /**
         * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を純粋な配列で得る
         *
         * @version 2.0.0
         * @since 2.0.0
         * @param pattern パターン
         */

    }, {
        key: "matches",
        value: function matches(pattern) {
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

    }, {
        key: "normalize",
        value: function normalize() {
            var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'NFC';

            throw Error("No support method yet");
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

    }, {
        key: "padEnd",
        value: function padEnd(targetLength) {
            var padString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

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

    }, {
        key: "padStart",
        value: function padStart(targetLength) {
            var padString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

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

    }, {
        key: "prepend",
        value: function prepend(element) {
            return new Jaco(concat_1.default(element, this));
        }
        /**
         * 文字列を取り除く
         *
         * @version 2.0.0
         * @since 0.2.0
         * @param pattern 取り除く文字列
         */

    }, {
        key: "remove",
        value: function remove(pattern) {
            return new Jaco(remove_1.default(this.$, pattern));
        }
        /**
         * ペアになっていないサロゲートコードポイントの削除
         *
         * @version 2.0.0
         * @since 2.0.0
         */

    }, {
        key: "removeUnpairedSurrogate",
        value: function removeUnpairedSurrogate() {
            return new Jaco(removeUnpairedSurrogate_1.default(this.$));
        }
        /**
         * 濁点・半濁点を取り除く
         *
         * @version 1.1.0
         * @since 1.1.0
         * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
         */

    }, {
        key: "removeVoicedMarks",
        value: function removeVoicedMarks() {
            var ignoreSingleMark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

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

    }, {
        key: "repeat",
        value: function repeat() {
            var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

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

    }, {
        key: "replace",
        value: function replace(pattern, replacement) {
            return new Jaco(replace_1.default(this.$, pattern, replacement));
        }
        /**
         * キーがパターン・値が置換文字列のハッシュマップによって置換する
         *
         * @version 2.0.0
         * @since 0.1.0
         * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
         */

    }, {
        key: "replaceFromMap",
        value: function replaceFromMap(convMap) {
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

    }, {
        key: "search",
        value: function search(pattern) {
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

    }, {
        key: "slice",
        value: function slice(start, end) {
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

    }, {
        key: "split",
        value: function split(separator, limit) {
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

    }, {
        key: "startsWith",
        value: function startsWith(search) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

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

    }, {
        key: "substr",
        value: function substr(start, length) {
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

    }, {
        key: "substring",
        value: function substring(indexA, indexB) {
            return new Jaco(substring_1.default(this.$, indexA, indexB));
        }
        /**
         * パターンとマッチするかどうか
         *
         * @version 2.0.0
         * @since 0.2.0
         * @param pattern パターン
         */

    }, {
        key: "test",
        value: function test(pattern) {
            return test_1.default(this.$, pattern);
        }
        /**
         * 小書き文字を基底文字に変換する
         *
         * @version 1.1.0
         * @since 1.1.0
         */

    }, {
        key: "toBasicLetter",
        value: function toBasicLetter() {
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

    }, {
        key: "toHiragana",
        value: function toHiragana() {
            var isCombinate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return new Jaco(toHiragana_1.default(this.$, isCombinate));
        }
        /**
         * カタカナに変換する
         *
         * @version 0.2.0
         * @since 0.1.0
         * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
         */

    }, {
        key: "toKatakana",
        value: function toKatakana() {
            var toWide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            return new Jaco(toKatakana_1.default(this.$, toWide));
        }
        /**
         * 英字の大文字を小文字に変換する
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return インスタンス自身
         */

    }, {
        key: "toLowerCase",
        value: function toLowerCase() {
            return new Jaco(this.$.toLowerCase());
        }
        /**
         * 半角に変換
         *
         * @version 2.0.0
         * @since 0.4.0
         */

    }, {
        key: "toNarrow",
        value: function toNarrow() {
            var convertJapaneseChars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return new Jaco(toNarrow_1.default(this.$, convertJapaneseChars));
        }
        /**
         * 英数字を半角に変換
         *
         * @version 2.0.0
         * @since 1.3.0
         */

    }, {
        key: "toNarrowAlphanumeric",
        value: function toNarrowAlphanumeric() {
            return new Jaco(toNarrowAlphanumeric_1.default(this.$));
        }
        /**
         * カタカナと日本語で使われる記号を半角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         */

    }, {
        key: "toNarrowJapanese",
        value: function toNarrowJapanese() {
            return new Jaco(toNarrowJapanese_1.default(this.$));
        }
        /**
         * 半角カタカナに変換する
         *
         * @version 0.6.0
         * @since 0.1.0
         * @param fromHiragana ひらがなも変換する
         */

    }, {
        key: "toNarrowKatakana",
        value: function toNarrowKatakana() {
            var fromHiragana = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return new Jaco(toNarrowKatakana_1.default(this.$, fromHiragana));
        }
        /**
         * 記号を半角に変換する
         *
         * @version 2.0.0
         * @since 2.0.0
         */

    }, {
        key: "toNarrowSign",
        value: function toNarrowSign() {
            return new Jaco(toNarrowSign_1.default(this.$));
        }
        /**
         * 日本語で使われる記号を半角に変換
         *
         * @version 2.0.0
         * @since 0.4.0
         */

    }, {
        key: "toNarrowSymbolForJapanese",
        value: function toNarrowSymbolForJapanese() {
            return new Jaco(toNarrowSymbolForJapanese_1.default(this.$));
        }
        /**
         * 数値に変換する
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return 数値
         */

    }, {
        key: "toNumber",
        value: function toNumber() {
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

    }, {
        key: "toNumeric",
        value: function toNumeric() {
            var negative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var floatingPoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return new Jaco(toNumeric_1.default(this.$, negative, floatingPoint));
        }
        /**
         * よみの文字に変換する
         * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
         *
         * @version 1.1.0
         * @since 1.1.0
         */

    }, {
        key: "toPhoeticKana",
        value: function toPhoeticKana() {
            return new Jaco(toPhoeticKana_1.default(this.$));
        }
        /**
         * 明示もしくは暗黙の文字列変換メソッド
         *
         * @version 0.1.0
         * @since 0.1.0
         * @return インスタンス自身が保持する文字列
         */

    }, {
        key: "toString",
        value: function toString() {
            return this.$;
        }
        /**
         * 英字の小文字を大文字に変換する
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return インスタンス自身
         */

    }, {
        key: "toUpperCase",
        value: function toUpperCase() {
            return new Jaco(this.$.toUpperCase());
        }
        /**
         * 全角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         */

    }, {
        key: "toWide",
        value: function toWide() {
            return new Jaco(toWide_1.default(this.$));
        }
        /**
         * 英数字を全角に変換
         *
         * @version 2.0.0
         * @since 1.3.0
         */

    }, {
        key: "toWideAlphanumeric",
        value: function toWideAlphanumeric() {
            return new Jaco(toWideAlphanumeric_1.default(this.$));
        }
        /**
         * カタカナと日本語で使われる記号を全角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         */

    }, {
        key: "toWideJapanese",
        value: function toWideJapanese() {
            return new Jaco(toWideJapanese_1.default(this.$));
        }
        /**
         * 全角カタカナに変換する
         *
         * @version 0.2.0
         * @since 0.1.0
         */

    }, {
        key: "toWideKatakana",
        value: function toWideKatakana() {
            return new Jaco(toWideKatakana_1.default(this.$));
        }
        /**
         * 記号を全角に変換する
         *
         * @version 2.0.0
         * @since 2.0.0
         */

    }, {
        key: "toWideSign",
        value: function toWideSign() {
            return new Jaco(toWideSign_1.default(this.$));
        }
        /**
         * 日本語で使われる記号を全角に変換
         *
         * @version 2.0.0
         * @since 0.4.0
         */

    }, {
        key: "toWideSymbolForJapanese",
        value: function toWideSymbolForJapanese() {
            return new Jaco(toWideSymbolForJapanese_1.default(this.$));
        }
        /**
         * 先頭と末尾の空白を取り除く
         *
         * @version 2.0.0
         * @since 0.2.0
         */

    }, {
        key: "trim",
        value: function trim() {
            return new Jaco(this.$.trim());
        }
        /**
         * 先頭の空白を取り除く
         *
         * @version 2.0.0
         * @since 2.0.0
         */

    }, {
        key: "trimLeft",
        value: function trimLeft() {
            return new Jaco(remove_1.default(this.$, /^\s+/));
        }
        /**
         * 末尾の空白を取り除く
         *
         * @version 2.0.0
         * @since 2.0.0
         */

    }, {
        key: "trimRight",
        value: function trimRight() {
            return new Jaco(remove_1.default(this.$, /\s+$/));
        }
        /**
         * 暗黙の値変換に呼び出されるメソッド
         *
         * @version 0.1.0
         * @since 0.1.0
         * @return インスタンス自身が保持する文字列
         */

    }, {
        key: "valueOf",
        value: function valueOf() {
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

    }, {
        key: Symbol.iterator,
        value: function value() {
            var _this = this;

            var counter = 0;
            var iterator = {
                next: function next() {
                    var count = counter++;
                    var item = arrayize_1.default(_this.$)[count];
                    var result = {
                        value: item != null ? new Jaco(item) : undefined,
                        done: _this.length <= count
                    };
                    return result;
                }
            };
            return iterator;
        }
    }]);

    return Jaco;
}();

exports.default = Jaco;