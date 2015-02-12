module.exports = function(grunt) {

    grunt.initConfig({

        global: {
            // Source files
            src: '',
            // Destination path
            dest: '../',
            // Global exclusions
            exclusions: ['.ftppass', '.grunt', '.sass-cache', 'node_modules', '.idea', '.git', '.DS_Store', 'Thumbs.db', '.*.*.un~', '.*.*.swp']
        },

        sass: {
            main: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '<%= global.dest %>/layout/css/main.css': '<%= global.src %>scss/main.scss'
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= global.src %>js',
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
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= global.src %>images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= global.dest %>/layout/images'
                }]
            }
        },

        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= global.dest %>',
                    src: ['**/*.html'],
                    dest: '<%= global.dest %>'
                }]
            }
        },

        cssmin: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'bower_components',
                    src: ['**/*.css', '!**/*.min.css', '!**/magnific-popup.css', '!**/normalize.css'],
                    dest: '<%= global.dest %>/layout/css',
                    flatten: true
                }]
            }
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= global.src %>assets',
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

        assemble: {
            options: {
                assets: '<%= global.dest %>',
                partials: ['<%= global.src %>site/partials/**/*.hbs'],
                data: ['<%= global.src %>site/data/**/*.{json,yml}'],
                layoutdir: '<%= global.src %>site/layouts',
                layout: 'default.hbs'
            },
            site: {
                files: [{
                    expand: true,
                    cwd: '<%= global.src %>site/pages',
                    src: ['**/*.hbs'],
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
            assets: {
                files: ['<%= global.src %>assets/**'],
                tasks: ['newer:copy']
            },
            sass: {
                files: ['<%= global.src %>scss/**/*.scss'],
                tasks: ['sass']
            },
            css: {
                files: ['bower_components/**/*.css', '!bower_components/**/*.min.css', '!bower_components/**/normalize.css'],
                tasks: ['newer:cssmin']
            },
            html: {
                files: ['src/assets/**/*.html'],
                tasks: ['newer:htmlmin:main']
            },
            js: {
                files: ['<%= global.src %>js/**/*.js', '!<%= global.src %>js/**/*.min.js', 'bower_components/**/*.js', '!bower_components/**/*.min.js'],
                tasks: ['newer:uglify']
            },
            site: {
                files: ['src/site/**/*.{hbs,json,yml}'],
                tasks: ['assemble', 'newer:htmlmin:main']
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

        ftpush: {
            main: {
                auth: {
                    host: 'ftp.aptuitiv.com',
                    port: 21,
                    authKey: 'server1'
                },
                src: '<%= global.dest %>',
                dest: '/ap/ap-base',
                exclusions: '<%= global.exclusions %>',
                keep: ['']
            }
        }

    });



    // npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-ftpush');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('assemble');

    // custom tasks
    grunt.registerTask('serve', ['connect', 'watch']);
    grunt.registerTask('bower', ['copy:bower', 'replace:bower']);
    grunt.registerTask('build', ['sass', 'uglify', 'assemble', 'copy:main', 'imagemin', 'htmlmin']);
    grunt.registerTask('build-new', ['sass', 'newer:uglify', 'assemble','newer:copy:main', 'newer:imagemin', 'newer:htmlmin']);

    // default task
    grunt.registerTask('default', ['build']);



};

