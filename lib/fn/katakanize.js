"use strict";
const jaco_1 = require("../jaco");
/**
 * カタカナ化
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 * @return カタカナ化された文字列
 */
function default_1(str, toWide = true) {
    return new jaco_1.default(str).toKatakana(toWide).toString();
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * カタカナ化
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 * @return カタカナ化された文字列
 */
exports.default = default_1;
