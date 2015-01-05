jaco
====

Japanese charactor converter.

[![NPM version](https://badge.fury.io/js/jaco.svg)](http://badge.fury.io/js/jaco)
[![Build Status](https://travis-ci.org/YusukeHirao/jaco.svg?branch=master)](https://travis-ci.org/YusukeHirao/jaco)
[![Code Climate](https://codeclimate.com/github/YusukeHirao/jaco.png)](https://codeclimate.com/github/YusukeHirao/jaco)
[![Dependency Status](https://david-dm.org/YusukeHirao/jaco.svg)](https://david-dm.org/YusukeHirao/jaco)
[![devDependency Status](https://david-dm.org/YusukeHirao/jaco/dev-status.svg)](https://david-dm.org/YusukeHirao/jaco#info=devDependencies)

## install

```sh
$ npm install jaco
```

## Usage

```javascript
var jaco = require('jaco');
var Jaco = jaco.Jaco;

jaco.hiraganize('カタカナ'); // => かたかな
jaco.katakanize('かたかな'); // => カタカナ

var jStr01 = new Jaco('かたかな');
jStr01.toKatakana(); // => カタカナ
```

## Methods

### Instance methods of Class Jaco

```javascript
var jaco = require('jaco');
var instance = new jaco.Jaco('ニホンゴのモジなど');
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

## Documents

comming soon