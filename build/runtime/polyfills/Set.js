"use strict";
var $__utils_46_js__,
    $__Map_46_js__;
var $__0 = ($__utils_46_js__ = require("./utils.js"), $__utils_46_js__ && $__utils_46_js__.__esModule && $__utils_46_js__ || {default: $__utils_46_js__}),
    isObject = $__0.isObject,
    maybeAddIterator = $__0.maybeAddIterator,
    registerPolyfill = $__0.registerPolyfill;
var Map = ($__Map_46_js__ = require("./Map.js"), $__Map_46_js__ && $__Map_46_js__.__esModule && $__Map_46_js__ || {default: $__Map_46_js__}).Map;
var getOwnHashObject = $traceurRuntime.getOwnHashObject;
var $hasOwnProperty = Object.prototype.hasOwnProperty;
function initSet(set) {
  set.map_ = new Map();
}
var Set = function() {
  function Set() {
    var iterable = arguments[0];
    if (!isObject(this))
      throw new TypeError('Set called on incompatible type');
    if ($hasOwnProperty.call(this, 'map_')) {
      throw new TypeError('Set can not be reentrantly initialised');
    }
    initSet(this);
    if (iterable !== null && iterable !== undefined) {
      var $__7 = true;
      var $__8 = false;
      var $__9 = undefined;
      try {
        for (var $__5 = void 0,
            $__4 = (iterable)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__7 = ($__5 = $__4.next()).done); $__7 = true) {
          var item = $__5.value;
          {
            this.add(item);
          }
        }
      } catch ($__10) {
        $__8 = true;
        $__9 = $__10;
      } finally {
        try {
          if (!$__7 && $__4.return != null) {
            $__4.return();
          }
        } finally {
          if ($__8) {
            throw $__9;
          }
        }
      }
    }
  }
  return ($traceurRuntime.createClass)(Set, {
    get size() {
      return this.map_.size;
    },
    has: function(key) {
      return this.map_.has(key);
    },
    add: function(key) {
      this.map_.set(key, key);
      return this;
    },
    delete: function(key) {
      return this.map_.delete(key);
    },
    clear: function() {
      return this.map_.clear();
    },
    forEach: function(callbackFn) {
      var thisArg = arguments[1];
      var $__2 = this;
      return this.map_.forEach(function(value, key) {
        callbackFn.call(thisArg, key, key, $__2);
      });
    },
    values: $traceurRuntime.initGeneratorFunction(function $__12() {
      var $__13,
          $__14;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__13 = $ctx.wrapYieldStar(this.map_.keys()[Symbol.iterator]());
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__14 = $__13[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__14.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__14.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__14.value;
            default:
              return $ctx.end();
          }
      }, $__12, this);
    }),
    entries: $traceurRuntime.initGeneratorFunction(function $__15() {
      var $__16,
          $__17;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__16 = $ctx.wrapYieldStar(this.map_.entries()[Symbol.iterator]());
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__17 = $__16[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__17.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__17.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__17.value;
            default:
              return $ctx.end();
          }
      }, $__15, this);
    })
  }, {});
}();
Object.defineProperty(Set.prototype, Symbol.iterator, {
  configurable: true,
  writable: true,
  value: Set.prototype.values
});
Object.defineProperty(Set.prototype, 'keys', {
  configurable: true,
  writable: true,
  value: Set.prototype.values
});
function polyfillSet(global) {
  var $__11 = global,
      Object = $__11.Object,
      Symbol = $__11.Symbol;
  if (!global.Set)
    global.Set = Set;
  var setPrototype = global.Set.prototype;
  if (setPrototype.values) {
    maybeAddIterator(setPrototype, setPrototype.values, Symbol);
    maybeAddIterator(Object.getPrototypeOf(new global.Set().values()), function() {
      return this;
    }, Symbol);
  }
}
registerPolyfill(polyfillSet);
Object.defineProperties(module.exports, {
  Set: {get: function() {
      return Set;
    }},
  polyfillSet: {get: function() {
      return polyfillSet;
    }},
  __esModule: {value: true}
});
