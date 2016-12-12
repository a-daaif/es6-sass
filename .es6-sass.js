module.exports  = {
    /**
     * the name bundled output files main.js and main.css
     * Olso the js namespace in the global scope window.main
     */
    library: 'main',
    /**
     * ES6 source folder. A subfolders are scanned
     */
    jsBasePath: 'src/js',
    /**
     * SASS source folder. A subfolders are scanned
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