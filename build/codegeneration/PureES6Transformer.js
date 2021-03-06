"use strict";
var $__AnnotationsTransformer_46_js__,
    $__MemberVariableTransformer_46_js__,
    $__InlineES6ModuleTransformer_46_js__,
    $__MultiTransformer_46_js__,
    $__TypeAssertionTransformer_46_js__,
    $__TypeTransformer_46_js__,
    $__ES6ClassTransformer_46_js__,
    $__UniqueIdentifierGenerator_46_js__,
    $___46__46__47_semantics_47_FreeVariableChecker_46_js__;
var AnnotationsTransformer = ($__AnnotationsTransformer_46_js__ = require("./AnnotationsTransformer.js"), $__AnnotationsTransformer_46_js__ && $__AnnotationsTransformer_46_js__.__esModule && $__AnnotationsTransformer_46_js__ || {default: $__AnnotationsTransformer_46_js__}).AnnotationsTransformer;
var MemberVariableTransformer = ($__MemberVariableTransformer_46_js__ = require("./MemberVariableTransformer.js"), $__MemberVariableTransformer_46_js__ && $__MemberVariableTransformer_46_js__.__esModule && $__MemberVariableTransformer_46_js__ || {default: $__MemberVariableTransformer_46_js__}).MemberVariableTransformer;
var InlineES6ModuleTransformer = ($__InlineES6ModuleTransformer_46_js__ = require("./InlineES6ModuleTransformer.js"), $__InlineES6ModuleTransformer_46_js__ && $__InlineES6ModuleTransformer_46_js__.__esModule && $__InlineES6ModuleTransformer_46_js__ || {default: $__InlineES6ModuleTransformer_46_js__}).InlineES6ModuleTransformer;
var MultiTransformer = ($__MultiTransformer_46_js__ = require("./MultiTransformer.js"), $__MultiTransformer_46_js__ && $__MultiTransformer_46_js__.__esModule && $__MultiTransformer_46_js__ || {default: $__MultiTransformer_46_js__}).MultiTransformer;
var TypeAssertionTransformer = ($__TypeAssertionTransformer_46_js__ = require("./TypeAssertionTransformer.js"), $__TypeAssertionTransformer_46_js__ && $__TypeAssertionTransformer_46_js__.__esModule && $__TypeAssertionTransformer_46_js__ || {default: $__TypeAssertionTransformer_46_js__}).TypeAssertionTransformer;
var TypeTransformer = ($__TypeTransformer_46_js__ = require("./TypeTransformer.js"), $__TypeTransformer_46_js__ && $__TypeTransformer_46_js__.__esModule && $__TypeTransformer_46_js__ || {default: $__TypeTransformer_46_js__}).TypeTransformer;
var ES6ClassTransformer = ($__ES6ClassTransformer_46_js__ = require("./ES6ClassTransformer.js"), $__ES6ClassTransformer_46_js__ && $__ES6ClassTransformer_46_js__.__esModule && $__ES6ClassTransformer_46_js__ || {default: $__ES6ClassTransformer_46_js__}).ES6ClassTransformer;
var UniqueIdentifierGenerator = ($__UniqueIdentifierGenerator_46_js__ = require("./UniqueIdentifierGenerator.js"), $__UniqueIdentifierGenerator_46_js__ && $__UniqueIdentifierGenerator_46_js__.__esModule && $__UniqueIdentifierGenerator_46_js__ || {default: $__UniqueIdentifierGenerator_46_js__}).UniqueIdentifierGenerator;
var validateFreeVariables = ($___46__46__47_semantics_47_FreeVariableChecker_46_js__ = require("../semantics/FreeVariableChecker.js"), $___46__46__47_semantics_47_FreeVariableChecker_46_js__ && $___46__46__47_semantics_47_FreeVariableChecker_46_js__.__esModule && $___46__46__47_semantics_47_FreeVariableChecker_46_js__ || {default: $___46__46__47_semantics_47_FreeVariableChecker_46_js__}).validate;
var PureES6Transformer = function($__super) {
  function PureES6Transformer(reporter, options, metadata) {
    var $__9;
    $traceurRuntime.superConstructor(PureES6Transformer).call(this, reporter, options.validate);
    var idGenerator = new UniqueIdentifierGenerator();
    var append = ($__9 = this, function(transformer) {
      $__9.append(function(tree) {
        return new transformer(idGenerator, reporter, options, metadata).transformAny(tree);
      });
    });
    if (options.freeVariableChecker) {
      this.append(function(tree) {
        validateFreeVariables(tree, reporter);
        return tree;
      });
    }
    if (options.typeAssertions) {
      if (options.memberVariables)
        append(MemberVariableTransformer);
      append(TypeAssertionTransformer);
    }
    if (options.memberVariables) {
      append(ES6ClassTransformer);
    }
    append(AnnotationsTransformer);
    append(TypeTransformer);
    if (options.modules === 'inline') {
      append(InlineES6ModuleTransformer);
    }
  }
  return ($traceurRuntime.createClass)(PureES6Transformer, {}, {}, $__super);
}(MultiTransformer);
Object.defineProperties(module.exports, {
  PureES6Transformer: {get: function() {
      return PureES6Transformer;
    }},
  __esModule: {value: true}
});
