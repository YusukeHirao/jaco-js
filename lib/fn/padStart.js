"use strict";
const substr_1 = require("./substr");
const arrayize_1 = require("../util/arrayize");
const pad_1 = require("../util/pad");
/**
 * 最終的な文字列が指定された長さに到達するように文字列を先頭に追加する
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param targetLength 最終的な長さ
 * @param padString 延長する文字列
 */
function default_1(str, targetLength, padString = ' ') {
    const thisArray = arrayize_1.default(str);
    const thisLength = thisArray.length;
    if (targetLength < thisLength) {
        str = substr_1.default(str, 0, targetLength);
    }
    else {
        const padded = pad_1.default(padString.toString(), targetLength - thisLength);
        str = padded + str;
    }
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 最終的な文字列が指定された長さに到達するように文字列を先頭に追加する
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param targetLength 最終的な長さ
 * @param padString 延長する文字列
 */
exports.default = default_1;
