import { SIGN_CHARS } from '../const/SIGN_CHARS.js';
import { SPACE_CHARS } from '../const/SPACE_CHARS.js';

import replace from './replace.js';

import patternize from '../util/patternize.js';
import shift from '../util/shift.js';

/**
 * 記号を全角に変換
 *
 * @version 2.0.0
 * @since 1.3.0
 * @param str 対象の文字列
 */
export default function(str: string): string {
  str = replace(str, patternize(SPACE_CHARS), '　');
  str = shift(str, patternize(SIGN_CHARS), 65248);
  return str;
}
