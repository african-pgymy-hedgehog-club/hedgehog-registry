module.exports = function (grunt) {

    function browserifyOptions(port, live) {
        port = port || 4774;
        live = live || false;

        var options = {};
        if(!live) {
            options = {
                browserifyOptions: {
                    debug: true
                },
                watch: true,
                keepAlive: true,
                transform: [
                    [{}, 'babelify', {
                        loose: 'all'
                    }],
                    [{global: true}, 'envify']
                ],
                plugin: [
                    ['livereactload', {port: port}]
                ]
            };
        }
        else if(live) {
            options = {
                transform: [
                    [{}, 'babelify', {
                        loose: 'all'
                    }]
                ]
            };
        }

        return options;
    }


    grunt.initConfig({
        browserify: {
            app: {
                options: browserifyOptions(4477),
                src: 'js/app.js',
                dest: 'js/bundle.js'
            },
            registerHedgehogDev: {
                options: browserifyOptions(4477),
                src: 'components/register-hedgehog.js',
                dest: 'js/register-hedgehog.bundle.js'
            },
            registerHedgehogLive: {
                options: browserifyOptions(4477, true),
                src: 'components/register-hedgehog.js',
                dest: 'js/register-hedgehog.bundle.js'
            },
            registerLitterDev: {
                options: browserifyOptions(4477),
                src: 'components/register-litter.js',
                dest: 'js/register-litter.bundle.js'
            },
            registerLitterLive: {
                options: browserifyOptions(4477, true),
                src: 'components/register-litter.js',
                dest: 'js/register-litter.bundle.js'
            },
            applyForAffix: {
                options: browserifyOptions(4477, true),
                src: 'components/apply-for-breeder-affix.js',
                dest: 'js/apply-for-breeder-affix.bundle.js'
            }
        },

        env: {
            dist: {
		        NODE_ENV : 'production',
            },
		    dev: {
                NODE_ENV: 'development',
            }
        },

        uglify: {
            registerHedgehog: {
                options: {
                    beautify: true
                },
                files: {
                    'js/register-hedgehog.min.js': ['js/register-hedgehog.bundle.js']
                }
            },
            registerLitter: {
                options: {
                    beautify: true
                },
                files: {
                    'js/register-litter.min.js': ['js/register-litter.bundle.js']
                }
            },
            applyForAffix: {
                options: {
                    beautify: true
                },
                files: {
                    'js/apply-for-breeder-affix.min.js': ['js/apply-for-breeder-affix.bundle.js']
                }
            }
        }
    });

    // Default task
    grunt.registerTask('default', ['env:dev', 'browserify:app']);
    grunt.registerTask('register-hedgehog-dev', ['env:dev', 'browserify:registerHedgehogDev']);
    grunt.registerTask('register-hedgehog-live', ['env:dist', 'browserify:registerHedgehogLive', 'uglify:registerHedgehog']);
    grunt.registerTask('register-litter-dev', ['env:dev', 'browserify:registerLitterDev']);
    grunt.registerTask('register-litter-live', ['env:dist', 'browserify:registerLitterLive', 'uglify:registerLitter']);
    grunt.registerTask('apply-for-affix-live', ['env:dist', 'browserify:applyForAffix', 'uglify:applyForAffix']);


    // Load up tasks
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-uglify');

};
