/// <reference path="DefinitelyTyped/node/node.d.ts" />
var jast;
(function (jast) {
    var SIGN_CHARS = '\\u0020-\\u002F\\u003A-\\u0041\\u005B-\\u0061\\u007B-\\u007E';
    var DIGIT_CAHRS = '0-9';
    var ALPHA_CHARS = 'A-Za-z';
    var ALPHANUMERIC_CHARS_WITH_SIGN = '\\u0020-\\u007E';
    var FULLWIDTH_SING_CHARS = '\\uFF01-\\uFF0F\\uFF1A-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF5E';
    var FULLWIDTH_DIGIT_CHARS = '\\uFF10-\\uFF19';
    var FULLWIDTH_ALPHA_CHARS = '\\uFF21-\\uFF3A\\uFF41-\\uFF5A';
    var FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN = '\\uFF01-\\uFF5F';
    var HIRAGANA_CHARS = '\\u3041-\\u3096\\u309D-\\u309F';
    var KATAKANA_CHARS = '\\u30A1-\\u30FA\\u30FD\\u30FF';
    var KANA_COMMON_CAHRS = '\u3099-\u309C\u30FC';
    var JAPANESE_SIGN_CHARS = '\u3000-\u3036\u30FB\\uFF5E';
    var NARROW_KATAKANA_CHARS = '\\uFF66-\\uFF9F';
    var NARROW_JAPANESE_SIGN_CHARS = '\\uFF61-\\uFF65';
    var SPACE_LIKE_CHARS = '\\s\\n\\t\\u0009\\u0020\\u00A0\\u2002-\\u200B\\u3000\\uFEFF';

    var Japanese = (function () {
        function Japanese() {
        }
        return Japanese;
    })();
})(jast || (jast = {}));

(module).exports = jast;
