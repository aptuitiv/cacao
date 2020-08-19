// Configuration
const config = require('./gulp/config.js');

// Load gulp
const gulp = require('gulp');

// Load gulp modules
const css = require('./gulp/css');

/**
 * Watch for file changes and then process the files
 * @param {function} done
 */
function watch(done) {
    // CSS
    gulp.watch(config.paths.watch.css, {events: 'all'}, css.css);

    done();
}

// Set the display properties of the theme pull function
watch.description = 'Watch for file changes and then process the files';


// Build tasks
const build = gulp.series(
    css.css
);

// Export gulp methods
module.exports = {
    build: build,
    default: gulp.series(build, watch),
    css: css.css,
    stylelint: css.stylelint,
    watch: watch
};
