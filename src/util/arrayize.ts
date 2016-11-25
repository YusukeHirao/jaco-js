/**
 * 文字列を配列化する
 *
 * サロゲートペア文字列を考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @return 配列化された文字列
 */
export default function (str: string): string[] {
	return str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
}
