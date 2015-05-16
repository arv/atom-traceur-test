"use strict";
function spread() {
  var rv = [],
      j = 0,
      iterResult;
  for (var i = 0; i < arguments.length; i++) {
    var valueToSpread = $traceurRuntime.checkObjectCoercible(arguments[i]);
    if (typeof valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)] !== 'function') {
      throw new TypeError('Cannot spread non-iterable object.');
    }
    var iter = valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)]();
    while (!(iterResult = iter.next()).done) {
      rv[j++] = iterResult.value;
    }
  }
  return rv;
}
$traceurRuntime.spread = spread;
