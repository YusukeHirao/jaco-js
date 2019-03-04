/**
 * 再帰的に文字列連結をおこなう
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param ...args 文字列もしくはJacoインスタンス
 */
export default function concat(
  ...args: ({ toString(): string } | { toString(): string }[])[]
): string {
  return args
    .map(str => {
      if (Array.isArray(str)) {
        return str
          .map(_str => (Array.isArray(_str) ? concat(_str) : _str))
          .join('');
      } else {
        return str.toString();
      }
    })
    .join('');
}
