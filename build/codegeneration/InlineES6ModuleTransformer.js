"use strict";
var $___46__46__47_syntax_47_TokenType_46_js__,
    $__ModuleTransformer_46_js__,
    $__ParseTreeFactory_46_js__,
    $__globalThis_46_js__,
    $__scopeContainsThis_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__;
var CONST = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}).CONST;
var ModuleTransformer = ($__ModuleTransformer_46_js__ = require("./ModuleTransformer.js"), $__ModuleTransformer_46_js__ && $__ModuleTransformer_46_js__.__esModule && $__ModuleTransformer_46_js__ || {default: $__ModuleTransformer_46_js__}).ModuleTransformer;
var $__2 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createBindingIdentifier = $__2.createBindingIdentifier,
    createFunctionBody = $__2.createFunctionBody,
    createImmediatelyInvokedFunctionExpression = $__2.createImmediatelyInvokedFunctionExpression,
    createScopedExpression = $__2.createScopedExpression,
    createVariableStatement = $__2.createVariableStatement,
    createUseStrictDirective = $__2.createUseStrictDirective,
    createExpressionStatement = $__2.createExpressionStatement;
var globalThis = ($__globalThis_46_js__ = require("./globalThis.js"), $__globalThis_46_js__ && $__globalThis_46_js__.__esModule && $__globalThis_46_js__ || {default: $__globalThis_46_js__}).default;
var scopeContainsThis = ($__scopeContainsThis_46_js__ = require("./scopeContainsThis.js"), $__scopeContainsThis_46_js__ && $__scopeContainsThis_46_js__.__esModule && $__scopeContainsThis_46_js__ || {default: $__scopeContainsThis_46_js__}).default;
var IMPORT_SPECIFIER_SET = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}).IMPORT_SPECIFIER_SET;
var AnonBlock = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}).AnonBlock;
var anonInlineModules = 0;
var InlineES6ModuleTransformer = function($__super) {
  function InlineES6ModuleTransformer(identifierGenerator, reporter, options, metadata) {
    $traceurRuntime.superConstructor(InlineES6ModuleTransformer).call(this, identifierGenerator, reporter, options);
    this.metadata_ = metadata;
  }
  return ($traceurRuntime.createClass)(InlineES6ModuleTransformer, {
    moduleProlog: function() {
      return [createUseStrictDirective()];
    },
    wrapModule: function(statements) {
      var seed = this.moduleName || 'anon_' + ++anonInlineModules;
      var idName = this.getTempVarNameForModuleName(seed);
      if (this.isRootModule) {
        statements.pop();
        return statements;
      }
      var body = createFunctionBody(statements);
      var moduleExpression;
      if (statements.some(scopeContainsThis)) {
        moduleExpression = createScopedExpression(body, globalThis());
      } else {
        moduleExpression = createImmediatelyInvokedFunctionExpression(body);
      }
      return [createVariableStatement(CONST, idName, moduleExpression)];
    },
    transformExportDeclaration: function(tree) {
      if (this.isRootModule)
        return tree;
      this.exportVisitor_.visitAny(tree);
      return this.transformAny(tree.declaration);
    },
    transformImportDeclaration: function(tree) {
      if (!tree.importClause || (tree.importClause.type === IMPORT_SPECIFIER_SET && tree.importClause.specifiers.length === 0)) {
        return createExpressionStatement(this.transformAny(tree.moduleSpecifier));
      }
      var binding = this.transformAny(tree.importClause);
      var initializer = this.transformAny(tree.moduleSpecifier);
      return createVariableStatement(CONST, binding, initializer);
    },
    transformNamedExport: function(tree) {
      return new AnonBlock(null, []);
    },
    transformModuleSpecifier: function(tree) {
      return createBindingIdentifier(this.getTempVarNameForModuleSpecifier(tree));
    },
    get isRootModule() {
      return this.moduleName === (this.metadata_ && this.metadata_.rootModule);
    }
  }, {}, $__super);
}(ModuleTransformer);
Object.defineProperties(module.exports, {
  InlineES6ModuleTransformer: {get: function() {
      return InlineES6ModuleTransformer;
    }},
  __esModule: {value: true}
});
