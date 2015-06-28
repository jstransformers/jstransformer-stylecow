'use strict';

var stylecow = require('stylecow-core');

exports.name = 'stylecow';
exports.outputFormat = 'css';

function processOptions(options) {
  if (options.support) {
    stylecow.minSupport(options.support);
  }

  if (options.plugins) {
    options.plugins.forEach(function (plugin) {
      stylecow.loadNpmModule('stylecow-plugin-' + plugin);
    });
  }

  if (options.modules) {
    options.modules.forEach(function (module) {
      stylecow.loadNpmModule(module);
    });
  }
}

exports.render = function (str, options, locals) {
  processOptions(options);
  var css = stylecow.parse(str);
  stylecow.run(css);
  return css.toString();
};

exports.renderFile = function (file, options, locals) {
  locals = locals || {}
  processOptions(options);
  var css = stylecow.parseFile(file);
  stylecow.run(css)
  return css.toString();
};
