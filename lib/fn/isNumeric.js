"use strict";
/**
 * 数字だけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 0.5.0
 * @param str 対象の文字列
 * @param negative 負の数値も含めてチェックするかどうか
 * @param floatingPoint 小数としてチェックするかどうか
 */

function default_1(str) {
    var negative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var floatingPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var pattern = '^';
    if (negative) {
        pattern += '-?';
    }
    if (floatingPoint) {
        pattern += '(?:[0-9]*\\.)?';
    }
    pattern += '[0-9]+$';
    return new RegExp(pattern).test(str);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;