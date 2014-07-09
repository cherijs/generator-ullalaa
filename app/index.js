'use strict';

var fs = require('fs');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var art = require('./util/art');
var Logger = require('./util/log');


var Generator = module.exports = function Generator(args, options) {
    yeoman.generators.Base.apply(this, arguments);
    this.argument('appname', {
        type: String,
        required: false
    });
    this.appname = this.appname || path.basename(process.cwd());
    this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));

    this.option('app-suffix', {
        desc: 'Allow a custom suffix to be added to the module name',
        type: String,
        required: 'false'
    });
    this.env.options['app-suffix'] = this.options['app-suffix'];

    this.on('end', function() {
        // var enabledComponents = [];

        // if (this.animateModule) {
        //     enabledComponents.push('angular-animate/angular-animate.js');
        // }

        this.installDependencies({
            skipInstall: this.options['skip-install'],
            skipMessage: this.options['skip-message'],
            callback: this._injectDependencies.bind(this)
        });



    });

    this.pkg = require('../package.json');





    // Log level option
    this.option('log', {
        desc: 'The log verbosity level: [ verbose | log | warn | error ]',
        defaults: 'log',
        alias: 'l',
        name: 'level'
    });

    // Enable advanced features
    this.option('advanced', {
        desc: 'Makes advanced features available',
        alias: 'a'
    });

    // Shortcut for --log=verbose
    this.option('verbose', {
        desc: 'Verbose logging',
        alias: 'v'
    });
    if (this.options.verbose) {
        this.options.log = 'verbose';
    }

    // Setup the logger
    this.logger = Logger({
        level: this.options.log
    });

    // Log the options
    try {
        this.logger.verbose('\nOptions: ' + JSON.stringify(this.options, null, '  '));
    } catch (e) {
        // This is here because when a generator is run by selecting it after running `yo`,
        // the options is a circular data structure, causing an error when converting to json.
        // Verbose cannot be called this way, so there is no need to log anything.
    }



};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.welcome = function welcome() {
    if (!this.options['skip-welcome-message']) {


        // this.log(yosay());
        this.logger.log(art.ulla, {
            logPrefix: ''
        });

        // this.log(
        //     chalk.magenta(
        //         'Out of the box I include Bootstrap and some AngularJS recommended modules.' +
        //         '\n'
        //     )
        // );
    }


};

Generator.prototype.askForCompass = function askForCompass() {
    var cb = this.async();

    this.prompt([{
        type: 'confirm',
        name: 'compass',
        message: 'Would you like to use Sass (with Compass)?',
        default: true
    }], function(props) {
        this.compass = props.compass;

        cb();
    }.bind(this));
};


Generator.prototype.copyFiles = function copyFiles() {

    this.directory('_dev');
    this.directory('test');

    this.mkdir('_dev/fonts');
    this.mkdir('_dev/images');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');

    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');

    if (this.compass) {
        this.copy('_config.rb', '_dev/config.rb');
        this.directory('sass', '_dev/sass');
        this.copy('_Gruntfile.js', 'Gruntfile.js');
    } else {
        this.copy('_css_Gruntfile.js', 'Gruntfile.js');
        this.copy('_nosass_index.html', '_dev/index.html');

    }

    // var cssFile = 'styles/main.' + (this.compass ? 's' : '') + 'css';
    // this.copy(
    //     path.join('app', cssFile),
    //     path.join(this.appPath, cssFile)
    // );


};



Generator.prototype._injectDependencies = function _injectDependencies() {
    if (this.options['skip-install']) {
        this.log(
            'After running `npm install & bower install`, inject your front end dependencies' +
            '\ninto your source code by running:' +
            '\n' +
            '\n' + chalk.yellow.bold('grunt wiredep')
        );
    } else {
        this.logger.log(art.go, {
            logPrefix: ''
        });

        this.spawnCommand('grunt', ['serve']);
    }
};