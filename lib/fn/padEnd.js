"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var substr_1 = require("./substr");
var arrayize_1 = require("../util/arrayize");
var pad_1 = require("../util/pad");
/**
 * 最終的な文字列が指定された長さに到達するように文字列で延長する
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param targetLength 最終的な長さ
 * @param padString 延長する文字列
 */
function default_1(str, targetLength) {
    var padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

    var thisArray = arrayize_1.default(str);
    var thisLength = thisArray.length;
    if (targetLength < thisLength) {
        str = substr_1.default(str, 0, targetLength);
    } else {
        var padded = pad_1.default(padString.toString(), targetLength - thisLength);
        str += padded;
    }
    return str;
}
exports.default = default_1;