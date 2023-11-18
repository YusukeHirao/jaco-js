import { HIRAGANA_CHARS } from '../const/HIRAGANA_CHARS';
import { KANA_COMMON_CHARS } from '../const/KANA_COMMON_CHARS';

import isOnly from './isOnly';

/**
 * ひらがなだけで構成されているかどうか
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 対象の文字列
 */
export default function(str: string): boolean {
  return isOnly(str, HIRAGANA_CHARS + KANA_COMMON_CHARS);
}
