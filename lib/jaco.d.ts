/// <reference path="../src/DefinitelyTyped/node/node.d.ts" />
/**
* Japanese String & Charactor Converter
*
* @module jaco
* @main jaco
*/
declare module jaco {
    var SIGN_CHARS: string;
    var DIGIT_CAHRS: string;
    var ALPHA_CHARS: string;
    var ALPHANUMERIC_CHARS_WITH_SIGN: string;
    var FULLWIDTH_SING_CHARS: string;
    var FULLWIDTH_DIGIT_CHARS: string;
    var FULLWIDTH_ALPHA_CHARS: string;
    var FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN: string;
    var HIRAGANA_CHARS: string;
    var KATAKANA_CHARS: string;
    var KANA_COMMON_CAHRS: string;
    var JAPANESE_SIGN_CHARS: string;
    var NARROW_KATAKANA_CHARS: string;
    var NARROW_JAPANESE_SIGN_CHARS: string;
    var SPACE_LIKE_CHARS: string;
    function hiraganize(str: string, isCombinate?: boolean): string;
    function katakanize(str: string, toWide?: boolean): string;
    /**
    * Jacoクラス
    *
    * @class Jaco
    * @since 0.1.0
    * @uses jaco
    * @constructor
    * @param {string|Jaco} [str=''] 対象の文字列
    */
    class Jaco {
        constructor(str: string);
        constructor(str: Jaco);
        /**
        * 保持する文字列
        *
        * @property _str
        * @since 0.1.0
        * @type String
        * @private
        */
        private _str;
        /**
        * 明示もしくは暗黙の文字列変換メソッド
        *
        * @method toString
        * @since 0.1.0
        * @override
        * @return {string} 自身が保持する文字列
        */
        public toString(): string;
        /**
        * 暗黙の値変換に呼び出されるメソッド
        *
        * @method valueOf
        * @since 0.1.0
        * @override
        * @return {string} 自身が保持する文字列
        */
        public valueOf(): string;
        /**
        * 文字列連結をおこなう
        *
        * @method concat
        * @since 0.2.0
        * @chainable
        * @return {Jaco} 自身
        */
        public concat(...likeStrings: any[]): Jaco;
        /**
        * 文字列をパターンで置換する
        *
        * @method replace
        * @since 0.2.0
        * @public
        * @param {RegExp|string} pattern  対象のパターン
        * @param {string} replacement 置換する文字列
        * @chainable
        * @return {Jaco} 自身
        */
        public replace(pattern: RegExp, replacement: string): Jaco;
        public replace(pattern: string, replacement: string): Jaco;
        /**
        * 文字位置による抽出
        * (非破壊的メソッド)
        *
        * @method slice
        * @since 0.2.0
        * @public
        * @param {number} from 開始インデックス
        * @param {number} [to] 終了インデックス 省略すると最後まで
        * @return {Jaco} 抽出した文字列からなるJacoインスタンス
        */
        public slice(from: number, to?: number): Jaco;
        /**
        * 指定した位置から指定した数だけ文字列を抽出
        * (非破壊的メソッド)
        *
        * @method substr
        * @since 0.2.0
        * @param {number} start 開始インデックス
        * @param {number} [length] 指定数
        * @return {Jaco} 抽出した文字列からなるJacoインスタンス
        */
        public substr(start: number, length?: number): Jaco;
        /**
        * 指定した位置の間の文字列を抽出
        * (非破壊的メソッド)
        *
        * @method substring
        * @since 0.2.0
        * @param {number} indexA インデックス
        * @param {number} indexB インデックス
        * @return {Jaco} 抽出した文字列からなるJacoインスタンス
        */
        public substring(indexA: number, indexB: number): Jaco;
        /**
        * 英字の大文字を小文字に変換する
        *
        * @method toLowerCase
        * @since 0.2.0
        * @chainable
        * @return {Jaco} 自身
        */
        public toLowerCase(): Jaco;
        /**
        * 英字の小文字を大文字に変換する
        *
        * @method toUpperCase
        * @since 0.2.0
        * @chainable
        * @return {Jaco} 自身
        */
        public toUpperCase(): Jaco;
        /**
        *
        *
        * @method remove
        * @since 0.2.0
        * @param {RegExp|string} pattern 取り除く文字列
        * @chainable
        * @return {Jaco} 自身
        */
        public remove(pattern: RegExp): Jaco;
        public remove(pattern: string): Jaco;
        /**
        * 先頭と末尾の空白を取り除く
        * [\s]で判定するのでほとんどの空白文字はヒットする
        *
        * @method trim
        * @since 0.2.0
        * @chainable
        * @return {Jaco} 自身
        */
        public trim(): Jaco;
        /**
        * 文字列の長さを返す
        *
        * @method size
        * @since 0.2.0
        * @return {number} 文字列数
        */
        public size(): number;
        /**
        * 文字列のバイトサイズを返す
        *
        * @method byteSize
        * @since 0.2.0
        * @return {number} バイト数
        */
        public byteSize(): number;
        /**
        * 文字が空かどうか
        *
        * @method isEmpty
        * @since 0.2.0
        * @return {boolean} 結果の真偽
        */
        public isEmpty(): boolean;
        /**
        * コピーを生成する
        *
        * @method clone
        * @since 0.2.0
        * @return {Jaco} コピー
        */
        public clone(): Jaco;
        /**
        * パターンとマッチするかどうか
        *
        * @method test
        * @since 0.2.0
        * @param {RegExp|string} pattern パターン
        * @return {boolean} 結果の真偽
        */
        public test(pattern: RegExp): boolean;
        public test(pattern: string): boolean;
        /**
        * 前方結合
        *
        * @method prepend
        * @since 0.2.0
        * @param {Jaco|string} element 結合する文字列
        * @chainable
        * @return {Jaco} 自身
        */
        public prepend(element: Jaco): Jaco;
        public prepend(element: string): Jaco;
        /**
        * 後方結合
        *
        * @method append
        * @since 0.2.0
        * @param {Jaco|string} element 結合する文字列
        * @chainable
        * @return {Jaco} 自身
        */
        public append(element: Jaco): Jaco;
        public append(element: string): Jaco;
        /**
        * 完全マッチ
        *
        * @method is
        * @since 0.2.0
        * @param {Jaco|string} target 比較する文字列
        * @return {boolean} 結果の真偽
        */
        public is(target: Jaco): boolean;
        public is(target: string): boolean;
        /**
        * 該当の文字を含んでいるかどうか
        *
        * @method has
        * @since 0.3.0
        * @param {Jaco|string} target 比較する文字列
        * @return {boolean} 結果の真偽
        */
        public has(target: Jaco): boolean;
        public has(target: string): boolean;
        /**
        * 該当の文字だけで構成されているかどうか
        *
        * @method isOnly
        * @since 0.2.0
        * @param {string} charactors 文字セット
        * @return {boolean} 結果の真偽
        */
        public isOnly(charactors: string): boolean;
        /**
        * 数値に変換する
        *
        * @method toNumber
        * @since 0.2.0
        * @return {number} 数値
        */
        public toNumber(): number;
        /**
        * ひらがなだけで構成されているかどうか
        *
        * @method isOnlyHiragana
        * @since 0.2.0
        * @return {boolean} 結果の真偽
        */
        public isOnlyHiragana(): boolean;
        /**
        * カタカナだけで構成されているかどうか
        *
        * @method isOnlyKatakana
        * @since 0.2.0
        * @return {boolean} 結果の真偽
        */
        public isOnlyKatakana(): boolean;
        /**
        * 濁点・半濁点を結合文字に変換
        *
        * @method combinate
        * @since 0.1.0
        * @chainable
        * @return {Jaco} 自身
        */
        public combinate(): Jaco;
        /**
        * ひらがなに変換する
        *
        * @method toHiragana
        * @since 0.1.0
        * @param {string} str 対象の文字列
        * @param {Boolean} [isCombinate=false] 濁点・半濁点を結合文字にするかどうか
        * @chainable
        * @return {Jaco} 自身
        */
        public toHiragana(isCombinate?: boolean): Jaco;
        /**
        * カタカナに変換する
        *
        * @method toKatakana
        * @since 0.1.0
        * @param {string} str 対象の文字列
        * @param {Boolean} [toWide=true] 半角カタカナを全角カタカナへ変換するかどうか
        * @chainable
        * @return {Jaco} 自身
        */
        public toKatakana(toWide?: boolean): Jaco;
        /**
        * 半角カタカナに変換する
        *
        * @method toNarrowKatakana
        * @since 0.1.0
        * @param {string} str 対象の文字列
        * @chainable
        * @return {Jaco} 自身
        */
        public toNarrowKatakana(): Jaco;
        /**
        * 全角カタカナに変換する
        *
        * @method toWideKatakana
        * @since 0.1.0
        * @param {string} str 対象の文字列
        * @chainable
        * @return {Jaco} 自身
        */
        public toWideKatakana(): Jaco;
        /**
        * 文字列中のそれぞれのひと文字に対してUnicode番号を指定の数値ずらす
        *
        * @method _shift
        * @since 0.1.0
        * @private
        * @param {RegExp} needle 対象のパターン
        * @param {Number} shiftNum ずらす数値
        * @chainable
        * @return {Jaco} 自身
        */
        private _shift(needle, shiftNum);
        /**
        * 【非推奨】文字列をパターンで置換する
        * 同機能の`replace`メソッドを使う
        *
        * @method _replace
        * @deprecated
        * @since 0.1.0
        * @private
        * @param {RegExp} needle 対象のパターン
        * @param {string} replace 置換する文字列
        * @chainable
        * @return {Jaco} 自身
        */
        private _replace(needle, replace);
        /**
        * キーがパターン・値が置換文字列のハッシュマップによって置換する
        *
        * @method _replaceMap
        * @since 0.1.0
        * @private
        * @param {Object} convMap キーがパターン・値が置換文字列のハッシュマップ
        * @chainable
        * @return {Jaco} 自身
        */
        private _replaceMap(convMap);
    }
}
