"use strict";

var is_1 = require("./is");
var substring_1 = require("./substring");
var arrayize_1 = require("../util/arrayize");
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
    var targetLength = arrayize_1.default(str).length;
    var searchLength = arrayize_1.default(search.toString()).length;
    if (!isFinite(position) || Math.floor(position) !== position || position > targetLength) {
        position = targetLength;
    }
    var end = position;
    var start = position - searchLength;
    var endStr = substring_1.default(str, start, end);
    return is_1.default(endStr, search);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;