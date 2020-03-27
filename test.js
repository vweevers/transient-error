'use strict'

const test = require('tape')
const transient = require('.')

test('basic', function (t) {
  const err = new Error('test')
  const err2 = transient(err)

  t.ok(err === err2, 'same error object')
  t.is(err.transient, true)
  t.same(Object.keys(err), [], 'property is not enumerable')

  t.end()
})
