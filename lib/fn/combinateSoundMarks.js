"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var replaceFromMap_1 = require("./replaceFromMap");
/**
 * 濁点・半濁点とひらがな・かたかなを結合させる
 *
 * @version 2.0.0
 * @since 1.2.0
 * @param str 対象の文字列
 * @param convertOnly ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
 */
function combinateSoundMarks(str) {
    var convertOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!convertOnly) {
        // 結合文字に変換
        str = combinateSoundMarks(str, true);
        // 濁点・半濁点を結合する
        str = replaceFromMap_1.default(str, {
            // 濁点
            が: 'が', ぎ: 'ぎ', ぐ: 'ぐ', げ: 'げ', ご: 'ご',
            ざ: 'ざ', じ: 'じ', ず: 'ず', ぜ: 'ぜ', ぞ: 'ぞ',
            だ: 'だ', ぢ: 'ぢ', づ: 'づ', で: 'で', ど: 'ど',
            ば: 'ば', び: 'び', ぶ: 'ぶ', べ: 'べ', ぼ: 'ぼ',
            ガ: 'ガ', ギ: 'ギ', グ: 'グ', ゲ: 'ゲ', ゴ: 'ゴ',
            ザ: 'ザ', ジ: 'ジ', ズ: 'ズ', ゼ: 'ゼ', ゾ: 'ゾ',
            ダ: 'ダ', ヂ: 'ヂ', ヅ: 'ヅ', デ: 'デ', ド: 'ド',
            バ: 'バ', ビ: 'ビ', ブ: 'ブ', ベ: 'ベ', ボ: 'ボ',
            ヷ: 'ヷ', イ゙: 'ヸ', ヴ: 'ヴ', エ゙: 'ヹ', ヺ゙: 'ヲ',
            ゞ: 'ゞ', ヾ: 'ヾ',
            // 半濁点
            ぱ: 'ぱ', ぴ: 'ぴ', ぷ: 'ぷ', ぺ: 'ぺ', ぽ: 'ぽ',
            パ: 'パ', ピ: 'ピ', プ: 'プ', ペ: 'ペ', ポ: 'ポ'
        });
    } else {
        // ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
        str = replaceFromMap_1.default(str, {
            // 濁点
            "\u309B": "\u3099",
            ﾞ: "\u3099",
            // 半濁点
            "\u309C": "\u309A",
            ﾟ: "\u309A"
        });
    }
    return str;
}
exports.default = combinateSoundMarks;