![jaco](http://jaco-project.github.io/docs/jaco.png)
====

Japanese Character Optimizer. [[English](README.md) | [日本語](README.ja.md)]

[![NPM version](https://badge.fury.io/js/jaco.svg)](http://badge.fury.io/js/jaco)
[![Coverage Status](https://coveralls.io/repos/github/jaco-project/jaco-js/badge.svg?branch=master)](https://coveralls.io/github/jaco-project/jaco-js?branch=master)
[![Build Status](https://travis-ci.org/jaco-project/jaco-js.svg?branch=master)](https://travis-ci.org/jaco-project/jaco-js)
[![Dependency Status](https://david-dm.org/jaco-project/jaco-js.svg)](https://david-dm.org/jaco-project/jaco-js)
[![devDependency Status](https://david-dm.org/jaco-project/jaco-js/dev-status.svg)](https://david-dm.org/jaco-project/jaco-js#info=devDependencies)

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
- ビルトイン文字列オブジェクトAPI互換

## インストール

### NPMからのインストール

```sh
$ yarn add jaco
```

### CIとしてインストール

```sh
$ npm i -g jaco
```

## 使い方

### ブラウザ

```html
<script src="jaco.min.js"></script>
<script>
jaco.katakanize('ニホンゴのモジなど'); // => ニホンゴノモジナド
jaco.hiraganize('ニホンゴのモジなど'); // => にほんごのもじなど

var jStr01 = new jaco.Jaco('ニホンゴのモジなど');
jStr01.toKatakana(); // => ニホンゴノモジナド
</script>
```

### Node.js

```javascript
var jaco = require('jaco');

jaco.katakanize('ニホンゴのモジなど'); // => ニホンゴノモジナド
jaco.hiraganize('ニホンゴのモジなど'); // => にほんごのもじなど

var jStr01 = new jaco.Jaco('ニホンゴのモジなど');
jStr01.toKatakana(); // => ニホンゴノモジナド
```

### コマンドライン

```
Usage: jaco [options] <path or string>


Options:

  -V, --version                      output the version number
  -K, --katakanize <path or string>  convert to Katakana
  -H, --hiraganize <path or string>  convert to Hiragana
  -h, --help                         output usage information
```

## メソッド

### モジュールの静的関数

```javascript
jaco.katakanize('ニホンゴのモジなど');
```

関数名|戻り値の型
---|---
katakanize|`string`
hiraganize|`string`
hiraganaOnly|`boolean`
katakanaOnly|`boolean`
naturalKanaSort|`Array`

### Jacoクラスのインスタンスメソッド

```javascript
var instance = new jaco.Jaco('ニホンゴのモジなど');
instance.toString();
```

メソッド名|戻り値の型|破壊的メソッド|チェーンナブル
---|---|---|---
toString|`string`|✗|✗
valueOf|`string`|✗|✗
concat|`Jaco`|◯|◯
slice|`Jaco`|◯|◯
substr|`Jaco`|◯|◯
substring|`Jaco`|◯|◯
append|`Jaco`|◯|◯
prepend|`Jaco`|◯|◯
replace|`Jaco`|◯|◯
trim|`Jaco`|◯|◯
remove|`Jaco`|◯|◯
test|`Jaco`|◯|◯
is|`boolean`|✗|✗
isEmpty|`boolean`|✗|✗
isOnly|`boolean`|✗|✗
isOnlyHiragana|`boolean`|✗|✗
isOnlyKatakana|`boolean`|✗|✗
isNumeric|`boolean`|✗|✗
toNumeric|`Jaco`|◯|◯
combinate|`Jaco`|◯|◯
toLowerCase|`Jaco`|◯|◯
toUpperCase|`Jaco`|◯|◯
toHiragana|`Jaco`|◯|◯
toKatakana|`Jaco`|◯|◯
toNarrowKatakana|`Jaco`|◯|◯
toWideKatakana|`Jaco`|◯|◯
toNumber|`number`|✗|✗
size|`number`|✗|✗
byteSize|`number`|✗|✗
clone|`Jaco`|◯|◯
toNarrowJapneseSymbol|`Jaco`|◯|◯
toWideJapnese|`Jaco`|◯|◯
toNarrow|`Jaco`|◯|◯
toWide|`Jaco`|◯|◯
addVoicedMarks|`Jaco`|◯|◯
addSemivoicedMarks|`Jaco`|◯|◯
removeVoicedMarks|`Jaco`|◯|◯
convertProlongedSoundMarks|`Jaco`|◯|◯
convertIterationMarks|`Jaco`|◯|◯
toBasicLetter|`Jaco`|◯|◯
hasSmallLetter|`boolean`|✗|✗
toPhoeticKana|`Jaco`|◯|◯
replaceMap|`Jaco`|◯|◯
