# jstransformer-stylecow

[Stylecow](http://stylecow.github.io) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-stylecow/master.svg)](https://travis-ci.org/jstransformers/jstransformer-stylecow)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-stylecow/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-stylecow)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-stylecow/master.svg)](http://david-dm.org/jstransformers/jstransformer-stylecow)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-stylecow.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-stylecow.svg)](https://www.npmjs.org/package/jstransformer-stylecow)

## Installation

    npm install jstransformer-stylecow

## API

```js
var stylecow = require('jstransformer')(require('jstransformer-stylecow'))

stylecow.render('p {\
  --myColor: blue;\
  background-color: var(--myColor);\
}').body
//=> Compiled CSS
```

## License

MIT
