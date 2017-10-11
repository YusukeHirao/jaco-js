![jaco](http://jaco-project.github.io/docs/jaco.png)
====

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

### for browser

```html
<script src="jaco.min.js"></script>
<script>
jaco.katakanize('ニホンゴのモジなど'); // => ニホンゴノモジナド
jaco.hiraganize('ニホンゴのモジなど'); // => にほんごのもじなど

var jStr01 = new jaco.Jaco('ニホンゴのモジなど');
jStr01.toKatakana(); // => ニホンゴノモジナド
</script>
```

### for NodeJS

```javascript
var jaco = require('jaco');

jaco.katakanize('ニホンゴのモジなど'); // => ニホンゴノモジナド
jaco.hiraganize('ニホンゴのモジなど'); // => にほんごのもじなど

var jStr01 = new jaco.Jaco('ニホンゴのモジなど');
jStr01.toKatakana(); // => ニホンゴノモジナド
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

## Methods

### Static Functions

```javascript
jaco.katakanize('ニホンゴのモジなど');
```

name|return type
---|---
katakanize|`string`
hiraganize|`string`
hiraganaOnly|`boolean`
katakanaOnly|`boolean`
naturalKanaSort|`Array`

### Instance methods of Class Jaco

```javascript
var instance = new jaco.Jaco('ニホンゴのモジなど');
instance.toString();
```

name|return type|bang|chainable
---|---|---|---
toString|`string`|✗|✗
valueOf|`string`|✗|✗
concat|`Jaco`|✓|✓
slice|`Jaco`|✓|✓
substr|`Jaco`|✓|✓
substring|`Jaco`|✓|✓
append|`Jaco`|✓|✓
prepend|`Jaco`|✓|✓
replace|`Jaco`|✓|✓
trim|`Jaco`|✓|✓
remove|`Jaco`|✓|✓
test|`Jaco`|✓|✓
is|`boolean`|✗|✗
isEmpty|`boolean`|✗|✗
isOnly|`boolean`|✗|✗
isOnlyHiragana|`boolean`|✗|✗
isOnlyKatakana|`boolean`|✗|✗
isNumeric|`boolean`|✗|✗
toNumeric|`Jaco`|✓|✓
combinate|`Jaco`|✓|✓
toLowerCase|`Jaco`|✓|✓
toUpperCase|`Jaco`|✓|✓
toHiragana|`Jaco`|✓|✓
toKatakana|`Jaco`|✓|✓
toNarrowKatakana|`Jaco`|✓|✓
toWideKatakana|`Jaco`|✓|✓
toNumber|`number`|✗|✗
size|`number`|✗|✗
byteSize|`number`|✗|✗
clone|`Jaco`|✓|✓
toNarrowJapneseSymbol|`Jaco`|✓|✓
toWideJapnese|`Jaco`|✓|✓
toNarrow|`Jaco`|✓|✓
toWide|`Jaco`|✓|✓
addVoicedMarks|`Jaco`|✓|✓
addSemivoicedMarks|`Jaco`|✓|✓
removeVoicedMarks|`Jaco`|✓|✓
convertProlongedSoundMarks|`Jaco`|✓|✓
convertIterationMarks|`Jaco`|✓|✓
toBasicLetter|`Jaco`|✓|✓
hasSmallLetter|`boolean`|✗|✗
toPhoeticKana|`Jaco`|✓|✓
replaceMap|`Jaco`|✓|✓
