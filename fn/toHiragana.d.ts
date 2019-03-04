/**
 * ひらがなに変換する
 *
 * 第一引数に true を渡した場合、濁点・半濁点は基本的に結合される
 * ヷヸヹヺは文字が存在しないため ひらがな + 結合文字でない濁点・半濁点 となる
 *
 * @version 0.2.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
 */
export default function (str: string, isCombinate?: boolean): string;
