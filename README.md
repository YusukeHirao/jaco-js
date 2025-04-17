# ![jaco](https://jaco-project.github.io/docs/jaco.png)

Japanese Character Optimizer. [[English](README.md) | [日本語](README.ja.md)]

[![NPM version](https://badge.fury.io/js/jaco.svg)](http://badge.fury.io/js/jaco)
[![Coverage Status](https://coveralls.io/repos/github/jaco-project/jaco-js/badge.svg?branch=master)](https://coveralls.io/github/jaco-project/jaco-js?branch=master)
[![Build Status](https://travis-ci.org/jaco-project/jaco-js.svg?branch=master)](https://travis-ci.org/jaco-project/jaco-js)
[![Dependency Status](https://david-dm.org/jaco-project/jaco-js.svg)](https://david-dm.org/jaco-project/jaco-js)
[![devDependency Status](https://david-dm.org/jaco-project/jaco-js/dev-status.svg)](https://david-dm.org/jaco-project/jaco-js#info=devDependencies)

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

### CLI

```sh
$ npm i -g jaco
```

## Usage

```js
// Partial functions
import toKatakana from 'jaco/fn/toKatakana';
import toHiragana from 'jaco/fn/toHiragana';

toKatakana('ニホンゴのモジなど'); // => ニホンゴノモジナド
toHiragana('ニホンゴのモジなど'); // => にほんごのもじなど
```

```js
// Construct instance
import Jaco from 'jaco';

new Jaco('ニホンゴのモジなど').toKatakana(); // => ニホンゴノモジナド
```

### CLI

```
Usage: jaco [options] <path or string>

Options:

  -V, --version                      output the version number
  -K, --katakanize <path or string>  convert to Katakana
  -H, --hiraganize <path or string>  convert to Hiragana
  -h, --help                         output usage information
```

## Functions

| Function                     | Args                               | Description                                                    |
| ---------------------------- | ---------------------------------- | -------------------------------------------------------------- |
| `addSemivoicedMarks`         | str                                | 半濁点を追加する                                               |
| `addVoicedMarks`             | str                                | 濁点を追加する                                                 |
| `byteSize`                   | str                                | 文字列のバイトサイズを返す                                     |
| `combinateSoundMarks`        | str [, convertOnly]                | 濁点・半濁点とひらがな・かたかなを結合させる                   |
| `convertIterationMarks`      | str                                | 繰り返し記号をかなに置き換える                                 |
| `convertProlongedSoundMarks` | str                                | 長音符をかなに置き換える                                       |
| `has`                        | str, characters                    | 該当の文字のいずれかを含んでいるかどうか                       |
| `hasSmallLetter`             | str                                | 小書き文字を含むかどうか                                       |
| `hasSurrogatePair`           | str                                | サロゲートペア文字列を含んでいるかどうか                       |
| `hasUnpairedSurrogate`       | str                                | ペアになっていないサロゲートコードポイントを含んでいるかどうか |
| `is`                         | str, target                        | 完全マッチ                                                     |
| `isEmpty`                    | str                                | 文字が空かどうか                                               |
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
| `test`                       | str, pattern                       | パターンとマッチするかどうか                                   |
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
| `toPhoeticKana`              | str                                | よみの文字に変換する                                           |
| `toWide`                     | str                                | 全角に変換                                                     |
| `toWideAlphanumeric`         | str                                | 英数字を全角に変換                                             |
| `toWideJapanese`             | str                                | カタカナと日本語で使われる記号を全角に変換                     |
| `toWideKatakana`             | str                                | 全角カタカナに変換する                                         |
| `toWideSign`                 | str                                | 記号を全角に変換                                               |
| `toWideSymbolForJapanese`    | str                                | 日本語で使われる記号を全角に変換                               |
