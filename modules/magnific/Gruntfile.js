module.exports = function(grunt) {

    grunt.config.merge({
        replace: {
            /* our own settings file is already imported in main.scss */
            magnific: {
                src: ['bower_components/magnific-popup/**/*.scss'],
                overwrite: true,
                replacements: [{
                    from: /@import "settings";/g,
                    to: ""
                }]
            }
        },
        uglify: {
            magnific: {
                files: {
                    '<%= global.dest %>/layout/js/jquery.magnific-popup.js': ['bower_components/magnific-popup/dist/jquery.magnific-popup.js']
                }
            }
        }
    });

    grunt.registerTask('build-magnific', ['replace:magnific', 'uglify:magnific']);

}

