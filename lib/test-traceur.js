'use strict';

// TODO(arv): Make this part of the build so ES6 can be used.

let Range = require('atom').Range;
let Point = require('atom').Point;

require('../traceur-compiler/bin/traceur-runtime.js');

let SourceFile = require('../build/syntax/SourceFile.js').SourceFile;
let Parser = require('../build/syntax/Parser.js').Parser;
let ErrorReporter = require('../build/util/ErrorReporter.js').ErrorReporter;

let markers = [];

function AtomErrorReporter(editor, markers) {
	ErrorReporter.call(this);
	this.editor = editor;
	this.markers = markers;
}
AtomErrorReporter.__proto__ = ErrorReporter;
AtomErrorReporter.prototype = {
	__proto__: ErrorReporter.prototype,
	constructor: AtomErrorReporter,
	reportMessageInternal(location, message) {
		console.log(location.line, location.column, message);
		let start = new Point(location.line, location.column);
		let end =  new Point(location.line, location.column + 1);
		let range = new Range(start, end);
		let marker = this.editor.markBufferRange(range, {
			invalidate: 'touch',
			message
		});
		let decoration = this.editor.decorateMarker(
				marker, {type: 'highlight', class: 'test-highlight'});

		let lineRange = new Range(
				new Point(location.line, location.column),
				new Point(location.line, location.column));
		let lineMarker = this.editor.markBufferRange(lineRange, {
			invalidate: 'touch',
			message
		});
		let lineDecoration = this.editor.decorateMarker(
				lineMarker, {type: 'line-number', class: 'test-highlight'});

		this.markers.push(marker, lineMarker);
	},
};

function checkFile() {
	for (let marker of markers) {
		marker.destroy();
	}
	markers = [];

	let editor = atom.workspace.getActiveTextEditor();
	if (!editor) return;

	console.time('check')
	let file = new SourceFile(editor.getPath(), editor.getText());
	let reporter = new AtomErrorReporter(editor, markers);
	let parser = new Parser(file, reporter);
	parser.parseModule();
	console.timeEnd('check')
}

module.exports.checkFile = checkFile;

function f() {
	// yield = 42;
}
