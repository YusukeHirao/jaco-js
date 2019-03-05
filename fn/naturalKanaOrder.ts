import isOnlyHiragana from './isOnlyHiragana';
import removeVoicedMarks from './removeVoicedMarks';
import replaceFromMap from './replaceFromMap';
import toNarrow from './toNarrow';
import toPhoeticKana from './toPhoeticKana';

/**
 * 配列の五十音順ソートをするためのソート関数
 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
 *
 * 漢字や絵文字はソートの比較にほぼ無関係なのでサロゲートペアを考慮したコードは不要
 *
 * @version 3.0.0
 * @since 1.1.0
 * @param string Array.prototype.sort から渡される配列要素
 * @param string Array.prototype.sort から渡される配列要素
 * @return 比較数値
 */
export default function(a: string, b: string): number {
  // 完全に一致ならば比較の必要なし
  if (a === b) {
    return 0;
  }

  const phoneticA = toPhoeticKana(toNarrow(a));
  const phoneticB = toPhoeticKana(toNarrow(b));
  const unvoicedA = removeVoicedMarks(phoneticA, true);
  const unvoicedB = removeVoicedMarks(phoneticB, true);
  const codeA = _convertNaturalKanaOrderNumberPhase1(unvoicedA);
  const codeB = _convertNaturalKanaOrderNumberPhase1(unvoicedB);
  const l = Math.max(a.length, b.length);
  const rSpecificPhoneticSign = /[ーぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮゝゞヽヾ]/;
  // 濁音・半濁音をのぞいたよみがなで比較
  if (codeA < codeB) {
    return -1;
  } else if (codeA > codeB) {
    return 1;
  } else {
    // 上記比較が全く同じであれば
    // 一文字ずつ比較する
    for (let i = 0; i < l; i++) {
      if (
        rSpecificPhoneticSign.test(a[i]) ||
        rSpecificPhoneticSign.test(b[i])
      ) {
        // 片方が「ーぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮゝゞヽヾ」に該当する場合
        const tmpA = _convertNaturalKanaOrderNumberPhase2(a[i]);
        const tmpB = _convertNaturalKanaOrderNumberPhase2(b[i]);
        if (tmpA < tmpB) {
          return -1;
        } else if (tmpA > tmpB) {
          return 1;
        }
      } else {
        // 平音・濁音・半濁音で比較
        if (phoneticA[i] < phoneticB[i]) {
          return -1;
        } else if (phoneticB[i] < phoneticA[i]) {
          return 1;
        }
      }
    }
    // もう一度、頭から一文字ずつ比較する
    for (let i = 0; i < l; i++) {
      // ひらがな・カタカナで比較
      const codePointA = isOnlyHiragana(a[i]) ? 0 : 1;
      const codePointB = isOnlyHiragana(b[i]) ? 0 : 1;
      if (codePointA < codePointB) {
        return -1;
      } else if (codePointA > codePointB) {
        return 1;
      }
    }
    return 0;
  }
}

/**
 * ソートのために内部コードを擬似的に置き換える フェーズ1
 *
 * 「あ」「い」「う」「え」「お」
 * 「か」「き」「く」「け」「こ」
 * 「さ」「し」「す」「せ」「そ」
 * 「た」「ち」「つ」「て」「と」
 * 「な」「に」「ぬ」「ね」「の」
 * 「は」「ひ」「ふ」「へ」「ほ」
 * 「ま」「み」「む」「め」「も」
 * 「や」「ゆ」「よ」
 * 「ら」「り」「る」「れ」「ろ」
 * 「わ」「ゐ」「ゑ」「を」「ん」
 * 「ゝ」「ー」
 * 上記の順にならぶように擬似的に文字のコード数値を変換する
 *
 * @version 3.0.0
 * @since 1.1.0
 * @param string 変換する文字列
 * @return 変換された文字列
 */
function _convertNaturalKanaOrderNumberPhase1(str: string): string {
  return replaceFromMap(str, {
    // 文字クラスで下記順序に並び替える。
    // 1. スペース（スペースと和字間隔）
    // 2. 記述記号（句点や疑問符、ダッシュ (記号)など）
    // 3. 括弧記号（括弧や引用符）
    // 4. 学術記号（演算記号などの数学記号と雄記号雌記号）
    // 5. 一般記号（丸印や矢印、アンパサンドなど）
    // 6. 単位記号（円記号やパーセント記号など）
    // 7. アラビア数字（0～9）
    // 8. 欧字記号（ギリシャ文字とキリル）
    // 9. ラテンアルファベット（アルファベット及びマクロンかサーカムフレックス付きアルファベット）
    // 10. 仮名（#仮名での並び替え参照）
    あ: '\u3041',
    い: '\u3042',
    う: '\u3043',
    え: '\u3044',
    お: '\u3045',
    か: '\u3046',
    き: '\u3047',
    く: '\u3048',
    け: '\u3049',
    こ: '\u304A',
    さ: '\u304B',
    し: '\u304C',
    す: '\u304D',
    せ: '\u304E',
    そ: '\u304F',
    た: '\u3050',
    ち: '\u3052',
    つ: '\u3053',
    て: '\u3054',
    と: '\u3055',
    な: '\u3056',
    に: '\u3057',
    ぬ: '\u3058',
    ね: '\u3059',
    の: '\u305A',
    は: '\u305B',
    ひ: '\u305C',
    ふ: '\u305D',
    へ: '\u305E',
    ほ: '\u305F',
    ま: '\u3060',
    み: '\u3061',
    む: '\u3062',
    め: '\u3063',
    も: '\u3064',
    や: '\u3065',
    ゆ: '\u3066',
    よ: '\u3067',
    ら: '\u3068',
    り: '\u3069',
    る: '\u306A',
    れ: '\u306B',
    ろ: '\u306C',
    わ: '\u306D',
    ゐ: '\u306E',
    ゑ: '\u306F',
    を: '\u3070',
    ん: '\u3071',
    ゝ: '\u3072',
    ー: '\u3073',
    // 11. 漢字（「〃」「仝」「々」「〆」「〇」及び漢字）
    // 12. 下駄記号（下駄記号）
    '〓': '\uFFFF'
  }).toString();
}

/**
 * ソートのためにコードポイントに一時的に置き換える フェーズ2
 *
 * 長音符→小書き文字→繰り返し記号→通常文字の順に並ぶようにコードを調整
 *
 * @version 1.1.0
 * @since 1.1.0
 * @param string 変換する文字（一文字しか受け取らない予定）
 * @return 変換された文字列
 */
function _convertNaturalKanaOrderNumberPhase2(str: string): string {
  // naturalKanaOrder関数で使用される場合は str は一文字想定
  const result = str
    .replace('ー', '0')
    .replace(
      /[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/,
      ($0: string): string => {
        return $0.charCodeAt(0).toString(16);
      }
    )
    .replace('ゝ', '4000')
    .replace('ヽ', '4001')
    .replace('ゞ', '4002')
    .replace('ヾ', '4003')
    // この時点で4桁の数字になっている
    .replace(/[^0-9]/, '9000');
  return result;
}
