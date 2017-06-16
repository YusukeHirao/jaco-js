"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var replaceFromMap_1 = require("./replaceFromMap");
/**
 * 日本語で使われる記号を半角に変換
 *
 * @version 2.0.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
function default_1(str) {
    str = replaceFromMap_1.default(str, {
        '。': '｡',
        '「': '｢',
        '」': '｣',
        '、': '､',
        '・': '･'
    });
    return str;
}
exports.default = default_1;