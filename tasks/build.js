var utils = require('./_utils'),
  rollup = require( 'rollup' ),
  mkdirp = require('mkdirp'),
  fs = require('fs'),
  path = require('path'),
  babel = require('babel-core')

module.exports = function(esskOptions) {

    return function () {
        // delete the old ./dist folder
        utils.clean(esskOptions.jsDest)

        /**
         * Create a promise based on the result of the webpack compiling script
         */

        return new Promise(function (resolve, reject) {

            rollup.rollup({
                entry: esskOptions.jsBasePath + path.sep + esskOptions.library +'.js'
            }).then(function (bundle) {


                var result = babel.transform(
                    // create a single bundle file
                    bundle.generate({
                        format: 'cjs'
                    }).code,
                    {
                        moduleId: esskOptions.library,
                        moduleIds: true,
                        comments: false,
                        presets: ['es2015'],
                        plugins: ['transform-es2015-modules-umd']
                    }
                ).code

                mkdirp(esskOptions.jsDest, function () {
                    try {
                        fs.writeFileSync(esskOptions.jsDest + path.sep + esskOptions.library + '.js', result, 'utf8')
                        resolve()
                    } catch (e) {
                        utils.print(e, 'error')
                        reject(e)
                    }
                })

            }).catch(e => {
                utils.print(e, 'error')
            })
        })

    }
}
