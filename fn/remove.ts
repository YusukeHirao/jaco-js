import replace from './replace';

/**
 * 文字列を取り除く
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param str  元の文字列
 * @param pattern  取り除く文字列
 */
export default function(
  str: string,
  pattern: RegExp | { toString(): string }
): string {
  return replace(str, pattern, '');
}
