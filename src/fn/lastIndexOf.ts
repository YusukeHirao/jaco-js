import arrayize from '../util/arrayize';

/**
 * 指定された文字列が最後に現れるインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 検索文字列
 * @param fromIndex 検索位置
 *
 */
export default function (str: string, search: { toString(): string }, fromIndex: number = Infinity): number {
	return arrayize(str).lastIndexOf(search.toString(), fromIndex);
}
