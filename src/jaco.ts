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
module jaco {
	/**
	* 記号
	*
	* [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]
	*
	*/
	export var SIGN_CHARS: string = '\\u0020-\\u002F\\u003A-\\u0041\\u005B-\\u0061\\u007B-\\u007E';

	/**
	* 半角数字
	*
	* [0-9]
	*
	*/
	export var DIGIT_CAHRS: string = '0-9';

	/**
	* 半角英字
	*
	* [A-Za-z]
	*
	*/
	export var ALPHA_CHARS: string = 'A-Za-z';

	/**
	* 半角英数記号
	*
	* [!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~]
	*
	*/
	export var ALPHANUMERIC_CHARS_WITH_SIGN: string = '\\u0020-\\u007E';

	/**
	* 全角記号
	*
	* [！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～]
	*
	*/
	export var FULLWIDTH_SING_CHARS: string = '\\uFF01-\\uFF0F\\uFF1A-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF5E';

	/**
	* 全角数字
	*
	* [０１２３４５６７８９]
	*
	*/
	export var FULLWIDTH_DIGIT_CHARS: string = '\\uFF10-\\uFF19';

	/**
	* 全角英字
	*
	* [ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ]
	*
	*/
	export var FULLWIDTH_ALPHA_CHARS: string = '\\uFF21-\\uFF3A\\uFF41-\\uFF5A';

	/**
	* 全角英数記号
	*
	* [！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～]
	*
	*/
	export var FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN: string = '\\uFF01-\\uFF5F';

	/**
	* ひらがな
	*
	* [ぁ-ゖゝ-ゟ]
	*
	*/
	export var HIRAGANA_CHARS: string = '\\u3041-\\u3096\\u309D-\\u309F';

	/**
	* ひらがな（繰り返し記号・合字なし）
	*
	* [ぁ-ゖ]
	*
	*/
	export var HIRAGANA_CHARS_IGNORE_ITERATION_MARKS: string = '\\u3041-\\u3096';

	/**
	* カタカナ
	*
	* [ァ-ヺヽ-ヿ]
	*
	*/
	export var KATAKANA_CHARS: string = '\\u30A1-\\u30FA\\u30FD\\u30FF';

	/**
	* カタカナ（繰り返し記号・合字なし）
	*
	* [ァ-ヺ]
	*
	*/
	export var KATAKANA_CHARS_IGNORE_ITERATION_MARKS: string = '\\u30A1-\\u30FA';

	/**
	* 濁点／半濁点(結合文字含む)・長音符
	*
	* [゛゜ー]
	*
	*/
	export var KANA_COMMON_CAHRS: string = '\u3099-\u309C\u30FC';

	/**
	* 日本語で使用される記号
	*
	* [　、。〃〄々〆〇〈〉《》「」『』【】〒〓〔〕〖〗〘〙〚〛〜〝〞〟〠〡〢〣〤〥〦〧〨〩〪〭〮〯〫〬〰〱〲〳〴〵〶・～]
	*
	* [波ダッシュ・全角チルダ問題](http://goo.gl/w1xV9Z)があるため 全角チルダを含めることとする
	*
	*/
	export var JAPANESE_SIGN_CHARS: string = '\u3000-\u3036\u30FB\\uFF5E';

	/**
	* 半角カタカナ
	*
	* 濁点／半濁点は分解されているのでそれを含む
	* ヰヱの半角は存在しないので対象外
	*
	* [ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ]
	*
	*/
	export var NARROW_KATAKANA_CHARS: string = '\\uFF66-\\uFF9F';

	/**
	* 半角の日本語で使用される記号
	*
	* [｡｢｣､･]
	*
	*/
	export var NARROW_JAPANESE_SIGN_CHARS: string = '\\uFF61-\\uFF65';

	/**
	* スペース
	*
	* 仕様上、実際には「\u0009\u0020\u00A0\u2002〜\u200B\u3000\uFEFF'」すべて「\s」に含まれる
	*
	*/
	export var SPACE_CHARS: string = '\\s\\n\\t\\u0009\\u0020\\u00A0\\u2002-\\u200B\\u3000\\uFEFF';

	/**
	* ひらがな化
	*
	* @version 0.1.0
	* @since 0.1.0
	* @param str 対象の文字列
	* @param isCombinate 濁点・半濁点を結合文字にするかどうか
	* @return ひらがな化された文字列
	*/
	export function hiraganize (str: string, isCombinate: boolean = false): string {
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
	export function katakanize (str: string, toWide: boolean = true): string {
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
	export function hiraganaOnly (str: string): boolean {
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
	export function katakanaOnly (str: string): boolean {
		return new Jaco(str).isOnlyKatakana();
	}

}
