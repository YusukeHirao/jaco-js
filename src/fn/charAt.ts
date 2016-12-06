import arrayize from '../util/arrayize';

/**
 * 文字列から指定位置の文字を返す
 *
 * - サロゲートペアを考慮する
 *
 * @version 2.0.0
 * @since 2.0.0
 * @param str 対象の文字列
 * @param index 指定位置
 */
export default function (str: string, index: number = 0): string {
	return arrayize(str)[index] || '';
}
