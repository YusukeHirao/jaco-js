import { KANA_COMMON_CAHRS } from '../const/KANA_COMMON_CAHRS';
import { KATAKANA_CHARS } from '../const/KATAKANA_CHARS';

import isOnly from './isOnly';

/**
 * カタカナだけで構成されているかどうか
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
export default function(str: string): boolean {
  return isOnly(str, KATAKANA_CHARS + KANA_COMMON_CAHRS);
}
