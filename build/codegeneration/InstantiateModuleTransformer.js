"use strict";
var $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $___46__46__47_syntax_47_ParseTreeVisitor_46_js__,
    $__ScopeTransformer_46_js__,
    $__ParseTreeFactory_46_js__,
    $__ModuleTransformer_46_js__,
    $___46__46__47_syntax_47_TokenType_46_js__,
    $__PlaceholderParser_46_js__,
    $__HoistVariablesTransformer_46_js__;
var $__0 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    AnonBlock = $__0.AnonBlock,
    ArrayLiteralExpression = $__0.ArrayLiteralExpression,
    ClassExpression = $__0.ClassExpression,
    CommaExpression = $__0.CommaExpression,
    ExpressionStatement = $__0.ExpressionStatement,
    VariableDeclaration = $__0.VariableDeclaration;
var $__1 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    CLASS_DECLARATION = $__1.CLASS_DECLARATION,
    FUNCTION_DECLARATION = $__1.FUNCTION_DECLARATION,
    IDENTIFIER_EXPRESSION = $__1.IDENTIFIER_EXPRESSION,
    IMPORT_SPECIFIER_SET = $__1.IMPORT_SPECIFIER_SET,
    NAME_SPACE_IMPORT = $__1.NAME_SPACE_IMPORT;
var ParseTreeVisitor = ($___46__46__47_syntax_47_ParseTreeVisitor_46_js__ = require("../syntax/ParseTreeVisitor.js"), $___46__46__47_syntax_47_ParseTreeVisitor_46_js__ && $___46__46__47_syntax_47_ParseTreeVisitor_46_js__.__esModule && $___46__46__47_syntax_47_ParseTreeVisitor_46_js__ || {default: $___46__46__47_syntax_47_ParseTreeVisitor_46_js__}).ParseTreeVisitor;
var ScopeTransformer = ($__ScopeTransformer_46_js__ = require("./ScopeTransformer.js"), $__ScopeTransformer_46_js__ && $__ScopeTransformer_46_js__.__esModule && $__ScopeTransformer_46_js__ || {default: $__ScopeTransformer_46_js__}).ScopeTransformer;
var $__4 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createEmptyParameterList = $__4.createEmptyParameterList,
    createFunctionBody = $__4.createFunctionBody,
    createFunctionExpression = $__4.createFunctionExpression,
    id = $__4.createIdentifierExpression,
    createObjectLiteral = $__4.createObjectLiteral,
    createVariableDeclarationList = $__4.createVariableDeclarationList,
    createVariableStatement = $__4.createVariableStatement;
var ModuleTransformer = ($__ModuleTransformer_46_js__ = require("./ModuleTransformer.js"), $__ModuleTransformer_46_js__ && $__ModuleTransformer_46_js__.__esModule && $__ModuleTransformer_46_js__ || {default: $__ModuleTransformer_46_js__}).ModuleTransformer;
var $__6 = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}),
    MINUS_MINUS = $__6.MINUS_MINUS,
    PLUS_PLUS = $__6.PLUS_PLUS,
    VAR = $__6.VAR;
var $__7 = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}),
    parseExpression = $__7.parseExpression,
    parseStatement = $__7.parseStatement,
    parseStatements = $__7.parseStatements;
var HoistVariablesTransformer = ($__HoistVariablesTransformer_46_js__ = require("./HoistVariablesTransformer.js"), $__HoistVariablesTransformer_46_js__ && $__HoistVariablesTransformer_46_js__.__esModule && $__HoistVariablesTransformer_46_js__ || {default: $__HoistVariablesTransformer_46_js__}).default;
var ExportBindingsVisitor = function($__super) {
  function ExportBindingsVisitor() {
    $traceurRuntime.superConstructor(ExportBindingsVisitor).call(this);
    this.bindings = [];
  }
  return ($traceurRuntime.createClass)(ExportBindingsVisitor, {
    visitVariableDeclaration: function(tree) {
      this.visitAny(tree.lvalue);
    },
    visitBindingIdentifier: function(tree) {
      this.bindings.push(tree);
    },
    visitBindingElement: function(tree) {
      this.visitAny(tree.binding);
    }
  }, {}, $__super);
}(ParseTreeVisitor);
var DeclarationExtractionTransformer = function($__super) {
  function DeclarationExtractionTransformer() {
    $traceurRuntime.superConstructor(DeclarationExtractionTransformer).call(this);
    this.declarations_ = [];
  }
  return ($traceurRuntime.createClass)(DeclarationExtractionTransformer, {
    getDeclarationStatements: function() {
      return $traceurRuntime.spread([this.getVariableStatement()], this.declarations_);
    },
    addDeclaration: function(tree) {
      this.declarations_.push(tree);
    },
    transformFunctionDeclaration: function(tree) {
      this.addDeclaration(tree);
      return new AnonBlock(null, []);
    },
    transformClassDeclaration: function(tree) {
      this.addVariable(tree.name.identifierToken.value);
      tree = new ClassExpression(tree.location, tree.name, tree.superClass, tree.elements, tree.annotations, tree.typeParameters);
      return parseStatement($traceurRuntime.getTemplateObject(["", " = ", ""]), tree.name.identifierToken, tree);
    }
  }, {}, $__super);
}(HoistVariablesTransformer);
var InsertBindingAssignmentTransformer = function($__super) {
  function InsertBindingAssignmentTransformer(exportName, bindingName) {
    $traceurRuntime.superConstructor(InsertBindingAssignmentTransformer).call(this, bindingName);
    this.bindingName_ = bindingName;
    this.exportName_ = exportName;
  }
  return ($traceurRuntime.createClass)(InsertBindingAssignmentTransformer, {
    matchesBindingName_: function(binding) {
      return binding.type === IDENTIFIER_EXPRESSION && binding.identifierToken.value === this.bindingName_;
    },
    transformUnaryExpression: function(tree) {
      if (!this.matchesBindingName_(tree.operand))
        return $traceurRuntime.superGet(this, InsertBindingAssignmentTransformer.prototype, "transformUnaryExpression").call(this, tree);
      var operatorType = tree.operator.type;
      if (operatorType !== PLUS_PLUS && operatorType !== MINUS_MINUS)
        return $traceurRuntime.superGet(this, InsertBindingAssignmentTransformer.prototype, "transformUnaryExpression").call(this, tree);
      var operand = this.transformAny(tree.operand);
      if (operand !== tree.operand)
        tree = new UnaryExpression(tree.location, tree.operator, operand);
      return parseExpression($traceurRuntime.getTemplateObject(["$__export(", ", ", ")"]), this.exportName_, tree);
    },
    transformPostfixExpression: function(tree) {
      tree = $traceurRuntime.superGet(this, InsertBindingAssignmentTransformer.prototype, "transformPostfixExpression").call(this, tree);
      if (!this.matchesBindingName_(tree.operand))
        return tree;
      switch (tree.operator.type) {
        case PLUS_PLUS:
          return parseExpression($traceurRuntime.getTemplateObject(["($__export(", ", ", " + 1), ", ")"]), this.exportName_, tree.operand, tree);
        case MINUS_MINUS:
          return parseExpression($traceurRuntime.getTemplateObject(["($__export(", ", ", " - 1), ", ")"]), this.exportName_, tree.operand, tree);
      }
      return tree;
    },
    transformBinaryExpression: function(tree) {
      tree = $traceurRuntime.superGet(this, InsertBindingAssignmentTransformer.prototype, "transformBinaryExpression").call(this, tree);
      if (!tree.operator.isAssignmentOperator())
        return tree;
      if (!this.matchesBindingName_(tree.left))
        return tree;
      return parseExpression($traceurRuntime.getTemplateObject(["$__export(", ", ", ")}"]), this.exportName_, tree);
    }
  }, {}, $__super);
}(ScopeTransformer);
var InstantiateModuleTransformer = function($__super) {
  function InstantiateModuleTransformer(identifierGenerator, reporter) {
    var options = arguments[2];
    $traceurRuntime.superConstructor(InstantiateModuleTransformer).call(this, identifierGenerator, reporter, options);
    this.anonymousModule = options && !options.bundle && options.moduleName !== true;
    this.inExport_ = false;
    this.curDepIndex_ = null;
    this.dependencies = [];
    this.externalExportBindings = [];
    this.importBindings = [];
    this.localExportBindings = [];
    this.functionDeclarations = [];
    this.moduleBindings = [];
    this.exportStarBindings = [];
  }
  return ($traceurRuntime.createClass)(InstantiateModuleTransformer, {
    getModuleName: function(tree) {
      if (this.anonymousModule)
        return null;
      return tree.moduleName;
    },
    moduleProlog: function() {
      return [];
    },
    wrapModule: function(statements) {
      var prolog = $traceurRuntime.superGet(this, InstantiateModuleTransformer.prototype, "moduleProlog").call(this);
      statements = prolog.concat(statements);
      if (this.moduleName) {
        return parseStatements($traceurRuntime.getTemplateObject(["System.register(", ",\n          ", ", function($__export) {\n            ", "\n          });"]), this.moduleName, this.dependencies, statements);
      } else {
        return parseStatements($traceurRuntime.getTemplateObject(["System.register(", ", function($__export) {\n          ", "\n        });"]), this.dependencies, statements);
      }
    },
    appendExportStatement: function(statements) {
      var $__9 = this;
      var declarationExtractionTransformer = new DeclarationExtractionTransformer();
      this.localExportBindings.forEach(function(binding) {
        statements = new InsertBindingAssignmentTransformer(binding.exportName, binding.localName).transformList(statements);
      });
      var executionStatements = statements.map(function(statement) {
        return declarationExtractionTransformer.transformAny(statement);
      });
      var executionFunction = createFunctionExpression(createEmptyParameterList(), createFunctionBody(executionStatements));
      var declarationStatements = declarationExtractionTransformer.getDeclarationStatements();
      var setterFunctions = this.dependencies.map(function(dep, index) {
        var importBindings = $__9.importBindings[index];
        var externalExportBindings = $__9.externalExportBindings[index];
        var exportStarBinding = $__9.exportStarBindings[index];
        var moduleBinding = $__9.moduleBindings[index];
        var setterStatements = [];
        if (importBindings) {
          importBindings.forEach(function(binding) {
            setterStatements.push(parseStatement($traceurRuntime.getTemplateObject(["", " = $__m.", ";"]), id(binding.variableName), binding.exportName));
          });
        }
        if (externalExportBindings) {
          externalExportBindings.forEach(function($__11) {
            var $__12 = $__11,
                exportName = $__12.exportName,
                importName = $__12.importName;
            var statement = importName === null ? parseStatement($traceurRuntime.getTemplateObject(["$__export(", ", $__m);"]), exportName) : parseStatement($traceurRuntime.getTemplateObject(["$__export(", ", $__m.", ");"]), exportName, importName);
            setterStatements.push(statement);
          });
        }
        if (moduleBinding) {
          setterStatements.push(parseStatement($traceurRuntime.getTemplateObject(["", " = $__m;"]), id(moduleBinding)));
        }
        if (exportStarBinding) {
          setterStatements = setterStatements.concat(parseStatements($traceurRuntime.getTemplateObject(["\n          Object.keys($__m).forEach(function(p) {\n            if (p !== 'default' && !$__exportNames[p])\n              $__export(p, $__m[p]);\n          });\n        "])));
          var exportNames = {};
          $__9.localExportBindings.concat($__9.externalExportBindings).forEach(function(binding) {
            exportNames[binding.exportName] = true;
          });
          declarationStatements.push(parseStatement($traceurRuntime.getTemplateObject(["\n          var $__exportNames = ", ";\n        "]), createObjectLiteral(exportNames)));
        }
        if (setterStatements.length) {
          return parseExpression($traceurRuntime.getTemplateObject(["function($__m) {\n          ", "\n        }"]), setterStatements);
        }
        return parseExpression($traceurRuntime.getTemplateObject(["function($__m) {}"]));
      });
      declarationStatements = declarationStatements.concat(this.functionDeclarations.map(function(binding) {
        return parseStatement($traceurRuntime.getTemplateObject(["$__export(", ", ", ")"]), binding.exportName, id(binding.functionName));
      }));
      declarationStatements.push(parseStatement($traceurRuntime.getTemplateObject(["return {\n      setters: ", ",\n      execute: ", "\n    }"]), new ArrayLiteralExpression(null, setterFunctions), executionFunction));
      return declarationStatements;
    },
    addLocalExportBinding: function(exportName) {
      var localName = arguments[1] !== (void 0) ? arguments[1] : exportName;
      this.localExportBindings.push({
        exportName: exportName,
        localName: localName
      });
    },
    addImportBinding: function(depIndex, variableName, exportName) {
      this.importBindings[depIndex] = this.importBindings[depIndex] || [];
      this.importBindings[depIndex].push({
        variableName: variableName,
        exportName: exportName
      });
    },
    addExternalExportBinding: function(depIndex, exportName, importName) {
      this.externalExportBindings[depIndex] = this.externalExportBindings[depIndex] || [];
      this.externalExportBindings[depIndex].push({
        exportName: exportName,
        importName: importName
      });
    },
    addExportStarBinding: function(depIndex) {
      this.exportStarBindings[depIndex] = true;
    },
    addModuleBinding: function(depIndex, variableName) {
      this.moduleBindings[depIndex] = variableName;
    },
    addExportFunction: function(exportName) {
      var functionName = arguments[1] !== (void 0) ? arguments[1] : exportName;
      this.functionDeclarations.push({
        exportName: exportName,
        functionName: functionName
      });
    },
    getOrCreateDependencyIndex: function(moduleSpecifier) {
      var name = moduleSpecifier.token.processedValue;
      var depIndex = this.dependencies.indexOf(name);
      if (depIndex === -1) {
        depIndex = this.dependencies.length;
        this.dependencies.push(name);
      }
      return depIndex;
    },
    transformExportDeclaration: function(tree) {
      this.inExport_ = true;
      if (tree.declaration.moduleSpecifier) {
        this.curDepIndex_ = this.getOrCreateDependencyIndex(tree.declaration.moduleSpecifier);
      } else {
        this.curDepIndex_ = null;
      }
      var transformed = this.transformAny(tree.declaration);
      this.inExport_ = false;
      return transformed;
    },
    transformVariableStatement: function(tree) {
      if (!this.inExport_)
        return $traceurRuntime.superGet(this, InstantiateModuleTransformer.prototype, "transformVariableStatement").call(this, tree);
      this.inExport_ = false;
      var bindingVisitor = new ExportBindingsVisitor();
      bindingVisitor.visitAny(tree);
      var statements = [];
      for (var i = 0; i < bindingVisitor.bindings.length; i++) {
        var identifierToken = bindingVisitor.bindings[i].identifierToken;
        var name = identifierToken.value;
        this.addLocalExportBinding(name);
        statements.push(parseStatement($traceurRuntime.getTemplateObject(["$__export(", ", ", ")"]), name, id(identifierToken)));
      }
      statements.unshift($traceurRuntime.superGet(this, InstantiateModuleTransformer.prototype, "transformAny").call(this, tree));
      return new AnonBlock(null, statements);
    },
    transformExportStar: function(tree) {
      this.inExport_ = false;
      this.addExportStarBinding(this.curDepIndex_);
      return new AnonBlock(null, []);
    },
    transformClassDeclaration: function(tree) {
      if (!this.inExport_)
        return $traceurRuntime.superGet(this, InstantiateModuleTransformer.prototype, "transformClassDeclaration").call(this, tree);
      this.inExport_ = false;
      var identifierToken = tree.name.identifierToken;
      var name = identifierToken.value;
      this.addLocalExportBinding(name);
      var statements = [$traceurRuntime.superGet(this, InstantiateModuleTransformer.prototype, "transformClassDeclaration").call(this, tree), parseStatement($traceurRuntime.getTemplateObject(["$__export(", ", ", ")"]), name, id(identifierToken))];
      return new AnonBlock(null, statements);
    },
    transformFunctionDeclaration: function(tree) {
      if (this.inExport_) {
        var name = tree.name.getStringValue();
        this.addLocalExportBinding(name);
        this.addExportFunction(name);
        this.inExport_ = false;
      }
      return $traceurRuntime.superGet(this, InstantiateModuleTransformer.prototype, "transformFunctionDeclaration").call(this, tree);
    },
    transformNamedExport: function(tree) {
      this.transformAny(tree.moduleSpecifier);
      var exportClause = this.transformAny(tree.exportClause);
      if (this.curDepIndex_ === null) {
        return exportClause;
      }
      return new AnonBlock(null, []);
    },
    transformImportDeclaration: function(tree) {
      this.curDepIndex_ = this.getOrCreateDependencyIndex(tree.moduleSpecifier);
      var initializer = this.transformAny(tree.moduleSpecifier);
      if (!tree.importClause) {
        return new AnonBlock(null, []);
      }
      var importClause = this.transformAny(tree.importClause);
      if (tree.importClause.type === NAME_SPACE_IMPORT) {
        var bindingIdentifier = tree.importClause.binding.binding;
        var name = bindingIdentifier.getStringValue();
        this.addModuleBinding(this.curDepIndex_, name);
        return parseStatement($traceurRuntime.getTemplateObject(["var ", ";"]), bindingIdentifier);
      }
      if (tree.importClause.type === IMPORT_SPECIFIER_SET) {
        return importClause;
      }
      var bindingName = tree.importClause.binding.getStringValue();
      this.addImportBinding(this.curDepIndex_, bindingName, 'default');
      return parseStatement($traceurRuntime.getTemplateObject(["var ", ";"]), bindingName);
    },
    transformImportSpecifierSet: function(tree) {
      return createVariableStatement(createVariableDeclarationList(VAR, this.transformList(tree.specifiers)));
    },
    transformExportDefault: function(tree) {
      this.inExport_ = false;
      var expression = this.transformAny(tree.expression);
      this.addLocalExportBinding('default');
      if (expression.type === CLASS_DECLARATION) {
        expression = new ClassExpression(expression.location, expression.name, expression.superClass, expression.elements, expression.annotations, expression.typeParameters);
      }
      if (expression.type === FUNCTION_DECLARATION) {
        this.addExportFunction('default', expression.name.identifierToken.value);
        return expression;
      } else {
        return parseStatement($traceurRuntime.getTemplateObject(["$__export('default', ", ");"]), expression);
      }
    },
    transformExportSpecifier: function(tree) {
      var exportName;
      var bindingName;
      if (tree.rhs) {
        exportName = tree.rhs.value;
        bindingName = tree.lhs.value;
      } else {
        exportName = tree.lhs.value;
        bindingName = exportName;
      }
      if (this.curDepIndex_ !== null) {
        this.addExternalExportBinding(this.curDepIndex_, exportName, bindingName);
      } else {
        this.addLocalExportBinding(exportName, bindingName);
        return parseExpression($traceurRuntime.getTemplateObject(["$__export(", ", ", ");"]), exportName, id(bindingName));
      }
    },
    transformExportSpecifierSet: function(tree) {
      var specifiers = this.transformList(tree.specifiers);
      return new ExpressionStatement(tree.location, new CommaExpression(tree.location, specifiers.filter(function(specifier) {
        return specifier;
      })));
    },
    transformNameSpaceExport: function(tree) {
      this.addExternalExportBinding(this.curDepIndex_, tree.name.value, null);
      return tree;
    },
    transformForwardDefaultExport: function(tree) {
      this.addExternalExportBinding(this.curDepIndex_, tree.name.value, 'default');
      return tree;
    },
    transformImportSpecifier: function(tree) {
      var localBinding = tree.binding.binding;
      var localBindingToken = localBinding.identifierToken;
      var importName = (tree.name || localBindingToken).value;
      this.addImportBinding(this.curDepIndex_, localBindingToken.value, importName);
      return new VariableDeclaration(tree.location, localBinding, null, null);
    },
    transformModuleSpecifier: function(tree) {
      this.curDepIndex_ = this.getOrCreateDependencyIndex(tree);
      return tree;
    }
  }, {}, $__super);
}(ModuleTransformer);
Object.defineProperties(module.exports, {
  InstantiateModuleTransformer: {get: function() {
      return InstantiateModuleTransformer;
    }},
  __esModule: {value: true}
});
