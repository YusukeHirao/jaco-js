import { ALPHANUMERIC_CHARS_WITH_SIGN } from './const/ALPHANUMERIC_CHARS_WITH_SIGN';
import { FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN } from './const/FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN';
import { HIRAGANA_CHARS } from './const/HIRAGANA_CHARS';
import { KANA_COMMON_CAHRS } from './const/KANA_COMMON_CAHRS';
import { KATAKANA_CHARS } from './const/KATAKANA_CHARS';
import { SPACE_CHARS } from './const/SPACE_CHARS';
import convertIterationMarks from './fn/convertIterationMarks';
import convertProlongedSoundMarks from './fn/convertProlongedSoundMarks';
import toPattern from './fn/toPattern';

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
export default class Jaco {

	/**
	 * 文字列長
	 *
	 * - サロゲートペアを考慮する
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @readonly
	 */
	public get length (): number {
		const array = this._toArray();
		return array.length;
	}

	/**
	 * 保持する文字列
	 *
	 * @version 2.0.0
	 * @since 0.1.0
	 */
	private $: string;

	/**
	 * コンストラクタ
	 *
	 * ```javascript
	 * var a = new Jaco("あああ");
	 * ```
	 *
	 * @version 2.0.0
	 * @since 0.1.0
	 * @param str 対象の文字列
	 */
	constructor (str: any) { // tslint:disable-line:no-any
		this.$ = `${str}`;
	}

	/**
	 * 半濁点を追加する
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 * @return インスタンス自信
	 */
	public addSemivoicedMarks (): Jaco {
		return this.replaceFromMap({
			'は': 'ぱ', 'ひ': 'ぴ', 'ふ': 'ぷ', 'へ': 'ぺ', 'ほ': 'ぽ',
			'ハ': 'パ', 'ヒ': 'ピ', 'フ': 'プ', 'ヘ': 'ペ', 'ホ': 'ポ',
		});
	}

	/**
	 * 濁点を追加する
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 * @return インスタンス自信
	 */
	public addVoicedMarks (): Jaco {
		// 濁点・半濁点単体の除去
		this.remove(/\u309B|\u3099|\uFF9E/g);
		this.remove(/\u309C|\u309A|\uFF9F/g);
		return this.replaceFromMap({
			'か': 'が', 'き': 'ぎ', 'く': 'ぐ', 'け': 'げ', 'こ': 'ご',
			'さ': 'ざ', 'し': 'じ', 'す': 'ず', 'せ': 'ぜ', 'そ': 'ぞ',
			'た': 'だ', 'ち': 'ぢ', 'つ': 'づ', 'て': 'で', 'と': 'ど',
			'は': 'ば', 'ひ': 'び', 'ふ': 'ぶ', 'へ': 'べ', 'ほ': 'ぼ',
			'カ': 'ガ', 'キ': 'ギ', 'ク': 'グ', 'ケ': 'ゲ', 'コ': 'ゴ',
			'サ': 'ザ', 'シ': 'ジ', 'ス': 'ズ', 'セ': 'ゼ', 'ソ': 'ゾ',
			'タ': 'ダ', 'チ': 'ヂ', 'ツ': 'ヅ', 'テ': 'デ', 'ト': 'ド',
			'ハ': 'バ', 'ヒ': 'ビ', 'フ': 'ブ', 'ヘ': 'ベ', 'ホ': 'ボ',
			'ワ': 'ヷ', 'イ': 'ヸ', 'ウ': 'ヴ', 'エ': 'ヹ', 'ヺ': 'ヲ',
			'ゝ': 'ゞ', 'ヽ': 'ヾ',
		});
	}

	/**
	 * 後方結合
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @param element 結合する文字列
	 * @return インスタンス自身
	 */
	public append (element: string | Jaco): Jaco {
		return this.concat(element);
	}

	/**
	 * 文字列のバイトサイズを返す
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @return バイト数
	 */
	public byteSize (): number {
		return encodeURIComponent(this.$).replace(/%../g, 'x').length;
	}

	/**
	 * 文字列から指定位置の文字を返す
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.charAt とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @return 指定位置の文字
	 */
	public charAt (index: number = 0): string {
		return this._toArray()[index] || '';
	}

	/**
	 * Unicodeポイント値である負でない整数を返す
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.charCodeAt とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @return Unicodeポイント値
	 */
	public charCodeAt (index: number = 0): number {
		const char = this.charAt(index);
		if (!char) {
			return NaN;
		}
		if (char.length === 1) {
			return char.charCodeAt(0);
		} else {
			const first = char.charCodeAt(0);
			const second = char.charCodeAt(1);
			const code = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
			return code;
		}
	}

	/**
	 * コピーを生成する
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @return コピー
	 */
	public clone (): Jaco {
		return new Jaco(this.$);
	}

	/**
	 * 濁点・半濁点とひらがな・かたかなを結合させる
	 *
	 * @version 2.0.0
	 * @since 1.2.0
	 * @param convertOnly ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
	 * @return インスタンス自身
	 */
	public combinateSoundMarks (convertOnly: boolean = false): Jaco {
		if (!convertOnly) {
			// 結合文字に変換
			this.combinateSoundMarks(true);
			// 濁点・半濁点を結合する
			return this.replaceFromMap({
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
				'ハ\u309A': 'パ', 'ヒ\u309A': 'ピ', 'フ\u309A': 'プ', 'ヘ\u309A': 'ペ', 'ホ\u309A': 'ポ',
			});
		} else {
			// ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
			return this.replaceFromMap({
				// 濁点
				'\u309B': '\u3099', // 全角濁点 → 全角結合文字濁点
				'\uFF9E': '\u3099', // 半角濁点 → 全角結合文字濁点
				// 半濁点
				'\u309C': '\u309A', // 全角半濁点 → 全角結合文字半濁点
				'\uFF9F': '\u309A', // 半角半濁点 → 全角結合文字半濁点
			});
		}
	}

	/**
	 * 文字列連結をおこなう
	 *
	 * - String.prototype.concat とは非互換
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param ...args 文字列もしくはJacoインスタンス
	 * @return インスタンス自身
	 */
	public concat (...args: (Jaco | string | Jaco[] | string[])[]): Jaco {
		this.$ += args.map(str => Array.isArray(str) ? str.join('') : str).join('');
		return this;
	}

	/**
	 * 繰り返し記号をかなに置き換える
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 * @return インスタンス自信
	 */
	public convertIterationMarks (): Jaco {
		this.$ = convertIterationMarks(this.$);
		return this;
	}

	/**
	 * 長音符をかなに置き換える
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 * @return インスタンス自信
	 */
	public convertProlongedSoundMarks (): Jaco {
		this.$ = convertProlongedSoundMarks(this.$);
		return this;
	}

	/**
	 * 引数に指定された文字列が末尾と合致するか
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.endWith とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param search 合致対象文字列
	 * @param position 末尾の位置
	 * @return 合致したかどうか
	 */
	public endWith (search: Jaco | string, position?: number): boolean {
		const thisLength = this.length;
		const searchLength = new Jaco(search).length;
		if (!isFinite(position) || Math.floor(position) !== position || position > thisLength) {
			position = thisLength;
		}
		const end = position;
		const start = position - searchLength;
		const endStr = this.substring(start, end);
		return endStr.is(search);
	}

	/**
	 * 該当の文字のいずれかを含んでいるかどうか
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param characters 文字セット
	 * @return 結果の真偽
	 */
	public has (characters: string | Jaco): boolean {
		const chars = characters
			.toString()
			.replace(/\\/g, '\\\\')
			.replace(/\(/g, '\\(')
			.replace(/\)/g, '\\)')
			.replace(/\[/g, '\\[')
			.replace(/\]/g, '\\]');
		const pattern = new RegExp('[' + chars + ']', 'gm');
		return pattern.test(this.$);
	}

	/**
	 * 小書き文字を含むかどうか
	 *
	 * TODO: test
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 * @return 小書き文字を含むかどうか
	 */
	public hasSmallLetter (): boolean {
		return /[ぁぃぅぇぉっゃゅょゎァィゥェォヵㇰヶㇱㇲッㇳㇴㇵㇶㇷㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ]/.test(this.$);
	}

	/**
	 * 引数に指定された文字列が部分合致するか
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param search 合致対象文字列
	 * @param position 開始位置
	 * @return 合致したかどうか
	 */
	public includes (search: Jaco | string, position: number = 0): boolean {
		return this.indexOf(search, position) !== -1;
	}

	/**
	 * 指定された文字列が最初に現れるインデックスを返す
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.indexOf とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param str 検索文字列
	 * @param fromIndex 検索位置
	 * @return インデックス
	 *
	 */
	public indexOf (str: Jaco | string, fromIndex: number = 0): number {
		const splited = this.slice(fromIndex).split(str)[0];
		if (this.is(splited)) {
			return -1;
		} else {
			return new Jaco(splited).length + fromIndex;
		}
	}

	/**
	 * 完全マッチ
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @param target 比較する文字列
	 * @return 結果の真偽
	 */
	public is (target: string | Jaco): boolean {
		return this.$ === target.toString();
	}

	/**
	 * 文字が空かどうか
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @return 結果の真偽
	 */
	public isEmpty (): boolean {
		return this.$ === '';
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
	public isNumeric (negative: boolean = true, floatingPoint: boolean = true): boolean {
		let pattern = '^';
		if (negative) {
			pattern += '-?';
		}
		if (floatingPoint) {
			pattern += '(?:[0-9]*\\.)?';
		}
		pattern += '[0-9]+$';
		return this.test(new RegExp(pattern));
	}

	/**
	 * 該当の文字だけで構成されているかどうか
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param characters 文字セット
	 * @return 結果の真偽
	 */
	public isOnly (characters: string | Jaco): boolean {
		const chars = characters
			.toString()
			.replace(/\\/g, '\\\\')
			.replace(/\(/g, '\\(')
			.replace(/\)/g, '\\)')
			.replace(/\[/g, '\\[')
			.replace(/\]/g, '\\]');
		const pattern = new RegExp('^[' + chars + ']+$', 'gm');
		return pattern.test(this.$);
	}

	/**
	 * ひらがなだけで構成されているかどうか
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @return 結果の真偽
	 */
	public isOnlyHiragana (): boolean {
		return this.isOnly(HIRAGANA_CHARS + KANA_COMMON_CAHRS);
	}

	/**
	 * カタカナだけで構成されているかどうか
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @return 結果の真偽
	 */
	public isOnlyKatakana (): boolean {
		return this.isOnly(KATAKANA_CHARS + KANA_COMMON_CAHRS);
	}

	/**
	 * 指定された文字列が最後に現れるインデックスを返す
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.lastIndexOf とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param str 検索文字列
	 * @param [fromIndex] 検索位置
	 * @return インデックス
	 *
	 */
	public lastIndexOf (str: Jaco | string, fromIndex: number = Infinity): number {
		return this._toArray().lastIndexOf(str.toString(), fromIndex);
	}

	/**
	 * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を得る
	 *
	 * - String.prototype.match とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @return マッチ結果
	 */
	public match (regexp: RegExp): RegExpMatchArray | null {
		return this.$.match(regexp);
	}

	/**
	 * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を純粋な配列で得る
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @return マッチした文字列の配列
	 */
	public matches (regexp: RegExp): string[] {
		const matches = this.match(regexp);
		return Array.prototype.concat.apply(matches || []);
	}

	/**
	 * 【未実装】Unicode 正規化形式を返す
	 *
	 * TODO: 日本語に関係する文字になるべく対応する
	 *
	 * - String.prototype.normalize とは非互換
	 *
	 * @version x.x.x
	 * @since x.x.x
	 * @param form 正規化形式の種類
	 * @return インスタンス自身
	 */
	public normalize (form: 'NFC' | 'NFD' | 'NFKC' | 'NFKD' = 'NFC'): Jaco {
		return this;
	}

	/**
	 * 最終的な文字列が指定された長さに到達するように文字列で延長する
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.padEnd とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param targetLength 最終的な長さ
	 * @param padString 延長する文字列
	 * @return インスタンス自身が保持する文字列
	 */
	public padEnd (targetLength: number, padString: string | Jaco = ' '): Jaco {
		const thisArray = this._toArray();
		const thisLength = thisArray.length;
		if (targetLength < thisLength) {
			this.$ = this.substr(0, targetLength).toString();
		} else {
			const pad = new Jaco(padString)._pad(targetLength - thisLength);
			this.$ += pad;
		}
		return this;
	}

	/**
	 * 最終的な文字列が指定された長さに到達するように文字列を先頭に追加する
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.padStart とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param targetLength 最終的な長さ
	 * @param padString 延長する文字列
	 * @return インスタンス自身が保持する文字列
	 */
	public padStart (targetLength: number, padString: string | Jaco = ' '): Jaco {
		const thisArray = this._toArray();
		const thisLength = thisArray.length;
		if (targetLength < thisLength) {
			this.$ = this.substr(0, targetLength).toString();
		} else {
			const pad = new Jaco(padString)._pad(targetLength - thisLength);
			this.$ = pad + this.$;
		}
		return this;
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
	public prepend (element: string | Jaco): Jaco {
		this.$ = new Jaco(element).concat(this).toString();
		return this;
	}

	/**
	 * 文字列を取り除く
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param pattern 取り除く文字列
	 * @return インスタンス自身
	 */
	public remove (pattern: string | RegExp | Jaco): Jaco {
		return this.replace(pattern, '');
	}

	/**
	 * 濁点・半濁点を取り除く
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
	 * @return インスタンス自信
	 */
	public removeVoicedMarks (ignoreSingleMark: boolean = false): Jaco {
		if (!ignoreSingleMark) {
			// 濁点・半濁点単体の除去
			this.remove(/\u309B|\u3099|\uFF9E/g);
			this.remove(/\u309C|\u309A|\uFF9F/g);
		}
		return this.replaceFromMap({
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
			'ゞ': 'ゝ', 'ヾ': 'ヽ',
		});
	}

	/**
	 * 文字列を繰り返す
	 *
	 * - String.prototype.repeat とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param times 繰り返しの回数
	 * @return インスタンス自身が保持する文字列
	 */
	public repeat (times: number = 0): Jaco {
		let res: string[] = [];
		times = Math.floor(Math.max(times, 0));
		if (times === Infinity) {
			throw new RangeError('repeat count must be less than infinity');
		}
		while (times--) {
			res.push(this.$);
		}
		this.$ = res.join('');
		return this;
	}

	/**
	 * 文字列をパターンで置換する
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param pattern  対象のパターン
	 * @param replacement 置換する文字列
	 * @return インスタンス自身
	 */
	public replace (pattern: string | RegExp | Jaco, replacement: string | Jaco): Jaco {
		const reg = pattern instanceof RegExp ? pattern : new RegExp(pattern.toString());
		this.$ = this.$.replace(reg, replacement.toString());
		return this;
	}

	/**
	 * キーがパターン・値が置換文字列のハッシュマップによって置換する
	 *
	 * @version 2.0.0
	 * @since 0.1.0
	 * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
	 * @return インスタンス自身
	 */
	public replaceFromMap (convMap: { [target: string]: string; }): Jaco {
		for (const needle in convMap) {
			if (convMap.hasOwnProperty(needle)) {
				const replace: string = convMap[needle];
				this.$ = this.$.replace(new RegExp(needle, 'g'), replace);
			}
		}
		return this;
	}

	/**
	 * 正規表現にマッチしたインデックスを返す
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.search とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param searcher パターン
	 * @return インデックス
	 */
	public search (searcher: RegExp | string | Jaco): number {
		const before = this.split(searcher)[0] || '';
		return new Jaco(before).length;
	}

	/**
	 * 文字位置による抽出
	 * (非破壊的メソッド)
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.slice とは非互換
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param start 開始インデックス
	 * @param end 終了インデックス 省略すると最後まで
	 * @return 抽出した文字列からなるJacoインスタンス
	 */
	public slice (start: number, end?: number): Jaco {
		const array = this._toArray();
		const res = array.slice(start, end);
		return new Jaco(res.join(''));
	}

	/**
	 * 文字列の配列に分割する
	 *
	 * - String.prototype.split とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param separator 区切り文字
	 * @param limit 配列の数を指定
	 * @return 分割された配列
	 */
	public split (separator: string | RegExp | Jaco, limit?: number): string[] {
		const reg = separator instanceof RegExp ? separator : new RegExp(separator.toString());
		return this.$.split(reg, limit);
	}

	/**
	 * 引数に指定された文字列が先頭と合致するか
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.startsWith とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param search 合致対象文字列
	 * @param position 先頭の位置
	 * @return 合致したかどうか
	 */
	public startsWith (search: Jaco | string, position: number = 0): boolean {
		return this.substr(position, search.length).toString() === search.toString();
	}

	/**
	 * 指定した位置から指定した数だけ文字列を抽出
	 * (非破壊的メソッド)
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.substr とは非互換
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param start 開始インデックス
	 * @param length 指定数
	 * @return 抽出した文字列からなるJacoインスタンス
	 */
	public substr (start: number, length?: number): Jaco {
		const array = this._toArray();
		const thisLength = array.length;
		if (length == null || length < 0 || thisLength < length) {
			length = thisLength;
		}
		if (start < 0) {
			start = thisLength + start;
		}
		let end = Math.max(start + length, start);
		start = Math.min(start + length, start);
		const res = array.slice(start, end);
		return new Jaco(res.join(''));
	}

	/**
	 * 指定した位置の間の文字列を抽出
	 * (非破壊的メソッド)
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.substring とは非互換
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param indexA インデックス
	 * @param indexB インデックス
	 * @return 抽出した文字列からなるJacoインスタンス
	 */
	public substring (indexA: number, indexB: number): Jaco {
		const start = Math.max(Math.min(indexA, indexB), 0);
		const end = Math.min(Math.max(indexA, indexB), this.length);
		const length = end - start;
		return this.substr(start, length);
	}

	/**
	 * パターンとマッチするかどうか
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param pattern パターン
	 * @return 結果の真偽
	 */
	public test (pattern: string | RegExp | Jaco): boolean {
		return pattern instanceof RegExp ? pattern.test(this.$) : this.$ === pattern.toString();
	}

	/**
	 * 小書き文字を基底文字に変換する
	 *
	 * TODO: test
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 * @return インスタンス自身
	 */
	public toBasicLetter (): Jaco {
		this
			.combinateSoundMarks()
			.replaceFromMap({
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
				'ヮ': 'ワ',
			});
		return this;
	}

	/**
	 * ひらがなに変換する
	 *
	 * 第一引数に true を渡した場合、濁点・半濁点は基本的に結合される
	 * ヷヸヹヺは文字が存在しないため ひらがな + 結合文字でない濁点・半濁点 となる
	 *
	 * @version 0.2.0
	 * @since 0.1.0
	 * @param isCombinate 濁点・半濁点を結合文字にするかどうか
	 * @return インスタンス自身
	 */
	public toHiragana (isCombinate: boolean = false): Jaco {
		// 半角カタカナを全角カタカナへ
		this.toWideKatakana();
		// ヷヸヹヺの変換
		this.replaceFromMap({
			'ヷ': 'わ゛',
			'ヸ': 'ゐ゛',
			'ヹ': 'ゑ゛',
			'ヺ': 'を゛',
		});
		// カタカナをひらがなへ(Unicodeの番号をずらす)
		this._shift(toPattern(KATAKANA_CHARS), -96);
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
	public toKatakana (toWide: boolean = true): Jaco {
		// 半角カタカナを全角カタカナへ
		if (toWide) {
			this.toWideKatakana();
		}
		// わ゛=> ヷ (濁点3種類対応 ※全角濁点・全角結合文字濁点・半角濁点)
		this.replace(/わ(?:\u309B|\u3099|\uFF9E)/g, 'ヷ');
		// ゐ゛=> ヸ (濁点3種類対応)
		this.replace(/ゐ(?:\u309B|\u3099|\uFF9E)/g, 'ヸ');
		// ゑ゛=> ヹ (濁点3種類対応)
		this.replace(/ゑ(?:\u309B|\u3099|\uFF9E)/g, 'ヹ');
		// を゛=> ヺ (濁点3種類対応)
		this.replace(/を(?:\u309B|\u3099|\uFF9E)/g, 'ヺ');
		// ひらがなをカタカナへ(Unicodeの番号をずらす)
		this._shift(toPattern(HIRAGANA_CHARS), 96);
		return this;
	}

	/**
	 * 英字の大文字を小文字に変換する
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @return インスタンス自身
	 */
	public toLowerCase (): Jaco {
		this.$ = this.$.toLowerCase();
		return this;
	}

	/**
	 * 半角に変換
	 *
	 * 改行は変換しない
	 *
	 * @version 2.0.0
	 * @since 0.4.0
	 * @return インスタンス自身
	 */
	public toNarrow (convertJapaneseChars: boolean = false): Jaco {
		// スペースの変換
		this.replace(toPattern(SPACE_CHARS), ' ');
		// 半角英数記号の変換
		this._shift(toPattern(FULLWIDTH_ALPHANUMERIC_CHARS_WITH_SIGN), -65248);
		if (convertJapaneseChars) {
			// 日本語カタカナ記号の変換
			this.toNarrowJapnese();
		}
		return this;
	}

	/**
	 * カタカナと日本語で使われる記号を半角に変換
	 *
	 * @version 0.4.0
	 * @since 0.4.0
	 * @return インスタンス自身
	 */
	public toNarrowJapnese (): Jaco {
		// 半角カタカナへ
		this.toNarrowKatakana();
		// 半角記号へ
		this.toNarrowSymbolForJapanese();
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
	public toNarrowKatakana (fromHiragana: boolean = false): Jaco {
		// ひらがなを一旦全角カタカナに変換する
		if (fromHiragana) {
			this.toKatakana();
		}
		// 濁点の変換 (全角濁点2種類対応)
		this.replace(/\u309B|\u3099/g, '\uFF9E');
		// 半濁点の変換 (全角半濁点2種類対応)
		this.replace(/\u309C|\u309A/g, '\uFF9F');
		// カタカナの変換
		this.replaceFromMap({
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
			'ヷ': 'ﾜﾞ', 'ヸ': 'ｲﾞ', 'ヴ': 'ｳﾞ', 'ヹ': 'ｴﾞ', 'ヺ': 'ｦﾞ',
		});
		return this;
	}

	/**
	 * 日本語で使われる記号を半角に変換
	 *
	 * @version 2.0.0
	 * @since 0.4.0
	 * @return インスタンス自身
	 */
	public toNarrowSymbolForJapanese (): Jaco {
		this.replaceFromMap({
			'。': '｡',
			'「': '｢',
			'」': '｣',
			'、': '､',
			'・': '･',
		});
		return this;
	}

	/**
	 * 数値に変換する
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @return 数値
	 */
	public toNumber (): number {
		return parseFloat(this.$);
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
	public toNumeric (negative: boolean = false, floatingPoint: boolean = false): Jaco {
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
	 * よみの文字に変換する
	 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
	 *
	 * TODO: test
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 * @return インスタンス自身
	 */
	public toPhoeticKana (): Jaco {
		this
			// ひらがな化
			.toHiragana()
			// 小書き文字を基底文字に変換
			.toBasicLetter()
			// 長音符を置き換える
			.convertProlongedSoundMarks()
			// 繰り返し記号を置き換える
			.convertIterationMarks();
		return this;
	}

	/**
	 * 明示もしくは暗黙の文字列変換メソッド
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 * @return インスタンス自身が保持する文字列
	 */
	public toString (): string {
		return this.$;
	}

	/**
	 * 英字の小文字を大文字に変換する
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @return インスタンス自身
	 */
	public toUpperCase (): Jaco {
		this.$ = this.$.toUpperCase();
		return this;
	}

	/**
	 * 全角に変換
	 *
	 * @version 0.4.0
	 * @since 0.4.0
	 * @return インスタンス自身
	 */
	public toWide (): Jaco {
		// スペースの変換
		this.replace(' ', '\u3000');
		// 日本語カタカナ記号の変換
		this.toWideJapnese();
		// 半角英数記号の変換
		this._shift(toPattern(ALPHANUMERIC_CHARS_WITH_SIGN), 65248);
		return this;
	}

	/**
	 * カタカナと日本語で使われる記号を全角に変換
	 *
	 * @version 0.4.0
	 * @since 0.4.0
	 * @return インスタンス自身
	 */
	public toWideJapnese (): Jaco {
		// 全角カタカナへ
		this.toWideKatakana();
		// 全角記号へ
		this.toWideSymbolJapanese();
		return this;
	}

	/**
	 * 全角カタカナに変換する
	 *
	 * @version 0.2.0
	 * @since 0.1.0
	 * @return インスタンス自身
	 */
	public toWideKatakana (): Jaco {
		// カタカナ・濁点・半濁点の変換
		this.replaceFromMap({
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
			'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
		});
		return this;
	}

	/**
	 * 日本語で使われる記号を全角に変換
	 *
	 * @version 2.0.0
	 * @since 0.4.0
	 * @return インスタンス自身
	 */
	public toWideSymbolJapanese (): Jaco {
		this.replaceFromMap({
			'｡': '。',
			'｢': '「',
			'｣': '」',
			'､': '、',
			'･': '・',
		});
		return this;
	}

	/**
	 * 先頭と末尾の空白を取り除く
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @return インスタンス自身
	 */
	public trim (): Jaco {
		return this.trimLeft().trimRight();
	}

	/**
	 * 先頭の空白を取り除く
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @return インスタンス自身
	 */
	public trimLeft (): Jaco {
		return this.remove(/^\s+/);
	}

	/**
	 * 末尾の空白を取り除く
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @return インスタンス自身
	 */
	public trimRight (): Jaco {
		return this.remove(/\s+$/);
	}

	/**
	 * 暗黙の値変換に呼び出されるメソッド
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 * @return インスタンス自身が保持する文字列
	 */
	public valueOf (): string {
		return this.toString();
	}

	/**
	 * イテレータ
	 *
	 * 要素の型は `string` ではなく `Jaco`
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @return イテレータブル `<Jaco>`
	 */
	public [Symbol.iterator] (): Iterator<Jaco> {
		let counter = 0;
		const iterator: Iterator<Jaco> = {
			next: () => {
				const count = counter++;
				const item: string | undefined = this._toArray()[count];
				const result: IteratorResult<Jaco> = {
					value: item != null ? new Jaco(item) : undefined,
					done: this.length <= count,
				};
				return result;
			},
		};
		return iterator;
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
	private _shift (needle: RegExp, shiftNum: number): Jaco {
		this.$ = this.$.replace(needle, (char: string): string => {
			return String.fromCharCode(char.charCodeAt(0) + shiftNum);
		});
		return this;
	}

	/**
	 * 文字列を配列化する
	 *
	 * サロゲートペア文字列を考慮する
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @return 配列化された文字列
	 */
	private _toArray (): string[] {
		return this.$.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
	}

	/**
	 * 指定数の文字列長になるように繰り返して埋める
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param length 指定の文字列長
	 * @return 埋められた文字列
	 */
	private _pad (length: number): string {
		const pad: string[] = [];
		const padStringArray = this._toArray();
		const padLength = padStringArray.length;
		for (let i = 0; i < length; i++) {
			const char = padStringArray[i % padLength];
			pad.push(char);
		}
		return pad.join('');
	}

}
