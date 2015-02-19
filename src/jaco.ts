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

	/**
	* 配列の五十音順ソートをする
	* JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
	*
	* @version 1.1.0
	* @since 1.1.0
	* @param array 対象の配列
	* @return 五十音順にソートされた配列
	*/
	export function naturalKanaSort (array: string[]): string[] {
		return array.sort(jaco.naturalKanaOrder);
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
	export function naturalKanaOrder (a: string, b: string): number {
		// 完全に一致ならば比較の必要なし
		if (a === b) {
			return 0;
		}
		var _a: Jaco = new jaco.Jaco(a).toNarrow().toPhoeticKana();
		var _b: Jaco = new jaco.Jaco(b).toNarrow().toPhoeticKana();
		var __a: string; // tempString
		var __b: string; // tempString
		var phoneticA: string = _a.toString();
		var phoneticB: string = _b.toString();
		var unvoicedA: string = _a.removeVoicedMarks(true).toString();
		var unvoicedB: string = _b.removeVoicedMarks(true).toString();
		var codeA: string = convertNaturalKanaOrderNumberPhase1(unvoicedA);
		var codeB: string = convertNaturalKanaOrderNumberPhase1(unvoicedB);
		var i: number = 0;
		var l: number = Math.max(a.length, b.length);
		var rSpecificPhoneticSign: RegExp = /[ーぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮゝゞヽヾ]/;
		// 濁音・半濁音をのぞいたよみがなで比較
		if (codeA < codeB) {
			return -1;
		} else if (codeA > codeB) {
			return 1;
		} else {
			// 上記比較が全く同じであれば
			// 一文字ずつ比較する
			for (; i < l; i++) {
				if (rSpecificPhoneticSign.test(a[i]) || rSpecificPhoneticSign.test(b[i])) {
					// 片方が「ーぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮゝゞヽヾ」に該当する場合
					__a = convertNaturalKanaOrderNumberPhase2(a[i]);
					__b = convertNaturalKanaOrderNumberPhase2(b[i]);
					if (__a < __b) {
						return -1;
					} else if (__a > __b) {
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
			for (i = 0; i < l; i++) {
				// ひらがな・カタカナで比較
				__a = jaco.hiraganaOnly(a[i]) ? '0' : '1';
				__b = jaco.hiraganaOnly(b[i]) ? '0' : '1';
				if (__a < __b) {
					return -1;
				} else if (__a > __b) {
					return 1;
				}
			}
			return 0;
		}
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
	function convertNaturalKanaOrderNumberPhase1 (str: string): string {
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
	function convertNaturalKanaOrderNumberPhase2 (str: string): string {
		// naturalKanaOrder関数で使用される場合は str は一文字想定
		var result: string = str
			.replace('ー', '0')
			.replace(/[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/, ($0: string): string => {
				return $0.charCodeAt(0).toString(16);
			})
			.replace('ゝ', '4000')
			.replace('ヽ', '4001')
			.replace('ゞ', '4002')
			.replace('ヾ', '4003')
			// この時点で4桁の数字になっている
			.replace(/[^0-9]/, '9000');
		return result;
	}

}
