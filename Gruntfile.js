module.exports = function(grunt) {

    grunt.initConfig({

        // Global build settings
        global: {
            // Project source files 
            src: 'site',
            // Build destination
            dest: 'dist',
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

        uglify: {
            options: {
                mangle: false
            },
            site: {
                files: [{
                    expand: true,
                    cwd: '<%= global.src %>/js',
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: '<%= global.dest %>/layout/js'
                },{
                    expand: true,
                    cwd: 'bower_components',
                    src: ['**/ap-drilldown-menu.js', '**/jquery.js', '**/jquery.magnific-popup.js'],
                    dest: '<%= global.dest %>/layout/js',
                    flatten: true
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
            site: {
                files: [{
                    expand: true,
                    cwd: '<%= global.dest %>',
                    src: ['**/*.html'],
                    dest: '<%= global.dest %>'
                }]
            }
        },

        copy: {
            site: {
                files: [{
                    expand: true,
                    cwd: '<%= global.src %>/assets',
                    src: ['**'],
                    dest: '<%= global.dest %>'
                }]
            },
            bower: {
                src: 'bower_components/normalize.css/normalize.css',
                dest: 'bower_components/normalize.css/_normalize.scss'
            }
        },

        replace: {
            /* our own settings file is already imported in main.scss */
            bower: {
                src: ['bower_components/magnific-popup/**/*.scss'],
                overwrite: true,
                replacements: [{
                    from: /@import "settings";/g,
                    to: ""
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
            assets: {
                files: ['<%= global.src %>/assets/**'],
                tasks: ['newer:copy']
            },
            sass: {
                files: ['<%= global.src %>/scss/**/*.scss'],
                tasks: ['sass']
            },
            html: {
                files: ['src/assets/**/*.html'],
                tasks: ['newer:htmlmin:main']
            },
            js: {
                files: ['<%= global.src %>/js/**/*.js', '!<%= global.src %>/js/**/*.min.js', 'bower_components/**/*.js', '!bower_components/**/*.min.js'],
                tasks: ['newer:uglify']
            }
        },

        connect: {
            server: {
                options: {
                    port: '8080',
                    base: 'dist'
                }
            }
        },

    });



    // npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-newer');

    // custom tasks
    grunt.registerTask('serve', ['connect', 'watch']);
    grunt.registerTask('bower', ['copy:bower', 'replace:bower']);
    grunt.registerTask('build', ['sass', 'uglify', 'copy:site', 'imagemin', 'htmlmin']);
    grunt.registerTask('build-new', ['sass', 'newer:uglify', 'newer:copy:site', 'newer:imagemin', 'newer:htmlmin']);

    // default task
    grunt.registerTask('default', ['build']);



};

