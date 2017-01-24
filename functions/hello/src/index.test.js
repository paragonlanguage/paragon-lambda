import test from 'ava'
import hello from './index'

test('test hello', t => {
  const event = {
    name: 'Tony'
  }
  const context = {}
  const callback = (err, message) => {
    if (err) {
      throw err
    }
    const expected = 'Hello Tony'
    const computed = message
    t.is(expected, computed)
  }

  hello.handle(event, context, callback)
})
