module.exports = function(grunt) {

    grunt.config.merge({
        uglify: {
            ddmenu: {
                files: {
                    '<%= global.dest %>/layout/js/ap-drilldown-menu.js': ['<%= global.bower %>/ap-drilldown-menu/ap-drilldown-menu.js']
                }
            }
        }
    });

    grunt.registerTask('build-ddmenu', ['uglify:ddmenu']);

};

