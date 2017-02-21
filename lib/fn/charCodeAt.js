"use strict";

var charAt_1 = require("./charAt");
/**
 * 指定位置のUnicodeコードポイントを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
function default_1(str) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var char = charAt_1.default(str, index);
    if (!char) {
        return NaN;
    }
    if (char.length === 1) {
        return char.charCodeAt(0);
    } else {
        var first = char.charCodeAt(0);
        var second = char.charCodeAt(1);
        var code = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        return code;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;