import toNarrowAlphanumeric from './toNarrowAlphanumeric';
import toNarrowJapanese from './toNarrowJapanese';
import toNarrowSign from './toNarrowSign';

/**
 * 半角に変換
 *
 * @version 2.0.0
 * @since 0.4.0
 * @param str 対象の文字列
 * @param convertJapaneseChars 日本語のカタカナなどを変換するかどうか
 */
export default function(
  str: string,
  convertJapaneseChars: boolean = false
): string {
  // 英数字の変換
  str = toNarrowAlphanumeric(str);
  // スペース・記号の変換
  str = toNarrowSign(str);
  if (convertJapaneseChars) {
    // 日本語カタカナ記号の変換
    str = toNarrowJapanese(str);
  }
  return str;
}
