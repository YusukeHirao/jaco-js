"use strict";
const is_1 = require("./is");
const substring_1 = require("./substring");
const arrayize_1 = require("../util/arrayize");
/**
 * 引数に指定された文字列が末尾と合致するか
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 合致対象文字列
 * @param position 末尾の位置
 */
function default_1(str, search, position) {
    const targetLength = arrayize_1.default(str).length;
    const searchLength = arrayize_1.default(search.toString()).length;
    if (!isFinite(position) || Math.floor(position) !== position || position > targetLength) {
        position = targetLength;
    }
    const end = position;
    const start = position - searchLength;
    const endStr = substring_1.default(str, start, end);
    return is_1.default(endStr, search);
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 引数に指定された文字列が末尾と合致するか
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 合致対象文字列
 * @param position 末尾の位置
 */
exports.default = default_1;
