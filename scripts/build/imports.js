/* ===========================================================================
    Build the imports for the Cacao V6 conversion scripts
=========================================================================== */

import chalk from 'chalk';
import fancyLog from 'fancy-log';
import fs from 'fs-extra';
import logSymbols from 'log-symbols';
import { basename } from 'path';

import {
    combinationFiles, distDirectory, importsModuleMap, mediaSizes, rootDirectory,
} from './config.js';

// The header for the imports file
const fileHeader = `/* =========================================================================== *

    Cacao CSS

    This file includes all the possible imports for the Cacao CSS framework.

    The Cacao styles need to come after site styles so that they can override
    where necessary. For example, the "hidden" style should be able to override
    some styles when it's added to an element.

    Add the Cacao CSS to your project by copying the imports from this file to
    your main CSS file. Put the imports after your site styles.

    Only import what you need to keep the CSS file size down.
 * =========================================================================== */

`;
// This may not be necessary anymore. Keeping this stylelint disable just in case we need to bring it back.
// /* stylelint-disable comment-empty-line-before -- Disabled so that an extra line isn't added between each commented out code line. */

// Set the core files to import. This should be all the files immediately in the dist directory.
const coreImports = `
/* -------------------------------------------- *
    Core files that should always be included
 * -------------------------------------------- */

/* Media queries */
@import 'cacao-css/dist/media.css';

/* Reset */
@import 'cacao-css/dist/reset.css';

/* Base */
@import 'cacao-css/dist/base.css';
`;

/**
 * Build the imports for the directory
 *
 * @param {string} directory The directory
 * @param {string} module The module name
 * @param {object} moduleObject The module object data
 * @param {boolean} isSubDirectory If the directory is a subdirectory
 * @returns {string}
 */
const buildDirectoryImports = (directory, module, moduleObject, isSubDirectory = false) => {
    const moduleName = moduleObject.name;
    const useVariables = moduleObject.variables ?? false;

    const directoryPath = directory.replace(`${distDirectory}/`, '');

    let fileContents = '';

    const files = [];
    const directories = {};

    const skip = ['combined-import.css', 'variables.css'];
    // Read the files from the directory and build the imports
    fs.readdirSync(directory).forEach((file) => {
        const srcPath = `${directory}/${file}`;
        const stats = fs.statSync(srcPath);
        if (stats.isFile() && file.endsWith('.css')) {
            if (!skip.includes(file)) {
                files.push(file);
            }
        } else if (stats.isDirectory()) {
            const fname = basename(srcPath);
            if (mediaSizes.includes(fname)) {
                directories[fname] = srcPath;
            }
        }
    });

    if (!isSubDirectory && useVariables) {
        fileContents += `\n\n/* ${moduleName} variables. This must be imported, or you must override the variables in your own CSS. */`;
        fileContents += `\n@import 'cacao-css/dist/${directoryPath}/variables.css';`;
    }
    if (combinationFiles[module]) {
        if (isSubDirectory) {
            fileContents += `\n\n/* Include all ${moduleName} ${basename(directoryPath)} files */`;
        } else {
            fileContents += `\n/* Include all ${moduleName} files */`;
        }
        fileContents += `\n@import 'cacao-css/dist/${directoryPath}/combined-import.css';\n`;
        fileContents += '/* or include individual files */';
    }

    // Make sure that the files are in alphabetical order
    files.sort();

    // Add the files to the file contents
    files.forEach((file) => {
        fileContents += `\n@import 'cacao-css/dist/${directoryPath}/${file}';`;
    });

    // Add the directories to the file contents in the order that the media sizes are in
    mediaSizes.forEach((size, index) => {
        if (directories[size]) {
            const dir = directories[size];
            if (index === 0) {
                fileContents += '\n';
            }
            const fname = basename(dir);
            // Write the comment for the media query size
            fileContents += `\n/* ${moduleName} (${fname}) */`;
            fileContents += buildDirectoryImports(dir, module, moduleObject, true);
        }
    });

    // Add an extra line if there are files in the directory
    if (fileContents.length > 0) {
        fileContents += '\n';
        if (!isSubDirectory && Object.keys(directories).length === 0) {
            fileContents += '\n';
        }
    }
    return fileContents;
};

/**
 * Build the imports for the Cacao CSS files
 */
const buildImports = () => {
    fancyLog(chalk.cyan('Setting up the import.css file...'));

    let fileContents = fileHeader;
    fileContents += coreImports;

    const directories = [];

    // Read the files from the dist directory
    fs.readdirSync(distDirectory).forEach((file) => {
        const srcPath = `${distDirectory}/${file}`;
        const stats = fs.statSync(srcPath);
        if (stats.isDirectory()) {
            directories.push(srcPath);
        }
    });

    // Make sure that the directories are in alphabetical order
    directories.sort();

    // Build the imports for the directories
    directories.forEach((directory) => {
        const folderName = basename(directory);
        const module = importsModuleMap[folderName];
        // Write the comment for the module
        fileContents += '\n/* --------------------------------------------*';
        fileContents += `\n   ${module.name}\n`;
        fileContents += ' * ------------------------------------------- */\n';

        fileContents += buildDirectoryImports(directory, folderName, module);
    });

    fs.writeFileSync(`${distDirectory}/imports.css`, fileContents);
    fancyLog(chalk.green(`${logSymbols.success} Done setting up the import.css file`));
};

export default buildImports;
