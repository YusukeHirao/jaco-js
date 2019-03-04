/**
 * ペアになっていないサロゲートコードポイントの削除
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
export default function (str) {
    str = str.replace(/[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g, '$1');
    str = str.replace(/(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]/g, '$1');
    return str;
}
