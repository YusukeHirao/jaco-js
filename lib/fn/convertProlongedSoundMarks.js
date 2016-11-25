"use strict";
const HIRAGANA_CHARS_1 = require("../const/HIRAGANA_CHARS");
const KATAKANA_CHARS_1 = require("../const/KATAKANA_CHARS");
const KANA_WITH_PROLONGED_SOUND_MARKS_PATTERN_REGEXP = new RegExp('[' + HIRAGANA_CHARS_1.HIRAGANA_CHARS + KATAKANA_CHARS_1.KATAKANA_CHARS + ']ー');
/**
 * 長音符をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @return インスタンス自信
 */
function default_1(str) {
    while (KANA_WITH_PROLONGED_SOUND_MARKS_PATTERN_REGEXP.test(str)) {
        str = converter(str);
    }
    return str;
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 長音符をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @return インスタンス自信
 */
exports.default = default_1;
function converter(str) {
    return str
        .replace(/([あぁかゕがさざただなはばぱまやゃらわゎ])ー/g, '$1あ')
        .replace(/([いぃきぎしじちぢにひびぴみりゐ])ー/g, '$1い')
        .replace(/([うぅゔくぐすずつづぬふぶぷむゆゅる])ー/g, '$1う')
        .replace(/([えぇけゖげせぜてでねへべぺめれゑ])ー/g, '$1え')
        .replace(/([おぉこごそぞとどのほぼぽもよょろを])ー/g, '$1お')
        .replace(/んー/g, 'んん')
        .replace(/っー/g, 'っっ')
        .replace(/([アァカヵガサザタダナハバパマヤャラワヮヷ])ー/g, '$1ア')
        .replace(/([イィキギシジチヂニヒビピミリヰヸ])ー/g, '$1イ')
        .replace(/([ウゥヴクグスズツヅヌフブプムユュル])ー/g, '$1ウ')
        .replace(/([エェケヶゲセゼテデネヘベペメレヱヹ])ー/g, '$1エ')
        .replace(/([オォコゴソゾトドノホボポモヨョロヲヺ])ー/g, '$1オ')
        .replace(/ンー/g, 'ンン')
        .replace(/ッー/g, 'ッッ');
}
