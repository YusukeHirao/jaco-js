import toWideAlphanumeric from './toWideAlphanumeric';
import toWideJapanese from './toWideJapanese';
import toWideSign from './toWideSign';

/**
 * 全角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
export default function (str: string): string {
	// 半角英数記号の変換
	str = toWideAlphanumeric(str);
	// スペースの変換
	str = toWideSign(str);
	// 日本語カタカナ記号の変換
	str = toWideJapanese(str);
	return str;
}
