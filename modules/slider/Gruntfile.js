module.exports = function(grunt) {

    grunt.config.merge({
        imagemin: {
            slider: {
                files: [{
                    expand: true,
                    cwd: 'modules/slider/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= global.dest %>/layout/images'
                }]
            }
        }
    });

    grunt.registerTask('build-slider', ['imagemin:slider']);

};

