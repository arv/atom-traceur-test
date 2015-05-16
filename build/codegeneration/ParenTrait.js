"use strict";
var $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__;
var $__0 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    ArgumentList = $__0.ArgumentList,
    ArrayLiteralExpression = $__0.ArrayLiteralExpression,
    ExpressionStatement = $__0.ExpressionStatement,
    NewExpression = $__0.NewExpression,
    ParenExpression = $__0.ParenExpression,
    VariableDeclaration = $__0.VariableDeclaration;
var $__1 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    CALL_EXPRESSION = $__1.CALL_EXPRESSION,
    COMMA_EXPRESSION = $__1.COMMA_EXPRESSION,
    FUNCTION_EXPRESSION = $__1.FUNCTION_EXPRESSION,
    OBJECT_LITERAL_EXPRESSION = $__1.OBJECT_LITERAL_EXPRESSION,
    OBJECT_PATTERN = $__1.OBJECT_PATTERN,
    TEMPLATE_LITERAL_EXPRESSION = $__1.TEMPLATE_LITERAL_EXPRESSION;
function wrap(tree) {
  return new ParenExpression(tree.location, tree);
}
function ParenTrait(ParseTreeTransformerClass) {
  return function($__super) {
    function $__2() {
      $traceurRuntime.superConstructor($__2).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)($__2, {
      transformVariableDeclaration: function(tree) {
        var lvalue = this.transformAny(tree.lvalue);
        var typeAnnotation = this.transformAny(tree.typeAnnotation);
        var initializer = this.transformAny(tree.initializer);
        if (initializer !== null && initializer.type === COMMA_EXPRESSION) {
          initializer = wrap(initializer);
        } else if (tree.lvalue === lvalue && tree.typeAnnotation === typeAnnotation && tree.initializer === initializer) {
          return tree;
        }
        return new VariableDeclaration(tree.location, lvalue, typeAnnotation, initializer);
      },
      transformExpressionStatement: function(tree) {
        var expression = this.transformAny(tree.expression);
        switch (expression.type) {
          case OBJECT_LITERAL_EXPRESSION:
          case OBJECT_PATTERN:
          case FUNCTION_EXPRESSION:
            expression = wrap(expression);
            break;
        }
        if (tree.expression === expression) {
          return tree;
        }
        return new ExpressionStatement(tree.location, expression);
      },
      transformNewExpression: function(tree) {
        var operand = this.transformAny(tree.operand);
        var args = this.transformAny(tree.args);
        switch (operand.type) {
          case CALL_EXPRESSION:
          case TEMPLATE_LITERAL_EXPRESSION:
            operand = wrap(operand);
        }
        if (operand === tree.operand && args === tree.args) {
          return tree;
        }
        return new NewExpression(tree.location, operand, args);
      },
      transformExpressionList_: function(list) {
        var expressions = this.transformList(list);
        var newList = null;
        for (var i = 0; i < list.length; i++) {
          var expression = expressions[i];
          if (expression !== null && expression.type === COMMA_EXPRESSION) {
            expression = wrap(expression);
            if (newList === null) {
              newList = expressions.slice(0, i);
            }
            newList.push(expression);
          } else if (newList !== null) {
            newList.push(expression);
          }
        }
        if (newList !== null) {
          return newList;
        }
        return expressions;
      },
      transformArgumentList: function(tree) {
        var args = this.transformExpressionList_(tree.args);
        if (tree.args === args) {
          return tree;
        }
        return new ArgumentList(tree.location, args);
      },
      transformArrayLiteralExpression: function(tree) {
        var elements = this.transformExpressionList_(tree.elements);
        if (tree.elements === elements) {
          return tree;
        }
        return new ArrayLiteralExpression(tree.location, elements);
      }
    }, {}, $__super);
  }(ParseTreeTransformerClass);
}
Object.defineProperties(module.exports, {
  ParenTrait: {get: function() {
      return ParenTrait;
    }},
  __esModule: {value: true}
});
