"use strict";

var SIGN_CHARS_1 = require("../const/SIGN_CHARS");
var SPACE_CHARS_1 = require("../const/SPACE_CHARS");
var replace_1 = require("./replace");
var patternize_1 = require("../util/patternize");
var shift_1 = require("../util/shift");
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;