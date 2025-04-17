/**
 * 文字列のバイトサイズを返す
 *
 * @since 0.2.0
 * @param str 対象の文字列
 */
export default function (str: string): number {
  return encodeURIComponent(str).replace(/%../g, 'x').length;
}
