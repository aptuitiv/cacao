var config = require('./config');
var gulp = require('gulp');
var gulpBatch = require('gulp-batch');
var gulpCached = require('gulp-cached');
var gulpConcat = require('gulp-concat');
var gulpConnect = require('gulp-connect');
var gulpData = require('gulp-data');
var gulpHtmlmin = require('gulp-htmlmin');
var gulpImagemin = require('gulp-imagemin');
var gulpNunjucks = require('gulp-nunjucks-render');
var gulpPlumber = require('gulp-plumber');
var gulpPostcss = require('gulp-postcss');
var gulpRemember = require('gulp-remember');
var gulpSequence = require('gulp-sequence');
var gulpUglify = require('gulp-uglify');
var mergeStream = require('merge-stream');
var requireGlob = require('require-glob');

/**
 * Utilities
 */

function onError(error) {
  console.log(error.message);
  if (typeof this.emit === 'function') this.emit('end');
}

/**
 * Copy Static assets
 */

gulp.task('copy', function() {
  var assets = config.copy.map(function(entry, index) {
    return gulp.src(entry.src)
      .pipe(gulpCached('copy' + index))
      .pipe(gulpPlumber(onError))
      .pipe(gulp.dest(entry.dest));
  });
  return mergeStream(assets);
});

/**
 * Minify images
 */

gulp.task('images', function() {
  return gulp.src(config.images.src)
    .pipe(gulpCached('images'))
    .pipe(gulpPlumber(onError))
    .pipe(gulpImagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(config.images.dest));
});

/**
 * Compile templates to minified HTML
 */

gulp.task('nunjucks', function() {
  gulpNunjucks.nunjucks.configure(config.nunjucks.src, { watch: false });
  return gulp.src(config.nunjucks.pages)
    .pipe(gulpPlumber(onError))
    .pipe(gulpData(function() {
      return {
        data: requireGlob.sync(config.nunjucks.data, { bustCache: true })
      };
    }))
    .pipe(gulpNunjucks({ site: config.root }))
    .pipe(gulpHtmlmin({ collapseWhitespace: true, conservativeCollapse: true }))
    .pipe(gulp.dest(config.nunjucks.dest));
});

/**
 * Concat and uglify scripts
 */

var uglifyOpts = { mangle: false };

gulp.task('scripts', function() {
  var tasks = config.scripts.map(function(entry, index) {
    return gulp.src(entry.src)
      .pipe(gulpCached('scripts' + index))
      .pipe(gulpPlumber(onError))
      .pipe(gulpUglify(uglifyOpts))
      .pipe(gulpRemember('scripts' + index))
      .pipe(gulpConcat(entry.name))
      .pipe(gulp.dest(entry.dest));
  });
  return mergeStream(tasks);
});

/**
 * Stylesheets
 */

var processors = [
  require('postcss-import'),
  require('postcss-custom-media'),
  require('postcss-custom-properties')({ strict: false }),
  require('postcss-calc'),
  require('postcss-color-function'),
  require('postcss-pseudoelements'),
  require('autoprefixer')({
    browsers: [
      'last 2 versions', 'Explorer >= 8', 'Android >= 4.3'
    ],
    remove: false
  }),
  require('pixrem')({ rootValue: '62.5%', replace: false }),
  require('cssnano')({
    autoprefixer: false,
    calc: false,
    colormin: true,
    convertValues: false,
    discardComments: true,
    discardDuplicates: true,
    discardEmpty: true,
    discardUnused: false,
    mergeIdents: false,
    mergeLonghand: true,
    mergeRules: false,
    minifyFontValues: false,
    minifyGradients: true,
    minifySelectors: true,
    normalizeCharset: true,
    normalizeUrl: true,
    orderedValues: true,
    reduceIdents: false,
    reduceTransforms: true,
    safe: true,
    uniqueSelectors: true,
    zindex: false
  })
];

gulp.task('styles', function() {
  return gulp.src(config.styles.src)
    .pipe(gulpPlumber(onError))
    .pipe(gulpPostcss(processors))
    .pipe(gulp.dest(config.styles.dest));
});

/**
 * Stylesheet lint
 */

var stylelintOpts = {};

var bemlinterOpts = { preset: 'suit' };

gulp.task('stylelint', function() {
  return gulp.src(config.stylelint.src)
    .pipe(gulpPlumber(onError))
    .pipe(gulpPostcss([
      require('postcss-bem-linter')(bemlinterOpts),
      require('stylelint')(stylelintOpts)
    ]));
});

/**
 * Watch files for changes
 */

gulp.task('watch', function() {
  var watchOpts = {};
  function flatten(prev, current) {
    return prev.concat(current.src);
  }
  // copy static assets
  var staticFiles = config.copy.reduce(flatten, []);
  gulp.watch(staticFiles, watchOpts, gulpBatch(function(e, cb) {
    gulp.start('copy', cb);
  }));
  // images
  gulp.watch(config.images.src, watchOpts, gulpBatch(function(e, cb) {
    gulp.start('images', cb);
  }));
  // nunjucks
  gulp.watch(config.nunjucks.watch, watchOpts, gulpBatch(function(e, cb) {
    gulp.start('nunjucks', cb);
  }));
  // scripts
  var scriptFiles = config.scripts.reduce(flatten, []);
  gulp.watch(scriptFiles, watchOpts, gulpBatch(function(e, cb) {
    gulp.start('scripts', cb);
  }));
  // styles
  gulp.watch(config.styles.watch, watchOpts, gulpBatch(function(e, cb) {
    gulp.start(['stylelint', 'styles'], cb);
  }));
});

/**
 * Simple web server
 */

gulp.task('connect', function() {
  gulpConnect.server({ root: config.root.dest });
});

/**
 * Main build tasks
 */

var buildTasks = [
  'copy', 'images', 'nunjucks', 'scripts', 'styles', 'stylelint'
];

gulp.task('build', function(cb) {
  gulpSequence(buildTasks, cb);
});

gulp.task('default', function(cb) {
  gulpSequence(buildTasks, 'watch', 'connect', cb);
});

