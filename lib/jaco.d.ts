/// <reference path="../typings/tsd.d.ts" />
declare module jaco {
    /**
    * ## Jacoクラス
    *
    * 日本語やマルチバイト文字・ASCII文字を扱いやすくするためのラッパークラス
    *
    * 文字列クラスを継承してはいないがメソッドは同等のものが実装されている。
    * ただし基本的にほとんどのメソッドが破壊的メソッドかつチェインナブルである。
    *
    * @version 0.3.0
    * @since 0.1.0
    */
    class Jaco {
        /**
        * コンストラクタ
        *
        * ```javascript
        * var a = new Jaco("あああ");
        *
        * // newなしでも生成できる
        * var b = Jaco("あああ");
        * ```
        *
        * @version 0.2.0
        * @since 0.1.0
        * @param str 対象の文字列
        */
        constructor(str: string);
        constructor(str: Jaco);
        /**
        * 保持する文字列
        *
        * @version 0.1.0
        * @since 0.1.0
        */
        private _str;
        /**
        * 明示もしくは暗黙の文字列変換メソッド
        *
        * @version 0.1.0
        * @since 0.1.0
        * @return 自身が保持する文字列
        */
        public toString(): string;
        /**
        * 暗黙の値変換に呼び出されるメソッド
        *
        * @version 0.1.0
        * @since 0.1.0
        * @return 自身が保持する文字列
        */
        public valueOf(): string;
        /**
        * 文字列連結をおこなう
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 自身
        */
        public concat(...likeStrings: any[]): Jaco;
        /**
        * 文字列をパターンで置換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param pattern  対象のパターン
        * @param replacement 置換する文字列
        * @return 自身
        */
        public replace(pattern: RegExp, replacement: string): Jaco;
        public replace(pattern: string, replacement: string): Jaco;
        /**
        * 文字位置による抽出
        * (非破壊的メソッド)
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param from 開始インデックス
        * @param to 終了インデックス 省略すると最後まで
        * @return 抽出した文字列からなるJacoインスタンス
        */
        public slice(from: number, to?: number): Jaco;
        /**
        * 指定した位置から指定した数だけ文字列を抽出
        * (非破壊的メソッド)
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param start 開始インデックス
        * @param length 指定数
        * @return 抽出した文字列からなるJacoインスタンス
        */
        public substr(start: number, length?: number): Jaco;
        /**
        * 指定した位置の間の文字列を抽出
        * (非破壊的メソッド)
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param indexA インデックス
        * @param indexB インデックス
        * @return 抽出した文字列からなるJacoインスタンス
        */
        public substring(indexA: number, indexB: number): Jaco;
        /**
        * 英字の大文字を小文字に変換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 自身
        */
        public toLowerCase(): Jaco;
        /**
        * 英字の小文字を大文字に変換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 自身
        */
        public toUpperCase(): Jaco;
        /**
        * 文字列を取り除く
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param pattern 取り除く文字列
        * @return 自身
        */
        public remove(pattern: RegExp): Jaco;
        public remove(pattern: string): Jaco;
        /**
        * 先頭と末尾の空白を取り除く
        *
        * [\s]で判定するのでほとんどの空白文字はヒットする
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 自身
        */
        public trim(): Jaco;
        /**
        * 文字列の長さを返す
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 文字列数
        */
        public size(): number;
        /**
        * 文字列のバイトサイズを返す
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return バイト数
        */
        public byteSize(): number;
        /**
        * 文字が空かどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 結果の真偽
        */
        public isEmpty(): boolean;
        /**
        * コピーを生成する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return コピー
        */
        public clone(): Jaco;
        /**
        * パターンとマッチするかどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param pattern パターン
        * @return 結果の真偽
        */
        public test(pattern: RegExp): boolean;
        public test(pattern: string): boolean;
        /**
        * 前方結合
        *
        * ```javascript
        * new Jaco("あああ").prepend("いいい").toString() // => "いいいあああ"
        * ```
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param element 結合する文字列
        * @return 自身
        */
        public prepend(element: Jaco): Jaco;
        public prepend(element: string): Jaco;
        /**
        * 後方結合
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param element 結合する文字列
        * @return 自身
        */
        public append(element: Jaco): Jaco;
        public append(element: string): Jaco;
        /**
        * 完全マッチ
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param target 比較する文字列
        * @return 結果の真偽
        */
        public is(target: Jaco): boolean;
        public is(target: string): boolean;
        /**
        * 該当の文字を含んでいるかどうか
        *
        * @version 0.3.0
        * @since 0.3.0
        * @param target 比較する文字列
        * @return 結果の真偽
        */
        public has(target: Jaco): boolean;
        public has(target: string): boolean;
        /**
        * 該当の文字だけで構成されているかどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param charactors 文字セット
        * @return 結果の真偽
        */
        public isOnly(charactors: string): boolean;
        /**
        * 数値に変換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 数値
        */
        public toNumber(): number;
        /**
        * ひらがなだけで構成されているかどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 結果の真偽
        */
        public isOnlyHiragana(): boolean;
        /**
        * カタカナだけで構成されているかどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 結果の真偽
        */
        public isOnlyKatakana(): boolean;
        /**
        * 濁点・半濁点を結合文字に変換
        *
        * @version 0.2.0
        * @since 0.1.0
        * @return 自身
        */
        public combinate(): Jaco;
        /**
        * ひらがなに変換する
        *
        * @version 0.2.0
        * @since 0.1.0
        * @param isCombinate 濁点・半濁点を結合文字にするかどうか
        * @return 自身
        */
        public toHiragana(isCombinate?: boolean): Jaco;
        /**
        * カタカナに変換する
        *
        * @version 0.2.0
        * @since 0.1.0
        * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
        * @return 自身
        */
        public toKatakana(toWide?: boolean): Jaco;
        /**
        * 半角カタカナに変換する
        *
        * @version 0.4.0
        * @since 0.1.0
        * @param fromHiragana ひらがなも変換する
        * @return 自身
        */
        public toNarrowKatakana(fromHiragana?: boolean): Jaco;
        /**
        * 全角カタカナに変換する
        *
        * @version 0.2.0
        * @since 0.1.0
        * @return 自身
        */
        public toWideKatakana(): Jaco;
        /**
        * 日本語で使われる記号を半角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return 自身
        */
        public toNarrowJapneseSymbol(): Jaco;
        /**
        * 日本語で使われる記号を全角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return 自身
        */
        public toWideJapneseSymbol(): Jaco;
        /**
        * カタカナと日本語で使われる記号を半角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return 自身
        */
        public toNarrowJapnese(): Jaco;
        /**
        * カタカナと日本語で使われる記号を全角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return 自身
        */
        public toWideJapnese(): Jaco;
        /**
        * 半角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return 自身
        */
        public toNarrow(convertJapaneseChars?: boolean): Jaco;
        /**
        * 全角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return 自身
        */
        public toWide(): Jaco;
        /**
        * 文字列中のそれぞれのひと文字に対してUnicode番号を指定の数値ずらす
        *
        * @version 0.2.0
        * @since 0.1.0
        * @param needle 対象のパターン
        * @param shiftNum ずらす数値
        * @return 自身
        */
        private _shift(needle, shiftNum);
        /**
        * 【非推奨】文字列をパターンで置換する
        * 同機能の`replace`メソッドを使う
        *
        * @deprecated 非推奨
        * @version 0.1.0
        * @since 0.1.0
        * @param needle 対象のパターン
        * @param replace 置換する文字列
        * @return 自身
        */
        private _replace(needle, replace);
        /**
        * キーがパターン・値が置換文字列のハッシュマップによって置換する
        *
        * @version 0.2.0
        * @since 0.1.0
        * @param {Object} convMap キーがパターン・値が置換文字列のハッシュマップ
        * @return 自身
        */
        private _replaceMap(convMap);
    }
}
declare module jaco {
    /**
    * 記号
    *
    * [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]
    *
    */
    var SIGN_CHARS: string;
    /**
    * 半角数字
    *
    * [0-9]
    *
    */
    var DIGIT_CAHRS: string;
    /**
    * 半角英字
    *
    * [A-Za-z]
    *
    */
    var ALPHA_CHARS: string;
    /**
    * 半角英数記号
    *
    * [!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~]
    *
    */
    var ALPHANUMERIC_CHARS_WITH_SIGN: string;
    /**
    * 全角記号
    *
    * [！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～]
    *
    */
    var FULLWIDTH_SING_CHARS: string;
    /**
    * 全角数字
    *
    * [０１２３４５６７８９]
    *
    */
    var FULLWIDTH_DIGIT_CHARS: string;
    /**
    * 全角英字
    *
    * [ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ]
    *
    */
    var FULLWIDTH_ALPHA_CHARS: string;
    /**
    * 全角英数記号
    *
    * [！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～]
    *
    */
    var FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN: string;
    /**
    * ひらがな
    *
    * [ぁ-ゖゝ-ゟ]
    *
    */
    var HIRAGANA_CHARS: string;
    /**
    * カタカナ
    *
    * [ァ-ヺヽ-ヿ]
    *
    */
    var KATAKANA_CHARS: string;
    /**
    * 濁点／半濁点(結合文字含む)・長音符
    *
    * [゛゜ー]
    *
    */
    var KANA_COMMON_CAHRS: string;
    /**
    * 日本語で使用される記号
    *
    * [　、。〃〄々〆〇〈〉《》「」『』【】〒〓〔〕〖〗〘〙〚〛〜〝〞〟〠〡〢〣〤〥〦〧〨〩〪〭〮〯〫〬〰〱〲〳〴〵〶・～]
    *
    * 波ダッシュ・全角チルダ問題があるため 全角チルダを含めることとする
    *
    * 参考: http://ja.wikipedia.org/wiki/Unicode#.E6.B3.A2.E3.83.80.E3.83.83.E3.82.B7.E3.83.A5.E3.83.BB.E5.85.A8.E8.A7.92.E3.83.81.E3.83.AB.E3.83.80.E5.95.8F.E9.A1.8C
    *
    */
    var JAPANESE_SIGN_CHARS: string;
    /**
    * 半角カタカナ
    *
    * 濁点／半濁点は分解されているのでそれを含む
    * ヰヱの半角は存在しないので対象外
    *
    * [ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ]
    *
    */
    var NARROW_KATAKANA_CHARS: string;
    /**
    * 半角の日本語で使用される記号
    *
    * [｡｢｣､･]
    *
    */
    var NARROW_JAPANESE_SIGN_CHARS: string;
    /**
    * スペース
    *
    * 仕様上、実際には「\u0009\u0020\u00A0\u2002〜\u200B\u3000\uFEFF'」すべて「\s」に含まれる
    *
    */
    var SPACE_CHARS: string;
    /**
    * ひらがな化
    *
    * @version 0.1.0
    * @since 0.1.0
    * @param str 対象の文字列
    * @param isCombinate 濁点・半濁点を結合文字にするかどうか
    * @return ひらがな化された文字列
    */
    function hiraganize(str: string, isCombinate?: boolean): string;
    /**
    * カタカナ化
    *
    * @version 0.1.0
    * @since 0.1.0
    * @param str 対象の文字列
    * @param isCombinate 濁点・半濁点を結合文字にするかどうか
    * @return カタカナ化された文字列
    */
    function katakanize(str: string, toWide?: boolean): string;
}
