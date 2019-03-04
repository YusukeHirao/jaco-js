/**
 * 配列の五十音順ソートをするためのソート関数
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * 漢字や絵文字はソートの比較にほぼ無関係なのでサロゲートペアを考慮したコードは不要
 *
 * @version 3.0.0
 * @since 1.1.0
 * @param string Array.prototype.sort から渡される配列要素
 * @param string Array.prototype.sort から渡される配列要素
 * @return 比較数値
 */
export default function (a: string, b: string): number;
