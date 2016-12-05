"use strict";
const FULLWIDTH_ALPHA_CHARS_1 = require("../const/FULLWIDTH_ALPHA_CHARS");
const FULLWIDTH_DIGIT_CHARS_1 = require("../const/FULLWIDTH_DIGIT_CHARS");
const patternize_1 = require("../util/patternize");
const shift_1 = require("../util/shift");
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 英数字を半角に変換
 *
 * @version 2.0.0
 * @since 1.3.0
 * @param str 対象の文字列
 */
exports.default = default_1;
