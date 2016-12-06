import indexOf from './indexOf';

/**
 * 指定された文字列が最初に現れるインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 検索文字列
 * @param fromIndex 検索位置
 */
export default function (str: string, search: { toString(): string }, position: number = 0): boolean {
	return indexOf(str, search, position) !== -1;
}
