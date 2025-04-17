import { HIRAGANA_CHARS } from '../const/HIRAGANA_CHARS.js';
import { KANA_COMMON_CHARS } from '../const/KANA_COMMON_CHARS.js';

import isOnly from './isOnly.js';

/**
 * ひらがなだけで構成されているかどうか
 *
 * @since 0.2.0
 * @param str 対象の文字列
 */
export default function (str: string): boolean {
  return isOnly(str, HIRAGANA_CHARS + KANA_COMMON_CHARS);
}
