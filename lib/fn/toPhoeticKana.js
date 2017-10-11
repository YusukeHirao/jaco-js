"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var convertIterationMarks_1 = require("./convertIterationMarks");
var convertProlongedSoundMarks_1 = require("./convertProlongedSoundMarks");
var toBasicLetter_1 = require("./toBasicLetter");
var toHiragana_1 = require("./toHiragana");
/**
 * よみの文字に変換する
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
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
    // 長音符を置き換える
    str = convertProlongedSoundMarks_1.default(str);
    // 繰り返し記号を置き換える
    str = convertIterationMarks_1.default(str);
    return str;
}
exports.default = default_1;