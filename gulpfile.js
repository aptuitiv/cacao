var config = require('./config');
var chalk = require('chalk');
var del = require('del');
var globWatcher = require('glob-watcher');
var gulp = require('gulp');
var gulpCached = require('gulp-cached');
var gulpChanged = require('gulp-changed');
var gulpConcat = require('gulp-concat');
var gulpConnect = require('gulp-connect');
var gulpData = require('gulp-data');
var gulpHtmlBeautify = require('gulp-html-beautify');
var gulpHtmlmin = require('gulp-htmlmin');
var gulpImagemin = require('gulp-imagemin');
var gulpNewer = require('gulp-newer');
var gulpNunjucks = require('gulp-nunjucks-render');
var gulpPlumber = require('gulp-plumber');
var gulpPostcss = require('gulp-postcss');
var gulpRemember = require('gulp-remember');
var gulpSequence = require('gulp-sequence');
var gulpUglify = require('gulp-uglify');
var gulpUsing = require('gulp-using');
var mergeStream = require('merge-stream');
var path = require('path');
var requireGlob = require('require-glob');
var runSequence = require('run-sequence');

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

gulp.task('copy', function () {
    var assets = config.copy.map(function (entry, index) {
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

gulp.task('images', function () {
    return gulp.src(config.images.src)
        .pipe(gulpNewer(config.images.dest))
        .pipe(gulpUsing({prefix: 'Image min: '}))
        .pipe(gulpPlumber(onError))
        .pipe(gulpImagemin({optimizationLevel: 5}))
        .pipe(gulp.dest(config.images.dest));
});

/**
 * Compile templates to minified HTML
 */

gulp.task('nunjucks', function() {
    return gulp.src(config.nunjucks.pages)
        .pipe(gulpPlumber(onError))
        .pipe(gulpUsing({prefix: 'Nunjucks: '}))
        .pipe(gulpData(function () {
            return {
                data: requireGlob.sync(config.nunjucks.data, {bustCache: true})
            };
        }))
        .pipe(gulpNunjucks({
            path: config.nunjucks.templates
        }))
        .pipe(gulpHtmlmin({
            collapseWhitespace: true,
            conservativeCollapse: true
        }))
        .pipe(gulpHtmlBeautify())
        .pipe(gulp.dest(config.nunjucks.dest))
});

/**
 * Concat and uglify scripts
 */

var uglifyOpts = {mangle: false};

gulp.task('scripts', function () {
    var tasks = config.scripts.map(function (entry, index) {
        return gulp.src(entry.src)
            .pipe(gulpNewer(entry.dest + '/' + entry.name))
            .pipe(gulpUsing({prefix: 'Scripts: '}))
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
    require('postcss-custom-properties')({strict: false}),
    require('postcss-calc'),
    require('postcss-color-function'),
    require('postcss-pseudoelements'),
    require('autoprefixer')({
        remove: false
    }),
    require('pixrem')({rootValue: '62.5%', replace: false}),
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

gulp.task('styles', ['stylelint'], function () {
    return gulp.src(config.styles.src)
        .pipe(gulpUsing({prefix: 'CSS: '}))
        .pipe(gulpPlumber(onError))
        .pipe(gulpPostcss(processors))
        .pipe(gulp.dest(config.styles.dest));
});

/**
 * Stylesheet lint
 */

var stylelintOpts = {};

/* utilitySelectors just like https://github.com/postcss/postcss-bem-linter/blob/master/lib/preset-patterns.js but with "xs-" added in. */
var bemlinterOpts = {
    preset: 'suit',
    utilitySelectors: /^\.u-(xl-|xs-|sm-|md-|lg-)?(?:[a-z0-9][a-zA-Z0-9]*)+$/
};

gulp.task('stylelint', function () {
    return gulp.src(config.stylelint.src)
        .pipe(gulpCached('Stylelint'))
        .pipe(gulpUsing({prefix: 'Stylelint: '}))
        .pipe(gulpPlumber(onError))
        .pipe(gulpPostcss([
            require('postcss-bem-linter')(bemlinterOpts),
            require('stylelint')(stylelintOpts)
        ]));
});

/**
 * Theme files
 */

gulp.task('theme', function() {
    return gulp.src(config.theme.src)
        .pipe(gulpChanged(config.theme.dest, {hasChanged: gulpChanged.compareContents}))
        .pipe(gulpUsing({prefix: 'Theme: '}))
        .pipe(gulp.dest(config.theme.dest))
});

gulp.task('copy-theme', function() {
    return gulp.src(config.theme.src)
        .pipe(gulp.dest(config.theme.dest))
});

/**
 * Watch files for changes
 */

gulp.task('watch', function () {
    function flatten(prev, current) {
        return prev.concat(current.src);
    }

    /**
     * Deletes a file
     *
     * @param {string} file The file to delete
     * @param {string} src The file source path
     * @param {string} dest The build destination path
     * @param {string} type The type of file. Used in the console message
     */
    function deleteFile(file, src, dest, type) {
        // Output message of what is being deleted
        var time = '[' + chalk.gray(new Date().toTimeString().slice(0, 8)) + ']';
        console.log(time, 'Deleting ' + type, chalk.red(file));
        // Get the relative path to the file
        var srcPath = path.relative(path.resolve(src), file);
        // Remove "../" from the path as it causes the destination path to be incorrect
        srcPath = srcPath.replace(/(\.\.\/)+/, '');
        // Combine the destination path and the source path to get the full path to the destination file
        var destPath = path.resolve(dest, srcPath);
        // Delete the file
        del.sync(destPath);
    }

    // Copy static assets
    var staticFiles = config.copy.reduce(flatten, []);
    globWatcher(staticFiles, function(cb) {
        runSequence('copy', cb);
    });

    // Images
    var iw = globWatcher(config.images.src, function(cb) {
        runSequence('images', cb);
    });
    iw.on('unlink', function(file) {
        deleteFile(file, config.images.src, config.images.dest, 'image');
    });

    // Scripts
    var scriptFiles = config.scripts.reduce(flatten, []);
    globWatcher(scriptFiles, function(cb) {
        runSequence('scripts', cb);
    });

    // Styles
    globWatcher(config.styles.watch, function(cb) {
        runSequence('styles', cb);
    });

    // Theme
    var tw = globWatcher(config.theme.src, function(cb) {
        runSequence('theme', cb);
    });

    tw.on('unlink', function(file) {
        deleteFile(file, config.theme.src, config.theme.dest, 'theme file');
    });
});

/**
 * Simple web server
 */

gulp.task('connect', function () {
    gulpConnect.server({root: config.siteRoot});
});

/**
 * Main build tasks
 */

var buildTasks = [
    'copy', 'images', 'scripts', 'styles', 'stylelint', 'theme', 'copy-theme'
];

gulp.task('build', function (cb) {
    gulpSequence(buildTasks, cb);
});

gulp.task('default', function (cb) {
    gulpSequence(buildTasks, 'watch', 'connect', cb);
});
