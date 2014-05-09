module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            target: {
                rjsConfig: './config.js',
                options: {
                    baseUrl: 'src'
                }
            }
        },
        browserify: {
          compile: {
            files: {
              'exper.min.js': ['src/**/*.js'],
            },
            options: {
              transform: ['uglifyify']
            }
          }
        },
        mochaTest: {
          test: {
            options: {
              reporter: 'spec'
            },
            src: ['tests/spec/**/*.js']
          }
        }
    });

    grunt.registerTask('test',['mochaTest']);
};