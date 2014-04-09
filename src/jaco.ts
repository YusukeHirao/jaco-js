/// <reference path="DefinitelyTyped/node/node.d.ts" />

/**
 * Japanese String & Charactor Converter
 *
 * @module jaco
 */
module jaco {

	export var SIGN_CHARS = '\\u0020-\\u002F\\u003A-\\u0041\\u005B-\\u0061\\u007B-\\u007E'; // [ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]
	export var DIGIT_CAHRS = '0-9';
	export var ALPHA_CHARS = 'A-Za-z';
	export var ALPHANUMERIC_CHARS_WITH_SIGN = '\\u0020-\\u007E'; // [ !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~]
	export var FULLWIDTH_SING_CHARS = '\\uFF01-\\uFF0F\\uFF1A-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF5E'; // [！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～]
	export var FULLWIDTH_DIGIT_CHARS = '\\uFF10-\\uFF19'; // [０１２３４５６７８９]
	export var FULLWIDTH_ALPHA_CHARS = '\\uFF21-\\uFF3A\\uFF41-\\uFF5A'; // [ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ]
	export var FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN = '\\uFF01-\\uFF5F'; // [！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～]
	export var HIRAGANA_CHARS = '\\u3041-\\u3096\\u309D-\\u309F'; // [ぁ-ゖゝ-ゟ]
	export var KATAKANA_CHARS = '\\u30A1-\\u30FA\\u30FD\\u30FF'; // [ァ-ヺヽ-ヿ]
	export var KANA_COMMON_CAHRS = '\u3099-\u309C\u30FC'; // [゛゜(結合文字含む)ー]
	export var JAPANESE_SIGN_CHARS = '\u3000-\u3036\u30FB\\uFF5E'; // [　、。〃〄々〆〇〈〉《》「」『』【】〒〓〔〕〖〗〘〙〚〛〜〝〞〟〠〡〢〣〤〥〦〧〨〩〪〭〮〯〫〬〰〱〲〳〴〵〶・～] ※ 波ダッシュ・全角チルダ問題があるため 全角チルダを含めることとする (http://ja.wikipedia.org/wiki/Unicode#.E6.B3.A2.E3.83.80.E3.83.83.E3.82.B7.E3.83.A5.E3.83.BB.E5.85.A8.E8.A7.92.E3.83.81.E3.83.AB.E3.83.80.E5.95.8F.E9.A1.8C)
	export var NARROW_KATAKANA_CHARS = '\\uFF66-\\uFF9F'; // [ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ]
	export var NARROW_JAPANESE_SIGN_CHARS = '\\uFF61-\\uFF65'; // [｡｢｣､･]
	export var SPACE_LIKE_CHARS = '\\s\\n\\t\\u0009\\u0020\\u00A0\\u2002-\\u200B\\u3000\\uFEFF';

	/**
	 * カタカナに変換する
	 *
	 * @method katakana
	 * @since 0.1.0
	 * @static
	 * @param {string} str 対象の文字列
	 * @return {string} 変換後の文字列
	 */
	export function katakana (str:string):string {
		return new Jaco(str).toKatakana().toString();
	}

	/**
	* カタカナに変換する
	*
	* @class Jaco
	* @since 0.1.0
	* @static
	* @param {string} str 対象の文字列
	* @return {string} 変換後の文字列
	*/
	class Jaco {

		private _str:string;

		constructor (str:string = '') {
			this._str = str;
		}

		public toString ():string {
			return this._str;
		}

		public toKatakana ():Jaco {
			this._replace({
				'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
				'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
				'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
				'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
				'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
				'ﾜﾞ': 'ヷ', 'ｲﾞ': 'ヸ', 'ｳﾞ': 'ヴ', 'ｴﾞ': 'ヹ', 'ｦﾞ': 'ヺ',
				'ﾞ': '゛', 'ﾟ': '゜',
				'ｧ': 'ァ', 'ｨ': 'ィ','ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
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

		private _replace (convMap:any):Jaco {
			var needle:string;
			var replace:string;
			for (needle in convMap) {
				replace = convMap[needle];
				this._str = this._str.replace(_r(needle), replace);
			}
			return this;
		}

	}

	function _r (str:string, option:string = 'igm'):RegExp {
		return new RegExp(str, option);
	}

}

(module).exports = jaco;
