'use strict';
module.exports = function(grunt) {
	grunt.config.set('sass', {
        compile: {
            options: {
                loadPath: [
                    'node_modules',
                ],
                style: 'compressed',
            },
            files: {
                'dist/ng-kit.min.css': 'src/styles.scss',
            },
        },
	});
    grunt.loadNpmTasks('grunt-contrib-sass');
};
