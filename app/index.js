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


    this.on('end', function () {
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
        // type: 'confirm',
        name: 'customHost',
        message: 'What will be your virtual Host name (MAMP)? ex: "localhost" ',
        default: 'localhost'
    }], function (props) {
        this.customHost = props.customHost;

        cb();
    }.bind(this));
};


Generator.prototype.copyFiles = function copyFiles() {

    this.directory('_dev');


    // this.mkdir('_dev/assets');


    this.copy('package.json', 'package.json');
    this.copy('bower.json', 'bower.json');
    // this.copy('_config.rb', '_dev/config.rb');
    // this.copy('_Gruntfile.js', 'Gruntfile.js');

    var context = {
        customHost: this.customHost,
        config: {
            dev: '<%= config.dev %>',
            prod: '<%= config.prod %>'
        }
    };

    this.template('_Gruntfile.js', 'Gruntfile.js', context);

    this.copy('root_htaccess', '.htaccess');
    this.copy('prod_htaccess', '_htaccess');


    this.copy('.editorconfig', '.editorconfig');
    this.copy('.jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');






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
        this.logger.log(art.done, {
            logPrefix: ''
        });


        var comm = [
            '\n',
            chalk.bold.red('ADDITIONAL COMMANDS'),
            chalk.bold.red(''),
            chalk.bold.cyan('$ grunt'),
            chalk.white('start Grunt server (compass, browsersync)'),
            chalk.bold.cyan(''),
            chalk.bold.cyan('$ grunt build'),
            chalk.white('Build minified production version in folder _prod'),
            chalk.bold.cyan(''),
            chalk.bold.cyan('$ bower install jQuery -—save'),
            chalk.white('Add bower component'),
            chalk.bold.cyan(''),
            chalk.bold.cyan('$grunt bowerInstall'),
            chalk.white('To link added bower components to html, happens automaticly if grunt server running'),
            chalk.bold.cyan(''),
            chalk.bold.red('Steps you need to do!!!'),
            chalk.bold.yellow('1. Laounch MAMP and make virtual host to this (root) folder! ex: http://' + this.customHost),
            chalk.bold.yellow('2. start grunt server with command: ') + chalk.bold.cyan('$ grunt'),
            chalk.bold.cyan('Happy Coding! :)'),
            chalk.bold.magenta(''),
        ].join('\n');


        this.logger.log(comm, {
            logPrefix: ''
        });


        // this.logger.log(chalk.red('\nCOMMANDS'));
        // this.logger.log(chalk.cyan('$ grunt ') + '\nstart Grunt server (compass, browsersync) \n');
        // this.logger.log(chalk.cyan('$ grunt build') + '\nBuild production version in folder _prod \n');
        // this.logger.log(chalk.cyan('$ bower install jQuery -—save') + '\nAdd bower component\n');
        // this.logger.log(chalk.cyan('$ bower uninstall jQuery -—save') + '\nRemove bower component\n');
        // this.logger.log(chalk.cyan('$ grunt bowerInstall') + '\nTo link added bower components to html\n');

        // this.logger.log(chalk.yellow('Launching:$ grunt server'));
        // this.spawnCommand('grunt');
        // this.spawnCommand('grunt', ['watch']);
    }
};