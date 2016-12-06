/**
 * パターンとマッチするかどうか
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str 対象の文字列
 * @param pattern パターン
 */
export default function (str: string, pattern: RegExp | { toString(): string }): boolean {
	return pattern instanceof RegExp ? pattern.test(str) : str === pattern.toString();
}
