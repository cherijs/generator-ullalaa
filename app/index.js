'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var UllalaaGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');

        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous Ullalaa generator!'));

        // var prompts = [{
        //     type: 'confirm',
        //     name: 'someOption',
        //     message: 'Would you like to enable this option?',
        //     default: true
        // }];

        // this.prompt(prompts, function(props) {
        //     this.someOption = props.someOption;

        //     done();
        // }.bind(this));


         done();
    },

    app: function() {
        // this.mkdir('_dev');
        this.directory('_dev');

        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('_Gruntfile.js', 'Gruntfile.js');
    },

    projectfiles: function() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('gitignore', '.gitignore');
        this.copy('gitattributes', '.gitattributes');
    }
});

module.exports = UllalaaGenerator;