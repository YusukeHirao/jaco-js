"use strict";
/**
 * 文字列のバイトサイズを返す
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
function default_1(str) {
    return encodeURIComponent(str).replace(/%../g, 'x').length;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列のバイトサイズを返す
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
exports.default = default_1;
