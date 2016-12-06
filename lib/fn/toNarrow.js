"use strict";
const toNarrowAlphanumeric_1 = require("./toNarrowAlphanumeric");
const toNarrowJapanese_1 = require("./toNarrowJapanese");
const toNarrowSign_1 = require("./toNarrowSign");
/**
 * 半角に変換
 *
 * @version 2.0.0
 * @since 0.4.0
 * @param str 対象の文字列
 * @param convertJapaneseChars 日本語のカタカナなどを変換するかどうか
 */
function default_1(str, convertJapaneseChars = false) {
    // 英数字の変換
    str = toNarrowAlphanumeric_1.default(str);
    // スペース・記号の変換
    str = toNarrowSign_1.default(str);
    if (convertJapaneseChars) {
        // 日本語カタカナ記号の変換
        str = toNarrowJapanese_1.default(str);
    }
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 半角に変換
 *
 * @version 2.0.0
 * @since 0.4.0
 * @param str 対象の文字列
 * @param convertJapaneseChars 日本語のカタカナなどを変換するかどうか
 */
exports.default = default_1;
