/**
 * 文字列の配列に分割する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param separator 区切り文字
 * @param limit 配列の数を指定
 */
export default function (str: string, separator: RegExp | { toString(): string }, limit?: number): string[] {
	const reg = separator instanceof RegExp ? separator : new RegExp(separator.toString());
	return str.split(reg, limit);
}
