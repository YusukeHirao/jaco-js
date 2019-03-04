"use strict";
exports.__esModule = true;
/**
 * キーがパターン・値が置換文字列のハッシュマップによって置換する
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param convMap キーがパターン・値が置換文字列のハッシュマップ
 */
function default_1(str, convMap) {
    for (var needle in convMap) {
        if (convMap.hasOwnProperty(needle)) {
            var replace = convMap[needle];
            str = str.replace(new RegExp(needle, 'g'), replace);
        }
    }
    return str;
}
exports["default"] = default_1;
