/**
 * 正規表現に対する文字列のマッチングの際に、そのマッチ結果を純粋な配列で得る
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param regexp パターン
 */
export default function(str: string, regexp: RegExp): string[] {
  const matches = str.match(regexp);
  return Array.prototype.concat.apply(matches || []);
}
