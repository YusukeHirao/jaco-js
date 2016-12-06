/**
 * 完全マッチ
 *
 * @version 0.2.0
 * @since 0.2.0
 * @param str 比較する文字列
 * @param target 比較する文字列
 */
export default function (str: string, target: {
    toString(): string;
}): boolean;
