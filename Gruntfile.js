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
			hedgehogRegistryDev: {
				options: browserifyOptions(4477),
				src: 'components/register-hedgehog.js',
				dest: 'js/register-hedgehog.bundle.js'
			},
			hedgehogRegistryLive: {
				options: browserifyOptions(4477, true),
				src: 'components/register-hedgehog.js',
				dest: 'js/register-hedgehog.bundle.js'
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
			hedgehogRegistry: {
				options: {
					beautify: true
				},
				files: {
					'js/register-hedgehog.min.js': ['js/register-hedgehog.bundle.js']
				}
			}
		}
    });

	// Default task
	grunt.registerTask('default', ['env:build', 'browserify:app']);
	grunt.registerTask('hedgehog-registry-dev', ['env:dev', 'browserify:hedgehogRegistryDev']);
	grunt.registerTask('hedgehog-registry-live', ['env:dist', 'browserify:hedgehogRegistryLive', 'uglify:hedgehogRegistry']);

	// Load up tasks
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-contrib-uglify');

};
