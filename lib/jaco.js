/*!
 * jaco - v1.2.1
 * Japanese Character Optimizer.
 * update: 2015-09-21
 * Author: YusukeHirao [http://jaco-project.github.io/docs/]
 * Repository: git@github.com:jaco-project/jaco-js.git
 * License: MIT
 */

(function () {
	'use strict';

	var global = this;

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
var jaco;
(function (jaco) {
    /**
    * 記号
    *
    * [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]
    *
    */
    jaco.SIGN_CHARS = '\\u0020-\\u002F\\u003A-\\u0041\\u005B-\\u0061\\u007B-\\u007E';
    /**
    * 半角数字
    *
    * [0-9]
    *
    */
    jaco.DIGIT_CAHRS = '0-9';
    /**
    * 半角英字
    *
    * [A-Za-z]
    *
    */
    jaco.ALPHA_CHARS = 'A-Za-z';
    /**
    * 半角英数記号
    *
    * [!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~]
    *
    */
    jaco.ALPHANUMERIC_CHARS_WITH_SIGN = '\\u0020-\\u007E';
    /**
    * 全角記号
    *
    * [！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～]
    *
    */
    jaco.FULLWIDTH_SING_CHARS = '\\uFF01-\\uFF0F\\uFF1A-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF5E';
    /**
    * 全角数字
    *
    * [０１２３４５６７８９]
    *
    */
    jaco.FULLWIDTH_DIGIT_CHARS = '\\uFF10-\\uFF19';
    /**
    * 全角英字
    *
    * [ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ]
    *
    */
    jaco.FULLWIDTH_ALPHA_CHARS = '\\uFF21-\\uFF3A\\uFF41-\\uFF5A';
    /**
    * 全角英数記号
    *
    * [！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～]
    *
    */
    jaco.FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN = '\\uFF01-\\uFF5F';
    /**
    * ひらがな
    *
    * [ぁ-ゖゝ-ゟ]
    *
    */
    jaco.HIRAGANA_CHARS = '\\u3041-\\u3096\\u309D-\\u309F';
    /**
    * ひらがな（繰り返し記号・合字なし）
    *
    * [ぁ-ゖ]
    *
    */
    jaco.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS = '\\u3041-\\u3096';
    /**
    * カタカナ
    *
    * [ァ-ヺヽ-ヿ]
    *
    */
    jaco.KATAKANA_CHARS = '\\u30A1-\\u30FA\\u30FD\\u30FF';
    /**
    * カタカナ（繰り返し記号・合字なし）
    *
    * [ァ-ヺ]
    *
    */
    jaco.KATAKANA_CHARS_IGNORE_ITERATION_MARKS = '\\u30A1-\\u30FA';
    /**
    * 濁点／半濁点(結合文字含む)・長音符
    *
    * [゛゜ー]
    *
    */
    jaco.KANA_COMMON_CAHRS = '\u3099-\u309C\u30FC';
    /**
    * 日本語で使用される記号
    *
    * [　、。〃〄々〆〇〈〉《》「」『』【】〒〓〔〕〖〗〘〙〚〛〜〝〞〟〠〡〢〣〤〥〦〧〨〩〪〭〮〯〫〬〰〱〲〳〴〵〶・～]
    *
    * [波ダッシュ・全角チルダ問題](http://goo.gl/w1xV9Z)があるため 全角チルダを含めることとする
    *
    */
    jaco.JAPANESE_SIGN_CHARS = '\u3000-\u3036\u30FB\\uFF5E';
    /**
    * 半角カタカナ
    *
    * 濁点／半濁点は分解されているのでそれを含む
    * ヰヱの半角は存在しないので対象外
    *
    * [ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ]
    *
    */
    jaco.NARROW_KATAKANA_CHARS = '\\uFF66-\\uFF9F';
    /**
    * 半角の日本語で使用される記号
    *
    * [｡｢｣､･]
    *
    */
    jaco.NARROW_JAPANESE_SIGN_CHARS = '\\uFF61-\\uFF65';
    /**
    * スペース
    *
    * 仕様上、実際には「\u0009\u0020\u00A0\u2002〜\u200B\u3000\uFEFF'」すべて「\s」に含まれる
    *
    */
    jaco.SPACE_CHARS = '\\s\\n\\t\\u0009\\u0020\\u00A0\\u2002-\\u200B\\u3000\\uFEFF';
    /**
    * ひらがな化
    *
    * @version 0.1.0
    * @since 0.1.0
    * @param str 対象の文字列
    * @param isCombinate 濁点・半濁点を結合文字にするかどうか
    * @return ひらがな化された文字列
    */
    function hiraganize(str, isCombinate) {
        if (isCombinate === void 0) { isCombinate = false; }
        return new jaco.Jaco(str).toHiragana(isCombinate).toString();
    }
    jaco.hiraganize = hiraganize;
    /**
    * カタカナ化
    *
    * @version 0.1.0
    * @since 0.1.0
    * @param str 対象の文字列
    * @param isCombinate 濁点・半濁点を結合文字にするかどうか
    * @return カタカナ化された文字列
    */
    function katakanize(str, toWide) {
        if (toWide === void 0) { toWide = true; }
        return new jaco.Jaco(str).toKatakana(toWide).toString();
    }
    jaco.katakanize = katakanize;
    /**
    * ひらがなだけで構成されているかどうか
    *
    * @version 1.1.0
    * @since 1.1.0
    * @param str 対象の文字列
    * @return ひらがなだけで構成されているかどうか
    */
    function hiraganaOnly(str) {
        return new jaco.Jaco(str).isOnlyHiragana();
    }
    jaco.hiraganaOnly = hiraganaOnly;
    /**
    * カタカナだけで構成されているかどうか
    *
    * @version 1.1.0
    * @since 1.1.0
    * @param str 対象の文字列
    * @return カタカナだけで構成されているかどうか
    */
    function katakanaOnly(str) {
        return new jaco.Jaco(str).isOnlyKatakana();
    }
    jaco.katakanaOnly = katakanaOnly;
    /**
    * 配列の五十音順ソートをする
    * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
    *
    * @version 1.1.0
    * @since 1.1.0
    * @param array 対象の配列
    * @return 五十音順にソートされた配列
    */
    function naturalKanaSort(array) {
        return array.sort(jaco.naturalKanaOrder);
    }
    jaco.naturalKanaSort = naturalKanaSort;
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
    function naturalKanaOrder(a, b) {
        // 完全に一致ならば比較の必要なし
        if (a === b) {
            return 0;
        }
        var _a = new jaco.Jaco(a).toNarrow().toPhoeticKana();
        var _b = new jaco.Jaco(b).toNarrow().toPhoeticKana();
        var __a; // tempString
        var __b; // tempString
        var phoneticA = _a.toString();
        var phoneticB = _b.toString();
        var unvoicedA = _a.removeVoicedMarks(true).toString();
        var unvoicedB = _b.removeVoicedMarks(true).toString();
        var codeA = convertNaturalKanaOrderNumberPhase1(unvoicedA);
        var codeB = convertNaturalKanaOrderNumberPhase1(unvoicedB);
        var i = 0;
        var l = Math.max(a.length, b.length);
        var rSpecificPhoneticSign = /[ーぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮゝゞヽヾ]/;
        // 濁音・半濁音をのぞいたよみがなで比較
        if (codeA < codeB) {
            return -1;
        }
        else if (codeA > codeB) {
            return 1;
        }
        else {
            // 上記比較が全く同じであれば
            // 一文字ずつ比較する
            for (; i < l; i++) {
                if (rSpecificPhoneticSign.test(a[i]) || rSpecificPhoneticSign.test(b[i])) {
                    // 片方が「ーぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮゝゞヽヾ」に該当する場合
                    __a = convertNaturalKanaOrderNumberPhase2(a[i]);
                    __b = convertNaturalKanaOrderNumberPhase2(b[i]);
                    if (__a < __b) {
                        return -1;
                    }
                    else if (__a > __b) {
                        return 1;
                    }
                }
                else {
                    // 平音・濁音・半濁音で比較
                    if (phoneticA[i] < phoneticB[i]) {
                        return -1;
                    }
                    else if (phoneticB[i] < phoneticA[i]) {
                        return 1;
                    }
                }
            }
            // もう一度、頭から一文字ずつ比較する
            for (i = 0; i < l; i++) {
                // ひらがな・カタカナで比較
                __a = jaco.hiraganaOnly(a[i]) ? '0' : '1';
                __b = jaco.hiraganaOnly(b[i]) ? '0' : '1';
                if (__a < __b) {
                    return -1;
                }
                else if (__a > __b) {
                    return 1;
                }
            }
            return 0;
        }
    }
    jaco.naturalKanaOrder = naturalKanaOrder;
    /**
    * ソートのために内部コードを擬似的に置き換える フェーズ1
    *
    * 「あ」「い」「う」「え」「お」
    * 「か」「き」「く」「け」「こ」
    * 「さ」「し」「す」「せ」「そ」
    * 「た」「ち」「つ」「て」「と」
    * 「な」「に」「ぬ」「ね」「の」
    * 「は」「ひ」「ふ」「へ」「ほ」
    * 「ま」「み」「む」「め」「も」
    * 「や」「ゆ」「よ」
    * 「ら」「り」「る」「れ」「ろ」
    * 「わ」「ゐ」「ゑ」「を」「ん」
    * 「ゝ」「ー」
    * 上記の順にならぶように擬似的に文字のコード数値を変換する
    *
    * @version 1.1.0
    * @since 1.1.0
    * @param string 変換する文字列
    * @return 変換された文字列
    */
    function convertNaturalKanaOrderNumberPhase1(str) {
        return new jaco.Jaco(str).replaceMap({
            'あ': '\u3041',
            'い': '\u3042',
            'う': '\u3043',
            'え': '\u3044',
            'お': '\u3045',
            'か': '\u3046',
            'き': '\u3047',
            'く': '\u3048',
            'け': '\u3049',
            'こ': '\u304A',
            'さ': '\u304B',
            'し': '\u304C',
            'す': '\u304D',
            'せ': '\u304E',
            'そ': '\u304F',
            'た': '\u3050',
            'ち': '\u3052',
            'つ': '\u3053',
            'て': '\u3054',
            'と': '\u3055',
            'な': '\u3056',
            'に': '\u3057',
            'ぬ': '\u3058',
            'ね': '\u3059',
            'の': '\u305A',
            'は': '\u305B',
            'ひ': '\u305C',
            'ふ': '\u305D',
            'へ': '\u305E',
            'ほ': '\u305F',
            'ま': '\u3060',
            'み': '\u3061',
            'む': '\u3062',
            'め': '\u3063',
            'も': '\u3064',
            'や': '\u3065',
            'ゆ': '\u3066',
            'よ': '\u3067',
            'ら': '\u3068',
            'り': '\u3069',
            'る': '\u306A',
            'れ': '\u306B',
            'ろ': '\u306C',
            'わ': '\u306D',
            'ゐ': '\u306E',
            'ゑ': '\u306F',
            'を': '\u3070',
            'ん': '\u3071',
            'ゝ': '\u3072',
            'ー': '\u3073'
        }).toString();
    }
    /**
    * ソートのために内部コードを擬似的に置き換える フェーズ2
    *
    * 長音符→小書き文字→繰り返し記号→通常文字の順に並ぶようにコードを調整
    *
    * @version 1.1.0
    * @since 1.1.0
    * @param string 変換する文字（一文字しか受け取らない予定）
    * @return 変換された文字列
    */
    function convertNaturalKanaOrderNumberPhase2(str) {
        // naturalKanaOrder関数で使用される場合は str は一文字想定
        var result = str
            .replace('ー', '0')
            .replace(/[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/, function ($0) {
            return $0.charCodeAt(0).toString(16);
        })
            .replace('ゝ', '4000')
            .replace('ヽ', '4001')
            .replace('ゞ', '4002')
            .replace('ヾ', '4003')
            .replace(/[^0-9]/, '9000');
        return result;
    }
})(jaco || (jaco = {}));
var jaco;
(function (jaco) {
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
    var Jaco = (function () {
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
        function Jaco(str) {
            if (!(this instanceof Jaco)) {
                return new Jaco(str);
            }
            this._str = str.toString();
        }
        /**
        * 明示もしくは暗黙の文字列変換メソッド
        *
        * @version 0.1.0
        * @since 0.1.0
        * @return インスタンス自身が保持する文字列
        */
        Jaco.prototype.toString = function () {
            return this._str;
        };
        /**
        * 暗黙の値変換に呼び出されるメソッド
        *
        * @version 0.1.0
        * @since 0.1.0
        * @return インスタンス自身が保持する文字列
        */
        Jaco.prototype.valueOf = function () {
            return this.toString();
        };
        /**
        * 文字列連結をおこなう
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return インスタンス自身
        */
        Jaco.prototype.concat = function () {
            var likeStrings = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                likeStrings[_i - 0] = arguments[_i];
            }
            this._str += likeStrings.join('');
            return this;
        };
        /**
        * 文字列をパターンで置換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param pattern  対象のパターン
        * @param replacement 置換する文字列
        * @return インスタンス自身
        */
        Jaco.prototype.replace = function (pattern, replacement) {
            // TODO: replaceメソッドの型が (string | RexExp) だとコンパイルエラー TSv1.4.1時点
            this._str = this._str.replace(pattern, replacement);
            return this;
        };
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
        Jaco.prototype.slice = function (from, to) {
            return new Jaco(this._str.slice(from, to));
        };
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
        Jaco.prototype.substr = function (start, length) {
            return new Jaco(this._str.slice(start, length));
        };
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
        Jaco.prototype.substring = function (indexA, indexB) {
            return new Jaco(this._str.substring(indexA, indexB));
        };
        /**
        * 英字の大文字を小文字に変換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return インスタンス自身
        */
        Jaco.prototype.toLowerCase = function () {
            this._str = this._str.toLowerCase();
            return this;
        };
        /**
        * 英字の小文字を大文字に変換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return インスタンス自身
        */
        Jaco.prototype.toUpperCase = function () {
            this._str = this._str.toUpperCase();
            return this;
        };
        /**
        * 文字列を取り除く
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param pattern 取り除く文字列
        * @return インスタンス自身
        */
        Jaco.prototype.remove = function (pattern) {
            return this.replace(pattern, '');
        };
        /**
        * 先頭と末尾の空白を取り除く
        *
        * [\s]で判定するのでほとんどの空白文字はヒットする
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return インスタンス自身
        */
        Jaco.prototype.trim = function () {
            return this.remove(/^\s*|\s*$/g);
        };
        /**
        * 文字列の長さを返す
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 文字列数
        */
        Jaco.prototype.size = function () {
            return this._str.length;
        };
        /**
        * 文字列のバイトサイズを返す
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return バイト数
        */
        Jaco.prototype.byteSize = function () {
            return encodeURIComponent(this._str).replace(/%../g, 'x').length;
        };
        /**
        * 文字が空かどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 結果の真偽
        */
        Jaco.prototype.isEmpty = function () {
            return this._str === '';
        };
        /**
        * コピーを生成する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return コピー
        */
        Jaco.prototype.clone = function () {
            return new Jaco(this._str);
        };
        /**
        * パターンとマッチするかどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param pattern パターン
        * @return 結果の真偽
        */
        Jaco.prototype.test = function (pattern) {
            var res;
            if (typeof pattern === 'string') {
                res = this._str === pattern;
            }
            else {
                res = pattern.test(this._str);
            }
            return res;
        };
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
        Jaco.prototype.prepend = function (element) {
            this._str = new Jaco(element).concat(this).toString();
            return this;
        };
        /**
        * 後方結合
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param element 結合する文字列
        * @return インスタンス自身
        */
        Jaco.prototype.append = function (element) {
            return this.concat(element);
        };
        /**
        * 完全マッチ
        *
        * @version 0.2.0
        * @since 0.2.0
        * @param target 比較する文字列
        * @return 結果の真偽
        */
        Jaco.prototype.is = function (target) {
            return this._str === target.toString();
        };
        /**
        * 該当の文字を含んでいるかどうか
        *
        * @version 0.3.0
        * @since 0.3.0
        * @param target 比較する文字列
        * @return 結果の真偽
        */
        Jaco.prototype.has = function (target) {
            return this._str.indexOf(target.toString()) !== -1;
        };
        /**
        * 該当の文字だけで構成されているかどうか
        *
        * @version 1.1.0
        * @since 0.2.0
        * @param characters 文字セット
        * @return 結果の真偽
        */
        Jaco.prototype.isOnly = function (characters) {
            return this.test(new RegExp('^[' + characters + ']+$', 'gm'));
        };
        /**
        * ひらがなだけで構成されているかどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 結果の真偽
        */
        Jaco.prototype.isOnlyHiragana = function () {
            return this.isOnly(jaco.HIRAGANA_CHARS + jaco.KANA_COMMON_CAHRS);
        };
        /**
        * カタカナだけで構成されているかどうか
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 結果の真偽
        */
        Jaco.prototype.isOnlyKatakana = function () {
            return this.isOnly(jaco.KATAKANA_CHARS + jaco.KANA_COMMON_CAHRS);
        };
        /**
        * 数字だけで構成されているかどうか
        *
        * @version 0.5.0
        * @since 0.5.0
        * @param negative 負の数値も含めてチェックするかどうか
        * @param floatingPoint 小数としてチェックするかどうか
        * @return 結果の真偽
        */
        Jaco.prototype.isNumeric = function (negative, floatingPoint) {
            if (negative === void 0) { negative = true; }
            if (floatingPoint === void 0) { floatingPoint = true; }
            var pattern = '^';
            if (negative) {
                pattern += '-?';
            }
            if (floatingPoint) {
                pattern += '(?:[0-9]*\\.)?';
            }
            pattern += '[0-9]+$';
            return this.test(toRegExp(pattern));
        };
        /**
        * 数値に変換する
        *
        * @version 0.2.0
        * @since 0.2.0
        * @return 数値
        */
        Jaco.prototype.toNumber = function () {
            return parseFloat(this._str);
        };
        /**
        * 数字に変換する
        *
        * @version 0.5.0
        * @since 0.5.0
        * @param negative 負の値を許可してマイナスをつけるかどうか
        * @param floatingPoint 小数を許可してドットをつけるかどうか
        * @return インスタンス自身
        */
        Jaco.prototype.toNumeric = function (negative, floatingPoint) {
            if (negative === void 0) { negative = false; }
            if (floatingPoint === void 0) { floatingPoint = false; }
            // 半角化
            this.toNarrow();
            // 数字・ハイフン（マイナス）・ドット意外を削除
            this.remove(/[^0-9\.\-]/gm);
            if (negative) {
                // 最初のにくるハイフンをnに一時的に変換
                this.replace(/^-/, 'n');
            }
            // ハイフンを全て削除
            this.remove(/-/g);
            if (negative) {
                // ハイフンを元に戻す
                this.replace('n', '-');
            }
            if (floatingPoint) {
                // 文字列中で一番最初にくるドットを_に一時的に変換
                this.replace(/\.([0-9])/, '_$1');
            }
            // ドットを全て削除
            this.remove(/\./g);
            if (floatingPoint) {
                // ドットを元に戻す
                this.replace('_', '.');
            }
            return this;
        };
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
        Jaco.prototype.combinate = function () {
            // 濁点・半濁点を結合文字に変換
            return this.replaceMap({
                // 濁点
                '\u309B': '\u3099',
                // 半濁点
                '\u309C': '\u309A'
            });
        };
        /**
        * 濁点・半濁点を結合するか、もしくは結合文字に変換
        *
        * @deprecated
        * @version 1.2.0
        * @since 1.2.0
        * @return インスタンス自身
        */
        Jaco.prototype.combinateSoundMarks = function (isConvertCombiningSoundMarks) {
            if (isConvertCombiningSoundMarks === void 0) { isConvertCombiningSoundMarks = false; }
            if (!isConvertCombiningSoundMarks) {
                // 濁点・半濁点を結合文字に変換
                this.combinateSoundMarks(true);
                // 濁点・半濁点を結合する
                return this.replaceMap({
                    // 濁点
                    'か\u3099': 'が', 'き\u3099': 'ぎ', 'く\u3099': 'ぐ', 'け\u3099': 'げ', 'こ\u3099': 'ご',
                    'さ\u3099': 'ざ', 'し\u3099': 'じ', 'す\u3099': 'ず', 'せ\u3099': 'ぜ', 'そ\u3099': 'ぞ',
                    'た\u3099': 'だ', 'ち\u3099': 'ぢ', 'つ\u3099': 'づ', 'て\u3099': 'で', 'と\u3099': 'ど',
                    'は\u3099': 'ば', 'ひ\u3099': 'び', 'ふ\u3099': 'ぶ', 'へ\u3099': 'べ', 'ほ\u3099': 'ぼ',
                    'カ\u3099': 'ガ', 'キ\u3099': 'ギ', 'ク\u3099': 'グ', 'ケ\u3099': 'ゲ', 'コ\u3099': 'ゴ',
                    'サ\u3099': 'ザ', 'シ\u3099': 'ジ', 'ス\u3099': 'ズ', 'セ\u3099': 'ゼ', 'ソ\u3099': 'ゾ',
                    'タ\u3099': 'ダ', 'チ\u3099': 'ヂ', 'ツ\u3099': 'ヅ', 'テ\u3099': 'デ', 'ト\u3099': 'ド',
                    'ハ\u3099': 'バ', 'ヒ\u3099': 'ビ', 'フ\u3099': 'ブ', 'ヘ\u3099': 'ベ', 'ホ\u3099': 'ボ',
                    'ワ\u3099': 'ヷ', 'イ\u3099': 'ヸ', 'ウ\u3099': 'ヴ', 'エ\u3099': 'ヹ', 'ヺ\u3099': 'ヲ',
                    'ゝ\u3099': 'ゞ', 'ヽ\u3099': 'ヾ',
                    // 半濁点
                    'は\u309A': 'ぱ', 'ひ\u309A': 'ぴ', 'ふ\u309A': 'ぷ', 'へ\u309A': 'ぺ', 'ほ\u309A': 'ぽ',
                    'ハ\u309A': 'パ', 'ヒ\u309A': 'ピ', 'フ\u309A': 'プ', 'ヘ\u309A': 'ペ', 'ホ\u309A': 'ポ'
                });
            }
            else {
                // 濁点・半濁点を結合文字に変換
                return this.replaceMap({
                    // 濁点
                    '\u309B': '\u3099',
                    // 半濁点
                    '\u309C': '\u309A'
                });
            }
        };
        /**
        * ひらがなに変換する
        *
        * @version 0.2.0
        * @since 0.1.0
        * @param isCombinate 濁点・半濁点を結合文字にするかどうか
        * @return インスタンス自身
        */
        Jaco.prototype.toHiragana = function (isCombinate) {
            if (isCombinate === void 0) { isCombinate = false; }
            // 半角カタカナを全角カタカナへ
            this.toWideKatakana();
            // ヷヸヹヺの変換
            this.replaceMap({
                'ヷ': 'わ゛',
                'ヸ': 'ゐ゛',
                'ヹ': 'ゑ゛',
                'ヺ': 'を゛'
            });
            // カタカナをひらがなへ(Unicodeの番号をずらす)
            this._shift(toPattern(jaco.KATAKANA_CHARS), -96);
            // 濁点・半濁点を結合文字に変換
            if (isCombinate) {
                this.combinateSoundMarks();
            }
            return this;
        };
        /**
        * カタカナに変換する
        *
        * @version 0.2.0
        * @since 0.1.0
        * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
        * @return インスタンス自身
        */
        Jaco.prototype.toKatakana = function (toWide) {
            if (toWide === void 0) { toWide = true; }
            // 半角カタカナを全角カタカナへ
            if (toWide) {
                this.toWideKatakana();
            }
            // わ゛=> ヷ (濁点3種類対応)
            this.replace(/\u308F(?:\u309B|\u3099|\uFF9E)/g, '\u30F7');
            // ゐ゛=> ヸ (濁点3種類対応)
            this.replace(/\u3090(?:\u309B|\u3099|\uFF9E)/g, '\u30F8');
            // ゑ゛=> ヹ (濁点3種類対応)
            this.replace(/\u3091(?:\u309B|\u3099|\uFF9E)/g, '\u30F9');
            // を゛=> ヺ (濁点3種類対応)
            this.replace(/\u3092(?:\u309B|\u3099|\uFF9E)/g, '\u30FA');
            // ひらがなをカタカナへ(Unicodeの番号をずらす)
            this._shift(toPattern(jaco.HIRAGANA_CHARS), 96);
            return this;
        };
        /**
        * 半角カタカナに変換する
        *
        * @version 0.6.0
        * @since 0.1.0
        * @param fromHiragana ひらがなも変換する
        * @return インスタンス自身
        */
        Jaco.prototype.toNarrowKatakana = function (fromHiragana) {
            if (fromHiragana === void 0) { fromHiragana = false; }
            // ひらがなを一旦全角カタカナに変換する
            if (fromHiragana) {
                this.toKatakana();
            }
            // 濁点の変換 (全角濁点2種類対応)
            this.replace(/\u309B|\u3099/g, '\uFF9E');
            // 半濁点の変換 (全角半濁点2種類対応)
            this.replace(/\u309C|\u309A/g, '\uFF9F');
            // カタカナの変換
            this.replaceMap({
                'ァ': 'ｧ', 'ィ': 'ｨ', 'ゥ': 'ｩ', 'ェ': 'ｪ', 'ォ': 'ｫ', 'ャ': 'ｬ',
                'ュ': 'ｭ', 'ョ': 'ｮ', 'ッ': 'ｯ',
                'ヵ': 'ｶ', 'ヶ': 'ｹ',
                'ヮ': 'ﾜ',
                'ー': 'ｰ',
                'ア': 'ｱ', 'イ': 'ｲ', 'ウ': 'ｳ', 'エ': 'ｴ', 'オ': 'ｵ',
                'カ': 'ｶ', 'キ': 'ｷ', 'ク': 'ｸ', 'ケ': 'ｹ', 'コ': 'ｺ',
                'サ': 'ｻ', 'シ': 'ｼ', 'ス': 'ｽ', 'セ': 'ｾ', 'ソ': 'ｿ',
                'タ': 'ﾀ', 'チ': 'ﾁ', 'ツ': 'ﾂ', 'テ': 'ﾃ', 'ト': 'ﾄ',
                'ナ': 'ﾅ', 'ニ': 'ﾆ', 'ヌ': 'ﾇ', 'ネ': 'ﾈ', 'ノ': 'ﾉ',
                'ハ': 'ﾊ', 'ヒ': 'ﾋ', 'フ': 'ﾌ', 'ヘ': 'ﾍ', 'ホ': 'ﾎ',
                'マ': 'ﾏ', 'ミ': 'ﾐ', 'ム': 'ﾑ', 'メ': 'ﾒ', 'モ': 'ﾓ',
                'ヤ': 'ﾔ', 'ユ': 'ﾕ', 'ヨ': 'ﾖ',
                'ラ': 'ﾗ', 'リ': 'ﾘ', 'ル': 'ﾙ', 'レ': 'ﾚ', 'ロ': 'ﾛ',
                'ワ': 'ﾜ', 'ン': 'ﾝ', 'ヰ': 'ｲ', 'ヱ': 'ｴ', 'ヲ': 'ｦ',
                'ガ': 'ｶﾞ', 'ギ': 'ｷﾞ', 'グ': 'ｸﾞ', 'ゲ': 'ｹﾞ', 'ゴ': 'ｺﾞ',
                'ザ': 'ｻﾞ', 'ジ': 'ｼﾞ', 'ズ': 'ｽﾞ', 'ゼ': 'ｾﾞ', 'ゾ': 'ｿﾞ',
                'ダ': 'ﾀﾞ', 'ヂ': 'ﾁﾞ', 'ヅ': 'ﾂﾞ', 'デ': 'ﾃﾞ', 'ド': 'ﾄﾞ',
                'バ': 'ﾊﾞ', 'ビ': 'ﾋﾞ', 'ブ': 'ﾌﾞ', 'ベ': 'ﾍﾞ', 'ボ': 'ﾎﾞ',
                'パ': 'ﾊﾟ', 'ピ': 'ﾋﾟ', 'プ': 'ﾌﾟ', 'ペ': 'ﾍﾟ', 'ポ': 'ﾎﾟ',
                'ヷ': 'ﾜﾞ', 'ヸ': 'ｲﾞ', 'ヴ': 'ｳﾞ', 'ヹ': 'ｴﾞ', 'ヺ': 'ｦﾞ'
            });
            return this;
        };
        /**
        * 全角カタカナに変換する
        *
        * @version 0.2.0
        * @since 0.1.0
        * @return インスタンス自身
        */
        Jaco.prototype.toWideKatakana = function () {
            // カタカナ・濁点・半濁点の変換
            this.replaceMap({
                'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
                'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
                'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
                'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
                'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
                'ﾜﾞ': 'ヷ', 'ｲﾞ': 'ヸ', 'ｳﾞ': 'ヴ', 'ｴﾞ': 'ヹ', 'ｦﾞ': 'ヺ',
                'ﾞ': '゛', 'ﾟ': '゜',
                'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
                'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
                'ｯ': 'ッ', 'ｰ': 'ー',
                'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
                'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
                'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
                'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
                'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
                'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
                'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
                'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
                'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
                'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン'
            });
            return this;
        };
        /**
        * 日本語で使われる記号を半角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        Jaco.prototype.toNarrowJapneseSymbol = function () {
            this.replaceMap({
                '。': '｡',
                '（': '(',
                '）': ')',
                '「': '｢',
                '」': '｣',
                '、': '､',
                '・': '･'
            });
            return this;
        };
        /**
        * 日本語で使われる記号を全角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        Jaco.prototype.toWideJapneseSymbol = function () {
            this.replaceMap({
                '｡': '。',
                '\\(': '（',
                '\\)': '）',
                '｢': '「',
                '｣': '」',
                '､': '、',
                '･': '・'
            });
            return this;
        };
        /**
        * カタカナと日本語で使われる記号を半角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        Jaco.prototype.toNarrowJapnese = function () {
            // 半角カタカナへ
            this.toNarrowKatakana();
            // 半角記号へ
            this.toNarrowJapneseSymbol();
            return this;
        };
        /**
        * カタカナと日本語で使われる記号を全角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        Jaco.prototype.toWideJapnese = function () {
            // 全角カタカナへ
            this.toWideKatakana();
            // 全角記号へ
            this.toWideJapneseSymbol();
            return this;
        };
        /**
        * 半角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        Jaco.prototype.toNarrow = function (convertJapaneseChars) {
            if (convertJapaneseChars === void 0) { convertJapaneseChars = false; }
            // スペースの変換
            this.replace(toPattern(jaco.SPACE_CHARS), ' ');
            // 半角英数記号の変換
            this._shift(toPattern(jaco.FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN), -65248);
            if (convertJapaneseChars) {
                // 日本語カタカナ記号の変換
                this.toNarrowJapnese();
            }
            return this;
        };
        /**
        * 全角に変換
        *
        * @version 0.4.0
        * @since 0.4.0
        * @return インスタンス自身
        */
        Jaco.prototype.toWide = function () {
            // スペースの変換
            this.replace(' ', '\u3000');
            // 日本語カタカナ記号の変換
            this.toWideJapnese();
            // 半角英数記号の変換
            this._shift(toPattern(jaco.ALPHANUMERIC_CHARS_WITH_SIGN), 65248);
            return this;
        };
        /**
        * 濁点を追加する
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自信
        */
        Jaco.prototype.addVoicedMarks = function () {
            // 濁点・半濁点単体の除去
            this.remove(/\u309B|\u3099|\uFF9E/g);
            this.remove(/\u309C|\u309A|\uFF9F/g);
            return this.replaceMap({
                'か': 'が', 'き': 'ぎ', 'く': 'ぐ', 'け': 'げ', 'こ': 'ご',
                'さ': 'ざ', 'し': 'じ', 'す': 'ず', 'せ': 'ぜ', 'そ': 'ぞ',
                'た': 'だ', 'ち': 'ぢ', 'つ': 'づ', 'て': 'で', 'と': 'ど',
                'は': 'ば', 'ひ': 'び', 'ふ': 'ぶ', 'へ': 'べ', 'ほ': 'ぼ',
                'カ': 'ガ', 'キ': 'ギ', 'ク': 'グ', 'ケ': 'ゲ', 'コ': 'ゴ',
                'サ': 'ザ', 'シ': 'ジ', 'ス': 'ズ', 'セ': 'ゼ', 'ソ': 'ゾ',
                'タ': 'ダ', 'チ': 'ヂ', 'ツ': 'ヅ', 'テ': 'デ', 'ト': 'ド',
                'ハ': 'バ', 'ヒ': 'ビ', 'フ': 'ブ', 'ヘ': 'ベ', 'ホ': 'ボ',
                'ワ': 'ヷ', 'イ': 'ヸ', 'ウ': 'ヴ', 'エ': 'ヹ', 'ヺ': 'ヲ',
                'ゝ': 'ゞ', 'ヽ': 'ヾ'
            });
        };
        /**
        * 半濁点を追加する
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自信
        */
        Jaco.prototype.addSemivoicedMarks = function () {
            return this.replaceMap({
                'は': 'ぱ', 'ひ': 'ぴ', 'ふ': 'ぷ', 'へ': 'ぺ', 'ほ': 'ぽ',
                'ハ': 'パ', 'ヒ': 'ピ', 'フ': 'プ', 'ヘ': 'ペ', 'ホ': 'ポ'
            });
        };
        /**
        * 濁点・半濁点を取り除く
        *
        * @version 1.1.0
        * @since 1.1.0
        * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
        * @return インスタンス自信
        */
        Jaco.prototype.removeVoicedMarks = function (ignoreSingleMark) {
            if (ignoreSingleMark === void 0) { ignoreSingleMark = false; }
            if (!ignoreSingleMark) {
                // 濁点・半濁点単体の除去
                this.remove(/\u309B|\u3099|\uFF9E/g);
                this.remove(/\u309C|\u309A|\uFF9F/g);
            }
            return this.replaceMap({
                'が': 'か', 'ぎ': 'き', 'ぐ': 'く', 'げ': 'け', 'ご': 'こ',
                'ざ': 'さ', 'じ': 'し', 'ず': 'す', 'ぜ': 'せ', 'ぞ': 'そ',
                'だ': 'た', 'ぢ': 'ち', 'づ': 'つ', 'で': 'て', 'ど': 'と',
                'ば': 'は', 'び': 'ひ', 'ぶ': 'ふ', 'べ': 'へ', 'ぼ': 'ほ',
                'ぱ': 'は', 'ぴ': 'ひ', 'ぷ': 'ふ', 'ぺ': 'へ', 'ぽ': 'ほ',
                'ガ': 'カ', 'ギ': 'キ', 'グ': 'ク', 'ゲ': 'ケ', 'ゴ': 'コ',
                'ザ': 'サ', 'ジ': 'シ', 'ズ': 'ス', 'ゼ': 'セ', 'ゾ': 'ソ',
                'ダ': 'タ', 'ヂ': 'チ', 'ヅ': 'ツ', 'デ': 'テ', 'ド': 'ト',
                'バ': 'ハ', 'ビ': 'ヒ', 'ブ': 'フ', 'ベ': 'ヘ', 'ボ': 'ホ',
                'パ': 'ハ', 'ピ': 'ヒ', 'プ': 'フ', 'ペ': 'ヘ', 'ポ': 'ホ',
                'ヷ': 'ワ', 'ヸ': 'イ', 'ヴ': 'ウ', 'ヹ': 'エ', 'ヺ': 'ヲ',
                'ゞ': 'ゝ', 'ヾ': 'ヽ'
            });
        };
        /**
        * 長音符をかなに置き換える
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自信
        */
        Jaco.prototype.convertProlongedSoundMarks = function () {
            var kanaWithProlongedSoundMarksPattern = new RegExp('[' + jaco.HIRAGANA_CHARS + jaco.KATAKANA_CHARS + ']ー');
            var converted = this._str;
            var conv = function (_str) {
                _str = _str.replace(/([あぁかゕがさざただなはばぱまやゃらわゎ])ー/g, '$1あ')
                    .replace(/([いぃきぎしじちぢにひびぴみりゐ])ー/g, '$1い')
                    .replace(/([うぅゔくぐすずつづぬふぶぷむゆゅる])ー/g, '$1う')
                    .replace(/([えぇけゖげせぜてでねへべぺめれゑ])ー/g, '$1え')
                    .replace(/([おぉこごそぞとどのほぼぽもよょろを])ー/g, '$1お')
                    .replace(/んー/g, 'んん')
                    .replace(/っー/g, 'っっ')
                    .replace(/([アァカヵガサザタダナハバパマヤャラワヮヷ])ー/g, '$1ア')
                    .replace(/([イィキギシジチヂニヒビピミリヰヸ])ー/g, '$1イ')
                    .replace(/([ウゥヴクグスズツヅヌフブプムユュル])ー/g, '$1ウ')
                    .replace(/([エェケヶゲセゼテデネヘベペメレヱヹ])ー/g, '$1エ')
                    .replace(/([オォコゴソゾトドノホボポモヨョロヲヺ])ー/g, '$1オ')
                    .replace(/ンー/g, 'ンン')
                    .replace(/ッー/g, 'ッッ');
                return _str;
            };
            while (kanaWithProlongedSoundMarksPattern.test(converted)) {
                converted = conv(converted);
            }
            this._str = converted;
            return this;
        };
        /**
        * 繰り返し記号をかなに置き換える
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自信
        */
        Jaco.prototype.convertIterationMarks = function () {
            var kanaWithIterationMarks = new RegExp('([' +
                jaco.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS +
                jaco.KATAKANA_CHARS_IGNORE_ITERATION_MARKS +
                '])([ゝゞヽヾ])');
            var conv = function (_str) {
                return _str.replace(kanaWithIterationMarks, function ($0, $1, $2) {
                    var beforeString = $1;
                    var converted = new jaco.Jaco($1).removeVoicedMarks();
                    var iterationMark = $2;
                    switch (iterationMark) {
                        case 'ゝ': {
                            converted.toHiragana();
                            break;
                        }
                        case 'ヽ': {
                            converted.toKatakana();
                            break;
                        }
                        case 'ゞ': {
                            converted.toHiragana().addVoicedMarks();
                            break;
                        }
                        case 'ヾ': {
                            converted.toKatakana().addVoicedMarks();
                            break;
                        }
                    }
                    return beforeString + converted;
                });
            };
            while (kanaWithIterationMarks.test(this._str)) {
                this._str = conv(this._str);
            }
            return this;
        };
        /**
        * 小書き文字を基底文字に変換する
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自身
        */
        Jaco.prototype.toBasicLetter = function () {
            this
                .combinateSoundMarks()
                .replaceMap({
                'ぁ': 'あ', 'ぃ': 'い', 'ぅ': 'う', 'ぇ': 'え', 'ぉ': 'お',
                'っ': 'つ',
                'ゃ': 'や', 'ゅ': 'ゆ', 'ょ': 'よ',
                'ゎ': 'わ',
                'ァ': 'ア', 'ィ': 'イ', 'ゥ': 'ウ', 'ェ': 'エ', 'ォ': 'オ',
                'ヵ': 'カ', 'ㇰ': 'ク', 'ヶ': 'ケ',
                'ㇱ': 'シ', 'ㇲ': 'ス',
                'ッ': 'ツ', 'ㇳ': 'ト',
                'ㇴ': 'ヌ', 'ㇵ': 'ハ',
                'ㇶ': 'ヒ', 'ㇷ': 'フ', 'ㇸ': 'ヘ', 'ㇹ': 'ホ',
                'ㇺ': 'ム',
                'ャ': 'ヤ', 'ュ': 'ユ', 'ョ': 'ヨ',
                'ㇻ': 'ラ', 'ㇼ': 'リ', 'ㇽ': 'ル', 'ㇾ': 'レ', 'ㇿ': 'ロ',
                'ヮ': 'ワ'
            });
            return this;
        };
        /**
        * 小書き文字を含むかどうか
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return 小書き文字を含むかどうか
        */
        Jaco.prototype.hasSmallLetter = function () {
            return /[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/.test(this._str);
        };
        /**
        * よみの文字に変換する
        * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
        *
        * @version 1.1.0
        * @since 1.1.0
        * @return インスタンス自身
        */
        Jaco.prototype.toPhoeticKana = function () {
            this
                .toHiragana()
                .toBasicLetter()
                .convertProlongedSoundMarks()
                .convertIterationMarks();
            return this;
        };
        /**
        * キーがパターン・値が置換文字列のハッシュマップによって置換する
        *
        * @version 0.1.1
        * @since 0.1.0
        * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
        * @return インスタンス自身
        */
        Jaco.prototype.replaceMap = function (convMap) {
            var needle;
            var replace;
            for (needle in convMap) {
                if (convMap.hasOwnProperty(needle)) {
                    replace = convMap[needle];
                    this._str = this._str.replace(toRegExp(needle), replace);
                }
            }
            return this;
        };
        /**
        * 文字列中のそれぞれのひと文字に対してUnicode番号を指定の数値ずらす
        *
        * @version 0.2.0
        * @since 0.1.0
        * @param needle 対象のパターン
        * @param shiftNum ずらす数値
        * @return インスタンス自身
        */
        Jaco.prototype._shift = function (needle, shiftNum) {
            this._str = this._str.replace(needle, function (char) {
                return String.fromCharCode(char.charCodeAt(0) + shiftNum);
            });
            return this;
        };
        return Jaco;
    })();
    jaco.Jaco = Jaco;
    /**
    * キャラクターリストを正規表現に変換する
    *
    * @version 0.1.0
    * @since 0.1.0
    * @param chars 文字の集合
    * @return 正規表現化された文字セット
    */
    function toPattern(chars) {
        return new RegExp('[' + chars + ']', 'g');
    }
    /**
    * 文字列を正規表現に変換する
    *
    * @version 0.1.0
    * @since 0.1.0
    * @param str 対象の文字列
    * @param option 正規表現のオプション `"i"`:小大文字無視 `"g"`:すべてにマッチ `"m"`:複数行にマッチ
    * @return 正規表現化された文字
    */
    function toRegExp(str, option) {
        if (option === void 0) { option = 'igm'; }
        return new RegExp(str, option);
    }
})(jaco || (jaco = {}));
/// <reference path="../typings/bundle.d.ts" />
/// <reference path="jaco.ts" />
/// <reference path="jaco/Jaco.ts" />


	// Exports
	if ('process' in global) {
		module.exports = jaco;
	} else {
		global.jaco = jaco;
	}

}).call((this || 0).self || global);