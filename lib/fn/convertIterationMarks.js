"use strict";

var HIRAGANA_CHARS_IGNORE_ITERATION_MARKS_1 = require("../const/HIRAGANA_CHARS_IGNORE_ITERATION_MARKS");
var KATAKANA_CHARS_IGNORE_ITERATION_MARKS_1 = require("../const/KATAKANA_CHARS_IGNORE_ITERATION_MARKS");
var addVoicedMarks_1 = require("./addVoicedMarks");
var removeVoicedMarks_1 = require("./removeVoicedMarks");
var toHiragana_1 = require("./toHiragana");
var toKatakana_1 = require("./toKatakana");
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
Object.defineProperty(exports, "__esModule", { value: true });
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
            }
            break;
        case 'ヽ':
            {
                str = toKatakana_1.default(str);
            }
            break;
        case 'ゞ':
            {
                str = toHiragana_1.default(str);
                str = addVoicedMarks_1.default(str);
            }
            break;
        case 'ヾ':
            {
                str = toKatakana_1.default(str);
                str = addVoicedMarks_1.default(str);
            }
            break;
        default:
            {}
    }
    return beforeString + str;
}