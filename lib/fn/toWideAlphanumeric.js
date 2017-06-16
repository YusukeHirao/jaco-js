"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ALPHA_CHARS_1 = require("../const/ALPHA_CHARS");
var DIGIT_CHARS_1 = require("../const/DIGIT_CHARS");
var patternize_1 = require("../util/patternize");
var shift_1 = require("../util/shift");
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