import replaceFromMap from './replaceFromMap';
/**
 * 日本語で使われる記号を半角に変換
 *
 * @version 2.0.0
 * @since 0.4.0
 * @param str 対象の文字列
 */
export default function (str) {
    str = replaceFromMap(str, {
        '。': '｡',
        '「': '｢',
        '」': '｣',
        '、': '､',
        '・': '･'
    });
    return str;
}
