var fs = require('fs');
var path = require('path');
var postcss = require('postcss');
var glob = require('glob');

var processors = [
  require('postcss-bem-linter')({ preset: 'suit' }),
  require('stylelint'),
  require('postcss-reporter')
];

var files = glob.sync('./lib/**/*.css');

files.forEach(function(file) {
  var stylesheet = fs.readFileSync(file, 'utf8');
  postcss(processors)
    .process(stylesheet, { from: file })
    .then();
});
