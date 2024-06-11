import { FULLWIDTH_ALPHA_CHARS } from '../const/FULLWIDTH_ALPHA_CHARS.js';
import { FULLWIDTH_DIGIT_CHARS } from '../const/FULLWIDTH_DIGIT_CHARS.js';

import patternize from '../util/patternize.js';
import shift from '../util/shift.js';

/**
 * 英数字を半角に変換
 *
 * @version 2.0.0
 * @since 1.3.0
 * @param str 対象の文字列
 */
export default function(str: string): string {
  return shift(
    str,
    patternize(FULLWIDTH_ALPHA_CHARS + FULLWIDTH_DIGIT_CHARS),
    -65248
  );
}
