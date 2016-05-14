// const wallabyPostProcessor = wallabify({
// const wallabify = require('wallabify');
//     externals: {
//         "react": "React"
//     }
// });

module.exports = function(wallaby) {
    return {
        files: [
            { pattern: "components/about.js", include: false },
            "index.js",
            "routes/*.js",
            "jade/*.jade",
            "templates/*.jade",
            "lib/upload-file.js",
            { pattern: "components/input.js", include: false },
        ],
        tests: [
            "tests/*.js",
            "!tests/api.js",
            { pattern: "test/components/*.js", include: false }
        ],
        env: {
            "type": "node"
        },
        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['es2015', 'react', 'stage-2']
            })
        },
        // postprocessor: wallabyPostProcessor,
        // setup: function functionName() {
        //     window.__moduleBundler.loadTests();
        // },
        debug: true
    };
};
