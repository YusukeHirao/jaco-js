"use strict";
/**
 * ペアになっていないサロゲートコードポイントの削除
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */

function default_1(str) {
  str = str.replace(/[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g, '$1');
  str = str.replace(/(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]/g, '$1');
  return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;