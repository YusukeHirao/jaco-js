"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var commander = require("commander");
var fs = require("fs");
var toHiragana_1 = require("./fn/toHiragana");
var toKatakana_1 = require("./fn/toKatakana");
var VERSION = '2.0.0';
function extruct(path) {
    var str = path;
    if (fs.existsSync(path)) {
        str = fs.readFileSync(path, 'utf-8');
    }
    return str;
}
commander.version(VERSION).usage('[options] <path or string>').option('-K, --katakanize <path or string>', 'convert to Katakana', function (path) {
    return console.log(toKatakana_1.default(extruct(path)));
}).option('-H, --hiraganize <path or string>', 'convert to Hiragana', function (path) {
    return console.log(toHiragana_1.default(extruct(path)));
}).parse(process.argv);
if (process.argv.length <= 2) {
    // No arg
    console.log(commander.help());
    process.exit();
}