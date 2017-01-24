var test = require('ava')
var hello = require('./index')

test('test hello', function (t) {
  var event = {
    name: 'Tony'
  }
  var context = {}
  var callback = function (err, message) {
    if (err) {
      throw err
    }
    var expected = 'Hello Tony'
    var computed = message
    t.is(expected, computed)
  }

  hello.handle(event, context, callback)
})
