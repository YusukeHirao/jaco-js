/**
 * よみの文字に変換する
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * ひらがな化 -> 小書き文字を基底文字に変換 -> 長音符をかなに変換 -> 繰り返し記号をかなに変換
 *
 * @version 3.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
export default function (str: string): string;
