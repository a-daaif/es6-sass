let fs = require('fs'),
    fse = require('fs-extra'),
    utils = require('./_utils'),
    path = require('path')


module.exports = () => {
    fse.copy(__dirname + "/../src",  "./src", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print("|---> src folder generated successfully.", "cool")
        }
    })
    fse.copy(__dirname + "/../dist", "./dist", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print("|---> dist folder generated successfully.", "cool")
        }
    })
    fse.copy(__dirname + "/../node_modules", "./node_modules", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print("|---> node_modules folder generated successfully.", "cool")
        }
    })
    fse.copy(__dirname + "/../index.html", "./index.html", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print("|---> index.html file generated successfully.", "cool")
        }
    })
    fse.copy(__dirname + "/../.es6-sass.js", "./.es6-sass.js", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print("|---> .es6-sass.js file generated successfully.", "cool")
        }
    })
    fse.copy(__dirname + "/../.eslintrc", "./.eslintrc", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print("|---> .eslintrc file generated successfully.", "cool")
        }
    })
    let parts = path.resolve().split(path.sep),
        folderName = parts[parts.length -1],

        myPackage = {
            name: folderName,
            version: '1.0.0',
            devDependencies: utils.getDependencies()
        }

    fs.writeFile('./package.json', JSON.stringify(myPackage, null, 2 ))
    utils.print("|---> package.json file generated successfully.", "cool")

}
