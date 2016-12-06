"use strict";
const remove_1 = require("./remove");
const replace_1 = require("./replace");
const toNarrow_1 = require("./toNarrow");
/**
 * 数字に変換する
 *
 * @version 0.5.0
 * @since 0.5.0
 * @param str 対象の文字列
 * @param negative 負の値を許可してマイナスをつけるかどうか
 * @param floatingPoint 小数を許可してドットをつけるかどうか
 */
function default_1(str, negative = false, floatingPoint = false) {
    // 半角化
    str = toNarrow_1.default(str);
    // 数字・ハイフン（マイナス）・ドット意外を削除
    str = remove_1.default(str, /[^0-9\.\-]/gm);
    if (negative) {
        // 最初のにくるハイフンをnに一時的に変換
        str = replace_1.default(str, /^-/, 'n');
    }
    // ハイフンを全て削除
    str = remove_1.default(str, /-/g);
    if (negative) {
        // ハイフンを元に戻す
        str = replace_1.default(str, 'n', '-');
    }
    if (floatingPoint) {
        // 文字列中で一番最初にくるドットを_に一時的に変換
        str = replace_1.default(str, /\.([0-9])/, '_$1');
    }
    // ドットを全て削除
    str = remove_1.default(str, /\./g);
    if (floatingPoint) {
        // ドットを元に戻す
        str = replace_1.default(str, '_', '.');
    }
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数字に変換する
 *
 * @version 0.5.0
 * @since 0.5.0
 * @param str 対象の文字列
 * @param negative 負の値を許可してマイナスをつけるかどうか
 * @param floatingPoint 小数を許可してドットをつけるかどうか
 */
exports.default = default_1;
