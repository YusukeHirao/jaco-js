"use strict";
/**
 * サロゲートペア文字列を含んでいるかどうか
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */

function default_1(str) {
  return (/[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(str)
  );
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;