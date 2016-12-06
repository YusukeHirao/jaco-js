/**
 * キャラクターリストを正規表現に変換する
 *
 * @version 0.1.0
 * @since 0.1.0
 * @param chars 文字の集合
 * @return 正規表現化された文字セット
 */
export default function (chars: string): RegExp {
	return new RegExp(`[${chars}]`, 'g');
}
