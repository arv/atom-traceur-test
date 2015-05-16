module.exports = function() {
  "use strict";
  (function(global) {
    'use strict';
    if (global.$traceurRuntime) {
      return;
    }
    var $Object = Object;
    var $TypeError = TypeError;
    var $create = $Object.create;
    var $defineProperties = $Object.defineProperties;
    var $defineProperty = $Object.defineProperty;
    var $freeze = $Object.freeze;
    var $getOwnPropertyDescriptor = $Object.getOwnPropertyDescriptor;
    var $getOwnPropertyNames = $Object.getOwnPropertyNames;
    var $keys = $Object.keys;
    var $hasOwnProperty = $Object.prototype.hasOwnProperty;
    var $toString = $Object.prototype.toString;
    var $preventExtensions = Object.preventExtensions;
    var $seal = Object.seal;
    var $isExtensible = Object.isExtensible;
    var $apply = Function.prototype.call.bind(Function.prototype.apply);
    function $bind(operand, thisArg, args) {
      var argArray = [thisArg];
      for (var i = 0; i < args.length; i++) {
        argArray[i + 1] = args[i];
      }
      var func = $apply(Function.prototype.bind, operand, argArray);
      return func;
    }
    function $construct(func, argArray) {
      var object = new ($bind(func, null, argArray));
      return object;
    }
    var counter = 0;
    function newUniqueString() {
      return '__$' + Math.floor(Math.random() * 1e9) + '$' + ++counter + '$__';
    }
    var privateNames = $create(null);
    function isPrivateName(s) {
      return privateNames[s];
    }
    function createPrivateName() {
      var s = newUniqueString();
      privateNames[s] = true;
      return s;
    }
    var CONTINUATION_TYPE = Object.create(null);
    function createContinuation(operand, thisArg, argsArray) {
      return [CONTINUATION_TYPE, operand, thisArg, argsArray];
    }
    function isContinuation(object) {
      return object && object[0] === CONTINUATION_TYPE;
    }
    var isTailRecursiveName = null;
    function setupProperTailCalls() {
      isTailRecursiveName = createPrivateName();
      Function.prototype.call = initTailRecursiveFunction(function call(thisArg) {
        var result = tailCall(function(thisArg) {
          var argArray = [];
          for (var i = 1; i < arguments.length; ++i) {
            argArray[i - 1] = arguments[i];
          }
          var continuation = createContinuation(this, thisArg, argArray);
          return continuation;
        }, this, arguments);
        return result;
      });
      Function.prototype.apply = initTailRecursiveFunction(function apply(thisArg, argArray) {
        var result = tailCall(function(thisArg, argArray) {
          var continuation = createContinuation(this, thisArg, argArray);
          return continuation;
        }, this, arguments);
        return result;
      });
    }
    function initTailRecursiveFunction(func) {
      if (isTailRecursiveName === null) {
        setupProperTailCalls();
      }
      func[isTailRecursiveName] = true;
      return func;
    }
    function isTailRecursive(func) {
      return !!func[isTailRecursiveName];
    }
    function tailCall(func, thisArg, argArray) {
      var continuation = argArray[0];
      if (isContinuation(continuation)) {
        continuation = $apply(func, thisArg, continuation[3]);
        return continuation;
      }
      continuation = createContinuation(func, thisArg, argArray);
      while (true) {
        if (isTailRecursive(func)) {
          continuation = $apply(func, continuation[2], [continuation]);
        } else {
          continuation = $apply(func, continuation[2], continuation[3]);
        }
        if (!isContinuation(continuation)) {
          return continuation;
        }
        func = continuation[1];
      }
    }
    function construct() {
      var object;
      if (isTailRecursive(this)) {
        object = $construct(this, [createContinuation(null, null, arguments)]);
      } else {
        object = $construct(this, arguments);
      }
      return object;
    }
    var $traceurRuntime = {
      initTailRecursiveFunction: initTailRecursiveFunction,
      call: tailCall,
      continuation: createContinuation,
      construct: construct
    };
    (function() {
      function nonEnum(value) {
        return {
          configurable: true,
          enumerable: false,
          value: value,
          writable: true
        };
      }
      var method = nonEnum;
      var symbolInternalProperty = newUniqueString();
      var symbolDescriptionProperty = newUniqueString();
      var symbolDataProperty = newUniqueString();
      var symbolValues = $create(null);
      function isShimSymbol(symbol) {
        return typeof symbol === 'object' && symbol instanceof SymbolValue;
      }
      function typeOf(v) {
        if (isShimSymbol(v))
          return 'symbol';
        return typeof v;
      }
      function Symbol(description) {
        var value = new SymbolValue(description);
        if (!(this instanceof Symbol))
          return value;
        throw new TypeError('Symbol cannot be new\'ed');
      }
      $defineProperty(Symbol.prototype, 'constructor', nonEnum(Symbol));
      $defineProperty(Symbol.prototype, 'toString', method(function() {
        var symbolValue = this[symbolDataProperty];
        return symbolValue[symbolInternalProperty];
      }));
      $defineProperty(Symbol.prototype, 'valueOf', method(function() {
        var symbolValue = this[symbolDataProperty];
        if (!symbolValue)
          throw TypeError('Conversion from symbol to string');
        if (!getOption('symbols'))
          return symbolValue[symbolInternalProperty];
        return symbolValue;
      }));
      function SymbolValue(description) {
        var key = newUniqueString();
        $defineProperty(this, symbolDataProperty, {value: this});
        $defineProperty(this, symbolInternalProperty, {value: key});
        $defineProperty(this, symbolDescriptionProperty, {value: description});
        freeze(this);
        symbolValues[key] = this;
      }
      $defineProperty(SymbolValue.prototype, 'constructor', nonEnum(Symbol));
      $defineProperty(SymbolValue.prototype, 'toString', {
        value: Symbol.prototype.toString,
        enumerable: false
      });
      $defineProperty(SymbolValue.prototype, 'valueOf', {
        value: Symbol.prototype.valueOf,
        enumerable: false
      });
      var hashProperty = createPrivateName();
      var hashPropertyDescriptor = {value: undefined};
      var hashObjectProperties = {
        hash: {value: undefined},
        self: {value: undefined}
      };
      var hashCounter = 0;
      function getOwnHashObject(object) {
        var hashObject = object[hashProperty];
        if (hashObject && hashObject.self === object)
          return hashObject;
        if ($isExtensible(object)) {
          hashObjectProperties.hash.value = hashCounter++;
          hashObjectProperties.self.value = object;
          hashPropertyDescriptor.value = $create(null, hashObjectProperties);
          $defineProperty(object, hashProperty, hashPropertyDescriptor);
          return hashPropertyDescriptor.value;
        }
        return undefined;
      }
      function freeze(object) {
        getOwnHashObject(object);
        return $freeze.apply(this, arguments);
      }
      function preventExtensions(object) {
        getOwnHashObject(object);
        return $preventExtensions.apply(this, arguments);
      }
      function seal(object) {
        getOwnHashObject(object);
        return $seal.apply(this, arguments);
      }
      freeze(SymbolValue.prototype);
      function isSymbolString(s) {
        return symbolValues[s] || privateNames[s];
      }
      function toProperty(name) {
        if (isShimSymbol(name))
          return name[symbolInternalProperty];
        return name;
      }
      function removeSymbolKeys(array) {
        var rv = [];
        for (var i = 0; i < array.length; i++) {
          if (!isSymbolString(array[i])) {
            rv.push(array[i]);
          }
        }
        return rv;
      }
      function getOwnPropertyNames(object) {
        return removeSymbolKeys($getOwnPropertyNames(object));
      }
      function keys(object) {
        return removeSymbolKeys($keys(object));
      }
      function getOwnPropertySymbols(object) {
        var rv = [];
        var names = $getOwnPropertyNames(object);
        for (var i = 0; i < names.length; i++) {
          var symbol = symbolValues[names[i]];
          if (symbol) {
            rv.push(symbol);
          }
        }
        return rv;
      }
      function getOwnPropertyDescriptor(object, name) {
        return $getOwnPropertyDescriptor(object, toProperty(name));
      }
      function hasOwnProperty(name) {
        return $hasOwnProperty.call(this, toProperty(name));
      }
      function getOption(name) {
        return global.$traceurRuntime.options[name];
      }
      function defineProperty(object, name, descriptor) {
        if (isShimSymbol(name)) {
          name = name[symbolInternalProperty];
        }
        $defineProperty(object, name, descriptor);
        return object;
      }
      function polyfillObject(Object) {
        $defineProperty(Object, 'defineProperty', {value: defineProperty});
        $defineProperty(Object, 'getOwnPropertyNames', {value: getOwnPropertyNames});
        $defineProperty(Object, 'getOwnPropertyDescriptor', {value: getOwnPropertyDescriptor});
        $defineProperty(Object.prototype, 'hasOwnProperty', {value: hasOwnProperty});
        $defineProperty(Object, 'freeze', {value: freeze});
        $defineProperty(Object, 'preventExtensions', {value: preventExtensions});
        $defineProperty(Object, 'seal', {value: seal});
        $defineProperty(Object, 'keys', {value: keys});
      }
      function exportStar(object) {
        for (var i = 1; i < arguments.length; i++) {
          var names = $getOwnPropertyNames(arguments[i]);
          for (var j = 0; j < names.length; j++) {
            var name = names[j];
            if (name === '__esModule' || name === 'default' || isSymbolString(name))
              continue;
            (function(mod, name) {
              $defineProperty(object, name, {
                get: function() {
                  return mod[name];
                },
                enumerable: true
              });
            })(arguments[i], names[j]);
          }
        }
        return object;
      }
      function isObject(x) {
        return x != null && (typeof x === 'object' || typeof x === 'function');
      }
      function toObject(x) {
        if (x == null)
          throw $TypeError();
        return $Object(x);
      }
      function checkObjectCoercible(argument) {
        if (argument == null) {
          throw new TypeError('Value cannot be converted to an Object');
        }
        return argument;
      }
      function polyfillSymbol(global, Symbol) {
        if (!global.Symbol) {
          global.Symbol = Symbol;
          Object.getOwnPropertySymbols = getOwnPropertySymbols;
        }
        if (!global.Symbol.iterator) {
          global.Symbol.iterator = Symbol('Symbol.iterator');
        }
        if (!global.Symbol.observer) {
          global.Symbol.observer = Symbol('Symbol.observer');
        }
      }
      function setupGlobals(global) {
        polyfillSymbol(global, Symbol);
        global.Reflect = global.Reflect || {};
        global.Reflect.global = global.Reflect.global || global;
        polyfillObject(global.Object);
      }
      setupGlobals(global);
      global.$traceurRuntime = {
        call: tailCall,
        checkObjectCoercible: checkObjectCoercible,
        construct: construct,
        continuation: createContinuation,
        createPrivateName: createPrivateName,
        defineProperties: $defineProperties,
        defineProperty: $defineProperty,
        exportStar: exportStar,
        getOwnHashObject: getOwnHashObject,
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        getOwnPropertyNames: $getOwnPropertyNames,
        initTailRecursiveFunction: initTailRecursiveFunction,
        isObject: isObject,
        isPrivateName: isPrivateName,
        isSymbolString: isSymbolString,
        keys: $keys,
        options: {},
        setupGlobals: setupGlobals,
        toObject: toObject,
        toProperty: toProperty,
        typeof: typeOf
      };
    })();
  })(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this);
  return {};
}.call(Reflect.global);
