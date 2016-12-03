"use strict";
const ALPHANUMERIC_CHARS_WITH_SIGN_1 = require("../const/ALPHANUMERIC_CHARS_WITH_SIGN");
const replace_1 = require("./replace");
const toWideJapnese_1 = require("./toWideJapnese");
const patternize_1 = require("../util/patternize");
const shift_1 = require("../util/shift");
/**
 * 全角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
function default_1(str) {
    // スペースの変換
    str = replace_1.default(str, ' ', '\u3000');
    // 日本語カタカナ記号の変換
    str = toWideJapnese_1.default(str);
    // 半角英数記号の変換
    str = shift_1.default(str, patternize_1.default(ALPHANUMERIC_CHARS_WITH_SIGN_1.ALPHANUMERIC_CHARS_WITH_SIGN), 65248);
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 全角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
exports.default = default_1;
