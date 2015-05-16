"use strict";
var $___46__46__47_syntax_47_PredefinedName_46_js__,
    $__FindInFunctionScope_46_js__,
    $__ParseTreeTransformer_46_js__,
    $___46__46__47_util_47_StringSet_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $___46__46__47_syntax_47_TokenType_46_js__,
    $___46__46__47_semantics_47_VariableBinder_46_js__;
var $__0 = ($___46__46__47_syntax_47_PredefinedName_46_js__ = require("../syntax/PredefinedName.js"), $___46__46__47_syntax_47_PredefinedName_46_js__ && $___46__46__47_syntax_47_PredefinedName_46_js__.__esModule && $___46__46__47_syntax_47_PredefinedName_46_js__ || {default: $___46__46__47_syntax_47_PredefinedName_46_js__}),
    ARGUMENTS = $__0.ARGUMENTS,
    THIS = $__0.THIS;
var FindInFunctionScope = ($__FindInFunctionScope_46_js__ = require("./FindInFunctionScope.js"), $__FindInFunctionScope_46_js__ && $__FindInFunctionScope_46_js__.__esModule && $__FindInFunctionScope_46_js__ || {default: $__FindInFunctionScope_46_js__}).FindInFunctionScope;
var ParseTreeTransformer = ($__ParseTreeTransformer_46_js__ = require("./ParseTreeTransformer.js"), $__ParseTreeTransformer_46_js__ && $__ParseTreeTransformer_46_js__.__esModule && $__ParseTreeTransformer_46_js__ || {default: $__ParseTreeTransformer_46_js__}).ParseTreeTransformer;
var StringSet = ($___46__46__47_util_47_StringSet_46_js__ = require("../util/StringSet.js"), $___46__46__47_util_47_StringSet_46_js__ && $___46__46__47_util_47_StringSet_46_js__.__esModule && $___46__46__47_util_47_StringSet_46_js__ || {default: $___46__46__47_util_47_StringSet_46_js__}).StringSet;
var VARIABLE_DECLARATION_LIST = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}).VARIABLE_DECLARATION_LIST;
var VAR = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}).VAR;
var $__6 = ($___46__46__47_semantics_47_VariableBinder_46_js__ = require("../semantics/VariableBinder.js"), $___46__46__47_semantics_47_VariableBinder_46_js__ && $___46__46__47_semantics_47_VariableBinder_46_js__.__esModule && $___46__46__47_semantics_47_VariableBinder_46_js__ || {default: $___46__46__47_semantics_47_VariableBinder_46_js__}),
    variablesInBlock = $__6.variablesInBlock,
    variablesInFunction = $__6.variablesInFunction;
var FindNames = function($__super) {
  function FindNames(names) {
    $traceurRuntime.superConstructor(FindNames).call(this);
    this.names = names;
  }
  return ($traceurRuntime.createClass)(FindNames, {visitBindingIdentifier: function(tree) {
      this.names.add(tree.getStringValue());
    }}, {}, $__super);
}(FindInFunctionScope);
function getLexicalBindingNames(tree) {
  var names = new StringSet();
  if (tree !== null && tree.type === VARIABLE_DECLARATION_LIST && tree.declarationType !== VAR) {
    var visitor = new FindNames(names);
    for (var i = 0; i < tree.declarations.length; i++) {
      visitor.visitAny(tree.declarations[i].lvalue);
    }
  }
  return names;
}
var ScopeTransformer = function($__super) {
  function ScopeTransformer(varName) {
    $traceurRuntime.superConstructor(ScopeTransformer).call(this);
    this.varName_ = varName;
  }
  return ($traceurRuntime.createClass)(ScopeTransformer, {
    transformBlock: function(tree) {
      if (variablesInBlock(tree).has(this.varName_)) {
        return tree;
      }
      return $traceurRuntime.superGet(this, ScopeTransformer.prototype, "transformBlock").call(this, tree);
    },
    sameTreeIfNameInLoopInitializer_: function(tree) {
      var names = getLexicalBindingNames(tree.initializer);
      if (names.has(this.varName_)) {
        return tree;
      }
      return null;
    },
    transformForStatement: function(tree) {
      return this.sameTreeIfNameInLoopInitializer_(tree) || $traceurRuntime.superGet(this, ScopeTransformer.prototype, "transformForStatement").call(this, tree);
    },
    transformForInStatement: function(tree) {
      return this.sameTreeIfNameInLoopInitializer_(tree) || $traceurRuntime.superGet(this, ScopeTransformer.prototype, "transformForInStatement").call(this, tree);
    },
    transformForOfStatement: function(tree) {
      return this.sameTreeIfNameInLoopInitializer_(tree) || $traceurRuntime.superGet(this, ScopeTransformer.prototype, "transformForOfStatement").call(this, tree);
    },
    transformForOnStatement: function(tree) {
      return this.sameTreeIfNameInLoopInitializer_(tree) || $traceurRuntime.superGet(this, ScopeTransformer.prototype, "transformForOnStatement").call(this, tree);
    },
    transformThisExpression: function(tree) {
      if (this.varName_ !== THIS)
        return tree;
      return $traceurRuntime.superGet(this, ScopeTransformer.prototype, "transformThisExpression").call(this, tree);
    },
    transformFunctionDeclaration: function(tree) {
      if (this.getDoNotRecurse(tree))
        return tree;
      return $traceurRuntime.superGet(this, ScopeTransformer.prototype, "transformFunctionDeclaration").call(this, tree);
    },
    transformFunctionExpression: function(tree) {
      if (this.getDoNotRecurse(tree))
        return tree;
      return $traceurRuntime.superGet(this, ScopeTransformer.prototype, "transformFunctionExpression").call(this, tree);
    },
    transformPropertyMethodAssignment: function(tree) {
      if (this.getDoNotRecurse(tree))
        return tree;
      return $traceurRuntime.superGet(this, ScopeTransformer.prototype, "transformPropertyMethodAssignment").call(this, tree);
    },
    getDoNotRecurse: function(tree) {
      return this.varName_ === ARGUMENTS || this.varName_ === THIS || variablesInFunction(tree).has(this.varName_);
    },
    transformCatch: function(tree) {
      if (!tree.binding.isPattern() && this.varName_ === tree.binding.identifierToken.value) {
        return tree;
      }
      return $traceurRuntime.superGet(this, ScopeTransformer.prototype, "transformCatch").call(this, tree);
    }
  }, {}, $__super);
}(ParseTreeTransformer);
Object.defineProperties(module.exports, {
  ScopeTransformer: {get: function() {
      return ScopeTransformer;
    }},
  __esModule: {value: true}
});
