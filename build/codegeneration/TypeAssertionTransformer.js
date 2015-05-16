"use strict";
var $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $__ParseTreeFactory_46_js__,
    $__PlaceholderParser_46_js__,
    $__ParameterTransformer_46_js__;
var $__0 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    BINDING_ELEMENT = $__0.BINDING_ELEMENT,
    REST_PARAMETER = $__0.REST_PARAMETER;
var $__1 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    ImportDeclaration = $__1.ImportDeclaration,
    ImportSpecifier = $__1.ImportSpecifier,
    ImportSpecifierSet = $__1.ImportSpecifierSet,
    Module = $__1.Module,
    ModuleSpecifier = $__1.ModuleSpecifier,
    Script = $__1.Script,
    VariableDeclaration = $__1.VariableDeclaration;
var $__2 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createArgumentList = $__2.createArgumentList,
    createIdentifierExpression = $__2.createIdentifierExpression,
    createImportedBinding = $__2.createImportedBinding,
    createStringLiteralToken = $__2.createStringLiteralToken;
var $__3 = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}),
    parseExpression = $__3.parseExpression,
    parseStatement = $__3.parseStatement;
var ParameterTransformer = ($__ParameterTransformer_46_js__ = require("./ParameterTransformer.js"), $__ParameterTransformer_46_js__ && $__ParameterTransformer_46_js__.__esModule && $__ParameterTransformer_46_js__ || {default: $__ParameterTransformer_46_js__}).ParameterTransformer;
var TypeAssertionTransformer = function($__super) {
  function TypeAssertionTransformer(identifierGenerator, reporter, options) {
    $traceurRuntime.superConstructor(TypeAssertionTransformer).call(this, identifierGenerator, reporter, options);
    this.options_ = options;
    this.returnTypeStack_ = [];
    this.parametersStack_ = [];
    this.assertionAdded_ = false;
  }
  return ($traceurRuntime.createClass)(TypeAssertionTransformer, {
    transformScript: function(tree) {
      return this.prependAssertionImport_($traceurRuntime.superGet(this, TypeAssertionTransformer.prototype, "transformScript").call(this, tree), Script);
    },
    transformModule: function(tree) {
      return this.prependAssertionImport_($traceurRuntime.superGet(this, TypeAssertionTransformer.prototype, "transformModule").call(this, tree), Module);
    },
    transformVariableDeclaration: function(tree) {
      if (tree.typeAnnotation && tree.initializer) {
        var assert = parseExpression($traceurRuntime.getTemplateObject(["assert.type(", ", ", ")"]), tree.initializer, tree.typeAnnotation);
        tree = new VariableDeclaration(tree.location, tree.lvalue, tree.typeAnnotation, assert);
        this.assertionAdded_ = true;
      }
      return $traceurRuntime.superGet(this, TypeAssertionTransformer.prototype, "transformVariableDeclaration").call(this, tree);
    },
    transformFormalParameterList: function(tree) {
      this.parametersStack_.push({
        atLeastOneParameterTyped: false,
        arguments: []
      });
      var transformed = $traceurRuntime.superGet(this, TypeAssertionTransformer.prototype, "transformFormalParameterList").call(this, tree);
      var params = this.parametersStack_.pop();
      if (params.atLeastOneParameterTyped) {
        var argumentList = createArgumentList(params.arguments);
        var assertStatement = parseStatement($traceurRuntime.getTemplateObject(["assert.argumentTypes(", ")"]), argumentList);
        this.parameterStatements.push(assertStatement);
        this.assertionAdded_ = true;
      }
      return transformed;
    },
    transformFormalParameter: function(tree) {
      var transformed = $traceurRuntime.superGet(this, TypeAssertionTransformer.prototype, "transformFormalParameter").call(this, tree);
      switch (transformed.parameter.type) {
        case BINDING_ELEMENT:
          this.transformBindingElementParameter_(transformed.parameter, transformed.typeAnnotation);
          break;
        case REST_PARAMETER:
          break;
      }
      return transformed;
    },
    transformGetAccessor: function(tree) {
      this.pushReturnType_(tree.typeAnnotation);
      tree = $traceurRuntime.superGet(this, TypeAssertionTransformer.prototype, "transformGetAccessor").call(this, tree);
      this.popReturnType_();
      return tree;
    },
    transformPropertyMethodAssignment: function(tree) {
      this.pushReturnType_(tree.typeAnnotation);
      tree = $traceurRuntime.superGet(this, TypeAssertionTransformer.prototype, "transformPropertyMethodAssignment").call(this, tree);
      this.popReturnType_();
      return tree;
    },
    transformFunctionDeclaration: function(tree) {
      this.pushReturnType_(tree.typeAnnotation);
      tree = $traceurRuntime.superGet(this, TypeAssertionTransformer.prototype, "transformFunctionDeclaration").call(this, tree);
      this.popReturnType_();
      return tree;
    },
    transformFunctionExpression: function(tree) {
      this.pushReturnType_(tree.typeAnnotation);
      tree = $traceurRuntime.superGet(this, TypeAssertionTransformer.prototype, "transformFunctionExpression").call(this, tree);
      this.popReturnType_();
      return tree;
    },
    transformArrowFunctionExpression: function(tree) {
      this.pushReturnType_(null);
      tree = $traceurRuntime.superGet(this, TypeAssertionTransformer.prototype, "transformArrowFunctionExpression").call(this, tree);
      this.popReturnType_();
      return tree;
    },
    transformReturnStatement: function(tree) {
      tree = $traceurRuntime.superGet(this, TypeAssertionTransformer.prototype, "transformReturnStatement").call(this, tree);
      if (this.returnType_ && tree.expression) {
        this.assertionAdded_ = true;
        return parseStatement($traceurRuntime.getTemplateObject(["return assert.returnType((", "), ", ")"]), tree.expression, this.returnType_);
      }
      return tree;
    },
    transformBindingElementParameter_: function(element, typeAnnotation) {
      if (!element.binding.isPattern()) {
        if (typeAnnotation) {
          this.paramTypes_.atLeastOneParameterTyped = true;
        } else {
          typeAnnotation = parseExpression($traceurRuntime.getTemplateObject(["$traceurRuntime.type.any"]));
        }
        this.paramTypes_.arguments.push(createIdentifierExpression(element.binding.identifierToken), typeAnnotation);
        return;
      }
    },
    pushReturnType_: function(typeAnnotation) {
      this.returnTypeStack_.push(this.transformAny(typeAnnotation));
    },
    prependAssertionImport_: function(tree, Ctor) {
      if (!this.assertionAdded_ || this.options_.typeAssertionModule === null)
        return tree;
      var binding = createImportedBinding('assert');
      var importStatement = new ImportDeclaration(null, new ImportSpecifierSet(null, [new ImportSpecifier(null, binding, null)]), new ModuleSpecifier(null, createStringLiteralToken(this.options_.typeAssertionModule)));
      tree = new Ctor(tree.location, $traceurRuntime.spread([importStatement], tree.scriptItemList), tree.moduleName);
      return tree;
    },
    popReturnType_: function() {
      return this.returnTypeStack_.pop();
    },
    get returnType_() {
      return this.returnTypeStack_.length > 0 ? this.returnTypeStack_[this.returnTypeStack_.length - 1] : null;
    },
    get paramTypes_() {
      return this.parametersStack_[this.parametersStack_.length - 1];
    }
  }, {}, $__super);
}(ParameterTransformer);
Object.defineProperties(module.exports, {
  TypeAssertionTransformer: {get: function() {
      return TypeAssertionTransformer;
    }},
  __esModule: {value: true}
});
