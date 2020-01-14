const surround = require('./index')
const test = require('tape')


test('', (t) => {
  t.plan(1)
  let sep='!'
  t.equals(surround([1,2,3], sep), '!1!2!3!')
})


