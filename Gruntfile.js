module.exports = function (grunt) {

	function browserifyOptions(port) {
		port = port || 4774;

		var options = {
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

		return options;
	}


	grunt.initConfig({
		browserify: {
			app: {
				options: browserifyOptions(4477),
				src: 'js/app.js',
				dest: 'js/bundle.js'
			},
			hedgehogRegistry: {
				options: browserifyOptions(4477),
				src: 'components/register-hedgehog.js',
				dest: 'js/register-hedgehog.bundle.js'
			}
		},

		env: {
			build: {
				NODE_ENV: 'development'
			}
		}
    });

	// Default task
	grunt.registerTask('default', ['env:build', 'browserify:app']);
	grunt.registerTask('hedgehog-registry', ['env:build', 'browserify:hedgehogRegistry']);

	// Load up tasks
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-env');

};
