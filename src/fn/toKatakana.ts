import { HIRAGANA_CHARS } from '../const/HIRAGANA_CHARS.js';
import toWideKatakana from './toWideKatakana.js';

import patternize from '../util/patternize.js';
import shift from '../util/shift.js';

/**
 * カタカナに変換する
 *
 * @since 0.1.0
 * @param str 対象の文字列
 * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
 */
export default function (str: string, toWide: boolean = true): string {
  // 半角カタカナを全角カタカナへ
  if (toWide) {
    str = toWideKatakana(str);
  }
  // わ゛=> ヷ (濁点3種類対応 ※全角濁点・全角結合文字濁点・半角濁点)
  str = str.replace(/わ(?:\u309B|\u3099|\uFF9E)/g, 'ヷ');
  // ゐ゛=> ヸ (濁点3種類対応)
  str = str.replace(/ゐ(?:\u309B|\u3099|\uFF9E)/g, 'ヸ');
  // ゑ゛=> ヹ (濁点3種類対応)
  str = str.replace(/ゑ(?:\u309B|\u3099|\uFF9E)/g, 'ヹ');
  // を゛=> ヺ (濁点3種類対応)
  str = str.replace(/を(?:\u309B|\u3099|\uFF9E)/g, 'ヺ');
  // ひらがなをカタカナへ(Unicodeの番号をずらす)
  str = shift(str, patternize(HIRAGANA_CHARS), 96);
  return str;
}
