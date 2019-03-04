import { FULLWIDTH_ALPHA_CHARS } from '../const/FULLWIDTH_ALPHA_CHARS';
import { FULLWIDTH_DIGIT_CHARS } from '../const/FULLWIDTH_DIGIT_CHARS';
import patternize from '../util/patternize';
import shift from '../util/shift';
/**
 * 英数字を半角に変換
 *
 * @version 2.0.0
 * @since 1.3.0
 * @param str 対象の文字列
 */
export default function (str) {
    return shift(str, patternize(FULLWIDTH_ALPHA_CHARS + FULLWIDTH_DIGIT_CHARS), -65248);
}
