"use strict";
const replaceFromMap_1 = require("./replaceFromMap");
/**
 * 半濁点を追加する
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 * @return インスタンス自信
 */
function default_1(str) {
    return replaceFromMap_1.default(str, {
        'は': 'ぱ', 'ひ': 'ぴ', 'ふ': 'ぷ', 'へ': 'ぺ', 'ほ': 'ぽ',
        'ハ': 'パ', 'ヒ': 'ピ', 'フ': 'プ', 'ヘ': 'ペ', 'ホ': 'ポ',
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 半濁点を追加する
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 * @return インスタンス自信
 */
exports.default = default_1;
