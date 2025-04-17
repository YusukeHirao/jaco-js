# ![jaco](https://jaco-project.github.io/docs/jaco.png)

Japanese Character Optimizer. [[English](README.md) | [日本語](README.ja.md)]

[![NPM version](https://badge.fury.io/js/jaco.svg)](http://badge.fury.io/js/jaco)

## これは何

日本語の文字を最適化するモジュールです。

ひらがな・カタカナの相互変換や五十音順の自然ソート、半角・全角の相互変換ができます。

全てカタカナの文字列かどうかや、一部カタカナを含んでいるかなどの判定も可能なので、フォームのバリデーションなどに利用できます。

## 主な機能

- ひらがな・カタカナ判定
- ひらがな・カタカナ相互変換
- 半角・全角判定
- 半角・全角相互変換
- 五十音順の自然ソート
  - 平音・濁音、長音、繰り返し記号対応
- ビルトイン文字列オブジェクト API 互換

## インストール

### NPM からのインストール

```sh
$ yarn add jaco
```

## 使い方

```js
// 部分的に関数をインポートして使用する
import toKatakana from 'jaco/toKatakana';
import toHiragana from 'jaco/toHiragana';

toKatakana('ニホンゴのモジなど'); // => ニホンゴノモジナド
toHiragana('ニホンゴのモジなど'); // => にほんごのもじなど
```

```js
// すべての関数をインポートして使用する
import { toKatakana, toHiragana } from 'jaco';

toKatakana('ニホンゴのモジなど'); // => ニホンゴノモジナド
toHiragana('ニホンゴのモジなど'); // => にほんごのもじなど
```

## 関数

| 関数名                       | 引数                               | 内容                                                           |
| ---------------------------- | ---------------------------------- | -------------------------------------------------------------- |
| `addSemivoicedMarks`         | str                                | 半濁点を追加する                                               |
| `addVoicedMarks`             | str                                | 濁点を追加する                                                 |
| `byteSize`                   | str                                | 文字列のバイトサイズを返す                                     |
| `combinateSoundMarks`        | str [, convertOnly]                | 濁点・半濁点とひらがな・かたかなを結合させる                   |
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
| `toPhoeticKana`              | str                                | よみの文字に変換する                                           |
| `toWide`                     | str                                | 全角に変換                                                     |
| `toWideAlphanumeric`         | str                                | 英数字を全角に変換                                             |
| `toWideJapanese`             | str                                | カタカナと日本語で使われる記号を全角に変換                     |
| `toWideKatakana`             | str                                | 全角カタカナに変換する                                         |
| `toWideSign`                 | str                                | 記号を全角に変換                                               |
| `toWideSymbolForJapanese`    | str                                | 日本語で使われる記号を全角に変換                               |
