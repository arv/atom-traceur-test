"use strict";
var $__runtime_47_Loader_46_js__,
    $__runtime_47_TraceurLoader_46_js__,
    $__util_47_ErrorReporter_46_js__,
    $__Options_46_js__;
var Loader = ($__runtime_47_Loader_46_js__ = require("./runtime/Loader.js"), $__runtime_47_Loader_46_js__ && $__runtime_47_Loader_46_js__.__esModule && $__runtime_47_Loader_46_js__ || {default: $__runtime_47_Loader_46_js__}).Loader;
var BrowserTraceurLoader = ($__runtime_47_TraceurLoader_46_js__ = require("./runtime/TraceurLoader.js"), $__runtime_47_TraceurLoader_46_js__ && $__runtime_47_TraceurLoader_46_js__.__esModule && $__runtime_47_TraceurLoader_46_js__ || {default: $__runtime_47_TraceurLoader_46_js__}).BrowserTraceurLoader;
var ErrorReporter = ($__util_47_ErrorReporter_46_js__ = require("./util/ErrorReporter.js"), $__util_47_ErrorReporter_46_js__ && $__util_47_ErrorReporter_46_js__.__esModule && $__util_47_ErrorReporter_46_js__ || {default: $__util_47_ErrorReporter_46_js__}).ErrorReporter;
var Options = ($__Options_46_js__ = require("./Options.js"), $__Options_46_js__ && $__Options_46_js__.__esModule && $__Options_46_js__ || {default: $__Options_46_js__}).Options;
var scriptSelector = 'script[type="module"],script[type="text/traceur"]';
var WebPageTranscoder = function() {
  function WebPageTranscoder() {
    var url = arguments[0] !== (void 0) ? arguments[0] : document.location.href;
    var traceurOptions = arguments[1] !== (void 0) ? arguments[1] : new Options();
    this.url = url;
    this.numPending_ = 0;
    this.numberInlined_ = 0;
    this.traceurOptions_ = traceurOptions;
  }
  return ($traceurRuntime.createClass)(WebPageTranscoder, {
    asyncLoad_: function(url, fncOfContent, onScriptsReady) {
      var $__4 = this;
      this.numPending_++;
      webLoader.load(url, function(content) {
        if (content)
          fncOfContent(content);
        else
          console.warn('Failed to load', url);
        if (--$__4.numPending_ <= 0)
          onScriptsReady();
      }, function(error) {
        console.error('WebPageTranscoder FAILED to load ' + url, error.stack || error);
      });
    },
    addFileFromScriptElement: function(scriptElement, name, content) {
      var nameInfo = {
        address: name,
        referrerName: window.location.href,
        name: name,
        metadata: {traceurOptions: this.traceurOptions_}
      };
      var loadingResult;
      if (scriptElement.type === 'module')
        loadingResult = this.loader.module(content, nameInfo);
      else
        loadingResult = this.loader.script(content, nameInfo);
      loadingResult.catch(function(error) {
        console.error(error.stack || error);
      });
    },
    nextInlineScriptName_: function() {
      this.numberInlined_ += 1;
      if (!this.inlineScriptNameBase_) {
        var segments = this.url.split('.');
        segments.pop();
        this.inlineScriptNameBase_ = segments.join('.');
      }
      return this.inlineScriptNameBase_ + '_inline_script_' + this.numberInlined_ + '.js';
    },
    addFilesFromScriptElements: function(scriptElements, onScriptsReady) {
      for (var i = 0,
          length = scriptElements.length; i < length; i++) {
        var scriptElement = scriptElements[i];
        if (!scriptElement.src) {
          var name = this.nextInlineScriptName_();
          var content = scriptElement.textContent;
          this.addFileFromScriptElement(scriptElement, name, content);
        } else {
          var name$__6 = scriptElement.src;
          this.asyncLoad_(name$__6, this.addFileFromScriptElement.bind(this, scriptElement, name$__6), onScriptsReady);
        }
      }
      if (this.numPending_ <= 0)
        onScriptsReady();
    },
    get reporter() {
      if (!this.reporter_) {
        this.reporter_ = new ErrorReporter();
      }
      return this.reporter_;
    },
    get loader() {
      if (!this.loader_) {
        this.loader_ = new BrowserTraceurLoader();
      }
      return this.loader_;
    },
    putFile: function(file) {
      var scriptElement = document.createElement('script');
      scriptElement.setAttribute('data-traceur-src-url', file.name);
      scriptElement.textContent = file.generatedSource;
      var parent = file.scriptElement.parentNode;
      parent.insertBefore(scriptElement, file.scriptElement || null);
    },
    selectAndProcessScripts: function(done) {
      var selector = scriptSelector;
      var scripts = document.querySelectorAll(selector);
      if (!scripts.length) {
        done();
        return;
      }
      this.addFilesFromScriptElements(scripts, function() {
        done();
      });
    },
    run: function() {
      var done = arguments[0] !== (void 0) ? arguments[0] : function() {};
      var $__4 = this;
      var ready = document.readyState;
      if (ready === 'complete' || ready === 'loaded') {
        this.selectAndProcessScripts(done);
      } else {
        document.addEventListener('DOMContentLoaded', function() {
          return $__4.selectAndProcessScripts(done);
        }, false);
      }
    }
  }, {});
}();
Object.defineProperties(module.exports, {
  scriptSelector: {get: function() {
      return scriptSelector;
    }},
  WebPageTranscoder: {get: function() {
      return WebPageTranscoder;
    }},
  __esModule: {value: true}
});
