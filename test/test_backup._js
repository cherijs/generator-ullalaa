/*global describe, beforeEach, it*/

var path = require('path');
var assert = require('assert');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
// var _ = require('underscore');

describe('Ullalla generator', function() {
    'use strict';

    // not testing the actual run of generators yet
    it('the generator can be required without throwing', function() {
        this.app = require('../app');
    });

    describe('run test', function() {


        var expected = [
            '.editorconfig',
            '.gitignore',
            '.gitattributes',
            'package.json',
            'bower.json',
            'Gruntfile.js',
            '_dev/.htaccess',
            '_dev/404.html',
            '_dev/config.rb',
            '_dev/crossdomain.xml',
            '_dev/humans.txt',
            '_dev/index.html',
            '_dev/robots.txt',
            '_dev/favicon/apple-touch-icon-114x114.png',
            '_dev/favicon/apple-touch-icon-120x120.png',
            '_dev/favicon/apple-touch-icon-144x144.png',
            '_dev/favicon/apple-touch-icon-152x152.png',
            '_dev/favicon/apple-touch-icon-57x57.png',
            '_dev/favicon/apple-touch-icon-60x60.png',
            '_dev/favicon/apple-touch-icon-72x72.png',
            '_dev/favicon/apple-touch-icon-76x76.png',
            '_dev/favicon/apple-touch-icon-precomposed.png',
            '_dev/favicon/apple-touch-icon.png',
            '_dev/favicon/browserconfig.xml',
            '_dev/favicon/favicon-160x160.png',
            '_dev/favicon/favicon-16x16.png',
            '_dev/favicon/favicon-196x196.png',
            '_dev/favicon/favicon-32x32.png',
            '_dev/favicon/favicon-96x96.png',
            '_dev/favicon/favicon.ico',
            '_dev/favicon/mstile-144x144.png',
            '_dev/favicon/mstile-150x150.png',
            '_dev/favicon/mstile-310x150.png',
            '_dev/favicon/mstile-310x310.png',
            '_dev/favicon/mstile-70x70.png',
            '_dev/sass/_mixins.sass',
            '_dev/sass/main.sass',
            '_dev/scripts/main.js',
            '_dev/styles/main.css'
        ];

        var options = {
            'skip-install-message': true,
            'skip-install': true,
            'skip-welcome-message': true,
            'skip-message': true
        };

        var runGen;

        beforeEach(function() {
            runGen = helpers
                .run(path.join(__dirname, '../app'))
                .inDir(path.join(__dirname, '.tmp'))
                .withGenerators([
                    [helpers.createDummyGenerator(), 'mocha:app']
                ]);
        });

        it('creates expected files', function(done) {
            runGen.withOptions(options).on('end', function() {

                assert.file([].concat(
                    expected
                ));

                done();
            });
        });



    });
});