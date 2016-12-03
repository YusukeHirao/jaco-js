import Jaco from '../jaco';

/**
 * カタカナ化
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 */
export default function (str: string, toWide: boolean = true): string {
	return new Jaco(str).toKatakana(toWide).toString();
}
