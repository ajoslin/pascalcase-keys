'use strict'

var mapObj = require('map-obj')
var pascalCase = require('pascal-case')

module.exports = function (obj) {
	if (Array.isArray(obj)) {
			return obj.map(o => mapObj(o, mapObjCallBack));
	} else {
			return mapObj(obj, mapObjCallBack);
	}
}

const mapObjCallBack = (key, val) => {
	return [pascalCase(key), val]
}
