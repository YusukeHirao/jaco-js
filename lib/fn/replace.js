"use strict";
/**
 * 文字列をパターンで置換する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str  元の文字列
 * @param pattern  対象のパターン
 * @param replacement 置換する文字列
 */
function default_1(str, pattern, replacement) {
    const reg = pattern instanceof RegExp ? pattern : new RegExp(pattern.toString());
    return str.replace(reg, replacement.toString());
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列をパターンで置換する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str  元の文字列
 * @param pattern  対象のパターン
 * @param replacement 置換する文字列
 */
exports.default = default_1;
