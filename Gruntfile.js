module.exports = function(grunt) {

    grunt.initConfig({

        // Global build settings
        global: {
            // Project source files 
            src: 'site',
            // Build destination
            dest: 'dist'
        },

        sass: {
            site: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '<%= global.dest %>/layout/css/main.css': '<%= global.src %>/css/main.scss'
                }
            }
        },

        copy: {
            site: {
                files: [{
                    expand: true,
                    cwd: '<%= global.src %>/assets',
                    src: ['**/*'],
                    dest: '<%= global.dest %>'
                }]
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            site: {
                files: [{
                    expand: true,
                    cwd: '<%= global.src %>/js',
                    src: ['**/*.js'],
                    dest: '<%= global.dest %>/layout/js'
                }]
            }
        },

        imagemin: {
            site: {
                files: [{
                    expand: true,
                    cwd: '<%= global.src %>/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= global.dest %>/layout/images'
                }]
            }
        },

        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= global.dest %>',
                    src: ['**/*.html'],
                    dest: '<%= global.dest %>'
                }]
            }
        },

        watch: {
            config: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            },
            sass: {
                files: ['<%= global.src %>/css/**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['<%= global.src %>/js/**/*.js'],
                tasks: ['uglify']
            },
            assets: {
                files: ['<%= global.src %>/assets/**/*'],
                tasks: ['copy:site', 'htmlmin:dist']
            }
        },

        connect: {
            server: {
                options: {
                    port: '8080',
                    base: 'dist'
                }
            }
        }

    });


    // cacao modules
    require('./modules/jquery/Gruntfile.js')(grunt);
    require('./modules/ddmenu/Gruntfile.js')(grunt);
    require('./modules/magnific/Gruntfile.js')(grunt);
    require('./modules/normalize/Gruntfile.js')(grunt);
    require('./modules/slick/Gruntfile.js')(grunt);
    require('./modules/slider/Gruntfile.js')(grunt);


    // npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-text-replace');

    // custom tasks
    grunt.registerTask('serve', ['connect', 'watch']);
    grunt.registerTask('build', ['copy', 'replace', 'sass', 'uglify', 'imagemin', 'htmlmin']);

    // default task
    grunt.registerTask('default', ['build']);



};

