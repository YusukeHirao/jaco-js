/**
 * キーがパターン・値が置換文字列のハッシュマップによって置換する
 *
 * @since 0.1.0
 * @param str 対象の文字列
 * @param convMap キーがパターン・値が置換文字列のハッシュマップ
 */
export default function (
  str: string,
  convMap: { [pattern: string]: string },
): string {
  for (const [needle, replace] of Object.entries(convMap)) {
    if (replace) {
      str = str.replace(new RegExp(needle, 'g'), replace);
    }
  }
  return str;
}
