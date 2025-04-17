import naturalKanaOrder from './naturalKanaOrder.js';

/**
 * 配列の五十音順ソートをする
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * @since 1.1.0
 * @param array 対象の配列
 * @return 五十音順にソートされた配列
 */
export default function (array: string[]): string[] {
  return array.sort(naturalKanaOrder);
}
