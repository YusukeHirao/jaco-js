import substr from './substr';

import arrayize from '../util/arrayize';

/**
 * 指定した位置の間の文字列を抽出
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param indexA インデックス
 * @param indexB インデックス
 */
export default function(str: string, indexA: number, indexB: number): string {
  const start = Math.max(Math.min(indexA, indexB), 0);
  const end = Math.min(Math.max(indexA, indexB), arrayize(str).length);
  const length = end - start;
  return substr(str, start, length);
}
