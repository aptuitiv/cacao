// The base directory to build into
var buildRoot = 'build';
// The directory within the build root where theme files (images, css, js) will be located
var themeRoot = 'theme/custom';
// The source directory to build from
var srcDir = 'src';
// The full destination folder where assets (images, css, js) will be built into
var destDir = buildRoot + '/' + themeRoot;

module.exports = {

    siteRoot: buildRoot,

    copy: [
        {
            dest: destDir + '/magnific',
            src: ['node_modules/magnific-popup/dist/**/*']
        },
        {
            dest: destDir + '/slick',
            src: ['node_modules/slick-carousel/slick/**/*']
        }
    ],

    images: {
        dest: destDir + '/images',
        src: srcDir + '/images/**/*.{png,jpg,gif,svg}'
    },

    nunjucks: {
        dest: buildRoot,
        src: [srcDir + '/site'],
        pages: [srcDir + '/site/pages/**/*.html'],
        templates: [srcDir + '/site/templates'],
        data: [srcDir + '/site/data/**/*.json'],
        watch: [srcDir + '/site/**/*.{html,json}']
    },

    scripts: [
        {
            name: 'index.js',
            src: [
                srcDir + '/scripts/modernizr-flexbox-detection.js',
                'node_modules/jquery/dist/jquery.js',
                'node_modules/ap_drilldown_plugin/ap-drilldown-menu.min.js',
                srcDir + '/scripts/index.js'
            ],
            dest: destDir + '/js'
        },
        {
            name: 'forms.js',
            src: 'node_modules/jquery-validation/dist/jquery.validate.js',
            dest: destDir + '/js'
        }
    ],

    styles: {
        dest: destDir + '/css',
        src: [srcDir + '/styles/index.css'],
        watch: [srcDir + '/styles/**/*.css']
    },

    stylelint: {
        src: [srcDir + '/styles/**/*.css']
    }

};
