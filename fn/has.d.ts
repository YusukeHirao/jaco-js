/**
 * 該当の文字のいずれかを含んでいるかどうか
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param characters 文字セット
 */
export default function (str: string, characters: {
    toString(): string;
}): boolean;
