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
    done: [
        '\n',
        chalk.bold.magenta(''),
        chalk.bold.magenta(''),
        chalk.bold.magenta(''),
        chalk.bold.magenta(''),
        chalk.bold.magenta(''),
        chalk.bold.magenta(''),
        chalk.bold.magenta(''),
        chalk.bold.magenta(''),
        chalk.bold.magenta(''),
        chalk.bold.magenta(''),
        chalk.bold.magenta(''),
        chalk.bold.magenta(' 8 888888888o.          ,o888888o.     b.             8 8 8888888888   '),
        chalk.bold.magenta(' 8 8888    `^888.    . 8888     `88.   888o.          8 8 8888         '),
        chalk.bold.magenta(' 8 8888        `88. ,8 8888       `8b  Y88888o.       8 8 8888         '),
        chalk.bold.magenta(' 8 8888         `88 88 8888        `8b .`Y888888o.    8 8 8888         '),
        chalk.bold.magenta(' 8 8888          88 88 8888         88 8o. `Y888888o. 8 8 888888888888 '),
        chalk.bold.magenta(' 8 8888          88 88 8888         88 8`Y8o. `Y88888o8 8 8888         '),
        chalk.bold.magenta(' 8 8888         ,88 88 8888        ,8P 8   `Y8o. `Y8888 8 8888         '),
        chalk.bold.magenta(' 8 8888        ,88  `8 8888       ,8P  8      `Y8o. `Y8 8 8888         '),
        chalk.bold.magenta(' 8 8888    ,o88P     ` 8888     ,88    8         `Y8o.` 8 8888         '),
        chalk.bold.magenta(' 8 888888888P           `8888888P      8            `Yo 8 888888888888 '),
        chalk.bold.magenta(''),

        chalk.bold.cyan('')
    ].join('\n')
};