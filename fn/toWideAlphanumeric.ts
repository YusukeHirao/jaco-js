import { ALPHA_CHARS } from '../const/ALPHA_CHARS.js';
import { DIGIT_CHARS } from '../const/DIGIT_CHARS.js';

import patternize from '../util/patternize.js';
import shift from '../util/shift.js';

/**
 * 英数字を全角に変換
 *
 * @version 2.0.0
 * @since 1.3.0
 * @param str 対象の文字列
 */
export default function (str: string): string {
  str = shift(str, patternize(ALPHA_CHARS + DIGIT_CHARS), 65248);
  return str;
}
