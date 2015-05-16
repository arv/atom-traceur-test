'use strict';

const CompositeDisposable = require('atom').CompositeDisposable;
const checkFile = require('./test-traceur.js').checkFile;

let Test = {
  testView: null,
  modalPanel: null,
  subscriptions: null,
  activate(state) {
    let self = this;
    this.subscriptions = new CompositeDisposable();
    return this.subscriptions.add(atom.commands.add('atom-workspace', {
      'test:toggle'() {
        self.toggle();
      }
    }));
  },
  deactivate() {
    this.subscriptions.dispose();
  },
  serialize() {},
  toggle() {
    console.log('Test was toggled!');
    checkFile();
  }
};

module.exports = Test;
