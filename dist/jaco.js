/**!
* jaco - v2.0.0
* revision: 3512c6441f953257c1dec98465267a410e29ecde
* update: 2016-11-25
* Author: YusukeHirao []
* Github: git@github.com:jaco-project/jaco-js.git
* License: Licensed under the MIT License
*/

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ALPHANUMERIC_CHARS_WITH_SIGN_1 = __webpack_require__(9);
var FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN_1 = __webpack_require__(10);
var HIRAGANA_CHARS_1 = __webpack_require__(3);
var KANA_COMMON_CAHRS_1 = __webpack_require__(12);
var KATAKANA_CHARS_1 = __webpack_require__(4);
var SPACE_CHARS_1 = __webpack_require__(14);
var convertIterationMarks_1 = __webpack_require__(15);
var convertProlongedSoundMarks_1 = __webpack_require__(16);
var toPattern_1 = __webpack_require__(17);
/**
 * ## Jacoクラス
 *
 * 日本語やマルチバイト文字・ASCII文字を扱いやすくするためのラッパークラス
 *
 * 文字列クラスを継承してはいないがメソッドは同等のものが実装されている。
 * ただし基本的にほとんどのメソッドが破壊的メソッドかつチェインナブルである。
 *
 * @version 0.5.0
 * @since 0.1.0
 */

var Jaco = function () {
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
        _classCallCheck(this, Jaco);

        this.$ = "" + str;
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


    _createClass(Jaco, [{
        key: "addSemivoicedMarks",

        /**
         * 半濁点を追加する
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自信
         */
        value: function addSemivoicedMarks() {
            return this.replaceFromMap({
                'は': 'ぱ', 'ひ': 'ぴ', 'ふ': 'ぷ', 'へ': 'ぺ', 'ほ': 'ぽ',
                'ハ': 'パ', 'ヒ': 'ピ', 'フ': 'プ', 'ヘ': 'ペ', 'ホ': 'ポ'
            });
        }
        /**
         * 濁点を追加する
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自信
         */

    }, {
        key: "addVoicedMarks",
        value: function addVoicedMarks() {
            // 濁点・半濁点単体の除去
            this.remove(/\u309B|\u3099|\uFF9E/g);
            this.remove(/\u309C|\u309A|\uFF9F/g);
            return this.replaceFromMap({
                'か': 'が', 'き': 'ぎ', 'く': 'ぐ', 'け': 'げ', 'こ': 'ご',
                'さ': 'ざ', 'し': 'じ', 'す': 'ず', 'せ': 'ぜ', 'そ': 'ぞ',
                'た': 'だ', 'ち': 'ぢ', 'つ': 'づ', 'て': 'で', 'と': 'ど',
                'は': 'ば', 'ひ': 'び', 'ふ': 'ぶ', 'へ': 'べ', 'ほ': 'ぼ',
                'カ': 'ガ', 'キ': 'ギ', 'ク': 'グ', 'ケ': 'ゲ', 'コ': 'ゴ',
                'サ': 'ザ', 'シ': 'ジ', 'ス': 'ズ', 'セ': 'ゼ', 'ソ': 'ゾ',
                'タ': 'ダ', 'チ': 'ヂ', 'ツ': 'ヅ', 'テ': 'デ', 'ト': 'ド',
                'ハ': 'バ', 'ヒ': 'ビ', 'フ': 'ブ', 'ヘ': 'ベ', 'ホ': 'ボ',
                'ワ': 'ヷ', 'イ': 'ヸ', 'ウ': 'ヴ', 'エ': 'ヹ', 'ヺ': 'ヲ',
                'ゝ': 'ゞ', 'ヽ': 'ヾ'
            });
        }
        /**
         * 後方結合
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param element 結合する文字列
         * @return インスタンス自身
         */

    }, {
        key: "append",
        value: function append(element) {
            return this.concat(element);
        }
        /**
         * 文字列のバイトサイズを返す
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return バイト数
         */

    }, {
        key: "byteSize",
        value: function byteSize() {
            return encodeURIComponent(this.$).replace(/%../g, 'x').length;
        }
        /**
         * 文字列から指定位置の文字を返す
         *
         * - サロゲートペアを考慮する
         * - String.prototype.charAt とは非互換
         *
         * @version 2.0.0
         * @since 2.0.0
         * @return 指定位置の文字
         */

    }, {
        key: "charAt",
        value: function charAt() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            return this._toArray()[index] || '';
        }
        /**
         * Unicodeポイント値である負でない整数を返す
         *
         * - サロゲートペアを考慮する
         * - String.prototype.charCodeAt とは非互換
         *
         * @version 2.0.0
         * @since 2.0.0
         * @return Unicodeポイント値
         */

    }, {
        key: "charCodeAt",
        value: function charCodeAt() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var char = this.charAt(index);
            if (!char) {
                return NaN;
            }
            if (char.length === 1) {
                return char.charCodeAt(0);
            } else {
                var first = char.charCodeAt(0);
                var second = char.charCodeAt(1);
                var code = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
                return code;
            }
        }
        /**
         * コピーを生成する
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return コピー
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
         * @since 1.2.0
         * @param convertOnly ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
         * @return インスタンス自身
         */

    }, {
        key: "combinateSoundMarks",
        value: function combinateSoundMarks() {
            var convertOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!convertOnly) {
                // 結合文字に変換
                this.combinateSoundMarks(true);
                // 濁点・半濁点を結合する
                return this.replaceFromMap({
                    // 濁点
                    "\u304B\u3099": 'が', "\u304D\u3099": 'ぎ', "\u304F\u3099": 'ぐ', "\u3051\u3099": 'げ', "\u3053\u3099": 'ご',
                    "\u3055\u3099": 'ざ', "\u3057\u3099": 'じ', "\u3059\u3099": 'ず', "\u305B\u3099": 'ぜ', "\u305D\u3099": 'ぞ',
                    "\u305F\u3099": 'だ', "\u3061\u3099": 'ぢ', "\u3064\u3099": 'づ', "\u3066\u3099": 'で', "\u3068\u3099": 'ど',
                    "\u306F\u3099": 'ば', "\u3072\u3099": 'び', "\u3075\u3099": 'ぶ', "\u3078\u3099": 'べ', "\u307B\u3099": 'ぼ',
                    "\u30AB\u3099": 'ガ', "\u30AD\u3099": 'ギ', "\u30AF\u3099": 'グ', "\u30B1\u3099": 'ゲ', "\u30B3\u3099": 'ゴ',
                    "\u30B5\u3099": 'ザ', "\u30B7\u3099": 'ジ', "\u30B9\u3099": 'ズ', "\u30BB\u3099": 'ゼ', "\u30BD\u3099": 'ゾ',
                    "\u30BF\u3099": 'ダ', "\u30C1\u3099": 'ヂ', "\u30C4\u3099": 'ヅ', "\u30C6\u3099": 'デ', "\u30C8\u3099": 'ド',
                    "\u30CF\u3099": 'バ', "\u30D2\u3099": 'ビ', "\u30D5\u3099": 'ブ', "\u30D8\u3099": 'ベ', "\u30DB\u3099": 'ボ',
                    "\u30EF\u3099": 'ヷ', "\u30A4\u3099": 'ヸ', "\u30A6\u3099": 'ヴ', "\u30A8\u3099": 'ヹ', "\u30FA\u3099": 'ヲ',
                    "\u309D\u3099": 'ゞ', "\u30FD\u3099": 'ヾ',
                    // 半濁点
                    "\u306F\u309A": 'ぱ', "\u3072\u309A": 'ぴ', "\u3075\u309A": 'ぷ', "\u3078\u309A": 'ぺ', "\u307B\u309A": 'ぽ',
                    "\u30CF\u309A": 'パ', "\u30D2\u309A": 'ピ', "\u30D5\u309A": 'プ', "\u30D8\u309A": 'ペ', "\u30DB\u309A": 'ポ'
                });
            } else {
                // ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
                return this.replaceFromMap({
                    // 濁点
                    "\u309B": "\u3099",
                    "\uFF9E": "\u3099",
                    // 半濁点
                    "\u309C": "\u309A",
                    "\uFF9F": "\u309A"
                });
            }
        }
        /**
         * 文字列連結をおこなう
         *
         * - String.prototype.concat とは非互換
         *
         * @version 2.0.0
         * @since 0.2.0
         * @param ...args 文字列もしくはJacoインスタンス
         * @return インスタンス自身
         */

    }, {
        key: "concat",
        value: function concat() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this.$ += args.map(function (str) {
                return Array.isArray(str) ? str.join('') : str;
            }).join('');
            return this;
        }
        /**
         * 繰り返し記号をかなに置き換える
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自信
         */

    }, {
        key: "convertIterationMarks",
        value: function convertIterationMarks() {
            this.$ = convertIterationMarks_1.default(this.$);
            return this;
        }
        /**
         * 長音符をかなに置き換える
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自信
         */

    }, {
        key: "convertProlongedSoundMarks",
        value: function convertProlongedSoundMarks() {
            this.$ = convertProlongedSoundMarks_1.default(this.$);
            return this;
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
         * @return 合致したかどうか
         */

    }, {
        key: "endWith",
        value: function endWith(search, position) {
            var thisLength = this.length;
            var searchLength = new Jaco(search).length;
            if (!isFinite(position) || Math.floor(position) !== position || position > thisLength) {
                position = thisLength;
            }
            var end = position;
            var start = position - searchLength;
            var endStr = this.substring(start, end);
            return endStr.is(search);
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
            var chars = characters.toString().replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
            var pattern = new RegExp('[' + chars + ']', 'gm');
            return pattern.test(this.$);
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
            return (/[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(this.$)
            );
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

    }, {
        key: "hasSmallLetter",
        value: function hasSmallLetter() {
            return (/[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/.test(this.$)
            );
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
            return (/[\uD800-\uDBFF](?:[^\uDC00-\uDFFF]|$)|(?:^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]/.test(this.$)
            );
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

            return this.indexOf(search, position) !== -1;
        }
        /**
         * 指定された文字列が最初に現れるインデックスを返す
         *
         * - サロゲートペアを考慮する
         * - String.prototype.indexOf とは非互換
         *
         * @version 2.0.0
         * @since 2.0.0
         * @param str 検索文字列
         * @param fromIndex 検索位置
         * @return インデックス
         *
         */

    }, {
        key: "indexOf",
        value: function indexOf(str) {
            var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var splited = this.slice(fromIndex).split(str)[0];
            if (this.is(splited)) {
                return -1;
            } else {
                return new Jaco(splited).length + fromIndex;
            }
        }
        /**
         * 完全マッチ
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param target 比較する文字列
         * @return 結果の真偽
         */

    }, {
        key: "is",
        value: function is(target) {
            return this.$ === target.toString();
        }
        /**
         * 文字が空かどうか
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return 結果の真偽
         */

    }, {
        key: "isEmpty",
        value: function isEmpty() {
            return this.$ === '';
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

            var pattern = '^';
            if (negative) {
                pattern += '-?';
            }
            if (floatingPoint) {
                pattern += '(?:[0-9]*\\.)?';
            }
            pattern += '[0-9]+$';
            return this.test(new RegExp(pattern));
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
            var chars = characters.toString().replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
            var pattern = new RegExp('^[' + chars + ']+$', 'gm');
            return pattern.test(this.$);
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
            return this.isOnly(HIRAGANA_CHARS_1.HIRAGANA_CHARS + KANA_COMMON_CAHRS_1.KANA_COMMON_CAHRS);
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
            return this.isOnly(KATAKANA_CHARS_1.KATAKANA_CHARS + KANA_COMMON_CAHRS_1.KANA_COMMON_CAHRS);
        }
        /**
         * 指定された文字列が最後に現れるインデックスを返す
         *
         * - サロゲートペアを考慮する
         * - String.prototype.lastIndexOf とは非互換
         *
         * @version 2.0.0
         * @since 2.0.0
         * @param str 検索文字列
         * @param [fromIndex] 検索位置
         * @return インデックス
         *
         */

    }, {
        key: "lastIndexOf",
        value: function lastIndexOf(str) {
            var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

            return this._toArray().lastIndexOf(str.toString(), fromIndex);
        }
        /**
         * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を得る
         *
         * - String.prototype.match とは非互換
         *
         * @version 2.0.0
         * @since 2.0.0
         * @return マッチ結果
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
         * @return マッチした文字列の配列
         */

    }, {
        key: "matches",
        value: function matches(regexp) {
            var matches = this.match(regexp);
            return Array.prototype.concat.apply(matches || []);
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
         * @return インスタンス自身
         */

    }, {
        key: "normalize",
        value: function normalize() {
            var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'NFC';

            return this;
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
         * @return インスタンス自身が保持する文字列
         */

    }, {
        key: "padEnd",
        value: function padEnd(targetLength) {
            var padString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

            var thisArray = this._toArray();
            var thisLength = thisArray.length;
            if (targetLength < thisLength) {
                this.$ = this.substr(0, targetLength).toString();
            } else {
                var pad = new Jaco(padString)._pad(targetLength - thisLength);
                this.$ += pad;
            }
            return this;
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
         * @return インスタンス自身が保持する文字列
         */

    }, {
        key: "padStart",
        value: function padStart(targetLength) {
            var padString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

            var thisArray = this._toArray();
            var thisLength = thisArray.length;
            if (targetLength < thisLength) {
                this.$ = this.substr(0, targetLength).toString();
            } else {
                var pad = new Jaco(padString)._pad(targetLength - thisLength);
                this.$ = pad + this.$;
            }
            return this;
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
         * @return インスタンス自身
         */

    }, {
        key: "prepend",
        value: function prepend(element) {
            this.$ = new Jaco(element).concat(this).toString();
            return this;
        }
        /**
         * 文字列を取り除く
         *
         * @version 2.0.0
         * @since 0.2.0
         * @param pattern 取り除く文字列
         * @return インスタンス自身
         */

    }, {
        key: "remove",
        value: function remove(pattern) {
            return this.replace(pattern, '');
        }
        /**
         * ペアになっていないサロゲートコードポイントの削除
         *
         * @version 2.0.0
         * @since 2.0.0
         * @return インスタンス自身
         */

    }, {
        key: "removeUnpairedSurrogate",
        value: function removeUnpairedSurrogate() {
            var res = this.$.replace(/[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g, '$1');
            this.$ = res.replace(/(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]/g, '$1');
            return this;
        }
        /**
         * 濁点・半濁点を取り除く
         *
         * @version 1.1.0
         * @since 1.1.0
         * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
         * @return インスタンス自信
         */

    }, {
        key: "removeVoicedMarks",
        value: function removeVoicedMarks() {
            var ignoreSingleMark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!ignoreSingleMark) {
                // 濁点・半濁点単体の除去
                this.remove(/\u309B|\u3099|\uFF9E/g);
                this.remove(/\u309C|\u309A|\uFF9F/g);
            }
            return this.replaceFromMap({
                'が': 'か', 'ぎ': 'き', 'ぐ': 'く', 'げ': 'け', 'ご': 'こ',
                'ざ': 'さ', 'じ': 'し', 'ず': 'す', 'ぜ': 'せ', 'ぞ': 'そ',
                'だ': 'た', 'ぢ': 'ち', 'づ': 'つ', 'で': 'て', 'ど': 'と',
                'ば': 'は', 'び': 'ひ', 'ぶ': 'ふ', 'べ': 'へ', 'ぼ': 'ほ',
                'ぱ': 'は', 'ぴ': 'ひ', 'ぷ': 'ふ', 'ぺ': 'へ', 'ぽ': 'ほ',
                'ガ': 'カ', 'ギ': 'キ', 'グ': 'ク', 'ゲ': 'ケ', 'ゴ': 'コ',
                'ザ': 'サ', 'ジ': 'シ', 'ズ': 'ス', 'ゼ': 'セ', 'ゾ': 'ソ',
                'ダ': 'タ', 'ヂ': 'チ', 'ヅ': 'ツ', 'デ': 'テ', 'ド': 'ト',
                'バ': 'ハ', 'ビ': 'ヒ', 'ブ': 'フ', 'ベ': 'ヘ', 'ボ': 'ホ',
                'パ': 'ハ', 'ピ': 'ヒ', 'プ': 'フ', 'ペ': 'ヘ', 'ポ': 'ホ',
                'ヷ': 'ワ', 'ヸ': 'イ', 'ヴ': 'ウ', 'ヹ': 'エ', 'ヺ': 'ヲ',
                'ゞ': 'ゝ', 'ヾ': 'ヽ'
            });
        }
        /**
         * 文字列を繰り返す
         *
         * - String.prototype.repeat とは非互換
         *
         * @version 2.0.0
         * @since 2.0.0
         * @param times 繰り返しの回数
         * @return インスタンス自身が保持する文字列
         */

    }, {
        key: "repeat",
        value: function repeat() {
            var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var res = [];
            times = Math.floor(Math.max(times, 0));
            if (times === Infinity) {
                throw new RangeError('repeat count must be less than infinity');
            }
            while (times--) {
                res.push(this.$);
            }
            this.$ = res.join('');
            return this;
        }
        /**
         * 文字列をパターンで置換する
         *
         * @version 2.0.0
         * @since 0.2.0
         * @param pattern  対象のパターン
         * @param replacement 置換する文字列
         * @return インスタンス自身
         */

    }, {
        key: "replace",
        value: function replace(pattern, replacement) {
            var reg = pattern instanceof RegExp ? pattern : new RegExp(pattern.toString());
            this.$ = this.$.replace(reg, replacement.toString());
            return this;
        }
        /**
         * キーがパターン・値が置換文字列のハッシュマップによって置換する
         *
         * @version 2.0.0
         * @since 0.1.0
         * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
         * @return インスタンス自身
         */

    }, {
        key: "replaceFromMap",
        value: function replaceFromMap(convMap) {
            for (var needle in convMap) {
                if (convMap.hasOwnProperty(needle)) {
                    var replace = convMap[needle];
                    this.$ = this.$.replace(new RegExp(needle, 'g'), replace);
                }
            }
            return this;
        }
        /**
         * 正規表現にマッチしたインデックスを返す
         *
         * - サロゲートペアを考慮する
         * - String.prototype.search とは非互換
         *
         * @version 2.0.0
         * @since 2.0.0
         * @param searcher パターン
         * @return インデックス
         */

    }, {
        key: "search",
        value: function search(searcher) {
            var before = this.split(searcher)[0] || '';
            return new Jaco(before).length;
        }
        /**
         * 文字位置による抽出
         * (非破壊的メソッド)
         *
         * - サロゲートペアを考慮する
         * - String.prototype.slice とは非互換
         *
         * @version 2.0.0
         * @since 0.2.0
         * @param start 開始インデックス
         * @param end 終了インデックス 省略すると最後まで
         * @return 抽出した文字列からなるJacoインスタンス
         */

    }, {
        key: "slice",
        value: function slice(start, end) {
            var array = this._toArray();
            var res = array.slice(start, end);
            return new Jaco(res.join(''));
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
         * @return 分割された配列
         */

    }, {
        key: "split",
        value: function split(separator, limit) {
            var reg = separator instanceof RegExp ? separator : new RegExp(separator.toString());
            return this.$.split(reg, limit);
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
         * @return 合致したかどうか
         */

    }, {
        key: "startsWith",
        value: function startsWith(search) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return this.substr(position, search.length).toString() === search.toString();
        }
        /**
         * 指定した位置から指定した数だけ文字列を抽出
         * (非破壊的メソッド)
         *
         * - サロゲートペアを考慮する
         * - String.prototype.substr とは非互換
         *
         * @version 2.0.0
         * @since 0.2.0
         * @param start 開始インデックス
         * @param length 指定数
         * @return 抽出した文字列からなるJacoインスタンス
         */

    }, {
        key: "substr",
        value: function substr(start, length) {
            var array = this._toArray();
            var thisLength = array.length;
            if (length == null || length < 0 || thisLength < length) {
                length = thisLength;
            }
            if (start < 0) {
                start = thisLength + start;
            }
            var end = Math.max(start + length, start);
            start = Math.min(start + length, start);
            var res = array.slice(start, end);
            return new Jaco(res.join(''));
        }
        /**
         * 指定した位置の間の文字列を抽出
         * (非破壊的メソッド)
         *
         * - サロゲートペアを考慮する
         * - String.prototype.substring とは非互換
         *
         * @version 2.0.0
         * @since 0.2.0
         * @param indexA インデックス
         * @param indexB インデックス
         * @return 抽出した文字列からなるJacoインスタンス
         */

    }, {
        key: "substring",
        value: function substring(indexA, indexB) {
            var start = Math.max(Math.min(indexA, indexB), 0);
            var end = Math.min(Math.max(indexA, indexB), this.length);
            var length = end - start;
            return this.substr(start, length);
        }
        /**
         * パターンとマッチするかどうか
         *
         * @version 2.0.0
         * @since 0.2.0
         * @param pattern パターン
         * @return 結果の真偽
         */

    }, {
        key: "test",
        value: function test(pattern) {
            return pattern instanceof RegExp ? pattern.test(this.$) : this.$ === pattern.toString();
        }
        /**
         * 小書き文字を基底文字に変換する
         *
         * TODO: test
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自身
         */

    }, {
        key: "toBasicLetter",
        value: function toBasicLetter() {
            this.combinateSoundMarks().replaceFromMap({
                'ぁ': 'あ', 'ぃ': 'い', 'ぅ': 'う', 'ぇ': 'え', 'ぉ': 'お',
                'っ': 'つ',
                'ゃ': 'や', 'ゅ': 'ゆ', 'ょ': 'よ',
                'ゎ': 'わ',
                'ァ': 'ア', 'ィ': 'イ', 'ゥ': 'ウ', 'ェ': 'エ', 'ォ': 'オ',
                'ヵ': 'カ', 'ㇰ': 'ク', 'ヶ': 'ケ',
                'ㇱ': 'シ', 'ㇲ': 'ス',
                'ッ': 'ツ', 'ㇳ': 'ト',
                'ㇴ': 'ヌ', 'ㇵ': 'ハ',
                'ㇶ': 'ヒ', 'ㇷ': 'フ', 'ㇸ': 'ヘ', 'ㇹ': 'ホ',
                'ㇺ': 'ム',
                'ャ': 'ヤ', 'ュ': 'ユ', 'ョ': 'ヨ',
                'ㇻ': 'ラ', 'ㇼ': 'リ', 'ㇽ': 'ル', 'ㇾ': 'レ', 'ㇿ': 'ロ',
                'ヮ': 'ワ'
            });
            return this;
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
         * @return インスタンス自身
         */

    }, {
        key: "toHiragana",
        value: function toHiragana() {
            var isCombinate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            // 半角カタカナを全角カタカナへ
            this.toWideKatakana();
            // ヷヸヹヺの変換
            this.replaceFromMap({
                'ヷ': 'わ゛',
                'ヸ': 'ゐ゛',
                'ヹ': 'ゑ゛',
                'ヺ': 'を゛'
            });
            // カタカナをひらがなへ(Unicodeの番号をずらす)
            this._shift(toPattern_1.default(KATAKANA_CHARS_1.KATAKANA_CHARS), -96);
            // 濁点・半濁点を結合文字に変換
            if (isCombinate) {
                this.combinateSoundMarks();
            }
            return this;
        }
        /**
         * カタカナに変換する
         *
         * @version 0.2.0
         * @since 0.1.0
         * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
         * @return インスタンス自身
         */

    }, {
        key: "toKatakana",
        value: function toKatakana() {
            var toWide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            // 半角カタカナを全角カタカナへ
            if (toWide) {
                this.toWideKatakana();
            }
            // わ゛=> ヷ (濁点3種類対応 ※全角濁点・全角結合文字濁点・半角濁点)
            this.replace(/わ(?:\u309B|\u3099|\uFF9E)/g, 'ヷ');
            // ゐ゛=> ヸ (濁点3種類対応)
            this.replace(/ゐ(?:\u309B|\u3099|\uFF9E)/g, 'ヸ');
            // ゑ゛=> ヹ (濁点3種類対応)
            this.replace(/ゑ(?:\u309B|\u3099|\uFF9E)/g, 'ヹ');
            // を゛=> ヺ (濁点3種類対応)
            this.replace(/を(?:\u309B|\u3099|\uFF9E)/g, 'ヺ');
            // ひらがなをカタカナへ(Unicodeの番号をずらす)
            this._shift(toPattern_1.default(HIRAGANA_CHARS_1.HIRAGANA_CHARS), 96);
            return this;
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
            this.$ = this.$.toLowerCase();
            return this;
        }
        /**
         * 半角に変換
         *
         * 改行は変換しない
         *
         * @version 2.0.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: "toNarrow",
        value: function toNarrow() {
            var convertJapaneseChars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            // スペースの変換
            this.replace(toPattern_1.default(SPACE_CHARS_1.SPACE_CHARS), ' ');
            // 半角英数記号の変換
            this._shift(toPattern_1.default(FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN_1.FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN), -65248);
            if (convertJapaneseChars) {
                // 日本語カタカナ記号の変換
                this.toNarrowJapnese();
            }
            return this;
        }
        /**
         * カタカナと日本語で使われる記号を半角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: "toNarrowJapnese",
        value: function toNarrowJapnese() {
            // 半角カタカナへ
            this.toNarrowKatakana();
            // 半角記号へ
            this.toNarrowSymbolForJapanese();
            return this;
        }
        /**
         * 半角カタカナに変換する
         *
         * @version 0.6.0
         * @since 0.1.0
         * @param fromHiragana ひらがなも変換する
         * @return インスタンス自身
         */

    }, {
        key: "toNarrowKatakana",
        value: function toNarrowKatakana() {
            var fromHiragana = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            // ひらがなを一旦全角カタカナに変換する
            if (fromHiragana) {
                this.toKatakana();
            }
            // 濁点の変換 (全角濁点2種類対応)
            this.replace(/\u309B|\u3099/g, "\uFF9E");
            // 半濁点の変換 (全角半濁点2種類対応)
            this.replace(/\u309C|\u309A/g, "\uFF9F");
            // カタカナの変換
            this.replaceFromMap({
                'ァ': 'ｧ', 'ィ': 'ｨ', 'ゥ': 'ｩ', 'ェ': 'ｪ', 'ォ': 'ｫ', 'ャ': 'ｬ',
                'ュ': 'ｭ', 'ョ': 'ｮ', 'ッ': 'ｯ',
                'ヵ': 'ｶ', 'ヶ': 'ｹ',
                'ヮ': 'ﾜ',
                'ー': 'ｰ',
                'ア': 'ｱ', 'イ': 'ｲ', 'ウ': 'ｳ', 'エ': 'ｴ', 'オ': 'ｵ',
                'カ': 'ｶ', 'キ': 'ｷ', 'ク': 'ｸ', 'ケ': 'ｹ', 'コ': 'ｺ',
                'サ': 'ｻ', 'シ': 'ｼ', 'ス': 'ｽ', 'セ': 'ｾ', 'ソ': 'ｿ',
                'タ': 'ﾀ', 'チ': 'ﾁ', 'ツ': 'ﾂ', 'テ': 'ﾃ', 'ト': 'ﾄ',
                'ナ': 'ﾅ', 'ニ': 'ﾆ', 'ヌ': 'ﾇ', 'ネ': 'ﾈ', 'ノ': 'ﾉ',
                'ハ': 'ﾊ', 'ヒ': 'ﾋ', 'フ': 'ﾌ', 'ヘ': 'ﾍ', 'ホ': 'ﾎ',
                'マ': 'ﾏ', 'ミ': 'ﾐ', 'ム': 'ﾑ', 'メ': 'ﾒ', 'モ': 'ﾓ',
                'ヤ': 'ﾔ', 'ユ': 'ﾕ', 'ヨ': 'ﾖ',
                'ラ': 'ﾗ', 'リ': 'ﾘ', 'ル': 'ﾙ', 'レ': 'ﾚ', 'ロ': 'ﾛ',
                'ワ': 'ﾜ', 'ン': 'ﾝ', 'ヰ': 'ｲ', 'ヱ': 'ｴ', 'ヲ': 'ｦ',
                'ガ': 'ｶﾞ', 'ギ': 'ｷﾞ', 'グ': 'ｸﾞ', 'ゲ': 'ｹﾞ', 'ゴ': 'ｺﾞ',
                'ザ': 'ｻﾞ', 'ジ': 'ｼﾞ', 'ズ': 'ｽﾞ', 'ゼ': 'ｾﾞ', 'ゾ': 'ｿﾞ',
                'ダ': 'ﾀﾞ', 'ヂ': 'ﾁﾞ', 'ヅ': 'ﾂﾞ', 'デ': 'ﾃﾞ', 'ド': 'ﾄﾞ',
                'バ': 'ﾊﾞ', 'ビ': 'ﾋﾞ', 'ブ': 'ﾌﾞ', 'ベ': 'ﾍﾞ', 'ボ': 'ﾎﾞ',
                'パ': 'ﾊﾟ', 'ピ': 'ﾋﾟ', 'プ': 'ﾌﾟ', 'ペ': 'ﾍﾟ', 'ポ': 'ﾎﾟ',
                'ヷ': 'ﾜﾞ', 'ヸ': 'ｲﾞ', 'ヴ': 'ｳﾞ', 'ヹ': 'ｴﾞ', 'ヺ': 'ｦﾞ'
            });
            return this;
        }
        /**
         * 日本語で使われる記号を半角に変換
         *
         * @version 2.0.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: "toNarrowSymbolForJapanese",
        value: function toNarrowSymbolForJapanese() {
            this.replaceFromMap({
                '。': '｡',
                '「': '｢',
                '」': '｣',
                '、': '､',
                '・': '･'
            });
            return this;
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
         * @return インスタンス自身
         */

    }, {
        key: "toNumeric",
        value: function toNumeric() {
            var negative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var floatingPoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            // 半角化
            this.toNarrow();
            // 数字・ハイフン（マイナス）・ドット意外を削除
            this.remove(/[^0-9\.\-]/gm);
            if (negative) {
                // 最初のにくるハイフンをnに一時的に変換
                this.replace(/^-/, 'n');
            }
            // ハイフンを全て削除
            this.remove(/-/g);
            if (negative) {
                // ハイフンを元に戻す
                this.replace('n', '-');
            }
            if (floatingPoint) {
                // 文字列中で一番最初にくるドットを_に一時的に変換
                this.replace(/\.([0-9])/, '_$1');
            }
            // ドットを全て削除
            this.remove(/\./g);
            if (floatingPoint) {
                // ドットを元に戻す
                this.replace('_', '.');
            }
            return this;
        }
        /**
         * よみの文字に変換する
         * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
         *
         * TODO: test
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自身
         */

    }, {
        key: "toPhoeticKana",
        value: function toPhoeticKana() {
            this.toHiragana().toBasicLetter().convertProlongedSoundMarks().convertIterationMarks();
            return this;
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
            this.$ = this.$.toUpperCase();
            return this;
        }
        /**
         * 全角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: "toWide",
        value: function toWide() {
            // スペースの変換
            this.replace(' ', "\u3000");
            // 日本語カタカナ記号の変換
            this.toWideJapnese();
            // 半角英数記号の変換
            this._shift(toPattern_1.default(ALPHANUMERIC_CHARS_WITH_SIGN_1.ALPHANUMERIC_CHARS_WITH_SIGN), 65248);
            return this;
        }
        /**
         * カタカナと日本語で使われる記号を全角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: "toWideJapnese",
        value: function toWideJapnese() {
            // 全角カタカナへ
            this.toWideKatakana();
            // 全角記号へ
            this.toWideSymbolJapanese();
            return this;
        }
        /**
         * 全角カタカナに変換する
         *
         * @version 0.2.0
         * @since 0.1.0
         * @return インスタンス自身
         */

    }, {
        key: "toWideKatakana",
        value: function toWideKatakana() {
            // カタカナ・濁点・半濁点の変換
            this.replaceFromMap({
                'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
                'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
                'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
                'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
                'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
                'ﾜﾞ': 'ヷ', 'ｲﾞ': 'ヸ', 'ｳﾞ': 'ヴ', 'ｴﾞ': 'ヹ', 'ｦﾞ': 'ヺ',
                'ﾞ': '゛', 'ﾟ': '゜',
                'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
                'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
                'ｯ': 'ッ', 'ｰ': 'ー',
                'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
                'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
                'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
                'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
                'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
                'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
                'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
                'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
                'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
                'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン'
            });
            return this;
        }
        /**
         * 日本語で使われる記号を全角に変換
         *
         * @version 2.0.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: "toWideSymbolJapanese",
        value: function toWideSymbolJapanese() {
            this.replaceFromMap({
                '｡': '。',
                '｢': '「',
                '｣': '」',
                '､': '、',
                '･': '・'
            });
            return this;
        }
        /**
         * 先頭と末尾の空白を取り除く
         *
         * @version 2.0.0
         * @since 0.2.0
         * @return インスタンス自身
         */

    }, {
        key: "trim",
        value: function trim() {
            return this.trimLeft().trimRight();
        }
        /**
         * 先頭の空白を取り除く
         *
         * @version 2.0.0
         * @since 2.0.0
         * @return インスタンス自身
         */

    }, {
        key: "trimLeft",
        value: function trimLeft() {
            return this.remove(/^\s+/);
        }
        /**
         * 末尾の空白を取り除く
         *
         * @version 2.0.0
         * @since 2.0.0
         * @return インスタンス自身
         */

    }, {
        key: "trimRight",
        value: function trimRight() {
            return this.remove(/\s+$/);
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
                    var item = _this._toArray()[count];
                    var result = {
                        value: item != null ? new Jaco(item) : undefined,
                        done: _this.length <= count
                    };
                    return result;
                }
            };
            return iterator;
        }
        /**
         * 文字列中のそれぞれのひと文字に対してUnicode番号を指定の数値ずらす
         *
         * @version 0.2.0
         * @since 0.1.0
         * @param needle 対象のパターン
         * @param shiftNum ずらす数値
         * @return インスタンス自身
         */

    }, {
        key: "_shift",
        value: function _shift(needle, shiftNum) {
            this.$ = this.$.replace(needle, function (char) {
                return String.fromCharCode(char.charCodeAt(0) + shiftNum);
            });
            return this;
        }
        /**
         * 文字列を配列化する
         *
         * サロゲートペア文字列を考慮する
         *
         * @version 2.0.0
         * @since 2.0.0
         * @return 配列化された文字列
         */

    }, {
        key: "_toArray",
        value: function _toArray() {
            return this.$.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
        }
        /**
         * 指定数の文字列長になるように繰り返して埋める
         *
         * @version 2.0.0
         * @since 2.0.0
         * @param length 指定の文字列長
         * @return 埋められた文字列
         */

    }, {
        key: "_pad",
        value: function _pad(length) {
            var pad = [];
            var padStringArray = this._toArray();
            var padLength = padStringArray.length;
            for (var i = 0; i < length; i++) {
                var char = padStringArray[i % padLength];
                pad.push(char);
            }
            return pad.join('');
        }
    }, {
        key: "length",
        get: function get() {
            var array = this._toArray();
            return array.length;
        }
    }]);

    return Jaco;
}();

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ## Jacoクラス
 *
 * 日本語やマルチバイト文字・ASCII文字を扱いやすくするためのラッパークラス
 *
 * 文字列クラスを継承してはいないがメソッドは同等のものが実装されている。
 * ただし基本的にほとんどのメソッドが破壊的メソッドかつチェインナブルである。
 *
 * @version 0.5.0
 * @since 0.1.0
 */
exports.default = Jaco;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var jaco_1 = __webpack_require__(0);
/**
 * ひらがなだけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 * @return ひらがなだけで構成されているかどうか
 */
function default_1(str) {
  return new jaco_1.default(str).isOnlyHiragana();
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ひらがなだけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 * @return ひらがなだけで構成されているかどうか
 */
exports.default = default_1;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var jaco_1 = __webpack_require__(0);
var hiraganaOnly_1 = __webpack_require__(1);
/**
 * 配列の五十音順ソートをするためのソート関数
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param string Array.prototype.sort から渡される配列要素
 * @param string Array.prototype.sort から渡される配列要素
 * @return 比較数値
 */
function default_1(a, b) {
    // 完全に一致ならば比較の必要なし
    if (a === b) {
        return 0;
    }
    var _a = new jaco_1.default(a).toNarrow().toPhoeticKana();
    var _b = new jaco_1.default(b).toNarrow().toPhoeticKana();
    var _tmpA = void 0; // tempString
    var _tmpB = void 0; // tempString
    var phoneticA = _a.toString();
    var phoneticB = _b.toString();
    var unvoicedA = _a.removeVoicedMarks(true).toString();
    var unvoicedB = _b.removeVoicedMarks(true).toString();
    var codeA = _convertNaturalKanaOrderNumberPhase1(unvoicedA);
    var codeB = _convertNaturalKanaOrderNumberPhase1(unvoicedB);
    var l = Math.max(a.length, b.length);
    var rSpecificPhoneticSign = /[ーぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮゝゞヽヾ]/;
    // 濁音・半濁音をのぞいたよみがなで比較
    if (codeA < codeB) {
        return -1;
    } else if (codeA > codeB) {
        return 1;
    } else {
        // 上記比較が全く同じであれば
        // 一文字ずつ比較する
        for (var i = 0; i < l; i++) {
            if (rSpecificPhoneticSign.test(a[i]) || rSpecificPhoneticSign.test(b[i])) {
                // 片方が「ーぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮゝゞヽヾ」に該当する場合
                _tmpA = _convertNaturalKanaOrderNumberPhase2(a[i]);
                _tmpB = _convertNaturalKanaOrderNumberPhase2(b[i]);
                if (_tmpA < _tmpB) {
                    return -1;
                } else if (_tmpA > _tmpB) {
                    return 1;
                }
            } else {
                // 平音・濁音・半濁音で比較
                if (phoneticA[i] < phoneticB[i]) {
                    return -1;
                } else if (phoneticB[i] < phoneticA[i]) {
                    return 1;
                }
            }
        }
        // もう一度、頭から一文字ずつ比較する
        for (var _i = 0; _i < l; _i++) {
            // ひらがな・カタカナで比較
            _tmpA = hiraganaOnly_1.default(a[_i]) ? '0' : '1';
            _tmpB = hiraganaOnly_1.default(b[_i]) ? '0' : '1';
            if (_tmpA < _tmpB) {
                return -1;
            } else if (_tmpA > _tmpB) {
                return 1;
            }
        }
        return 0;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 配列の五十音順ソートをするためのソート関数
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param string Array.prototype.sort から渡される配列要素
 * @param string Array.prototype.sort から渡される配列要素
 * @return 比較数値
 */
exports.default = default_1;
/**
 * ソートのために内部コードを擬似的に置き換える フェーズ2
 *
 * 長音符→小書き文字→繰り返し記号→通常文字の順に並ぶようにコードを調整
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param string 変換する文字（一文字しか受け取らない予定）
 * @return 変換された文字列
 */
function _convertNaturalKanaOrderNumberPhase2(str) {
    // naturalKanaOrder関数で使用される場合は str は一文字想定
    var result = str.replace('ー', '0').replace(/[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/, function ($0) {
        return $0.charCodeAt(0).toString(16);
    }).replace('ゝ', '4000').replace('ヽ', '4001').replace('ゞ', '4002').replace('ヾ', '4003').replace(/[^0-9]/, '9000');
    return result;
}
/**
 * ソートのために内部コードを擬似的に置き換える フェーズ1
 *
 * 「あ」「い」「う」「え」「お」
 * 「か」「き」「く」「け」「こ」
 * 「さ」「し」「す」「せ」「そ」
 * 「た」「ち」「つ」「て」「と」
 * 「な」「に」「ぬ」「ね」「の」
 * 「は」「ひ」「ふ」「へ」「ほ」
 * 「ま」「み」「む」「め」「も」
 * 「や」「ゆ」「よ」
 * 「ら」「り」「る」「れ」「ろ」
 * 「わ」「ゐ」「ゑ」「を」「ん」
 * 「ゝ」「ー」
 * 上記の順にならぶように擬似的に文字のコード数値を変換する
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param string 変換する文字列
 * @return 変換された文字列
 */
function _convertNaturalKanaOrderNumberPhase1(str) {
    return new jaco_1.default(str).replaceFromMap({
        'あ': "\u3041", 'い': "\u3042", 'う': "\u3043", 'え': "\u3044", 'お': "\u3045",
        'か': "\u3046", 'き': "\u3047", 'く': "\u3048", 'け': "\u3049", 'こ': "\u304A",
        'さ': "\u304B", 'し': "\u304C", 'す': "\u304D", 'せ': "\u304E", 'そ': "\u304F",
        'た': "\u3050", 'ち': "\u3052", 'つ': "\u3053", 'て': "\u3054", 'と': "\u3055",
        'な': "\u3056", 'に': "\u3057", 'ぬ': "\u3058", 'ね': "\u3059", 'の': "\u305A",
        'は': "\u305B", 'ひ': "\u305C", 'ふ': "\u305D", 'へ': "\u305E", 'ほ': "\u305F",
        'ま': "\u3060", 'み': "\u3061", 'む': "\u3062", 'め': "\u3063", 'も': "\u3064",
        'や': "\u3065", 'ゆ': "\u3066", 'よ': "\u3067",
        'ら': "\u3068", 'り': "\u3069", 'る': "\u306A", 'れ': "\u306B", 'ろ': "\u306C",
        'わ': "\u306D", 'ゐ': "\u306E", 'ゑ': "\u306F", 'を': "\u3070", 'ん': "\u3071",
        'ゝ': "\u3072", 'ー': "\u3073"
    }).toString();
}

/***/ },
/* 3 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * ひらがな
 *
 * [ぁ-ゖゝ-ゟ]
 *
 */

exports.HIRAGANA_CHARS = "\u3041-\u3096\u309D-\u309F";

/***/ },
/* 4 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * カタカナ
 *
 * [ァ-ヺヽ-ヿ]
 *
 */

exports.KATAKANA_CHARS = "\u30A1-\u30FA\u30FD\u30FF";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var jaco_1 = __webpack_require__(0);
/**
 * ひらがな化
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 * @return ひらがな化された文字列
 */
function default_1(str) {
  var isCombinate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return new jaco_1.default(str).toHiragana(isCombinate).toString();
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ひらがな化
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 * @return ひらがな化された文字列
 */
exports.default = default_1;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var jaco_1 = __webpack_require__(0);
/**
 * カタカナだけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 * @return カタカナだけで構成されているかどうか
 */
function default_1(str) {
  return new jaco_1.default(str).isOnlyKatakana();
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * カタカナだけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 * @return カタカナだけで構成されているかどうか
 */
exports.default = default_1;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var jaco_1 = __webpack_require__(0);
/**
 * カタカナ化
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 * @return カタカナ化された文字列
 */
function default_1(str) {
  var toWide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return new jaco_1.default(str).toKatakana(toWide).toString();
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * カタカナ化
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 * @return カタカナ化された文字列
 */
exports.default = default_1;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var naturalKanaOrder_1 = __webpack_require__(2);
/**
 * 配列の五十音順ソートをする
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param array 対象の配列
 * @return 五十音順にソートされた配列
 */
function default_1(array) {
  return array.sort(naturalKanaOrder_1.default);
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 配列の五十音順ソートをする
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param array 対象の配列
 * @return 五十音順にソートされた配列
 */
exports.default = default_1;

/***/ },
/* 9 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * 半角英数記号
 *
 * [!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~]
 *
 */

exports.ALPHANUMERIC_CHARS_WITH_SIGN = " -~";

/***/ },
/* 10 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * 全角英数記号
 *
 * [！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～]
 *
 */

exports.FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN = "\uFF01-\uFF5F";

/***/ },
/* 11 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * ひらがな（繰り返し記号・合字なし）
 *
 * [ぁ-ゖ]
 *
 */

exports.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS = "\u3041-\u3096";

/***/ },
/* 12 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * 濁点／半濁点(結合文字含む)・長音符
 *
 * [゛゜ー]
 *
 */

exports.KANA_COMMON_CAHRS = "\u3099-\u309C\u30FC";

/***/ },
/* 13 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * カタカナ（繰り返し記号・合字なし）
 *
 * [ァ-ヺ]
 *
 */

exports.KATAKANA_CHARS_IGNORE_ITERATION_MARKS = "\u30A1-\u30FA";

/***/ },
/* 14 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * タブ [HT]
 *
 */

var CHARACTER_TABULATION = '\t';
/**
 * 垂直タブ [VT]
 */
var LINE_TABULATION = '\x0B';
/**
 * フォームフィード [FF]
 */
var FORM_FEED = '\f';
/**
 * 空白文字
 */
var SPACE = ' ';
/**
 * Next line [NEL]
 */
var NEXT_LINE = '\x85';
/**
 * ノーブレークスペース [NBSP]
 */
var NO_BREAK_SPACE = '\xA0';
/**
 * n幅 クワタ
 */
var EN_QUAD = '\u2000';
/**
 * m幅 クワタ
 */
var EM_QUAD = '\u2001';
/**
 * n幅 空白
 */
var EN_SPACE = '\u2002';
/**
 * m幅 空白
 */
var EM_SPACE = '\u2003';
/**
 * 1/3 m幅 空白
 */
var THREE_PER_EM_SPACE = '\u2004';
/**
 * 1/4 m幅 空白
 */
var FOUR_PER_EM_SPACE = '\u2005';
/**
 * 1/6 m幅 空白
 */
var SIX_PER_EM_SPACE = '\u2006';
/**
 * Figure space
 *
 * > In fonts with monospaced digits, equal to the width of one digit. HTML/XML named entity: &numsp;
 */
var FIGURE_SPACE = '\u2007';
/**
 * Punctuation space
 *
 * > As wide as the narrow punctuation in a font, i.e. the advance width of the period or comma. HTML/XML named entity: &puncsp;
 */
var PUNCTUATION_SPACE = '\u2008';
/**
 * 細い空白
 */
var THIN_SPACE = '\u2009';
/**
 * Mongolian vowel separator
 *
 * > MVS. A narrow space character, used in Mongolian to cause the final two characters of a word to take on different shapes.
 * > It is no longer classified as space character (i.e. in Zs category) in Unicode 6.3.0, even though it was in previous versions of the standard.
 */
var MONGOLIAN_VOWEL_SEPARATOR = '\u180E';
/**
 * より細い空白
 *
 */
var HAIR_SPACE = '\u200A';
/**
 * ゼロ幅空白
 */
var ZERO_WIDTH_SPACE = '\u200B';
/**
 * ゼロ幅非接合子 [ZWNJ]
 *
 * > 合字を使用する文字体系のコンピュータ化で用いられる制御文字である。
 * > 本来ならば合字として連結される2つの文字の間にZWNJが置かれると、その2つの文字はそれぞれ末尾形および頭字形で表示される。
 * > スペースを間に置くことでも同じ効果は得られるが、スペースよりも両者の文字を近づけたい、または単語と形態素を連結したい場合にZWNJが用いられる。
 */
var ZERO_WIDTH_NON_JOINER = '\u200C';
/**
 * ゼロ幅接合子 [ZWJ]
 *
 * > アラビア文字やブラーフミー系文字のような複雑な表記体系のコンピュータによる組版において使われる制御文字である。
 * > 本来ならば接合しない形で表示される文字の後ろにゼロ幅接合子が置かれると、接合する形で表示される。
 * > 2つの絵文字の間にZWJが置かれると、新しい形が表示されることもある。
 * > たとえば、2人の大人の絵文字と1人または2人の子供の絵文字をZWJでつなぐと家族の絵文字が表示される。
 */
var ZERO_WIDTH_JOINER = '\u200D';
/**
 * 単語結合子
 *
 * > 日本語などのわかち書きをしない言語においては、改行は文章の途中の任意の位置で行われるが、単語の途中など改行してほしくない箇所に単語結合子を入れることで、その場所では改行されなくなる。
 * > このコードはUnicode バージョン3.2（2002年発行）でU+2060 word joiner (HTML: &#8288;)として定義された。
 * > それ以前より、Unicodeには同じ働きをするゼロ幅ノーブレークスペース(ZWNBSP: zero width no-break space)が存在していた。
 * > しかし、そのコードポイント U+FEFF はファイルの先頭のバイトオーダーマークとしても使用されている。
 * > この曖昧さを避けるために、ゼロ幅ノーブレークスペースと完全に同じ意味と使用法を持つ単語結合子がUnicode 3.2で追加され、「単語結合の意味では新しい文字だけを使うことを強く推奨する」としている。
 */
var WORD_JOINER = '\u2060';
/**
 * Line separator
 */
var LINE_SEPARATOR = '\u2028';
/**
 * Paragraph separator
 */
var PARAGRAPH_SEPARATOR = '\u2028';
/**
 * 狭いノーブレークスペース
 */
var NARROW_NO_BREAK_SPACE = '\u202F';
/**
 * Medium mathematical space
 *
 * > MMSP. Used in mathematical formulae.
 * > Four-eighteenths of an em.
 * > In mathematical typography, the widths of spaces are usually given in integral multiples of an eighteenth of an em, and 4/18 em may be used in several situations,
 * > for example between the a and the + and between the + and the b in the expression a + b.
 * >  HTML/XML named entity: &MediumSpace;
 */
var MEDIUM_MATHMETICAL_SPACE = '\u205F';
/**
 * 全角空白
 */
var IDEOGRAPHIC_SPACE = '\u3000';
/**
 * ゼロ幅ノーブレークスペース
 */
var ZERO_WIDTH_NO_BREAK_SPACE = '\uFEFF';
/**
 * ホワイトスペース（空白文字）類
 *
 * 改行（`\r|\n|\r\n`）は含まない
 *
 */
exports.SPACE_CHARS = [CHARACTER_TABULATION, LINE_TABULATION, FORM_FEED, SPACE, NEXT_LINE, NO_BREAK_SPACE, EN_QUAD, EM_QUAD, EN_SPACE, EM_SPACE, THREE_PER_EM_SPACE, FOUR_PER_EM_SPACE, SIX_PER_EM_SPACE, FIGURE_SPACE, PUNCTUATION_SPACE, THIN_SPACE, MONGOLIAN_VOWEL_SEPARATOR, HAIR_SPACE, ZERO_WIDTH_SPACE, ZERO_WIDTH_NON_JOINER, ZERO_WIDTH_JOINER, WORD_JOINER, LINE_SEPARATOR, PARAGRAPH_SEPARATOR, NARROW_NO_BREAK_SPACE, MEDIUM_MATHMETICAL_SPACE, IDEOGRAPHIC_SPACE, ZERO_WIDTH_NO_BREAK_SPACE].join('');

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var jaco_1 = __webpack_require__(0);
var HIRAGANA_CHARS_IGNORE_ITERATION_MARKS_1 = __webpack_require__(11);
var KATAKANA_CHARS_IGNORE_ITERATION_MARKS_1 = __webpack_require__(13);
var KANA_WITH_ITERATION_MARKS_REGEXP = new RegExp("([" + HIRAGANA_CHARS_IGNORE_ITERATION_MARKS_1.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS + KATAKANA_CHARS_IGNORE_ITERATION_MARKS_1.KATAKANA_CHARS_IGNORE_ITERATION_MARKS + "])([\u309D\u309E\u30FD\u30FE])");
/**
 * 繰り返し記号をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @return 置き換えた文字列
 */
function default_1(str) {
    while (KANA_WITH_ITERATION_MARKS_REGEXP.test(str)) {
        str = converter(str);
    }
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 繰り返し記号をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @return 置き換えた文字列
 */
exports.default = default_1;
function converter(str) {
    return str.replace(KANA_WITH_ITERATION_MARKS_REGEXP, replacer);
}
function replacer(matchAll, beforeString, iterationMark) {
    var converted = new jaco_1.default(beforeString).removeVoicedMarks();
    switch (iterationMark) {
        case 'ゝ':
            {
                converted.toHiragana();
            }
            break;
        case 'ヽ':
            {
                converted.toKatakana();
            }
            break;
        case 'ゞ':
            {
                converted.toHiragana().addVoicedMarks();
            }
            break;
        case 'ヾ':
            {
                converted.toKatakana().addVoicedMarks();
            }
            break;
        default:
            {}
    }
    return beforeString + converted;
}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var HIRAGANA_CHARS_1 = __webpack_require__(3);
var KATAKANA_CHARS_1 = __webpack_require__(4);
var KANA_WITH_PROLONGED_SOUND_MARKS_PATTERN_REGEXP = new RegExp('[' + HIRAGANA_CHARS_1.HIRAGANA_CHARS + KATAKANA_CHARS_1.KATAKANA_CHARS + ']ー');
/**
 * 長音符をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @return インスタンス自信
 */
function default_1(str) {
    while (KANA_WITH_PROLONGED_SOUND_MARKS_PATTERN_REGEXP.test(str)) {
        str = converter(str);
    }
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 長音符をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @return インスタンス自信
 */
exports.default = default_1;
function converter(str) {
    return str.replace(/([あぁかゕがさざただなはばぱまやゃらわゎ])ー/g, '$1あ').replace(/([いぃきぎしじちぢにひびぴみりゐ])ー/g, '$1い').replace(/([うぅゔくぐすずつづぬふぶぷむゆゅる])ー/g, '$1う').replace(/([えぇけゖげせぜてでねへべぺめれゑ])ー/g, '$1え').replace(/([おぉこごそぞとどのほぼぽもよょろを])ー/g, '$1お').replace(/んー/g, 'んん').replace(/っー/g, 'っっ').replace(/([アァカヵガサザタダナハバパマヤャラワヮヷ])ー/g, '$1ア').replace(/([イィキギシジチヂニヒビピミリヰヸ])ー/g, '$1イ').replace(/([ウゥヴクグスズツヅヌフブプムユュル])ー/g, '$1ウ').replace(/([エェケヶゲセゼテデネヘベペメレヱヹ])ー/g, '$1エ').replace(/([オォコゴソゾトドノホボポモヨョロヲヺ])ー/g, '$1オ').replace(/ンー/g, 'ンン').replace(/ッー/g, 'ッッ');
}

/***/ },
/* 17 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * キャラクターリストを正規表現に変換する
 *
 * @version 0.1.0
 * @since 0.1.0
 * @param chars 文字の集合
 * @return 正規表現化された文字セット
 */

function default_1(chars) {
  return new RegExp("[" + chars + "]", 'g');
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * キャラクターリストを正規表現に変換する
 *
 * @version 0.1.0
 * @since 0.1.0
 * @param chars 文字の集合
 * @return 正規表現化された文字セット
 */
exports.default = default_1;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var hiraganaOnly_1 = __webpack_require__(1);
var hiraganize_1 = __webpack_require__(5);
var katakanaOnly_1 = __webpack_require__(6);
var katakanize_1 = __webpack_require__(7);
var naturalKanaOrder_1 = __webpack_require__(2);
var naturalKanaSort_1 = __webpack_require__(8);
var jaco_1 = __webpack_require__(0);
// tslint:disable:no-namespace no-mergeable-namespace
var jaco;
(function (jaco) {
    'use strict';

    jaco.hiraganaOnly = hiraganaOnly_1.default;
    jaco.hiraganize = hiraganize_1.default;
    jaco.katakanaOnly = katakanaOnly_1.default;
    jaco.katakanize = katakanize_1.default;
    jaco.naturalKanaOrder = naturalKanaOrder_1.default;
    jaco.naturalKanaSort = naturalKanaSort_1.default;
    jaco.Jaco = jaco_1.default;
})(jaco || (jaco = {}));
window['jaco'] = jaco; // tslint:disable-line:no-string-literal

/***/ }
/******/ ]);