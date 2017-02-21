"use strict";

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
            "\u304B\u3099": 'が', "\u304D\u3099": 'ぎ', "\u304F\u3099": 'ぐ', "\u3051\u3099": 'げ', "\u3053\u3099": 'ご',
            "\u3055\u3099": 'ざ', "\u3057\u3099": 'じ', "\u3059\u3099": 'ず', "\u305B\u3099": 'ぜ', "\u305D\u3099": 'ぞ',
            "\u305F\u3099": 'だ', "\u3061\u3099": 'ぢ', "\u3064\u3099": 'づ', "\u3066\u3099": 'で', "\u3068\u3099": 'ど',
            "\u306F\u3099": 'ば', "\u3072\u3099": 'び', "\u3075\u3099": 'ぶ', "\u3078\u3099": 'べ', "\u307B\u3099": 'ぼ',
            "\u30AB\u3099": 'ガ', "\u30AD\u3099": 'ギ', "\u30AF\u3099": 'グ', "\u30B1\u3099": 'ゲ', "\u30B3\u3099": 'ゴ',
            "\u30B5\u3099": 'ザ', "\u30B7\u3099": 'ジ', "\u30B9\u3099": 'ズ', "\u30BB\u3099": 'ゼ', "\u30BD\u3099": 'ゾ',
            "\u30BF\u3099": 'ダ', "\u30C1\u3099": 'ヂ', "\u30C4\u3099": 'ヅ', "\u30C6\u3099": 'デ', "\u30C8\u3099": 'ド',
            "\u30CF\u3099": 'バ', "\u30D2\u3099": 'ビ', "\u30D5\u3099": 'ブ', "\u30D8\u3099": 'ベ', "\u30DB\u3099": 'ボ',
            "\u30EF\u3099": 'ヷ', "\u30A4\u3099": 'ヸ', "\u30A6\u3099": 'ヴ', "\u30A8\u3099": 'ヹ', "\u30FA\u3099": 'ヲ',
            "\u309D\u3099": 'ゞ', "\u30FD\u3099": 'ヾ',
            // 半濁点
            "\u306F\u309A": 'ぱ', "\u3072\u309A": 'ぴ', "\u3075\u309A": 'ぷ', "\u3078\u309A": 'ぺ', "\u307B\u309A": 'ぽ',
            "\u30CF\u309A": 'パ', "\u30D2\u309A": 'ピ', "\u30D5\u309A": 'プ', "\u30D8\u309A": 'ペ', "\u30DB\u309A": 'ポ'
        });
    } else {
        // ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
        str = replaceFromMap_1.default(str, {
            // 濁点
            "\u309B": "\u3099",
            "\uFF9E": "\u3099",
            // 半濁点
            "\u309C": "\u309A",
            "\uFF9F": "\u309A"
        });
    }
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = combinateSoundMarks;