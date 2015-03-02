module.exports = function(grunt) {

    grunt.config.merge({
        copy: {
            normalize: {
                src: '<%= global.bower %>/normalize.css/normalize.css',
                dest: '<%= global.bower %>/normalize.css/_normalize.scss'
            }
        }
    });

    grunt.registerTask('build-normalize', ['copy:normalize']);

};

