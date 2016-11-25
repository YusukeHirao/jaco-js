"use strict";
const arrayize_1 = require("./arrayize");
/**
 * 指定数の文字列長になるように繰り返して埋める
 *
 * - サロゲートペアを考慮
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param length 指定の文字列長
 * @return 埋められた文字列
 */
function default_1(str, length) {
    const pad = [];
    const padStringArray = arrayize_1.default(str);
    const padLength = padStringArray.length;
    for (let i = 0; i < length; i++) {
        const char = padStringArray[i % padLength];
        pad.push(char);
    }
    return pad.join('');
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 指定数の文字列長になるように繰り返して埋める
 *
 * - サロゲートペアを考慮
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param length 指定の文字列長
 * @return 埋められた文字列
 */
exports.default = default_1;
