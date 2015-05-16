"use strict";
'use strict';
var fs = require('fs');
var traceur = require('./traceur.js');
var System = new traceur.runtime.NodeTraceurLoader();
var traceurMap;
Reflect.global.System = System;
System.map = System.semverMap(System.version);
module.exports = System;
