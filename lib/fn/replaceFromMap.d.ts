/**
 * キーがパターン・値が置換文字列のハッシュマップによって置換する
 *
 * @version 2.0.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param convMap キーがパターン・値が置換文字列のハッシュマップ
 * @return インスタンス自身
 */
export default function (str: string, convMap: {
    [pattern: string]: string;
}): string;
