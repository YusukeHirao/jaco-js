import charAt from './charAt';

/**
 * 指定位置のUnicodeコードポイントを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 */
export default function (str: string, index: number = 0): number {
	const char = charAt(str, index);
	if (!char) {
		return NaN;
	}
	if (char.length === 1) {
		return char.charCodeAt(0);
	} else {
		const first = char.charCodeAt(0);
		const second = char.charCodeAt(1);
		const code = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
		return code;
	}
}
