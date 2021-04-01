// The source directory to build from
var src = 'src';
// The base directory to build into. A temporary location for things that need to be built first before moving to distribution
var build = '_build';
// The full destination folder where assets (images, css, js) will be built into for distribution
var dist = 'dist';

/**
 * Data that is set to the config variable in gulpfile.js
 */
module.exports = {
    /**
     * Holds the name of the CSS file to be generated
     */
    cssName: 'main.css',

    /**
     * Paths for different asset sources and their distribution path
     */
    paths: {
        src: {
            base: src,
            css: [
                src + '/css/main.css'
            ],
            cssBase: src + '/css',
            stylelint: [src + '/css/**/*.css'],
        },
        build: {
            base: build,
            css: build + '/css'
        },
        dist: {
            base: dist,
            css: dist + '/css'
        },
        watch: {
            css: [src + '/css/**/*.css']
        }
    }
};
