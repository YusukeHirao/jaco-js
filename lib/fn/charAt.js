"use strict";
const arrayize_1 = require("../util/arrayize");
/**
 * 文字列から指定位置の文字を返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param index 指定位置
 */
function default_1(str, index = 0) {
    return arrayize_1.default(str)[index] || '';
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列から指定位置の文字を返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param index 指定位置
 */
exports.default = default_1;
