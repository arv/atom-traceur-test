"use strict";
var $__ExplodeExpressionTransformer_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $__ParseTreeTransformer_46_js__,
    $___46__46__47_syntax_47_TokenType_46_js__,
    $__ParseTreeFactory_46_js__,
    $__PlaceholderParser_46_js__;
var ExplodeExpressionTransformer = ($__ExplodeExpressionTransformer_46_js__ = require("./ExplodeExpressionTransformer.js"), $__ExplodeExpressionTransformer_46_js__ && $__ExplodeExpressionTransformer_46_js__.__esModule && $__ExplodeExpressionTransformer_46_js__ || {default: $__ExplodeExpressionTransformer_46_js__}).ExplodeExpressionTransformer;
var $__1 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    FunctionDeclaration = $__1.FunctionDeclaration,
    FunctionExpression = $__1.FunctionExpression;
var $__2 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    MEMBER_EXPRESSION = $__2.MEMBER_EXPRESSION,
    MEMBER_LOOKUP_EXPRESSION = $__2.MEMBER_LOOKUP_EXPRESSION,
    SUPER_EXPRESSION = $__2.SUPER_EXPRESSION;
var ParseTreeTransformer = ($__ParseTreeTransformer_46_js__ = require("./ParseTreeTransformer.js"), $__ParseTreeTransformer_46_js__ && $__ParseTreeTransformer_46_js__.__esModule && $__ParseTreeTransformer_46_js__ || {default: $__ParseTreeTransformer_46_js__}).ParseTreeTransformer;
var $__4 = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}),
    EQUAL = $__4.EQUAL,
    MINUS_MINUS = $__4.MINUS_MINUS,
    PLUS_PLUS = $__4.PLUS_PLUS;
var $__5 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createArgumentList = $__5.createArgumentList,
    createIdentifierExpression = $__5.createIdentifierExpression,
    createParenExpression = $__5.createParenExpression,
    createStringLiteral = $__5.createStringLiteral,
    createThisExpression = $__5.createThisExpression;
var parseExpression = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}).parseExpression;
var ExplodeSuperExpression = function($__super) {
  function ExplodeSuperExpression() {
    $traceurRuntime.superConstructor(ExplodeSuperExpression).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(ExplodeSuperExpression, {
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
var SuperTransformer = function($__super) {
  function SuperTransformer(tempVarTransformer, protoName, thisName, internalName) {
    $traceurRuntime.superConstructor(SuperTransformer).call(this);
    this.tempVarTransformer_ = tempVarTransformer;
    this.protoName_ = protoName;
    this.internalName_ = internalName;
    this.superCount_ = 0;
    this.thisVar_ = createIdentifierExpression(thisName);
    this.inNestedFunc_ = 0;
    this.nestedSuperCount_ = 0;
  }
  return ($traceurRuntime.createClass)(SuperTransformer, {
    get hasSuper() {
      return this.superCount_ > 0;
    },
    get nestedSuper() {
      return this.nestedSuperCount_ > 0;
    },
    transformFunctionDeclaration: function(tree) {
      return this.transformFunction_(tree, FunctionDeclaration);
    },
    transformFunctionExpression: function(tree) {
      return this.transformFunction_(tree, FunctionExpression);
    },
    transformFunction_: function(tree, constructor) {
      var oldSuperCount = this.superCount_;
      this.inNestedFunc_++;
      var transformedTree = constructor === FunctionExpression ? $traceurRuntime.superGet(this, SuperTransformer.prototype, "transformFunctionExpression").call(this, tree) : $traceurRuntime.superGet(this, SuperTransformer.prototype, "transformFunctionDeclaration").call(this, tree);
      this.inNestedFunc_--;
      if (oldSuperCount !== this.superCount_)
        this.nestedSuperCount_ += this.superCount_ - oldSuperCount;
      return transformedTree;
    },
    transformGetAccessor: function(tree) {
      return tree;
    },
    transformSetAccessor: function(tree) {
      return tree;
    },
    transformPropertyMethodAssignment: function(tree) {
      return tree;
    },
    transformCallExpression: function(tree) {
      if (tree.operand.type === SUPER_EXPRESSION) {
        this.superCount_++;
        return this.createSuperCall_(tree);
      }
      if (hasSuperMemberExpression(tree.operand)) {
        this.superCount_++;
        var name;
        if (tree.operand.type === MEMBER_EXPRESSION)
          name = tree.operand.memberName.value;
        else
          name = tree.operand.memberExpression;
        return this.createSuperCallMethod_(name, tree);
      }
      return $traceurRuntime.superGet(this, SuperTransformer.prototype, "transformCallExpression").call(this, tree);
    },
    createSuperCall_: function(tree) {
      var thisExpr = this.inNestedFunc_ ? this.thisVar_ : createThisExpression();
      var args = createArgumentList($traceurRuntime.spread([thisExpr], tree.args.args));
      return parseExpression($traceurRuntime.getTemplateObject(["$traceurRuntime.superConstructor(", ").call(", ")"]), this.internalName_, args);
    },
    createSuperCallMethod_: function(methodName, tree) {
      var thisExpr = this.inNestedFunc_ ? this.thisVar_ : createThisExpression();
      var operand = this.transformMemberShared_(methodName);
      var args = createArgumentList($traceurRuntime.spread([thisExpr], tree.args.args));
      return parseExpression($traceurRuntime.getTemplateObject(["", ".call(", ")"]), operand, args);
    },
    transformMemberShared_: function(name) {
      var thisExpr = this.inNestedFunc_ ? this.thisVar_ : createThisExpression();
      return parseExpression($traceurRuntime.getTemplateObject(["$traceurRuntime.superGet(", ", ", ", ", ")"]), thisExpr, this.protoName_, name);
    },
    transformMemberExpression: function(tree) {
      if (tree.operand.type === SUPER_EXPRESSION) {
        this.superCount_++;
        return this.transformMemberShared_(tree.memberName.value);
      }
      return $traceurRuntime.superGet(this, SuperTransformer.prototype, "transformMemberExpression").call(this, tree);
    },
    transformMemberLookupExpression: function(tree) {
      if (tree.operand.type === SUPER_EXPRESSION)
        return this.transformMemberShared_(tree.memberExpression);
      return $traceurRuntime.superGet(this, SuperTransformer.prototype, "transformMemberLookupExpression").call(this, tree);
    },
    transformBinaryExpression: function(tree) {
      if (tree.operator.isAssignmentOperator() && hasSuperMemberExpression(tree.left)) {
        if (tree.operator.type !== EQUAL) {
          var exploded = new ExplodeSuperExpression(this.tempVarTransformer_).transformAny(tree);
          return this.transformAny(createParenExpression(exploded));
        }
        this.superCount_++;
        var name = tree.left.type === MEMBER_LOOKUP_EXPRESSION ? tree.left.memberExpression : createStringLiteral(tree.left.memberName.value);
        var thisExpr = this.inNestedFunc_ ? this.thisVar_ : createThisExpression();
        var right = this.transformAny(tree.right);
        return parseExpression($traceurRuntime.getTemplateObject(["$traceurRuntime.superSet(", ", ", ", ", ",\n                                    ", ")"]), thisExpr, this.protoName_, name, right);
      }
      return $traceurRuntime.superGet(this, SuperTransformer.prototype, "transformBinaryExpression").call(this, tree);
    },
    transformUnaryExpression: function(tree) {
      var transformed = this.transformIncrementDecrement_(tree);
      if (transformed)
        return transformed;
      return $traceurRuntime.superGet(this, SuperTransformer.prototype, "transformUnaryExpression").call(this, tree);
    },
    transformPostfixExpression: function(tree) {
      var transformed = this.transformIncrementDecrement_(tree);
      if (transformed)
        return transformed;
      return $traceurRuntime.superGet(this, SuperTransformer.prototype, "transformPostfixExpression").call(this, tree);
    },
    transformIncrementDecrement_: function(tree) {
      var operator = tree.operator;
      var operand = tree.operand;
      if ((operator.type === PLUS_PLUS || operator.type === MINUS_MINUS) && hasSuperMemberExpression(operand)) {
        var exploded = new ExplodeSuperExpression(this.tempVarTransformer_).transformAny(tree);
        if (exploded !== tree)
          exploded = createParenExpression(exploded);
        return this.transformAny(exploded);
      }
      return null;
    }
  }, {}, $__super);
}(ParseTreeTransformer);
function hasSuperMemberExpression(tree) {
  if (tree.type !== MEMBER_EXPRESSION && tree.type !== MEMBER_LOOKUP_EXPRESSION)
    return false;
  return tree.operand.type === SUPER_EXPRESSION;
}
Object.defineProperties(module.exports, {
  SuperTransformer: {get: function() {
      return SuperTransformer;
    }},
  __esModule: {value: true}
});
