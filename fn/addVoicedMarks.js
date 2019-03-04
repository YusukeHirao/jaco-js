import remove from './remove';
import replaceFromMap from './replaceFromMap';
/**
 * 濁点を追加する
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
export default function (str) {
    // 濁点・半濁点単体の除去
    str = remove(str, /\u309B|\u3099|\uFF9E/g);
    str = remove(str, /\u309C|\u309A|\uFF9F/g);
    str = replaceFromMap(str, {
        か: 'が',
        き: 'ぎ',
        く: 'ぐ',
        け: 'げ',
        こ: 'ご',
        さ: 'ざ',
        し: 'じ',
        す: 'ず',
        せ: 'ぜ',
        そ: 'ぞ',
        た: 'だ',
        ち: 'ぢ',
        つ: 'づ',
        て: 'で',
        と: 'ど',
        は: 'ば',
        ひ: 'び',
        ふ: 'ぶ',
        へ: 'べ',
        ほ: 'ぼ',
        カ: 'ガ',
        キ: 'ギ',
        ク: 'グ',
        ケ: 'ゲ',
        コ: 'ゴ',
        サ: 'ザ',
        シ: 'ジ',
        ス: 'ズ',
        セ: 'ゼ',
        ソ: 'ゾ',
        タ: 'ダ',
        チ: 'ヂ',
        ツ: 'ヅ',
        テ: 'デ',
        ト: 'ド',
        ハ: 'バ',
        ヒ: 'ビ',
        フ: 'ブ',
        ヘ: 'ベ',
        ホ: 'ボ',
        ワ: 'ヷ',
        イ: 'ヸ',
        ウ: 'ヴ',
        エ: 'ヹ',
        ヺ: 'ヲ',
        ゝ: 'ゞ',
        ヽ: 'ヾ'
    });
    return str;
}
