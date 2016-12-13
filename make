#! /usr/bin/env node

'use strict'

var command = process.argv[2],
    utils   = require('./tasks/_utils'),
    path = require('path'),
    projectPath = path.resolve(),
    esskOptions

try{
    esskOptions = require(projectPath + path.sep + '.es6-sass')
    esskOptions = utils.resolve(projectPath, esskOptions)
} catch(e){
    command = 'init'
}

if(command === 'init'){
    var init   = require('./tasks/init')
    init()
}  else {
    var eslint = require('./tasks/eslint'),
        build = require('./tasks/build'),
        sass = require('./tasks/sass'),
        watch = require('./tasks/watch'),
        minify = require('./tasks/minify')


    switch(command) {
        case 'eslint':
            eslint(esskOptions)()
            break
        case 'build':
            build(esskOptions)()
            break
        case 'sass':
            sass(esskOptions)()
            break
        case 'watch':
            watch(esskOptions)()
            break
        case 'minify':
            minify(esskOptions)()
            sass(esskOptions, 'compressed')()
            break
        case 'prod':
            //eslint(esskOptions)
            build(esskOptions)()
                .then(sass(esskOptions, 'compressed'))
                .then(minify(esskOptions))
                .then(function () {
                    utils.print('ES6 and SASS successfully compiled!', 'confirm')
                })
            break
        case 'help':
        default:
            utils.print('> es6-sass build  # transpile and bundle es6 to es5 file', 'cool')
            utils.print('> es6-sass sass  # transpile .scss files to .css file', 'cool')
            utils.print('> es6-sass eslint  # apply eslint to js files', 'cool')
            utils.print('> es6-sass minify  # minify js an css files', 'cool')
            utils.print('> es6-sass watch  # enable watching mode to js an scss files', 'cool')
            utils.print('> es6-sass prod  # transpile then minify all production files files', 'cool')
            utils.print('> es6-sass help  # this help', 'cool')
    }
}

