"use strict";
const HIRAGANA_CHARS_1 = require("../const/HIRAGANA_CHARS");
const KANA_COMMON_CAHRS_1 = require("../const/KANA_COMMON_CAHRS");
const isOnly_1 = require("./isOnly");
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
/**
 * ひらがなだけで構成されているかどうか
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
exports.default = default_1;
