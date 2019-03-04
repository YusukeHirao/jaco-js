import indexOf from './indexOf';
/**
 * 指定された文字列が最初に現れるインデックスを返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param search 検索文字列
 * @param fromIndex 検索位置
 */
export default function (str, search, position) {
    if (position === void 0) { position = 0; }
    return indexOf(str, search, position) !== -1;
}
