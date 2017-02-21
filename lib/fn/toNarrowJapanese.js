"use strict";

var toNarrowKatakana_1 = require("./toNarrowKatakana");
var toNarrowSymbolForJapanese_1 = require("./toNarrowSymbolForJapanese");
/**
 * カタカナと日本語で使われる記号を半角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
function default_1(str) {
  // 半角カタカナへ
  str = toNarrowKatakana_1.default(str);
  // 半角記号へ
  str = toNarrowSymbolForJapanese_1.default(str);
  return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;