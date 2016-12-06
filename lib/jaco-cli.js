"use strict";
const commander = require("commander");
const fs = require("fs");
const toHiragana_1 = require("./fn/toHiragana");
const toKatakana_1 = require("./fn/toKatakana");
const VERSION = '2.0.0';
function extruct(path) {
    let str = path;
    if (fs.existsSync(path)) {
        str = fs.readFileSync(path, 'utf-8');
    }
    return str;
}
commander
    .version(VERSION)
    .usage('[options] <path or string>')
    .option('-K, --katakanize <path or string>', 'convert to Katakana', path => console.log(toKatakana_1.default(extruct(path))))
    .option('-H, --hiraganize <path or string>', 'convert to Hiragana', path => console.log(toHiragana_1.default(extruct(path))))
    .parse(process.argv);
if (process.argv.length <= 2) {
    // No arg
    console.log(commander.help());
    process.exit();
}
