'use strict';
module.exports = function(grunt, configs) {
	grunt.config.set('uglify', {
        options : {
            mangle: false, // changes function and variable names
            compress: true,
            preserveComments: false,
            sourceMap: true,
        },
        my_target: {
            files : {
                'dist/ng-kit.min.js': [
                    'node_modules/angular-kit-cached-resource/dist/ng-kit.cached-resource.min.js',
                    'node_modules/angular-kit-compile-ng-template/dist/ng-kit.compile-ng-template.min.js',
                    'node_modules/angular-kit-date-range-form/dist/ng-kit.date-range-form.min.js',
                    'node_modules/angular-kit-form-error-alert/dist/ng-kit.form-error-alert.min.js',
                    'node_modules/angular-kit-helpers/dist/ng-kit.helpers.min.js',
                    'node_modules/angular-kit-input-title-case/dist/ng-kit.input-title-case.min.js',
                    'node_modules/angular-kit-pagination/dist/ng-kit.pagination.min.js',
                    'node_modules/angular-kit-rest-resource/dist/ng-kit.rest-resource.min.js',
                    'node_modules/angular-kit-weight-unit-input/dist/ng-kit.weight-unit-input.min.js',
                    'src/module.js',
                ],
            }
        },
	});
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
