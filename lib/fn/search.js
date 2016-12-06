"use strict";
const split_1 = require("./split");
const arrayize_1 = require("../util/arrayize");
/**
 * 正規表現にマッチしたインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param pattern パターン
 */
function default_1(str, pattern) {
    const before = split_1.default(str, pattern)[0] || '';
    return arrayize_1.default(before).length;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 正規表現にマッチしたインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param pattern パターン
 */
exports.default = default_1;
