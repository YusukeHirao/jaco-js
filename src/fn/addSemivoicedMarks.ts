import replaceFromMap from './replaceFromMap';

/**
 * 半濁点を追加する
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param 対象の文字列
 * @return インスタンス自信
 */
export default function (str: string): string {
	return replaceFromMap(str, {
		'は': 'ぱ', 'ひ': 'ぴ', 'ふ': 'ぷ', 'へ': 'ぺ', 'ほ': 'ぽ',
		'ハ': 'パ', 'ヒ': 'ピ', 'フ': 'プ', 'ヘ': 'ペ', 'ホ': 'ポ',
	});
}
