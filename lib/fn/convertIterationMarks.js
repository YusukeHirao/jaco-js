"use strict";
const jaco_1 = require("../jaco");
const HIRAGANA_CHARS_IGNORE_ITERATION_MARKS_1 = require("../const/HIRAGANA_CHARS_IGNORE_ITERATION_MARKS");
const KATAKANA_CHARS_IGNORE_ITERATION_MARKS_1 = require("../const/KATAKANA_CHARS_IGNORE_ITERATION_MARKS");
const KANA_WITH_ITERATION_MARKS_REGEXP = new RegExp(`([${HIRAGANA_CHARS_IGNORE_ITERATION_MARKS_1.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS}${KATAKANA_CHARS_IGNORE_ITERATION_MARKS_1.KATAKANA_CHARS_IGNORE_ITERATION_MARKS}])([ゝゞヽヾ])`);
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
    const converted = new jaco_1.default(beforeString).removeVoicedMarks();
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
        default: {
        }
    }
    return beforeString + converted;
}
