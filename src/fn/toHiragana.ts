import { KATAKANA_CHARS } from '../const/KATAKANA_CHARS.js';

import combinateSoundMarks from './combineSoundMarks.js';
import replaceFromMap from './replaceFromMap.js';
import toWideKatakana from './toWideKatakana.js';

import patternize from '../util/patternize.js';
import shift from '../util/shift.js';

/**
 * ひらがなに変換する
 *
 * 第一引数に true を渡した場合、濁点・半濁点は基本的に結合される
 * ヷヸヹヺは文字が存在しないため ひらがな + 結合文字でない濁点・半濁点 となる
 *
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 */
export default function (str: string, isCombinate: boolean = false): string {
  // 半角カタカナを全角カタカナへ
  str = toWideKatakana(str);
  // ヷヸヹヺの変換
  str = replaceFromMap(str, {
    ヷ: 'わ゛',
    ヸ: 'ゐ゛',
    ヹ: 'ゑ゛',
    ヺ: 'を゛',
  });
  // カタカナをひらがなへ(Unicodeの番号をずらす)
  str = shift(str, patternize(KATAKANA_CHARS), -96);
  // 濁点・半濁点を結合文字に変換
  if (isCombinate) {
    str = combinateSoundMarks(str);
  }
  return str;
}
