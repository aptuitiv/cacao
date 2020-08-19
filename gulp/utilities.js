/* =========================================================================== *\
    Utility functions
\* =========================================================================== */


// Require plugins
const chalk = require('chalk');
const fancyLog = require('fancy-log');
const moment = require('moment');

// Load node modules
const del = require('del');
const path = require('path');


// Banner to add to the top of files
const banner = [
    "/**",
    " * @build " + moment().format("llll Z"),
    " */",
    ""
].join("\n");


/**
 * Deletes a file
 *
 * @param {string} file The file to delete
 * @param {string} src The file source path
 * @param {string} dest The build destination path
 * @param {string} type The type of file. Used in the console message
 */
function deleteFile(file, src, dest, type) {

    // Get the relative path to the file
    var srcPath = path.relative(path.resolve(src), file);

    // Remove "../" from the path as it causes the destination path to be incorrect
    srcPath = srcPath.replace(/(\.\.\/)+/, '');

    // Output message of what is being deleted
    log(dest + '/' + srcPath, 'Deleting ' + type);

    // Combine the destination path and the source path to get the full path to the destination file
    let destPath = path.resolve(dest, srcPath);

    // Delete the file
    del.sync(destPath);
}


/**
 * Process an array of data synchronously.
 *
 * @link https://gist.github.com/steve-taylor/5075717
 * Updated slightly to be ES6
 *
 * @param data An array of data.
 * @param processData A function that processes an item of data.
 *                    Signature: function(item, i, callback), where {@code item} is the i'th item,
 *                               {@code i} is the loop index value and {@code calback} is the
 *                               parameterless function to call on completion of processing an item.
 */
function doSynchronousLoop(data, processData, done) {
    if (data.length > 0) {
        const loop = (data, i, processData, done) => {
            processData(data[i], i, () => {
                if (++i < data.length) {
                    loop(data, i, processData, done);
                } else {
                    done();
                }
            });
        };
        loop(data, 0, processData, done);
    } else {
        done();
    }
}

/**
 * Flattens an array and joins two together
 * @param {Array} prev
 * @param {Array} current
 * @returns {Array}
 */
function flatten(prev, current) {
    return prev.concat(current.src);
}

/**
 * Logs the current file being dealt with
 * @param {object} file The file object
 * @param {string} [prefix] The log prefix
 */
function logFile(file, prefix) {
    prefix = prefix || 'Using'
    log(path.relative(file.cwd, file.path), prefix);
}


/**
 * Log something with an optional prefix
 * @param {string} content The string to log
 * @param {string} [prefix] The log prefix
 */
function log(content, prefix) {
    if (typeof prefix !== 'undefined' && prefix.length > 0) {
        fancyLog(chalk.cyan(prefix) + ' ' + chalk.magenta(content));
    } else {
        fancyLog(chalk.magenta(content));
    }
}

/**
 * Logs moving a file from one location to another
 * @param {string} message The text to prefix the files
 * @param {object|string} file The file being moved
 * @param {string} dest The destination location
 */
function logFileTo(message, file, dest) {
    if (typeof file === 'string') {
        fancyLog(chalk.cyan(message) + ' ' + chalk.blue(file) + ' to ' + chalk.green(dest));
    } else {
        fancyLog(chalk.cyan(message) + ' ' + chalk.blue(path.relative(file.cwd, file.path)) + ' to ' + chalk.green(dest));
    }
}

/**
 * Error Handler
 * @param err
 */
const onError = (err) => {
    console.log(err);
    if (typeof this.emit === 'function') {
        this.emit('end');
    }
};

// Export module
module.exports = {
    banner: banner,
    deleteFile: deleteFile,
    flatten: flatten,
    log: log,
    logFile: logFile,
    logFileTo: logFileTo,
    onError: onError,
    synchLoop: doSynchronousLoop
};
