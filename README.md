jaco
====

Japanese string and charactor converter.

[![Build Status](https://travis-ci.org/YusukeHirao/jaco.svg?branch=master)](https://travis-ci.org/YusukeHirao/jaco)
[![Code Climate](https://codeclimate.com/github/YusukeHirao/jaco.png)](https://codeclimate.com/github/YusukeHirao/jaco)

## install

```sh
$ npm install jaco
```

## Usage

```javascript
var jaco = require('jaco');

jaco.hiraganize('カタカナ'); // => かたかな
jaco.katakanize('かたかな'); // => カタカナ
```
