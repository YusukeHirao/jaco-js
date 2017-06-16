"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 該当の文字のいずれかを含んでいるかどうか
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param characters 文字セット
 */
function default_1(str, characters) {
    var chars = characters.toString().replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
    var pattern = new RegExp('[' + chars + ']', 'gm');
    return pattern.test(str);
}
exports.default = default_1;