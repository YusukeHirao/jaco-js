import split from './split';

import arrayize from '../util/arrayize';

/**
 * 正規表現にマッチしたインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param pattern パターン
 */
export default function (str: string, pattern: RegExp | { toString(): string }): number {
	const before = split(str, pattern)[0] || '';
	return arrayize(before).length;
}
