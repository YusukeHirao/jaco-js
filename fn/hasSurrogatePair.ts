/**
 * サロゲートペア文字列を含んでいるかどうか
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
export default function(str: string): boolean {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(str);
}
