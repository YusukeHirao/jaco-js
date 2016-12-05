"use strict";
const toWideKatakana_1 = require("./toWideKatakana");
const toWideSymbolForJapanese_1 = require("./toWideSymbolForJapanese");
/**
 * カタカナと日本語で使われる記号を全角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
function default_1(str) {
    // 全角カタカナへ
    str = toWideKatakana_1.default(str);
    // 全角記号へ
    str = toWideSymbolForJapanese_1.default(str);
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * カタカナと日本語で使われる記号を全角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
exports.default = default_1;
