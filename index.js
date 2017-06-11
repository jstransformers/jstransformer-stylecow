'use strict'

const stylecow = require('stylecow-core')
const plugins = require('stylecow-plugins')
const extend = require('extend-shallow')

exports.name = 'stylecow'
exports.outputFormat = 'css'

function createTask(options) {
  const tasks = new stylecow.Tasks()

  if (options.support) {
    tasks.minSupport(options.support)
  }

  tasks.use(plugins(options.plugins))

  if (options.modules) {
    options.modules.forEach(module => {
      tasks.use(require(module)) // eslint-disable-line import/no-dynamic-require
    })
  }

  return tasks
}

exports.render = function (str, options, locals) {
  const opts = extend({}, options, locals)
  const tasks = createTask(opts)
  const css = stylecow.parse(str)
  tasks.run(css)
  return css.toString()
}

exports.renderFile = function (file, options, locals) {
  const opts = extend({}, options, locals)
  const tasks = createTask(opts)
  const css = stylecow.parseFile(file)
  tasks.run(css)
  return css.toString()
}
