#! /usr/bin/env node

'use strict'

let command = process.argv[2],
    utils   = require('./tasks/_utils'),
    path = require('path'),
    projectPath = path.resolve()

    if(command === 'init'){
        let init   = require('./tasks/init')
        init()
    } else {
        let eslint = require('./tasks/eslint'),
            build = require('./tasks/build'),
            sass = require('./tasks/sass'),
            watch = require('./tasks/watch'),
            minify = require('./tasks/minify'),
            esskOptions = require(projectPath + path.sep + '.es6-sass')
            esskOptions = utils.resolve(projectPath, esskOptions)

        switch(command) {
            case 'eslint':
                eslint(esskOptions)
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
            default:
                //eslint(esskOptions)
                build(esskOptions)()
                    .then(sass(esskOptions, 'compressed'))
                    .then(minify(esskOptions))
                    .then(function () {
                        utils.print('ES6 and SASS successfully compiled!', 'confirm')
                    })
        }
    }

