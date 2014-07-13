# generator-Ullalaa [![Build Status](https://secure.travis-ci.org/cherijs/generator-ullalaa.png?branch=master)](https://travis-ci.org/cherijs/generator-ullalaa)

> [Yeoman](http://yeoman.io) generator


## Getting Started


```bash
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-Ullalaa from npm, run:

```bash
$ npm install -g generator-ullalaa
```

Finally, initiate the generator:

```bash
$ yo ullalaa
```



### Steps you need to do!!!

1. Laounch MAMP and make virtual host to this (root) folder! ex: http://localhost
2. start grunt server with command: $ grunt

code happy :)


### Grunt commands

To start Grunt server (compass, browsersync) type:

```bash
$ grunt
```

To add bower component
```bash
$ bower install jQuery —save
```

To remove bower component
```bash
$ bower uninstall jQuery —save
```

To link added bower components to html (no need to do it, if you adding bower components like example before and you are in server mode)
```bash
$ grunt bowerInstall
```


 To build production build

```bash
$ grunt build
```


### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
