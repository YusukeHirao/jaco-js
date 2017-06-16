"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 再帰的に文字列連結をおこなう
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param ...args 文字列もしくはJacoインスタンス
 */
function concat() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return args.map(function (str) {
        if (Array.isArray(str)) {
            return str.map(function (_str) {
                return Array.isArray(_str) ? concat(_str) : _str;
            }).join('');
        } else {
            return str.toString();
        }
    }).join('');
}
exports.default = concat;