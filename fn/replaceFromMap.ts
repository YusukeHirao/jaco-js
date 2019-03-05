/**
 * キーがパターン・値が置換文字列のハッシュマップによって置換する
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param convMap キーがパターン・値が置換文字列のハッシュマップ
 */
export default function(
  str: string,
  convMap: { [pattern: string]: string }
): string {
  for (const needle in convMap) {
    if (convMap.hasOwnProperty(needle)) {
      const replace = convMap[needle];
      str = str.replace(new RegExp(needle, 'g'), replace);
    }
  }
  return str;
}
