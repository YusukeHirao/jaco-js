"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var substr_1 = require("./substr");
var arrayize_1 = require("../util/arrayize");
/**
 * 引数に指定された文字列が先頭と合致するか
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 合致対象文字列
 * @param position 先頭の位置
 */
function default_1(str, search) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var _search = search.toString();
  return substr_1.default(str, position, arrayize_1.default(_search).length) === _search;
}
exports.default = default_1;