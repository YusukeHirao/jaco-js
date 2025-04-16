import { KANA_COMMON_CAHRS } from '../const/KANA_COMMON_CAHRS.js';
import { KATAKANA_CHARS } from '../const/KATAKANA_CHARS.js';

import isOnly from './isOnly.js';

/**
 * カタカナだけで構成されているかどうか
 *
 * @since 0.2.0
 * @param str 対象の文字列
 */
export default function (str: string): boolean {
  return isOnly(str, KATAKANA_CHARS + KANA_COMMON_CAHRS);
}
