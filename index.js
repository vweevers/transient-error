'use strict'

module.exports = function (err) {
  Object.defineProperty(err, 'transient', {
    value: true
  })

  return err
}
