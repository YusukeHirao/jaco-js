import replaceFromMap from './replaceFromMap.js';

/**
 * 半濁点を追加する
 *
 * @since 1.1.0
 * @param str 対象の文字列
 */
export default function (str: string): string {
  return replaceFromMap(str, {
    は: 'ぱ',
    ひ: 'ぴ',
    ふ: 'ぷ',
    へ: 'ぺ',
    ほ: 'ぽ',
    ハ: 'パ',
    ヒ: 'ピ',
    フ: 'プ',
    ヘ: 'ペ',
    ホ: 'ポ',
  });
}
