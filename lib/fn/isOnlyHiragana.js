"use strict";

var HIRAGANA_CHARS_1 = require("../const/HIRAGANA_CHARS");
var KANA_COMMON_CAHRS_1 = require("../const/KANA_COMMON_CAHRS");
var isOnly_1 = require("./isOnly");
/**
 * ひらがなだけで構成されているかどうか
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
function default_1(str) {
  return isOnly_1.default(str, HIRAGANA_CHARS_1.HIRAGANA_CHARS + KANA_COMMON_CAHRS_1.KANA_COMMON_CAHRS);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;