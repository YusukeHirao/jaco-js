/**!
* jaco - v2.0.0-alpha
* update: 2016-03-04
* Author: YusukeHirao
* Github: git@github.com:jaco-project/jaco-js.git
* License: Licensed under the MIT License
*/

'use strict';
/**
 * 記号
 *
 * [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]
 *
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.SIGN_CHARS = '\\u0020-\\u002F\\u003A-\\u0041\\u005B-\\u0061\\u007B-\\u007E';
/**
 * 半角数字
 *
 * [0-9]
 *
 */
exports.DIGIT_CAHRS = '0-9';
/**
 * 半角英字
 *
 * [A-Za-z]
 *
 */
exports.ALPHA_CHARS = 'A-Za-z';
/**
 * 半角英数記号
 *
 * [!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~]
 *
 */
exports.ALPHANUMERIC_CHARS_WITH_SIGN = '\\u0020-\\u007E';
/**
 * 全角記号
 *
 * [！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～]
 *
 */
exports.FULLWIDTH_SING_CHARS = '\\uFF01-\\uFF0F\\uFF1A-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF5E';
/**
 * 全角数字
 *
 * [０１２３４５６７８９]
 *
 */
exports.FULLWIDTH_DIGIT_CHARS = '\\uFF10-\\uFF19';
/**
 * 全角英字
 *
 * [ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ]
 *
 */
exports.FULLWIDTH_ALPHA_CHARS = '\\uFF21-\\uFF3A\\uFF41-\\uFF5A';
/**
 * 全角英数記号
 *
 * [！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～]
 *
 */
exports.FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN = '\\uFF01-\\uFF5F';
/**
 * ひらがな
 *
 * [ぁ-ゖゝ-ゟ]
 *
 */
exports.HIRAGANA_CHARS = '\\u3041-\\u3096\\u309D-\\u309F';
/**
 * ひらがな（繰り返し記号・合字なし）
 *
 * [ぁ-ゖ]
 *
 */
exports.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS = '\\u3041-\\u3096';
/**
 * カタカナ
 *
 * [ァ-ヺヽ-ヿ]
 *
 */
exports.KATAKANA_CHARS = '\\u30A1-\\u30FA\\u30FD\\u30FF';
/**
 * カタカナ（繰り返し記号・合字なし）
 *
 * [ァ-ヺ]
 *
 */
exports.KATAKANA_CHARS_IGNORE_ITERATION_MARKS = '\\u30A1-\\u30FA';
/**
 * 濁点／半濁点(結合文字含む)・長音符
 *
 * [゛゜ー]
 *
 */
exports.KANA_COMMON_CAHRS = '゙-゜ー';
/**
 * 日本語で使用される記号
 *
 * [　、。〃〄々〆〇〈〉《》「」『』【】〒〓〔〕〖〗〘〙〚〛〜〝〞〟〠〡〢〣〤〥〦〧〨〩〪〭〮〯〫〬〰〱〲〳〴〵〶・～]
 *
 * [波ダッシュ・全角チルダ問題](http://goo.gl/w1xV9Z)があるため 全角チルダを含めることとする
 *
 */
exports.JAPANESE_SIGN_CHARS = '　-〶・\\uFF5E';
/**
 * 半角カタカナ
 *
 * 濁点／半濁点は分解されているのでそれを含む
 * ヰヱの半角は存在しないので対象外
 *
 * [ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ]
 *
 */
exports.NARROW_KATAKANA_CHARS = '\\uFF66-\\uFF9F';
/**
 * 半角の日本語で使用される記号
 *
 * [｡｢｣､･]
 *
 */
exports.NARROW_JAPANESE_SIGN_CHARS = '\\uFF61-\\uFF65';
/**
 * スペース
 *
 * 仕様上、実際には「\u0009\u0020\u00A0\u2002〜\u200B\u3000\uFEFF'」すべて「\s」に含まれる
 *
 */
exports.SPACE_CHARS = '\\s\\n\\t\\u0009\\u0020\\u00A0\\u2002-\\u200B\\u3000\\uFEFF';
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

var Jaco = function () {
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
        _classCallCheck(this, Jaco);

        // newつけずに呼んだ際はtrue
        if (!(this instanceof Jaco)) {
            return new Jaco(str);
        }
        this._str = str.toString();
    }
    /**
     * ひらがな化
     *
     * @version 0.1.0
     * @since 0.1.0
     * @param str 対象の文字列
     * @param isCombinate 濁点・半濁点を結合文字にするかどうか
     * @return ひらがな化された文字列
     */


    _createClass(Jaco, [{
        key: 'toString',

        /**
         * 明示もしくは暗黙の文字列変換メソッド
         *
         * @version 0.1.0
         * @since 0.1.0
         * @return インスタンス自身が保持する文字列
         */
        value: function toString() {
            return this._str;
        }
        /**
         * 暗黙の値変換に呼び出されるメソッド
         *
         * @version 0.1.0
         * @since 0.1.0
         * @return インスタンス自身が保持する文字列
         */

    }, {
        key: 'valueOf',
        value: function valueOf() {
            return this.toString();
        }
        /**
         * 文字列連結をおこなう
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return インスタンス自身
         */

    }, {
        key: 'concat',
        value: function concat() {
            for (var _len = arguments.length, likeStrings = Array(_len), _key = 0; _key < _len; _key++) {
                likeStrings[_key] = arguments[_key];
            }

            this._str += likeStrings.join('');
            return this;
        }
        /**
         * 文字列をパターンで置換する
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param pattern  対象のパターン
         * @param replacement 置換する文字列
         * @return インスタンス自身
         */

    }, {
        key: 'replace',
        value: function replace(pattern, replacement) {
            // TODO: replaceメソッドの型が (string | RexExp) だとコンパイルエラー TSv1.4.1時点
            this._str = this._str.replace(pattern, replacement);
            return this;
        }
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

    }, {
        key: 'slice',
        value: function slice(from, to) {
            return new Jaco(this._str.slice(from, to));
        }
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

    }, {
        key: 'substr',
        value: function substr(start, length) {
            return new Jaco(this._str.slice(start, length));
        }
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

    }, {
        key: 'substring',
        value: function substring(indexA, indexB) {
            return new Jaco(this._str.substring(indexA, indexB));
        }
        /**
         * 英字の大文字を小文字に変換する
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return インスタンス自身
         */

    }, {
        key: 'toLowerCase',
        value: function toLowerCase() {
            this._str = this._str.toLowerCase();
            return this;
        }
        /**
         * 英字の小文字を大文字に変換する
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return インスタンス自身
         */

    }, {
        key: 'toUpperCase',
        value: function toUpperCase() {
            this._str = this._str.toUpperCase();
            return this;
        }
        /**
         * 文字列を取り除く
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param pattern 取り除く文字列
         * @return インスタンス自身
         */

    }, {
        key: 'remove',
        value: function remove(pattern) {
            return this.replace(pattern, '');
        }
        /**
         * 先頭と末尾の空白を取り除く
         *
         * [\s]で判定するのでほとんどの空白文字はヒットする
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return インスタンス自身
         */

    }, {
        key: 'trim',
        value: function trim() {
            return this.remove(/^\s*|\s*$/g);
        }
        /**
         * 文字列の長さを返す
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return 文字列数
         */

    }, {
        key: 'size',
        value: function size() {
            return this._str.length;
        }
        /**
         * 文字列のバイトサイズを返す
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return バイト数
         */

    }, {
        key: 'byteSize',
        value: function byteSize() {
            return encodeURIComponent(this._str).replace(/%../g, 'x').length;
        }
        /**
         * 文字が空かどうか
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return 結果の真偽
         */

    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return this._str === '';
        }
        /**
         * コピーを生成する
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return コピー
         */

    }, {
        key: 'clone',
        value: function clone() {
            return new Jaco(this._str);
        }
        /**
         * パターンとマッチするかどうか
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param pattern パターン
         * @return 結果の真偽
         */

    }, {
        key: 'test',
        value: function test(pattern) {
            if (typeof pattern === 'string') {
                return this._str === pattern;
            } else {
                return pattern.test(this._str);
            }
        }
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

    }, {
        key: 'prepend',
        value: function prepend(element) {
            this._str = new Jaco(element).concat(this).toString();
            return this;
        }
        /**
         * 後方結合
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param element 結合する文字列
         * @return インスタンス自身
         */

    }, {
        key: 'append',
        value: function append(element) {
            return this.concat(element);
        }
        /**
         * 完全マッチ
         *
         * @version 0.2.0
         * @since 0.2.0
         * @param target 比較する文字列
         * @return 結果の真偽
         */

    }, {
        key: 'is',
        value: function is(target) {
            return this._str === target.toString();
        }
        /**
         * 該当の文字を含んでいるかどうか
         *
         * @version 0.3.0
         * @since 0.3.0
         * @param target 比較する文字列
         * @return 結果の真偽
         */

    }, {
        key: 'has',
        value: function has(target) {
            return this._str.indexOf(target.toString()) !== -1;
        }
        /**
         * 該当の文字だけで構成されているかどうか
         *
         * @version 1.1.0
         * @since 0.2.0
         * @param characters 文字セット
         * @return 結果の真偽
         */

    }, {
        key: 'isOnly',
        value: function isOnly(characters) {
            return this.test(new RegExp('^[' + characters + ']+$', 'gm'));
        }
        /**
         * ひらがなだけで構成されているかどうか
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return 結果の真偽
         */

    }, {
        key: 'isOnlyHiragana',
        value: function isOnlyHiragana() {
            return this.isOnly(exports.HIRAGANA_CHARS + exports.KANA_COMMON_CAHRS);
        }
        /**
         * カタカナだけで構成されているかどうか
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return 結果の真偽
         */

    }, {
        key: 'isOnlyKatakana',
        value: function isOnlyKatakana() {
            return this.isOnly(exports.KATAKANA_CHARS + exports.KANA_COMMON_CAHRS);
        }
        /**
         * 数字だけで構成されているかどうか
         *
         * @version 2.0.0
         * @since 0.5.0
         * @param negative 負の数値も含めてチェックするかどうか
         * @param floatingPoint 小数としてチェックするかどうか
         * @return 結果の真偽
         */

    }, {
        key: 'isNumeric',
        value: function isNumeric() {
            var negative = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
            var floatingPoint = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

            var pattern = '^';
            if (negative) {
                pattern += '-?';
            }
            if (floatingPoint) {
                pattern += '(?:[0-9]*\\.)?';
            }
            pattern += '[0-9]+$';
            return this.test(toRegExp(pattern));
        }
        /**
         * 数値に変換する
         *
         * @version 0.2.0
         * @since 0.2.0
         * @return 数値
         */

    }, {
        key: 'toNumber',
        value: function toNumber() {
            return parseFloat(this._str);
        }
        /**
         * 数字に変換する
         *
         * @version 0.5.0
         * @since 0.5.0
         * @param negative 負の値を許可してマイナスをつけるかどうか
         * @param floatingPoint 小数を許可してドットをつけるかどうか
         * @return インスタンス自身
         */

    }, {
        key: 'toNumeric',
        value: function toNumeric() {
            var negative = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
            var floatingPoint = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

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
        }
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

    }, {
        key: 'combinate',
        value: function combinate() {
            // 濁点・半濁点を結合文字に変換
            return this.replaceMap({
                // 濁点
                '゛': '゙',
                // 半濁点
                '゜': '゚'
            });
        }
        /**
         * 濁点・半濁点を結合するか、もしくは結合文字に変換
         *
         * @deprecated
         * @version 1.2.0
         * @since 1.2.0
         * @return インスタンス自身
         */

    }, {
        key: 'combinateSoundMarks',
        value: function combinateSoundMarks() {
            var isConvertCombiningSoundMarks = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            if (!isConvertCombiningSoundMarks) {
                // 濁点・半濁点を結合文字に変換
                this.combinateSoundMarks(true);
                // 濁点・半濁点を結合する
                return this.replaceMap({
                    // 濁点
                    'が': 'が', 'ぎ': 'ぎ', 'ぐ': 'ぐ', 'げ': 'げ', 'ご': 'ご',
                    'ざ': 'ざ', 'じ': 'じ', 'ず': 'ず', 'ぜ': 'ぜ', 'ぞ': 'ぞ',
                    'だ': 'だ', 'ぢ': 'ぢ', 'づ': 'づ', 'で': 'で', 'ど': 'ど',
                    'ば': 'ば', 'び': 'び', 'ぶ': 'ぶ', 'べ': 'べ', 'ぼ': 'ぼ',
                    'ガ': 'ガ', 'ギ': 'ギ', 'グ': 'グ', 'ゲ': 'ゲ', 'ゴ': 'ゴ',
                    'ザ': 'ザ', 'ジ': 'ジ', 'ズ': 'ズ', 'ゼ': 'ゼ', 'ゾ': 'ゾ',
                    'ダ': 'ダ', 'ヂ': 'ヂ', 'ヅ': 'ヅ', 'デ': 'デ', 'ド': 'ド',
                    'バ': 'バ', 'ビ': 'ビ', 'ブ': 'ブ', 'ベ': 'ベ', 'ボ': 'ボ',
                    'ヷ': 'ヷ', 'イ゙': 'ヸ', 'ヴ': 'ヴ', 'エ゙': 'ヹ', 'ヺ゙': 'ヲ',
                    'ゞ': 'ゞ', 'ヾ': 'ヾ',
                    // 半濁点
                    'ぱ': 'ぱ', 'ぴ': 'ぴ', 'ぷ': 'ぷ', 'ぺ': 'ぺ', 'ぽ': 'ぽ',
                    'パ': 'パ', 'ピ': 'ピ', 'プ': 'プ', 'ペ': 'ペ', 'ポ': 'ポ'
                });
            } else {
                // 濁点・半濁点を結合文字に変換
                return this.replaceMap({
                    // 濁点
                    '゛': '゙',
                    // 半濁点
                    '゜': '゚'
                });
            }
        }
        /**
         * ひらがなに変換する
         *
         * @version 0.2.0
         * @since 0.1.0
         * @param isCombinate 濁点・半濁点を結合文字にするかどうか
         * @return インスタンス自身
         */

    }, {
        key: 'toHiragana',
        value: function toHiragana() {
            var isCombinate = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

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
            this._shift(toPattern(exports.KATAKANA_CHARS), -96);
            // 濁点・半濁点を結合文字に変換
            if (isCombinate) {
                this.combinateSoundMarks();
            }
            return this;
        }
        /**
         * カタカナに変換する
         *
         * @version 0.2.0
         * @since 0.1.0
         * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
         * @return インスタンス自身
         */

    }, {
        key: 'toKatakana',
        value: function toKatakana() {
            var toWide = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

            // 半角カタカナを全角カタカナへ
            if (toWide) {
                this.toWideKatakana();
            }
            // わ゛=> ヷ (濁点3種類対応)
            this.replace(/\u308F(?:\u309B|\u3099|\uFF9E)/g, 'ヷ');
            // ゐ゛=> ヸ (濁点3種類対応)
            this.replace(/\u3090(?:\u309B|\u3099|\uFF9E)/g, 'ヸ');
            // ゑ゛=> ヹ (濁点3種類対応)
            this.replace(/\u3091(?:\u309B|\u3099|\uFF9E)/g, 'ヹ');
            // を゛=> ヺ (濁点3種類対応)
            this.replace(/\u3092(?:\u309B|\u3099|\uFF9E)/g, 'ヺ');
            // ひらがなをカタカナへ(Unicodeの番号をずらす)
            this._shift(toPattern(exports.HIRAGANA_CHARS), 96);
            return this;
        }
        /**
         * 半角カタカナに変換する
         *
         * @version 0.6.0
         * @since 0.1.0
         * @param fromHiragana ひらがなも変換する
         * @return インスタンス自身
         */

    }, {
        key: 'toNarrowKatakana',
        value: function toNarrowKatakana() {
            var fromHiragana = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            // ひらがなを一旦全角カタカナに変換する
            if (fromHiragana) {
                this.toKatakana();
            }
            // 濁点の変換 (全角濁点2種類対応)
            this.replace(/\u309B|\u3099/g, 'ﾞ');
            // 半濁点の変換 (全角半濁点2種類対応)
            this.replace(/\u309C|\u309A/g, 'ﾟ');
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
        }
        /**
         * 全角カタカナに変換する
         *
         * @version 0.2.0
         * @since 0.1.0
         * @return インスタンス自身
         */

    }, {
        key: 'toWideKatakana',
        value: function toWideKatakana() {
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
        }
        /**
         * 日本語で使われる記号を半角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: 'toNarrowJapneseSymbol',
        value: function toNarrowJapneseSymbol() {
            this.replaceMap({
                '。': '｡',
                '「': '｢',
                '」': '｣',
                '、': '､',
                '・': '･'
            });
            return this;
        }
        /**
         * 日本語で使われる記号を全角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: 'toWideJapneseSymbol',
        value: function toWideJapneseSymbol() {
            this.replaceMap({
                '｡': '。',
                '｢': '「',
                '｣': '」',
                '､': '、',
                '･': '・'
            });
            return this;
        }
        /**
         * カタカナと日本語で使われる記号を半角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: 'toNarrowJapnese',
        value: function toNarrowJapnese() {
            // 半角カタカナへ
            this.toNarrowKatakana();
            // 半角記号へ
            this.toNarrowJapneseSymbol();
            return this;
        }
        /**
         * カタカナと日本語で使われる記号を全角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: 'toWideJapnese',
        value: function toWideJapnese() {
            // 全角カタカナへ
            this.toWideKatakana();
            // 全角記号へ
            this.toWideJapneseSymbol();
            return this;
        }
        /**
         * 半角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: 'toNarrow',
        value: function toNarrow() {
            var convertJapaneseChars = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            // スペースの変換
            this.replace(toPattern(exports.SPACE_CHARS), ' ');
            // 半角英数記号の変換
            this._shift(toPattern(exports.FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN), -65248);
            if (convertJapaneseChars) {
                // 日本語カタカナ記号の変換
                this.toNarrowJapnese();
            }
            return this;
        }
        /**
         * 全角に変換
         *
         * @version 0.4.0
         * @since 0.4.0
         * @return インスタンス自身
         */

    }, {
        key: 'toWide',
        value: function toWide() {
            // スペースの変換
            this.replace(' ', '　');
            // 日本語カタカナ記号の変換
            this.toWideJapnese();
            // 半角英数記号の変換
            this._shift(toPattern(exports.ALPHANUMERIC_CHARS_WITH_SIGN), 65248);
            return this;
        }
        /**
         * 濁点を追加する
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自信
         */

    }, {
        key: 'addVoicedMarks',
        value: function addVoicedMarks() {
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
        }
        /**
         * 半濁点を追加する
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自信
         */

    }, {
        key: 'addSemivoicedMarks',
        value: function addSemivoicedMarks() {
            return this.replaceMap({
                'は': 'ぱ', 'ひ': 'ぴ', 'ふ': 'ぷ', 'へ': 'ぺ', 'ほ': 'ぽ',
                'ハ': 'パ', 'ヒ': 'ピ', 'フ': 'プ', 'ヘ': 'ペ', 'ホ': 'ポ'
            });
        }
        /**
         * 濁点・半濁点を取り除く
         *
         * @version 1.1.0
         * @since 1.1.0
         * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
         * @return インスタンス自信
         */

    }, {
        key: 'removeVoicedMarks',
        value: function removeVoicedMarks() {
            var ignoreSingleMark = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

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
        }
        /**
         * 長音符をかなに置き換える
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自信
         */

    }, {
        key: 'convertProlongedSoundMarks',
        value: function convertProlongedSoundMarks() {
            var kanaWithProlongedSoundMarksPattern = new RegExp('[' + exports.HIRAGANA_CHARS + exports.KATAKANA_CHARS + ']ー');
            var converted = this._str;
            var conv = function conv(_str) {
                _str = _str.replace(/([あぁかゕがさざただなはばぱまやゃらわゎ])ー/g, '$1あ').replace(/([いぃきぎしじちぢにひびぴみりゐ])ー/g, '$1い').replace(/([うぅゔくぐすずつづぬふぶぷむゆゅる])ー/g, '$1う').replace(/([えぇけゖげせぜてでねへべぺめれゑ])ー/g, '$1え').replace(/([おぉこごそぞとどのほぼぽもよょろを])ー/g, '$1お').replace(/んー/g, 'んん').replace(/っー/g, 'っっ').replace(/([アァカヵガサザタダナハバパマヤャラワヮヷ])ー/g, '$1ア').replace(/([イィキギシジチヂニヒビピミリヰヸ])ー/g, '$1イ').replace(/([ウゥヴクグスズツヅヌフブプムユュル])ー/g, '$1ウ').replace(/([エェケヶゲセゼテデネヘベペメレヱヹ])ー/g, '$1エ').replace(/([オォコゴソゾトドノホボポモヨョロヲヺ])ー/g, '$1オ').replace(/ンー/g, 'ンン').replace(/ッー/g, 'ッッ');
                return _str;
            };
            while (kanaWithProlongedSoundMarksPattern.test(converted)) {
                converted = conv(converted);
            }
            this._str = converted;
            return this;
        }
        /**
         * 繰り返し記号をかなに置き換える
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自信
         */

    }, {
        key: 'convertIterationMarks',
        value: function convertIterationMarks() {
            var kanaWithIterationMarks = new RegExp('([' + exports.HIRAGANA_CHARS_IGNORE_ITERATION_MARKS + exports.KATAKANA_CHARS_IGNORE_ITERATION_MARKS + '])([ゝゞヽヾ])');
            var conv = function conv(_str) {
                return _str.replace(kanaWithIterationMarks, function ($0, $1, $2) {
                    var beforeString = $1;
                    var iterationMark = $2;
                    var converted = new Jaco($1).removeVoicedMarks();
                    switch (iterationMark) {
                        case 'ゝ':
                            {
                                converted.toHiragana();
                            }
                            break;
                        case 'ヽ':
                            {
                                converted.toKatakana();
                            }
                            break;
                        case 'ゞ':
                            {
                                converted.toHiragana().addVoicedMarks();
                            }
                            break;
                        case 'ヾ':
                            {
                                converted.toKatakana().addVoicedMarks();
                            }
                            break;
                        default:
                            {}
                    }
                    return beforeString + converted;
                });
            };
            while (kanaWithIterationMarks.test(this._str)) {
                this._str = conv(this._str);
            }
            return this;
        }
        /**
         * 小書き文字を基底文字に変換する
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自身
         */

    }, {
        key: 'toBasicLetter',
        value: function toBasicLetter() {
            this.combinateSoundMarks().replaceMap({
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
        }
        /**
         * 小書き文字を含むかどうか
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return 小書き文字を含むかどうか
         */

    }, {
        key: 'hasSmallLetter',
        value: function hasSmallLetter() {
            return (/[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/.test(this._str)
            );
        }
        /**
         * よみの文字に変換する
         * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
         *
         * @version 1.1.0
         * @since 1.1.0
         * @return インスタンス自身
         */

    }, {
        key: 'toPhoeticKana',
        value: function toPhoeticKana() {
            this.toHiragana().toBasicLetter().convertProlongedSoundMarks().convertIterationMarks();
            return this;
        }
        /**
         * キーがパターン・値が置換文字列のハッシュマップによって置換する
         *
         * @version 0.1.1
         * @since 0.1.0
         * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
         * @return インスタンス自身
         */

    }, {
        key: 'replaceMap',
        value: function replaceMap(convMap) {
            for (var needle in convMap) {
                if (convMap.hasOwnProperty(needle)) {
                    var replace = convMap[needle];
                    this._str = this._str.replace(toRegExp(needle), replace);
                }
            }
            return this;
        }
        /**
         * 文字列中のそれぞれのひと文字に対してUnicode番号を指定の数値ずらす
         *
         * @version 0.2.0
         * @since 0.1.0
         * @param needle 対象のパターン
         * @param shiftNum ずらす数値
         * @return インスタンス自身
         */

    }, {
        key: '_shift',
        value: function _shift(needle, shiftNum) {
            this._str = this._str.replace(needle, function (char) {
                return String.fromCharCode(char.charCodeAt(0) + shiftNum);
            });
            return this;
        }
    }], [{
        key: 'hiraganize',
        value: function hiraganize(str) {
            var isCombinate = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            return new Jaco(str).toHiragana(isCombinate).toString();
        }
        /**
         * カタカナ化
         *
         * @version 0.1.0
         * @since 0.1.0
         * @param str 対象の文字列
         * @param isCombinate 濁点・半濁点を結合文字にするかどうか
         * @return カタカナ化された文字列
         */

    }, {
        key: 'katakanize',
        value: function katakanize(str) {
            var toWide = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

            return new Jaco(str).toKatakana(toWide).toString();
        }
        /**
         * ひらがなだけで構成されているかどうか
         *
         * @version 1.1.0
         * @since 1.1.0
         * @param str 対象の文字列
         * @return ひらがなだけで構成されているかどうか
         */

    }, {
        key: 'hiraganaOnly',
        value: function hiraganaOnly(str) {
            return new Jaco(str).isOnlyHiragana();
        }
        /**
         * カタカナだけで構成されているかどうか
         *
         * @version 1.1.0
         * @since 1.1.0
         * @param str 対象の文字列
         * @return カタカナだけで構成されているかどうか
         */

    }, {
        key: 'katakanaOnly',
        value: function katakanaOnly(str) {
            return new Jaco(str).isOnlyKatakana();
        }
        /**
         * 配列の五十音順ソートをする
         * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
         *
         * @version 1.1.0
         * @since 1.1.0
         * @param array 対象の配列
         * @return 五十音順にソートされた配列
         */

    }, {
        key: 'naturalKanaSort',
        value: function naturalKanaSort(array) {
            return array.sort(Jaco.naturalKanaOrder);
        }
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

    }, {
        key: 'naturalKanaOrder',
        value: function naturalKanaOrder(a, b) {
            // 完全に一致ならば比較の必要なし
            if (a === b) {
                return 0;
            }
            var _a = new Jaco(a).toNarrow().toPhoeticKana();
            var _b = new Jaco(b).toNarrow().toPhoeticKana();
            var _tmpA = undefined; // tempString
            var _tmpB = undefined; // tempString
            var phoneticA = _a.toString();
            var phoneticB = _b.toString();
            var unvoicedA = _a.removeVoicedMarks(true).toString();
            var unvoicedB = _b.removeVoicedMarks(true).toString();
            var codeA = convertNaturalKanaOrderNumberPhase1(unvoicedA);
            var codeB = convertNaturalKanaOrderNumberPhase1(unvoicedB);
            var l = Math.max(a.length, b.length);
            var rSpecificPhoneticSign = /[ーぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮゝゞヽヾ]/;
            // 濁音・半濁音をのぞいたよみがなで比較
            if (codeA < codeB) {
                return -1;
            } else if (codeA > codeB) {
                return 1;
            } else {
                // 上記比較が全く同じであれば
                // 一文字ずつ比較する
                for (var i = 0; i < l; i++) {
                    if (rSpecificPhoneticSign.test(a[i]) || rSpecificPhoneticSign.test(b[i])) {
                        // 片方が「ーぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮゝゞヽヾ」に該当する場合
                        _tmpA = convertNaturalKanaOrderNumberPhase2(a[i]);
                        _tmpB = convertNaturalKanaOrderNumberPhase2(b[i]);
                        if (_tmpA < _tmpB) {
                            return -1;
                        } else if (_tmpA > _tmpB) {
                            return 1;
                        }
                    } else {
                        // 平音・濁音・半濁音で比較
                        if (phoneticA[i] < phoneticB[i]) {
                            return -1;
                        } else if (phoneticB[i] < phoneticA[i]) {
                            return 1;
                        }
                    }
                }
                // もう一度、頭から一文字ずつ比較する
                for (var i = 0; i < l; i++) {
                    // ひらがな・カタカナで比較
                    _tmpA = Jaco.hiraganaOnly(a[i]) ? '0' : '1';
                    _tmpB = Jaco.hiraganaOnly(b[i]) ? '0' : '1';
                    if (_tmpA < _tmpB) {
                        return -1;
                    } else if (_tmpA > _tmpB) {
                        return 1;
                    }
                }
                return 0;
            }
        }
    }]);

    return Jaco;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Jaco;
/**
 * キャラクターリストを正規表現に変換する
 *
 * @version 0.1.0
 * @since 0.1.0
 * @param chars 文字の集合
 * @return 正規表現化された文字セット
 */
function toPattern(chars) {
    'use strict';

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
function toRegExp(str) {
    'use strict';

    var option = arguments.length <= 1 || arguments[1] === undefined ? 'igm' : arguments[1];
    return new RegExp(str, option);
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
    'use strict';
    // naturalKanaOrder関数で使用される場合は str は一文字想定

    var result = str.replace('ー', '0').replace(/[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/, function ($0) {
        return $0.charCodeAt(0).toString(16);
    }).replace('ゝ', '4000').replace('ヽ', '4001').replace('ゞ', '4002').replace('ヾ', '4003').replace(/[^0-9]/, '9000');
    return result;
}
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
    'use strict';

    return new Jaco(str).replaceMap({
        'あ': 'ぁ',
        'い': 'あ',
        'う': 'ぃ',
        'え': 'い',
        'お': 'ぅ',
        'か': 'う',
        'き': 'ぇ',
        'く': 'え',
        'け': 'ぉ',
        'こ': 'お',
        'さ': 'か',
        'し': 'が',
        'す': 'き',
        'せ': 'ぎ',
        'そ': 'く',
        'た': 'ぐ',
        'ち': 'げ',
        'つ': 'こ',
        'て': 'ご',
        'と': 'さ',
        'な': 'ざ',
        'に': 'し',
        'ぬ': 'じ',
        'ね': 'す',
        'の': 'ず',
        'は': 'せ',
        'ひ': 'ぜ',
        'ふ': 'そ',
        'へ': 'ぞ',
        'ほ': 'た',
        'ま': 'だ',
        'み': 'ち',
        'む': 'ぢ',
        'め': 'っ',
        'も': 'つ',
        'や': 'づ',
        'ゆ': 'て',
        'よ': 'で',
        'ら': 'と',
        'り': 'ど',
        'る': 'な',
        'れ': 'に',
        'ろ': 'ぬ',
        'わ': 'ね',
        'ゐ': 'の',
        'ゑ': 'は',
        'を': 'ば',
        'ん': 'ぱ',
        'ゝ': 'ひ',
        'ー': 'び'
    }).toString();
}