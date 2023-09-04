const test = require('node:test')
const assert = require('node:assert')
const sinon = require('sinon')

let clock

test.before(() => {
  const now = new Date(2022, 3, 2) // simulate like it is now "2 april 2022"
  clock = sinon.useFakeTimers(now.getTime())
})
test.after(() => {
  clock.restore()
})

test('date should be in 2022', t => {
  assert.deepEqual(new Date().getFullYear(), 2022)
})
