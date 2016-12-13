var utils = require('./_utils'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    sass = require('node-sass')

/**
 *
 * @param esskOptions : options from .es6-sass file
 * @param compress {string} default nested, expanded, compact, compressed
 * @return {Promise}
 */

module.exports = function(esskOptions, compress) {
    compress = compress || 'nested';

    return function () {
        utils.clean(esskOptions.cssDest)

        return new Promise(function (resolve, reject) {
            sass.render({
                file: esskOptions.scssBasePath + path.sep + esskOptions.library + '.scss',
                outFile: esskOptions.scssBasePath + path.sep + esskOptions.library + '.css',
                outputStyle: compress,
                sourceMap: true
            }, function (err, result) {
                mkdirp(esskOptions.cssDest, function () {
                    if (err !== null) {
                        utils.print(err, 'error')
                        reject(err)
                    }
                    try {
                        fs.writeFileSync(esskOptions.cssDest + path.sep + esskOptions.library + '.css', result.css, 'utf8')
                        fs.writeFileSync(esskOptions.cssDest + path.sep + esskOptions.library + '.css.map', result.map, 'utf8')
                        utils.print('\nCreated files: ' + esskOptions.library + '.css and '+ esskOptions.library + '.css.map generated', 'cool')
                        resolve()
                    } catch (e) {
                        reject(e)
                    }
                })
            });

        })
    }
}
