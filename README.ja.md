![jaco](http://jaco-project.github.io/docs/jaco.png)
====

Japanese Character Optimizer.

[![NPM version](https://badge.fury.io/js/jaco.svg)](http://badge.fury.io/js/jaco)
[![Bower version](https://badge.fury.io/bo/jaco.svg)](http://badge.fury.io/bo/jaco)
[![Build Status](https://travis-ci.org/jaco-project/jaco-js.svg)](https://travis-ci.org/jaco-project/jaco-js)
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

### bowerからのインストール

```sh
$ bower install jaco
```

### NPMからのインストール

```sh
$ npm install jaco
```

### CIとしてインストール

```sh
$ npm install -g jaco
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
Usage: jaco [options] <string> [fileOption] <path>

Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -f, --file <path>          convert in file
    -o, --output <path>        output to file
    -K, --katakanize [string]  katakanize method
    -H, --hiraganize [string]  hiraganize method
```

## メソッド

### モジュールの静的関数

```javascript
jaco.katakanize('ニホンゴのモジなど');
```

関数名|戻り値の型
---|---
[katakanize](http://yusukehirao.github.io/jaco/docs/modules/jaco.html#katakanize)|`string`
[hiraganize](http://yusukehirao.github.io/jaco/docs/modules/jaco.html#hiraganize)|`string`
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
[toString](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tostring)|`string`|✗|✗
[valueOf](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#valueof)|`string`|✗|✗
[concat](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#concat)|`Jaco`|◯|◯
[slice](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#slice)|`Jaco`|◯|◯
[substr](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#substr)|`Jaco`|◯|◯
[substring](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#substring)|`Jaco`|◯|◯
[append](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#append)|`Jaco`|◯|◯
[prepend](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#prepend)|`Jaco`|◯|◯
[replace](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#replace)|`Jaco`|◯|◯
[trim](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#trim)|`Jaco`|◯|◯
[remove](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#remove)|`Jaco`|◯|◯
[test](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#test)|`Jaco`|◯|◯
[is](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#is)|`boolean`|✗|✗
[isEmpty](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#isempty)|`boolean`|✗|✗
[isOnly](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#isonly)|`boolean`|✗|✗
[isOnlyHiragana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#isonlyhiragana)|`boolean`|✗|✗
[isOnlyKatakana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#isonlykatakana)|`boolean`|✗|✗
[isNumeric](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#isnumeric)|`boolean`|✗|✗
[toNumeric](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tonumeric)|`Jaco`|◯|◯
[combinate](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#combinate)|`Jaco`|◯|◯
[toLowerCase](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tolowercase)|`Jaco`|◯|◯
[toUpperCase](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#touppercase)|`Jaco`|◯|◯
[toHiragana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tohiragana)|`Jaco`|◯|◯
[toKatakana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tokatakana)|`Jaco`|◯|◯
[toNarrowKatakana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tonarrowkatakana)|`Jaco`|◯|◯
[toWideKatakana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#towidekatakana)|`Jaco`|◯|◯
[toNumber](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tonumber)|`number`|✗|✗
[size](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#size)|`number`|✗|✗
[byteSize](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#bytesize)|`number`|✗|✗
[clone](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#clone)|`Jaco`|◯|◯
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

## ドキュメント

[http://jaco-project.github.io/docs/](http://jaco-project.github.io/docs/)