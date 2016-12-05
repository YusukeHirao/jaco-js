"use strict";
const FULLWIDTH_SIGN_CHARS_1 = require("../const/FULLWIDTH_SIGN_CHARS");
const SPACE_CHARS_1 = require("../const/SPACE_CHARS");
const replace_1 = require("./replace");
const toNarrowAlphanumeric_1 = require("./toNarrowAlphanumeric");
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
    // 英数字の変換
    str = toNarrowAlphanumeric_1.default(str);
    // スペースの変換
    str = replace_1.default(str, patternize_1.default(SPACE_CHARS_1.SPACE_CHARS), ' ');
    // 記号の変換
    str = shift_1.default(str, patternize_1.default(FULLWIDTH_SIGN_CHARS_1.FULLWIDTH_SIGN_CHARS), -65248);
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
