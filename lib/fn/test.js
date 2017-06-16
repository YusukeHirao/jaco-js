"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * パターンとマッチするかどうか
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param pattern パターン
 */
function default_1(str, pattern) {
  return pattern instanceof RegExp ? pattern.test(str) : str === pattern.toString();
}
exports.default = default_1;