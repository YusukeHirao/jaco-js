/**
 * 該当の文字だけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param characters 文字セット
 */
export default function(
  str: string,
  characters: { toString(): string }
): boolean {
  const chars = characters
    .toString()
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]');
  return new RegExp('^[' + chars + ']+$', 'gm').test(str);
}
