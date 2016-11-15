import Jaco from '../jaco';

/**
 * ひらがな化
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 * @return ひらがな化された文字列
 */
export default function (str: string, isCombinate: boolean = false): string {
	return new Jaco(str).toHiragana(isCombinate).toString();
}
