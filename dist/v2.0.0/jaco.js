/**!
* jaco - v2.0.0
* revision: d7a51b987e39e80c093b0aeea0586a8595f9bdb7
* update: 2016-11-16
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ALPHANUMERIC_CHARS_WITH_SIGN_1 = __webpack_require__(7);
var FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN_1 = __webpack_require__(8);
var HIRAGANA_CHARS_1 = __webpack_require__(9);
var HIRAGANA_CHARS_IGNORE_ITERATION_MARKS_1 = __webpack_require__(10);
var KANA_COMMON_CAHRS_1 = __webpack_require__(11);
var KATAKANA_CHARS_1 = __webpack_require__(12);
var KATAKANA_CHARS_IGNORE_ITERATION_MARKS_1 = __webpack_require__(13);
var SPACE_CHARS_1 = __webpack_require__(14);
var toPattern_1 = __webpack_require__(15);
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
     *
     * // newなしでも生成できる
     * var b = Jaco("あああ");
     * ```
     *
     * @version 0.2.0
     * @since 0.1.0
     * @param str 対象の文字列
     */
    function Jaco(str) {
        _classCallCheck(this, Jaco);

        // newつけずに呼んだ際はtrue
        if (!(this instanceof Jaco)) {
            return new Jaco(str);
        }
        this._str = str.toString();
    }
    /**
     * 明示もしくは暗黙の文字列変換メソッド
     *
     * @version 0.1.0
     * @since 0.1.0
     * @return インスタンス自身が保持する文字列
     */


    _createClass(Jaco, [{
        key: "toString",
        value: function toString() {
            return this._str;
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
         * 文字列連結をおこなう
         *
         * @version 2.0.0
         * @since 0.2.0
         * @return インスタンス自身
         */

    }, {
        key: "concat",
        value: function concat() {
            for (var _len = arguments.length, likeStrings = Array(_len), _key = 0; _key < _len; _key++) {
                likeStrings[_key] = arguments[_key];
            }

            this._str += likeStrings.join('');
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
            // TODO: replaceメソッドの型が (string | RegExp) だとコンパイルエラー TSv2.0.0時点
            this._str = this._str.replace(pattern, replacement);
            return this;
        }
        /**
         * 文字位置による抽出
         * (非破壊的メソッド)
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param from 開始インデックス
         * @param to 終了インデックス 省略すると最後まで
         * @return 抽出した文字列からなるJacoインスタンス
         */

    }, {
        key: "slice",
        value: function slice(from, to) {
            return new Jaco(this._str.slice(from, to));
        }
        /**
         * 指定した位置から指定した数だけ文字列を抽出
         * (非破壊的メソッド)
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param start 開始インデックス
         * @param length 指定数
         * @return 抽出した文字列からなるJacoインスタンス
         */

    }, {
        key: "substr",
        value: function substr(start, length) {
            return new Jaco(this._str.slice(start, length));
        }
        /**
         * 指定した位置の間の文字列を抽出
         * (非破壊的メソッド)
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param indexA インデックス
         * @param indexB インデックス
         * @return 抽出した文字列からなるJacoインスタンス
         */

    }, {
        key: "substring",
        value: function substring(indexA, indexB) {
            return new Jaco(this._str.substring(indexA, indexB));
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
            this._str = this._str.toLowerCase();
            return this;
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
            this._str = this._str.toUpperCase();
            return this;
        }
        /**
         * 文字列を取り除く
         *
         * @version 0.2.0
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
         * 先頭と末尾の空白を取り除く
         *
         * [\s]で判定するのでほとんどの空白文字はヒットする
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return インスタンス自身
         */

    }, {
        key: "trim",
        value: function trim() {
            return this.remove(/^\s*|\s*$/g);
        }
        /**
         * 文字列の長さを返す
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return 文字列数
         */

    }, {
        key: "size",
        value: function size() {
            return this._str.length;
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
            return encodeURIComponent(this._str).replace(/%../g, 'x').length;
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
            return this._str === '';
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
            return new Jaco(this._str);
        }
        /**
         * パターンとマッチするかどうか
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param pattern パターン
         * @return 結果の真偽
         */

    }, {
        key: "test",
        value: function test(pattern) {
            if (typeof pattern === 'string') {
                return this._str === pattern;
            } else {
                return pattern.test(this._str);
            }
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
            this._str = new Jaco(element).concat(this).toString();
            return this;
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
            return this._str === target.toString();
        }
        /**
         * 該当の文字を含んでいるかどうか
         *
         * @version 0.3.0
         * @since 0.3.0
         * @param target 比較する文字列
         * @return 結果の真偽
         */

    }, {
        key: "has",
        value: function has(target) {
            return this._str.indexOf(target.toString()) !== -1;
        }
        /**
         * 該当の文字だけで構成されているかどうか
         *
         * @version 1.1.0
         * @since 0.2.0
         * @param characters 文字セット
         * @return 結果の真偽
         */

    }, {
        key: "isOnly",
        value: function isOnly(characters) {
            return this.test(new RegExp('^[' + characters + ']+$', 'gm'));
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
         * 数値に変換する
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return 数値
         */

    }, {
        key: "toNumber",
        value: function toNumber() {
            return parseFloat(this._str);
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
         * [非推奨] 濁点・半濁点を結合文字に変換
         *
         * メソッド名変更およびAPI更新につき非推奨
         *
         * @deprecated v2.0.0削除予定
         * @see [combinateSoundMarks](#combinatesoundmarks)
         * @version 0.2.0
         * @since 0.1.0
         * @return インスタンス自身
         */

    }, {
        key: "combinate",
        value: function combinate() {
            // 濁点・半濁点を結合文字に変換
            return this.replaceMap({
                // 濁点
                "\u309B": "\u3099",
                // 半濁点
                "\u309C": "\u309A"
            });
        }
        /**
         * 濁点・半濁点を結合するか、もしくは結合文字に変換
         *
         * @deprecated
         * @version 1.2.0
         * @since 1.2.0
         * @return インスタンス自身
         */

    }, {
        key: "combinateSoundMarks",
        value: function combinateSoundMarks() {
            var isConvertCombiningSoundMarks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!isConvertCombiningSoundMarks) {
                // 濁点・半濁点を結合文字に変換
                this.combinateSoundMarks(true);
                // 濁点・半濁点を結合する
                return this.replaceMap({
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
                // 濁点・半濁点を結合文字に変換
                return this.replaceMap({
                    // 濁点
                    "\u309B": "\u3099",
                    // 半濁点
                    "\u309C": "\u309A"
                });
            }
        }
        /**
         * ひらがなに変換する
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
            this.replaceMap({
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
            // わ゛=> ヷ (濁点3種類対応)
            this.replace(/\u308F(?:\u309B|\u3099|\uFF9E)/g, "\u30F7");
            // ゐ゛=> ヸ (濁点3種類対応)
            this.replace(/\u3090(?:\u309B|\u3099|\uFF9E)/g, "\u30F8");
            // ゑ゛=> ヹ (濁点3種類対応)
            this.replace(/\u3091(?:\u309B|\u3099|\uFF9E)/g, "\u30F9");
            // を゛=> ヺ (濁点3種類対応)
            this.replace(/\u3092(?:\u309B|\u3099|\uFF9E)/g, "\u30FA");
            // ひらがなをカタカナへ(Unicodeの番号をずらす)
            this._shift(toPattern_1.default(HIRAGANA_CHARS_1.HIRAGANA_CHARS), 96);
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
            this.replaceMap({
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
            this.replaceMap({
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
         * 日本語で使われる記号を半角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: "toNarrowJapneseSymbol",
        value: function toNarrowJapneseSymbol() {
            this.replaceMap({
                '。': '｡',
                '「': '｢',
                '」': '｣',
                '、': '､',
                '・': '･'
            });
            return this;
        }
        /**
         * 日本語で使われる記号を全角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: "toWideJapneseSymbol",
        value: function toWideJapneseSymbol() {
            this.replaceMap({
                '｡': '。',
                '｢': '「',
                '｣': '」',
                '､': '、',
                '･': '・'
            });
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
            this.toNarrowJapneseSymbol();
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
            this.toWideJapneseSymbol();
            return this;
        }
        /**
         * 半角に変換
         *
         * @version 0.4.0
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
            return this.replaceMap({
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
         * 半濁点を追加する
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自信
         */

    }, {
        key: "addSemivoicedMarks",
        value: function addSemivoicedMarks() {
            return this.replaceMap({
                'は': 'ぱ', 'ひ': 'ぴ', 'ふ': 'ぷ', 'へ': 'ぺ', 'ほ': 'ぽ',
                'ハ': 'パ', 'ヒ': 'ピ', 'フ': 'プ', 'ヘ': 'ペ', 'ホ': 'ポ'
            });
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
            return this.replaceMap({
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
         * 長音符をかなに置き換える
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自信
         */

    }, {
        key: "convertProlongedSoundMarks",
        value: function convertProlongedSoundMarks() {
            var kanaWithProlongedSoundMarksPattern = new RegExp('[' + HIRAGANA_CHARS_1.HIRAGANA_CHARS + KATAKANA_CHARS_1.KATAKANA_CHARS + ']ー');
            var converted = this._str;
            var conv = function conv(_str) {
                _str = _str.replace(/([あぁかゕがさざただなはばぱまやゃらわゎ])ー/g, '$1あ').replace(/([いぃきぎしじちぢにひびぴみりゐ])ー/g, '$1い').replace(/([うぅゔくぐすずつづぬふぶぷむゆゅる])ー/g, '$1う').replace(/([えぇけゖげせぜてでねへべぺめれゑ])ー/g, '$1え').replace(/([おぉこごそぞとどのほぼぽもよょろを])ー/g, '$1お').replace(/んー/g, 'んん').replace(/っー/g, 'っっ').replace(/([アァカヵガサザタダナハバパマヤャラワヮヷ])ー/g, '$1ア').replace(/([イィキギシジチヂニヒビピミリヰヸ])ー/g, '$1イ').replace(/([ウゥヴクグスズツヅヌフブプムユュル])ー/g, '$1ウ').replace(/([エェケヶゲセゼテデネヘベペメレヱヹ])ー/g, '$1エ').replace(/([オォコゴソゾトドノホボポモヨョロヲヺ])ー/g, '$1オ').replace(/ンー/g, 'ンン').replace(/ッー/g, 'ッッ');
                return _str;
            };
            while (kanaWithProlongedSoundMarksPattern.test(converted)) {
                converted = conv(converted);
            }
            this._str = converted;
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
            var kanaWithIterationMarks = new RegExp('([' + HIRAGANA_CHARS_IGNORE_ITERATION_MARKS_1.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS + KATAKANA_CHARS_IGNORE_ITERATION_MARKS_1.KATAKANA_CHARS_IGNORE_ITERATION_MARKS + '])([ゝゞヽヾ])');
            var conv = function conv(_str) {
                return _str.replace(kanaWithIterationMarks, function ($0, $1, $2) {
                    var beforeString = $1;
                    var iterationMark = $2;
                    var converted = new Jaco($1).removeVoicedMarks();
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
                });
            };
            while (kanaWithIterationMarks.test(this._str)) {
                this._str = conv(this._str);
            }
            return this;
        }
        /**
         * 小書き文字を基底文字に変換する
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自身
         */

    }, {
        key: "toBasicLetter",
        value: function toBasicLetter() {
            this.combinateSoundMarks().replaceMap({
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
         * 小書き文字を含むかどうか
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return 小書き文字を含むかどうか
         */

    }, {
        key: "hasSmallLetter",
        value: function hasSmallLetter() {
            return (/[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/.test(this._str)
            );
        }
        /**
         * よみの文字に変換する
         * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
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
         * キーがパターン・値が置換文字列のハッシュマップによって置換する
         *
         * @version 2.0.0
         * @since 0.1.0
         * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
         * @return インスタンス自身
         */

    }, {
        key: "replaceMap",
        value: function replaceMap(convMap) {
            for (var needle in convMap) {
                if (convMap.hasOwnProperty(needle)) {
                    var replace = convMap[needle];
                    this._str = this._str.replace(new RegExp(needle, 'g'), replace);
                }
            }
            return this;
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
            this._str = this._str.replace(needle, function (char) {
                return String.fromCharCode(char.charCodeAt(0) + shiftNum);
            });
            return this;
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
    return new jaco_1.default(str).replaceMap({
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * 半角英数記号
 *
 * [!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~]
 *
 */

exports.ALPHANUMERIC_CHARS_WITH_SIGN = "\\u0020-\\u007E";

/***/ },
/* 8 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * 全角英数記号
 *
 * [！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～]
 *
 */

exports.FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN = "\\uFF01-\\uFF5F";

/***/ },
/* 9 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * ひらがな
 *
 * [ぁ-ゖゝ-ゟ]
 *
 */

exports.HIRAGANA_CHARS = "\\u3041-\\u3096\\u309D-\\u309F";

/***/ },
/* 10 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * ひらがな（繰り返し記号・合字なし）
 *
 * [ぁ-ゖ]
 *
 */

exports.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS = "\\u3041-\\u3096";

/***/ },
/* 11 */
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
/* 12 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * カタカナ
 *
 * [ァ-ヺヽ-ヿ]
 *
 */

exports.KATAKANA_CHARS = "\\u30A1-\\u30FA\\u30FD\\u30FF";

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

exports.KATAKANA_CHARS_IGNORE_ITERATION_MARKS = "\\u30A1-\\u30FA";

/***/ },
/* 14 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * スペース
 *
 * 仕様上、実際には「\u0009\u0020\u00A0\u2002〜\u200B\u3000\uFEFF'」すべて「\s」に含まれる
 *
 */

exports.SPACE_CHARS = "\\s\\n\\t\\u0009\\u0020\\u00A0\\u2002-\\u200B\\u3000\\uFEFF";

/***/ },
/* 15 */
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
  return new RegExp('[' + chars + ']', 'g');
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var hiraganaOnly_1 = __webpack_require__(1);
var hiraganize_1 = __webpack_require__(3);
var katakanaOnly_1 = __webpack_require__(4);
var katakanize_1 = __webpack_require__(5);
var naturalKanaOrder_1 = __webpack_require__(2);
var naturalKanaSort_1 = __webpack_require__(6);
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