module.exports = function(grunt) {

    grunt.config.merge({
        uglify: {
            slick: {
                files: {
                    '<%= global.dest %>/layout/js/slick.js': ['<%= global.bower %>/slick.js/slick/slick.js'],
                    '.build/slick-init.js': ['<%= global.cacao %>/modules/slick/js/init.js']
                }
            }
        }
    });

    grunt.registerTask('build-slick', ['uglify:slick']);

};

