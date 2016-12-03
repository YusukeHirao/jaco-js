"use strict";
const naturalKanaOrder_1 = require("./fn/naturalKanaOrder");
const naturalKanaSort_1 = require("./fn/naturalKanaSort");
const jaco_1 = require("./jaco");
// tslint:disable:no-namespace no-mergeable-namespace
var jaco;
(function (jaco) {
    'use strict';
    jaco.naturalKanaOrder = naturalKanaOrder_1.default;
    jaco.naturalKanaSort = naturalKanaSort_1.default;
    jaco.Jaco = jaco_1.default;
})(jaco || (jaco = {}));
window['jaco'] = jaco; // tslint:disable-line:no-string-literal
