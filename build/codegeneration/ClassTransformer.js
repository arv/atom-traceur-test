"use strict";
var $___46__46__47_syntax_47_PredefinedName_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $___46__46__47_codegeneration_47_ParseTreeFactory_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $__SuperTransformer_46_js__,
    $__TempVarTransformer_46_js__,
    $___46__46__47_syntax_47_TokenType_46_js__,
    $__MakeStrictTransformer_46_js__,
    $__ParenTrait_46_js__,
    $__ParseTreeFactory_46_js__,
    $___46__46__47_semantics_47_util_46_js__,
    $__PlaceholderParser_46_js__,
    $___46__46__47_staticsemantics_47_PropName_46_js__,
    $__PrependStatements_46_js__,
    $__MemberVariableConstructorTransformer_46_js__;
var CONSTRUCTOR = ($___46__46__47_syntax_47_PredefinedName_46_js__ = require("../syntax/PredefinedName.js"), $___46__46__47_syntax_47_PredefinedName_46_js__ && $___46__46__47_syntax_47_PredefinedName_46_js__.__esModule && $___46__46__47_syntax_47_PredefinedName_46_js__ || {default: $___46__46__47_syntax_47_PredefinedName_46_js__}).CONSTRUCTOR;
var $__1 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    AnonBlock = $__1.AnonBlock,
    ClassExpression = $__1.ClassExpression,
    ExportDeclaration = $__1.ExportDeclaration,
    FunctionDeclaration = $__1.FunctionDeclaration,
    FunctionExpression = $__1.FunctionExpression,
    GetAccessor = $__1.GetAccessor,
    PropertyMethodAssignment = $__1.PropertyMethodAssignment,
    SetAccessor = $__1.SetAccessor;
var $__2 = ($___46__46__47_codegeneration_47_ParseTreeFactory_46_js__ = require("../codegeneration/ParseTreeFactory.js"), $___46__46__47_codegeneration_47_ParseTreeFactory_46_js__ && $___46__46__47_codegeneration_47_ParseTreeFactory_46_js__.__esModule && $___46__46__47_codegeneration_47_ParseTreeFactory_46_js__ || {default: $___46__46__47_codegeneration_47_ParseTreeFactory_46_js__}),
    createBindingIdentifier = $__2.createBindingIdentifier,
    createIdentifierToken = $__2.createIdentifierToken;
var $__3 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    COMPUTED_PROPERTY_NAME = $__3.COMPUTED_PROPERTY_NAME,
    GET_ACCESSOR = $__3.GET_ACCESSOR,
    PROPERTY_METHOD_ASSIGNMENT = $__3.PROPERTY_METHOD_ASSIGNMENT,
    PROPERTY_VARIABLE_DECLARATION = $__3.PROPERTY_VARIABLE_DECLARATION,
    SET_ACCESSOR = $__3.SET_ACCESSOR;
var SuperTransformer = ($__SuperTransformer_46_js__ = require("./SuperTransformer.js"), $__SuperTransformer_46_js__ && $__SuperTransformer_46_js__.__esModule && $__SuperTransformer_46_js__ || {default: $__SuperTransformer_46_js__}).SuperTransformer;
var TempVarTransformer = ($__TempVarTransformer_46_js__ = require("./TempVarTransformer.js"), $__TempVarTransformer_46_js__ && $__TempVarTransformer_46_js__.__esModule && $__TempVarTransformer_46_js__ || {default: $__TempVarTransformer_46_js__}).TempVarTransformer;
var $__6 = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}),
    CONST = $__6.CONST,
    LET = $__6.LET,
    VAR = $__6.VAR,
    STRING = $__6.STRING;
var MakeStrictTransformer = ($__MakeStrictTransformer_46_js__ = require("./MakeStrictTransformer.js"), $__MakeStrictTransformer_46_js__ && $__MakeStrictTransformer_46_js__.__esModule && $__MakeStrictTransformer_46_js__ || {default: $__MakeStrictTransformer_46_js__}).MakeStrictTransformer;
var ParenTrait = ($__ParenTrait_46_js__ = require("./ParenTrait.js"), $__ParenTrait_46_js__ && $__ParenTrait_46_js__.__esModule && $__ParenTrait_46_js__ || {default: $__ParenTrait_46_js__}).ParenTrait;
var $__9 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createEmptyParameterList = $__9.createEmptyParameterList,
    createExpressionStatement = $__9.createExpressionStatement,
    createFunctionBody = $__9.createFunctionBody,
    id = $__9.createIdentifierExpression,
    createMemberExpression = $__9.createMemberExpression,
    createObjectLiteralExpression = $__9.createObjectLiteralExpression,
    createPropertyNameAssignment = $__9.createPropertyNameAssignment,
    createThisExpression = $__9.createThisExpression,
    createVariableStatement = $__9.createVariableStatement;
var hasUseStrict = ($___46__46__47_semantics_47_util_46_js__ = require("../semantics/util.js"), $___46__46__47_semantics_47_util_46_js__ && $___46__46__47_semantics_47_util_46_js__.__esModule && $___46__46__47_semantics_47_util_46_js__ || {default: $___46__46__47_semantics_47_util_46_js__}).hasUseStrict;
var $__11 = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}),
    parseExpression = $__11.parseExpression,
    parseStatement = $__11.parseStatement;
var propName = ($___46__46__47_staticsemantics_47_PropName_46_js__ = require("../staticsemantics/PropName.js"), $___46__46__47_staticsemantics_47_PropName_46_js__ && $___46__46__47_staticsemantics_47_PropName_46_js__.__esModule && $___46__46__47_staticsemantics_47_PropName_46_js__ || {default: $___46__46__47_staticsemantics_47_PropName_46_js__}).propName;
var prependStatements = ($__PrependStatements_46_js__ = require("./PrependStatements.js"), $__PrependStatements_46_js__ && $__PrependStatements_46_js__.__esModule && $__PrependStatements_46_js__ || {default: $__PrependStatements_46_js__}).prependStatements;
var $__14 = ($__MemberVariableConstructorTransformer_46_js__ = require("./MemberVariableConstructorTransformer.js"), $__MemberVariableConstructorTransformer_46_js__ && $__MemberVariableConstructorTransformer_46_js__.__esModule && $__MemberVariableConstructorTransformer_46_js__ || {default: $__MemberVariableConstructorTransformer_46_js__}),
    transformConstructor = $__14.transformConstructor,
    getInstanceInitExpression = $__14.getInstanceInitExpression;
function classCall(func, object, staticObject, superClass) {
  if (superClass) {
    return parseExpression($traceurRuntime.getTemplateObject(["($traceurRuntime.createClass)(", ", ", ", ", ",\n                                       ", ")"]), func, object, staticObject, superClass);
  }
  return parseExpression($traceurRuntime.getTemplateObject(["($traceurRuntime.createClass)(", ", ", ", ", ")"]), func, object, staticObject);
}
function methodNameFromTree(tree) {
  if (tree.type === COMPUTED_PROPERTY_NAME) {
    return '';
  }
  if (tree.literalToken && tree.literalToken.type === STRING) {
    return tree.getStringValue().substr(1, -1);
  }
  return tree.getStringValue();
}
function classMethodDebugName(className, methodName, isStatic) {
  if (isStatic) {
    return createBindingIdentifier('$__' + className + '_' + methodName);
  }
  return createBindingIdentifier('$__' + className + '_prototype_' + methodName);
}
function functionExpressionToDeclaration(tree, name) {
  if (tree.name === null) {
    name = createBindingIdentifier(name);
  } else {
    name = tree.name;
  }
  return new FunctionDeclaration(tree.location, name, tree.functionKind, tree.parameterList, tree.typeAnnotation, tree.annotations, tree.body);
}
var ClassTransformer = function($__super) {
  function ClassTransformer(identifierGenerator, reporter, options) {
    $traceurRuntime.superConstructor(ClassTransformer).call(this, identifierGenerator, reporter, options);
    this.strictCount_ = 0;
    this.state_ = null;
  }
  return ($traceurRuntime.createClass)(ClassTransformer, {
    transformExportDeclaration: function(tree) {
      var transformed = $traceurRuntime.superGet(this, ClassTransformer.prototype, "transformExportDeclaration").call(this, tree);
      if (transformed === tree)
        return tree;
      var declaration = transformed.declaration;
      if (declaration instanceof AnonBlock) {
        var statements = $traceurRuntime.spread([new ExportDeclaration(null, declaration.statements[0], [])], declaration.statements.slice(1));
        return new AnonBlock(null, statements);
      }
      return transformed;
    },
    transformModule: function(tree) {
      this.strictCount_ = 1;
      return $traceurRuntime.superGet(this, ClassTransformer.prototype, "transformModule").call(this, tree);
    },
    transformScript: function(tree) {
      this.strictCount_ = hasUseStrict(tree.scriptItemList) ? 1 : 0;
      return $traceurRuntime.superGet(this, ClassTransformer.prototype, "transformScript").call(this, tree);
    },
    transformFunctionBody: function(tree) {
      var useStrict = hasUseStrict(tree.statements) ? 1 : 0;
      this.strictCount_ += useStrict;
      var result = $traceurRuntime.superGet(this, ClassTransformer.prototype, "transformFunctionBody").call(this, tree);
      this.strictCount_ -= useStrict;
      return result;
    },
    makeStrict_: function(tree) {
      if (this.strictCount_)
        return tree;
      return MakeStrictTransformer.transformTree(tree);
    },
    transformClassDeclaration: function(tree) {
      var classExpression = new ClassExpression(tree.location, tree.name, tree.superClass, tree.elements, tree.annotations, tree.typeParameters);
      var transformed = this.transformClassExpression(classExpression);
      var useLet = !this.options.transformOptions.blockBinding && this.options.parseOptions.blockBinding;
      return createVariableStatement(useLet ? LET : VAR, tree.name, transformed);
    },
    transformClassExpression: function(tree) {
      var $__15 = this;
      this.pushTempScope();
      var name;
      if (tree.name)
        name = tree.name.identifierToken;
      else
        name = createIdentifierToken(this.getTempIdentifier());
      var internalName = id(("" + name));
      var oldState = this.state_;
      this.state_ = {hasSuper: false};
      var superClass = this.transformAny(tree.superClass);
      var protoElements = [],
          staticElements = [];
      var initInstanceVars = [],
          initStaticVars = [];
      var constructor;
      tree.elements.forEach(function(tree) {
        var elements,
            homeObject,
            initVars;
        if (tree.isStatic) {
          elements = staticElements;
          homeObject = internalName;
          initVars = initStaticVars;
        } else {
          elements = protoElements;
          homeObject = createMemberExpression(internalName, 'prototype');
          initVars = initInstanceVars;
        }
        switch (tree.type) {
          case GET_ACCESSOR:
            elements.push($__15.transformGetAccessor_(tree, homeObject, internalName));
            break;
          case SET_ACCESSOR:
            elements.push($__15.transformSetAccessor_(tree, homeObject, internalName));
            break;
          case PROPERTY_METHOD_ASSIGNMENT:
            if (!tree.isStatic && propName(tree) === CONSTRUCTOR) {
              constructor = tree;
            } else {
              var transformed = $__15.transformPropertyMethodAssignment_(tree, homeObject, internalName, name);
              elements.push(transformed);
            }
            break;
          case PROPERTY_VARIABLE_DECLARATION:
            tree = $__15.transformAny(tree);
            if (tree.initializer !== null) {
              initVars.push(tree);
            }
            break;
          default:
            throw new Error(("Unexpected class element: " + tree.type));
        }
      });
      var object = createObjectLiteralExpression(protoElements);
      var staticObject = createObjectLiteralExpression(staticElements);
      var initExpression = getInstanceInitExpression(initInstanceVars);
      var func;
      if (!constructor) {
        func = this.getDefaultConstructor_(tree, internalName, initExpression);
      } else {
        if (initInstanceVars.length > 0) {
          constructor = transformConstructor(constructor, initExpression, tree.superClass);
        }
        var homeObject = createMemberExpression(internalName, 'prototype');
        var transformedCtor = this.transformPropertyMethodAssignment_(constructor, homeObject, internalName, CONSTRUCTOR);
        func = new FunctionExpression(tree.location, tree.name, false, transformedCtor.parameterList, null, [], transformedCtor.body);
      }
      var state = this.state_;
      this.state_ = oldState;
      var hasSuper = state.hasSuper;
      var expression;
      staticObject = appendStaticInitializers(staticObject, initStaticVars);
      if (hasSuper || tree.name) {
        var functionStatement;
        if (tree.name && !this.options.transformOptions.blockBinding && this.options.parseOptions.blockBinding) {
          functionStatement = createVariableStatement(CONST, tree.name, func);
        } else {
          functionStatement = functionExpressionToDeclaration(func, name);
        }
        if (superClass) {
          expression = parseExpression($traceurRuntime.getTemplateObject(["function($__super) {\n          ", ";\n          return ($traceurRuntime.createClass)(", ", ", ",\n                                               ", ", $__super);\n        }(", ")"]), functionStatement, internalName, object, staticObject, superClass);
        } else {
          expression = parseExpression($traceurRuntime.getTemplateObject(["function() {\n          ", ";\n          return ($traceurRuntime.createClass)(", ", ", ",\n                                               ", ");\n        }()"]), functionStatement, internalName, object, staticObject);
        }
      } else {
        expression = classCall(func, object, staticObject, superClass);
      }
      this.popTempScope();
      return this.makeStrict_(expression);
    },
    transformPropertyMethodAssignment_: function(tree, homeObject, internalName, originalName) {
      var parameterList = this.transformAny(tree.parameterList);
      var body = this.transformSuperInFunctionBody_(tree.body, homeObject, internalName);
      if (!tree.isStatic && parameterList === tree.parameterList && body === tree.body) {
        return tree;
      }
      var debugName = tree.debugName;
      if (this.options.showDebugNames_) {
        debugName = classMethodDebugName(originalName, methodNameFromTree(tree.name), isStatic);
      }
      var isStatic = false;
      return new PropertyMethodAssignment(tree.location, isStatic, tree.functionKind, tree.name, parameterList, tree.typeAnnotation, tree.annotations, body, debugName);
    },
    transformGetAccessor_: function(tree, homeObject, internalName) {
      var body = this.transformSuperInFunctionBody_(tree.body, homeObject, internalName);
      if (!tree.isStatic && body === tree.body)
        return tree;
      return new GetAccessor(tree.location, false, tree.name, tree.typeAnnotation, tree.annotations, body);
    },
    transformSetAccessor_: function(tree, homeObject, internalName) {
      var parameterList = this.transformAny(tree.parameterList);
      var body = this.transformSuperInFunctionBody_(tree.body, homeObject, internalName);
      if (!tree.isStatic && body === tree.body)
        return tree;
      return new SetAccessor(tree.location, false, tree.name, parameterList, tree.annotations, body);
    },
    transformSuperInFunctionBody_: function(tree, homeObject, internalName) {
      this.pushTempScope();
      var thisName = this.getTempIdentifier();
      var thisDecl = createVariableStatement(VAR, thisName, createThisExpression());
      var superTransformer = new SuperTransformer(this, homeObject, thisName, internalName);
      var transformedTree = superTransformer.transformFunctionBody(this.transformFunctionBody(tree));
      if (superTransformer.hasSuper)
        this.state_.hasSuper = true;
      this.popTempScope();
      if (superTransformer.nestedSuper)
        return createFunctionBody([thisDecl].concat(transformedTree.statements));
      return transformedTree;
    },
    getDefaultConstructor_: function(tree, internalName, initExpression) {
      var constructorParams = createEmptyParameterList();
      var constructorBody;
      var initStatement = createExpressionStatement(initExpression);
      var statements = [];
      if (initExpression.expressions.length) {
        statements.push(initStatement);
      }
      if (tree.superClass) {
        var statement = parseStatement($traceurRuntime.getTemplateObject(["$traceurRuntime.superConstructor(\n          ", ").apply(this, arguments)"]), internalName);
        statements.unshift(statement);
        constructorBody = createFunctionBody(statements);
        this.state_.hasSuper = true;
      } else {
        constructorBody = createFunctionBody(statements);
      }
      return new FunctionExpression(tree.location, tree.name, false, constructorParams, null, [], constructorBody);
    },
    transformConstructorWithInitializer_: function(constructor, initExpression, superClass) {
      if (superClass) {
        var transformer = new SuperExpressionTransformer(initExpression);
        return transformer.transformAny(constructor);
      }
      var statements = constructor.body.statements;
      var initStatement = createExpressionStatement(initExpression);
      statements = prependStatements(statements, initStatement);
      return new PropertyMethodAssignment(constructor.location, false, constructor.functionKind, constructor.name, constructor.parameterList, constructor.typeAnnotation, constructor.annotations, createFunctionBody(statements));
    }
  }, {}, $__super);
}(ParenTrait(TempVarTransformer));
function appendStaticInitializers(staticObject, initStaticMemberVars) {
  if (initStaticMemberVars.length === 0)
    return staticObject;
  var properties = initStaticMemberVars.map(function(mv) {
    return createPropertyNameAssignment(mv.name, mv.initializer);
  });
  return createObjectLiteralExpression(staticObject.propertyNameAndValues.concat(properties));
}
Object.defineProperties(module.exports, {
  ClassTransformer: {get: function() {
      return ClassTransformer;
    }},
  __esModule: {value: true}
});
