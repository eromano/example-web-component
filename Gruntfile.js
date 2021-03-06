module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    open: {
                        target: 'http://localhost:8000/demo'
                    },
                    keepalive: true
                }
            }
        },
        'wct-test': {
            local: {
                options: {remote: false},
            },
            remote: {
                options: {remote: false},
            },
            chrome: {
                options: {browsers: ['chrome']},
            }
        },
        'gh-pages': {
            options: {
                clone: 'bower_components/example-web-component'
            },
            src: [
                'bower_components/**/*',
                '!bower_components/example-web-component/**/*',
                'demo/*', 'src/*', 'index.html'
            ]
        },
        'replace': {
            example: {
                src: ['src/*'],
                dest: 'dist/',
                replacements: [{
                    from: 'bower_components',
                    to: '..'
                }]
            }
        }
    });

    grunt.loadNpmTasks('web-component-tester');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('build',  ['replace']);
    grunt.registerTask('deploy', ['gh-pages']);
    grunt.registerTask('server', ['connect']);
    grunt.registerTask('test', ['wct-test:local']);

};
