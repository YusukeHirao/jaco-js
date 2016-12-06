import { HIRAGANA_CHARS } from '../const/HIRAGANA_CHARS';

import replace from './replace';
import toWideKatakana from './toWideKatakana';

import patternize from '../util/patternize';
import shift from '../util/shift';

/**
 * カタカナに変換する
 *
 * @version 0.2.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
 */
export default function (str: string, toWide: boolean = true): string {
	// 半角カタカナを全角カタカナへ
	if (toWide) {
		str = toWideKatakana(str);
	}
	// わ゛=> ヷ (濁点3種類対応 ※全角濁点・全角結合文字濁点・半角濁点)
	str = replace(str, /わ(?:\u309B|\u3099|\uFF9E)/g, 'ヷ');
	// ゐ゛=> ヸ (濁点3種類対応)
	str = replace(str, /ゐ(?:\u309B|\u3099|\uFF9E)/g, 'ヸ');
	// ゑ゛=> ヹ (濁点3種類対応)
	str = replace(str, /ゑ(?:\u309B|\u3099|\uFF9E)/g, 'ヹ');
	// を゛=> ヺ (濁点3種類対応)
	str = replace(str, /を(?:\u309B|\u3099|\uFF9E)/g, 'ヺ');
	// ひらがなをカタカナへ(Unicodeの番号をずらす)
	str = shift(str, patternize(HIRAGANA_CHARS), 96);
	return str;
}
