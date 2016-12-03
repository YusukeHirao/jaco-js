import { HIRAGANA_CHARS_IGNORE_ITERATION_MARKS } from '../const/HIRAGANA_CHARS_IGNORE_ITERATION_MARKS';
import { KATAKANA_CHARS_IGNORE_ITERATION_MARKS } from '../const/KATAKANA_CHARS_IGNORE_ITERATION_MARKS';

import addVoicedMarks from './addVoicedMarks';
import removeVoicedMarks from './removeVoicedMarks';
import toHiragana from './toHiragana';
import toKatakana from './toKatakana';

const KANA_WITH_ITERATION_MARKS_REGEXP: RegExp = new RegExp(`([${HIRAGANA_CHARS_IGNORE_ITERATION_MARKS}${KATAKANA_CHARS_IGNORE_ITERATION_MARKS}])([ゝゞヽヾ])`);

/**
 * 繰り返し記号をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
export default function (str: string): string {
	while (KANA_WITH_ITERATION_MARKS_REGEXP.test(str)) {
		str = converter(str);
	}
	return str;
}

/**
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @return 置き換えた文字列
 */
function converter (str: string): string {
	return str.replace(KANA_WITH_ITERATION_MARKS_REGEXP, replacer);
}

/**
 * @version 2.0.0
 * @since 2.0.0
 * @param matchAll
 * @param beforeString
 * @param iterationMark
 * @return 置き換えた文字列
 */
function replacer (matchAll: string, beforeString: string, iterationMark: string) {
	let str = removeVoicedMarks(beforeString);
	switch (iterationMark) {
		case 'ゝ': {
			str = toHiragana(str);
		}
		break;
		case 'ヽ': {
			str = toKatakana(str);
		}
		break;
		case 'ゞ': {
			str = toHiragana(str);
			str = addVoicedMarks(str);
		}
		break;
		case 'ヾ': {
			str = toKatakana(str);
			str = addVoicedMarks(str);
		}
		break;
		default: {
			// void
		}
	}
	return beforeString + str;
}
