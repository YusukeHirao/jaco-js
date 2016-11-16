"use strict";

var jaco_1 = require("../jaco");
/**
 * ひらがな化
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 * @return ひらがな化された文字列
 */
function default_1(str) {
  var isCombinate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return new jaco_1.default(str).toHiragana(isCombinate).toString();
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ひらがな化
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 * @return ひらがな化された文字列
 */
exports.default = default_1;