/**
 * 小書き文字を含むかどうか
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
export default function (str: string): boolean {
	return /[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/.test(str);
}
