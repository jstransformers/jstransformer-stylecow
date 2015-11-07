'use strict';

var stylecow = require('stylecow-core');
var plugins  = require('stylecow-plugins');

exports.name = 'stylecow';
exports.outputFormat = 'css';

function createTask(options) {
  var tasks = new stylecow.Tasks();

  if (options.support) {
    tasks.minSupport(options.support);
  }

  tasks.use(plugins(options.plugins));

  if (options.modules) {
    options.modules.forEach(function (module) {
      tasks.use(require(module));
    });
  }

  return tasks;
}

exports.render = function (str, options, locals) {
  var tasks = createTask(options);
  var css = stylecow.parse(str);
  tasks.run(css);
  return css.toString();
};

exports.renderFile = function (file, options, locals) {
  locals = locals || {}
  var tasks = createTask(options);
  var css = stylecow.parseFile(file);
  tasks.run(css);
  return css.toString();
};
