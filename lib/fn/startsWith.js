"use strict";
const substr_1 = require("./substr");
const arrayize_1 = require("../util/arrayize");
/**
 * 引数に指定された文字列が先頭と合致するか
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 合致対象文字列
 * @param position 先頭の位置
 */
function default_1(str, search, position = 0) {
    const _search = search.toString();
    return substr_1.default(str, position, arrayize_1.default(_search).length) === _search;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 引数に指定された文字列が先頭と合致するか
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 合致対象文字列
 * @param position 先頭の位置
 */
exports.default = default_1;
