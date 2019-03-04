import arrayize from '../util/arrayize';
/**
 * 文字位置による抽出
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param start 開始インデックス
 * @param end 終了インデックス 省略すると最後まで
 */
export default function (str, start, end) {
    var array = arrayize(str);
    var res = array.slice(start, end);
    return res.join('');
}
