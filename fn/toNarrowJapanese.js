import toNarrowKatakana from './toNarrowKatakana';
import toNarrowSymbolForJapanese from './toNarrowSymbolForJapanese';
/**
 * カタカナと日本語で使われる記号を半角に変換
 *
 * @version 0.4.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
export default function (str) {
    // 半角カタカナへ
    str = toNarrowKatakana(str);
    // 半角記号へ
    str = toNarrowSymbolForJapanese(str);
    return str;
}
