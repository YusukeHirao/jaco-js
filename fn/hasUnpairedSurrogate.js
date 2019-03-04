/**
 * ペアになっていないサロゲートコードポイントを含んでいるかどうか
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
export default function (str) {
    return /[\uD800-\uDBFF](?:[^\uDC00-\uDFFF]|$)|(?:^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]/.test(str);
}
