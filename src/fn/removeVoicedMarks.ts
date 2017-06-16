import remove from './remove';
import replaceFromMap from './replaceFromMap';

/**
 * 濁点・半濁点を取り除く
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
 */
export default function (str: string, ignoreSingleMark: boolean = false): string {
	if (!ignoreSingleMark) {
		// 濁点・半濁点単体の除去
		str = remove(str, /\u309B|\u3099|\uFF9E/g);
		str = remove(str, /\u309C|\u309A|\uFF9F/g);
	}
	str = replaceFromMap(str, {
		が: 'か', ぎ: 'き', ぐ: 'く', げ: 'け', ご: 'こ',
		ざ: 'さ', じ: 'し', ず: 'す', ぜ: 'せ', ぞ: 'そ',
		だ: 'た', ぢ: 'ち', づ: 'つ', で: 'て', ど: 'と',
		ば: 'は', び: 'ひ', ぶ: 'ふ', べ: 'へ', ぼ: 'ほ',
		ぱ: 'は', ぴ: 'ひ', ぷ: 'ふ', ぺ: 'へ', ぽ: 'ほ',
		ガ: 'カ', ギ: 'キ', グ: 'ク', ゲ: 'ケ', ゴ: 'コ',
		ザ: 'サ', ジ: 'シ', ズ: 'ス', ゼ: 'セ', ゾ: 'ソ',
		ダ: 'タ', ヂ: 'チ', ヅ: 'ツ', デ: 'テ', ド: 'ト',
		バ: 'ハ', ビ: 'ヒ', ブ: 'フ', ベ: 'ヘ', ボ: 'ホ',
		パ: 'ハ', ピ: 'ヒ', プ: 'フ', ペ: 'ヘ', ポ: 'ホ',
		ヷ: 'ワ', ヸ: 'イ', ヴ: 'ウ', ヹ: 'エ', ヺ: 'ヲ',
		ゞ: 'ゝ', ヾ: 'ヽ',
	});
	return str;
}
