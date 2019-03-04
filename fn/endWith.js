import is from './is';
import substring from './substring';
import arrayize from '../util/arrayize';
/**
 * 引数に指定された文字列が末尾と合致するか
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 合致対象文字列
 * @param position 末尾の位置
 */
export default function (str, search, position) {
    var targetLength = arrayize(str).length;
    var searchLength = arrayize(search.toString()).length;
    if (!position ||
        !isFinite(position) ||
        Math.floor(position) !== position ||
        position > targetLength) {
        position = targetLength;
    }
    var end = position;
    var start = position - searchLength;
    var endStr = substring(str, start, end);
    return is(endStr, search);
}
