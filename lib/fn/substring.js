"use strict";
const substr_1 = require("./substr");
const arrayize_1 = require("../util/arrayize");
/**
 * 指定した位置の間の文字列を抽出
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param indexA インデックス
 * @param indexB インデックス
 */
function default_1(str, indexA, indexB) {
    const start = Math.max(Math.min(indexA, indexB), 0);
    const end = Math.min(Math.max(indexA, indexB), arrayize_1.default(str).length);
    const length = end - start;
    return substr_1.default(str, start, length);
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 指定した位置の間の文字列を抽出
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param indexA インデックス
 * @param indexB インデックス
 */
exports.default = default_1;
