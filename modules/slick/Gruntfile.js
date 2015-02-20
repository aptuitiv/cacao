module.exports = function(grunt) {

    grunt.config.merge({
        uglify: {
            slick: {
                files: {
                    '<%= global.dest %>/layout/js/slick.js': ['bower_components/slick.js/slick/slick.js']
                }
            }
        }
    });

    grunt.registerTask('build-slick', ['uglify:slick']);

};

