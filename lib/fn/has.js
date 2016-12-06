"use strict";
/**
 * 該当の文字のいずれかを含んでいるかどうか
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param characters 文字セット
 */
function default_1(str, characters) {
    const chars = characters
        .toString()
        .replace(/\\/g, '\\\\')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        .replace(/\[/g, '\\[')
        .replace(/\]/g, '\\]');
    const pattern = new RegExp('[' + chars + ']', 'gm');
    return pattern.test(str);
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 該当の文字のいずれかを含んでいるかどうか
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param characters 文字セット
 */
exports.default = default_1;
