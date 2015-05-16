"use strict";
var $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $__ExplodeExpressionTransformer_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $__TempVarTransformer_46_js__,
    $___46__46__47_syntax_47_TokenType_46_js__,
    $__PlaceholderParser_46_js__,
    $__PrependStatements_46_js__;
var $__0 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    BinaryExpression = $__0.BinaryExpression,
    MemberLookupExpression = $__0.MemberLookupExpression,
    Module = $__0.Module,
    ForInStatement = $__0.ForInStatement,
    Script = $__0.Script,
    UnaryExpression = $__0.UnaryExpression;
var ExplodeExpressionTransformer = ($__ExplodeExpressionTransformer_46_js__ = require("./ExplodeExpressionTransformer.js"), $__ExplodeExpressionTransformer_46_js__ && $__ExplodeExpressionTransformer_46_js__.__esModule && $__ExplodeExpressionTransformer_46_js__ || {default: $__ExplodeExpressionTransformer_46_js__}).ExplodeExpressionTransformer;
var $__2 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    IDENTIFIER_EXPRESSION = $__2.IDENTIFIER_EXPRESSION,
    LITERAL_EXPRESSION = $__2.LITERAL_EXPRESSION,
    UNARY_EXPRESSION = $__2.UNARY_EXPRESSION,
    VARIABLE_DECLARATION_LIST = $__2.VARIABLE_DECLARATION_LIST;
var TempVarTransformer = ($__TempVarTransformer_46_js__ = require("./TempVarTransformer.js"), $__TempVarTransformer_46_js__ && $__TempVarTransformer_46_js__.__esModule && $__TempVarTransformer_46_js__ || {default: $__TempVarTransformer_46_js__}).TempVarTransformer;
var $__4 = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}),
    EQUAL_EQUAL = $__4.EQUAL_EQUAL,
    EQUAL_EQUAL_EQUAL = $__4.EQUAL_EQUAL_EQUAL,
    IN = $__4.IN,
    NOT_EQUAL = $__4.NOT_EQUAL,
    NOT_EQUAL_EQUAL = $__4.NOT_EQUAL_EQUAL,
    STRING = $__4.STRING,
    TYPEOF = $__4.TYPEOF;
var $__5 = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}),
    parseExpression = $__5.parseExpression,
    parseStatement = $__5.parseStatement;
var prependStatements = ($__PrependStatements_46_js__ = require("./PrependStatements.js"), $__PrependStatements_46_js__ && $__PrependStatements_46_js__.__esModule && $__PrependStatements_46_js__ || {default: $__PrependStatements_46_js__}).prependStatements;
var ExplodeSymbolExpression = function($__super) {
  function ExplodeSymbolExpression() {
    $traceurRuntime.superConstructor(ExplodeSymbolExpression).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(ExplodeSymbolExpression, {
    transformArrowFunctionExpression: function(tree) {
      return tree;
    },
    transformClassExpression: function(tree) {
      return tree;
    },
    transformFunctionBody: function(tree) {
      return tree;
    }
  }, {}, $__super);
}(ExplodeExpressionTransformer);
function isEqualityExpression(tree) {
  switch (tree.operator.type) {
    case EQUAL_EQUAL:
    case EQUAL_EQUAL_EQUAL:
    case NOT_EQUAL:
    case NOT_EQUAL_EQUAL:
      return true;
  }
  return false;
}
function isTypeof(tree) {
  return tree.type === UNARY_EXPRESSION && tree.operator.type === TYPEOF;
}
function isSafeTypeofString(tree) {
  if (tree.type !== LITERAL_EXPRESSION)
    return false;
  var value = tree.literalToken.processedValue;
  switch (value) {
    case 'symbol':
    case 'object':
      return false;
  }
  return true;
}
var runtimeOption = parseStatement($traceurRuntime.getTemplateObject(["$traceurRuntime.options.symbols = true"]));
var SymbolTransformer = function($__super) {
  function SymbolTransformer() {
    $traceurRuntime.superConstructor(SymbolTransformer).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(SymbolTransformer, {
    transformModule: function(tree) {
      return new Module(tree.location, prependStatements(this.transformList(tree.scriptItemList), runtimeOption), tree.moduleName);
    },
    transformScript: function(tree) {
      return new Script(tree.location, prependStatements(this.transformList(tree.scriptItemList), runtimeOption), tree.moduleName);
    },
    transformTypeofOperand_: function(tree) {
      var operand = this.transformAny(tree.operand);
      return new UnaryExpression(tree.location, tree.operator, operand);
    },
    transformBinaryExpression: function(tree) {
      if (tree.operator.type === IN) {
        var name = this.transformAny(tree.left);
        var object = this.transformAny(tree.right);
        if (name.type === LITERAL_EXPRESSION)
          return new BinaryExpression(tree.location, name, tree.operator, object);
        return parseExpression($traceurRuntime.getTemplateObject(["$traceurRuntime.toProperty(", ") in ", ""]), name, object);
      }
      if (isEqualityExpression(tree)) {
        if (isTypeof(tree.left) && isSafeTypeofString(tree.right)) {
          var left = this.transformTypeofOperand_(tree.left);
          var right = tree.right;
          return new BinaryExpression(tree.location, left, tree.operator, right);
        }
        if (isTypeof(tree.right) && isSafeTypeofString(tree.left)) {
          var left$__8 = tree.left;
          var right$__9 = this.transformTypeofOperand_(tree.right);
          return new BinaryExpression(tree.location, left$__8, tree.operator, right$__9);
        }
      }
      return $traceurRuntime.superGet(this, SymbolTransformer.prototype, "transformBinaryExpression").call(this, tree);
    },
    transformMemberLookupExpression: function(tree) {
      var operand = this.transformAny(tree.operand);
      var memberExpression = this.transformAny(tree.memberExpression);
      if (memberExpression.type === LITERAL_EXPRESSION && memberExpression.literalToken.type !== STRING) {
        return new MemberLookupExpression(tree.location, operand, memberExpression);
      }
      return parseExpression($traceurRuntime.getTemplateObject(["", "[$traceurRuntime.toProperty(", ")]"]), operand, memberExpression);
    },
    transformUnaryExpression: function(tree) {
      if (tree.operator.type !== TYPEOF)
        return $traceurRuntime.superGet(this, SymbolTransformer.prototype, "transformUnaryExpression").call(this, tree);
      var operand = this.transformAny(tree.operand);
      var expression = this.getRuntimeTypeof(operand);
      if (operand.type === IDENTIFIER_EXPRESSION) {
        return parseExpression($traceurRuntime.getTemplateObject(["(typeof ", " === 'undefined' ?\n          'undefined' : ", ")"]), operand, expression);
      }
      return expression;
    },
    getRuntimeTypeof: function(operand) {
      return parseExpression($traceurRuntime.getTemplateObject(["$traceurRuntime.typeof(", ")"]), operand);
    },
    transformForInStatement: function(tree) {
      var initializer = this.transformAny(tree.initializer);
      var collection = this.transformAny(tree.collection);
      var body = this.transformAny(tree.body);
      var initIdentToken;
      if (initializer.type === VARIABLE_DECLARATION_LIST) {
        initIdentToken = initializer.declarations[0].lvalue.identifierToken;
      } else {
        initIdentToken = initializer.identifierToken;
      }
      if (!initIdentToken) {
        throw new Error('Not implemented');
      }
      body = parseStatement($traceurRuntime.getTemplateObject(["if (!$traceurRuntime.isSymbolString(", ")) ", ""]), initIdentToken, body);
      return new ForInStatement(tree.location, initializer, collection, body);
    }
  }, {}, $__super);
}(TempVarTransformer);
Object.defineProperties(module.exports, {
  SymbolTransformer: {get: function() {
      return SymbolTransformer;
    }},
  __esModule: {value: true}
});
