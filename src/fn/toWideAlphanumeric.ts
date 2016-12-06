import { ALPHA_CHARS } from '../const/ALPHA_CHARS';
import { DIGIT_CHARS } from '../const/DIGIT_CHARS';

import patternize from '../util/patternize';
import shift from '../util/shift';

/**
 * 英数字を全角に変換
 *
 * @version 2.0.0
 * @since 1.3.0
 * @param str 対象の文字列
 */
export default function (str: string): string {
	str = shift(str, patternize(ALPHA_CHARS + DIGIT_CHARS), 65248);
	return str;
}
