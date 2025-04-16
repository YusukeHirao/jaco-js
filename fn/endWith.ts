import is from './is.js';
import substring from './substring.js';

import arrayize from '../util/arrayize.js';

/**
 * 引数に指定された文字列が末尾と合致するか
 *
 * - サロゲートペアを考慮する
 *
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 合致対象文字列
 * @param position 末尾の位置
 */
export default function (
  str: string,
  search: { toString(): string },
  position?: number,
): boolean {
  const targetLength = arrayize(str).length;
  const searchLength = arrayize(search.toString()).length;
  if (
    !position ||
    !isFinite(position) ||
    Math.floor(position) !== position ||
    position > targetLength
  ) {
    position = targetLength;
  }
  const end = position;
  const start = position - searchLength;
  const endStr = substring(str, start, end);
  return is(endStr, search);
}
