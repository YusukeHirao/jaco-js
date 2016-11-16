import * as commander from 'commander';
import * as fs from 'fs';

import hiraganize from './fn/hiraganize';
import katakanize from './fn/katakanize';

const VERSION = '2.0.0';

function extruct (path: string): string {
	let str: string = path;
	if (fs.existsSync(path)) {
		str = fs.readFileSync(path, 'utf-8');
	}
	return str;
}

commander
.version(VERSION)
.usage('[options] <path or string>')
.option('-K, --katakanize <path or string>', 'convert to Katakana', path => console.log(katakanize(extruct(path))))
.option('-H, --hiraganize <path or string>', 'convert to Hiragana', path => console.log(hiraganize(extruct(path))))
.parse(process.argv);

if (process.argv.length <= 2) {
	// No arg
	console.log(commander.help());
	process.exit();
}
