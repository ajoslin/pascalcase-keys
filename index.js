'use strict'

var mapObj = require('map-obj')
var pascalCase = require('pascal-case')

module.exports = function (obj) {
  return mapObj(obj, function (key, val) {
    return [pascalCase(key), val]
  })
}
