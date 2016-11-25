"use strict";
/**
 * 文字列中のそれぞれのひと文字に対してUnicode番号を指定の数値ずらす
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param needle 対象のパターン
 * @param shiftNum ずらす数値
 * @return インスタンス自身
 */
function default_1(str, needle, shiftNum) {
    return str.replace(needle, (char) => {
        return String.fromCharCode(char.charCodeAt(0) + shiftNum);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列中のそれぞれのひと文字に対してUnicode番号を指定の数値ずらす
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param needle 対象のパターン
 * @param shiftNum ずらす数値
 * @return インスタンス自身
 */
exports.default = default_1;
