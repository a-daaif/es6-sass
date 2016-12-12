var utils = require('./_utils'),
  rollup = require( 'rollup' ),
  mkdirp = require('mkdirp'),
  fs = require('fs'),
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
                // The bundle's starting point. This file will be
                // included, along with the minimum necessary code
                // from its dependencies
                entry: `${esskOptions.jsBasePath}/${esskOptions.library}.js`
            }).then(function (bundle) {

                // convert to valid es5 code with babel
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
                        fs.writeFileSync(`${esskOptions.jsDest}/${ esskOptions.library }.js`, result, 'utf8')
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
