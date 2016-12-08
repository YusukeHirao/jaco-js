"use strict";
const convertIterationMarks_1 = require("./convertIterationMarks");
const convertProlongedSoundMarks_1 = require("./convertProlongedSoundMarks");
const toBasicLetter_1 = require("./toBasicLetter");
const toHiragana_1 = require("./toHiragana");
/**
 * よみの文字に変換する
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * ひらがな化 -> 小書き文字を基底文字に変換 -> 長音符をかなに変換 -> 繰り返し記号をかなに変換
 *
 * TODO: test
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
function default_1(str) {
    // ひらがな化
    str = toHiragana_1.default(str);
    // 小書き文字を基底文字に変換
    str = toBasicLetter_1.default(str);
    // 長音符をかなに変換
    str = convertProlongedSoundMarks_1.default(str);
    // 繰り返し記号をかなに変換
    str = convertIterationMarks_1.default(str);
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * よみの文字に変換する
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * ひらがな化 -> 小書き文字を基底文字に変換 -> 長音符をかなに変換 -> 繰り返し記号をかなに変換
 *
 * TODO: test
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
exports.default = default_1;
