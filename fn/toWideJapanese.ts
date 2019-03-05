import toWideKatakana from './toWideKatakana';
import toWideSymbolForJapanese from './toWideSymbolForJapanese';

/**
 * カタカナと日本語で使われる記号を全角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
export default function(str: string): string {
  // 全角カタカナへ
  str = toWideKatakana(str);
  // 全角記号へ
  str = toWideSymbolForJapanese(str);
  return str;
}
