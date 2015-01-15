/*!
 * jaco - v1.0.0
 * Japanese character converter.
 * update: 2015-01-15
 * Author: YusukeHirao [https://github.com/YusukeHirao/jaco]
 * Repository: git@github.com:YusukeHirao/jaco.git
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
    * カタカナ
    *
    * [ァ-ヺヽ-ヿ]
    *
    */
    jaco.KATAKANA_CHARS = '\\u30A1-\\u30FA\\u30FD\\u30FF';
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
        function Jaco(str) {
            if (str === void 0) { str = ''; }
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
        Jaco.prototype.replace = function (pattern, replacement) {
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
        Jaco.prototype.test = function (pattern) {
            var res;
            if (pattern instanceof RegExp) {
                res = pattern.test(this._str);
            }
            else {
                res = this._str === pattern;
            }
            return res;
        };
        Jaco.prototype.prepend = function (element) {
            this._str = new Jaco(element).concat(this).toString();
            return this;
        };
        Jaco.prototype.append = function (element) {
            return this.concat(element);
        };
        Jaco.prototype.is = function (target) {
            return this._str === target.toString();
        };
        Jaco.prototype.has = function (target) {
            return this._str.indexOf(target.toString()) !== -1;
        };
        /**
        * 該当の文字だけで構成されているかどうか
        *
        * @version 0.2.0
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
        * 濁点・半濁点を結合文字に変換
        *
        * @version 0.2.0
        * @since 0.1.0
        * @return インスタンス自身
        */
        Jaco.prototype.combinate = function () {
            // 濁点・半濁点を結合文字に変換
            return this._replaceMap({
                // 濁点
                '\u309B': '\u3099',
                // 半濁点
                '\u309C': '\u309A'
            });
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
            this._replaceMap({
                'ヷ': 'わ゛',
                'ヸ': 'ゐ゛',
                'ヹ': 'ゑ゛',
                'ヺ': 'を゛'
            });
            // カタカナをひらがなへ(Unicodeの番号をずらす)
            this._shift(toPattern(jaco.KATAKANA_CHARS), -96);
            // 濁点・半濁点を結合文字に変換
            if (isCombinate) {
                this.combinate();
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
            this._replaceMap({
                'ァ': 'ｧ',
                'ィ': 'ｨ',
                'ゥ': 'ｩ',
                'ェ': 'ｪ',
                'ォ': 'ｫ',
                'ャ': 'ｬ',
                'ュ': 'ｭ',
                'ョ': 'ｮ',
                'ッ': 'ｯ',
                'ヵ': 'ｶ',
                'ヶ': 'ｹ',
                'ヮ': 'ﾜ',
                'ー': 'ｰ',
                'ア': 'ｱ',
                'イ': 'ｲ',
                'ウ': 'ｳ',
                'エ': 'ｴ',
                'オ': 'ｵ',
                'カ': 'ｶ',
                'キ': 'ｷ',
                'ク': 'ｸ',
                'ケ': 'ｹ',
                'コ': 'ｺ',
                'サ': 'ｻ',
                'シ': 'ｼ',
                'ス': 'ｽ',
                'セ': 'ｾ',
                'ソ': 'ｿ',
                'タ': 'ﾀ',
                'チ': 'ﾁ',
                'ツ': 'ﾂ',
                'テ': 'ﾃ',
                'ト': 'ﾄ',
                'ナ': 'ﾅ',
                'ニ': 'ﾆ',
                'ヌ': 'ﾇ',
                'ネ': 'ﾈ',
                'ノ': 'ﾉ',
                'ハ': 'ﾊ',
                'ヒ': 'ﾋ',
                'フ': 'ﾌ',
                'ヘ': 'ﾍ',
                'ホ': 'ﾎ',
                'マ': 'ﾏ',
                'ミ': 'ﾐ',
                'ム': 'ﾑ',
                'メ': 'ﾒ',
                'モ': 'ﾓ',
                'ヤ': 'ﾔ',
                'ユ': 'ﾕ',
                'ヨ': 'ﾖ',
                'ラ': 'ﾗ',
                'リ': 'ﾘ',
                'ル': 'ﾙ',
                'レ': 'ﾚ',
                'ロ': 'ﾛ',
                'ワ': 'ﾜ',
                'ン': 'ﾝ',
                'ヰ': 'ｲ',
                'ヱ': 'ｴ',
                'ヲ': 'ｦ',
                'ガ': 'ｶﾞ',
                'ギ': 'ｷﾞ',
                'グ': 'ｸﾞ',
                'ゲ': 'ｹﾞ',
                'ゴ': 'ｺﾞ',
                'ザ': 'ｻﾞ',
                'ジ': 'ｼﾞ',
                'ズ': 'ｽﾞ',
                'ゼ': 'ｾﾞ',
                'ゾ': 'ｿﾞ',
                'ダ': 'ﾀﾞ',
                'ヂ': 'ﾁﾞ',
                'ヅ': 'ﾂﾞ',
                'デ': 'ﾃﾞ',
                'ド': 'ﾄﾞ',
                'バ': 'ﾊﾞ',
                'ビ': 'ﾋﾞ',
                'ブ': 'ﾌﾞ',
                'ベ': 'ﾍﾞ',
                'ボ': 'ﾎﾞ',
                'パ': 'ﾊﾟ',
                'ピ': 'ﾋﾟ',
                'プ': 'ﾌﾟ',
                'ペ': 'ﾍﾟ',
                'ポ': 'ﾎﾟ',
                'ヷ': 'ﾜﾞ',
                'ヸ': 'ｲﾞ',
                'ヴ': 'ｳﾞ',
                'ヹ': 'ｴﾞ',
                'ヺ': 'ｦﾞ'
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
            this._replaceMap({
                'ｶﾞ': 'ガ',
                'ｷﾞ': 'ギ',
                'ｸﾞ': 'グ',
                'ｹﾞ': 'ゲ',
                'ｺﾞ': 'ゴ',
                'ｻﾞ': 'ザ',
                'ｼﾞ': 'ジ',
                'ｽﾞ': 'ズ',
                'ｾﾞ': 'ゼ',
                'ｿﾞ': 'ゾ',
                'ﾀﾞ': 'ダ',
                'ﾁﾞ': 'ヂ',
                'ﾂﾞ': 'ヅ',
                'ﾃﾞ': 'デ',
                'ﾄﾞ': 'ド',
                'ﾊﾞ': 'バ',
                'ﾋﾞ': 'ビ',
                'ﾌﾞ': 'ブ',
                'ﾍﾞ': 'ベ',
                'ﾎﾞ': 'ボ',
                'ﾊﾟ': 'パ',
                'ﾋﾟ': 'ピ',
                'ﾌﾟ': 'プ',
                'ﾍﾟ': 'ペ',
                'ﾎﾟ': 'ポ',
                'ﾜﾞ': 'ヷ',
                'ｲﾞ': 'ヸ',
                'ｳﾞ': 'ヴ',
                'ｴﾞ': 'ヹ',
                'ｦﾞ': 'ヺ',
                'ﾞ': '゛',
                'ﾟ': '゜',
                'ｧ': 'ァ',
                'ｨ': 'ィ',
                'ｩ': 'ゥ',
                'ｪ': 'ェ',
                'ｫ': 'ォ',
                'ｬ': 'ャ',
                'ｭ': 'ュ',
                'ｮ': 'ョ',
                'ｯ': 'ッ',
                'ｰ': 'ー',
                'ｱ': 'ア',
                'ｲ': 'イ',
                'ｳ': 'ウ',
                'ｴ': 'エ',
                'ｵ': 'オ',
                'ｶ': 'カ',
                'ｷ': 'キ',
                'ｸ': 'ク',
                'ｹ': 'ケ',
                'ｺ': 'コ',
                'ｻ': 'サ',
                'ｼ': 'シ',
                'ｽ': 'ス',
                'ｾ': 'セ',
                'ｿ': 'ソ',
                'ﾀ': 'タ',
                'ﾁ': 'チ',
                'ﾂ': 'ツ',
                'ﾃ': 'テ',
                'ﾄ': 'ト',
                'ﾅ': 'ナ',
                'ﾆ': 'ニ',
                'ﾇ': 'ヌ',
                'ﾈ': 'ネ',
                'ﾉ': 'ノ',
                'ﾊ': 'ハ',
                'ﾋ': 'ヒ',
                'ﾌ': 'フ',
                'ﾍ': 'ヘ',
                'ﾎ': 'ホ',
                'ﾏ': 'マ',
                'ﾐ': 'ミ',
                'ﾑ': 'ム',
                'ﾒ': 'メ',
                'ﾓ': 'モ',
                'ﾔ': 'ヤ',
                'ﾕ': 'ユ',
                'ﾖ': 'ヨ',
                'ﾗ': 'ラ',
                'ﾘ': 'リ',
                'ﾙ': 'ル',
                'ﾚ': 'レ',
                'ﾛ': 'ロ',
                'ﾜ': 'ワ',
                'ｦ': 'ヲ',
                'ﾝ': 'ン'
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
            this._replaceMap({
                '。': '｡',
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
            this._replaceMap({
                '｡': '。',
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
        /**
        * キーがパターン・値が置換文字列のハッシュマップによって置換する
        *
        * @version 0.6.0
        * @since 0.1.0
        * @param convMap キーがパターン・値が置換文字列のハッシュマップ
        * @return インスタンス自身
        */
        Jaco.prototype.replaceMap = function () {
            var convMap = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                convMap[_i - 0] = arguments[_i];
            }
            return this;
        };
        /**
        * 【非推奨】文字列をパターンで置換する
        * 同機能の`replace`メソッドを使う
        *
        * @deprecated 非推奨
        * @version 0.1.0
        * @since 0.1.0
        * @param needle 対象のパターン
        * @param replace 置換する文字列
        * @return インスタンス自身
        */
        Jaco.prototype._replace = function (needle, replace) {
            this._str = this._str.replace(needle, replace);
            return this;
        };
        /**
        * キーがパターン・値が置換文字列のハッシュマップによって置換する
        *
        * @version 0.6.0
        * @since 0.1.0
        * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
        * @return インスタンス自身
        */
        Jaco.prototype._replaceMap = function (convMap) {
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


	// Exports
	if ('process' in global) {
		module.exports = jaco;
	} else {
		global.jaco = jaco;
	}

}).call((this || 0).self || global);