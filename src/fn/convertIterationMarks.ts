import Jaco from '../jaco';

import { HIRAGANA_CHARS_IGNORE_ITERATION_MARKS } from '../const/HIRAGANA_CHARS_IGNORE_ITERATION_MARKS';
import { KATAKANA_CHARS_IGNORE_ITERATION_MARKS } from '../const/KATAKANA_CHARS_IGNORE_ITERATION_MARKS';

const KANA_WITH_ITERATION_MARKS_REGEXP: RegExp = new RegExp(`([${HIRAGANA_CHARS_IGNORE_ITERATION_MARKS}${KATAKANA_CHARS_IGNORE_ITERATION_MARKS}])([ゝゞヽヾ])`);

/**
 * 繰り返し記号をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @return 置き換えた文字列
 */
export default function (str: string): string {
	while (KANA_WITH_ITERATION_MARKS_REGEXP.test(str)) {
		str = converter(str);
	}
	return str;
}

function converter (str: string): string {
	return str.replace(KANA_WITH_ITERATION_MARKS_REGEXP, replacer);
}

function replacer (matchAll: string, beforeString: string, iterationMark: string) {
	const converted = new Jaco(beforeString).removeVoicedMarks();
	switch (iterationMark) {
		case 'ゝ': {
			converted.toHiragana();
		}
		break;
		case 'ヽ': {
			converted.toKatakana();
		}
		break;
		case 'ゞ': {
			converted.toHiragana().addVoicedMarks();
		}
		break;
		case 'ヾ': {
			converted.toKatakana().addVoicedMarks();
		}
		break;
		default: {
			// void
		}
	}
	return beforeString + converted;
}
