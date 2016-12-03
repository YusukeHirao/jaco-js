import Jaco from '../jaco';

/**
 * ひらがなだけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 1.1.0
 * @param str 対象の文字列
 */
export default function (str: string): boolean {
	return new Jaco(str).isOnlyHiragana();
}
