"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var slice_1 = require("./slice");
var split_1 = require("./split");
var arrayize_1 = require("../util/arrayize");
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
function default_1(str, search) {
    var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var sliced = slice_1.default(str, fromIndex);
    var splited = split_1.default(sliced, search)[0];
    if (is_1.default(str, splited)) {
        return -1;
    } else {
        return arrayize_1.default(splited).length + fromIndex;
    }
}
exports.default = default_1;