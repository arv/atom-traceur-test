"use strict";
var $__FindVisitor_46_js__;
var FindVisitor = ($__FindVisitor_46_js__ = require("./FindVisitor.js"), $__FindVisitor_46_js__ && $__FindVisitor_46_js__.__esModule && $__FindVisitor_46_js__ || {default: $__FindVisitor_46_js__}).FindVisitor;
var FindInFunctionScope = function($__super) {
  function FindInFunctionScope() {
    $traceurRuntime.superConstructor(FindInFunctionScope).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(FindInFunctionScope, {
    visitFunctionDeclaration: function(tree) {},
    visitFunctionExpression: function(tree) {},
    visitSetAccessor: function(tree) {},
    visitGetAccessor: function(tree) {},
    visitPropertyMethodAssignment: function(tree) {}
  }, {}, $__super);
}(FindVisitor);
Object.defineProperties(module.exports, {
  FindInFunctionScope: {get: function() {
      return FindInFunctionScope;
    }},
  __esModule: {value: true}
});
