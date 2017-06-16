"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var naturalKanaOrder_1 = require("./naturalKanaOrder");
/**
 * 配列の五十音順ソートをする
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param array 対象の配列
 * @return 五十音順にソートされた配列
 */
function default_1(array) {
  return array.sort(naturalKanaOrder_1.default);
}
exports.default = default_1;