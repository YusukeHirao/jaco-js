import convertIterationMarks from './convertIterationMarks';
import convertProlongedSoundMarks from './convertProlongedSoundMarks';
import toBasicLetter from './toBasicLetter';
import toHiragana from './toHiragana';

/**
 * よみの文字に変換する
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
export default function(str: string): string {
  // ひらがな化
  str = toHiragana(str);
  // 小書き文字を基底文字に変換
  str = toBasicLetter(str);
  // 長音符を置き換える
  str = convertProlongedSoundMarks(str);
  // 繰り返し記号を置き換える
  str = convertIterationMarks(str);
  return str;
}
