"use strict";
var $Object = Object;
var $TypeError = TypeError;
var $create = $Object.create;
var $defineProperties = $traceurRuntime.defineProperties;
var $defineProperty = $traceurRuntime.defineProperty;
var $getOwnPropertyDescriptor = $traceurRuntime.getOwnPropertyDescriptor;
var $getOwnPropertyNames = $traceurRuntime.getOwnPropertyNames;
var $getPrototypeOf = Object.getPrototypeOf;
var $__0 = Object,
    getOwnPropertyNames = $__0.getOwnPropertyNames,
    getOwnPropertySymbols = $__0.getOwnPropertySymbols;
function superDescriptor(homeObject, name) {
  var proto = $getPrototypeOf(homeObject);
  do {
    var result = $getOwnPropertyDescriptor(proto, name);
    if (result)
      return result;
    proto = $getPrototypeOf(proto);
  } while (proto);
  return undefined;
}
function superConstructor(ctor) {
  return ctor.__proto__;
}
function superGet(self, homeObject, name) {
  var descriptor = superDescriptor(homeObject, name);
  if (descriptor) {
    var value = descriptor.value;
    if (value)
      return value;
    if (!descriptor.get)
      return value;
    return descriptor.get.call(self);
  }
  return undefined;
}
function superSet(self, homeObject, name, value) {
  var descriptor = superDescriptor(homeObject, name);
  if (descriptor && descriptor.set) {
    descriptor.set.call(self, value);
    return value;
  }
  throw $TypeError(("super has no setter '" + name + "'."));
}
function forEachPropertyKey(object, f) {
  getOwnPropertyNames(object).forEach(f);
  getOwnPropertySymbols(object).forEach(f);
}
function getDescriptors(object) {
  var descriptors = {};
  forEachPropertyKey(object, function(key) {
    descriptors[key] = $getOwnPropertyDescriptor(object, key);
    descriptors[key].enumerable = false;
  });
  return descriptors;
}
var nonEnum = {enumerable: false};
function makePropertiesNonEnumerable(object) {
  forEachPropertyKey(object, function(key) {
    $defineProperty(object, key, nonEnum);
  });
}
function createClass(ctor, object, staticObject, superClass) {
  $defineProperty(object, 'constructor', {
    value: ctor,
    configurable: true,
    enumerable: false,
    writable: true
  });
  if (arguments.length > 3) {
    if (typeof superClass === 'function')
      ctor.__proto__ = superClass;
    ctor.prototype = $create(getProtoParent(superClass), getDescriptors(object));
  } else {
    makePropertiesNonEnumerable(object);
    ctor.prototype = object;
  }
  $defineProperty(ctor, 'prototype', {
    configurable: false,
    writable: false
  });
  return $defineProperties(ctor, getDescriptors(staticObject));
}
function getProtoParent(superClass) {
  if (typeof superClass === 'function') {
    var prototype = superClass.prototype;
    if ($Object(prototype) === prototype || prototype === null)
      return superClass.prototype;
    throw new $TypeError('super prototype must be an Object or null');
  }
  if (superClass === null)
    return null;
  throw new $TypeError(("Super expression must either be null or a function, not " + typeof superClass + "."));
}
$traceurRuntime.createClass = createClass;
$traceurRuntime.superConstructor = superConstructor;
$traceurRuntime.superGet = superGet;
$traceurRuntime.superSet = superSet;
