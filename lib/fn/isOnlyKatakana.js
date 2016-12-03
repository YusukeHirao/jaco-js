"use strict";
const KANA_COMMON_CAHRS_1 = require("../const/KANA_COMMON_CAHRS");
const KATAKANA_CHARS_1 = require("../const/KATAKANA_CHARS");
const isOnly_1 = require("./isOnly");
/**
 * カタカナだけで構成されているかどうか
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
function default_1(str) {
    return isOnly_1.default(str, KATAKANA_CHARS_1.KATAKANA_CHARS + KANA_COMMON_CAHRS_1.KANA_COMMON_CAHRS);
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * カタカナだけで構成されているかどうか
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
exports.default = default_1;
