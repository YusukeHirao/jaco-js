/// <reference path="DefinitelyTyped/node/node.d.ts" />
/**
* Japanese String & Charactor Converter
*
* @module jaco
*/
var jaco;
(function (jaco) {
    jaco.SIGN_CHARS = '\\u0020-\\u002F\\u003A-\\u0041\\u005B-\\u0061\\u007B-\\u007E';
    jaco.DIGIT_CAHRS = '0-9';
    jaco.ALPHA_CHARS = 'A-Za-z';
    jaco.ALPHANUMERIC_CHARS_WITH_SIGN = '\\u0020-\\u007E';
    jaco.FULLWIDTH_SING_CHARS = '\\uFF01-\\uFF0F\\uFF1A-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF5E';
    jaco.FULLWIDTH_DIGIT_CHARS = '\\uFF10-\\uFF19';
    jaco.FULLWIDTH_ALPHA_CHARS = '\\uFF21-\\uFF3A\\uFF41-\\uFF5A';
    jaco.FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN = '\\uFF01-\\uFF5F';
    jaco.HIRAGANA_CHARS = '\\u3041-\\u3096\\u309D-\\u309F';
    jaco.KATAKANA_CHARS = '\\u30A1-\\u30FA\\u30FD\\u30FF';
    jaco.KANA_COMMON_CAHRS = '\u3099-\u309C\u30FC';
    jaco.JAPANESE_SIGN_CHARS = '\u3000-\u3036\u30FB\\uFF5E';
    jaco.NARROW_KATAKANA_CHARS = '\\uFF66-\\uFF9F';
    jaco.NARROW_JAPANESE_SIGN_CHARS = '\\uFF61-\\uFF65';
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
        return new jaco(str).toKatakana().toString();
    }
    jaco.katakana = katakana;

    var jaco = (function () {
        function jaco(str) {
            if (typeof str === "undefined") { str = ''; }
            this._str = str;
        }
        jaco.prototype.toString = function () {
            return this._str;
        };

        jaco.prototype.toKatakana = function () {
            this._replace({
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

        jaco.prototype._replace = function (convMap) {
            var needle;
            var replace;
            for (needle in convMap) {
                replace = convMap[needle];
                this._str = this._str.replace(_r(needle), replace);
            }
            return this;
        };
        return jaco;
    })();

    function _r(str, option) {
        if (typeof option === "undefined") { option = 'igm'; }
        return new RegExp(str, option);
    }
})(jaco || (jaco = {}));

(module).exports = jaco;
