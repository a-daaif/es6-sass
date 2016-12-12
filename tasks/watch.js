var utils = require('./_utils'),
    eslint = require('./eslint'),
    build = require('./build'),
    sass = require('./sass'),
    path = require('path'),
    chokidar = require('chokidar')


module.exports = function(esskOptions) {
    return function () {
        options = {
            watchEvents: [
                'change',
                'add',
                'unlink',
                'unlinkDir',
                'addDir'
            ]
        }
        // return a promise based on a certain task triggered
        var runOnlyOn = function (event) {
            if (~options.watchEvents.indexOf(event)) {
                // go to the next task
                return Promise.resolve()
            } else {
                return Promise.reject()
            }
        }

        // run eslint when a source file gets updated
        let jsMsg = `Watching files in the ${esskOptions.jsBasePath}${path.sep}**${path.sep}*.js path`
        let scssMsg = `Watching files in the ${esskOptions.scssBasePath}${path.sep}**${path.sep}*.scss path\n`
        utils.print(jsMsg, 'cool')
        utils.print(scssMsg, 'cool')
        chokidar.watch([
            `${esskOptions.jsBasePath}/**/*.js`,
            `${esskOptions.scssBasePath}/**/*.scss`],
            {
                ignoreInitial: true
        }).on('all', function (event) {
            // this tasks will run only if the current event matches the ones in the watchEvents array
            runOnlyOn(event)
            //.then(eslint)
            build(esskOptions)()
                .then(sass(esskOptions))
                .catch(e => utils.print(e, 'error'))
        })

    }
}
