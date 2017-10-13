// Configuration
const config = require('./config');

// Load gulp
const gulp = require('gulp');

// Load all variables in "devDependencies" into the variable $
const $ = require('gulp-load-plugins')({
    pattern: ['*'],
    scope: ['devDependencies']
});

// Load node packages
const path = require('path');

// Error handler
const onError = (err) => {
    console.log(err);
    if (typeof this.emit === 'function') {
        this.emit('end');
    }
};

// Banner to add to the top of files
const banner = [
    "/**",
    " * @build " + $.moment().format("llll Z"),
    " */",
    ""
].join("\n");

// Logging function
function logFile(file, prefix) {
    prefix = prefix || 'Using'
    $.fancyLog($.chalk.cyan(prefix) + ' ' + $.chalk.magenta(path.relative(file.cwd, file.path)));
}

/**
 * Stylesheets
 * PostCSS processors list order is important. css-import has be first
 * and cssnano needs to be last
 */
var processors = [
    $.postcssImport,
    $.postcssCssnext()
];

gulp.task('css', () => {
    return gulp.src(config.paths.src.css)
        .pipe($.tap((file) => {
            logFile(file, 'Build CSS');
        }))
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.postcss(processors))
        .pipe($.rename(config.cssName))
        .pipe($.cleanCss({level: 2, compatibility: 'ie8'}))
        .pipe($.header(banner))
        .pipe(gulp.dest(config.paths.dist.css))
});

/**
 * Stylesheet lint
 *
 * BEM Linter options sets the utilitySelectors just like
 * https://github.com/postcss/postcss-bem-linter/blob/master/lib/preset-patterns.js
 * but with "xs-" added in.
 */
var bemlinterOpts = {
    preset: 'suit',
    utilitySelectors: /^\.u-(xl-|xs-|sm-|md-|lg-)?(?:[a-z0-9][a-zA-Z0-9]*)+$/
};

gulp.task('stylelint', function () {
    return gulp.src(config.paths.src.stylelint)
        .pipe($.cached('Stylelint'))
        .pipe($.tap((file) => {
            logFile(file, 'Linting');
        }))
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.postcss([
            $.postcssBemLinter(bemlinterOpts),
            $.stylelint()
        ]));
});

/**
 * Watch files for changes
 */
gulp.task('watch', function () {
    // CSS
    $.globWatcher(config.paths.watch.css, function(cb) {
        $.runSequence('css', cb);
    });
});


/**
 * Main build tasks
 */
var buildTasks = [
    'css', 'stylelint'
];

gulp.task('build', function (cb) {
    $.runSequence(buildTasks, cb);
});

gulp.task('default', function (cb) {
    $.runSequence(buildTasks, 'watch', cb);
});
