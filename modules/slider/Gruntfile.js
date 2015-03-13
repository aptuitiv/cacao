module.exports = function(grunt) {

    grunt.config.merge({
        imagemin: {
            slider: {
                files: [{
                    expand: true,
                    cwd: '<%= global.cacao %>/modules/slider/assets',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= global.dest %>/layout/images'
                }]
            }
        }
    });

    grunt.registerTask('build-slider', ['imagemin:slider']);

};

