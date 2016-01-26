var test = require('tape')
var fn = require('./')

test('pascalify an object', function (t) {
  t.deepEqual(fn({'dash-case': 1, camelCase: 1}), {
    DashCase: 1,
    CamelCase: 1
  })
  t.end()
})
