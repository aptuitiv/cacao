var fs = require('fs');
var path = require('path');
var postcss = require('postcss');

var processors = [
  require('postcss-import'),
  require('postcss-custom-media'),
  require('postcss-custom-properties')({ strict: false }),
  require('postcss-calc'),
  require('autoprefixer')({
    browsers: [ 'last 2 versions' ]
  }),
  require('pixrem')({ rootValue: '62.5%', replace: false }),
  require('postcss-reporter')
];

var file = './test/index.css';
var output = './build/index.css';

var stylesheet = fs.readFileSync(file, 'utf8');

postcss(processors)
  .process(stylesheet, { from: file })
  .then(function(result) {
    var dir = path.dirname(output);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(output, result.css);
  });
