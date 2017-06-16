"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var replaceFromMap_1 = require("./replaceFromMap");
/**
 * 半濁点を追加する
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
    return replaceFromMap_1.default(str, {
        は: 'ぱ', ひ: 'ぴ', ふ: 'ぷ', へ: 'ぺ', ほ: 'ぽ',
        ハ: 'パ', ヒ: 'ピ', フ: 'プ', ヘ: 'ペ', ホ: 'ポ'
    });
}
exports.default = default_1;