var utils = require('./_utils')


module.exports = function(esskOptions) {
    return function () {

        let folders = [
            esskOptions.jsBasePath,
            'test'
        ]
        // Run eslint
        return utils.exec('./node_modules/.bin/eslint', folders)

    }
}
