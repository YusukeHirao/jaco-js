jaco
====

Japanese character converter.

[![NPM version](https://badge.fury.io/js/jaco.svg)](http://badge.fury.io/js/jaco)
[![Build Status](https://travis-ci.org/YusukeHirao/jaco.svg)](https://travis-ci.org/YusukeHirao/jaco)
[![Dependency Status](https://david-dm.org/YusukeHirao/jaco.svg)](https://david-dm.org/YusukeHirao/jaco)
[![devDependency Status](https://david-dm.org/YusukeHirao/jaco/dev-status.svg)](https://david-dm.org/YusukeHirao/jaco#info=devDependencies)

## install

### for browser

```sh
$ bower install jaco
```

### for NodeJS

```sh
$ npm install jaco
```

### CLI

```sh
$ npm install -g jaco
```

## Usage

### for browser

```html
<script src="jaco.min.js"></script>
<script>
jaco.katakanize('ニホンゴのモジなど'); // => ニホンゴノモジ
jaco.hiraganize('ニホンゴのモジなど'); // => にほんごのもじ

var jStr01 = new jaco.Jaco('ニホンゴのモジなど');
jStr01.toKatakana(); // => ニホンゴノモジ
</script>
```

### for NodeJS

```javascript
var jaco = require('jaco');

jaco.katakanize('ニホンゴのモジなど'); // => ニホンゴノモジ
jaco.hiraganize('ニホンゴのモジなど'); // => にほんごのもじ

var jStr01 = new jaco.Jaco('ニホンゴのモジなど');
jStr01.toKatakana(); // => ニホンゴノモジ
```

### CLI

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

## Methods

### Static Functions

```javascript
jaco.katakanize('ニホンゴのモジなど');
```

name|return type
---|---
[katakanize]()|`string`
[hiraganize]()|`string`

### Instance methods of Class Jaco

```javascript
var instance = new jaco.Jaco('ニホンゴのモジなど');
instance.toString();
```

name|return type|bang|chainable
---|---|---|---
[toString](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tostring)|`string`|✗|✗
[valueOf](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#valueof)|`string`|✗|✗
[concat](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#concat)|`Jaco`|✓|✓
[slice](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#slice)|`Jaco`|✓|✓
[substr](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#substr)|`Jaco`|✓|✓
[substring](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#substring)|`Jaco`|✓|✓
[append](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#append)|`Jaco`|✓|✓
[prepend](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#prepend)|`Jaco`|✓|✓
[replace](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#replace)|`Jaco`|✓|✓
[trim](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#trim)|`Jaco`|✓|✓
[remove](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#remove)|`Jaco`|✓|✓
[test](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#test)|`Jaco`|✓|✓
[is](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#is)|`boolean`|✗|✗
[isEmpty](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#isempty)|`boolean`|✗|✗
[isOnly](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#isonly)|`boolean`|✗|✗
[isOnlyHiragana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#isonlyhiragana)|`boolean`|✗|✗
[isOnlyKatakana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#isonlykatakana)|`boolean`|✗|✗
[isNumeric](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#isnumeric)|`boolean`|✗|✗
[toNumeric](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tonumeric)|`Jaco`|✓|✓
[combinate](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#combinate)|`Jaco`|✓|✓
[toLowerCase](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tolowercase)|`Jaco`|✓|✓
[toUpperCase](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#touppercase)|`Jaco`|✓|✓
[toHiragana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tohiragana)|`Jaco`|✓|✓
[toKatakana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tokatakana)|`Jaco`|✓|✓
[toNarrowKatakana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tonarrowkatakana)|`Jaco`|✓|✓
[toWideKatakana](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#towidekatakana)|`Jaco`|✓|✓
[toNumber](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#tonumber)|`number`|✗|✗
[size](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#size)|`number`|✗|✗
[byteSize](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#bytesize)|`number`|✗|✗
[clone](http://yusukehirao.github.io/jaco/docs/classes/jaco.jaco.html#clone)|`Jaco`|✓|✓

## Documents

http://yusukehirao.github.io/jaco/