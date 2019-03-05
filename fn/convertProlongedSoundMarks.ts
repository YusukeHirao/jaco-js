import { HIRAGANA_CHARS } from '../const/HIRAGANA_CHARS';
import { KATAKANA_CHARS } from '../const/KATAKANA_CHARS';

const KANA_WITH_PROLONGED_SOUND_MARKS_PATTERN_REGEXP: RegExp = new RegExp(
  '[' + HIRAGANA_CHARS + KATAKANA_CHARS + ']ー'
);

/**
 * 長音符をかなに置き換える
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
export default function(str: string): string {
  while (KANA_WITH_PROLONGED_SOUND_MARKS_PATTERN_REGEXP.test(str)) {
    str = converter(str);
  }
  return str;
}

function converter(str: string): string {
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
