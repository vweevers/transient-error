# transient-error

> **Mark an error as transient, meaning you can retry.**

[![npm status](http://img.shields.io/npm/v/transient-error.svg)](https://www.npmjs.org/package/transient-error)
[![node](https://img.shields.io/node/v/transient-error.svg)](https://www.npmjs.org/package/transient-error)
[![Travis build status](https://img.shields.io/travis/vweevers/transient-error.svg?label=travis)](http://travis-ci.org/vweevers/transient-error)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

```js
const transient = require('transient-error')
const err = transient(new Error('Could not connect'))
```

A consumer can then do:

```js
if (err.transient) {
  // Retry
}
```

Becomes useful when multiple modules use this, as a simple contract.

## Install

With [npm](https://npmjs.org) do:

```
npm install transient-error
```

## License

[MIT](LICENSE.md) © 2020-present Vincent Weevers
