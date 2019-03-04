"use strict";
exports.__esModule = true;
var HIRAGANA_CHARS_1 = require("../const/HIRAGANA_CHARS");
var replace_1 = require("./replace");
var toWideKatakana_1 = require("./toWideKatakana");
var patternize_1 = require("../util/patternize");
var shift_1 = require("../util/shift");
/**
 * カタカナに変換する
 *
 * @version 0.2.0
 * @since 0.1.0
 * @param str 対象の文字列
 * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
 */
function default_1(str, toWide) {
    if (toWide === void 0) { toWide = true; }
    // 半角カタカナを全角カタカナへ
    if (toWide) {
        str = toWideKatakana_1["default"](str);
    }
    // わ゛=> ヷ (濁点3種類対応 ※全角濁点・全角結合文字濁点・半角濁点)
    str = replace_1["default"](str, /わ(?:\u309B|\u3099|\uFF9E)/g, 'ヷ');
    // ゐ゛=> ヸ (濁点3種類対応)
    str = replace_1["default"](str, /ゐ(?:\u309B|\u3099|\uFF9E)/g, 'ヸ');
    // ゑ゛=> ヹ (濁点3種類対応)
    str = replace_1["default"](str, /ゑ(?:\u309B|\u3099|\uFF9E)/g, 'ヹ');
    // を゛=> ヺ (濁点3種類対応)
    str = replace_1["default"](str, /を(?:\u309B|\u3099|\uFF9E)/g, 'ヺ');
    // ひらがなをカタカナへ(Unicodeの番号をずらす)
    str = shift_1["default"](str, patternize_1["default"](HIRAGANA_CHARS_1.HIRAGANA_CHARS), 96);
    return str;
}
exports["default"] = default_1;
