/**
 * 再帰的に文字列連結をおこなう
 *
 * @version 2.0.0
 * @since 0.2.0
 * @param ...args 文字列もしくはJacoインスタンス
 */
export default function concat(...args: ({
    toString(): string;
} | {
    toString(): string;
}[])[]): string;
