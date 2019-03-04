import arrayize from './arrayize';
/**
 * 指定数の文字列長になるように繰り返して埋める
 *
 * - サロゲートペアを考慮
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param length 指定の文字列長
 * @return 埋められた文字列
 */
export default function (str, length) {
    var pad = [];
    var padStringArray = arrayize(str);
    var padLength = padStringArray.length;
    for (var i = 0; i < length; i++) {
        var char = padStringArray[i % padLength];
        pad.push(char);
    }
    return pad.join('');
}
