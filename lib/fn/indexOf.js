"use strict";
const is_1 = require("./is");
const slice_1 = require("./slice");
const split_1 = require("./split");
const arrayize_1 = require("../util/arrayize");
/**
 * 指定された文字列が最初に現れるインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 検索文字列
 * @param fromIndex 検索位置
 */
function default_1(str, search, fromIndex = 0) {
    const sliced = slice_1.default(str, fromIndex);
    const splited = split_1.default(sliced, search)[0];
    if (is_1.default(str, splited)) {
        return -1;
    }
    else {
        return arrayize_1.default(splited).length + fromIndex;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 指定された文字列が最初に現れるインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 検索文字列
 * @param fromIndex 検索位置
 */
exports.default = default_1;
