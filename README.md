# ![jaco](https://jaco-project.github.io/docs/jaco.png)

Japanese Character Optimizer. [[English](README.md) | [日本語](README.ja.md)]

[![NPM version](https://badge.fury.io/js/jaco.svg)](http://badge.fury.io/js/jaco)

## What is

This module optimize Japanese characters.

Convert to Katakana from Hiragana mutually, or sort list by natural phonetic order, or convert to halfwidth from fullwidth mutually.

## functions

- Convert Hiragana <-> Katakana
- Convert halfwidth <-> fullwidth
- Check Hiragana, Katakana, halfwidth, fullwidth, and so on.
- Sort by natural phonetic order.
  - Supported voiced marks, prolonged sound marks, iteration marks.
- Has compatible native string object API.

## installation

### for NodeJS

```sh
$ yarn add jaco
```

## Usage

```js
// Partial functions
import toKatakana from 'jaco/toKatakana';
import toHiragana from 'jaco/toHiragana';

toKatakana('ニホンゴのモジなど'); // => ニホンゴノモジナド
toHiragana('ニホンゴのモジなど'); // => にほんごのもじなど
```

```js
// Import all functions
import { toKatakana, toHiragana } from 'jaco';

toKatakana('ニホンゴのモジなど'); // => ニホンゴノモジナド
toHiragana('ニホンゴのモジなど'); // => にほんごのもじなど
```

## Functions

| Function                     | Args                               | Description                                                    |
| ---------------------------- | ---------------------------------- | -------------------------------------------------------------- |
| `addSemivoicedMarks`         | str                                | 半濁点を追加する                                               |
| `addVoicedMarks`             | str                                | 濁点を追加する                                                 |
| `byteSize`                   | str                                | 文字列のバイトサイズを返す                                     |
| `combineSoundMarks`          | str [, convertOnly]                | 濁点・半濁点とひらがな・かたかなを結合させる                   |
| `convertIterationMarks`      | str                                | 繰り返し記号をかなに置き換える                                 |
| `convertProlongedSoundMarks` | str                                | 長音符をかなに置き換える                                       |
| `hasSmallLetter`             | str                                | 小書き文字を含むかどうか                                       |
| `hasSurrogatePair`           | str                                | サロゲートペア文字列を含んでいるかどうか                       |
| `hasUnpairedSurrogate`       | str                                | ペアになっていないサロゲートコードポイントを含んでいるかどうか |
| `isNumeric`                  | str [, negative [, floatingPoint]] | 数字だけで構成されているかどうか                               |
| `isOnly`                     | str, characters                    | 該当の文字だけで構成されているかどうか                         |
| `isOnlyHiragana`             | str                                | ひらがなだけで構成されているかどうか                           |
| `isOnlyKatakana`             | str                                | カタカナだけで構成されているかどうか                           |
| `naturalKanaOrder`           | a, b                               | 配列の五十音順ソートをするためのソート関数                     |
| `naturalKanaSort`            | array                              | 配列の五十音順ソートをする                                     |
| `remove`                     | str, pattern                       | 文字列を取り除く                                               |
| `removeUnpairedSurrogate`    | str                                | ペアになっていないサロゲートコードポイントの削除               |
| `removeVoicedMarks`          | str [, ignoreSingleMark]           | 濁点・半濁点を取り除く                                         |
| `replaceFromMap`             | str, convMap                       | キーがパターン・値が置換文字列のハッシュマップによって置換する |
| `toBasicLetter`              | str                                | 小書き文字を基底文字に変換する                                 |
| `toHiragana`                 | str [, isCombinate]                | ひらがなに変換する                                             |
| `toKatakana`                 | str [, toWide]                     | カタカナに変換する                                             |
| `toNarrow`                   | str [, convertJapaneseChars]       | 半角に変換                                                     |
| `toNarrowAlphanumeric`       | str                                | 英数字を半角に変換                                             |
| `toNarrowJapanese`           | str                                | カタカナと日本語で使われる記号を半角に変換                     |
| `toNarrowKatakana`           | str [, fromHiragana]               | 半角カタカナに変換する                                         |
| `toNarrowSign`               | str                                | 記号を半角に変換                                               |
| `toNarrowSymbolForJapanese`  | str                                | 日本語で使われる記号を半角に変換                               |
| `toNumeric`                  | str [, negative [, floatingPoint]] | 数字に変換する                                                 |
| `toPhoneticKana`             | str                                | よみの文字に変換する                                           |
| `toWide`                     | str                                | 全角に変換                                                     |
| `toWideAlphanumeric`         | str                                | 英数字を全角に変換                                             |
| `toWideJapanese`             | str                                | カタカナと日本語で使われる記号を全角に変換                     |
| `toWideKatakana`             | str                                | 全角カタカナに変換する                                         |
| `toWideSign`                 | str                                | 記号を全角に変換                                               |
| `toWideSymbolForJapanese`    | str                                | 日本語で使われる記号を全角に変換                               |
