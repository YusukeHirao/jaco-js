"use strict";

var toWideAlphanumeric_1 = require("./toWideAlphanumeric");
var toWideJapanese_1 = require("./toWideJapanese");
var toWideSign_1 = require("./toWideSign");
/**
 * 全角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
function default_1(str) {
    // 半角英数記号の変換
    str = toWideAlphanumeric_1.default(str);
    // スペースの変換
    str = toWideSign_1.default(str);
    // 日本語カタカナ記号の変換
    str = toWideJapanese_1.default(str);
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;