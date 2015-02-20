module.exports = function(grunt) {

    grunt.config.merge({
        copy: {
            normalize: {
                src: 'bower_components/normalize.css/normalize.css',
                dest: 'bower_components/normalize.css/_normalize.scss'
            }
        },
    });

    grunt.registerTask('build-normalize', ['copy:normalize']);

}

