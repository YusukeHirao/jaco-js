"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var arrayize_1 = require("../util/arrayize");
/**
 * 指定した位置から指定した数だけ文字列を抽出
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param start 開始インデックス
 * @param length 指定数
 */
function default_1(str, start, length) {
    var array = arrayize_1.default(str);
    var thisLength = array.length;
    if (length == null || length < 0 || thisLength < length) {
        length = thisLength;
    }
    if (start < 0) {
        start = thisLength + start;
    }
    var end = Math.max(start + length, start);
    start = Math.min(start + length, start);
    var res = array.slice(start, end);
    return res.join('');
}
exports.default = default_1;