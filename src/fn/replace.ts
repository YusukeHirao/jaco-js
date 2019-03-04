/**
 * 文字列をパターンで置換する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str  元の文字列
 * @param pattern  対象のパターン
 * @param replacement 置換する文字列
 */
export default function(
  str: string,
  pattern: RegExp | { toString(): string },
  replacement: { toString(): string }
): string {
  const reg =
    pattern instanceof RegExp ? pattern : new RegExp(pattern.toString());
  return str.replace(reg, replacement.toString());
}
