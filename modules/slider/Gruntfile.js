module.exports = function(grunt) {

    grunt.config.merge({
        copy: {
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

    grunt.registerTask('build-slider', ['copy:slider']);

};

