/**
 * 文字列のバイトサイズを返す
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
export default function (str) {
    return encodeURIComponent(str).replace(/%../g, 'x').length;
}
