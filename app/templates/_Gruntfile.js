'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);


    // Configurable paths
    var config = {
        dev: '_dev',
        prod: '_prod'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            js: {
                files: ['<%= config.dev %>/js/{,*/}*.js'],
                // tasks: ['jshint'],
                options: {
                    // livereload: true
                }
            },

            gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['<%= config.dev %>/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            styles: {
                files: ['<%= config.dev %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: ['<%= config.dev %>/styles/{,*/}*.css', '<%= config.dev %>/js/{,*/}*.js', '<%= config.dev %>/{,*/}*.php', '<%= config.dev %>/{,*/}*.php']
                },
                options: {


                    proxy: '<%= customHost %>',
                    watchTask: true // < VERY important
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.prod %>/*',
                        '!<%= config.prod %>/.git*'
                    ]
                }]
            }
            // ,server: '.tmp'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                // '<%= config.dev %>/js/{,*/}*.js',
                '!<%= config.dev %>/js/vendor/*'

            ]
        },

        // Compiles Sass to CSS and generates necessary files if requested

        compass: {
            dist: {
                options: {
                    config: '<%= config.dev %>/config.rb',
                    sassDir: '<%= config.dev %>/sass',
                    cssDir: '<%= config.dev %>/styles',
                    javascriptsDir: '<%= config.dev %>/js',
                    imagesDir: '<%= config.dev %>/images',
                    fontsDir: '<%= config.dev %>/fonts',
                    outputStyle: 'compressed',
                    noLineComments: true

                }
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 3 version']
            },
            dist: {
                // autoprefix tmp css
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        bowerInstall: {
            app: {
                src: ['<%= config.dev %>/{,*/}*.php'],
                exclude: ['bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap.js', 'bower_components/modernizr/modernizr.js']
            },
            compass: {
                src: ['<%= config.dev %>/styles/{,*/}*.{scss,sass}']
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.prod %>/js/{,*/}*.js',
                        '<%= config.prod %>/styles/{,*/}*.css',
                        '<%= config.prod %>/images/{,*/}*.*',
                        '<%= config.prod %>/styles/fonts/{,*/}*.*',
                        '<%= config.prod %>/*.{ico,png}'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.prod %>'
            },
            html: '<%= config.dev %>/{,*/}*.php'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= config.prod %>', '<%= config.prod %>/images']
            },
            html: ['<%= config.prod %>/{,*/}*.php'],
            css: ['<%= config.prod %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.dev %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.prod %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.dev %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= config.prod %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.prod %>',
                    src: '{,*/}*.php',
                    dest: '<%= config.prod %>'
                }]
            }
        },

        // By default, your `index.php`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //     dist: {
        //         files: {
        //             '<%= config.prod %>/styles/main.css': [
        //                 '.tmp/styles/{,*/}*.css',
        //                 '<%= config.dev %>/styles/{,*/}*.css'
        //             ]
        //         }
        //     }
        // },
        // uglify: {
        //     dist: {
        //         files: {
        //             '<%= config.prod %>/js/scripts.js': [
        //                 '<%= config.prod %>/js/scripts.js'
        //             ]
        //         }
        //     }
        // },
        // concat: {
        //     dist: {}
        // },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.dev %>',
                    dest: '<%= config.prod %>',
                    src: [
                        '**',
                        '!sass',
                        '!gumby.json',
                        '!config.rb',
                        '!styles'
                    ]
                }]
            },
            styles: {
                //copy css to .tmp
                expand: true,
                dot: true,
                cwd: '<%= config.dev %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            htaccess: {
                //copy right htacces file
                dot: true,
                cwd: '',
                dest: '<%= config.prod %>/.htaccess',
                src: '_htaccess'
            }
        },

        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
            dist: {
                devFile: 'bower_components/modernizr/modernizr.js',
                outputFile: '<%= config.prod %>/js/vendor/modernizr.js',
                files: {
                    src: [
                        '<%= config.prod %>/js/{,*/}*.js',
                        '<%= config.prod %>/styles/{,*/}*.css',
                        '!<%= config.prod %>/js/vendor/*'
                    ]
                },
                uglify: true
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'compass',
                'copy:styles'
            ],
            dist: [
                'compass',
                'copy:styles'
                // ,
                // 'imagemin',
                // 'svgmin'
            ]
        }
    });


    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'modernizr',
        'rev',
        'usemin',
        // 'htmlmin',
        'copy:htaccess'
    ]);

    grunt.registerTask('default', [
        'browserSync',
        'watch'
    ]);
};