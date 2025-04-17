/**
 * 文字列を取り除く
 *
 * @since 0.2.0
 * @param str  元の文字列
 * @param pattern  取り除く文字列
 */
export default function (
  str: string,
  pattern: RegExp | { toString(): string },
): string {
  const patternValue = pattern instanceof RegExp ? pattern : String(pattern);
  return str.replace(patternValue, '');
}
