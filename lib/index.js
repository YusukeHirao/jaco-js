"use strict";
const hiraganaOnly_1 = require("./fn/hiraganaOnly");
const hiraganize_1 = require("./fn/hiraganize");
const katakanaOnly_1 = require("./fn/katakanaOnly");
const katakanize_1 = require("./fn/katakanize");
const naturalKanaOrder_1 = require("./fn/naturalKanaOrder");
const naturalKanaSort_1 = require("./fn/naturalKanaSort");
const jaco_1 = require("./jaco");
// tslint:disable:no-namespace no-mergeable-namespace
var jaco;
(function (jaco) {
    'use strict';
    jaco.hiraganaOnly = hiraganaOnly_1.default;
    jaco.hiraganize = hiraganize_1.default;
    jaco.katakanaOnly = katakanaOnly_1.default;
    jaco.katakanize = katakanize_1.default;
    jaco.naturalKanaOrder = naturalKanaOrder_1.default;
    jaco.naturalKanaSort = naturalKanaSort_1.default;
    jaco.Jaco = jaco_1.default;
})(jaco || (jaco = {}));
window['jaco'] = jaco; // tslint:disable-line:no-string-literal
