"use strict";
/**
 * 文字列を配列化する
 *
 * サロゲートペア文字列を考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @return 配列化された文字列
 */
function default_1(str) {
    return str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列を配列化する
 *
 * サロゲートペア文字列を考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @return 配列化された文字列
 */
exports.default = default_1;
