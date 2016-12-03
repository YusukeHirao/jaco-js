import { FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN } from '../const/FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN';
import { SPACE_CHARS } from '../const/SPACE_CHARS';

import replace from './replace';
import toNarrowJapnese from './toNarrowJapnese';

import patternize from '../util/patternize';
import shift from '../util/shift';

/**
 * 半角に変換
 *
 * @version 2.0.0
 * @since 0.4.0
 * @param str 対象の文字列
 * @param convertJapaneseChars 日本語のカタカナなどを変換するかどうか
 */
export default function (str: string, convertJapaneseChars: boolean = false): string {
	// スペースの変換
	str = replace(str, patternize(SPACE_CHARS), ' ');
	// 半角英数記号の変換
	str = shift(str, patternize(FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN), -65248);
	if (convertJapaneseChars) {
		// 日本語カタカナ記号の変換
		str = toNarrowJapnese(str);
	}
	return str;
}
