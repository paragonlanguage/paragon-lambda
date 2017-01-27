import test from 'ava'
import proxyquire from 'proxyquire'

function notifyFactory (studs) {
  return proxyquire(
    './index.js',
    {
      studs
    }
  ).default
}

test('test notify', t => {
  const studs = {
    'request': {
      post: function (url, body, callback) {
        callback(null, 'All good')
      }
    }
  }

  const notify = notifyFactory(studs)
  const event = {}
  const context = {}

  const callback = (err, message) => {
    if (err) {
      throw err
    }
    const expected = 'All good'
    const computed = message
    t.is(expected, computed)
  }
  notify(event, context, callback)
})
