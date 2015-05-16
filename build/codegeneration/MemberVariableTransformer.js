"use strict";
var $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $__PlaceholderParser_46_js__,
    $__ParseTreeTransformer_46_js__;
var $__0 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    AnonBlock = $__0.AnonBlock,
    ClassDeclaration = $__0.ClassDeclaration,
    ClassExpression = $__0.ClassExpression;
var PROPERTY_VARIABLE_DECLARATION = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}).PROPERTY_VARIABLE_DECLARATION;
var parsePropertyDefinition = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}).parsePropertyDefinition;
var ParseTreeTransformer = ($__ParseTreeTransformer_46_js__ = require("./ParseTreeTransformer.js"), $__ParseTreeTransformer_46_js__ && $__ParseTreeTransformer_46_js__.__esModule && $__ParseTreeTransformer_46_js__ || {default: $__ParseTreeTransformer_46_js__}).ParseTreeTransformer;
var MemberVariableTransformer = function($__super) {
  function MemberVariableTransformer(identifierGenerator) {
    $traceurRuntime.superConstructor(MemberVariableTransformer).call(this);
    this.identifierGenerator_ = identifierGenerator;
  }
  return ($traceurRuntime.createClass)(MemberVariableTransformer, {
    transformPropertyVariableDeclaration: function(tree) {
      var identifier = this.identifierGenerator_.generateUniqueIdentifier();
      var getter = this.createGetAccessor_(identifier, tree);
      var setter = this.createSetAccessor_(identifier, tree);
      return new AnonBlock(tree.location, [getter, setter, tree]);
    },
    createGetAccessor_: function(identifier, tree) {
      var name = tree.name.literalToken;
      var type = tree.typeAnnotation;
      var def = parsePropertyDefinition($traceurRuntime.getTemplateObject(["get ", "():", "\n      { return this.", "; }"]), name, type, identifier);
      def.isStatic = tree.isStatic;
      return def;
    },
    createSetAccessor_: function(identifier, tree) {
      var name = tree.name.literalToken;
      var type = tree.typeAnnotation;
      var def = parsePropertyDefinition($traceurRuntime.getTemplateObject(["set ", "(value:", ")\n      { this.", " = value; }"]), name, type, identifier);
      def.isStatic = tree.isStatic;
      return def;
    }
  }, {}, $__super);
}(ParseTreeTransformer);
Object.defineProperties(module.exports, {
  MemberVariableTransformer: {get: function() {
      return MemberVariableTransformer;
    }},
  __esModule: {value: true}
});
