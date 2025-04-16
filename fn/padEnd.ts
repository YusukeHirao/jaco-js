import substr from './substr.js';

import arrayize from '../util/arrayize.js';
import pad from '../util/pad.js';

/**
 * 最終的な文字列が指定された長さに到達するように文字列で延長する
 *
 * - サロゲートペアを考慮する
 *
 * @since 2.0.0
 * @param str 対象の文字列
 * @param targetLength 最終的な長さ
 * @param padString 延長する文字列
 */
export default function (
  str: string,
  targetLength: number,
  padString: { toString(): string } = ' ',
): string {
  const thisArray = arrayize(str);
  const thisLength = thisArray.length;
  if (targetLength < thisLength) {
    str = substr(str, 0, targetLength);
  } else {
    const padded = pad(padString.toString(), targetLength - thisLength);
    str += padded;
  }
  return str;
}
