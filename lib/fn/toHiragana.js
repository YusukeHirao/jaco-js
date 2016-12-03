"use strict";
const KATAKANA_CHARS_1 = require("../const/KATAKANA_CHARS");
const combinateSoundMarks_1 = require("./combinateSoundMarks");
const replaceFromMap_1 = require("./replaceFromMap");
const toWideKatakana_1 = require("./toWideKatakana");
const patternize_1 = require("../util/patternize");
const shift_1 = require("../util/shift");
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
function default_1(str, isCombinate = false) {
    // 半角カタカナを全角カタカナへ
    str = toWideKatakana_1.default(str);
    // ヷヸヹヺの変換
    str = replaceFromMap_1.default(str, {
        'ヷ': 'わ゛',
        'ヸ': 'ゐ゛',
        'ヹ': 'ゑ゛',
        'ヺ': 'を゛',
    });
    // カタカナをひらがなへ(Unicodeの番号をずらす)
    str = shift_1.default(str, patternize_1.default(KATAKANA_CHARS_1.KATAKANA_CHARS), -96);
    // 濁点・半濁点を結合文字に変換
    if (isCombinate) {
        str = combinateSoundMarks_1.default(str);
    }
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = default_1;
