"use strict";
var $__util_47_MutedErrorReporter_46_js__,
    $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__,
    $__WebPageTranscoder_46_js__,
    $__HTMLImportTranscoder_46_js__,
    $__Options_46_js__,
    $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__,
    $__Compiler_46_js__,
    $__util_47_ErrorReporter_46_js__,
    $__util_47_CollectingErrorReporter_46_js__,
    $__syntax_47_Parser_46_js__,
    $__syntax_47_trees_47_ParseTrees_46_js__,
    $__syntax_47_SourceFile_46_js__,
    $__outputgeneration_47_ParseTreeMapWriter_46_js__,
    $__outputgeneration_47_ParseTreeWriter_46_js__,
    $__outputgeneration_47_regexpuRewritePattern_46_js__,
    $__outputgeneration_47_SourceMapIntegration_46_js__,
    $__outputgeneration_47_SourceMapIntegration_46_js__,
    $__outputgeneration_47_TreeWriter_46_js__,
    $__codegeneration_47_module_47_AttachModuleNameTransformer_46_js__,
    $__codegeneration_47_CloneTreeTransformer_46_js__,
    $__codegeneration_47_FromOptionsTransformer_46_js__,
    $__codegeneration_47_PureES6Transformer_46_js__,
    $__codegeneration_47_module_47_createModuleEvaluationStatement_46_js__,
    $__codegeneration_47_PlaceholderParser_46_js__,
    $__runtime_47_Loader_46_js__,
    $__runtime_47_LoaderCompiler_46_js__,
    $__runtime_47_TraceurLoader_46_js__,
    $__node_47_NodeLoaderCompiler_46_js__,
    $__runtime_47_InlineLoaderCompiler_46_js__,
    $__runtime_47_NodeTraceurLoader_46_js__,
    $__runtime_47_TraceurLoader_46_js__;
($__util_47_MutedErrorReporter_46_js__ = require("./util/MutedErrorReporter.js"), $__util_47_MutedErrorReporter_46_js__ && $__util_47_MutedErrorReporter_46_js__.__esModule && $__util_47_MutedErrorReporter_46_js__ || {default: $__util_47_MutedErrorReporter_46_js__});
var $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__ = ($___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__ = require("@traceur/src/runtime/ModuleStore.js"), $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__ && $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__.__esModule && $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__ || {default: $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__});
var $__WebPageTranscoder_46_js__ = ($__WebPageTranscoder_46_js__ = require("./WebPageTranscoder.js"), $__WebPageTranscoder_46_js__ && $__WebPageTranscoder_46_js__.__esModule && $__WebPageTranscoder_46_js__ || {default: $__WebPageTranscoder_46_js__});
var $__HTMLImportTranscoder_46_js__ = ($__HTMLImportTranscoder_46_js__ = require("./HTMLImportTranscoder.js"), $__HTMLImportTranscoder_46_js__ && $__HTMLImportTranscoder_46_js__.__esModule && $__HTMLImportTranscoder_46_js__ || {default: $__HTMLImportTranscoder_46_js__});
var $__0 = ($__Options_46_js__ = require("./Options.js"), $__Options_46_js__ && $__Options_46_js__.__esModule && $__Options_46_js__ || {default: $__Options_46_js__}),
    addOptions = $__0.addOptions,
    CommandOptions = $__0.CommandOptions,
    Options = $__0.Options;
var ModuleStore = ($___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__ = require("@traceur/src/runtime/ModuleStore.js"), $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__ && $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__.__esModule && $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__ || {default: $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__}).ModuleStore;
function get(name) {
  return ModuleStore.get(ModuleStore.normalize('./' + name, __moduleName));
}
var $__Compiler_46_js__ = ($__Compiler_46_js__ = require("./Compiler.js"), $__Compiler_46_js__ && $__Compiler_46_js__.__esModule && $__Compiler_46_js__ || {default: $__Compiler_46_js__});
var ErrorReporter = ($__util_47_ErrorReporter_46_js__ = require("./util/ErrorReporter.js"), $__util_47_ErrorReporter_46_js__ && $__util_47_ErrorReporter_46_js__.__esModule && $__util_47_ErrorReporter_46_js__ || {default: $__util_47_ErrorReporter_46_js__}).ErrorReporter;
var CollectingErrorReporter = ($__util_47_CollectingErrorReporter_46_js__ = require("./util/CollectingErrorReporter.js"), $__util_47_CollectingErrorReporter_46_js__ && $__util_47_CollectingErrorReporter_46_js__.__esModule && $__util_47_CollectingErrorReporter_46_js__ || {default: $__util_47_CollectingErrorReporter_46_js__}).CollectingErrorReporter;
var util = {
  addOptions: addOptions,
  CommandOptions: CommandOptions,
  CollectingErrorReporter: CollectingErrorReporter,
  ErrorReporter: ErrorReporter,
  Options: Options
};
var Parser = ($__syntax_47_Parser_46_js__ = require("./syntax/Parser.js"), $__syntax_47_Parser_46_js__ && $__syntax_47_Parser_46_js__.__esModule && $__syntax_47_Parser_46_js__ || {default: $__syntax_47_Parser_46_js__}).Parser;
var Script = ($__syntax_47_trees_47_ParseTrees_46_js__ = require("./syntax/trees/ParseTrees.js"), $__syntax_47_trees_47_ParseTrees_46_js__ && $__syntax_47_trees_47_ParseTrees_46_js__.__esModule && $__syntax_47_trees_47_ParseTrees_46_js__ || {default: $__syntax_47_trees_47_ParseTrees_46_js__}).Script;
var SourceFile = ($__syntax_47_SourceFile_46_js__ = require("./syntax/SourceFile.js"), $__syntax_47_SourceFile_46_js__ && $__syntax_47_SourceFile_46_js__.__esModule && $__syntax_47_SourceFile_46_js__ || {default: $__syntax_47_SourceFile_46_js__}).SourceFile;
var syntax = {
  Parser: Parser,
  SourceFile: SourceFile,
  trees: {Script: Script}
};
var ParseTreeMapWriter = ($__outputgeneration_47_ParseTreeMapWriter_46_js__ = require("./outputgeneration/ParseTreeMapWriter.js"), $__outputgeneration_47_ParseTreeMapWriter_46_js__ && $__outputgeneration_47_ParseTreeMapWriter_46_js__.__esModule && $__outputgeneration_47_ParseTreeMapWriter_46_js__ || {default: $__outputgeneration_47_ParseTreeMapWriter_46_js__}).ParseTreeMapWriter;
var ParseTreeWriter = ($__outputgeneration_47_ParseTreeWriter_46_js__ = require("./outputgeneration/ParseTreeWriter.js"), $__outputgeneration_47_ParseTreeWriter_46_js__ && $__outputgeneration_47_ParseTreeWriter_46_js__.__esModule && $__outputgeneration_47_ParseTreeWriter_46_js__ || {default: $__outputgeneration_47_ParseTreeWriter_46_js__}).ParseTreeWriter;
var regexpuRewritePattern = ($__outputgeneration_47_regexpuRewritePattern_46_js__ = require("./outputgeneration/regexpuRewritePattern.js"), $__outputgeneration_47_regexpuRewritePattern_46_js__ && $__outputgeneration_47_regexpuRewritePattern_46_js__.__esModule && $__outputgeneration_47_regexpuRewritePattern_46_js__ || {default: $__outputgeneration_47_regexpuRewritePattern_46_js__}).regexpuRewritePattern;
var SourceMapConsumer = ($__outputgeneration_47_SourceMapIntegration_46_js__ = require("./outputgeneration/SourceMapIntegration.js"), $__outputgeneration_47_SourceMapIntegration_46_js__ && $__outputgeneration_47_SourceMapIntegration_46_js__.__esModule && $__outputgeneration_47_SourceMapIntegration_46_js__ || {default: $__outputgeneration_47_SourceMapIntegration_46_js__}).SourceMapConsumer;
var SourceMapGenerator = ($__outputgeneration_47_SourceMapIntegration_46_js__ = require("./outputgeneration/SourceMapIntegration.js"), $__outputgeneration_47_SourceMapIntegration_46_js__ && $__outputgeneration_47_SourceMapIntegration_46_js__.__esModule && $__outputgeneration_47_SourceMapIntegration_46_js__ || {default: $__outputgeneration_47_SourceMapIntegration_46_js__}).SourceMapGenerator;
var TreeWriter = ($__outputgeneration_47_TreeWriter_46_js__ = require("./outputgeneration/TreeWriter.js"), $__outputgeneration_47_TreeWriter_46_js__ && $__outputgeneration_47_TreeWriter_46_js__.__esModule && $__outputgeneration_47_TreeWriter_46_js__ || {default: $__outputgeneration_47_TreeWriter_46_js__}).TreeWriter;
var outputgeneration = {
  ParseTreeMapWriter: ParseTreeMapWriter,
  ParseTreeWriter: ParseTreeWriter,
  regexpuRewritePattern: regexpuRewritePattern,
  SourceMapConsumer: SourceMapConsumer,
  SourceMapGenerator: SourceMapGenerator,
  TreeWriter: TreeWriter
};
var AttachModuleNameTransformer = ($__codegeneration_47_module_47_AttachModuleNameTransformer_46_js__ = require("./codegeneration/module/AttachModuleNameTransformer.js"), $__codegeneration_47_module_47_AttachModuleNameTransformer_46_js__ && $__codegeneration_47_module_47_AttachModuleNameTransformer_46_js__.__esModule && $__codegeneration_47_module_47_AttachModuleNameTransformer_46_js__ || {default: $__codegeneration_47_module_47_AttachModuleNameTransformer_46_js__}).AttachModuleNameTransformer;
var CloneTreeTransformer = ($__codegeneration_47_CloneTreeTransformer_46_js__ = require("./codegeneration/CloneTreeTransformer.js"), $__codegeneration_47_CloneTreeTransformer_46_js__ && $__codegeneration_47_CloneTreeTransformer_46_js__.__esModule && $__codegeneration_47_CloneTreeTransformer_46_js__ || {default: $__codegeneration_47_CloneTreeTransformer_46_js__}).CloneTreeTransformer;
var FromOptionsTransformer = ($__codegeneration_47_FromOptionsTransformer_46_js__ = require("./codegeneration/FromOptionsTransformer.js"), $__codegeneration_47_FromOptionsTransformer_46_js__ && $__codegeneration_47_FromOptionsTransformer_46_js__.__esModule && $__codegeneration_47_FromOptionsTransformer_46_js__ || {default: $__codegeneration_47_FromOptionsTransformer_46_js__}).FromOptionsTransformer;
var PureES6Transformer = ($__codegeneration_47_PureES6Transformer_46_js__ = require("./codegeneration/PureES6Transformer.js"), $__codegeneration_47_PureES6Transformer_46_js__ && $__codegeneration_47_PureES6Transformer_46_js__.__esModule && $__codegeneration_47_PureES6Transformer_46_js__ || {default: $__codegeneration_47_PureES6Transformer_46_js__}).PureES6Transformer;
var createModuleEvaluationStatement = ($__codegeneration_47_module_47_createModuleEvaluationStatement_46_js__ = require("./codegeneration/module/createModuleEvaluationStatement.js"), $__codegeneration_47_module_47_createModuleEvaluationStatement_46_js__ && $__codegeneration_47_module_47_createModuleEvaluationStatement_46_js__.__esModule && $__codegeneration_47_module_47_createModuleEvaluationStatement_46_js__ || {default: $__codegeneration_47_module_47_createModuleEvaluationStatement_46_js__}).createModuleEvaluationStatement;
var $__18 = ($__codegeneration_47_PlaceholderParser_46_js__ = require("./codegeneration/PlaceholderParser.js"), $__codegeneration_47_PlaceholderParser_46_js__ && $__codegeneration_47_PlaceholderParser_46_js__.__esModule && $__codegeneration_47_PlaceholderParser_46_js__ || {default: $__codegeneration_47_PlaceholderParser_46_js__}),
    parseExpression = $__18.parseExpression,
    parseModule = $__18.parseModule,
    parseScript = $__18.parseScript,
    parseStatement = $__18.parseStatement;
var codegeneration = {
  CloneTreeTransformer: CloneTreeTransformer,
  FromOptionsTransformer: FromOptionsTransformer,
  PureES6Transformer: PureES6Transformer,
  parseExpression: parseExpression,
  parseModule: parseModule,
  parseScript: parseScript,
  parseStatement: parseStatement,
  module: {
    AttachModuleNameTransformer: AttachModuleNameTransformer,
    createModuleEvaluationStatement: createModuleEvaluationStatement
  }
};
var Loader = ($__runtime_47_Loader_46_js__ = require("./runtime/Loader.js"), $__runtime_47_Loader_46_js__ && $__runtime_47_Loader_46_js__.__esModule && $__runtime_47_Loader_46_js__ || {default: $__runtime_47_Loader_46_js__}).Loader;
var LoaderCompiler = ($__runtime_47_LoaderCompiler_46_js__ = require("./runtime/LoaderCompiler.js"), $__runtime_47_LoaderCompiler_46_js__ && $__runtime_47_LoaderCompiler_46_js__.__esModule && $__runtime_47_LoaderCompiler_46_js__ || {default: $__runtime_47_LoaderCompiler_46_js__}).LoaderCompiler;
var BrowserTraceurLoader = ($__runtime_47_TraceurLoader_46_js__ = require("./runtime/TraceurLoader.js"), $__runtime_47_TraceurLoader_46_js__ && $__runtime_47_TraceurLoader_46_js__.__esModule && $__runtime_47_TraceurLoader_46_js__ || {default: $__runtime_47_TraceurLoader_46_js__}).BrowserTraceurLoader;
var NodeLoaderCompiler = ($__node_47_NodeLoaderCompiler_46_js__ = require("./node/NodeLoaderCompiler.js"), $__node_47_NodeLoaderCompiler_46_js__ && $__node_47_NodeLoaderCompiler_46_js__.__esModule && $__node_47_NodeLoaderCompiler_46_js__ || {default: $__node_47_NodeLoaderCompiler_46_js__}).NodeLoaderCompiler;
var InlineLoaderCompiler = ($__runtime_47_InlineLoaderCompiler_46_js__ = require("./runtime/InlineLoaderCompiler.js"), $__runtime_47_InlineLoaderCompiler_46_js__ && $__runtime_47_InlineLoaderCompiler_46_js__.__esModule && $__runtime_47_InlineLoaderCompiler_46_js__ || {default: $__runtime_47_InlineLoaderCompiler_46_js__}).InlineLoaderCompiler;
var NodeTraceurLoader = ($__runtime_47_NodeTraceurLoader_46_js__ = require("./runtime/NodeTraceurLoader.js"), $__runtime_47_NodeTraceurLoader_46_js__ && $__runtime_47_NodeTraceurLoader_46_js__.__esModule && $__runtime_47_NodeTraceurLoader_46_js__ || {default: $__runtime_47_NodeTraceurLoader_46_js__}).NodeTraceurLoader;
var TraceurLoader = ($__runtime_47_TraceurLoader_46_js__ = require("./runtime/TraceurLoader.js"), $__runtime_47_TraceurLoader_46_js__ && $__runtime_47_TraceurLoader_46_js__.__esModule && $__runtime_47_TraceurLoader_46_js__ || {default: $__runtime_47_TraceurLoader_46_js__}).TraceurLoader;
var runtime = {
  BrowserTraceurLoader: BrowserTraceurLoader,
  InlineLoaderCompiler: InlineLoaderCompiler,
  Loader: Loader,
  LoaderCompiler: LoaderCompiler,
  NodeLoaderCompiler: NodeLoaderCompiler,
  NodeTraceurLoader: NodeTraceurLoader,
  TraceurLoader: TraceurLoader
};
Object.defineProperties(module.exports, {
  ModuleStore: {get: function() {
      return $___64_traceur_47_src_47_runtime_47_ModuleStore_46_js__.ModuleStore;
    }},
  WebPageTranscoder: {get: function() {
      return $__WebPageTranscoder_46_js__.WebPageTranscoder;
    }},
  HTMLImportTranscoder: {get: function() {
      return $__HTMLImportTranscoder_46_js__.HTMLImportTranscoder;
    }},
  get: {get: function() {
      return get;
    }},
  Compiler: {get: function() {
      return $__Compiler_46_js__.Compiler;
    }},
  util: {get: function() {
      return util;
    }},
  syntax: {get: function() {
      return syntax;
    }},
  outputgeneration: {get: function() {
      return outputgeneration;
    }},
  codegeneration: {get: function() {
      return codegeneration;
    }},
  runtime: {get: function() {
      return runtime;
    }},
  __esModule: {value: true}
});
