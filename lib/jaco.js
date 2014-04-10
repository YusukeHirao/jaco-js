/// <reference path="DefinitelyTyped/node/node.d.ts" />
/**
* Japanese String & Charactor Converter
*
* @module jaco
*/
var jaco;
(function (jaco) {
    // [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]
    jaco.SIGN_CHARS = '\\u0020-\\u002F\\u003A-\\u0041\\u005B-\\u0061\\u007B-\\u007E';

    // [0-9]
    jaco.DIGIT_CAHRS = '0-9';

    // [A-Za-z]
    jaco.ALPHA_CHARS = 'A-Za-z';

    // [!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~]
    jaco.ALPHANUMERIC_CHARS_WITH_SIGN = '\\u0020-\\u007E';

    // [！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～]
    jaco.FULLWIDTH_SING_CHARS = '\\uFF01-\\uFF0F\\uFF1A-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF5E';

    // [０１２３４５６７８９]
    jaco.FULLWIDTH_DIGIT_CHARS = '\\uFF10-\\uFF19';

    // [ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ]
    jaco.FULLWIDTH_ALPHA_CHARS = '\\uFF21-\\uFF3A\\uFF41-\\uFF5A';

    // [！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～]
    jaco.FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN = '\\uFF01-\\uFF5F';

    // [ぁ-ゖゝ-ゟ]
    jaco.HIRAGANA_CHARS = '\\u3041-\\u3096\\u309D-\\u309F';

    // [ァ-ヺヽ-ヿ]
    jaco.KATAKANA_CHARS = '\\u30A1-\\u30FA\\u30FD\\u30FF';

    // [゛゜(結合文字含む)ー]
    jaco.KANA_COMMON_CAHRS = '\u3099-\u309C\u30FC';

    // [　、。〃〄々〆〇〈〉《》「」『』【】〒〓〔〕〖〗〘〙〚〛〜〝〞〟〠〡〢〣〤〥〦〧〨〩〪〭〮〯〫〬〰〱〲〳〴〵〶・～] ※ 波ダッシュ・全角チルダ問題があるため 全角チルダを含めることとする (http://ja.wikipedia.org/wiki/Unicode#.E6.B3.A2.E3.83.80.E3.83.83.E3.82.B7.E3.83.A5.E3.83.BB.E5.85.A8.E8.A7.92.E3.83.81.E3.83.AB.E3.83.80.E5.95.8F.E9.A1.8C)
    jaco.JAPANESE_SIGN_CHARS = '\u3000-\u3036\u30FB\\uFF5E';

    // [ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ]
    jaco.NARROW_KATAKANA_CHARS = '\\uFF66-\\uFF9F';

    // [｡｢｣､･]
    jaco.NARROW_JAPANESE_SIGN_CHARS = '\\uFF61-\\uFF65';

    // [(スペース相等の文字)]
    jaco.SPACE_LIKE_CHARS = '\\s\\n\\t\\u0009\\u0020\\u00A0\\u2002-\\u200B\\u3000\\uFEFF';

    /**
    * カタカナに変換する
    *
    * @method katakana
    * @since 0.1.0
    * @static
    * @param {string} str 対象の文字列
    * @return {string} 変換後の文字列
    */
    function katakana(str) {
        return new Jaco(str).toKatakana().toString();
    }
    jaco.katakana = katakana;

    /**
    * ひらがなに変換する
    *
    * @method hiragana
    * @since 0.1.0
    * @static
    * @param {string} str 対象の文字列
    * @return {string} 変換後の文字列
    */
    function hiragana(str) {
        return new Jaco(str).toHiragana().toString();
    }
    jaco.hiragana = hiragana;

    /**
    * カタカナに変換する
    *
    * @class Jaco
    * @since 0.1.0
    * @conctructor
    * @param {string} str 対象の文字列
    * @return {string} 変換後の文字列
    */
    var Jaco = (function () {
        function Jaco(str) {
            if (typeof str === "undefined") { str = ''; }
            this._str = str;
        }
        Jaco.prototype.toString = function () {
            return this._str;
        };

        Jaco.prototype.valueOf = function () {
            return this.toString();
        };

        Jaco.prototype.combinate = function () {
            // 濁点・半濁点を結合文字に変換
            return this._replaceMap({
                // 濁点
                '\u309B': '\u3099',
                // 半濁点
                '\u309C': '\u309A'
            });
        };

        // カタカナからひらがなへ
        Jaco.prototype.toHiragana = function (combinate) {
            if (typeof combinate === "undefined") { combinate = false; }
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
            if (combinate) {
                this.combinate();
            }
            return this;
        };

        Jaco.prototype.toKatakana = function (toWide) {
            if (typeof toWide === "undefined") { toWide = true; }
            // 半角カタカナを全角カタカナへ
            if (toWide) {
                this.toWideKatakana();
            }

            // わ゛=> ヷ
            this._replace(/\u308F(?:\u309B|\u3099|\uFF9E)/g, '\u30F7');

            // ゐ゛=> ヸ
            this._replace(/\u3090(?:\u309B|\u3099|\uFF9E)/g, '\u30F8');

            // ゑ゛=> ヹ
            this._replace(/\u3091(?:\u309B|\u3099|\uFF9E)/g, '\u30F9');

            // を゛=> ヺ
            this._replace(/\u3092(?:\u309B|\u3099|\uFF9E)/g, '\u30FA');

            // ひらがなをカタカナへ(Unicodeの番号をずらす)
            this._shift(toPattern(jaco.HIRAGANA_CHARS), 96);
            return this;
        };

        Jaco.prototype.toNarrowKatakana = function () {
            // 濁点の変換
            this._replace(/\u309B|\u3099/g, '\uFF9E');

            // 半濁点の変換
            this._replace(/\u309C|\u309A/g, '\uFF9F');

            // カタカナの変換
            this._replaceMap({
                'ァ': 'ｧ', 'ィ': 'ｨ', 'ゥ': 'ｩ', 'ェ': 'ｪ', 'ォ': 'ｫ', 'ャ': 'ｬ',
                'ュ': 'ｭ', 'ョ': 'ｮ', 'ッ': 'ｯ',
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
                'ヷ': 'ﾜﾞ', 'ヸ': 'ｲﾞ', 'ヹ': 'ｴﾞ', 'ヺ': 'ｦﾞ'
            });
            return this;
        };

        Jaco.prototype.toWideKatakana = function () {
            // カタカナ・濁点・半濁点の変換
            this._replaceMap({
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

        Jaco.prototype._shift = function (needle, shiftNum) {
            this._str = this._str.replace(needle, function (char) {
                return String.fromCharCode(char.charCodeAt(0) + shiftNum);
            });
            return this;
        };

        Jaco.prototype._replace = function (needle, replace) {
            this._str = this._str.replace(needle, replace);
            return this;
        };

        Jaco.prototype._replaceMap = function (convMap) {
            var needle;
            var replace;
            for (needle in convMap) {
                replace = convMap[needle];
                this._str = this._str.replace(toRegExp(needle), replace);
            }
            return this;
        };
        return Jaco;
    })();

    function toPattern(chars) {
        return new RegExp('[' + chars + ']', 'g');
    }

    function toRegExp(str, option) {
        if (typeof option === "undefined") { option = 'igm'; }
        return new RegExp(str, option);
    }
})(jaco || (jaco = {}));

(module).exports = jaco;
