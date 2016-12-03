"use strict";
const combinateSoundMarks_1 = require("./combinateSoundMarks");
const replaceFromMap_1 = require("./replaceFromMap");
/**
 * 小書き文字を基底文字に変換する
 *
 * TODO: test
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
    str = combinateSoundMarks_1.default(str);
    str = replaceFromMap_1.default(str, {
        'ぁ': 'あ', 'ぃ': 'い', 'ぅ': 'う', 'ぇ': 'え', 'ぉ': 'お',
        'っ': 'つ',
        'ゃ': 'や', 'ゅ': 'ゆ', 'ょ': 'よ',
        'ゎ': 'わ',
        'ァ': 'ア', 'ィ': 'イ', 'ゥ': 'ウ', 'ェ': 'エ', 'ォ': 'オ',
        'ヵ': 'カ', 'ㇰ': 'ク', 'ヶ': 'ケ',
        'ㇱ': 'シ', 'ㇲ': 'ス',
        'ッ': 'ツ', 'ㇳ': 'ト',
        'ㇴ': 'ヌ', 'ㇵ': 'ハ',
        'ㇶ': 'ヒ', 'ㇷ': 'フ', 'ㇸ': 'ヘ', 'ㇹ': 'ホ',
        'ㇺ': 'ム',
        'ャ': 'ヤ', 'ュ': 'ユ', 'ョ': 'ヨ',
        'ㇻ': 'ラ', 'ㇼ': 'リ', 'ㇽ': 'ル', 'ㇾ': 'レ', 'ㇿ': 'ロ',
        'ヮ': 'ワ',
    });
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 小書き文字を基底文字に変換する
 *
 * TODO: test
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
exports.default = default_1;
