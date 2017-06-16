"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var replace_1 = require("./replace");
/**
 * 文字列を取り除く
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str  元の文字列
 * @param pattern  取り除く文字列
 */
function default_1(str, pattern) {
  return replace_1.default(str, pattern, '');
}
exports.default = default_1;