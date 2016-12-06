/**
 * 最終的な文字列が指定された長さに到達するように文字列を先頭に追加する
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param targetLength 最終的な長さ
 * @param padString 延長する文字列
 */
export default function (str: string, targetLength: number, padString?: {
    toString(): string;
}): string;
