"use strict";
if (typeof $traceurRuntime !== 'object') {
  throw new Error('traceur runtime not found.');
}
var $createPrivateName = $traceurRuntime.createPrivateName;
var $defineProperty = $traceurRuntime.defineProperty;
var $defineProperties = $traceurRuntime.defineProperties;
var $create = Object.create;
var thisName = $createPrivateName();
var argsName = $createPrivateName();
var observeName = $createPrivateName();
function AsyncGeneratorFunction() {}
function AsyncGeneratorFunctionPrototype() {}
AsyncGeneratorFunction.prototype = AsyncGeneratorFunctionPrototype;
AsyncGeneratorFunctionPrototype.constructor = AsyncGeneratorFunction;
$defineProperty(AsyncGeneratorFunctionPrototype, 'constructor', {enumerable: false});
var AsyncGeneratorContext = function() {
  function AsyncGeneratorContext(observer) {
    var $__0 = this;
    this.decoratedObserver = $traceurRuntime.createDecoratedGenerator(observer, function() {
      $__0.done = true;
    });
    this.done = false;
    this.inReturn = false;
  }
  return ($traceurRuntime.createClass)(AsyncGeneratorContext, {
    throw: function(error) {
      if (!this.inReturn) {
        throw error;
      }
    },
    yield: function(value) {
      if (this.done) {
        this.inReturn = true;
        throw undefined;
      }
      var result;
      try {
        result = this.decoratedObserver.next(value);
      } catch (e) {
        this.done = true;
        throw e;
      }
      if (result === undefined) {
        return;
      }
      if (result.done) {
        this.done = true;
        this.inReturn = true;
        throw undefined;
      }
      return result.value;
    },
    yieldFor: function(observable) {
      var ctx = this;
      return $traceurRuntime.observeForEach(observable[$traceurRuntime.toProperty(Symbol.observer)].bind(observable), function(value) {
        if (ctx.done) {
          this.return();
          return;
        }
        var result;
        try {
          result = ctx.decoratedObserver.next(value);
        } catch (e) {
          ctx.done = true;
          throw e;
        }
        if (result === undefined) {
          return;
        }
        if (result.done) {
          ctx.done = true;
        }
        return result;
      });
    }
  }, {});
}();
AsyncGeneratorFunctionPrototype.prototype[Symbol.observer] = function(observer) {
  var observe = this[observeName];
  var ctx = new AsyncGeneratorContext(observer);
  $traceurRuntime.schedule(function() {
    return observe(ctx);
  }).then(function(value) {
    if (!ctx.done) {
      ctx.decoratedObserver.return(value);
    }
  }).catch(function(error) {
    if (!ctx.done) {
      ctx.decoratedObserver.throw(error);
    }
  });
  return ctx.decoratedObserver;
};
$defineProperty(AsyncGeneratorFunctionPrototype.prototype, Symbol.observer, {enumerable: false});
function initAsyncGeneratorFunction(functionObject) {
  functionObject.prototype = $create(AsyncGeneratorFunctionPrototype.prototype);
  functionObject.__proto__ = AsyncGeneratorFunctionPrototype;
  return functionObject;
}
function createAsyncGeneratorInstance(observe, functionObject) {
  for (var args = [],
      $__9 = 2; $__9 < arguments.length; $__9++)
    args[$__9 - 2] = arguments[$__9];
  var object = $create(functionObject.prototype);
  object[thisName] = this;
  object[argsName] = args;
  object[observeName] = observe;
  return object;
}
function observeForEach(observe, next) {
  return new Promise(function(resolve, reject) {
    var generator = observe({
      next: function(value) {
        return next.call(generator, value);
      },
      throw: function(error) {
        reject(error);
      },
      return: function(value) {
        resolve(value);
      }
    });
  });
}
function schedule(asyncF) {
  return Promise.resolve().then(asyncF);
}
var generator = Symbol();
var onDone = Symbol();
var DecoratedGenerator = function() {
  function DecoratedGenerator(_generator, _onDone) {
    this[generator] = _generator;
    this[onDone] = _onDone;
  }
  return ($traceurRuntime.createClass)(DecoratedGenerator, {
    next: function(value) {
      var result = this[generator].next(value);
      if (result !== undefined && result.done) {
        this[onDone].call(this);
      }
      return result;
    },
    throw: function(error) {
      this[onDone].call(this);
      return this[generator].throw(error);
    },
    return: function(value) {
      this[onDone].call(this);
      return this[generator].return(value);
    }
  }, {});
}();
function createDecoratedGenerator(generator, onDone) {
  return new DecoratedGenerator(generator, onDone);
}
Array.prototype[$traceurRuntime.toProperty(Symbol.observer)] = function(observer) {
  var done = false;
  var decoratedObserver = createDecoratedGenerator(observer, function() {
    return done = true;
  });
  var $__5 = true;
  var $__6 = false;
  var $__7 = undefined;
  try {
    for (var $__3 = void 0,
        $__2 = (this)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
      var value = $__3.value;
      {
        decoratedObserver.next(value);
        if (done) {
          return;
        }
      }
    }
  } catch ($__8) {
    $__6 = true;
    $__7 = $__8;
  } finally {
    try {
      if (!$__5 && $__2.return != null) {
        $__2.return();
      }
    } finally {
      if ($__6) {
        throw $__7;
      }
    }
  }
  decoratedObserver.return();
  return decoratedObserver;
};
$defineProperty(Array.prototype, $traceurRuntime.toProperty(Symbol.observer), {enumerable: false});
$traceurRuntime.initAsyncGeneratorFunction = initAsyncGeneratorFunction;
$traceurRuntime.createAsyncGeneratorInstance = createAsyncGeneratorInstance;
$traceurRuntime.observeForEach = observeForEach;
$traceurRuntime.schedule = schedule;
$traceurRuntime.createDecoratedGenerator = createDecoratedGenerator;
