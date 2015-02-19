// require
var fs = require('fs');
var program = require('commander');
var colors = require('colors');
var jaco = require('../lib/jaco.js');

console.time('jaco');

// definition
var version = '1.1.0';
var methods = {
	'K': 'katakanize',
	'H': 'hiraganize'
};


// program
program
	.version(version)
	.usage('[options] <string> [fileOption] <path>')
	.option('-f, --file <path>', 'convert in file', function(path) {
		if (fs.existsSync(path)) {
			return {
				path: path,
				str: fs.readFileSync(path, 'utf-8')
			};
		} else {
			return {
				path: path,
				str: null
			};
		}
	})
	.option('-o, --output <path>', 'output to file', function(path) {
		return path;
	});
for (var shortName in methods) {
	program.option('-' + shortName + ', --' + methods[shortName] + ' [string]', methods[shortName] + ' method');
}
program.parse(process.argv);

if (program.rawArgs.length <= 2) {
	program.help();
	return;
}

// console.log(program.rawArgs);


// result
var result = [];
if (program.file && program.file.str) {
	if (program.output) {
		var currentMethod;
		program.rawArgs.forEach(function(commandOption) {
			var shortName = commandOption.substr(1);
			if (!currentMethod && /-[a-zA-Z]/.test(commandOption) && methods[shortName]) {
				currentMethod = methods[shortName];
			}
		});
		if (currentMethod) {
			try {
				fs.writeFileSync(program.output, jaco[currentMethod](program.file.str));
			} catch (error) {
				console.warn(colors.red('cannot create/write to file %j'), program.output);
			} finally {
				console.timeEnd('jaco');
			}
		} else {
			console.warn(colors.red('jaco method option is not defined'));
		}
		return;
	} else {
		for (var shortName in methods) {
			if (methods[shortName] in program) {
				result.push(program.file.path.green + (' - converting "' + methods[shortName] + '" method').yellow);
				result.push(jaco[methods[shortName]](program.file.str));
				result.push('[EOF]'.cyan);
				result.push('');
			}
		}
	}
} else if (program.file && program.file.str === null) {
	console.warn(colors.red('no such file or directory %j'), program.file.path);
} else if (program.output) {
	console.warn(colors.red('error: option `-f, --file <path>\' argument missing'));
} else {
	program.rawArgs.forEach(function(commandOption) {
		var shortName = commandOption.substr(1);
		if (/-[a-zA-Z]/.test(commandOption) && methods[shortName]) {
			var _r = jaco[methods[shortName]](program[methods[shortName]]);
			if (!/true|false|null|undefined/.test(_r)) {
				result.push(_r);
			}
		}
	});
}


// standard out
if (result.length) {
	console.log(result.join("\n"));
}

console.timeEnd('jaco');
