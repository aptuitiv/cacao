module.exports = function(grunt) {

    grunt.config.merge({
        uglify: {
            slick: {
                files: {
                    '<%= global.dest %>/layout/js/slick.js': ['<%= global.bower %>/slick.js/slick/slick.js']
                }
            }
        }
    });

    grunt.registerTask('build-slick', ['uglify:slick']);

};

