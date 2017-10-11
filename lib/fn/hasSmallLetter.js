"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 小書き文字を含むかどうか
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
  return (/[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/.test(str)
  );
}
exports.default = default_1;