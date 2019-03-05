import remove from './remove';
import replace from './replace';
import toNarrow from './toNarrow';

/**
 * 数字に変換する
 *
 * @version 0.5.0
 * @since 0.5.0
 * @param str 対象の文字列
 * @param negative 負の値を許可してマイナスをつけるかどうか
 * @param floatingPoint 小数を許可してドットをつけるかどうか
 */
export default function(
  str: string,
  negative: boolean = false,
  floatingPoint: boolean = false
): string {
  // 半角化
  str = toNarrow(str);
  // 数字・ハイフン（マイナス）・ドット意外を削除
  str = remove(str, /[^0-9\.\-]/gm);
  if (negative) {
    // 最初のにくるハイフンをnに一時的に変換
    str = replace(str, /^-/, 'n');
  }
  // ハイフンを全て削除
  str = remove(str, /-/g);
  if (negative) {
    // ハイフンを元に戻す
    str = replace(str, 'n', '-');
  }
  if (floatingPoint) {
    // 文字列中で一番最初にくるドットを_に一時的に変換
    str = replace(str, /\.([0-9])/, '_$1');
  }
  // ドットを全て削除
  str = remove(str, /\./g);
  if (floatingPoint) {
    // ドットを元に戻す
    str = replace(str, '_', '.');
  }
  return str;
}
