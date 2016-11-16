"use strict";
/**
 * キャラクターリストを正規表現に変換する
 *
 * @version 0.1.0
 * @since 0.1.0
 * @param chars 文字の集合
 * @return 正規表現化された文字セット
 */

function default_1(chars) {
  return new RegExp('[' + chars + ']', 'g');
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * キャラクターリストを正規表現に変換する
 *
 * @version 0.1.0
 * @since 0.1.0
 * @param chars 文字の集合
 * @return 正規表現化された文字セット
 */
exports.default = default_1;