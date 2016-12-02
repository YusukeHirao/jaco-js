"use strict";
const jaco_1 = require("../jaco");
const addVoicedMarks_1 = require("./addVoicedMarks");
const HIRAGANA_CHARS_IGNORE_ITERATION_MARKS_1 = require("../const/HIRAGANA_CHARS_IGNORE_ITERATION_MARKS");
const KATAKANA_CHARS_IGNORE_ITERATION_MARKS_1 = require("../const/KATAKANA_CHARS_IGNORE_ITERATION_MARKS");
const KANA_WITH_ITERATION_MARKS_REGEXP = new RegExp(`([${HIRAGANA_CHARS_IGNORE_ITERATION_MARKS_1.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS}${KATAKANA_CHARS_IGNORE_ITERATION_MARKS_1.KATAKANA_CHARS_IGNORE_ITERATION_MARKS}])([ゝゞヽヾ])`);
/**
 * 繰り返し記号をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
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
 * @param str 対象の文字列
 * @return 置き換えた文字列
 */
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
    const converted = new jaco_1.default(beforeString).removeVoicedMarks();
    let str = '';
    switch (iterationMark) {
        case 'ゝ':
            {
                str = converted.toHiragana().toString();
            }
            break;
        case 'ヽ':
            {
                str = converted.toKatakana().toString();
            }
            break;
        case 'ゞ':
            {
                str = converted.toHiragana().toString();
                str = addVoicedMarks_1.default(str);
            }
            break;
        case 'ヾ':
            {
                str = converted.toKatakana().toString();
                str = addVoicedMarks_1.default(str);
            }
            break;
        default: {
        }
    }
    return beforeString + str;
}
