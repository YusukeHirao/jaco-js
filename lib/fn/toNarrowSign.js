"use strict";
const FULLWIDTH_SIGN_CHARS_1 = require("../const/FULLWIDTH_SIGN_CHARS");
const SPACE_CHARS_1 = require("../const/SPACE_CHARS");
const replace_1 = require("./replace");
const patternize_1 = require("../util/patternize");
const shift_1 = require("../util/shift");
/**
 * 記号を半角に変換
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
function default_1(str) {
    str = replace_1.default(str, SPACE_CHARS_1.SPACE_CHARS, ' ');
    str = shift_1.default(str, patternize_1.default(FULLWIDTH_SIGN_CHARS_1.FULLWIDTH_SIGN_CHARS), -65248);
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 記号を半角に変換
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
exports.default = default_1;
