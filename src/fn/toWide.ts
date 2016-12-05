import { ALPHANUMERIC_CHARS_WITH_SIGN } from '../const/ALPHANUMERIC_CHARS_WITH_SIGN';

import replace from './replace';
import toWideJapanese from './toWideJapanese';

import patternize from '../util/patternize';
import shift from '../util/shift';

/**
 * 全角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
export default function (str: string): string {
	// スペースの変換
	str = replace(str, ' ', '\u3000');
	// 日本語カタカナ記号の変換
	str = toWideJapanese(str);
	// 半角英数記号の変換
	str = shift(str, patternize(ALPHANUMERIC_CHARS_WITH_SIGN), 65248);
	return str;
}
