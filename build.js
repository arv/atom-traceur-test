'use strict';

let glob = require('glob');
let path = require('path');
let NodeCompiler = require('./traceur-compiler/src/node/NodeCompiler.js').NodeCompiler;

let options = {
	modules: 'commonjs',
	// blockBindings: 'parse',
	// templateLiterals: 'parse',
	// forOf: 'parse',
	// generators: 'parse'
};

let compiler = new NodeCompiler(options);

let inputDir = path.normalize(path.join('.', 'traceur-compiler', 'src'));
let outputDir = path.normalize(path.join('.', 'build'));

glob(`${inputDir}/**/*.js`, {}, function (err, files) {
	if (err) throw err;

	for (let inputFilePath of files) {
		if (/\-template.js$/.test(inputFilePath)) continue;

		var outputFilePath = inputFilePath.replace(inputDir, outputDir);
		let compiler = new NodeCompiler(options);
		compiler.compileSingleFile(inputFilePath, outputFilePath, function(err) {
			throw new Error(`While reading ${inputFilePath}: ${err}`);
		});
	}
});
