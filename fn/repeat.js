/**
 * 文字列を繰り返す
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param times 繰り返しの回数
 */
export default function (str, times) {
    if (times === void 0) { times = 0; }
    var res = [];
    times = Math.floor(Math.max(times, 0));
    if (times === Infinity) {
        throw new RangeError('repeat count must be less than infinity');
    }
    while (times--) {
        res.push(str);
    }
    str = res.join('');
    return str;
}
