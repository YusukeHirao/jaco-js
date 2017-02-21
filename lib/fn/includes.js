"use strict";

var indexOf_1 = require("./indexOf");
/**
 * 指定された文字列が最初に現れるインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 検索文字列
 * @param fromIndex 検索位置
 */
function default_1(str, search) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return indexOf_1.default(str, search, position) !== -1;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;