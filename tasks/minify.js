var utils = require('./_utils'),
  fs = require('fs'),
  uglify = require('uglify-js')


module.exports = function(esskOptions) {

    return function () {

        var jsSourcePath = esskOptions.jsDest + path.sep + esskOptions.library + '.js',
            jsOutputPath = esskOptions.jsDest + path.sep + esskOptions.library + '.min.js',
            outputJS = uglify.minify(jsSourcePath)

        /**
         * Create a promise based on the result of the uglify output
         */
        return new Promise(function (resolve, reject) {
            // write the result of the uglify script in the output folder
            fs.writeFile(jsOutputPath, outputJS.code, function (err) {
                if (err) {
                    utils.print(err, 'error')
                    reject(err)
                } else {
                    utils.print('JS minified', 'confirm')
                    utils.print('Created file: ' + jsOutputPath , 'cool')
                    resolve()
                }
            })
        })

    }
}