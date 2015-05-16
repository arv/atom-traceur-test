"use strict";
var $__utils_46_js__;
var $__0 = ($__utils_46_js__ = require("./utils.js"), $__utils_46_js__ && $__utils_46_js__.__esModule && $__utils_46_js__ || {default: $__utils_46_js__}),
    maybeAddFunctions = $__0.maybeAddFunctions,
    registerPolyfill = $__0.registerPolyfill;
var $__1 = $traceurRuntime,
    defineProperty = $__1.defineProperty,
    getOwnPropertyDescriptor = $__1.getOwnPropertyDescriptor,
    getOwnPropertyNames = $__1.getOwnPropertyNames,
    isPrivateName = $__1.isPrivateName,
    keys = $__1.keys;
function is(left, right) {
  if (left === right)
    return left !== 0 || 1 / left === 1 / right;
  return left !== left && right !== right;
}
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    var props = source == null ? [] : keys(source);
    var p = void 0,
        length = props.length;
    for (p = 0; p < length; p++) {
      var name = props[p];
      if (isPrivateName(name))
        continue;
      target[name] = source[name];
    }
  }
  return target;
}
function mixin(target, source) {
  var props = getOwnPropertyNames(source);
  var p,
      descriptor,
      length = props.length;
  for (p = 0; p < length; p++) {
    var name = props[p];
    if (isPrivateName(name))
      continue;
    descriptor = getOwnPropertyDescriptor(source, props[p]);
    defineProperty(target, props[p], descriptor);
  }
  return target;
}
function polyfillObject(global) {
  var Object = global.Object;
  maybeAddFunctions(Object, ['assign', assign, 'is', is, 'mixin', mixin]);
}
registerPolyfill(polyfillObject);
Object.defineProperties(module.exports, {
  is: {get: function() {
      return is;
    }},
  assign: {get: function() {
      return assign;
    }},
  mixin: {get: function() {
      return mixin;
    }},
  polyfillObject: {get: function() {
      return polyfillObject;
    }},
  __esModule: {value: true}
});
