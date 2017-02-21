"use strict";

var arrayize_1 = require("../util/arrayize");
/**
 * 指定された文字列が最後に現れるインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 検索文字列
 * @param fromIndex 検索位置
 *
 */
function default_1(str, search) {
  var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

  return arrayize_1.default(str).lastIndexOf(search.toString(), fromIndex);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;