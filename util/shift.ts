/**
 * 文字列中のそれぞれのひと文字に対してUnicode番号を指定の数値ずらす
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param needle 対象のパターン
 * @param shiftNum ずらす数値
 * @return インスタンス自身
 */
export default function(str: string, needle: RegExp, shiftNum: number): string {
  return str.replace(
    needle,
    (char: string): string => {
      return String.fromCharCode(char.charCodeAt(0) + shiftNum);
    }
  );
}
