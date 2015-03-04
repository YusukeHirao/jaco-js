/// <reference path="../typings/bundle.d.ts" />
/**
* jacoモジュール
*
* 日本語やマルチバイト文字・ASCII文字を扱いやすくするためのモジュール
*
* 主に`Jaco`クラスのインスタンスを利用する
*
* ```
* var jSt = new jaco.Jaco("あいうえお");
* ```
*
*/
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
    * ひらがな（繰り返し記号・合字なし）
    *
    * [ぁ-ゖ]
    *
    */
    var HIRAGANA_CHARS_IGNORE_ITERATION_MARKS: string;
    /**
    * カタカナ
    *
    * [ァ-ヺヽ-ヿ]
    *
    */
    var KATAKANA_CHARS: string;
    /**
    * カタカナ（繰り返し記号・合字なし）
    *
    * [ァ-ヺ]
    *
    */
    var KATAKANA_CHARS_IGNORE_ITERATION_MARKS: string;
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
    * [波ダッシュ・全角チルダ問題](http://goo.gl/w1xV9Z)があるため 全角チルダを含めることとする
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
    /**
    * ひらがなだけで構成されているかどうか
    *
    * @version 1.1.0
    * @since 1.1.0
    * @param str 対象の文字列
    * @return ひらがなだけで構成されているかどうか
    */
    function hiraganaOnly(str: string): boolean;
    /**
    * カタカナだけで構成されているかどうか
    *
    * @version 1.1.0
    * @since 1.1.0
    * @param str 対象の文字列
    * @return カタカナだけで構成されているかどうか
    */
    function katakanaOnly(str: string): boolean;
    /**
    * 配列の五十音順ソートをする
    * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
    *
    * @version 1.1.0
    * @since 1.1.0
    * @param array 対象の配列
    * @return 五十音順にソートされた配列
    */
    function naturalKanaSort(array: string[]): string[];
    /**
    * 配列の五十音順ソートをするためのソート関数
    * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
    *
    * @version 1.1.0
    * @since 1.1.0
    * @param string Array.prototype.sort から渡される配列要素
    * @param string Array.prototype.sort から渡される配列要素
    * @return 比較数値
    */
    function naturalKanaOrder(a: string, b: string): number;
}
declare module jaco {
    /**
    * ## Jacoクラス
    *
    * 日本語やマルチバイト文字・ASCII文字を扱いやすくするためのラッパークラス
    *
    * 文字列クラスを継承してはいないがメソッドは同等のものが実装されている。
    * ただし基本的にほとんどのメソッドが破壊的メソッドかつチェインナブルである。
    *
    * @version 0.5.0
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
        constructor(str: string | Jaco);
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
        * @return インスタンス自身が保持する文字列
        */
        toString(): string;
        /**
        * 暗黙の値変換に呼び出されるメソッド
        *
        * @version 0.1.0
        * @since 0.1.0
        * @return インスタンス自身が保持する文字列
        */
        valueOf(): string;
        /**
        * 文字列連結をおこなう
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return インスタンス自身
        */
        concat(...likeStrings: any[]): Jaco;
        /**
        * 文字列をパターンで置換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param pattern  対象のパターン
        * @param replacement 置換する文字列
        * @return インスタンス自身
        */
        replace(pattern: string | RegExp, replacement: string): Jaco;
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
        slice(from: number, to?: number): Jaco;
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
        substr(start: number, length?: number): Jaco;
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
        substring(indexA: number, indexB: number): Jaco;
        /**
        * 英字の大文字を小文字に変換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return インスタンス自身
        */
        toLowerCase(): Jaco;
        /**
        * 英字の小文字を大文字に変換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return インスタンス自身
        */
        toUpperCase(): Jaco;
        /**
        * 文字列を取り除く
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param pattern 取り除く文字列
        * @return インスタンス自身
        */
        remove(pattern: string | RegExp): Jaco;
        /**
        * 先頭と末尾の空白を取り除く
        *
        * [\s]で判定するのでほとんどの空白文字はヒットする
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return インスタンス自身
        */
        trim(): Jaco;
        /**
        * 文字列の長さを返す
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 文字列数
        */
        size(): number;
        /**
        * 文字列のバイトサイズを返す
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return バイト数
        */
        byteSize(): number;
        /**
        * 文字が空かどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 結果の真偽
        */
        isEmpty(): boolean;
        /**
        * コピーを生成する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return コピー
        */
        clone(): Jaco;
        /**
        * パターンとマッチするかどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param pattern パターン
        * @return 結果の真偽
        */
        test(pattern: string | RegExp): boolean;
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
        * @return インスタンス自身
        */
        prepend(element: string | Jaco): Jaco;
        /**
        * 後方結合
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param element 結合する文字列
        * @return インスタンス自身
        */
        append(element: string | Jaco): Jaco;
        /**
        * 完全マッチ
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param target 比較する文字列
        * @return 結果の真偽
        */
        is(target: string | Jaco): boolean;
        /**
        * 該当の文字を含んでいるかどうか
        *
        * @version 0.3.0
        * @since 0.3.0
        * @param target 比較する文字列
        * @return 結果の真偽
        */
        has(target: string | Jaco): boolean;
        /**
        * 該当の文字だけで構成されているかどうか
        *
        * @version 1.1.0
        * @since 0.2.0
        * @param characters 文字セット
        * @return 結果の真偽
        */
        isOnly(characters: string | Jaco): boolean;
        /**
        * ひらがなだけで構成されているかどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 結果の真偽
        */
        isOnlyHiragana(): boolean;
        /**
        * カタカナだけで構成されているかどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 結果の真偽
        */
        isOnlyKatakana(): boolean;
        /**
        * 数字だけで構成されているかどうか
        *
        * @version 0.5.0
        * @since 0.5.0
        * @param negative 負の数値も含めてチェックするかどうか
        * @param floatingPoint 小数としてチェックするかどうか
        * @return 結果の真偽
        */
        isNumeric(negative?: boolean, floatingPoint?: boolean): boolean;
        /**
        * 数値に変換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 数値
        */
        toNumber(): number;
        /**
        * 数字に変換する
        *
        * @version 0.5.0
        * @since 0.5.0
        * @param negative 負の値を許可してマイナスをつけるかどうか
        * @param floatingPoint 小数を許可してドットをつけるかどうか
        * @return インスタンス自身
        */
        toNumeric(negative?: boolean, floatingPoint?: boolean): Jaco;
        /**
        * [非推奨] 濁点・半濁点を結合文字に変換
        *
        * メソッド名変更およびAPI更新につき非推奨
        *
        * @deprecated v2.0.0削除予定
        * @see [combinateSoundMarks](#combinatesoundmarks)
        * @version 0.2.0
        * @since 0.1.0
        * @return インスタンス自身
        */
        combinate(): Jaco;
        /**
        * 濁点・半濁点を結合するか、もしくは結合文字に変換
        *
        * @deprecated
        * @version 1.2.0
        * @since 1.2.0
        * @return インスタンス自身
        */
        combinateSoundMarks(isConvertCombiningSoundMarks?: boolean): Jaco;
        /**
        * ひらがなに変換する
        *
        * @version 0.2.0
        * @since 0.1.0
        * @param isCombinate 濁点・半濁点を結合文字にするかどうか
        * @return インスタンス自身
        */
        toHiragana(isCombinate?: boolean): Jaco;
        /**
        * カタカナに変換する
        *
        * @version 0.2.0
        * @since 0.1.0
        * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
        * @return インスタンス自身
        */
        toKatakana(toWide?: boolean): Jaco;
        /**
        * 半角カタカナに変換する
        *
        * @version 0.6.0
        * @since 0.1.0
        * @param fromHiragana ひらがなも変換する
        * @return インスタンス自身
        */
        toNarrowKatakana(fromHiragana?: boolean): Jaco;
        /**
        * 全角カタカナに変換する
        *
        * @version 0.2.0
        * @since 0.1.0
        * @return インスタンス自身
        */
        toWideKatakana(): Jaco;
        /**
        * 日本語で使われる記号を半角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        toNarrowJapneseSymbol(): Jaco;
        /**
        * 日本語で使われる記号を全角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        toWideJapneseSymbol(): Jaco;
        /**
        * カタカナと日本語で使われる記号を半角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        toNarrowJapnese(): Jaco;
        /**
        * カタカナと日本語で使われる記号を全角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        toWideJapnese(): Jaco;
        /**
        * 半角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        toNarrow(convertJapaneseChars?: boolean): Jaco;
        /**
        * 全角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        toWide(): Jaco;
        /**
        * 濁点を追加する
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自信
        */
        addVoicedMarks(): Jaco;
        /**
        * 半濁点を追加する
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自信
        */
        addSemivoicedMarks(): Jaco;
        /**
        * 濁点・半濁点を取り除く
        *
        * @version 1.1.0
        * @since 1.1.0
        * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
        * @return インスタンス自信
        */
        removeVoicedMarks(ignoreSingleMark?: boolean): Jaco;
        /**
        * 長音符をかなに置き換える
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自信
        */
        convertProlongedSoundMarks(): Jaco;
        /**
        * 繰り返し記号をかなに置き換える
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自信
        */
        convertIterationMarks(): Jaco;
        /**
        * 小書き文字を基底文字に変換する
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自身
        */
        toBasicLetter(): Jaco;
        /**
        * 小書き文字を含むかどうか
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return 小書き文字を含むかどうか
        */
        hasSmallLetter(): boolean;
        /**
        * よみの文字に変換する
        * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自身
        */
        toPhoeticKana(): Jaco;
        /**
        * キーがパターン・値が置換文字列のハッシュマップによって置換する
        *
        * @version 0.1.1
        * @since 0.1.0
        * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
        * @return インスタンス自身
        */
        replaceMap(convMap: {
            [target: string]: string;
        }): Jaco;
        /**
        * 文字列中のそれぞれのひと文字に対してUnicode番号を指定の数値ずらす
        *
        * @version 0.2.0
        * @since 0.1.0
        * @param needle 対象のパターン
        * @param shiftNum ずらす数値
        * @return インスタンス自身
        */
        private _shift(needle, shiftNum);
    }
}
