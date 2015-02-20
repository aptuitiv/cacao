module.exports = function(grunt) {

    grunt.config.merge({
        uglify: {
            jquery: {
                files: {
                    '<%= global.dest %>/layout/js/jquery.js': ['bower_components/jquery/dist/jquery.js']
                }
            }
        }
    });

    grunt.registerTask('build-jquery', ['uglify:jquery']);

}

