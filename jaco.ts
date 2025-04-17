import addSemivoicedMarks from './fn/addSemivoicedMarks.js';
import addVoicedMarks from './fn/addVoicedMarks.js';
import byteSize from './fn/byteSize.js';
import combinateSoundMarks from './fn/combinateSoundMarks.js';
import convertIterationMarks from './fn/convertIterationMarks.js';
import convertProlongedSoundMarks from './fn/convertProlongedSoundMarks.js';
import hasSmallLetter from './fn/hasSmallLetter.js';
import hasSurrogatePair from './fn/hasSurrogatePair.js';
import hasUnpairedSurrogate from './fn/hasUnpairedSurrogate.js';
import isNumeric from './fn/isNumeric.js';
import isOnly from './fn/isOnly.js';
import isOnlyHiragana from './fn/isOnlyHiragana.js';
import isOnlyKatakana from './fn/isOnlyKatakana.js';
import remove from './fn/remove.js';
import removeUnpairedSurrogate from './fn/removeUnpairedSurrogate.js';
import removeVoicedMarks from './fn/removeVoicedMarks.js';
import replaceFromMap from './fn/replaceFromMap.js';
import toBasicLetter from './fn/toBasicLetter.js';
import toHiragana from './fn/toHiragana.js';
import toKatakana from './fn/toKatakana.js';
import toNarrow from './fn/toNarrow.js';
import toNarrowAlphanumeric from './fn/toNarrowAlphanumeric.js';
import toNarrowJapanese from './fn/toNarrowJapanese.js';
import toNarrowKatakana from './fn/toNarrowKatakana.js';
import toNarrowSign from './fn/toNarrowSign.js';
import toNarrowSymbolForJapanese from './fn/toNarrowSymbolForJapanese.js';
import toNumeric from './fn/toNumeric.js';
import toPhoeticKana from './fn/toPhoeticKana.js';
import toWide from './fn/toWide.js';
import toWideAlphanumeric from './fn/toWideAlphanumeric.js';
import toWideJapanese from './fn/toWideJapanese.js';
import toWideKatakana from './fn/toWideKatakana.js';
import toWideSign from './fn/toWideSign.js';
import toWideSymbolForJapanese from './fn/toWideSymbolForJapanese.js';

import arrayize from './util/arrayize.js';

/**
 * ## Jacoクラス
 *
 * 日本語やマルチバイト文字・ASCII文字を扱いやすくするためのラッパークラス
 *
 * 文字列クラスを継承してはいないがメソッドは同等のものが実装されている。
 * ただし基本的にほとんどのメソッドが破壊的メソッドかつチェインナブルである。
 *
 * @since 0.1.0
 */
export default class Jaco {
  /**
   * 文字列長
   *
   * - サロゲートペアを考慮する
   *
   * @since 2.0.0
   * @readonly
   */
  public get length(): number {
    return arrayize(this.$).length;
  }

  /**
   * 保持する文字列
   *
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
   * @since 0.1.0
   * @param str 対象の文字列
   */
  constructor(str: unknown) {
    this.$ = `${str}`;
  }

  /**
   * 半濁点を追加する
   *
   * @since 1.1.0
   */
  public addSemivoicedMarks(): Jaco {
    return new Jaco(addSemivoicedMarks(this.$));
  }

  /**
   * 濁点を追加する
   *
   * @since 1.1.0
   */
  public addVoicedMarks(): Jaco {
    return new Jaco(addVoicedMarks(this.$));
  }

  /**
   * 文字列のバイトサイズを返す
   *
   * @since 0.2.0
   */
  public byteSize(): number {
    return byteSize(this.$);
  }

  /**
   * コピーを生成する
   *
   * @since 0.2.0
   */
  public clone(): Jaco {
    return new Jaco(this.$);
  }

  /**
   * 濁点・半濁点とひらがな・かたかなを結合させる
   *
   * @since 2.0.0
   * @param convertOnly ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
   */
  public combinateSoundMarks(convertOnly: boolean = false): Jaco {
    return new Jaco(combinateSoundMarks(this.$, convertOnly));
  }

  /**
   * 繰り返し記号をかなに置き換える
   *
   * @since 1.1.0
   */
  public convertIterationMarks(): Jaco {
    return new Jaco(convertIterationMarks(this.$));
  }

  /**
   * 長音符をかなに置き換える
   *
   * @since 1.1.0
   */
  public convertProlongedSoundMarks(): Jaco {
    return new Jaco(convertProlongedSoundMarks(this.$));
  }

  /**
   * 小書き文字を含むかどうか
   *
   * @since 1.1.0
   * @return 小書き文字を含むかどうか
   */
  public hasSmallLetter(): boolean {
    return hasSmallLetter(this.$);
  }

  /**
   * サロゲートペア文字列を含んでいるかどうか
   *
   * @since 2.0.0
   * @return 結果の真偽
   */
  public hasSurrogatePair(): boolean {
    return hasSurrogatePair(this.$);
  }

  /**
   * ペアになっていないサロゲートコードポイントを含んでいるかどうか
   *
   * @since 2.0.0
   * @return 結果の真偽
   */
  public hasUnpairedSurrogate(): boolean {
    return hasUnpairedSurrogate(this.$);
  }

  /**
   * 数字だけで構成されているかどうか
   *
   * @since 0.5.0
   * @param negative 負の数値も含めてチェックするかどうか
   * @param floatingPoint 小数としてチェックするかどうか
   * @return 結果の真偽
   */
  public isNumeric(
    negative: boolean = true,
    floatingPoint: boolean = true,
  ): boolean {
    return isNumeric(this.$, negative, floatingPoint);
  }

  /**
   * 該当の文字だけで構成されているかどうか
   *
   * @since 0.2.0
   * @param characters 文字セット
   * @return 結果の真偽
   */
  public isOnly(characters: { toString(): string }): boolean {
    return isOnly(this.$, characters);
  }

  /**
   * ひらがなだけで構成されているかどうか
   *
   * @since 0.2.0
   * @return 結果の真偽
   */
  public isOnlyHiragana(): boolean {
    return isOnlyHiragana(this.$);
  }

  /**
   * カタカナだけで構成されているかどうか
   *
   * @since 0.2.0
   * @return 結果の真偽
   */
  public isOnlyKatakana(): boolean {
    return isOnlyKatakana(this.$);
  }

  /**
   * 文字列を取り除く
   *
   * @since 0.2.0
   * @param pattern 取り除く文字列
   */
  public remove(pattern: RegExp | { toString(): string }): Jaco {
    return new Jaco(remove(this.$, pattern));
  }

  /**
   * ペアになっていないサロゲートコードポイントの削除
   *
   * @since 2.0.0
   */
  public removeUnpairedSurrogate(): Jaco {
    return new Jaco(removeUnpairedSurrogate(this.$));
  }

  /**
   * 濁点・半濁点を取り除く
   *
   * @since 1.1.0
   * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
   */
  public removeVoicedMarks(ignoreSingleMark: boolean = false): Jaco {
    return new Jaco(removeVoicedMarks(this.$, ignoreSingleMark));
  }

  /**
   * キーがパターン・値が置換文字列のハッシュマップによって置換する
   *
   * @since 0.1.0
   * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
   */
  public replaceFromMap(convMap: { [pattern: string]: string }): Jaco {
    return new Jaco(replaceFromMap(this.$, convMap));
  }

  /**
   * 小書き文字を基底文字に変換する
   *
   * @since 1.1.0
   */
  public toBasicLetter(): Jaco {
    return new Jaco(toBasicLetter(this.$));
  }

  /**
   * ひらがなに変換する
   *
   * 第一引数に true を渡した場合、濁点・半濁点は基本的に結合される
   * ヷヸヹヺは文字が存在しないため ひらがな + 結合文字でない濁点・半濁点 となる
   *
   * @since 0.1.0
   * @param isCombinate 濁点・半濁点を結合文字にするかどうか
   */
  public toHiragana(isCombinate: boolean = false): Jaco {
    return new Jaco(toHiragana(this.$, isCombinate));
  }

  /**
   * カタカナに変換する
   *
   * @since 0.1.0
   * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
   */
  public toKatakana(toWide: boolean = true): Jaco {
    return new Jaco(toKatakana(this.$, toWide));
  }

  /**
   * 半角に変換
   *
   * @since 0.4.0
   */
  public toNarrow(convertJapaneseChars: boolean = false): Jaco {
    return new Jaco(toNarrow(this.$, convertJapaneseChars));
  }

  /**
   * 英数字を半角に変換
   *
   * @since 1.3.0
   */
  public toNarrowAlphanumeric(): Jaco {
    return new Jaco(toNarrowAlphanumeric(this.$));
  }

  /**
   * カタカナと日本語で使われる記号を半角に変換
   *
   * @since 0.4.0
   */
  public toNarrowJapanese(): Jaco {
    return new Jaco(toNarrowJapanese(this.$));
  }

  /**
   * 半角カタカナに変換する
   *
   * @since 0.1.0
   * @param fromHiragana ひらがなも変換する
   */
  public toNarrowKatakana(fromHiragana: boolean = false): Jaco {
    return new Jaco(toNarrowKatakana(this.$, fromHiragana));
  }

  /**
   * 記号を半角に変換する
   *
   * @since 2.0.0
   */
  public toNarrowSign(): Jaco {
    return new Jaco(toNarrowSign(this.$));
  }

  /**
   * 日本語で使われる記号を半角に変換
   *
   * @since 0.4.0
   */
  public toNarrowSymbolForJapanese(): Jaco {
    return new Jaco(toNarrowSymbolForJapanese(this.$));
  }

  /**
   * 数値に変換する
   *
   * @since 0.2.0
   * @return 数値
   */
  public toNumber(): number {
    return parseFloat(this.$);
  }

  /**
   * 数字に変換する
   *
   * @since 0.5.0
   * @param negative 負の値を許可してマイナスをつけるかどうか
   * @param floatingPoint 小数を許可してドットをつけるかどうか
   */
  public toNumeric(
    negative: boolean = false,
    floatingPoint: boolean = false,
  ): Jaco {
    return new Jaco(toNumeric(this.$, negative, floatingPoint));
  }

  /**
   * よみの文字に変換する
   * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
   *
   * @since 1.1.0
   */
  public toPhoeticKana(): Jaco {
    return new Jaco(toPhoeticKana(this.$));
  }

  /**
   * 明示もしくは暗黙の文字列変換メソッド
   *
   * @since 0.1.0
   * @return インスタンス自身が保持する文字列
   */
  public toString(): string {
    return this.$;
  }

  /**
   * 全角に変換
   *
   * @since 0.4.0
   */
  public toWide(): Jaco {
    return new Jaco(toWide(this.$));
  }

  /**
   * 英数字を全角に変換
   *
   * @since 1.3.0
   */
  public toWideAlphanumeric(): Jaco {
    return new Jaco(toWideAlphanumeric(this.$));
  }

  /**
   * カタカナと日本語で使われる記号を全角に変換
   *
   * @since 0.4.0
   */
  public toWideJapanese(): Jaco {
    return new Jaco(toWideJapanese(this.$));
  }

  /**
   * 全角カタカナに変換する
   *
   * @since 0.1.0
   */
  public toWideKatakana(): Jaco {
    return new Jaco(toWideKatakana(this.$));
  }

  /**
   * 記号を全角に変換する
   *
   * @since 2.0.0
   */
  public toWideSign(): Jaco {
    return new Jaco(toWideSign(this.$));
  }

  /**
   * 日本語で使われる記号を全角に変換
   *
   * @since 0.4.0
   */
  public toWideSymbolForJapanese(): Jaco {
    return new Jaco(toWideSymbolForJapanese(this.$));
  }

  /**
   * 暗黙の値変換に呼び出されるメソッド
   *
   * @since 0.1.0
   * @return インスタンス自身が保持する文字列
   */
  public valueOf(): string {
    return this.toString();
  }

  /**
   * イテレータ
   *
   * 要素の型は `string` ではなく `Jaco`
   *
   * @since 2.0.0
   * @return イテレータブル `<Jaco>`
   */
  public [Symbol.iterator](): Iterator<Jaco> {
    let counter = 0;
    const iterator: Iterator<Jaco> = {
      next: () => {
        if (counter < this.length) {
          const item = arrayize(this.$)[counter++];
          return {
            value: new Jaco(item),
            done: false,
          };
        } else {
          return {
            value: null,
            done: true,
          };
        }
      },
    };
    return iterator;
  }
}
