"use strict";
var types = {
  any: {name: 'any'},
  boolean: {name: 'boolean'},
  number: {name: 'number'},
  string: {name: 'string'},
  symbol: {name: 'symbol'},
  void: {name: 'void'}
};
var GenericType = function() {
  function GenericType(type, argumentTypes) {
    this.type = type;
    this.argumentTypes = argumentTypes;
  }
  return ($traceurRuntime.createClass)(GenericType, {}, {});
}();
var typeRegister = Object.create(null);
function genericType(type) {
  for (var argumentTypes = [],
      $__1 = 1; $__1 < arguments.length; $__1++)
    argumentTypes[$__1 - 1] = arguments[$__1];
  var typeMap = typeRegister;
  var key = $traceurRuntime.getOwnHashObject(type).hash;
  if (!typeMap[key]) {
    typeMap[key] = Object.create(null);
  }
  typeMap = typeMap[key];
  for (var i = 0; i < argumentTypes.length - 1; i++) {
    key = $traceurRuntime.getOwnHashObject(argumentTypes[i]).hash;
    if (!typeMap[key]) {
      typeMap[key] = Object.create(null);
    }
    typeMap = typeMap[key];
  }
  var tail = argumentTypes[argumentTypes.length - 1];
  key = $traceurRuntime.getOwnHashObject(tail).hash;
  if (!typeMap[key]) {
    typeMap[key] = new GenericType(type, argumentTypes);
  }
  return typeMap[key];
}
$traceurRuntime.GenericType = GenericType;
$traceurRuntime.genericType = genericType;
$traceurRuntime.type = types;
