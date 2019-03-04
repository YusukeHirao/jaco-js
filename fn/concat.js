/**
 * 再帰的に文字列連結をおこなう
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param ...args 文字列もしくはJacoインスタンス
 */
export default function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args
        .map(function (str) {
        if (Array.isArray(str)) {
            return str
                .map(function (_str) { return (Array.isArray(_str) ? concat(_str) : _str); })
                .join('');
        }
        else {
            return str.toString();
        }
    })
        .join('');
}
