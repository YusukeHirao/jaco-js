"use strict";
/**
 * 文字列を繰り返す
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param times 繰り返しの回数
 */
function default_1(str, times = 0) {
    let res = [];
    times = Math.floor(Math.max(times, 0));
    if (times === Infinity) {
        throw new RangeError('repeat count must be less than infinity');
    }
    while (times--) {
        res.push(str);
    }
    str = res.join('');
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列を繰り返す
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param times 繰り返しの回数
 */
exports.default = default_1;
