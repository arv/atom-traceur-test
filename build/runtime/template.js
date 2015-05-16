"use strict";
var $__0 = Object,
    defineProperty = $__0.defineProperty,
    freeze = $__0.freeze;
var slice = Array.prototype.slice;
var map = Object.create(null);
function getTemplateObject(raw) {
  var cooked = arguments[1];
  var key = raw.join('${}');
  var templateObject = map[key];
  if (templateObject)
    return templateObject;
  if (!cooked) {
    cooked = slice.call(raw);
  }
  return map[key] = freeze(defineProperty(cooked, 'raw', {value: freeze(raw)}));
}
$traceurRuntime.getTemplateObject = getTemplateObject;
