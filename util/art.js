var chalk = require('chalk');

// Rainbow display
var rainbowColors = [
    chalk.red,
    chalk.yellow,
    chalk.green,
    chalk.blue,
    chalk.magenta
];
chalk.rainbow = function(str) {
    var arStr = str.split(''),
        out = '';
    for (var i in arStr) {
        if (arStr[i] == ' ' || arStr[i] == '\t' || arStr[i] == '\n')
            out += arStr[i];
        else
            out += rainbowColors[i % rainbowColors.length](arStr[i]);
    }
    return out;
};



module.exports = {
    ulla: [

        chalk.bold.cyan('                                                '),
        chalk.bold.cyan('                                                '),
        chalk.bold.magenta('   Welcome to the marvelous Ullalaa generator!  '),
        chalk.bold.cyan('                                                '),
        chalk.bold.cyan('         f                             t       '),
        chalk.bold.cyan('         W W                         t #        '),
        chalk.bold.cyan('         W W W                     E # #       '),
        chalk.bold.cyan('         W W W W G               # # # # f      '),
        chalk.bold.cyan('       j W W W W W W W W # # # # # # # # W      '),
        chalk.bold.cyan('       W W W W W W W W W # # # # # # # # #      '),
        chalk.bold.cyan('       W W W W W W W W W # # # # # # # # #      '),
        chalk.bold.cyan('       W W W W W W W W W # # # # # # # # #      '),
        chalk.bold.cyan('       W # W # W W W W W # # # # # # # # #      '),
        chalk.bold.cyan('       : : : : . W W W W # # # # : , , , ,      '),
        chalk.bold.cyan('       : : : : : : W W W # # # , , , , , ,      '),
        chalk.bold.cyan('       : :   : : : t W W # # , , , , ,   ,      '),
        chalk.bold.cyan('       : : W # : : W W W # #   , , : W , ,      '),
        chalk.bold.cyan('     ; : : : : : : W W W # # # , , , , , , ;    '),
        chalk.bold.cyan('     : : : : : : K W W W # # # , , , , , , ,    '),
        chalk.bold.cyan('         : : : : W W E E E E # , , , , ,        '),
        chalk.bold.cyan('               : . W W E E # # , ,              '),
        chalk.bold.cyan('                     W W # E                    '),
        chalk.bold.cyan('                                                ')

    ].join('\n'),
    go: [
        chalk.bold.magenta(' .d8888b.        d8888888b     d8888888888888    .d88888b. 888     88888888888888888888b. '),
        chalk.bold.magenta('d88P  Y88b      d888888888b   d8888888          d88P" "Y88b888     888888       888   Y88b'),
        chalk.bold.magenta('888    888     d88P88888888b.d88888888          888     888888     888888       888    888'),
        chalk.bold.magenta('888           d88P 888888Y88888P8888888888      888     888Y88b   d88P8888888   888   d88P'),
        chalk.bold.magenta('888  88888   d88P  888888 Y888P 888888          888     888 Y88b d88P 888       8888888P" '),
        chalk.bold.magenta('888    888  d88P   888888  Y8P  888888          888     888  Y88o88P  888       888 T88b  '),
        chalk.bold.magenta('Y88b  d88P d8888888888888   "   888888          Y88b. .d88P   Y888P   888       888  T88b '),
        chalk.bold.magenta(' "Y8888P88d88P     888888       8888888888888    "Y88888P"     Y8P    8888888888888   T88b')
    ].join('\n')
};