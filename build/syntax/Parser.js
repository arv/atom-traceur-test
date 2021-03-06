"use strict";
var $___46__46__47_codegeneration_47_FindVisitor_46_js__,
    $__IdentifierToken_46_js__,
    $__trees_47_ParseTreeType_46_js__,
    $___46__46__47_Options_46_js__,
    $__PredefinedName_46_js__,
    $___46__46__47_util_47_SyntaxErrorReporter_46_js__,
    $__Scanner_46_js__,
    $___46__46__47_util_47_SourceRange_46_js__,
    $__Token_46_js__,
    $__Keywords_46_js__,
    $___46__46__47_semantics_47_ConstructorValidator_46_js__,
    $___46__46__47_staticsemantics_47_validateParameters_46_js__,
    $__TokenType_46_js__,
    $__trees_47_ParseTrees_46_js__;
var FindVisitor = ($___46__46__47_codegeneration_47_FindVisitor_46_js__ = require("../codegeneration/FindVisitor.js"), $___46__46__47_codegeneration_47_FindVisitor_46_js__ && $___46__46__47_codegeneration_47_FindVisitor_46_js__.__esModule && $___46__46__47_codegeneration_47_FindVisitor_46_js__ || {default: $___46__46__47_codegeneration_47_FindVisitor_46_js__}).FindVisitor;
var IdentifierToken = ($__IdentifierToken_46_js__ = require("./IdentifierToken.js"), $__IdentifierToken_46_js__ && $__IdentifierToken_46_js__.__esModule && $__IdentifierToken_46_js__ || {default: $__IdentifierToken_46_js__}).IdentifierToken;
var $__2 = ($__trees_47_ParseTreeType_46_js__ = require("./trees/ParseTreeType.js"), $__trees_47_ParseTreeType_46_js__ && $__trees_47_ParseTreeType_46_js__.__esModule && $__trees_47_ParseTreeType_46_js__ || {default: $__trees_47_ParseTreeType_46_js__}),
    ARRAY_LITERAL_EXPRESSION = $__2.ARRAY_LITERAL_EXPRESSION,
    BINDING_IDENTIFIER = $__2.BINDING_IDENTIFIER,
    CALL_EXPRESSION = $__2.CALL_EXPRESSION,
    COMPUTED_PROPERTY_NAME = $__2.COMPUTED_PROPERTY_NAME,
    COVER_FORMALS = $__2.COVER_FORMALS,
    FORMAL_PARAMETER_LIST = $__2.FORMAL_PARAMETER_LIST,
    IDENTIFIER_EXPRESSION = $__2.IDENTIFIER_EXPRESSION,
    LITERAL_PROPERTY_NAME = $__2.LITERAL_PROPERTY_NAME,
    OBJECT_LITERAL_EXPRESSION = $__2.OBJECT_LITERAL_EXPRESSION,
    REST_PARAMETER = $__2.REST_PARAMETER,
    SYNTAX_ERROR_TREE = $__2.SYNTAX_ERROR_TREE;
var Options = ($___46__46__47_Options_46_js__ = require("../Options.js"), $___46__46__47_Options_46_js__ && $___46__46__47_Options_46_js__.__esModule && $___46__46__47_Options_46_js__ || {default: $___46__46__47_Options_46_js__}).Options;
var $__4 = ($__PredefinedName_46_js__ = require("./PredefinedName.js"), $__PredefinedName_46_js__ && $__PredefinedName_46_js__.__esModule && $__PredefinedName_46_js__ || {default: $__PredefinedName_46_js__}),
    AS = $__4.AS,
    ASYNC = $__4.ASYNC,
    ASYNC_STAR = $__4.ASYNC_STAR,
    AWAIT = $__4.AWAIT,
    CONSTRUCTOR = $__4.CONSTRUCTOR,
    FROM = $__4.FROM,
    GET = $__4.GET,
    OF = $__4.OF,
    ON = $__4.ON,
    SET = $__4.SET;
var SyntaxErrorReporter = ($___46__46__47_util_47_SyntaxErrorReporter_46_js__ = require("../util/SyntaxErrorReporter.js"), $___46__46__47_util_47_SyntaxErrorReporter_46_js__ && $___46__46__47_util_47_SyntaxErrorReporter_46_js__.__esModule && $___46__46__47_util_47_SyntaxErrorReporter_46_js__ || {default: $___46__46__47_util_47_SyntaxErrorReporter_46_js__}).SyntaxErrorReporter;
var $__6 = ($__Scanner_46_js__ = require("./Scanner.js"), $__Scanner_46_js__ && $__Scanner_46_js__.__esModule && $__Scanner_46_js__ || {default: $__Scanner_46_js__}),
    getLastToken = $__6.getLastToken,
    getPosition = $__6.getPosition,
    initScanner = $__6.init,
    isAtEnd = $__6.isAtEnd,
    nextCloseAngle = $__6.nextCloseAngle,
    nextRegularExpressionLiteralToken = $__6.nextRegularExpressionLiteralToken,
    nextTemplateLiteralToken = $__6.nextTemplateLiteralToken,
    nextToken = $__6.nextToken,
    peek = $__6.peek,
    peekLookahead = $__6.peekLookahead,
    peekToken = $__6.peekToken,
    peekTokenLookahead = $__6.peekTokenLookahead,
    peekTokenNoLineTerminator = $__6.peekTokenNoLineTerminator,
    peekType = $__6.peekType,
    resetScanner = $__6.setIndex;
var SourceRange = ($___46__46__47_util_47_SourceRange_46_js__ = require("../util/SourceRange.js"), $___46__46__47_util_47_SourceRange_46_js__ && $___46__46__47_util_47_SourceRange_46_js__.__esModule && $___46__46__47_util_47_SourceRange_46_js__ || {default: $___46__46__47_util_47_SourceRange_46_js__}).SourceRange;
var $__8 = ($__Token_46_js__ = require("./Token.js"), $__Token_46_js__ && $__Token_46_js__.__esModule && $__Token_46_js__ || {default: $__Token_46_js__}),
    Token = $__8.Token,
    isAssignmentOperator = $__8.isAssignmentOperator;
var getKeywordType = ($__Keywords_46_js__ = require("./Keywords.js"), $__Keywords_46_js__ && $__Keywords_46_js__.__esModule && $__Keywords_46_js__ || {default: $__Keywords_46_js__}).getKeywordType;
var validateConstructor = ($___46__46__47_semantics_47_ConstructorValidator_46_js__ = require("../semantics/ConstructorValidator.js"), $___46__46__47_semantics_47_ConstructorValidator_46_js__ && $___46__46__47_semantics_47_ConstructorValidator_46_js__.__esModule && $___46__46__47_semantics_47_ConstructorValidator_46_js__ || {default: $___46__46__47_semantics_47_ConstructorValidator_46_js__}).validateConstructor;
var validateParameters = ($___46__46__47_staticsemantics_47_validateParameters_46_js__ = require("../staticsemantics/validateParameters.js"), $___46__46__47_staticsemantics_47_validateParameters_46_js__ && $___46__46__47_staticsemantics_47_validateParameters_46_js__.__esModule && $___46__46__47_staticsemantics_47_validateParameters_46_js__ || {default: $___46__46__47_staticsemantics_47_validateParameters_46_js__}).default;
var $__12 = ($__TokenType_46_js__ = require("./TokenType.js"), $__TokenType_46_js__ && $__TokenType_46_js__.__esModule && $__TokenType_46_js__ || {default: $__TokenType_46_js__}),
    AMPERSAND = $__12.AMPERSAND,
    AND = $__12.AND,
    ARROW = $__12.ARROW,
    AT = $__12.AT,
    BANG = $__12.BANG,
    BAR = $__12.BAR,
    BREAK = $__12.BREAK,
    CARET = $__12.CARET,
    CASE = $__12.CASE,
    CATCH = $__12.CATCH,
    CLASS = $__12.CLASS,
    CLOSE_ANGLE = $__12.CLOSE_ANGLE,
    CLOSE_CURLY = $__12.CLOSE_CURLY,
    CLOSE_PAREN = $__12.CLOSE_PAREN,
    CLOSE_SQUARE = $__12.CLOSE_SQUARE,
    COLON = $__12.COLON,
    COMMA = $__12.COMMA,
    CONST = $__12.CONST,
    CONTINUE = $__12.CONTINUE,
    DEBUGGER = $__12.DEBUGGER,
    DEFAULT = $__12.DEFAULT,
    DELETE = $__12.DELETE,
    DO = $__12.DO,
    DOT_DOT_DOT = $__12.DOT_DOT_DOT,
    ELSE = $__12.ELSE,
    END_OF_FILE = $__12.END_OF_FILE,
    EQUAL = $__12.EQUAL,
    EQUAL_EQUAL = $__12.EQUAL_EQUAL,
    EQUAL_EQUAL_EQUAL = $__12.EQUAL_EQUAL_EQUAL,
    ERROR = $__12.ERROR,
    EXPORT = $__12.EXPORT,
    EXTENDS = $__12.EXTENDS,
    FALSE = $__12.FALSE,
    FINALLY = $__12.FINALLY,
    FOR = $__12.FOR,
    FUNCTION = $__12.FUNCTION,
    GREATER_EQUAL = $__12.GREATER_EQUAL,
    IDENTIFIER = $__12.IDENTIFIER,
    IF = $__12.IF,
    IMPLEMENTS = $__12.IMPLEMENTS,
    IMPORT = $__12.IMPORT,
    IN = $__12.IN,
    INSTANCEOF = $__12.INSTANCEOF,
    INTERFACE = $__12.INTERFACE,
    LEFT_SHIFT = $__12.LEFT_SHIFT,
    LESS_EQUAL = $__12.LESS_EQUAL,
    LET = $__12.LET,
    MINUS = $__12.MINUS,
    MINUS_MINUS = $__12.MINUS_MINUS,
    NEW = $__12.NEW,
    NO_SUBSTITUTION_TEMPLATE = $__12.NO_SUBSTITUTION_TEMPLATE,
    NOT_EQUAL = $__12.NOT_EQUAL,
    NOT_EQUAL_EQUAL = $__12.NOT_EQUAL_EQUAL,
    NULL = $__12.NULL,
    NUMBER = $__12.NUMBER,
    OPEN_ANGLE = $__12.OPEN_ANGLE,
    OPEN_CURLY = $__12.OPEN_CURLY,
    OPEN_PAREN = $__12.OPEN_PAREN,
    OPEN_SQUARE = $__12.OPEN_SQUARE,
    OR = $__12.OR,
    PACKAGE = $__12.PACKAGE,
    PERCENT = $__12.PERCENT,
    PERIOD = $__12.PERIOD,
    PLUS = $__12.PLUS,
    PLUS_PLUS = $__12.PLUS_PLUS,
    PRIVATE = $__12.PRIVATE,
    PROTECTED = $__12.PROTECTED,
    PUBLIC = $__12.PUBLIC,
    QUESTION = $__12.QUESTION,
    RETURN = $__12.RETURN,
    RIGHT_SHIFT = $__12.RIGHT_SHIFT,
    SEMI_COLON = $__12.SEMI_COLON,
    SLASH = $__12.SLASH,
    SLASH_EQUAL = $__12.SLASH_EQUAL,
    STAR = $__12.STAR,
    STAR_STAR = $__12.STAR_STAR,
    STATIC = $__12.STATIC,
    STRING = $__12.STRING,
    SUPER = $__12.SUPER,
    SWITCH = $__12.SWITCH,
    TEMPLATE_HEAD = $__12.TEMPLATE_HEAD,
    TEMPLATE_TAIL = $__12.TEMPLATE_TAIL,
    THIS = $__12.THIS,
    THROW = $__12.THROW,
    TILDE = $__12.TILDE,
    TRUE = $__12.TRUE,
    TRY = $__12.TRY,
    TYPEOF = $__12.TYPEOF,
    UNSIGNED_RIGHT_SHIFT = $__12.UNSIGNED_RIGHT_SHIFT,
    VAR = $__12.VAR,
    VOID = $__12.VOID,
    WHILE = $__12.WHILE,
    WITH = $__12.WITH,
    YIELD = $__12.YIELD;
var $__13 = ($__trees_47_ParseTrees_46_js__ = require("./trees/ParseTrees.js"), $__trees_47_ParseTrees_46_js__ && $__trees_47_ParseTrees_46_js__.__esModule && $__trees_47_ParseTrees_46_js__ || {default: $__trees_47_ParseTrees_46_js__}),
    ArgumentList = $__13.ArgumentList,
    ArrayComprehension = $__13.ArrayComprehension,
    ArrayLiteralExpression = $__13.ArrayLiteralExpression,
    ArrayPattern = $__13.ArrayPattern,
    ArrayType = $__13.ArrayType,
    ArrowFunctionExpression = $__13.ArrowFunctionExpression,
    AssignmentElement = $__13.AssignmentElement,
    AwaitExpression = $__13.AwaitExpression,
    BinaryExpression = $__13.BinaryExpression,
    BindingElement = $__13.BindingElement,
    BindingIdentifier = $__13.BindingIdentifier,
    Block = $__13.Block,
    BreakStatement = $__13.BreakStatement,
    CallExpression = $__13.CallExpression,
    CallSignature = $__13.CallSignature,
    CaseClause = $__13.CaseClause,
    Catch = $__13.Catch,
    ClassDeclaration = $__13.ClassDeclaration,
    ClassExpression = $__13.ClassExpression,
    CommaExpression = $__13.CommaExpression,
    ComprehensionFor = $__13.ComprehensionFor,
    ComprehensionIf = $__13.ComprehensionIf,
    ComputedPropertyName = $__13.ComputedPropertyName,
    ConditionalExpression = $__13.ConditionalExpression,
    ConstructSignature = $__13.ConstructSignature,
    ConstructorType = $__13.ConstructorType,
    ContinueStatement = $__13.ContinueStatement,
    CoverFormals = $__13.CoverFormals,
    CoverInitializedName = $__13.CoverInitializedName,
    DebuggerStatement = $__13.DebuggerStatement,
    Annotation = $__13.Annotation,
    DefaultClause = $__13.DefaultClause,
    DoWhileStatement = $__13.DoWhileStatement,
    EmptyStatement = $__13.EmptyStatement,
    ExportDeclaration = $__13.ExportDeclaration,
    ExportDefault = $__13.ExportDefault,
    ExportSpecifier = $__13.ExportSpecifier,
    ExportSpecifierSet = $__13.ExportSpecifierSet,
    ExportStar = $__13.ExportStar,
    ExpressionStatement = $__13.ExpressionStatement,
    Finally = $__13.Finally,
    ForInStatement = $__13.ForInStatement,
    ForOfStatement = $__13.ForOfStatement,
    ForOnStatement = $__13.ForOnStatement,
    ForStatement = $__13.ForStatement,
    FormalParameter = $__13.FormalParameter,
    FormalParameterList = $__13.FormalParameterList,
    ForwardDefaultExport = $__13.ForwardDefaultExport,
    FunctionBody = $__13.FunctionBody,
    FunctionDeclaration = $__13.FunctionDeclaration,
    FunctionExpression = $__13.FunctionExpression,
    FunctionType = $__13.FunctionType,
    GeneratorComprehension = $__13.GeneratorComprehension,
    GetAccessor = $__13.GetAccessor,
    IdentifierExpression = $__13.IdentifierExpression,
    IfStatement = $__13.IfStatement,
    ImportClausePair = $__13.ImportClausePair,
    ImportDeclaration = $__13.ImportDeclaration,
    ImportSpecifier = $__13.ImportSpecifier,
    ImportSpecifierSet = $__13.ImportSpecifierSet,
    ImportedBinding = $__13.ImportedBinding,
    IndexSignature = $__13.IndexSignature,
    InterfaceDeclaration = $__13.InterfaceDeclaration,
    LabelledStatement = $__13.LabelledStatement,
    LiteralExpression = $__13.LiteralExpression,
    LiteralPropertyName = $__13.LiteralPropertyName,
    MemberExpression = $__13.MemberExpression,
    MemberLookupExpression = $__13.MemberLookupExpression,
    MethodSignature = $__13.MethodSignature,
    Module = $__13.Module,
    ModuleSpecifier = $__13.ModuleSpecifier,
    NameSpaceExport = $__13.NameSpaceExport,
    NameSpaceImport = $__13.NameSpaceImport,
    NamedExport = $__13.NamedExport,
    NewExpression = $__13.NewExpression,
    ObjectLiteralExpression = $__13.ObjectLiteralExpression,
    ObjectPattern = $__13.ObjectPattern,
    ObjectPatternField = $__13.ObjectPatternField,
    ObjectType = $__13.ObjectType,
    ParenExpression = $__13.ParenExpression,
    PostfixExpression = $__13.PostfixExpression,
    PredefinedType = $__13.PredefinedType,
    PropertyMethodAssignment = $__13.PropertyMethodAssignment,
    PropertyNameAssignment = $__13.PropertyNameAssignment,
    PropertyNameShorthand = $__13.PropertyNameShorthand,
    PropertySignature = $__13.PropertySignature,
    PropertyVariableDeclaration = $__13.PropertyVariableDeclaration,
    RestParameter = $__13.RestParameter,
    ReturnStatement = $__13.ReturnStatement,
    Script = $__13.Script,
    SetAccessor = $__13.SetAccessor,
    SpreadExpression = $__13.SpreadExpression,
    SpreadPatternElement = $__13.SpreadPatternElement,
    SuperExpression = $__13.SuperExpression,
    SwitchStatement = $__13.SwitchStatement,
    SyntaxErrorTree = $__13.SyntaxErrorTree,
    TemplateLiteralExpression = $__13.TemplateLiteralExpression,
    TemplateLiteralPortion = $__13.TemplateLiteralPortion,
    TemplateSubstitution = $__13.TemplateSubstitution,
    ThisExpression = $__13.ThisExpression,
    ThrowStatement = $__13.ThrowStatement,
    TryStatement = $__13.TryStatement,
    TypeArguments = $__13.TypeArguments,
    TypeName = $__13.TypeName,
    TypeParameter = $__13.TypeParameter,
    TypeParameters = $__13.TypeParameters,
    TypeReference = $__13.TypeReference,
    UnaryExpression = $__13.UnaryExpression,
    UnionType = $__13.UnionType,
    VariableDeclaration = $__13.VariableDeclaration,
    VariableDeclarationList = $__13.VariableDeclarationList,
    VariableStatement = $__13.VariableStatement,
    WhileStatement = $__13.WhileStatement,
    WithStatement = $__13.WithStatement,
    YieldExpression = $__13.YieldExpression;
var ALLOW_IN = true;
var NO_IN = false;
var INITIALIZER_REQUIRED = true;
var INITIALIZER_OPTIONAL = false;
var ValidateObjectLiteral = function($__super) {
  function ValidateObjectLiteral() {
    $traceurRuntime.superConstructor(ValidateObjectLiteral).call(this);
    this.errorToken = null;
  }
  return ($traceurRuntime.createClass)(ValidateObjectLiteral, {visitCoverInitializedName: function(tree) {
      this.errorToken = tree.equalToken;
      this.found = true;
    }}, {}, $__super);
}(FindVisitor);
function containsInitializer(declarations) {
  return declarations.some(function(v) {
    return v.initializer;
  });
}
var FUNCTION_STATE_SCRIPT = 1;
var FUNCTION_STATE_MODULE = 1 << 1;
var FUNCTION_STATE_FUNCTION = 1 << 2;
var FUNCTION_STATE_ARROW = 1 << 3;
var FUNCTION_STATE_METHOD = 1 << 4;
var FUNCTION_STATE_DERIVED_CONSTRUCTOR = 1 << 5;
var FUNCTION_STATE_GENERATOR = 1 << 6;
var FUNCTION_STATE_ASYNC = 1 << 7;
var FUNCTION_STATE_LENIENT = FUNCTION_STATE_METHOD | FUNCTION_STATE_GENERATOR | FUNCTION_STATE_ASYNC | FUNCTION_STATE_DERIVED_CONSTRUCTOR;
var FunctionState = function() {
  function FunctionState(outer, kind) {
    this.outer = outer;
    this.kind = kind;
  }
  return ($traceurRuntime.createClass)(FunctionState, {
    isTopMost: function() {
      return this.kind & (FUNCTION_STATE_SCRIPT | FUNCTION_STATE_MODULE);
    },
    isMethod: function() {
      return this.kind & FUNCTION_STATE_METHOD;
    },
    isDerivedConstructor: function() {
      return this.kind & FUNCTION_STATE_DERIVED_CONSTRUCTOR;
    },
    isArrowFunction: function() {
      return this.kind & FUNCTION_STATE_ARROW;
    },
    isGenerator: function() {
      return this.kind & FUNCTION_STATE_GENERATOR;
    },
    isAsyncFunction: function() {
      return this.kind & FUNCTION_STATE_ASYNC;
    },
    isAsyncGenerator: function() {
      return this.isGenerator() && this.isAsyncFunction();
    }
  }, {});
}();
var Parser = function() {
  function Parser(file) {
    var errorReporter = arguments[1] !== (void 0) ? arguments[1] : new SyntaxErrorReporter();
    var options = arguments[2] !== (void 0) ? arguments[2] : new Options();
    this.errorReporter_ = errorReporter;
    initScanner(errorReporter, file, this, options);
    this.options_ = options;
    this.coverInitializedNameCount_ = 0;
    this.strictMode_ = false;
    this.annotations_ = [];
    this.functionState_ = null;
  }
  return ($traceurRuntime.createClass)(Parser, {
    get allowYield_() {
      return this.functionState_.isGenerator();
    },
    get allowAwait_() {
      return this.functionState_.isAsyncFunction();
    },
    get allowForOn_() {
      return this.functionState_.isAsyncFunction();
    },
    parseScript: function() {
      this.strictMode_ = false;
      var start = this.getTreeStartLocation_();
      var fs = this.pushFunctionState_(FUNCTION_STATE_SCRIPT);
      var scriptItemList = this.parseStatementList_(true);
      this.eat_(END_OF_FILE);
      this.popFunctionState_(fs);
      return new Script(this.getTreeLocation_(start), scriptItemList, null);
    },
    pushFunctionState_: function(kind) {
      return this.functionState_ = new FunctionState(this.functionState_, kind);
    },
    popFunctionState_: function(fs) {
      if (fs != this.functionState_) {
        throw new Error('Internal error');
      }
      this.functionState_ = this.functionState_.outer;
    },
    parseStatementList_: function(checkUseStrictDirective) {
      var result = [];
      var type;
      while ((type = peekType()) !== CLOSE_CURLY && type !== END_OF_FILE) {
        var statement = this.parseStatementListItem_(type);
        if (checkUseStrictDirective) {
          if (!statement.isDirectivePrologue()) {
            checkUseStrictDirective = false;
          } else if (statement.isUseStrictDirective()) {
            this.strictMode_ = true;
            checkUseStrictDirective = false;
          }
        }
        result.push(statement);
      }
      return result;
    },
    parseStatementListItem_: function(type) {
      switch (type) {
        case LET:
        case CONST:
          if (this.options_.blockBinding) {
            return this.parseVariableStatement_();
          }
          break;
        case CLASS:
          if (this.options_.classes) {
            return this.parseClassDeclaration_();
          }
          break;
        case FUNCTION:
          return this.parseFunctionDeclaration_();
      }
      return this.parseStatementWithType_(type);
    },
    parseModule: function() {
      var start = this.getTreeStartLocation_();
      var fs = this.pushFunctionState_(FUNCTION_STATE_MODULE);
      var scriptItemList = this.parseModuleItemList_();
      this.eat_(END_OF_FILE);
      this.popFunctionState_(fs);
      return new Module(this.getTreeLocation_(start), scriptItemList, null);
    },
    parseModuleItemList_: function() {
      this.strictMode_ = true;
      var result = [];
      var type;
      while ((type = peekType()) !== END_OF_FILE) {
        var statement = this.parseModuleItem_(type);
        result.push(statement);
      }
      return result;
    },
    parseModuleItem_: function(type) {
      switch (type) {
        case IMPORT:
          return this.parseImportDeclaration_();
        case EXPORT:
          return this.parseExportDeclaration_();
        case AT:
          if (this.options_.annotations)
            return this.parseAnnotatedDeclarations_(true);
          break;
      }
      return this.parseStatementListItem_(type);
    },
    parseModuleSpecifier_: function() {
      var start = this.getTreeStartLocation_();
      var token = this.eat_(STRING);
      return new ModuleSpecifier(this.getTreeLocation_(start), token);
    },
    parseNameSpaceImport_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(STAR);
      this.eatId_(AS);
      var binding = this.parseImportedBinding_();
      return new NameSpaceImport(this.getTreeLocation_(start), binding);
    },
    parseImportDeclaration_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(IMPORT);
      var importClause = null;
      if (!peek(STRING)) {
        importClause = this.parseImportClause_(true);
        this.eatId_(FROM);
      }
      var moduleSpecifier = this.parseModuleSpecifier_();
      this.eatPossibleImplicitSemiColon_();
      return new ImportDeclaration(this.getTreeLocation_(start), importClause, moduleSpecifier);
    },
    parseImportClause_: function(allowImportedDefaultBinding) {
      switch (peekType()) {
        case STAR:
          return this.parseNameSpaceImport_();
        case OPEN_CURLY:
          return this.parseImportSpecifierSet_();
        case IDENTIFIER:
          if (allowImportedDefaultBinding) {
            var start = this.getTreeStartLocation_();
            var importedBinding = this.parseImportedBinding_();
            if (this.eatIf_(COMMA)) {
              var second = this.parseImportClause_(false);
              return new ImportClausePair(this.getTreeLocation_(start), importedBinding, second);
            }
            return importedBinding;
          }
          break;
      }
      return this.parseUnexpectedToken_(peekToken());
    },
    parseImportSpecifierSet_: function() {
      var start = this.getTreeStartLocation_();
      var specifiers = [];
      this.eat_(OPEN_CURLY);
      while (!peek(CLOSE_CURLY) && !isAtEnd()) {
        specifiers.push(this.parseImportSpecifier_());
        if (!this.eatIf_(COMMA))
          break;
      }
      this.eat_(CLOSE_CURLY);
      return new ImportSpecifierSet(this.getTreeLocation_(start), specifiers);
    },
    parseImportedBinding_: function() {
      var start = this.getTreeStartLocation_();
      var binding = this.parseBindingIdentifier_();
      return new ImportedBinding(this.getTreeLocation_(start), binding);
    },
    parseImportSpecifier_: function() {
      var start = this.getTreeStartLocation_();
      var token = peekToken();
      var isKeyword = token.isKeyword();
      var binding;
      var name = this.eatIdName_();
      if (isKeyword || this.peekPredefinedString_(AS)) {
        this.eatId_(AS);
        binding = this.parseImportedBinding_();
      } else {
        binding = new ImportedBinding(name.location, new BindingIdentifier(name.location, name));
        name = null;
      }
      return new ImportSpecifier(this.getTreeLocation_(start), binding, name);
    },
    parseExportDeclaration_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(EXPORT);
      var exportTree;
      var annotations = this.popAnnotations_();
      var type = peekType();
      switch (type) {
        case CONST:
        case LET:
          if (this.options_.blockBinding) {
            exportTree = this.parseVariableStatement_();
            break;
          }
          return this.parseUnexpectedToken_(peekToken());
        case VAR:
          exportTree = this.parseVariableStatement_();
          break;
        case FUNCTION:
          exportTree = this.parseFunctionDeclaration_();
          break;
        case CLASS:
          exportTree = this.parseClassDeclaration_();
          break;
        case DEFAULT:
          exportTree = this.parseExportDefault_();
          break;
        case OPEN_CURLY:
        case STAR:
          exportTree = this.parseNamedExport_();
          break;
        case IDENTIFIER:
          if (this.options_.asyncFunctions && this.peekPredefinedString_(ASYNC)) {
            var asyncToken = this.eatId_();
            exportTree = this.parseAsyncFunctionDeclaration_(asyncToken);
          } else if (this.options_.exportFromExtended) {
            exportTree = this.parseNamedExport_();
          }
          break;
        default:
          return this.parseUnexpectedToken_(peekToken());
      }
      return new ExportDeclaration(this.getTreeLocation_(start), exportTree, annotations);
    },
    parseExportDefault_: function() {
      var start = this.getTreeStartLocation_();
      var defaultToken = this.eat_(DEFAULT);
      if (this.options_.exportFromExtended && this.peekPredefinedString_(FROM)) {
        var idName = new IdentifierToken(defaultToken.location, DEFAULT);
        var namedExport = new ForwardDefaultExport(this.getTreeLocation_(start), idName);
        this.eatId_(FROM);
        var moduleSpecifier = this.parseModuleSpecifier_();
        return new NamedExport(this.getTreeLocation_(start), namedExport, moduleSpecifier);
      }
      var exportValue;
      switch (peekType()) {
        case FUNCTION:
          {
            var tree = this.parseFunctionExpression_();
            if (tree.name) {
              tree = new FunctionDeclaration(tree.location, tree.name, tree.functionKind, tree.parameterList, tree.typeAnnotation, tree.annotations, tree.body);
            }
            exportValue = tree;
            break;
          }
        case CLASS:
          {
            if (!this.options_.classes) {
              return this.parseSyntaxError_('Unexpected reserved word');
            }
            var tree$__17 = this.parseClassExpression_();
            if (tree$__17.name) {
              tree$__17 = new ClassDeclaration(tree$__17.location, tree$__17.name, tree$__17.superClass, tree$__17.elements, tree$__17.annotations, tree$__17.typeParameters);
            }
            exportValue = tree$__17;
            break;
          }
        default:
          exportValue = this.parseAssignmentExpression_(ALLOW_IN);
          this.eatPossibleImplicitSemiColon_();
      }
      return new ExportDefault(this.getTreeLocation_(start), exportValue);
    },
    parseNamedExport_: function() {
      var start = this.getTreeStartLocation_();
      var exportClause,
          moduleSpecifier = null;
      switch (peekType()) {
        case OPEN_CURLY:
          exportClause = this.parseExportSpecifierSet_();
          if (this.peekPredefinedString_(FROM)) {
            this.eatId_(FROM);
            moduleSpecifier = this.parseModuleSpecifier_();
          } else {
            this.validateExportSpecifierSet_(exportClause);
          }
          break;
        case IDENTIFIER:
          exportClause = this.parseForwardDefaultExport_();
          this.eatId_(FROM);
          moduleSpecifier = this.parseModuleSpecifier_();
          break;
        case STAR:
          exportClause = this.parseExportStar_();
          this.eatId_(FROM);
          moduleSpecifier = this.parseModuleSpecifier_();
          break;
      }
      this.eatPossibleImplicitSemiColon_();
      return new NamedExport(this.getTreeLocation_(start), exportClause, moduleSpecifier);
    },
    parseExportStar_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(STAR);
      if (this.peekPredefinedString_(AS)) {
        this.eatId_(AS);
        var name = this.eatIdName_();
        return new NameSpaceExport(this.getTreeLocation_(start), name);
      }
      return new ExportStar(this.getTreeLocation_(start));
    },
    parseExportSpecifierSet_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(OPEN_CURLY);
      var specifiers = [this.parseExportSpecifier_()];
      while (this.eatIf_(COMMA)) {
        if (peek(CLOSE_CURLY))
          break;
        specifiers.push(this.parseExportSpecifier_());
      }
      this.eat_(CLOSE_CURLY);
      return new ExportSpecifierSet(this.getTreeLocation_(start), specifiers);
    },
    parseExportSpecifier_: function() {
      var start = this.getTreeStartLocation_();
      var lhs = this.eatIdName_();
      var rhs = null;
      if (this.peekPredefinedString_(AS)) {
        this.eatId_();
        rhs = this.eatIdName_();
      }
      return new ExportSpecifier(this.getTreeLocation_(start), lhs, rhs);
    },
    parseForwardDefaultExport_: function() {
      var start = this.getTreeStartLocation_();
      var idName = this.eatIdName_();
      return new ForwardDefaultExport(this.getTreeLocation_(start), idName);
    },
    validateExportSpecifierSet_: function(tree) {
      for (var i = 0; i < tree.specifiers.length; i++) {
        var specifier = tree.specifiers[i];
        if (getKeywordType(specifier.lhs.value)) {
          this.reportError_(specifier.lhs.location, ("Unexpected token " + specifier.lhs.value));
        }
      }
    },
    peekId_: function(type) {
      if (type === IDENTIFIER)
        return true;
      if (this.strictMode_)
        return false;
      return peekToken().isStrictKeyword();
    },
    peekIdName_: function(token) {
      return token.type === IDENTIFIER || token.isKeyword();
    },
    parseClassShared_: function(constr) {
      var start = this.getTreeStartLocation_();
      var strictMode = this.strictMode_;
      this.strictMode_ = true;
      this.eat_(CLASS);
      var name = null;
      var typeParameters = null;
      var annotations = [];
      if (constr === ClassDeclaration || !peek(EXTENDS) && !peek(OPEN_CURLY)) {
        name = this.parseBindingIdentifier_();
        if (this.options_.types) {
          typeParameters = this.parseTypeParametersOpt_();
        }
        annotations = this.popAnnotations_();
      }
      var superClass = null;
      if (this.eatIf_(EXTENDS)) {
        superClass = this.parseLeftHandSideExpression_();
        superClass = this.coverFormalsToParenExpression_(superClass);
      }
      this.eat_(OPEN_CURLY);
      var elements = this.parseClassElements_(superClass);
      this.eat_(CLOSE_CURLY);
      this.strictMode_ = strictMode;
      return new constr(this.getTreeLocation_(start), name, superClass, elements, annotations, typeParameters);
    },
    parseClassDeclaration_: function() {
      return this.parseClassShared_(ClassDeclaration);
    },
    parseClassExpression_: function() {
      return this.parseClassShared_(ClassExpression);
    },
    parseClassElements_: function(derivedClass) {
      var result = [];
      while (true) {
        var type = peekType();
        if (type === SEMI_COLON) {
          nextToken();
        } else if (this.peekClassElement_(peekType())) {
          result.push(this.parseClassElement_(derivedClass));
        } else {
          break;
        }
      }
      return result;
    },
    peekClassElement_: function(type) {
      return this.peekPropertyName_(type) || type === STAR && this.options_.generators || type === AT && this.options_.annotations;
    },
    parsePropertyName_: function() {
      if (peek(OPEN_SQUARE))
        return this.parseComputedPropertyName_();
      return this.parseLiteralPropertyName_();
    },
    parseLiteralPropertyName_: function() {
      var start = this.getTreeStartLocation_();
      var token = nextToken();
      return new LiteralPropertyName(this.getTreeLocation_(start), token);
    },
    parseComputedPropertyName_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(OPEN_SQUARE);
      var expression = this.parseAssignmentExpression_(ALLOW_IN);
      this.eat_(CLOSE_SQUARE);
      return new ComputedPropertyName(this.getTreeLocation_(start), expression);
    },
    parseStatement: function() {
      var fs = this.pushFunctionState_(FUNCTION_STATE_LENIENT);
      var result = this.parseModuleItem_(peekType());
      this.popFunctionState_(fs);
      return result;
    },
    parseStatements: function() {
      var fs = this.pushFunctionState_(FUNCTION_STATE_LENIENT);
      var result = this.parseModuleItemList_();
      this.popFunctionState_(fs);
      return result;
    },
    parseStatement_: function() {
      return this.parseStatementWithType_(peekType());
    },
    parseStatementWithType_: function(type) {
      switch (type) {
        case RETURN:
          return this.parseReturnStatement_();
        case VAR:
          return this.parseVariableStatement_();
        case IF:
          return this.parseIfStatement_();
        case FOR:
          return this.parseForStatement_();
        case BREAK:
          return this.parseBreakStatement_();
        case SWITCH:
          return this.parseSwitchStatement_();
        case THROW:
          return this.parseThrowStatement_();
        case WHILE:
          return this.parseWhileStatement_();
        case AT:
          if (this.options_.annotations)
            return this.parseAnnotatedDeclarations_(false);
          break;
        case CONTINUE:
          return this.parseContinueStatement_();
        case DEBUGGER:
          return this.parseDebuggerStatement_();
        case DO:
          return this.parseDoWhileStatement_();
        case OPEN_CURLY:
          return this.parseBlock_();
        case SEMI_COLON:
          return this.parseEmptyStatement_();
        case TRY:
          return this.parseTryStatement_();
        case WITH:
          return this.parseWithStatement_();
        case INTERFACE:
          if (this.options_.types) {
            return this.parseInterfaceDeclaration_();
          }
      }
      return this.parseFallThroughStatement_();
    },
    parseFunctionDeclaration_: function() {
      return this.parseFunction_(FunctionDeclaration);
    },
    parseFunctionExpression_: function() {
      return this.parseFunction_(FunctionExpression);
    },
    parseAsyncFunctionDeclaration_: function(asyncToken) {
      return this.parseAsyncFunction_(asyncToken, FunctionDeclaration);
    },
    parseAsyncFunctionExpression_: function(asyncToken) {
      return this.parseAsyncFunction_(asyncToken, FunctionExpression);
    },
    peekAsyncStar_: function() {
      return this.options_.asyncGenerators && peek(STAR);
    },
    parseAsyncFunction_: function(asyncToken, ctor) {
      var start = asyncToken.location.start;
      this.eat_(FUNCTION);
      var kind = FUNCTION_STATE_FUNCTION | FUNCTION_STATE_ASYNC;
      if (this.peekAsyncStar_()) {
        kind |= FUNCTION_STATE_GENERATOR;
        this.eat_(STAR);
        asyncToken = new IdentifierToken(asyncToken.location, ASYNC_STAR);
      }
      var fs = this.pushFunctionState_(kind);
      var f = this.parseFunction2_(start, asyncToken, ctor);
      this.popFunctionState_(fs);
      return f;
    },
    parseFunction_: function(ctor) {
      var start = this.getTreeStartLocation_();
      this.eat_(FUNCTION);
      var functionKind = null;
      var kind = FUNCTION_STATE_FUNCTION;
      if (this.options_.generators && peek(STAR)) {
        functionKind = this.eat_(STAR);
        kind |= FUNCTION_STATE_GENERATOR;
      }
      var fs = this.pushFunctionState_(kind);
      var f = this.parseFunction2_(start, functionKind, ctor);
      this.popFunctionState_(fs);
      return f;
    },
    parseFunction2_: function(start, functionKind, ctor) {
      var name = null;
      var annotations = [];
      if (ctor === FunctionDeclaration || this.peekBindingIdentifier_(peekType())) {
        name = this.parseBindingIdentifier_();
        annotations = this.popAnnotations_();
      }
      this.eat_(OPEN_PAREN);
      var parameters = this.parseFormalParameters_();
      this.eat_(CLOSE_PAREN);
      var typeAnnotation = this.parseTypeAnnotationOpt_();
      var body = this.parseFunctionBody_(parameters);
      return new ctor(this.getTreeLocation_(start), name, functionKind, parameters, typeAnnotation, annotations, body);
    },
    peekRest_: function(type) {
      return type === DOT_DOT_DOT && this.options_.restParameters;
    },
    parseFormalParameters_: function() {
      var start = this.getTreeStartLocation_();
      var formals = [];
      this.pushAnnotations_();
      var type = peekType();
      if (this.peekRest_(type)) {
        formals.push(this.parseFormalRestParameter_());
      } else {
        if (this.peekFormalParameter_(peekType()))
          formals.push(this.parseFormalParameter_(INITIALIZER_OPTIONAL));
        while (this.eatIf_(COMMA)) {
          this.pushAnnotations_();
          if (this.peekRest_(peekType())) {
            formals.push(this.parseFormalRestParameter_());
            break;
          }
          formals.push(this.parseFormalParameter_(INITIALIZER_OPTIONAL));
        }
      }
      return new FormalParameterList(this.getTreeLocation_(start), formals);
    },
    peekFormalParameter_: function(type) {
      return this.peekBindingElement_(type);
    },
    parseFormalParameter_: function(initializerAllowed) {
      var start = this.getTreeStartLocation_();
      var binding = this.parseBindingElementBinding_();
      var typeAnnotation = this.parseTypeAnnotationOpt_();
      var initializer = this.parseBindingElementInitializer_(initializerAllowed);
      return new FormalParameter(this.getTreeLocation_(start), new BindingElement(this.getTreeLocation_(start), binding, initializer), typeAnnotation, this.popAnnotations_());
    },
    parseFormalRestParameter_: function() {
      var start = this.getTreeStartLocation_();
      var restParameter = this.parseRestParameter_();
      var typeAnnotation = this.parseTypeAnnotationOpt_();
      return new FormalParameter(this.getTreeLocation_(start), restParameter, typeAnnotation, this.popAnnotations_());
    },
    parseRestParameter_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(DOT_DOT_DOT);
      var id = this.parseBindingIdentifier_();
      var typeAnnotation = this.parseTypeAnnotationOpt_();
      return new RestParameter(this.getTreeLocation_(start), id, typeAnnotation);
    },
    parseFunctionBody_: function(params) {
      var start = this.getTreeStartLocation_();
      this.eat_(OPEN_CURLY);
      var strictMode = this.strictMode_;
      var result = this.parseStatementList_(!strictMode);
      validateParameters(params, this.strictMode_, this.errorReporter_);
      this.strictMode_ = strictMode;
      this.eat_(CLOSE_CURLY);
      return new FunctionBody(this.getTreeLocation_(start), result);
    },
    parseSpreadExpression_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(DOT_DOT_DOT);
      var operand = this.parseAssignmentExpression_(ALLOW_IN);
      return new SpreadExpression(this.getTreeLocation_(start), operand);
    },
    parseBlock_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(OPEN_CURLY);
      var result = this.parseStatementList_(false);
      this.eat_(CLOSE_CURLY);
      return new Block(this.getTreeLocation_(start), result);
    },
    parseVariableStatement_: function() {
      var start = this.getTreeStartLocation_();
      var declarations = this.parseVariableDeclarationList_(ALLOW_IN, INITIALIZER_REQUIRED);
      this.checkInitializers_(declarations);
      this.eatPossibleImplicitSemiColon_();
      return new VariableStatement(this.getTreeLocation_(start), declarations);
    },
    parseVariableDeclarationList_: function(allowIn, initializerRequired) {
      var type = peekType();
      switch (type) {
        case CONST:
        case LET:
        case VAR:
          nextToken();
          break;
        default:
          throw Error('unreachable');
      }
      var start = this.getTreeStartLocation_();
      var declarations = [];
      declarations.push(this.parseVariableDeclaration_(type, allowIn, initializerRequired));
      while (this.eatIf_(COMMA)) {
        declarations.push(this.parseVariableDeclaration_(type, allowIn, initializerRequired));
      }
      return new VariableDeclarationList(this.getTreeLocation_(start), type, declarations);
    },
    parseVariableDeclaration_: function(binding, noIn, initializerRequired) {
      var initRequired = initializerRequired !== INITIALIZER_OPTIONAL;
      var start = this.getTreeStartLocation_();
      var lvalue;
      var typeAnnotation;
      if (this.peekPattern_(peekType())) {
        lvalue = this.parseBindingPattern_();
        typeAnnotation = null;
      } else {
        lvalue = this.parseBindingIdentifier_();
        typeAnnotation = this.parseTypeAnnotationOpt_();
      }
      var init = null;
      if (peek(EQUAL))
        init = this.parseInitializer_(noIn);
      else if (lvalue.isPattern() && initRequired)
        this.reportError_('destructuring must have an initializer');
      return new VariableDeclaration(this.getTreeLocation_(start), lvalue, typeAnnotation, init);
    },
    parseInitializer_: function(allowIn) {
      this.eat_(EQUAL);
      return this.parseAssignmentExpression_(allowIn);
    },
    parseInitializerOpt_: function(allowIn) {
      if (this.eatIf_(EQUAL))
        return this.parseAssignmentExpression_(allowIn);
      return null;
    },
    parseEmptyStatement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(SEMI_COLON);
      return new EmptyStatement(this.getTreeLocation_(start));
    },
    parseFallThroughStatement_: function() {
      var start = this.getTreeStartLocation_();
      var expression;
      switch (peekType()) {
        case OPEN_CURLY:
          return this.parseUnexpectedToken_(peekToken());
        case FUNCTION:
        case CLASS:
          return this.parseUnexpectedReservedWord_(peekToken());
        case LET:
          if (peekLookahead(OPEN_SQUARE)) {
            return this.parseSyntaxError_("A statement cannot start with 'let ['");
          }
      }
      if (this.options_.asyncFunctions && this.peekPredefinedString_(ASYNC) && peekLookahead(FUNCTION)) {
        var asyncToken = this.eatId_();
        var functionToken = peekTokenNoLineTerminator();
        if (functionToken !== null)
          return this.parseAsyncFunctionDeclaration_(asyncToken);
        expression = new IdentifierExpression(this.getTreeLocation_(start), asyncToken);
      } else {
        expression = this.parseExpression_(ALLOW_IN);
      }
      if (expression.type === IDENTIFIER_EXPRESSION) {
        if (this.eatIf_(COLON)) {
          var nameToken = expression.identifierToken;
          var statement = this.parseStatement_();
          return new LabelledStatement(this.getTreeLocation_(start), nameToken, statement);
        }
      }
      this.eatPossibleImplicitSemiColon_();
      return new ExpressionStatement(this.getTreeLocation_(start), expression);
    },
    parseIfStatement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(IF);
      this.eat_(OPEN_PAREN);
      var condition = this.parseExpression_(ALLOW_IN);
      this.eat_(CLOSE_PAREN);
      var ifClause = this.parseStatement_();
      var elseClause = null;
      if (this.eatIf_(ELSE)) {
        elseClause = this.parseStatement_();
      }
      return new IfStatement(this.getTreeLocation_(start), condition, ifClause, elseClause);
    },
    parseDoWhileStatement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(DO);
      var body = this.parseStatement_();
      this.eat_(WHILE);
      this.eat_(OPEN_PAREN);
      var condition = this.parseExpression_(ALLOW_IN);
      this.eat_(CLOSE_PAREN);
      this.eatPossibleImplicitSemiColon_();
      return new DoWhileStatement(this.getTreeLocation_(start), body, condition);
    },
    parseWhileStatement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(WHILE);
      this.eat_(OPEN_PAREN);
      var condition = this.parseExpression_(ALLOW_IN);
      this.eat_(CLOSE_PAREN);
      var body = this.parseStatement_();
      return new WhileStatement(this.getTreeLocation_(start), condition, body);
    },
    parseForStatement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(FOR);
      this.eat_(OPEN_PAREN);
      var type = peekType();
      if (this.peekVariableDeclarationList_(type)) {
        var variables = this.parseVariableDeclarationList_(NO_IN, INITIALIZER_OPTIONAL);
        var declarations = variables.declarations;
        if (declarations.length > 1 || containsInitializer(declarations)) {
          return this.parseForStatement2_(start, variables);
        }
        type = peekType();
        if (type === IN) {
          return this.parseForInStatement_(start, variables);
        } else if (this.peekOf_()) {
          return this.parseForOfStatement_(start, variables);
        } else if (this.allowForOn_ && this.peekOn_()) {
          return this.parseForOnStatement_(start, variables);
        } else {
          this.checkInitializers_(variables);
          return this.parseForStatement2_(start, variables);
        }
      }
      if (type === SEMI_COLON) {
        return this.parseForStatement2_(start, null);
      }
      var coverInitializedNameCount = this.coverInitializedNameCount_;
      var initializer = this.parseExpressionAllowPattern_(NO_IN);
      type = peekType();
      if (initializer.isLeftHandSideExpression() && (type === IN || this.peekOf_() || this.allowForOn_ && this.peekOn_())) {
        initializer = this.transformLeftHandSideExpression_(initializer);
        if (this.peekOf_()) {
          return this.parseForOfStatement_(start, initializer);
        } else if (this.allowForOn_ && this.peekOn_()) {
          return this.parseForOnStatement_(start, initializer);
        }
        return this.parseForInStatement_(start, initializer);
      }
      this.ensureNoCoverInitializedNames_(initializer, coverInitializedNameCount);
      return this.parseForStatement2_(start, initializer);
    },
    peekOf_: function() {
      return this.options_.forOf && this.peekPredefinedString_(OF);
    },
    peekOn_: function() {
      return this.options_.forOn && this.peekPredefinedString_(ON);
    },
    parseForOfStatement_: function(start, initializer) {
      this.eatId_();
      var collection = this.parseExpression_(ALLOW_IN);
      this.eat_(CLOSE_PAREN);
      var body = this.parseStatement_();
      return new ForOfStatement(this.getTreeLocation_(start), initializer, collection, body);
    },
    parseForOnStatement_: function(start, initializer) {
      this.eatId_();
      var observable = this.parseExpression_(ALLOW_IN);
      this.eat_(CLOSE_PAREN);
      var body = this.parseStatement_();
      return new ForOnStatement(this.getTreeLocation_(start), initializer, observable, body);
    },
    checkInitializers_: function(variables) {
      if (this.options_.blockBinding && variables.declarationType === CONST) {
        var type = variables.declarationType;
        for (var i = 0; i < variables.declarations.length; i++) {
          if (!this.checkInitializer_(type, variables.declarations[i])) {
            break;
          }
        }
      }
    },
    checkInitializer_: function(type, declaration) {
      if (this.options_.blockBinding && type === CONST && declaration.initializer === null) {
        this.reportError_('const variables must have an initializer');
        return false;
      }
      return true;
    },
    peekVariableDeclarationList_: function(type) {
      switch (type) {
        case VAR:
          return true;
        case CONST:
        case LET:
          return this.options_.blockBinding;
        default:
          return false;
      }
    },
    parseForStatement2_: function(start, initializer) {
      this.eat_(SEMI_COLON);
      var condition = null;
      if (!peek(SEMI_COLON)) {
        condition = this.parseExpression_(ALLOW_IN);
      }
      this.eat_(SEMI_COLON);
      var increment = null;
      if (!peek(CLOSE_PAREN)) {
        increment = this.parseExpression_(ALLOW_IN);
      }
      this.eat_(CLOSE_PAREN);
      var body = this.parseStatement_();
      return new ForStatement(this.getTreeLocation_(start), initializer, condition, increment, body);
    },
    parseForInStatement_: function(start, initializer) {
      this.eat_(IN);
      var collection = this.parseExpression_(ALLOW_IN);
      this.eat_(CLOSE_PAREN);
      var body = this.parseStatement_();
      return new ForInStatement(this.getTreeLocation_(start), initializer, collection, body);
    },
    parseContinueStatement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(CONTINUE);
      var name = null;
      if (!this.peekImplicitSemiColon_()) {
        name = this.eatIdOpt_();
      }
      this.eatPossibleImplicitSemiColon_();
      return new ContinueStatement(this.getTreeLocation_(start), name);
    },
    parseBreakStatement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(BREAK);
      var name = null;
      if (!this.peekImplicitSemiColon_()) {
        name = this.eatIdOpt_();
      }
      this.eatPossibleImplicitSemiColon_();
      return new BreakStatement(this.getTreeLocation_(start), name);
    },
    parseReturnStatement_: function() {
      var start = this.getTreeStartLocation_();
      if (this.functionState_.isTopMost()) {
        this.reportError_('Illegal return statement');
      }
      this.eat_(RETURN);
      var expression = null;
      if (!this.peekImplicitSemiColon_()) {
        expression = this.parseExpression_(ALLOW_IN);
      }
      this.eatPossibleImplicitSemiColon_();
      return new ReturnStatement(this.getTreeLocation_(start), expression);
    },
    parseYieldExpression_: function(allowIn) {
      var start = this.getTreeStartLocation_();
      this.eat_(YIELD);
      var expression = null;
      var isYieldFor = false;
      var token = peekTokenNoLineTerminator();
      if (token !== null) {
        switch (token.type) {
          case CLOSE_CURLY:
          case CLOSE_PAREN:
          case CLOSE_SQUARE:
          case COLON:
          case COMMA:
          case END_OF_FILE:
          case SEMI_COLON:
            break;
          default:
            isYieldFor = this.eatIf_(STAR);
            expression = this.parseAssignmentExpression_(allowIn);
        }
      }
      return new YieldExpression(this.getTreeLocation_(start), expression, isYieldFor);
    },
    parseWithStatement_: function() {
      if (this.strictMode_)
        this.reportError_('Strict mode code may not include a with statement');
      var start = this.getTreeStartLocation_();
      this.eat_(WITH);
      this.eat_(OPEN_PAREN);
      var expression = this.parseExpression_(ALLOW_IN);
      this.eat_(CLOSE_PAREN);
      var body = this.parseStatement_();
      return new WithStatement(this.getTreeLocation_(start), expression, body);
    },
    parseSwitchStatement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(SWITCH);
      this.eat_(OPEN_PAREN);
      var expression = this.parseExpression_(ALLOW_IN);
      this.eat_(CLOSE_PAREN);
      this.eat_(OPEN_CURLY);
      var caseClauses = this.parseCaseClauses_();
      this.eat_(CLOSE_CURLY);
      return new SwitchStatement(this.getTreeLocation_(start), expression, caseClauses);
    },
    parseCaseClauses_: function() {
      var foundDefaultClause = false;
      var result = [];
      while (true) {
        var start = this.getTreeStartLocation_();
        switch (peekType()) {
          case CASE:
            nextToken();
            var expression = this.parseExpression_(ALLOW_IN);
            this.eat_(COLON);
            var statements = this.parseCaseStatementsOpt_();
            result.push(new CaseClause(this.getTreeLocation_(start), expression, statements));
            break;
          case DEFAULT:
            if (foundDefaultClause) {
              this.reportError_('Switch statements may have at most one default clause');
            } else {
              foundDefaultClause = true;
            }
            nextToken();
            this.eat_(COLON);
            result.push(new DefaultClause(this.getTreeLocation_(start), this.parseCaseStatementsOpt_()));
            break;
          default:
            return result;
        }
      }
    },
    parseCaseStatementsOpt_: function() {
      var result = [];
      var type;
      while (true) {
        switch (type = peekType()) {
          case CASE:
          case DEFAULT:
          case CLOSE_CURLY:
          case END_OF_FILE:
            return result;
        }
        result.push(this.parseStatementListItem_(type));
      }
    },
    parseThrowStatement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(THROW);
      var value = null;
      if (!this.peekImplicitSemiColon_()) {
        value = this.parseExpression_(ALLOW_IN);
      }
      this.eatPossibleImplicitSemiColon_();
      return new ThrowStatement(this.getTreeLocation_(start), value);
    },
    parseTryStatement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(TRY);
      var body = this.parseBlock_();
      var catchBlock = null;
      if (peek(CATCH)) {
        catchBlock = this.parseCatch_();
      }
      var finallyBlock = null;
      if (peek(FINALLY)) {
        finallyBlock = this.parseFinallyBlock_();
      }
      if (catchBlock === null && finallyBlock === null) {
        this.reportError_("'catch' or 'finally' expected.");
      }
      return new TryStatement(this.getTreeLocation_(start), body, catchBlock, finallyBlock);
    },
    parseCatch_: function() {
      var start = this.getTreeStartLocation_();
      var catchBlock;
      this.eat_(CATCH);
      this.eat_(OPEN_PAREN);
      var binding;
      if (this.peekPattern_(peekType()))
        binding = this.parseBindingPattern_();
      else
        binding = this.parseBindingIdentifier_();
      this.eat_(CLOSE_PAREN);
      var catchBody = this.parseBlock_();
      catchBlock = new Catch(this.getTreeLocation_(start), binding, catchBody);
      return catchBlock;
    },
    parseFinallyBlock_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(FINALLY);
      var finallyBlock = this.parseBlock_();
      return new Finally(this.getTreeLocation_(start), finallyBlock);
    },
    parseDebuggerStatement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(DEBUGGER);
      this.eatPossibleImplicitSemiColon_();
      return new DebuggerStatement(this.getTreeLocation_(start));
    },
    parsePrimaryExpression_: function() {
      switch (peekType()) {
        case CLASS:
          return this.options_.classes ? this.parseClassExpression_() : this.parseUnexpectedReservedWord_(peekToken());
        case THIS:
          return this.parseThisExpression_();
        case IDENTIFIER:
          var identifier = this.parseIdentifierExpression_();
          if (this.options_.asyncFunctions && identifier.identifierToken.value === ASYNC) {
            var token$__18 = peekTokenNoLineTerminator();
            if (token$__18 && token$__18.type === FUNCTION) {
              var asyncToken = identifier.identifierToken;
              return this.parseAsyncFunctionExpression_(asyncToken);
            }
          }
          return identifier;
        case NUMBER:
        case STRING:
        case TRUE:
        case FALSE:
        case NULL:
          return this.parseLiteralExpression_();
        case OPEN_SQUARE:
          return this.parseArrayLiteral_();
        case OPEN_CURLY:
          return this.parseObjectLiteral_();
        case OPEN_PAREN:
          return this.parsePrimaryExpressionStartingWithParen_();
        case SLASH:
        case SLASH_EQUAL:
          return this.parseRegularExpressionLiteral_();
        case NO_SUBSTITUTION_TEMPLATE:
        case TEMPLATE_HEAD:
          if (this.options_.templateLiterals) {
            return this.parseTemplateLiteral_(null);
          }
          break;
        case IMPLEMENTS:
        case INTERFACE:
        case PACKAGE:
        case PRIVATE:
        case PROTECTED:
        case PUBLIC:
        case STATIC:
        case YIELD:
          if (this.strictMode_) {
            this.reportReservedIdentifier_(nextToken());
          }
          return this.parseIdentifierExpression_();
        case END_OF_FILE:
          return this.parseSyntaxError_('Unexpected end of input');
      }
      var token = peekToken();
      if (token.isKeyword()) {
        return this.parseUnexpectedReservedWord_(token);
      }
      return this.parseUnexpectedToken_(token);
    },
    parseSuperExpression_: function(isNew) {
      var start = this.getTreeStartLocation_();
      var fs = this.functionState_;
      while (fs && fs.isArrowFunction()) {
        fs = fs.outer;
      }
      if (!fs || !fs.isMethod()) {
        return this.parseSyntaxError_('super is only allowed in methods');
      }
      this.eat_(SUPER);
      var operand = new SuperExpression(this.getTreeLocation_(start));
      var type = peekType();
      if (isNew) {
        if (type === OPEN_SQUARE) {
          return this.parseMemberLookupExpression_(start, operand);
        }
        return this.parseMemberExpression_(start, operand);
      }
      switch (type) {
        case OPEN_SQUARE:
          return this.parseMemberLookupExpression_(start, operand);
        case PERIOD:
          return this.parseMemberExpression_(start, operand);
        case OPEN_PAREN:
          var superCall = this.parseCallExpression_(start, operand);
          if (!fs.isDerivedConstructor()) {
            this.errorReporter_.reportError(start, 'super call is only allowed in derived constructor');
          }
          return superCall;
      }
      return this.parseUnexpectedToken_(peekToken());
    },
    parseThisExpression_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(THIS);
      return new ThisExpression(this.getTreeLocation_(start));
    },
    peekBindingIdentifier_: function(type) {
      return this.peekId_(type);
    },
    parseBindingIdentifier_: function() {
      var start = this.getTreeStartLocation_();
      var identifier = this.eatId_();
      return new BindingIdentifier(this.getTreeLocation_(start), identifier);
    },
    parseIdentifierExpression_: function() {
      var start = this.getTreeStartLocation_();
      var identifier = this.eatId_();
      return new IdentifierExpression(this.getTreeLocation_(start), identifier);
    },
    parseIdentifierNameExpression_: function() {
      var start = this.getTreeStartLocation_();
      var identifier = this.eatIdName_();
      return new IdentifierExpression(this.getTreeLocation_(start), identifier);
    },
    parseLiteralExpression_: function() {
      var start = this.getTreeStartLocation_();
      var literal = this.nextLiteralToken_();
      return new LiteralExpression(this.getTreeLocation_(start), literal);
    },
    nextLiteralToken_: function() {
      return nextToken();
    },
    parseRegularExpressionLiteral_: function() {
      var start = this.getTreeStartLocation_();
      var literal = nextRegularExpressionLiteralToken();
      return new LiteralExpression(this.getTreeLocation_(start), literal);
    },
    peekSpread_: function(type) {
      return type === DOT_DOT_DOT && this.options_.spread;
    },
    parseArrayLiteral_: function() {
      var start = this.getTreeStartLocation_();
      var expression;
      var elements = [];
      this.eat_(OPEN_SQUARE);
      var type = peekType();
      if (type === FOR && this.options_.arrayComprehension)
        return this.parseArrayComprehension_(start);
      while (true) {
        type = peekType();
        if (type === COMMA) {
          expression = null;
        } else if (this.peekSpread_(type)) {
          expression = this.parseSpreadExpression_();
        } else if (type === CLOSE_SQUARE || type === END_OF_FILE) {
          break;
        } else {
          expression = this.parseAssignmentExpression_(ALLOW_IN);
        }
        elements.push(expression);
        type = peekType();
        if (type !== CLOSE_SQUARE)
          this.eat_(COMMA);
      }
      this.eat_(CLOSE_SQUARE);
      return new ArrayLiteralExpression(this.getTreeLocation_(start), elements);
    },
    parseArrayComprehension_: function(start) {
      var list = this.parseComprehensionList_();
      var expression = this.parseAssignmentExpression_(ALLOW_IN);
      this.eat_(CLOSE_SQUARE);
      return new ArrayComprehension(this.getTreeLocation_(start), list, expression);
    },
    parseComprehensionList_: function() {
      var list = [this.parseComprehensionFor_()];
      while (true) {
        var type = peekType();
        switch (type) {
          case FOR:
            list.push(this.parseComprehensionFor_());
            break;
          case IF:
            list.push(this.parseComprehensionIf_());
            break;
          default:
            return list;
        }
      }
    },
    parseComprehensionFor_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(FOR);
      this.eat_(OPEN_PAREN);
      var left = this.parseForBinding_();
      this.eatId_(OF);
      var iterator = this.parseExpression_(ALLOW_IN);
      this.eat_(CLOSE_PAREN);
      return new ComprehensionFor(this.getTreeLocation_(start), left, iterator);
    },
    parseComprehensionIf_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(IF);
      this.eat_(OPEN_PAREN);
      var expression = this.parseExpression_(ALLOW_IN);
      this.eat_(CLOSE_PAREN);
      return new ComprehensionIf(this.getTreeLocation_(start), expression);
    },
    parseObjectLiteral_: function() {
      var start = this.getTreeStartLocation_();
      var result = [];
      this.eat_(OPEN_CURLY);
      while (this.peekPropertyDefinition_(peekType())) {
        var propertyDefinition = this.parsePropertyDefinition_();
        result.push(propertyDefinition);
        if (!this.eatIf_(COMMA))
          break;
      }
      this.eat_(CLOSE_CURLY);
      return new ObjectLiteralExpression(this.getTreeLocation_(start), result);
    },
    parsePropertyDefinition: function() {
      var fs = this.pushFunctionState_(FUNCTION_STATE_SCRIPT);
      var result = this.parsePropertyDefinition_();
      this.popFunctionState_(fs);
      return result;
    },
    parsePropertyDefinition_: function() {
      var start = this.getTreeStartLocation_();
      var functionKind = null;
      var isStatic = false;
      if (this.options_.generators && this.options_.propertyMethods && peek(STAR)) {
        var fs = this.pushFunctionState_(FUNCTION_STATE_METHOD | FUNCTION_STATE_GENERATOR);
        var m = this.parseGeneratorMethod_(start, isStatic, []);
        this.popFunctionState_(fs);
        return m;
      }
      var token = peekToken();
      var name = this.parsePropertyName_();
      if (this.options_.propertyMethods && peek(OPEN_PAREN)) {
        var fs$__19 = this.pushFunctionState_(FUNCTION_STATE_METHOD);
        var m$__20 = this.parseMethod_(start, isStatic, functionKind, name, []);
        this.popFunctionState_(fs$__19);
        return m$__20;
      }
      if (this.eatIf_(COLON)) {
        var value = this.parseAssignmentExpression_(ALLOW_IN);
        return new PropertyNameAssignment(this.getTreeLocation_(start), name, value);
      }
      var type = peekType();
      if (name.type === LITERAL_PROPERTY_NAME) {
        var nameLiteral = name.literalToken;
        if (nameLiteral.value === GET && this.peekPropertyName_(type)) {
          return this.parseGetAccessor_(start, isStatic, []);
        }
        if (nameLiteral.value === SET && this.peekPropertyName_(type)) {
          return this.parseSetAccessor_(start, isStatic, []);
        }
        if (this.options_.asyncFunctions && nameLiteral.value === ASYNC && (this.peekPropertyName_(type) || this.peekAsyncStar_())) {
          var async = nameLiteral;
          var kind = FUNCTION_STATE_METHOD | FUNCTION_STATE_ASYNC;
          if (this.peekAsyncStar_()) {
            kind |= FUNCTION_STATE_GENERATOR;
            this.eat_(STAR);
            async = new IdentifierToken(async.location, ASYNC_STAR);
          }
          var name$__21 = this.parsePropertyName_();
          var fs$__22 = this.pushFunctionState_(kind);
          var m$__23 = this.parseMethod_(start, isStatic, async, name$__21, []);
          this.popFunctionState_(fs$__22);
          return m$__23;
        }
        if (this.options_.propertyNameShorthand && (nameLiteral.type === IDENTIFIER || nameLiteral.isStrictKeyword() && !this.strictMode_ || nameLiteral.type === YIELD && this.allowYield_)) {
          if (peek(EQUAL)) {
            token = nextToken();
            var coverInitializedNameCount = this.coverInitializedNameCount_;
            var expr = this.parseAssignmentExpression_(ALLOW_IN);
            this.ensureNoCoverInitializedNames_(expr, coverInitializedNameCount);
            this.coverInitializedNameCount_++;
            return new CoverInitializedName(this.getTreeLocation_(start), nameLiteral, token, expr);
          }
          return new PropertyNameShorthand(this.getTreeLocation_(start), nameLiteral);
        }
        if (this.strictMode_ && nameLiteral.isStrictKeyword())
          this.reportReservedIdentifier_(nameLiteral);
      }
      if (name.type === COMPUTED_PROPERTY_NAME)
        token = peekToken();
      return this.parseUnexpectedToken_(token);
    },
    parseClassElement_: function(derivedClass) {
      var start = this.getTreeStartLocation_();
      var annotations = this.parseAnnotations_();
      var type = peekType();
      var isStatic = false,
          functionKind = null;
      switch (type) {
        case STATIC:
          var staticToken = nextToken();
          type = peekType();
          switch (type) {
            case OPEN_PAREN:
              var location = this.getTreeLocation_(start);
              var name = new LiteralPropertyName(location, staticToken);
              var fs = this.pushFunctionState_(FUNCTION_STATE_METHOD);
              var m = this.parseMethod_(start, isStatic, functionKind, name, annotations);
              this.popFunctionState_(fs);
              return m;
            default:
              isStatic = true;
              if (type === STAR && this.options_.generators)
                return this.parseGeneratorMethod_(start, true, annotations);
              return this.parseClassElement2_(start, isStatic, annotations, derivedClass);
          }
          break;
        case STAR:
          return this.parseGeneratorMethod_(start, isStatic, annotations);
        default:
          return this.parseClassElement2_(start, isStatic, annotations, derivedClass);
      }
    },
    parseGeneratorMethod_: function(start, isStatic, annotations) {
      var functionKind = this.eat_(STAR);
      var name = this.parsePropertyName_();
      var fs = this.pushFunctionState_(FUNCTION_STATE_METHOD | FUNCTION_STATE_GENERATOR);
      var m = this.parseMethod_(start, isStatic, functionKind, name, annotations);
      this.popFunctionState_(fs);
      return m;
    },
    parseMethod_: function(start, isStatic, functionKind, name, annotations) {
      this.eat_(OPEN_PAREN);
      var parameterList = this.parseFormalParameters_();
      this.eat_(CLOSE_PAREN);
      var typeAnnotation = this.parseTypeAnnotationOpt_();
      var body = this.parseFunctionBody_(parameterList);
      return new PropertyMethodAssignment(this.getTreeLocation_(start), isStatic, functionKind, name, parameterList, typeAnnotation, annotations, body, null);
    },
    parsePropertyVariableDeclaration_: function(start, isStatic, name, annotations) {
      var typeAnnotation = this.parseTypeAnnotationOpt_();
      var initializer = this.parseInitializerOpt_(ALLOW_IN);
      this.eat_(SEMI_COLON);
      return new PropertyVariableDeclaration(this.getTreeLocation_(start), isStatic, name, typeAnnotation, annotations, initializer);
    },
    parseClassElement2_: function(start, isStatic, annotations, derivedClass) {
      var functionKind = null;
      var name = this.parsePropertyName_();
      var type = peekType();
      if (name.type === LITERAL_PROPERTY_NAME && name.literalToken.value === GET && this.peekPropertyName_(type)) {
        return this.parseGetAccessor_(start, isStatic, annotations);
      }
      if (name.type === LITERAL_PROPERTY_NAME && name.literalToken.value === SET && this.peekPropertyName_(type)) {
        return this.parseSetAccessor_(start, isStatic, annotations);
      }
      if (this.options_.asyncFunctions && name.type === LITERAL_PROPERTY_NAME && name.literalToken.value === ASYNC && (this.peekPropertyName_(type) || this.peekAsyncStar_())) {
        var async = name.literalToken;
        var kind = FUNCTION_STATE_METHOD | FUNCTION_STATE_ASYNC;
        if (this.peekAsyncStar_()) {
          kind |= FUNCTION_STATE_GENERATOR;
          this.eat_(STAR);
          async = new IdentifierToken(async.location, ASYNC_STAR);
        }
        name = this.parsePropertyName_();
        var fs = this.pushFunctionState_(kind);
        var m = this.parseMethod_(start, isStatic, async, name, annotations);
        this.popFunctionState_(fs);
        return m;
      }
      if (!this.options_.memberVariables || type === OPEN_PAREN) {
        var kind$__24 = FUNCTION_STATE_METHOD;
        var isDerivedConstructor = derivedClass && !isStatic && functionKind === null && name.type === LITERAL_PROPERTY_NAME && name.literalToken.value === CONSTRUCTOR;
        if (isDerivedConstructor) {
          kind$__24 |= FUNCTION_STATE_DERIVED_CONSTRUCTOR;
        }
        var fs$__25 = this.pushFunctionState_(kind$__24);
        var m$__26 = this.parseMethod_(start, isStatic, functionKind, name, annotations);
        this.popFunctionState_(fs$__25);
        if (isDerivedConstructor) {
          validateConstructor(m$__26, this.errorReporter_);
        }
        return m$__26;
      }
      return this.parsePropertyVariableDeclaration_(start, isStatic, name, annotations);
    },
    parseGetAccessor_: function(start, isStatic, annotations) {
      var name = this.parsePropertyName_();
      var fs = this.pushFunctionState_(FUNCTION_STATE_METHOD);
      this.eat_(OPEN_PAREN);
      this.eat_(CLOSE_PAREN);
      var typeAnnotation = this.parseTypeAnnotationOpt_();
      var body = this.parseFunctionBody_(null);
      this.popFunctionState_(fs);
      return new GetAccessor(this.getTreeLocation_(start), isStatic, name, typeAnnotation, annotations, body);
    },
    parseSetAccessor_: function(start, isStatic, annotations) {
      var name = this.parsePropertyName_();
      var fs = this.pushFunctionState_(FUNCTION_STATE_METHOD);
      this.eat_(OPEN_PAREN);
      var parameterList = this.parsePropertySetParameterList_();
      this.eat_(CLOSE_PAREN);
      var body = this.parseFunctionBody_(parameterList);
      this.popFunctionState_(fs);
      return new SetAccessor(this.getTreeLocation_(start), isStatic, name, parameterList, annotations, body);
    },
    peekPropertyDefinition_: function(type) {
      return this.peekPropertyName_(type) || type === STAR && this.options_.propertyMethods && this.options_.generators;
    },
    peekPropertyName_: function(type) {
      switch (type) {
        case IDENTIFIER:
        case STRING:
        case NUMBER:
          return true;
        case OPEN_SQUARE:
          return this.options_.computedPropertyNames;
        default:
          return peekToken().isKeyword();
      }
    },
    peekPredefinedString_: function(string) {
      var token = peekToken();
      return token.type === IDENTIFIER && token.value === string;
    },
    parsePropertySetParameterList_: function() {
      var start = this.getTreeStartLocation_();
      var binding;
      this.pushAnnotations_();
      if (this.peekPattern_(peekType()))
        binding = this.parseBindingPattern_();
      else
        binding = this.parseBindingIdentifier_();
      var typeAnnotation = this.parseTypeAnnotationOpt_();
      var parameter = new FormalParameter(this.getTreeLocation_(start), new BindingElement(this.getTreeLocation_(start), binding, null), typeAnnotation, this.popAnnotations_());
      return new FormalParameterList(parameter.location, [parameter]);
    },
    parsePrimaryExpressionStartingWithParen_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(OPEN_PAREN);
      if (peek(FOR) && this.options_.generatorComprehension)
        return this.parseGeneratorComprehension_(start);
      return this.parseCoverFormals_(start);
    },
    parseSyntaxError_: function(message) {
      var start = this.getTreeStartLocation_();
      this.reportError_(message);
      var token = nextToken();
      return new SyntaxErrorTree(this.getTreeLocation_(start), token, message);
    },
    parseUnexpectedToken_: function(token) {
      if (token.type === NO_SUBSTITUTION_TEMPLATE) {
        return this.parseSyntaxError_('Unexpected token `');
      }
      return this.parseSyntaxError_(("Unexpected token " + token));
    },
    parseUnexpectedReservedWord_: function(token) {
      return this.parseSyntaxError_(("Unexpected reserved word " + token));
    },
    parseExpression_: function(allowIn) {
      var coverInitializedNameCount = this.coverInitializedNameCount_;
      var expression = this.parseExpressionAllowPattern_(allowIn);
      this.ensureNoCoverInitializedNames_(expression, coverInitializedNameCount);
      return expression;
    },
    parseExpression: function() {
      var fs = this.pushFunctionState_(FUNCTION_STATE_LENIENT);
      var expression = this.parseExpression_(ALLOW_IN);
      this.popFunctionState_(fs);
      return expression;
    },
    parseExpressionAllowPattern_: function(allowIn) {
      var start = this.getTreeStartLocation_();
      var expression = this.parseAssignmentExpression_(allowIn);
      if (peek(COMMA)) {
        var expressions = [expression];
        while (this.eatIf_(COMMA)) {
          expressions.push(this.parseAssignmentExpression_(allowIn));
        }
        return new CommaExpression(this.getTreeLocation_(start), expressions);
      }
      return expression;
    },
    parseAssignmentExpression_: function(allowIn) {
      if (this.allowYield_ && peek(YIELD))
        return this.parseYieldExpression_(allowIn);
      var start = this.getTreeStartLocation_();
      var validAsyncParen = false;
      if (this.options_.asyncFunctions && this.peekPredefinedString_(ASYNC)) {
        var asyncToken = peekToken();
        var maybeOpenParenToken = peekTokenLookahead();
        validAsyncParen = maybeOpenParenToken.type === OPEN_PAREN && asyncToken.location.end.line === maybeOpenParenToken.location.start.line;
      }
      var left = this.parseConditional_(allowIn);
      var type = peekType();
      if (this.options_.asyncFunctions && left.type === IDENTIFIER_EXPRESSION && left.identifierToken.value === ASYNC && type === IDENTIFIER) {
        if (peekTokenNoLineTerminator() !== null) {
          var bindingIdentifier = this.parseBindingIdentifier_();
          var asyncToken$__27 = left.identifierToken;
          return this.parseArrowFunction_(start, bindingIdentifier, asyncToken$__27);
        }
      }
      if (type === ARROW && peekTokenNoLineTerminator() !== null) {
        if (left.type === COVER_FORMALS || left.type === IDENTIFIER_EXPRESSION)
          return this.parseArrowFunction_(start, left, null);
        if (validAsyncParen && left.type === CALL_EXPRESSION) {
          var asyncToken$__28 = left.operand.identifierToken;
          return this.parseArrowFunction_(start, left.args, asyncToken$__28);
        }
      }
      left = this.coverFormalsToParenExpression_(left);
      if (this.peekAssignmentOperator_(type)) {
        if (type === EQUAL)
          left = this.transformLeftHandSideExpression_(left);
        if (!left.isLeftHandSideExpression() && !left.isPattern()) {
          this.reportError_('Left hand side of assignment must be new, call, member, function, primary expressions or destructuring pattern');
        }
        var operator = nextToken();
        var right = this.parseAssignmentExpression_(allowIn);
        return new BinaryExpression(this.getTreeLocation_(start), left, operator, right);
      }
      return left;
    },
    transformLeftHandSideExpression_: function(tree) {
      switch (tree.type) {
        case ARRAY_LITERAL_EXPRESSION:
        case OBJECT_LITERAL_EXPRESSION:
          resetScanner(tree.location.start.offset);
          return this.parseAssignmentPattern_();
      }
      return tree;
    },
    peekAssignmentOperator_: function(type) {
      return isAssignmentOperator(type);
    },
    parseConditional_: function(allowIn) {
      var start = this.getTreeStartLocation_();
      var condition = this.parseBinaryExpression_(allowIn);
      if (this.eatIf_(QUESTION)) {
        condition = this.toPrimaryExpression_(condition);
        var left = this.parseAssignmentExpression_(ALLOW_IN);
        this.eat_(COLON);
        var right = this.parseAssignmentExpression_(allowIn);
        return new ConditionalExpression(this.getTreeLocation_(start), condition, left, right);
      }
      return condition;
    },
    getPrecedence_: function(type, allowIn) {
      switch (type) {
        case OR:
          return 1;
        case AND:
          return 2;
        case BAR:
          return 3;
        case CARET:
          return 4;
        case AMPERSAND:
          return 5;
        case EQUAL_EQUAL:
        case EQUAL_EQUAL_EQUAL:
        case NOT_EQUAL:
        case NOT_EQUAL_EQUAL:
          return 6;
        case CLOSE_ANGLE:
        case GREATER_EQUAL:
        case INSTANCEOF:
        case LESS_EQUAL:
        case OPEN_ANGLE:
          return 7;
        case IN:
          return allowIn ? 7 : 0;
        case LEFT_SHIFT:
        case RIGHT_SHIFT:
        case UNSIGNED_RIGHT_SHIFT:
          return 8;
        case MINUS:
        case PLUS:
          return 9;
        case SLASH:
        case STAR:
        case PERCENT:
          return 10;
        case STAR_STAR:
          return this.options_.exponentiation ? 11 : 0;
        default:
          return 0;
      }
    },
    parseBinaryExpression_: function(allowIn) {
      var start = this.getTreeStartLocation_();
      var left = this.parseUnaryExpression_();
      return this.parseBinaryExpressionHelper_(start, left, -1, allowIn);
    },
    parseBinaryExpressionHelper_: function(start, left, minPrec, allowIn) {
      var type = peekType();
      var prec = this.getPrecedence_(type, allowIn);
      if (prec === 0) {
        return left;
      }
      var leftToRight = type !== STAR_STAR;
      if (leftToRight ? prec > minPrec : prec >= minPrec) {
        var token = nextToken();
        var rightStart = this.getTreeStartLocation_();
        var rightUnary = this.parseUnaryExpression_();
        var right = this.parseBinaryExpressionHelper_(rightStart, rightUnary, prec, allowIn);
        left = this.toPrimaryExpression_(left);
        right = this.toPrimaryExpression_(right);
        var node = new BinaryExpression(this.getTreeLocation_(start), left, token, right);
        return this.parseBinaryExpressionHelper_(start, node, minPrec, allowIn);
      }
      return left;
    },
    parseUnaryExpression_: function() {
      var start = this.getTreeStartLocation_();
      if (this.allowAwait_ && this.peekPredefinedString_(AWAIT)) {
        this.eatId_();
        var operand;
        if (this.allowYield_ && peek(YIELD)) {
          operand = this.parseYieldExpression_(ALLOW_IN);
        } else {
          operand = this.parseUnaryExpression_();
          operand = this.toPrimaryExpression_(operand);
        }
        return new AwaitExpression(this.getTreeLocation_(start), operand);
      }
      if (this.peekUnaryOperator_(peekType())) {
        var operator = nextToken();
        var operand$__29 = this.parseUnaryExpression_();
        operand$__29 = this.toPrimaryExpression_(operand$__29);
        return new UnaryExpression(this.getTreeLocation_(start), operator, operand$__29);
      }
      return this.parsePostfixExpression_();
    },
    peekUnaryOperator_: function(type) {
      switch (type) {
        case DELETE:
        case VOID:
        case TYPEOF:
        case PLUS_PLUS:
        case MINUS_MINUS:
        case PLUS:
        case MINUS:
        case TILDE:
        case BANG:
          return true;
        default:
          return false;
      }
    },
    parsePostfixExpression_: function() {
      var start = this.getTreeStartLocation_();
      var operand = this.parseLeftHandSideExpression_();
      while (this.peekPostfixOperator_(peekType())) {
        operand = this.toPrimaryExpression_(operand);
        var operator = nextToken();
        operand = new PostfixExpression(this.getTreeLocation_(start), operand, operator);
      }
      return operand;
    },
    peekPostfixOperator_: function(type) {
      switch (type) {
        case PLUS_PLUS:
        case MINUS_MINUS:
          var token = peekTokenNoLineTerminator();
          return token !== null;
      }
      return false;
    },
    parseLeftHandSideExpression_: function() {
      var start = this.getTreeStartLocation_();
      var operand = this.parseNewExpression_();
      if (!(operand instanceof NewExpression) || operand.args !== null) {
        loop: while (true) {
          switch (peekType()) {
            case OPEN_PAREN:
              operand = this.toPrimaryExpression_(operand);
              operand = this.parseCallExpression_(start, operand);
              break;
            case OPEN_SQUARE:
              operand = this.toPrimaryExpression_(operand);
              operand = this.parseMemberLookupExpression_(start, operand);
              break;
            case PERIOD:
              operand = this.toPrimaryExpression_(operand);
              operand = this.parseMemberExpression_(start, operand);
              break;
            case NO_SUBSTITUTION_TEMPLATE:
            case TEMPLATE_HEAD:
              if (!this.options_.templateLiterals)
                break loop;
              operand = this.toPrimaryExpression_(operand);
              if (this.options_.templateLiterals) {
                operand = this.parseTemplateLiteral_(operand);
              }
              break;
            default:
              break loop;
          }
        }
      }
      return operand;
    },
    parseMemberExpressionNoNew_: function() {
      var start = this.getTreeStartLocation_();
      var operand;
      if (peekType() === FUNCTION) {
        operand = this.parseFunctionExpression_();
      } else {
        operand = this.parsePrimaryExpression_();
      }
      loop: while (true) {
        switch (peekType()) {
          case OPEN_SQUARE:
            operand = this.toPrimaryExpression_(operand);
            operand = this.parseMemberLookupExpression_(start, operand);
            break;
          case PERIOD:
            operand = this.toPrimaryExpression_(operand);
            operand = this.parseMemberExpression_(start, operand);
            break;
          case NO_SUBSTITUTION_TEMPLATE:
          case TEMPLATE_HEAD:
            if (!this.options_.templateLiterals)
              break loop;
            operand = this.toPrimaryExpression_(operand);
            operand = this.parseTemplateLiteral_(operand);
            break;
          default:
            break loop;
        }
      }
      return operand;
    },
    parseMemberExpression_: function(start, operand) {
      this.eat_(PERIOD);
      var name = this.eatIdName_();
      return new MemberExpression(this.getTreeLocation_(start), operand, name);
    },
    parseMemberLookupExpression_: function(start, operand) {
      this.eat_(OPEN_SQUARE);
      var member = this.parseExpression_(ALLOW_IN);
      this.eat_(CLOSE_SQUARE);
      return new MemberLookupExpression(this.getTreeLocation_(start), operand, member);
    },
    parseCallExpression_: function(start, operand) {
      var args = this.parseArguments_();
      return new CallExpression(this.getTreeLocation_(start), operand, args);
    },
    parseNewExpression_: function() {
      var operand,
          start;
      switch (peekType()) {
        case NEW:
          start = this.getTreeStartLocation_();
          this.eat_(NEW);
          if (peek(SUPER)) {
            operand = this.parseSuperExpression_(true);
          } else {
            operand = this.toPrimaryExpression_(this.parseNewExpression_());
          }
          var args = null;
          if (peek(OPEN_PAREN)) {
            args = this.parseArguments_();
          }
          return new NewExpression(this.getTreeLocation_(start), operand, args);
        case SUPER:
          return this.parseSuperExpression_(false);
        default:
          return this.parseMemberExpressionNoNew_();
      }
    },
    parseArguments_: function() {
      var start = this.getTreeStartLocation_();
      var args = [];
      this.eat_(OPEN_PAREN);
      if (!peek(CLOSE_PAREN)) {
        args.push(this.parseArgument_());
        while (this.eatIf_(COMMA)) {
          args.push(this.parseArgument_());
        }
      }
      this.eat_(CLOSE_PAREN);
      return new ArgumentList(this.getTreeLocation_(start), args);
    },
    parseArgument_: function() {
      if (this.peekSpread_(peekType()))
        return this.parseSpreadExpression_();
      return this.parseAssignmentExpression_(ALLOW_IN);
    },
    parseArrowFunction_: function(start, tree, asyncToken) {
      var $__14 = this;
      var formals;
      var kind = FUNCTION_STATE_ARROW;
      if (asyncToken && asyncToken.value === ASYNC) {
        kind |= FUNCTION_STATE_ASYNC;
      }
      var fs = this.pushFunctionState_(kind);
      var makeFormals = function(tree) {
        return new FormalParameterList($__14.getTreeLocation_(start), [new FormalParameter(tree.location, new BindingElement(tree.location, tree, null), null, [])]);
      };
      switch (tree.type) {
        case IDENTIFIER_EXPRESSION:
          formals = makeFormals(new BindingIdentifier(tree.location, tree.identifierToken));
          break;
        case BINDING_IDENTIFIER:
          formals = makeFormals(tree);
          break;
        case FORMAL_PARAMETER_LIST:
          formals = tree;
          break;
        default:
          formals = this.toFormalParameters_(start, tree, asyncToken);
      }
      this.eat_(ARROW);
      var body = this.parseConciseBody_(formals);
      this.popFunctionState_(fs);
      return new ArrowFunctionExpression(this.getTreeLocation_(start), asyncToken, formals, body);
    },
    parseCoverFormals_: function(start) {
      var expressions = [];
      if (!peek(CLOSE_PAREN)) {
        do {
          var type = peekType();
          if (this.peekRest_(type)) {
            expressions.push(this.parseRestParameter_());
            break;
          } else {
            expressions.push(this.parseAssignmentExpression_(ALLOW_IN));
          }
          if (this.eatIf_(COMMA))
            continue;
        } while (!peek(CLOSE_PAREN) && !isAtEnd());
      }
      this.eat_(CLOSE_PAREN);
      return new CoverFormals(this.getTreeLocation_(start), expressions);
    },
    ensureNoCoverInitializedNames_: function(tree, coverInitializedNameCount) {
      if (coverInitializedNameCount === this.coverInitializedNameCount_)
        return;
      var finder = new ValidateObjectLiteral();
      finder.visitAny(tree);
      if (finder.found) {
        var token = finder.errorToken;
        this.reportError_(token.location, ("Unexpected token " + token));
      }
    },
    toPrimaryExpression_: function(tree) {
      if (tree.type === COVER_FORMALS)
        return this.coverFormalsToParenExpression_(tree);
      return tree;
    },
    validateCoverFormalsAsParenExpression_: function(tree) {
      for (var i = 0; i < tree.expressions.length; i++) {
        if (tree.expressions[i].type === REST_PARAMETER) {
          var token = new Token(DOT_DOT_DOT, tree.expressions[i].location);
          this.reportError_(token.location, ("Unexpected token " + token));
          return;
        }
      }
    },
    coverFormalsToParenExpression_: function(tree) {
      if (tree.type === COVER_FORMALS) {
        var expressions = tree.expressions;
        if (expressions.length === 0) {
          var message = 'Unexpected token )';
          this.reportError_(tree.location, message);
        } else {
          this.validateCoverFormalsAsParenExpression_(tree);
          var expression;
          if (expressions.length > 1)
            expression = new CommaExpression(expressions[0].location, expressions);
          else
            expression = expressions[0];
          return new ParenExpression(tree.location, expression);
        }
      }
      return tree;
    },
    toFormalParameters_: function(start, tree, asyncToken) {
      resetScanner(start.offset);
      return this.parseArrowFormalParameters_(asyncToken);
    },
    parseArrowFormalParameters_: function(asyncToken) {
      if (asyncToken)
        this.eat_(IDENTIFIER);
      this.eat_(OPEN_PAREN);
      var parameters = this.parseFormalParameters_();
      this.eat_(CLOSE_PAREN);
      return parameters;
    },
    peekArrow_: function(type) {
      return type === ARROW && this.options_.arrowFunctions;
    },
    parseConciseBody_: function(params) {
      if (peek(OPEN_CURLY))
        return this.parseFunctionBody_(params);
      validateParameters(params, this.strictMode_, this.errorReporter_);
      return this.parseAssignmentExpression_(ALLOW_IN);
    },
    parseGeneratorComprehension_: function(start) {
      var comprehensionList = this.parseComprehensionList_();
      var expression = this.parseAssignmentExpression_(ALLOW_IN);
      this.eat_(CLOSE_PAREN);
      return new GeneratorComprehension(this.getTreeLocation_(start), comprehensionList, expression);
    },
    parseForBinding_: function() {
      if (this.peekPattern_(peekType()))
        return this.parseBindingPattern_();
      return this.parseBindingIdentifier_();
    },
    peekPattern_: function(type) {
      return this.options_.destructuring && (this.peekObjectPattern_(type) || this.peekArrayPattern_(type));
    },
    peekArrayPattern_: function(type) {
      return type === OPEN_SQUARE;
    },
    peekObjectPattern_: function(type) {
      return type === OPEN_CURLY;
    },
    parseBindingPattern_: function() {
      return this.parsePattern_(true);
    },
    parsePattern_: function(useBinding) {
      if (this.peekArrayPattern_(peekType()))
        return this.parseArrayPattern_(useBinding);
      return this.parseObjectPattern_(useBinding);
    },
    parseArrayBindingPattern_: function() {
      return this.parseArrayPattern_(true);
    },
    parsePatternElement_: function(useBinding) {
      return useBinding ? this.parseBindingElement_() : this.parseAssignmentElement_();
    },
    parsePatternRestElement_: function(useBinding) {
      return useBinding ? this.parseBindingRestElement_() : this.parseAssignmentRestElement_();
    },
    parseArrayPattern_: function(useBinding) {
      var start = this.getTreeStartLocation_();
      var elements = [];
      this.eat_(OPEN_SQUARE);
      while (true) {
        var type = peekType();
        if (type === COMMA) {
          elements.push(null);
        } else if (this.peekSpread_(type)) {
          elements.push(this.parsePatternRestElement_(useBinding));
          break;
        } else if (type === CLOSE_SQUARE || type === END_OF_FILE) {
          break;
        } else {
          elements.push(this.parsePatternElement_(useBinding));
        }
        type = peekType();
        if (type !== CLOSE_SQUARE) {
          this.eat_(COMMA);
        }
      }
      this.eat_(CLOSE_SQUARE);
      return new ArrayPattern(this.getTreeLocation_(start), elements);
    },
    parseBindingElementList_: function(elements) {
      this.parseElisionOpt_(elements);
      elements.push(this.parseBindingElement_());
      while (this.eatIf_(COMMA)) {
        this.parseElisionOpt_(elements);
        elements.push(this.parseBindingElement_());
      }
    },
    parseElisionOpt_: function(elements) {
      while (this.eatIf_(COMMA)) {
        elements.push(null);
      }
    },
    peekBindingElement_: function(type) {
      return this.peekBindingIdentifier_(type) || this.peekPattern_(type);
    },
    parseBindingElement_: function() {
      var start = this.getTreeStartLocation_();
      var binding = this.parseBindingElementBinding_();
      var initializer = this.parseBindingElementInitializer_(INITIALIZER_OPTIONAL);
      return new BindingElement(this.getTreeLocation_(start), binding, initializer);
    },
    parseBindingElementBinding_: function() {
      if (this.peekPattern_(peekType()))
        return this.parseBindingPattern_();
      return this.parseBindingIdentifier_();
    },
    parseBindingElementInitializer_: function(initializerRequired) {
      if (peek(EQUAL) || initializerRequired) {
        return this.parseInitializer_(ALLOW_IN);
      }
      return null;
    },
    parseBindingRestElement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(DOT_DOT_DOT);
      var identifier = this.parseBindingIdentifier_();
      return new SpreadPatternElement(this.getTreeLocation_(start), identifier);
    },
    parseObjectPattern_: function(useBinding) {
      var start = this.getTreeStartLocation_();
      var elements = [];
      this.eat_(OPEN_CURLY);
      var type;
      while ((type = peekType()) !== CLOSE_CURLY && type !== END_OF_FILE) {
        elements.push(this.parsePatternProperty_(useBinding));
        if (!this.eatIf_(COMMA))
          break;
      }
      this.eat_(CLOSE_CURLY);
      return new ObjectPattern(this.getTreeLocation_(start), elements);
    },
    parsePatternProperty_: function(useBinding) {
      var start = this.getTreeStartLocation_();
      var name = this.parsePropertyName_();
      var requireColon = name.type !== LITERAL_PROPERTY_NAME || !name.literalToken.isStrictKeyword() && name.literalToken.type !== IDENTIFIER;
      if (requireColon || peek(COLON)) {
        this.eat_(COLON);
        var element = this.parsePatternElement_(useBinding);
        return new ObjectPatternField(this.getTreeLocation_(start), name, element);
      }
      var token = name.literalToken;
      if (this.strictMode_ && token.isStrictKeyword())
        this.reportReservedIdentifier_(token);
      if (useBinding) {
        var binding = new BindingIdentifier(name.location, token);
        var initializer$__30 = this.parseInitializerOpt_(ALLOW_IN);
        return new BindingElement(this.getTreeLocation_(start), binding, initializer$__30);
      }
      var assignment = new IdentifierExpression(name.location, token);
      var initializer = this.parseInitializerOpt_(ALLOW_IN);
      return new AssignmentElement(this.getTreeLocation_(start), assignment, initializer);
    },
    parseAssignmentPattern_: function() {
      return this.parsePattern_(false);
    },
    parseArrayAssignmentPattern_: function() {
      return this.parseArrayPattern_(false);
    },
    parseAssignmentElement_: function() {
      var start = this.getTreeStartLocation_();
      var assignment = this.parseDestructuringAssignmentTarget_();
      var initializer = this.parseInitializerOpt_(ALLOW_IN);
      return new AssignmentElement(this.getTreeLocation_(start), assignment, initializer);
    },
    parseDestructuringAssignmentTarget_: function() {
      switch (peekType()) {
        case OPEN_SQUARE:
          return this.parseArrayAssignmentPattern_();
        case OPEN_CURLY:
          return this.parseObjectAssignmentPattern_();
      }
      var expression = this.parseLeftHandSideExpression_();
      return this.coverFormalsToParenExpression_(expression);
    },
    parseAssignmentRestElement_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(DOT_DOT_DOT);
      var id = this.parseDestructuringAssignmentTarget_();
      return new SpreadPatternElement(this.getTreeLocation_(start), id);
    },
    parseObjectAssignmentPattern_: function() {
      return this.parseObjectPattern_(false);
    },
    parseAssignmentProperty_: function() {
      return this.parsePatternProperty_(false);
    },
    parseTemplateLiteral_: function(operand) {
      var start = operand ? operand.location.start : this.getTreeStartLocation_();
      var token = nextToken();
      var elements = [new TemplateLiteralPortion(token.location, token)];
      if (token.type === NO_SUBSTITUTION_TEMPLATE) {
        return new TemplateLiteralExpression(this.getTreeLocation_(start), operand, elements);
      }
      var expression = this.parseExpression_(ALLOW_IN);
      elements.push(new TemplateSubstitution(expression.location, expression));
      while (expression.type !== SYNTAX_ERROR_TREE) {
        token = nextTemplateLiteralToken();
        if (token.type === ERROR || token.type === END_OF_FILE)
          break;
        elements.push(new TemplateLiteralPortion(token.location, token));
        if (token.type === TEMPLATE_TAIL)
          break;
        expression = this.parseExpression_(ALLOW_IN);
        elements.push(new TemplateSubstitution(expression.location, expression));
      }
      return new TemplateLiteralExpression(this.getTreeLocation_(start), operand, elements);
    },
    parseTypeAnnotationOpt_: function() {
      if (this.options_.types && this.eatOpt_(COLON)) {
        return this.parseType_();
      }
      return null;
    },
    parseType_: function() {
      switch (peekType()) {
        case NEW:
          return this.parseConstructorType_();
        case OPEN_PAREN:
        case OPEN_ANGLE:
          return this.parseFunctionType_();
      }
      var start = this.getTreeStartLocation_();
      var elementType = this.parsePrimaryType_();
      return this.parseUnionTypeSuffix_(start, elementType);
    },
    parsePrimaryType_: function() {
      var start = this.getTreeStartLocation_();
      var elementType,
          token;
      switch (peekType()) {
        case VOID:
          token = nextToken();
          elementType = new PredefinedType(this.getTreeLocation_(start), token);
          break;
        case IDENTIFIER:
          switch (peekToken().value) {
            case 'any':
            case 'boolean':
            case 'number':
            case 'string':
            case 'symbol':
              token = nextToken();
              elementType = new PredefinedType(this.getTreeLocation_(start), token);
              break;
            default:
              elementType = this.parseTypeReference_();
          }
          break;
        case TYPEOF:
          elementType = this.parseTypeQuery_(start);
          break;
        case OPEN_CURLY:
          elementType = this.parseObjectType_();
          break;
        default:
          return this.parseUnexpectedToken_(peekToken());
      }
      return this.parseArrayTypeSuffix_(start, elementType);
    },
    parseTypeReference_: function() {
      var start = this.getTreeStartLocation_();
      var typeName = this.parseTypeName_();
      var args = null;
      if (peek(OPEN_ANGLE)) {
        var args$__31 = this.parseTypeArguments_();
        return new TypeReference(this.getTreeLocation_(start), typeName, args$__31);
      }
      return typeName;
    },
    parseUnionTypeSuffix_: function(start, elementType) {
      if (peek(BAR)) {
        var types = [elementType];
        this.eat_(BAR);
        while (true) {
          types.push(this.parsePrimaryType_());
          if (!this.eatIf_(BAR)) {
            break;
          }
        }
        return new UnionType(this.getTreeLocation_(start), types);
      }
      return elementType;
    },
    parseArrayTypeSuffix_: function(start, elementType) {
      var token = peekTokenNoLineTerminator();
      if (token && token.type === OPEN_SQUARE) {
        this.eat_(OPEN_SQUARE);
        this.eat_(CLOSE_SQUARE);
        elementType = new ArrayType(this.getTreeLocation_(start), elementType);
        return this.parseArrayTypeSuffix_(start, elementType);
      }
      return elementType;
    },
    parseTypeArguments_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(OPEN_ANGLE);
      var args = [this.parseType_()];
      while (peek(COMMA)) {
        this.eat_(COMMA);
        args.push(this.parseType_());
      }
      var token = nextCloseAngle();
      if (token.type !== CLOSE_ANGLE) {
        return this.parseUnexpectedToken_(token);
      }
      return new TypeArguments(this.getTreeLocation_(start), args);
    },
    parseConstructorType_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(NEW);
      var typeParameters = this.parseTypeParametersOpt_();
      this.eat_(OPEN_PAREN);
      var parameterList = this.parseFormalParameters_();
      this.eat_(CLOSE_PAREN);
      this.eat_(ARROW);
      var returnType = this.parseType_();
      return new ConstructorType(this.getTreeLocation_(start), typeParameters, parameterList, returnType);
    },
    parseObjectType_: function() {
      var start = this.getTreeStartLocation_();
      var typeMembers = [];
      this.eat_(OPEN_CURLY);
      var type;
      while (this.peekTypeMember_(type = peekType())) {
        typeMembers.push(this.parseTypeMember_(type));
        if (!this.eatIf_(SEMI_COLON)) {
          break;
        }
      }
      this.eat_(CLOSE_CURLY);
      return new ObjectType(this.getTreeLocation_(start), typeMembers);
    },
    peekTypeMember_: function(type) {
      switch (type) {
        case NEW:
        case OPEN_PAREN:
        case OPEN_ANGLE:
        case OPEN_SQUARE:
        case IDENTIFIER:
        case STRING:
        case NUMBER:
          return true;
        default:
          return peekToken().isKeyword();
      }
    },
    parseTypeMember_: function(type) {
      switch (type) {
        case NEW:
          return this.parseConstructSignature_();
        case OPEN_PAREN:
        case OPEN_ANGLE:
          return this.parseCallSignature_();
        case OPEN_SQUARE:
          return this.parseIndexSignature_();
      }
      var start = this.getTreeStartLocation_();
      var propertyName = this.parseLiteralPropertyName_();
      var isOpt = this.eatIf_(QUESTION);
      type = peekType();
      if (type === OPEN_ANGLE || type === OPEN_PAREN) {
        var callSignature = this.parseCallSignature_();
        return new MethodSignature(this.getTreeLocation_(start), propertyName, isOpt, callSignature);
      }
      var typeAnnotation = this.parseTypeAnnotationOpt_();
      return new PropertySignature(this.getTreeLocation_(start), propertyName, isOpt, typeAnnotation);
    },
    parseCallSignature_: function() {
      var start = this.getTreeStartLocation_();
      var typeParameters = this.parseTypeParametersOpt_();
      this.eat_(OPEN_PAREN);
      var parameterList = this.parseFormalParameters_();
      this.eat_(CLOSE_PAREN);
      var returnType = this.parseTypeAnnotationOpt_();
      return new CallSignature(this.getTreeLocation_(start), typeParameters, parameterList, returnType);
    },
    parseConstructSignature_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(NEW);
      var typeParameters = this.parseTypeParametersOpt_();
      this.eat_(OPEN_PAREN);
      var parameterList = this.parseFormalParameters_();
      this.eat_(CLOSE_PAREN);
      var returnType = this.parseTypeAnnotationOpt_();
      return new ConstructSignature(this.getTreeLocation_(start), typeParameters, parameterList, returnType);
    },
    parseIndexSignature_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(OPEN_SQUARE);
      var id = this.eatId_();
      this.eat_(COLON);
      var typeName;
      var typeStart = this.getTreeStartLocation_();
      if (this.peekPredefinedString_('string')) {
        typeName = this.eatId_('string');
      } else {
        typeName = this.eatId_('number');
      }
      var indexType = new PredefinedType(this.getTreeLocation_(typeStart), typeName);
      this.eat_(CLOSE_SQUARE);
      this.eat_(COLON);
      var typeAnnotation = this.parseType_();
      return new IndexSignature(this.getTreeLocation_(start), id, indexType, typeAnnotation);
    },
    parseFunctionType_: function() {
      var start = this.getTreeStartLocation_();
      var typeParameters = this.parseTypeParametersOpt_();
      this.eat_(OPEN_PAREN);
      var parameterList = this.parseFormalParameters_();
      this.eat_(CLOSE_PAREN);
      this.eat_(ARROW);
      var returnType = this.parseType_();
      return new FunctionType(this.getTreeLocation_(start), typeParameters, parameterList, returnType);
    },
    parseTypeQuery_: function(start) {
      throw 'NYI';
    },
    peekTypeParameters_: function() {
      return peek(OPEN_ANGLE);
    },
    parseTypeParametersOpt_: function() {
      if (peek(OPEN_ANGLE)) {
        return this.parseTypeParameters_();
      }
      return null;
    },
    parseTypeParameters_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(OPEN_ANGLE);
      var parameters = [this.parseTypeParameter_()];
      while (peek(COMMA)) {
        this.eat_(COMMA);
        parameters.push(this.parseTypeParameter_());
      }
      this.eat_(CLOSE_ANGLE);
      return new TypeParameters(this.getTreeLocation_(start), parameters);
    },
    parseTypeParameter_: function() {
      var start = this.getTreeStartLocation_();
      var id = this.eatId_();
      var extendsType = null;
      if (this.eatIf_(EXTENDS)) {
        extendsType = this.parseType_();
      }
      return new TypeParameter(this.getTreeLocation_(start), id, extendsType);
    },
    parseNamedOrPredefinedType_: function() {
      var start = this.getTreeStartLocation_();
      switch (peekToken().value) {
        case 'any':
        case 'number':
        case 'boolean':
        case 'string':
          var token = nextToken();
          return new PredefinedType(this.getTreeLocation_(start), token);
        default:
          return this.parseTypeName_();
      }
    },
    parseTypeName_: function() {
      var start = this.getTreeStartLocation_();
      var id = this.eatId_();
      var typeName = new TypeName(this.getTreeLocation_(start), null, id);
      while (this.eatIf_(PERIOD)) {
        var memberName = this.eatIdName_();
        typeName = new TypeName(this.getTreeLocation_(start), typeName, memberName);
      }
      return typeName;
    },
    parseInterfaceDeclaration_: function() {
      var start = this.getTreeStartLocation_();
      this.eat_(INTERFACE);
      var name = this.eatId_();
      var typeParameters = this.parseTypeParametersOpt_();
      var extendsClause;
      if (this.eatIf_(EXTENDS)) {
        extendsClause = this.parseInterfaceExtendsClause_();
      } else {
        extendsClause = [];
      }
      var objectType = this.parseObjectType_();
      return new InterfaceDeclaration(this.getTreeLocation_(start), name, typeParameters, extendsClause, objectType);
    },
    parseInterfaceExtendsClause_: function() {
      var result = [this.parseTypeReference_()];
      while (this.eatIf_(COMMA)) {
        result.push(this.parseTypeReference_());
      }
      return result;
    },
    parseAnnotatedDeclarations_: function(parsingModuleItem) {
      this.pushAnnotations_();
      var declaration;
      var type = peekType();
      if (parsingModuleItem) {
        declaration = this.parseModuleItem_(type);
      } else {
        declaration = this.parseStatementListItem_(type);
      }
      if (this.annotations_.length > 0) {
        return this.parseSyntaxError_('Unsupported annotated expression');
      }
      return declaration;
    },
    parseAnnotations_: function() {
      var annotations = [];
      while (this.eatIf_(AT)) {
        annotations.push(this.parseAnnotation_());
      }
      return annotations;
    },
    pushAnnotations_: function() {
      this.annotations_ = this.parseAnnotations_();
    },
    popAnnotations_: function() {
      var annotations = this.annotations_;
      this.annotations_ = [];
      return annotations;
    },
    parseAnnotation_: function() {
      var start = this.getTreeStartLocation_();
      var expression = this.parseMemberExpressionNoNew_();
      var args = null;
      if (peek(OPEN_PAREN))
        args = this.parseArguments_();
      return new Annotation(this.getTreeLocation_(start), expression, args);
    },
    eatPossibleImplicitSemiColon_: function() {
      var token = peekTokenNoLineTerminator();
      if (!token)
        return;
      switch (token.type) {
        case SEMI_COLON:
          nextToken();
          return;
        case END_OF_FILE:
        case CLOSE_CURLY:
          return;
      }
      this.reportError_('Semi-colon expected');
    },
    peekImplicitSemiColon_: function() {
      switch (peekType()) {
        case SEMI_COLON:
        case CLOSE_CURLY:
        case END_OF_FILE:
          return true;
      }
      var token = peekTokenNoLineTerminator();
      return token === null;
    },
    eatOpt_: function(expectedTokenType) {
      if (peek(expectedTokenType))
        return nextToken();
      return null;
    },
    eatIdOpt_: function() {
      return peek(IDENTIFIER) ? this.eatId_() : null;
    },
    eatId_: function() {
      var expected = arguments[0];
      var token = nextToken();
      if (!token) {
        if (expected)
          this.reportError_(peekToken(), ("expected '" + expected + "'"));
        return null;
      }
      if (token.type === IDENTIFIER) {
        if (expected && token.value !== expected)
          this.reportExpectedError_(token, expected);
        return token;
      }
      if (token.isStrictKeyword()) {
        if (this.strictMode_) {
          this.reportReservedIdentifier_(token);
        } else {
          return new IdentifierToken(token.location, token.type);
        }
      } else {
        this.reportExpectedError_(token, expected || 'identifier');
      }
      return token;
    },
    eatIdName_: function() {
      var t = nextToken();
      if (t.type !== IDENTIFIER) {
        if (!t.isKeyword()) {
          this.reportExpectedError_(t, 'identifier');
          return null;
        }
        return new IdentifierToken(t.location, t.type);
      }
      return t;
    },
    eat_: function(expectedTokenType) {
      var token = nextToken();
      if (token.type !== expectedTokenType) {
        this.reportExpectedError_(token, expectedTokenType);
        return null;
      }
      return token;
    },
    eatIf_: function(expectedTokenType) {
      if (peek(expectedTokenType)) {
        nextToken();
        return true;
      }
      return false;
    },
    reportExpectedError_: function(token, expected) {
      this.reportError_(token, ("Unexpected token " + token));
    },
    getTreeStartLocation_: function() {
      return peekToken().location.start;
    },
    getTreeEndLocation_: function() {
      return getLastToken().location.end;
    },
    getTreeLocation_: function(start) {
      return new SourceRange(start, this.getTreeEndLocation_());
    },
    handleComment: function(range) {},
    isAtEnd: function() {
      return isAtEnd();
    },
    reportError_: function() {
      for (var args = [],
          $__16 = 0; $__16 < arguments.length; $__16++)
        args[$__16] = arguments[$__16];
      if (args.length === 1) {
        this.errorReporter_.reportError(getPosition(), args[0]);
      } else {
        var location = args[0];
        if (location instanceof Token) {
          location = location.location;
        }
        this.errorReporter_.reportError(location.start, args[1]);
      }
    },
    reportReservedIdentifier_: function(token) {
      this.reportError_(token, (token.type + " is a reserved identifier"));
    }
  }, {});
}();
Object.defineProperties(module.exports, {
  Parser: {get: function() {
      return Parser;
    }},
  __esModule: {value: true}
});
