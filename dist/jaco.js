/**!
* jaco - v2.0.0
* revision: aa42e18a3728f13522627c7cdcabfceb7ea78433
* update: 2017-06-17
* Author: YusukeHirao []
* Github: git@github.com:jaco-project/jaco-js.git
* License: Licensed under the MIT License
*/

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * キーがパターン・値が置換文字列のハッシュマップによって置換する
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param convMap キーがパターン・値が置換文字列のハッシュマップ
 */
function default_1(str, convMap) {
    for (var needle in convMap) {
        if (convMap.hasOwnProperty(needle)) {
            var replace = convMap[needle];
            str = str.replace(new RegExp(needle, 'g'), replace);
        }
    }
    return str;
}
exports.default = default_1;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列を配列化する
 *
 * サロゲートペア文字列を考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @return 配列化された文字列
 */
function default_1(str) {
  return str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
}
exports.default = default_1;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列をパターンで置換する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str  元の文字列
 * @param pattern  対象のパターン
 * @param replacement 置換する文字列
 */
function default_1(str, pattern, replacement) {
  var reg = pattern instanceof RegExp ? pattern : new RegExp(pattern.toString());
  return str.replace(reg, replacement.toString());
}
exports.default = default_1;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var arrayize_1 = __webpack_require__(1);
/**
 * 指定した位置から指定した数だけ文字列を抽出
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param start 開始インデックス
 * @param length 指定数
 */
function default_1(str, start, length) {
    var array = arrayize_1.default(str);
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
    return res.join('');
}
exports.default = default_1;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = default_1;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列中のそれぞれのひと文字に対してUnicode番号を指定の数値ずらす
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param needle 対象のパターン
 * @param shiftNum ずらす数値
 * @return インスタンス自身
 */
function default_1(str, needle, shiftNum) {
    return str.replace(needle, function (char) {
        return String.fromCharCode(char.charCodeAt(0) + shiftNum);
    });
}
exports.default = default_1;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var replace_1 = __webpack_require__(2);
/**
 * 文字列を取り除く
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str  元の文字列
 * @param pattern  取り除く文字列
 */
function default_1(str, pattern) {
  return replace_1.default(str, pattern, '');
}
exports.default = default_1;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var replaceFromMap_1 = __webpack_require__(0);
/**
 * 全角カタカナに変換する
 *
 * @version 0.2.0
 * @since 0.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
    // カタカナ・濁点・半濁点の変換
    return replaceFromMap_1.default(str, {
        ｶﾞ: 'ガ', ｷﾞ: 'ギ', ｸﾞ: 'グ', ｹﾞ: 'ゲ', ｺﾞ: 'ゴ',
        ｻﾞ: 'ザ', ｼﾞ: 'ジ', ｽﾞ: 'ズ', ｾﾞ: 'ゼ', ｿﾞ: 'ゾ',
        ﾀﾞ: 'ダ', ﾁﾞ: 'ヂ', ﾂﾞ: 'ヅ', ﾃﾞ: 'デ', ﾄﾞ: 'ド',
        ﾊﾞ: 'バ', ﾋﾞ: 'ビ', ﾌﾞ: 'ブ', ﾍﾞ: 'ベ', ﾎﾞ: 'ボ',
        ﾊﾟ: 'パ', ﾋﾟ: 'ピ', ﾌﾟ: 'プ', ﾍﾟ: 'ペ', ﾎﾟ: 'ポ',
        ﾜﾞ: 'ヷ', ｲﾞ: 'ヸ', ｳﾞ: 'ヴ', ｴﾞ: 'ヹ', ｦﾞ: 'ヺ',
        ﾞ: '゛', ﾟ: '゜',
        ｧ: 'ァ', ｨ: 'ィ', ｩ: 'ゥ', ｪ: 'ェ', ｫ: 'ォ',
        ｬ: 'ャ', ｭ: 'ュ', ｮ: 'ョ',
        ｯ: 'ッ', ｰ: 'ー',
        ｱ: 'ア', ｲ: 'イ', ｳ: 'ウ', ｴ: 'エ', ｵ: 'オ',
        ｶ: 'カ', ｷ: 'キ', ｸ: 'ク', ｹ: 'ケ', ｺ: 'コ',
        ｻ: 'サ', ｼ: 'シ', ｽ: 'ス', ｾ: 'セ', ｿ: 'ソ',
        ﾀ: 'タ', ﾁ: 'チ', ﾂ: 'ツ', ﾃ: 'テ', ﾄ: 'ト',
        ﾅ: 'ナ', ﾆ: 'ニ', ﾇ: 'ヌ', ﾈ: 'ネ', ﾉ: 'ノ',
        ﾊ: 'ハ', ﾋ: 'ヒ', ﾌ: 'フ', ﾍ: 'ヘ', ﾎ: 'ホ',
        ﾏ: 'マ', ﾐ: 'ミ', ﾑ: 'ム', ﾒ: 'メ', ﾓ: 'モ',
        ﾔ: 'ヤ', ﾕ: 'ユ', ﾖ: 'ヨ',
        ﾗ: 'ラ', ﾘ: 'リ', ﾙ: 'ル', ﾚ: 'レ', ﾛ: 'ロ',
        ﾜ: 'ワ', ｦ: 'ヲ', ﾝ: 'ン'
    });
}
exports.default = default_1;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var replaceFromMap_1 = __webpack_require__(0);
/**
 * 濁点・半濁点とひらがな・かたかなを結合させる
 *
 * @version 2.0.0
 * @since 1.2.0
 * @param str 対象の文字列
 * @param convertOnly ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
 */
function combinateSoundMarks(str) {
    var convertOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!convertOnly) {
        // 結合文字に変換
        str = combinateSoundMarks(str, true);
        // 濁点・半濁点を結合する
        str = replaceFromMap_1.default(str, {
            // 濁点
            が: 'が', ぎ: 'ぎ', ぐ: 'ぐ', げ: 'げ', ご: 'ご',
            ざ: 'ざ', じ: 'じ', ず: 'ず', ぜ: 'ぜ', ぞ: 'ぞ',
            だ: 'だ', ぢ: 'ぢ', づ: 'づ', で: 'で', ど: 'ど',
            ば: 'ば', び: 'び', ぶ: 'ぶ', べ: 'べ', ぼ: 'ぼ',
            ガ: 'ガ', ギ: 'ギ', グ: 'グ', ゲ: 'ゲ', ゴ: 'ゴ',
            ザ: 'ザ', ジ: 'ジ', ズ: 'ズ', ゼ: 'ゼ', ゾ: 'ゾ',
            ダ: 'ダ', ヂ: 'ヂ', ヅ: 'ヅ', デ: 'デ', ド: 'ド',
            バ: 'バ', ビ: 'ビ', ブ: 'ブ', ベ: 'ベ', ボ: 'ボ',
            ヷ: 'ヷ', イ゙: 'ヸ', ヴ: 'ヴ', エ゙: 'ヹ', ヺ゙: 'ヲ',
            ゞ: 'ゞ', ヾ: 'ヾ',
            // 半濁点
            ぱ: 'ぱ', ぴ: 'ぴ', ぷ: 'ぷ', ぺ: 'ぺ', ぽ: 'ぽ',
            パ: 'パ', ピ: 'ピ', プ: 'プ', ペ: 'ペ', ポ: 'ポ'
        });
    } else {
        // ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
        str = replaceFromMap_1.default(str, {
            // 濁点
            "\u309B": "\u3099",
            ﾞ: "\u3099",
            // 半濁点
            "\u309C": "\u309A",
            ﾟ: "\u309A"
        });
    }
    return str;
}
exports.default = combinateSoundMarks;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 完全マッチ
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 比較する文字列
 * @param target 比較する文字列
 */
function default_1(str, target) {
  return str === target.toString();
}
exports.default = default_1;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 該当の文字だけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param characters 文字セット
 */
function default_1(str, characters) {
    var chars = characters.toString().replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
    return new RegExp('^[' + chars + ']+$', 'gm').test(str);
}
exports.default = default_1;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var remove_1 = __webpack_require__(6);
var replaceFromMap_1 = __webpack_require__(0);
/**
 * 濁点・半濁点を取り除く
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
 */
function default_1(str) {
    var ignoreSingleMark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!ignoreSingleMark) {
        // 濁点・半濁点単体の除去
        str = remove_1.default(str, /\u309B|\u3099|\uFF9E/g);
        str = remove_1.default(str, /\u309C|\u309A|\uFF9F/g);
    }
    str = replaceFromMap_1.default(str, {
        が: 'か', ぎ: 'き', ぐ: 'く', げ: 'け', ご: 'こ',
        ざ: 'さ', じ: 'し', ず: 'す', ぜ: 'せ', ぞ: 'そ',
        だ: 'た', ぢ: 'ち', づ: 'つ', で: 'て', ど: 'と',
        ば: 'は', び: 'ひ', ぶ: 'ふ', べ: 'へ', ぼ: 'ほ',
        ぱ: 'は', ぴ: 'ひ', ぷ: 'ふ', ぺ: 'へ', ぽ: 'ほ',
        ガ: 'カ', ギ: 'キ', グ: 'ク', ゲ: 'ケ', ゴ: 'コ',
        ザ: 'サ', ジ: 'シ', ズ: 'ス', ゼ: 'セ', ゾ: 'ソ',
        ダ: 'タ', ヂ: 'チ', ヅ: 'ツ', デ: 'テ', ド: 'ト',
        バ: 'ハ', ビ: 'ヒ', ブ: 'フ', ベ: 'ヘ', ボ: 'ホ',
        パ: 'ハ', ピ: 'ヒ', プ: 'フ', ペ: 'ヘ', ポ: 'ホ',
        ヷ: 'ワ', ヸ: 'イ', ヴ: 'ウ', ヹ: 'エ', ヺ: 'ヲ',
        ゞ: 'ゝ', ヾ: 'ヽ'
    });
    return str;
}
exports.default = default_1;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列の配列に分割する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param separator 区切り文字
 * @param limit 配列の数を指定
 */
function default_1(str, separator, limit) {
  var reg = separator instanceof RegExp ? separator : new RegExp(separator.toString());
  return str.split(reg, limit);
}
exports.default = default_1;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var KATAKANA_CHARS_1 = __webpack_require__(36);
var combinateSoundMarks_1 = __webpack_require__(8);
var replaceFromMap_1 = __webpack_require__(0);
var toWideKatakana_1 = __webpack_require__(7);
var patternize_1 = __webpack_require__(4);
var shift_1 = __webpack_require__(5);
/**
 * ひらがなに変換する
 *
 * 第一引数に true を渡した場合、濁点・半濁点は基本的に結合される
 * ヷヸヹヺは文字が存在しないため ひらがな + 結合文字でない濁点・半濁点 となる
 *
 * @version 0.2.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 */
function default_1(str) {
    var isCombinate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // 半角カタカナを全角カタカナへ
    str = toWideKatakana_1.default(str);
    // ヷヸヹヺの変換
    str = replaceFromMap_1.default(str, {
        ヷ: 'わ゛',
        ヸ: 'ゐ゛',
        ヹ: 'ゑ゛',
        ヺ: 'を゛'
    });
    // カタカナをひらがなへ(Unicodeの番号をずらす)
    str = shift_1.default(str, patternize_1.default(KATAKANA_CHARS_1.KATAKANA_CHARS), -96);
    // 濁点・半濁点を結合文字に変換
    if (isCombinate) {
        str = combinateSoundMarks_1.default(str);
    }
    return str;
}
exports.default = default_1;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var HIRAGANA_CHARS_1 = __webpack_require__(35);
var replace_1 = __webpack_require__(2);
var toWideKatakana_1 = __webpack_require__(7);
var patternize_1 = __webpack_require__(4);
var shift_1 = __webpack_require__(5);
/**
 * カタカナに変換する
 *
 * @version 0.2.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
 */
function default_1(str) {
    var toWide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    // 半角カタカナを全角カタカナへ
    if (toWide) {
        str = toWideKatakana_1.default(str);
    }
    // わ゛=> ヷ (濁点3種類対応 ※全角濁点・全角結合文字濁点・半角濁点)
    str = replace_1.default(str, /わ(?:\u309B|\u3099|\uFF9E)/g, 'ヷ');
    // ゐ゛=> ヸ (濁点3種類対応)
    str = replace_1.default(str, /ゐ(?:\u309B|\u3099|\uFF9E)/g, 'ヸ');
    // ゑ゛=> ヹ (濁点3種類対応)
    str = replace_1.default(str, /ゑ(?:\u309B|\u3099|\uFF9E)/g, 'ヹ');
    // を゛=> ヺ (濁点3種類対応)
    str = replace_1.default(str, /を(?:\u309B|\u3099|\uFF9E)/g, 'ヺ');
    // ひらがなをカタカナへ(Unicodeの番号をずらす)
    str = shift_1.default(str, patternize_1.default(HIRAGANA_CHARS_1.HIRAGANA_CHARS), 96);
    return str;
}
exports.default = default_1;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var toNarrowAlphanumeric_1 = __webpack_require__(25);
var toNarrowJapanese_1 = __webpack_require__(26);
var toNarrowSign_1 = __webpack_require__(28);
/**
 * 半角に変換
 *
 * @version 2.0.0
 * @since 0.4.0
 * @param str 対象の文字列
 * @param convertJapaneseChars 日本語のカタカナなどを変換するかどうか
 */
function default_1(str) {
    var convertJapaneseChars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // 英数字の変換
    str = toNarrowAlphanumeric_1.default(str);
    // スペース・記号の変換
    str = toNarrowSign_1.default(str);
    if (convertJapaneseChars) {
        // 日本語カタカナ記号の変換
        str = toNarrowJapanese_1.default(str);
    }
    return str;
}
exports.default = default_1;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var remove_1 = __webpack_require__(6);
var replaceFromMap_1 = __webpack_require__(0);
/**
 * 濁点を追加する
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
    // 濁点・半濁点単体の除去
    str = remove_1.default(str, /\u309B|\u3099|\uFF9E/g);
    str = remove_1.default(str, /\u309C|\u309A|\uFF9F/g);
    str = replaceFromMap_1.default(str, {
        か: 'が', き: 'ぎ', く: 'ぐ', け: 'げ', こ: 'ご',
        さ: 'ざ', し: 'じ', す: 'ず', せ: 'ぜ', そ: 'ぞ',
        た: 'だ', ち: 'ぢ', つ: 'づ', て: 'で', と: 'ど',
        は: 'ば', ひ: 'び', ふ: 'ぶ', へ: 'べ', ほ: 'ぼ',
        カ: 'ガ', キ: 'ギ', ク: 'グ', ケ: 'ゲ', コ: 'ゴ',
        サ: 'ザ', シ: 'ジ', ス: 'ズ', セ: 'ゼ', ソ: 'ゾ',
        タ: 'ダ', チ: 'ヂ', ツ: 'ヅ', テ: 'デ', ト: 'ド',
        ハ: 'バ', ヒ: 'ビ', フ: 'ブ', ヘ: 'ベ', ホ: 'ボ',
        ワ: 'ヷ', イ: 'ヸ', ウ: 'ヴ', エ: 'ヹ', ヺ: 'ヲ',
        ゝ: 'ゞ', ヽ: 'ヾ'
    });
    return str;
}
exports.default = default_1;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var arrayize_1 = __webpack_require__(1);
/**
 * 文字列から指定位置の文字を返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param index 指定位置
 */
function default_1(str) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return arrayize_1.default(str)[index] || '';
}
exports.default = default_1;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var HIRAGANA_CHARS_IGNORE_ITERATION_MARKS_1 = __webpack_require__(72);
var KATAKANA_CHARS_IGNORE_ITERATION_MARKS_1 = __webpack_require__(73);
var addVoicedMarks_1 = __webpack_require__(16);
var removeVoicedMarks_1 = __webpack_require__(11);
var toHiragana_1 = __webpack_require__(13);
var toKatakana_1 = __webpack_require__(14);
var KANA_WITH_ITERATION_MARKS_REGEXP = new RegExp("([" + HIRAGANA_CHARS_IGNORE_ITERATION_MARKS_1.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS + KATAKANA_CHARS_IGNORE_ITERATION_MARKS_1.KATAKANA_CHARS_IGNORE_ITERATION_MARKS + "])([\u309D\u309E\u30FD\u30FE])");
/**
 * 繰り返し記号をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
    while (KANA_WITH_ITERATION_MARKS_REGEXP.test(str)) {
        str = converter(str);
    }
    return str;
}
exports.default = default_1;
/**
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @return 置き換えた文字列
 */
function converter(str) {
    return str.replace(KANA_WITH_ITERATION_MARKS_REGEXP, replacer);
}
/**
 * @version 2.0.0
 * @since 2.0.0
 * @param matchAll
 * @param beforeString
 * @param iterationMark
 * @return 置き換えた文字列
 */
function replacer(matchAll, beforeString, iterationMark) {
    var str = removeVoicedMarks_1.default(beforeString);
    switch (iterationMark) {
        case 'ゝ':
            {
                str = toHiragana_1.default(str);
                break;
            }
        case 'ヽ':
            {
                str = toKatakana_1.default(str);
                break;
            }
        case 'ゞ':
            {
                str = toHiragana_1.default(str);
                str = addVoicedMarks_1.default(str);
                break;
            }
        case 'ヾ':
            {
                str = toKatakana_1.default(str);
                str = addVoicedMarks_1.default(str);
                break;
            }
        default:
            {
                // void
            }
    }
    return beforeString + str;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var HIRAGANA_CHARS_1 = __webpack_require__(35);
var KATAKANA_CHARS_1 = __webpack_require__(36);
var KANA_WITH_PROLONGED_SOUND_MARKS_PATTERN_REGEXP = new RegExp('[' + HIRAGANA_CHARS_1.HIRAGANA_CHARS + KATAKANA_CHARS_1.KATAKANA_CHARS + ']ー');
/**
 * 長音符をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
    while (KANA_WITH_PROLONGED_SOUND_MARKS_PATTERN_REGEXP.test(str)) {
        str = converter(str);
    }
    return str;
}
exports.default = default_1;
function converter(str) {
    return str.replace(/([あぁかゕがさざただなはばぱまやゃらわゎ])ー/g, '$1あ').replace(/([いぃきぎしじちぢにひびぴみりゐ])ー/g, '$1い').replace(/([うぅゔくぐすずつづぬふぶぷむゆゅる])ー/g, '$1う').replace(/([えぇけゖげせぜてでねへべぺめれゑ])ー/g, '$1え').replace(/([おぉこごそぞとどのほぼぽもよょろを])ー/g, '$1お').replace(/んー/g, 'んん').replace(/っー/g, 'っっ').replace(/([アァカヵガサザタダナハバパマヤャラワヮヷ])ー/g, '$1ア').replace(/([イィキギシジチヂニヒビピミリヰヸ])ー/g, '$1イ').replace(/([ウゥヴクグスズツヅヌフブプムユュル])ー/g, '$1ウ').replace(/([エェケヶゲセゼテデネヘベペメレヱヹ])ー/g, '$1エ').replace(/([オォコゴソゾトドノホボポモヨョロヲヺ])ー/g, '$1オ').replace(/ンー/g, 'ンン').replace(/ッー/g, 'ッッ');
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = __webpack_require__(9);
var slice_1 = __webpack_require__(22);
var split_1 = __webpack_require__(12);
var arrayize_1 = __webpack_require__(1);
/**
 * 指定された文字列が最初に現れるインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 検索文字列
 * @param fromIndex 検索位置
 */
function default_1(str, search) {
    var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var sliced = slice_1.default(str, fromIndex);
    var splited = split_1.default(sliced, search)[0];
    if (is_1.default(str, splited)) {
        return -1;
    } else {
        return arrayize_1.default(splited).length + fromIndex;
    }
}
exports.default = default_1;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var HIRAGANA_CHARS_1 = __webpack_require__(35);
var KANA_COMMON_CAHRS_1 = __webpack_require__(62);
var isOnly_1 = __webpack_require__(10);
/**
 * ひらがなだけで構成されているかどうか
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
function default_1(str) {
  return isOnly_1.default(str, HIRAGANA_CHARS_1.HIRAGANA_CHARS + KANA_COMMON_CAHRS_1.KANA_COMMON_CAHRS);
}
exports.default = default_1;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var arrayize_1 = __webpack_require__(1);
/**
 * 文字位置による抽出
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param start 開始インデックス
 * @param end 終了インデックス 省略すると最後まで
 */
function default_1(str, start, end) {
  var array = arrayize_1.default(str);
  var res = array.slice(start, end);
  return res.join('');
}
exports.default = default_1;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var substr_1 = __webpack_require__(3);
var arrayize_1 = __webpack_require__(1);
/**
 * 指定した位置の間の文字列を抽出
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param indexA インデックス
 * @param indexB インデックス
 */
function default_1(str, indexA, indexB) {
  var start = Math.max(Math.min(indexA, indexB), 0);
  var end = Math.min(Math.max(indexA, indexB), arrayize_1.default(str).length);
  var length = end - start;
  return substr_1.default(str, start, length);
}
exports.default = default_1;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var combinateSoundMarks_1 = __webpack_require__(8);
var replaceFromMap_1 = __webpack_require__(0);
/**
 * 小書き文字を基底文字に変換する
 *
 * TODO: test
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
    str = combinateSoundMarks_1.default(str);
    str = replaceFromMap_1.default(str, {
        ぁ: 'あ', ぃ: 'い', ぅ: 'う', ぇ: 'え', ぉ: 'お',
        っ: 'つ',
        ゃ: 'や', ゅ: 'ゆ', ょ: 'よ',
        ゎ: 'わ',
        ァ: 'ア', ィ: 'イ', ゥ: 'ウ', ェ: 'エ', ォ: 'オ',
        ヵ: 'カ', ㇰ: 'ク', ヶ: 'ケ',
        ㇱ: 'シ', ㇲ: 'ス',
        ッ: 'ツ', ㇳ: 'ト',
        ㇴ: 'ヌ', ㇵ: 'ハ',
        ㇶ: 'ヒ', ㇷ: 'フ', ㇸ: 'ヘ', ㇹ: 'ホ',
        ㇺ: 'ム',
        ャ: 'ヤ', ュ: 'ユ', ョ: 'ヨ',
        ㇻ: 'ラ', ㇼ: 'リ', ㇽ: 'ル', ㇾ: 'レ', ㇿ: 'ロ',
        ヮ: 'ワ'
    });
    return str;
}
exports.default = default_1;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var FULLWIDTH_ALPHA_CHARS_1 = __webpack_require__(69);
var FULLWIDTH_DIGIT_CHARS_1 = __webpack_require__(70);
var patternize_1 = __webpack_require__(4);
var shift_1 = __webpack_require__(5);
/**
 * 英数字を半角に変換
 *
 * @version 2.0.0
 * @since 1.3.0
 * @param str 対象の文字列
 */
function default_1(str) {
  return shift_1.default(str, patternize_1.default(FULLWIDTH_ALPHA_CHARS_1.FULLWIDTH_ALPHA_CHARS + FULLWIDTH_DIGIT_CHARS_1.FULLWIDTH_DIGIT_CHARS), -65248);
}
exports.default = default_1;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var toNarrowKatakana_1 = __webpack_require__(27);
var toNarrowSymbolForJapanese_1 = __webpack_require__(29);
/**
 * カタカナと日本語で使われる記号を半角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
function default_1(str) {
  // 半角カタカナへ
  str = toNarrowKatakana_1.default(str);
  // 半角記号へ
  str = toNarrowSymbolForJapanese_1.default(str);
  return str;
}
exports.default = default_1;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var replace_1 = __webpack_require__(2);
var replaceFromMap_1 = __webpack_require__(0);
var toKatakana_1 = __webpack_require__(14);
/**
 * 半角カタカナに変換する
 *
 * @version 0.6.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param fromHiragana ひらがなも変換する
 */
function default_1(str) {
    var fromHiragana = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // ひらがなを一旦全角カタカナに変換する
    if (fromHiragana) {
        str = toKatakana_1.default(str);
    }
    // 濁点の変換 (全角濁点2種類対応)
    str = replace_1.default(str, /\u309B|\u3099/g, "\uFF9E");
    // 半濁点の変換 (全角半濁点2種類対応)
    str = replace_1.default(str, /\u309C|\u309A/g, "\uFF9F");
    // カタカナの変換
    str = replaceFromMap_1.default(str, {
        ァ: 'ｧ', ィ: 'ｨ', ゥ: 'ｩ', ェ: 'ｪ', ォ: 'ｫ', ャ: 'ｬ',
        ュ: 'ｭ', ョ: 'ｮ', ッ: 'ｯ',
        ヵ: 'ｶ', ヶ: 'ｹ',
        ヮ: 'ﾜ',
        ー: 'ｰ',
        ア: 'ｱ', イ: 'ｲ', ウ: 'ｳ', エ: 'ｴ', オ: 'ｵ',
        カ: 'ｶ', キ: 'ｷ', ク: 'ｸ', ケ: 'ｹ', コ: 'ｺ',
        サ: 'ｻ', シ: 'ｼ', ス: 'ｽ', セ: 'ｾ', ソ: 'ｿ',
        タ: 'ﾀ', チ: 'ﾁ', ツ: 'ﾂ', テ: 'ﾃ', ト: 'ﾄ',
        ナ: 'ﾅ', ニ: 'ﾆ', ヌ: 'ﾇ', ネ: 'ﾈ', ノ: 'ﾉ',
        ハ: 'ﾊ', ヒ: 'ﾋ', フ: 'ﾌ', ヘ: 'ﾍ', ホ: 'ﾎ',
        マ: 'ﾏ', ミ: 'ﾐ', ム: 'ﾑ', メ: 'ﾒ', モ: 'ﾓ',
        ヤ: 'ﾔ', ユ: 'ﾕ', ヨ: 'ﾖ',
        ラ: 'ﾗ', リ: 'ﾘ', ル: 'ﾙ', レ: 'ﾚ', ロ: 'ﾛ',
        ワ: 'ﾜ', ン: 'ﾝ', ヰ: 'ｲ', ヱ: 'ｴ', ヲ: 'ｦ',
        ガ: 'ｶﾞ', ギ: 'ｷﾞ', グ: 'ｸﾞ', ゲ: 'ｹﾞ', ゴ: 'ｺﾞ',
        ザ: 'ｻﾞ', ジ: 'ｼﾞ', ズ: 'ｽﾞ', ゼ: 'ｾﾞ', ゾ: 'ｿﾞ',
        ダ: 'ﾀﾞ', ヂ: 'ﾁﾞ', ヅ: 'ﾂﾞ', デ: 'ﾃﾞ', ド: 'ﾄﾞ',
        バ: 'ﾊﾞ', ビ: 'ﾋﾞ', ブ: 'ﾌﾞ', ベ: 'ﾍﾞ', ボ: 'ﾎﾞ',
        パ: 'ﾊﾟ', ピ: 'ﾋﾟ', プ: 'ﾌﾟ', ペ: 'ﾍﾟ', ポ: 'ﾎﾟ',
        ヷ: 'ﾜﾞ', ヸ: 'ｲﾞ', ヴ: 'ｳﾞ', ヹ: 'ｴﾞ', ヺ: 'ｦﾞ'
    });
    return str;
}
exports.default = default_1;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var FULLWIDTH_SIGN_CHARS_1 = __webpack_require__(71);
var SPACE_CHARS_1 = __webpack_require__(63);
var replace_1 = __webpack_require__(2);
var patternize_1 = __webpack_require__(4);
var shift_1 = __webpack_require__(5);
/**
 * 記号を半角に変換
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
function default_1(str) {
  str = replace_1.default(str, patternize_1.default(SPACE_CHARS_1.SPACE_CHARS), ' ');
  str = shift_1.default(str, patternize_1.default(FULLWIDTH_SIGN_CHARS_1.FULLWIDTH_SIGN_CHARS), -65248);
  return str;
}
exports.default = default_1;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var replaceFromMap_1 = __webpack_require__(0);
/**
 * 日本語で使われる記号を半角に変換
 *
 * @version 2.0.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
function default_1(str) {
    str = replaceFromMap_1.default(str, {
        '。': '｡',
        '「': '｢',
        '」': '｣',
        '、': '､',
        '・': '･'
    });
    return str;
}
exports.default = default_1;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var convertIterationMarks_1 = __webpack_require__(18);
var convertProlongedSoundMarks_1 = __webpack_require__(19);
var toBasicLetter_1 = __webpack_require__(24);
var toHiragana_1 = __webpack_require__(13);
/**
 * よみの文字に変換する
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * TODO: test
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
  // ひらがな化
  str = toHiragana_1.default(str);
  // 小書き文字を基底文字に変換
  str = toBasicLetter_1.default(str);
  // 長音符を置き換える
  str = convertProlongedSoundMarks_1.default(str);
  // 繰り返し記号を置き換える
  str = convertIterationMarks_1.default(str);
  return str;
}
exports.default = default_1;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ALPHA_CHARS_1 = __webpack_require__(67);
var DIGIT_CHARS_1 = __webpack_require__(68);
var patternize_1 = __webpack_require__(4);
var shift_1 = __webpack_require__(5);
/**
 * 英数字を全角に変換
 *
 * @version 2.0.0
 * @since 1.3.0
 * @param str 対象の文字列
 */
function default_1(str) {
  str = shift_1.default(str, patternize_1.default(ALPHA_CHARS_1.ALPHA_CHARS + DIGIT_CHARS_1.DIGIT_CHARS), 65248);
  return str;
}
exports.default = default_1;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var toWideKatakana_1 = __webpack_require__(7);
var toWideSymbolForJapanese_1 = __webpack_require__(34);
/**
 * カタカナと日本語で使われる記号を全角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
function default_1(str) {
  // 全角カタカナへ
  str = toWideKatakana_1.default(str);
  // 全角記号へ
  str = toWideSymbolForJapanese_1.default(str);
  return str;
}
exports.default = default_1;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var SIGN_CHARS_1 = __webpack_require__(74);
var SPACE_CHARS_1 = __webpack_require__(63);
var replace_1 = __webpack_require__(2);
var patternize_1 = __webpack_require__(4);
var shift_1 = __webpack_require__(5);
/**
 * 記号を全角に変換
 *
 * @version 2.0.0
 * @since 1.3.0
 * @param str 対象の文字列
 */
function default_1(str) {
  str = replace_1.default(str, patternize_1.default(SPACE_CHARS_1.SPACE_CHARS), '　');
  str = shift_1.default(str, patternize_1.default(SIGN_CHARS_1.SIGN_CHARS), 65248);
  return str;
}
exports.default = default_1;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var replaceFromMap_1 = __webpack_require__(0);
/**
 * 日本語で使われる記号を全角に変換
 *
 * @version 2.0.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
function default_1(str) {
    str = replaceFromMap_1.default(str, {
        '｡': '。',
        '｢': '「',
        '｣': '」',
        '､': '、',
        '･': '・'
    });
    return str;
}
exports.default = default_1;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ひらがな
 *
 * [ぁ-ゖゝ-ゟ]
 *
 */
exports.HIRAGANA_CHARS = "\u3041-\u3096\u309D-\u309F";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * カタカナ
 *
 * [ァ-ヺヽ-ヿ]
 *
 */
exports.KATAKANA_CHARS = "\u30A1-\u30FA\u30FD\u30FF";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var replaceFromMap_1 = __webpack_require__(0);
/**
 * 半濁点を追加する
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
    return replaceFromMap_1.default(str, {
        は: 'ぱ', ひ: 'ぴ', ふ: 'ぷ', へ: 'ぺ', ほ: 'ぽ',
        ハ: 'パ', ヒ: 'ピ', フ: 'プ', ヘ: 'ペ', ホ: 'ポ'
    });
}
exports.default = default_1;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列のバイトサイズを返す
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
function default_1(str) {
  return encodeURIComponent(str).replace(/%../g, 'x').length;
}
exports.default = default_1;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var charAt_1 = __webpack_require__(17);
/**
 * 指定位置のUnicodeコードポイントを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
function default_1(str) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var char = charAt_1.default(str, index);
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
exports.default = default_1;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 再帰的に文字列連結をおこなう
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param ...args 文字列もしくはJacoインスタンス
 */
function concat() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return args.map(function (str) {
        if (Array.isArray(str)) {
            return str.map(function (_str) {
                return Array.isArray(_str) ? concat(_str) : _str;
            }).join('');
        } else {
            return str.toString();
        }
    }).join('');
}
exports.default = concat;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = __webpack_require__(9);
var substring_1 = __webpack_require__(23);
var arrayize_1 = __webpack_require__(1);
/**
 * 引数に指定された文字列が末尾と合致するか
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 合致対象文字列
 * @param position 末尾の位置
 */
function default_1(str, search, position) {
    var targetLength = arrayize_1.default(str).length;
    var searchLength = arrayize_1.default(search.toString()).length;
    if (!isFinite(position) || Math.floor(position) !== position || position > targetLength) {
        position = targetLength;
    }
    var end = position;
    var start = position - searchLength;
    var endStr = substring_1.default(str, start, end);
    return is_1.default(endStr, search);
}
exports.default = default_1;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 該当の文字のいずれかを含んでいるかどうか
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param characters 文字セット
 */
function default_1(str, characters) {
    var chars = characters.toString().replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
    var pattern = new RegExp('[' + chars + ']', 'gm');
    return pattern.test(str);
}
exports.default = default_1;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 小書き文字を含むかどうか
 *
 * TODO: test
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
  return (/[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/.test(str)
  );
}
exports.default = default_1;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * サロゲートペア文字列を含んでいるかどうか
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
function default_1(str) {
  return (/[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(str)
  );
}
exports.default = default_1;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ペアになっていないサロゲートコードポイントを含んでいるかどうか
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
function default_1(str) {
  return (/[\uD800-\uDBFF](?:[^\uDC00-\uDFFF]|$)|(?:^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]/.test(str)
  );
}
exports.default = default_1;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var indexOf_1 = __webpack_require__(20);
/**
 * 指定された文字列が最初に現れるインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 検索文字列
 * @param fromIndex 検索位置
 */
function default_1(str, search) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return indexOf_1.default(str, search, position) !== -1;
}
exports.default = default_1;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字が空かどうか
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
function default_1(str) {
  return str === '';
}
exports.default = default_1;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数字だけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 0.5.0
 * @param str 対象の文字列
 * @param negative 負の数値も含めてチェックするかどうか
 * @param floatingPoint 小数としてチェックするかどうか
 */
function default_1(str) {
    var negative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var floatingPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var pattern = '^';
    if (negative) {
        pattern += '-?';
    }
    if (floatingPoint) {
        pattern += '(?:[0-9]*\\.)?';
    }
    pattern += '[0-9]+$';
    return new RegExp(pattern).test(str);
}
exports.default = default_1;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var KANA_COMMON_CAHRS_1 = __webpack_require__(62);
var KATAKANA_CHARS_1 = __webpack_require__(36);
var isOnly_1 = __webpack_require__(10);
/**
 * カタカナだけで構成されているかどうか
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
function default_1(str) {
  return isOnly_1.default(str, KATAKANA_CHARS_1.KATAKANA_CHARS + KANA_COMMON_CAHRS_1.KANA_COMMON_CAHRS);
}
exports.default = default_1;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var arrayize_1 = __webpack_require__(1);
/**
 * 指定された文字列が最後に現れるインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 検索文字列
 * @param fromIndex 検索位置
 *
 */
function default_1(str, search) {
  var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

  return arrayize_1.default(str).lastIndexOf(search.toString(), fromIndex);
}
exports.default = default_1;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を純粋な配列で得る
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param regexp パターン
 */
function default_1(str, regexp) {
  var matches = str.match(regexp);
  return Array.prototype.concat.apply(matches || []);
}
exports.default = default_1;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var isOnlyHiragana_1 = __webpack_require__(21);
var removeVoicedMarks_1 = __webpack_require__(11);
var replaceFromMap_1 = __webpack_require__(0);
var toNarrow_1 = __webpack_require__(15);
var toPhoeticKana_1 = __webpack_require__(30);
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
    var _a = toPhoeticKana_1.default(toNarrow_1.default(a));
    var _b = toPhoeticKana_1.default(toNarrow_1.default(b));
    var _tmpA = void 0; // tempString
    var _tmpB = void 0; // tempString
    var phoneticA = _a.toString();
    var phoneticB = _b.toString();
    var unvoicedA = removeVoicedMarks_1.default(_a, true);
    var unvoicedB = removeVoicedMarks_1.default(_b, true);
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
            _tmpA = isOnlyHiragana_1.default(a[_i]) ? '0' : '1';
            _tmpB = isOnlyHiragana_1.default(b[_i]) ? '0' : '1';
            if (_tmpA < _tmpB) {
                return -1;
            } else if (_tmpA > _tmpB) {
                return 1;
            }
        }
        return 0;
    }
}
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
    return replaceFromMap_1.default(str, {
        あ: "\u3041", い: "\u3042", う: "\u3043", え: "\u3044", お: "\u3045",
        か: "\u3046", き: "\u3047", く: "\u3048", け: "\u3049", こ: "\u304A",
        さ: "\u304B", し: "\u304C", す: "\u304D", せ: "\u304E", そ: "\u304F",
        た: "\u3050", ち: "\u3052", つ: "\u3053", て: "\u3054", と: "\u3055",
        な: "\u3056", に: "\u3057", ぬ: "\u3058", ね: "\u3059", の: "\u305A",
        は: "\u305B", ひ: "\u305C", ふ: "\u305D", へ: "\u305E", ほ: "\u305F",
        ま: "\u3060", み: "\u3061", む: "\u3062", め: "\u3063", も: "\u3064",
        や: "\u3065", ゆ: "\u3066", よ: "\u3067",
        ら: "\u3068", り: "\u3069", る: "\u306A", れ: "\u306B", ろ: "\u306C",
        わ: "\u306D", ゐ: "\u306E", ゑ: "\u306F", を: "\u3070", ん: "\u3071",
        ゝ: "\u3072", ー: "\u3073"
    }).toString();
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var substr_1 = __webpack_require__(3);
var arrayize_1 = __webpack_require__(1);
var pad_1 = __webpack_require__(64);
/**
 * 最終的な文字列が指定された長さに到達するように文字列で延長する
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param targetLength 最終的な長さ
 * @param padString 延長する文字列
 */
function default_1(str, targetLength) {
    var padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

    var thisArray = arrayize_1.default(str);
    var thisLength = thisArray.length;
    if (targetLength < thisLength) {
        str = substr_1.default(str, 0, targetLength);
    } else {
        var padded = pad_1.default(padString.toString(), targetLength - thisLength);
        str += padded;
    }
    return str;
}
exports.default = default_1;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var substr_1 = __webpack_require__(3);
var arrayize_1 = __webpack_require__(1);
var pad_1 = __webpack_require__(64);
/**
 * 最終的な文字列が指定された長さに到達するように文字列を先頭に追加する
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param targetLength 最終的な長さ
 * @param padString 延長する文字列
 */
function default_1(str, targetLength) {
    var padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

    var thisArray = arrayize_1.default(str);
    var thisLength = thisArray.length;
    if (targetLength < thisLength) {
        str = substr_1.default(str, 0, targetLength);
    } else {
        var padded = pad_1.default(padString.toString(), targetLength - thisLength);
        str = padded + str;
    }
    return str;
}
exports.default = default_1;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ペアになっていないサロゲートコードポイントの削除
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
function default_1(str) {
  str = str.replace(/[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g, '$1');
  str = str.replace(/(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]/g, '$1');
  return str;
}
exports.default = default_1;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列を繰り返す
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param times 繰り返しの回数
 */
function default_1(str) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var res = [];
    times = Math.floor(Math.max(times, 0));
    if (times === Infinity) {
        throw new RangeError('repeat count must be less than infinity');
    }
    while (times--) {
        res.push(str);
    }
    str = res.join('');
    return str;
}
exports.default = default_1;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var split_1 = __webpack_require__(12);
var arrayize_1 = __webpack_require__(1);
/**
 * 正規表現にマッチしたインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param pattern パターン
 */
function default_1(str, pattern) {
  var before = split_1.default(str, pattern)[0] || '';
  return arrayize_1.default(before).length;
}
exports.default = default_1;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var substr_1 = __webpack_require__(3);
var arrayize_1 = __webpack_require__(1);
/**
 * 引数に指定された文字列が先頭と合致するか
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 合致対象文字列
 * @param position 先頭の位置
 */
function default_1(str, search) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var _search = search.toString();
  return substr_1.default(str, position, arrayize_1.default(_search).length) === _search;
}
exports.default = default_1;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * パターンとマッチするかどうか
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param pattern パターン
 */
function default_1(str, pattern) {
  return pattern instanceof RegExp ? pattern.test(str) : str === pattern.toString();
}
exports.default = default_1;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var remove_1 = __webpack_require__(6);
var replace_1 = __webpack_require__(2);
var toNarrow_1 = __webpack_require__(15);
/**
 * 数字に変換する
 *
 * @version 0.5.0
 * @since 0.5.0
 * @param str 対象の文字列
 * @param negative 負の値を許可してマイナスをつけるかどうか
 * @param floatingPoint 小数を許可してドットをつけるかどうか
 */
function default_1(str) {
    var negative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var floatingPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    // 半角化
    str = toNarrow_1.default(str);
    // 数字・ハイフン（マイナス）・ドット意外を削除
    str = remove_1.default(str, /[^0-9\.\-]/gm);
    if (negative) {
        // 最初のにくるハイフンをnに一時的に変換
        str = replace_1.default(str, /^-/, 'n');
    }
    // ハイフンを全て削除
    str = remove_1.default(str, /-/g);
    if (negative) {
        // ハイフンを元に戻す
        str = replace_1.default(str, 'n', '-');
    }
    if (floatingPoint) {
        // 文字列中で一番最初にくるドットを_に一時的に変換
        str = replace_1.default(str, /\.([0-9])/, '_$1');
    }
    // ドットを全て削除
    str = remove_1.default(str, /\./g);
    if (floatingPoint) {
        // ドットを元に戻す
        str = replace_1.default(str, '_', '.');
    }
    return str;
}
exports.default = default_1;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var toWideAlphanumeric_1 = __webpack_require__(31);
var toWideJapanese_1 = __webpack_require__(32);
var toWideSign_1 = __webpack_require__(33);
/**
 * 全角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
function default_1(str) {
    // 半角英数記号の変換
    str = toWideAlphanumeric_1.default(str);
    // スペースの変換
    str = toWideSign_1.default(str);
    // 日本語カタカナ記号の変換
    str = toWideJapanese_1.default(str);
    return str;
}
exports.default = default_1;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 濁点／半濁点(結合文字含む)・長音符
 *
 * [゛゜ー]
 *
 */
exports.KANA_COMMON_CAHRS = "\u3099-\u309C\u30FC";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * タブ [HT]
 *
 */
var CHARACTER_TABULATION = "\t";
/**
 * 垂直タブ [VT]
 */
var LINE_TABULATION = "\x0B";
/**
 * フォームフィード [FF]
 */
var FORM_FEED = "\f";
/**
 * 空白文字
 */
var SPACE = " ";
/**
 * Next line [NEL]
 */
var NEXT_LINE = "\x85";
/**
 * ノーブレークスペース [NBSP]
 */
var NO_BREAK_SPACE = "\xA0";
/**
 * n幅 クワタ
 */
var EN_QUAD = "\u2000";
/**
 * m幅 クワタ
 */
var EM_QUAD = "\u2001";
/**
 * n幅 空白
 */
var EN_SPACE = "\u2002";
/**
 * m幅 空白
 */
var EM_SPACE = "\u2003";
/**
 * 1/3 m幅 空白
 */
var THREE_PER_EM_SPACE = "\u2004";
/**
 * 1/4 m幅 空白
 */
var FOUR_PER_EM_SPACE = "\u2005";
/**
 * 1/6 m幅 空白
 */
var SIX_PER_EM_SPACE = "\u2006";
/**
 * Figure space
 *
 * > In fonts with monospaced digits, equal to the width of one digit. HTML/XML named entity: &numsp;
 */
var FIGURE_SPACE = "\u2007";
/**
 * Punctuation space
 *
 * > As wide as the narrow punctuation in a font, i.e. the advance width of the period or comma. HTML/XML named entity: &puncsp;
 */
var PUNCTUATION_SPACE = "\u2008";
/**
 * 細い空白
 */
var THIN_SPACE = "\u2009";
/**
 * Mongolian vowel separator
 *
 * > MVS. A narrow space character, used in Mongolian to cause the final two characters of a word to take on different shapes.
 * > It is no longer classified as space character (i.e. in Zs category) in Unicode 6.3.0, even though it was in previous versions of the standard.
 */
var MONGOLIAN_VOWEL_SEPARATOR = "\u180E";
/**
 * より細い空白
 *
 */
var HAIR_SPACE = "\u200A";
/**
 * ゼロ幅空白
 */
var ZERO_WIDTH_SPACE = "\u200B";
/**
 * ゼロ幅非接合子 [ZWNJ]
 *
 * > 合字を使用する文字体系のコンピュータ化で用いられる制御文字である。
 * > 本来ならば合字として連結される2つの文字の間にZWNJが置かれると、その2つの文字はそれぞれ末尾形および頭字形で表示される。
 * > スペースを間に置くことでも同じ効果は得られるが、スペースよりも両者の文字を近づけたい、または単語と形態素を連結したい場合にZWNJが用いられる。
 */
var ZERO_WIDTH_NON_JOINER = "\u200C";
/**
 * ゼロ幅接合子 [ZWJ]
 *
 * > アラビア文字やブラーフミー系文字のような複雑な表記体系のコンピュータによる組版において使われる制御文字である。
 * > 本来ならば接合しない形で表示される文字の後ろにゼロ幅接合子が置かれると、接合する形で表示される。
 * > 2つの絵文字の間にZWJが置かれると、新しい形が表示されることもある。
 * > たとえば、2人の大人の絵文字と1人または2人の子供の絵文字をZWJでつなぐと家族の絵文字が表示される。
 */
var ZERO_WIDTH_JOINER = "\u200D";
/**
 * 単語結合子
 *
 * > 日本語などのわかち書きをしない言語においては、改行は文章の途中の任意の位置で行われるが、単語の途中など改行してほしくない箇所に単語結合子を入れることで、その場所では改行されなくなる。
 * > このコードはUnicode バージョン3.2（2002年発行）でU+2060 word joiner (HTML: &#8288;)として定義された。
 * > それ以前より、Unicodeには同じ働きをするゼロ幅ノーブレークスペース(ZWNBSP: zero width no-break space)が存在していた。
 * > しかし、そのコードポイント U+FEFF はファイルの先頭のバイトオーダーマークとしても使用されている。
 * > この曖昧さを避けるために、ゼロ幅ノーブレークスペースと完全に同じ意味と使用法を持つ単語結合子がUnicode 3.2で追加され、「単語結合の意味では新しい文字だけを使うことを強く推奨する」としている。
 */
var WORD_JOINER = "\u2060";
/**
 * Line separator
 */
var LINE_SEPARATOR = "\u2028";
/**
 * Paragraph separator
 */
var PARAGRAPH_SEPARATOR = "\u2028";
/**
 * 狭いノーブレークスペース
 */
var NARROW_NO_BREAK_SPACE = "\u202F";
/**
 * Medium mathematical space
 *
 * > MMSP. Used in mathematical formulae.
 * > Four-eighteenths of an em.
 * > In mathematical typography, the widths of spaces are usually given in integral multiples of an eighteenth of an em, and 4/18 em may be used in several situations,
 * > for example between the a and the + and between the + and the b in the expression a + b.
 * >  HTML/XML named entity: &MediumSpace;
 */
var MEDIUM_MATHMETICAL_SPACE = "\u205F";
/**
 * 全角空白
 */
var IDEOGRAPHIC_SPACE = "\u3000";
/**
 * ゼロ幅ノーブレークスペース
 */
var ZERO_WIDTH_NO_BREAK_SPACE = "\uFEFF";
/**
 * ホワイトスペース（空白文字）類
 *
 * 改行（`\r|\n|\r\n`）は含まない
 *
 */
exports.SPACE_CHARS = [CHARACTER_TABULATION, LINE_TABULATION, FORM_FEED, SPACE, NEXT_LINE, NO_BREAK_SPACE, EN_QUAD, EM_QUAD, EN_SPACE, EM_SPACE, THREE_PER_EM_SPACE, FOUR_PER_EM_SPACE, SIX_PER_EM_SPACE, FIGURE_SPACE, PUNCTUATION_SPACE, THIN_SPACE, MONGOLIAN_VOWEL_SEPARATOR, HAIR_SPACE, ZERO_WIDTH_SPACE, ZERO_WIDTH_NON_JOINER, ZERO_WIDTH_JOINER, WORD_JOINER, LINE_SEPARATOR, PARAGRAPH_SEPARATOR, NARROW_NO_BREAK_SPACE, MEDIUM_MATHMETICAL_SPACE, IDEOGRAPHIC_SPACE, ZERO_WIDTH_NO_BREAK_SPACE].join('');

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var arrayize_1 = __webpack_require__(1);
/**
 * 指定数の文字列長になるように繰り返して埋める
 *
 * - サロゲートペアを考慮
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param length 指定の文字列長
 * @return 埋められた文字列
 */
function default_1(str, length) {
    var pad = [];
    var padStringArray = arrayize_1.default(str);
    var padLength = padStringArray.length;
    for (var i = 0; i < length; i++) {
        var char = padStringArray[i % padLength];
        pad.push(char);
    }
    return pad.join('');
}
exports.default = default_1;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var naturalKanaOrder_1 = __webpack_require__(52);
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
exports.default = default_1;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var addSemivoicedMarks_1 = __webpack_require__(37);
var addVoicedMarks_1 = __webpack_require__(16);
var byteSize_1 = __webpack_require__(38);
var charAt_1 = __webpack_require__(17);
var charCodeAt_1 = __webpack_require__(39);
var combinateSoundMarks_1 = __webpack_require__(8);
var concat_1 = __webpack_require__(40);
var convertIterationMarks_1 = __webpack_require__(18);
var convertProlongedSoundMarks_1 = __webpack_require__(19);
var endWith_1 = __webpack_require__(41);
var has_1 = __webpack_require__(42);
var hasSmallLetter_1 = __webpack_require__(43);
var hasSurrogatePair_1 = __webpack_require__(44);
var hasUnpairedSurrogate_1 = __webpack_require__(45);
var includes_1 = __webpack_require__(46);
var indexOf_1 = __webpack_require__(20);
var is_1 = __webpack_require__(9);
var isEmpty_1 = __webpack_require__(47);
var isNumeric_1 = __webpack_require__(48);
var isOnly_1 = __webpack_require__(10);
var isOnlyHiragana_1 = __webpack_require__(21);
var isOnlyKatakana_1 = __webpack_require__(49);
var lastIndexOf_1 = __webpack_require__(50);
var matches_1 = __webpack_require__(51);
var padEnd_1 = __webpack_require__(53);
var padStart_1 = __webpack_require__(54);
var remove_1 = __webpack_require__(6);
var removeUnpairedSurrogate_1 = __webpack_require__(55);
var removeVoicedMarks_1 = __webpack_require__(11);
var repeat_1 = __webpack_require__(56);
var replace_1 = __webpack_require__(2);
var replaceFromMap_1 = __webpack_require__(0);
var search_1 = __webpack_require__(57);
var slice_1 = __webpack_require__(22);
var split_1 = __webpack_require__(12);
var startsWith_1 = __webpack_require__(58);
var substr_1 = __webpack_require__(3);
var substring_1 = __webpack_require__(23);
var test_1 = __webpack_require__(59);
var toBasicLetter_1 = __webpack_require__(24);
var toHiragana_1 = __webpack_require__(13);
var toKatakana_1 = __webpack_require__(14);
var toNarrow_1 = __webpack_require__(15);
var toNarrowAlphanumeric_1 = __webpack_require__(25);
var toNarrowJapanese_1 = __webpack_require__(26);
var toNarrowKatakana_1 = __webpack_require__(27);
var toNarrowSign_1 = __webpack_require__(28);
var toNarrowSymbolForJapanese_1 = __webpack_require__(29);
var toNumeric_1 = __webpack_require__(60);
var toPhoeticKana_1 = __webpack_require__(30);
var toWide_1 = __webpack_require__(61);
var toWideAlphanumeric_1 = __webpack_require__(31);
var toWideJapanese_1 = __webpack_require__(32);
var toWideKatakana_1 = __webpack_require__(7);
var toWideSign_1 = __webpack_require__(33);
var toWideSymbolForJapanese_1 = __webpack_require__(34);
var arrayize_1 = __webpack_require__(1);
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
         * TODO: test
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
         * TODO: test
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
         * TODO: test
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

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 半角英字
 *
 * [A-Za-z]
 *
 */
exports.ALPHA_CHARS = 'A-Za-z';

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 半角数字
 *
 * [0-9]
 *
 */
exports.DIGIT_CHARS = '0-9';

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 全角英字
 *
 * [ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ]
 *
 */
exports.FULLWIDTH_ALPHA_CHARS = "\uFF21-\uFF3A\uFF41-\uFF5A";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 全角数字
 *
 * [０１２３４５６７８９]
 *
 */
exports.FULLWIDTH_DIGIT_CHARS = "\uFF10-\uFF19";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 全角記号
 *
 * [！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～]
 *
 */
exports.FULLWIDTH_SIGN_CHARS = "\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF5E";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ひらがな（繰り返し記号・合字なし）
 *
 * [ぁ-ゖ]
 *
 */
exports.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS = "\u3041-\u3096";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * カタカナ（繰り返し記号・合字なし）
 *
 * [ァ-ヺ]
 *
 */
exports.KATAKANA_CHARS_IGNORE_ITERATION_MARKS = "\u30A1-\u30FA";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 記号
 *
 * [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]
 *
 */
exports.SIGN_CHARS = " -/:-@[-`{-~";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var addSemivoicedMarks_1 = __webpack_require__(37);
var addVoicedMarks_1 = __webpack_require__(16);
var byteSize_1 = __webpack_require__(38);
var charAt_1 = __webpack_require__(17);
var charCodeAt_1 = __webpack_require__(39);
var combinateSoundMarks_1 = __webpack_require__(8);
var concat_1 = __webpack_require__(40);
var convertIterationMarks_1 = __webpack_require__(18);
var convertProlongedSoundMarks_1 = __webpack_require__(19);
var endWith_1 = __webpack_require__(41);
var has_1 = __webpack_require__(42);
var hasSmallLetter_1 = __webpack_require__(43);
var hasSurrogatePair_1 = __webpack_require__(44);
var hasUnpairedSurrogate_1 = __webpack_require__(45);
var includes_1 = __webpack_require__(46);
var indexOf_1 = __webpack_require__(20);
var is_1 = __webpack_require__(9);
var isEmpty_1 = __webpack_require__(47);
var isNumeric_1 = __webpack_require__(48);
var isOnly_1 = __webpack_require__(10);
var isOnlyHiragana_1 = __webpack_require__(21);
var isOnlyKatakana_1 = __webpack_require__(49);
var lastIndexOf_1 = __webpack_require__(50);
var matches_1 = __webpack_require__(51);
var naturalKanaOrder_1 = __webpack_require__(52);
var naturalKanaSort_1 = __webpack_require__(65);
var padEnd_1 = __webpack_require__(53);
var padStart_1 = __webpack_require__(54);
var remove_1 = __webpack_require__(6);
var removeUnpairedSurrogate_1 = __webpack_require__(55);
var removeVoicedMarks_1 = __webpack_require__(11);
var repeat_1 = __webpack_require__(56);
var replace_1 = __webpack_require__(2);
var replaceFromMap_1 = __webpack_require__(0);
var search_1 = __webpack_require__(57);
var slice_1 = __webpack_require__(22);
var split_1 = __webpack_require__(12);
var startsWith_1 = __webpack_require__(58);
var substr_1 = __webpack_require__(3);
var substring_1 = __webpack_require__(23);
var test_1 = __webpack_require__(59);
var toBasicLetter_1 = __webpack_require__(24);
var toHiragana_1 = __webpack_require__(13);
var toKatakana_1 = __webpack_require__(14);
var toNarrow_1 = __webpack_require__(15);
var toNarrowAlphanumeric_1 = __webpack_require__(25);
var toNarrowJapanese_1 = __webpack_require__(26);
var toNarrowKatakana_1 = __webpack_require__(27);
var toNarrowSign_1 = __webpack_require__(28);
var toNarrowSymbolForJapanese_1 = __webpack_require__(29);
var toNumeric_1 = __webpack_require__(60);
var toPhoeticKana_1 = __webpack_require__(30);
var toWide_1 = __webpack_require__(61);
var toWideAlphanumeric_1 = __webpack_require__(31);
var toWideJapanese_1 = __webpack_require__(32);
var toWideKatakana_1 = __webpack_require__(7);
var toWideSign_1 = __webpack_require__(33);
var toWideSymbolForJapanese_1 = __webpack_require__(34);
var jaco_1 = __webpack_require__(66);
// tslint:disable-next-line:no-any
function jaco(str) {
    return new jaco_1.default(str);
}
// tslint:disable:no-namespace no-mergeable-namespace
(function (jaco) {
    'use strict';

    jaco.version = '2.0.0-beta';
    jaco.addSemivoicedMarks = addSemivoicedMarks_1.default;
    jaco.addVoicedMarks = addVoicedMarks_1.default;
    jaco.byteSize = byteSize_1.default;
    jaco.charAt = charAt_1.default;
    jaco.charCodeAt = charCodeAt_1.default;
    jaco.combinateSoundMarks = combinateSoundMarks_1.default;
    jaco.concat = concat_1.default;
    jaco.convertIterationMarks = convertIterationMarks_1.default;
    jaco.convertProlongedSoundMarks = convertProlongedSoundMarks_1.default;
    jaco.endWith = endWith_1.default;
    jaco.has = has_1.default;
    jaco.hasSmallLetter = hasSmallLetter_1.default;
    jaco.hasSurrogatePair = hasSurrogatePair_1.default;
    jaco.hasUnpairedSurrogate = hasUnpairedSurrogate_1.default;
    jaco.includes = includes_1.default;
    jaco.indexOf = indexOf_1.default;
    jaco.is = is_1.default;
    jaco.isEmpty = isEmpty_1.default;
    jaco.isNumeric = isNumeric_1.default;
    jaco.isOnly = isOnly_1.default;
    jaco.isOnlyHiragana = isOnlyHiragana_1.default;
    jaco.isOnlyKatakana = isOnlyKatakana_1.default;
    jaco.lastIndexOf = lastIndexOf_1.default;
    jaco.matches = matches_1.default;
    jaco.naturalKanaOrder = naturalKanaOrder_1.default;
    jaco.naturalKanaSort = naturalKanaSort_1.default;
    jaco.padEnd = padEnd_1.default;
    jaco.padStart = padStart_1.default;
    jaco.remove = remove_1.default;
    jaco.removeUnpairedSurrogate = removeUnpairedSurrogate_1.default;
    jaco.removeVoicedMarks = removeVoicedMarks_1.default;
    jaco.repeat = repeat_1.default;
    jaco.replace = replace_1.default;
    jaco.replaceFromMap = replaceFromMap_1.default;
    jaco.search = search_1.default;
    jaco.slice = slice_1.default;
    jaco.split = split_1.default;
    jaco.startsWith = startsWith_1.default;
    jaco.substr = substr_1.default;
    jaco.substring = substring_1.default;
    jaco.test = test_1.default;
    jaco.toBasicLetter = toBasicLetter_1.default;
    jaco.toHiragana = toHiragana_1.default;
    jaco.toKatakana = toKatakana_1.default;
    jaco.toNarrow = toNarrow_1.default;
    jaco.toNarrowAlphanumeric = toNarrowAlphanumeric_1.default;
    jaco.toNarrowJapanese = toNarrowJapanese_1.default;
    jaco.toNarrowKatakana = toNarrowKatakana_1.default;
    jaco.toNarrowSign = toNarrowSign_1.default;
    jaco.toNarrowSymbolForJapanese = toNarrowSymbolForJapanese_1.default;
    jaco.toNumeric = toNumeric_1.default;
    jaco.toPhoeticKana = toPhoeticKana_1.default;
    jaco.toWide = toWide_1.default;
    jaco.toWideAlphanumeric = toWideAlphanumeric_1.default;
    jaco.toWideJapanese = toWideJapanese_1.default;
    jaco.toWideKatakana = toWideKatakana_1.default;
    jaco.toWideSign = toWideSign_1.default;
    jaco.toWideSymbolForJapanese = toWideSymbolForJapanese_1.default;
})(jaco || (jaco = {}));
window['jaco'] = jaco; // tslint:disable-line:no-string-literal

/***/ })
/******/ ]);