import addSemivoicedMarks from './fn/addSemivoicedMarks';
import addVoicedMarks from './fn/addVoicedMarks';
import byteSize from './fn/byteSize';
import charAt from './fn/charAt';
import charCodeAt from './fn/charCodeAt';
import combinateSoundMarks from './fn/combinateSoundMarks';
import concat from './fn/concat';
import convertIterationMarks from './fn/convertIterationMarks';
import convertProlongedSoundMarks from './fn/convertProlongedSoundMarks';
import endWith from './fn/endWith';
import has from './fn/has';
import hasSmallLetter from './fn/hasSmallLetter';
import hasSurrogatePair from './fn/hasSurrogatePair';
import hasUnpairedSurrogate from './fn/hasUnpairedSurrogate';
import includes from './fn/includes';
import indexOf from './fn/indexOf';
import is from './fn/is';
import isEmpty from './fn/isEmpty';
import isNumeric from './fn/isNumeric';
import isOnly from './fn/isOnly';
import isOnlyHiragana from './fn/isOnlyHiragana';
import isOnlyKatakana from './fn/isOnlyKatakana';
import lastIndexOf from './fn/lastIndexOf';
import matches from './fn/matches';
import padEnd from './fn/padEnd';
import padStart from './fn/padStart';
import remove from './fn/remove';
import removeUnpairedSurrogate from './fn/removeUnpairedSurrogate';
import removeVoicedMarks from './fn/removeVoicedMarks';
import repeat from './fn/repeat';
import replace from './fn/replace';
import replaceFromMap from './fn/replaceFromMap';
import search from './fn/search';
import slice from './fn/slice';
import split from './fn/split';
import startsWith from './fn/startsWith';
import substr from './fn/substr';
import substring from './fn/substring';
import test from './fn/test';
import toBasicLetter from './fn/toBasicLetter';
import toHiragana from './fn/toHiragana';
import toKatakana from './fn/toKatakana';
import toNarrow from './fn/toNarrow';
import toNarrowAlphanumeric from './fn/toNarrowAlphanumeric';
import toNarrowJapanese from './fn/toNarrowJapanese';
import toNarrowKatakana from './fn/toNarrowKatakana';
import toNarrowSign from './fn/toNarrowSign';
import toNarrowSymbolForJapanese from './fn/toNarrowSymbolForJapanese';
import toNumeric from './fn/toNumeric';
import toPhoeticKana from './fn/toPhoeticKana';
import toWide from './fn/toWide';
import toWideAlphanumeric from './fn/toWideAlphanumeric';
import toWideJapanese from './fn/toWideJapanese';
import toWideKatakana from './fn/toWideKatakana';
import toWideSign from './fn/toWideSign';
import toWideSymbolForJapanese from './fn/toWideSymbolForJapanese';

import arrayize from './util/arrayize';

/**
 * ## Jacoクラス
 *
 * 日本語やマルチバイト文字・ASCII文字を扱いやすくするためのラッパークラス
 *
 * 文字列クラスを継承してはいないがメソッドは同等のものが実装されている。
 * ただし基本的にほとんどのメソッドが破壊的メソッドかつチェインナブルである。
 *
 * @version 2.0.0
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
		return arrayize(this.$).length;
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
	 * @version 2.0.0
	 * @since 1.1.0
	 */
	public addSemivoicedMarks (): Jaco {
		return new Jaco(addSemivoicedMarks(this.$));
	}

	/**
	 * 濁点を追加する
	 *
	 * @version 2.0.0
	 * @since 1.1.0
	 */
	public addVoicedMarks (): Jaco {
		return new Jaco(addVoicedMarks(this.$));
	}

	/**
	 * 後方結合
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param element 結合する文字列
	 */
	public append (element: { toString(): string }): Jaco {
		return new Jaco(concat(this, element));
	}

	/**
	 * 文字列のバイトサイズを返す
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 */
	public byteSize (): number {
		return byteSize(this.$);
	}

	/**
	 * 文字列から指定位置の文字を返す
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.charAt とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param index 指定位置
	 */
	public charAt (index: number = 0): Jaco {
		return new Jaco(charAt(this.$, index));
	}

	/**
	 * 指定位置のUnicodeコードポイントを返す
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.charCodeAt とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param charCodeAt 指定位置
	 */
	public charCodeAt (index: number = 0): number {
		return charCodeAt(this.$, index);
	}

	/**
	 * コピーを生成する
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 */
	public clone (): Jaco {
		return new Jaco(this.$);
	}

	/**
	 * 濁点・半濁点とひらがな・かたかなを結合させる
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param convertOnly ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
	 */
	public combinateSoundMarks (convertOnly: boolean = false): Jaco {
		return new Jaco(combinateSoundMarks(this.$, convertOnly));
	}

	/**
	 * 文字列連結をおこなう
	 *
	 * - String.prototype.concat とは非互換
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param ...args 文字列もしくはJacoインスタンス
	 */
	public concat (...args: (Jaco | { toString(): string }[] | string[])[]): Jaco {
		return new Jaco(concat(this.$, args));
	}

	/**
	 * 繰り返し記号をかなに置き換える
	 *
	 * @version 2.0.0
	 * @since 1.1.0
	 */
	public convertIterationMarks (): Jaco {
		return new Jaco(convertIterationMarks(this.$));
	}

	/**
	 * 長音符をかなに置き換える
	 *
	 * @version 2.0.0
	 * @since 1.1.0
	 */
	public convertProlongedSoundMarks (): Jaco {
		return new Jaco(convertProlongedSoundMarks(this.$));
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
	 */
	public endWith (search: { toString(): string }, position?: number): boolean {
		return endWith(this.$, search, position);
	}

	/**
	 * 該当の文字のいずれかを含んでいるかどうか
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param characters 文字セット
	 * @return 結果の真偽
	 */
	public has (characters: { toString(): string }): boolean {
		return has(this.$, characters);
	}

	/**
	 * 小書き文字を含むかどうか
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 * @return 小書き文字を含むかどうか
	 */
	public hasSmallLetter (): boolean {
		return hasSmallLetter(this.$);
	}

	/**
	 * サロゲートペア文字列を含んでいるかどうか
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @return 結果の真偽
	 */
	public hasSurrogatePair (): boolean {
		return hasSurrogatePair(this.$);
	}

	/**
	 * ペアになっていないサロゲートコードポイントを含んでいるかどうか
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @return 結果の真偽
	 */
	public hasUnpairedSurrogate (): boolean {
		return hasUnpairedSurrogate(this.$);
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
		return includes(this.$, search, position);
	}

	/**
	 * 指定された文字列が最初に現れるインデックスを返す
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.indexOf とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param search 検索文字列
	 * @param fromIndex 検索位置
	 */
	public indexOf (search: { toString(): string }, fromIndex: number = 0): number {
		return indexOf(this.$, search, fromIndex);
	}

	/**
	 * 完全マッチ
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @param target 比較する文字列
	 */
	public is (target: { toString(): string }): boolean {
		return is(this.$, target);
	}

	/**
	 * 文字が空かどうか
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 */
	public isEmpty (): boolean {
		return isEmpty(this.$);
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
		return isNumeric(this.$, negative, floatingPoint);
	}

	/**
	 * 該当の文字だけで構成されているかどうか
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param characters 文字セット
	 * @return 結果の真偽
	 */
	public isOnly (characters: { toString(): string }): boolean {
		return isOnly(this.$, characters);
	}

	/**
	 * ひらがなだけで構成されているかどうか
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @return 結果の真偽
	 */
	public isOnlyHiragana (): boolean {
		return isOnlyHiragana(this.$);
	}

	/**
	 * カタカナだけで構成されているかどうか
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @return 結果の真偽
	 */
	public isOnlyKatakana (): boolean {
		return isOnlyKatakana(this.$);
	}

	/**
	 * 指定された文字列が最後に現れるインデックスを返す
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.lastIndexOf とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param search 検索文字列
	 * @param [fromIndex] 検索位置
	 *
	 */
	public lastIndexOf (search: { toString(): string }, fromIndex: number = Infinity): number {
		return lastIndexOf(this.$, search, fromIndex);
	}

	/**
	 * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を得る
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param regexp パターン
	 */
	public match (regexp: RegExp): RegExpMatchArray | null {
		return this.$.match(regexp);
	}

	/**
	 * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を純粋な配列で得る
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param pattern パターン
	 */
	public matches (pattern: RegExp): string[] {
		return matches(this.$, pattern);
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
	 */
	public normalize (form: 'NFC' | 'NFD' | 'NFKC' | 'NFKD' = 'NFC'): never {
		throw Error(`No support method yet`);
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
	 */
	public padEnd (targetLength: number, padString: { toString(): string } = ' '): Jaco {
		return new Jaco(padEnd(this.$, targetLength, padString));
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
	 */
	public padStart (targetLength: number, padString: { toString(): string } = ' '): Jaco {
		return new Jaco(padStart(this.$, targetLength, padString));
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
	 */
	public prepend (element: { toString(): string }): Jaco {
		return new Jaco(concat(element, this));
	}

	/**
	 * 文字列を取り除く
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param pattern 取り除く文字列
	 */
	public remove (pattern: RegExp | { toString(): string }): Jaco {
		return new Jaco(remove(this.$, pattern));
	}

	/**
	 * ペアになっていないサロゲートコードポイントの削除
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 */
	public removeUnpairedSurrogate (): Jaco {
		return new Jaco(removeUnpairedSurrogate(this.$));
	}

	/**
	 * 濁点・半濁点を取り除く
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
	 */
	public removeVoicedMarks (ignoreSingleMark: boolean = false): Jaco {
		return new Jaco(removeVoicedMarks(this.$, ignoreSingleMark));
	}

	/**
	 * 文字列を繰り返す
	 *
	 * - String.prototype.repeat とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param times 繰り返しの回数
	 */
	public repeat (times: number = 0): Jaco {
		return new Jaco(repeat(this.$, times));
	}

	/**
	 * 文字列をパターンで置換する
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param pattern  対象のパターン
	 * @param replacement 置換する文字列
	 */
	public replace (pattern: RegExp | { toString(): string }, replacement: { toString(): string }): Jaco {
		return new Jaco(replace(this.$, pattern, replacement));
	}

	/**
	 * キーがパターン・値が置換文字列のハッシュマップによって置換する
	 *
	 * @version 2.0.0
	 * @since 0.1.0
	 * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
	 */
	public replaceFromMap (convMap: { [pattern: string]: string; }): Jaco {
		return new Jaco(replaceFromMap(this.$, convMap));
	}

	/**
	 * 正規表現にマッチしたインデックスを返す
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.search とは非互換
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 * @param pattern パターン
	 */
	public search (pattern: RegExp | { toString(): string }): number {
		return search(this.$, pattern);
	}

	/**
	 * 文字位置による抽出
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.slice とは非互換
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param start 開始インデックス
	 * @param end 終了インデックス 省略すると最後まで
	 */
	public slice (start: number, end?: number): Jaco {
		return new Jaco(slice(this.$, start, end));
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
	 */
	public split (separator: RegExp | { toString(): string }, limit?: number): string[] {
		return split(this.$, separator, limit);
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
	 */
	public startsWith (search: { toString(): string }, position: number = 0): boolean {
		return startsWith(this.$, search, position);
	}

	/**
	 * 指定した位置から指定した数だけ文字列を抽出
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.substr とは非互換
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param start 開始インデックス
	 * @param length 指定数
	 */
	public substr (start: number, length?: number): Jaco {
		return new Jaco(substr(this.$, start, length));
	}

	/**
	 * 指定した位置の間の文字列を抽出
	 *
	 * - サロゲートペアを考慮する
	 * - String.prototype.substring とは非互換
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param indexA インデックス
	 * @param indexB インデックス
	 */
	public substring (indexA: number, indexB: number): Jaco {
		return new Jaco(substring(this.$, indexA, indexB));
	}

	/**
	 * パターンとマッチするかどうか
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 * @param pattern パターン
	 */
	public test (pattern: RegExp | { toString(): string }): boolean {
		return test(this.$, pattern);
	}

	/**
	 * 小書き文字を基底文字に変換する
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 */
	public toBasicLetter (): Jaco {
		return new Jaco(toBasicLetter(this.$));
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
	 */
	public toHiragana (isCombinate: boolean = false): Jaco {
		return new Jaco(toHiragana(this.$, isCombinate));
	}

	/**
	 * カタカナに変換する
	 *
	 * @version 0.2.0
	 * @since 0.1.0
	 * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
	 */
	public toKatakana (toWide: boolean = true): Jaco {
		return new Jaco(toKatakana(this.$, toWide));
	}

	/**
	 * 英字の大文字を小文字に変換する
	 *
	 * @version 0.2.0
	 * @since 0.2.0
	 * @return インスタンス自身
	 */
	public toLowerCase (): Jaco {
		return new Jaco(this.$.toLowerCase());
	}

	/**
	 * 半角に変換
	 *
	 * @version 2.0.0
	 * @since 0.4.0
	 */
	public toNarrow (convertJapaneseChars: boolean = false): Jaco {
		return new Jaco(toNarrow(this.$, convertJapaneseChars));
	}

	/**
	 * 英数字を半角に変換
	 *
	 * @version 2.0.0
	 * @since 1.3.0
	 */
	public toNarrowAlphanumeric (): Jaco {
		return new Jaco(toNarrowAlphanumeric(this.$));
	}

	/**
	 * カタカナと日本語で使われる記号を半角に変換
	 *
	 * @version 0.4.0
	 * @since 0.4.0
	 */
	public toNarrowJapanese (): Jaco {
		return new Jaco(toNarrowJapanese(this.$));
	}

	/**
	 * 半角カタカナに変換する
	 *
	 * @version 0.6.0
	 * @since 0.1.0
	 * @param fromHiragana ひらがなも変換する
	 */
	public toNarrowKatakana (fromHiragana: boolean = false): Jaco {
		return new Jaco(toNarrowKatakana(this.$, fromHiragana));
	}

	/**
	 * 記号を半角に変換する
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 */
	public toNarrowSign (): Jaco {
		return new Jaco(toNarrowSign(this.$));
	}

	/**
	 * 日本語で使われる記号を半角に変換
	 *
	 * @version 2.0.0
	 * @since 0.4.0
	 */
	public toNarrowSymbolForJapanese (): Jaco {
		return new Jaco(toNarrowSymbolForJapanese(this.$));
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
	 */
	public toNumeric (negative: boolean = false, floatingPoint: boolean = false): Jaco {
		return new Jaco(toNumeric(this.$, negative, floatingPoint));
	}

	/**
	 * よみの文字に変換する
	 * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
	 *
	 * @version 1.1.0
	 * @since 1.1.0
	 */
	public toPhoeticKana (): Jaco {
		return new Jaco(toPhoeticKana(this.$));
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
		return new Jaco(this.$.toUpperCase());
	}

	/**
	 * 全角に変換
	 *
	 * @version 0.4.0
	 * @since 0.4.0
	 */
	public toWide (): Jaco {
		return new Jaco(toWide(this.$));
	}

	/**
	 * 英数字を全角に変換
	 *
	 * @version 2.0.0
	 * @since 1.3.0
	 */
	public toWideAlphanumeric (): Jaco {
		return new Jaco(toWideAlphanumeric(this.$));
	}

	/**
	 * カタカナと日本語で使われる記号を全角に変換
	 *
	 * @version 0.4.0
	 * @since 0.4.0
	 */
	public toWideJapanese (): Jaco {
		return new Jaco(toWideJapanese(this.$));
	}

	/**
	 * 全角カタカナに変換する
	 *
	 * @version 0.2.0
	 * @since 0.1.0
	 */
	public toWideKatakana (): Jaco {
		return new Jaco(toWideKatakana(this.$));
	}

	/**
	 * 記号を全角に変換する
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 */
	public toWideSign (): Jaco {
		return new Jaco(toWideSign(this.$));
	}

	/**
	 * 日本語で使われる記号を全角に変換
	 *
	 * @version 2.0.0
	 * @since 0.4.0
	 */
	public toWideSymbolForJapanese (): Jaco {
		return new Jaco(toWideSymbolForJapanese(this.$));
	}

	/**
	 * 先頭と末尾の空白を取り除く
	 *
	 * @version 2.0.0
	 * @since 0.2.0
	 */
	public trim (): Jaco {
		return new Jaco(this.$.trim());
	}

	/**
	 * 先頭の空白を取り除く
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 */
	public trimLeft (): Jaco {
		return new Jaco(remove(this.$, /^\s+/));
	}

	/**
	 * 末尾の空白を取り除く
	 *
	 * @version 2.0.0
	 * @since 2.0.0
	 */
	public trimRight (): Jaco {
		return new Jaco(remove(this.$, /\s+$/));
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
				const item: string | undefined = arrayize(this.$)[count];
				const result: IteratorResult<Jaco> = {
					value: item != null ? new Jaco(item) : undefined,
					done: this.length <= count,
				};
				return result;
			},
		};
		return iterator;
	}

}
