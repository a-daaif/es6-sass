ES6 and SASS Starter Kit to build  javascript ES6/SASS projects runnable on any browser
=======================================================================================
## Description
### ES6 NOW ! Focus on development not on tooling !
The purpose of this package is to set up a development environment that supports es6 (es2015) and the sass preprocessor.
Installing this package globally allows you to create a boilerplate project and give you via the  command line tool **es6-sass** the ability to transpile  **javascript es6 to one bundled minified es5  file** and **sass files to a single compressed css file**.
The command line tool **es6-sass** allow you to :
1. init project 
2. transpile an bundle **es6** to **es5**
3. transpile **.scss** files to **.css** single file
4. eslint your javascript
5. uglify your javascript
6. compress your css
7. watching mode for js an scss change

###The structure of the generated project is as follows:
```
 your_project/
 |_ node_modules/    # node modules folder
 |_ src/
 |     |_ js /    # Put here your es6 js files, you can create subfolders
 |     |     |_ main.js
 |     |_ scss /  # Put here your scss files, you can create subfolders
 |_ dist/
 |     |_ js /    # generated es5 file
 |     |     |_ main.js
 |     |     |_ main.min.js
 |     |_ css /  # generated css file
 |            |_ main.css
 |            |_ main.css.map
 |_ .es6-sass       # configuration file
 |_ .eslintrc       # eslint configuration file
 |_ index.html      #
 |_ package.json    # 

```
## 1 - Installation
This package **must** be installed **globally**.
```{r, engine='bash', count_lines}
npm install -g es6-sass
```
## 2 - Create new project
```
mkdir my-project
cd my-project
es6-sass init     # generates the structure of the project
```
## 3 - Usage
```
es6-sass build       # transpiles and bundles es6 to es5 single file
es6-sass sass        # transpile .scss files to css file and generate sourceMap file
es6-sass minify      # uglify and generates .min.js file and compress .css file
es6-sass eslint      # parse js files and show errors according to .eslintrc config file
es6-sass watch       # enables the watch mode on all js an scss files
```
## 4 - Customize es6 and scss entries 
es6-sass init generates a  default **.es6-sass** config file. you can change defaults.
```javascript
module.exports  = {
    /**
     * the name bundled output files main.js and main.css
     * Olso the js namespace in the global scope window.main
     */
    library: 'main',
    /**
     * ES6 source folder. All subfolders are scanned
     */
    jsBasePath: 'src/js',
    /**
     * SASS source folder. All subfolders are scanned
     */
    scssBasePath: 'src/scss',
    /**
     * ES5 destination folder.
     */
    jsDest: 'dist/js',
    /**
     * SASS destination folder.
     */
    cssDest: 'dist/css'
};
```



