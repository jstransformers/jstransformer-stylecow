'use strict'

var stylecow = require('stylecow-core')
var plugins = require('stylecow-plugins')
var extend = require('extend-shallow')

exports.name = 'stylecow'
exports.outputFormat = 'css'

function createTask(options) {
  var tasks = new stylecow.Tasks()

  if (options.support) {
    tasks.minSupport(options.support)
  }

  tasks.use(plugins(options.plugins))

  if (options.modules) {
    options.modules.forEach(function (module) {
      tasks.use(require(module)) // eslint-disable-line import/no-dynamic-require
    })
  }

  return tasks
}

exports.render = function (str, options, locals) {
  var opts = extend({}, options, locals)
  var tasks = createTask(opts)
  var css = stylecow.parse(str)
  tasks.run(css)
  return css.toString()
}

exports.renderFile = function (file, options, locals) {
  var opts = extend({}, options, locals)
  var tasks = createTask(opts)
  var css = stylecow.parseFile(file)
  tasks.run(css)
  return css.toString()
}
