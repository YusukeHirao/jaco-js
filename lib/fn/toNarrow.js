"use strict";
const FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN_1 = require("../const/FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN");
const SPACE_CHARS_1 = require("../const/SPACE_CHARS");
const replace_1 = require("./replace");
const toNarrowJapnese_1 = require("./toNarrowJapnese");
const patternize_1 = require("../util/patternize");
const shift_1 = require("../util/shift");
/**
 * 半角に変換
 *
 * @version 2.0.0
 * @since 0.4.0
 * @param str 対象の文字列
 * @param convertJapaneseChars 日本語のカタカナなどを変換するかどうか
 */
function default_1(str, convertJapaneseChars = false) {
    // スペースの変換
    str = replace_1.default(str, patternize_1.default(SPACE_CHARS_1.SPACE_CHARS), ' ');
    // 半角英数記号の変換
    str = shift_1.default(str, patternize_1.default(FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN_1.FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN), -65248);
    if (convertJapaneseChars) {
        // 日本語カタカナ記号の変換
        str = toNarrowJapnese_1.default(str);
    }
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 半角に変換
 *
 * @version 2.0.0
 * @since 0.4.0
 * @param str 対象の文字列
 * @param convertJapaneseChars 日本語のカタカナなどを変換するかどうか
 */
exports.default = default_1;
