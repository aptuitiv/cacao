/* ===========================================================================
    Build the imports for the Cacao V6 conversion scripts
=========================================================================== */

import chalk from 'chalk';
import fancyLog from 'fancy-log';
import fs from 'fs-extra';
import logSymbols from 'log-symbols';
import { basename } from 'path';
import { glob } from 'node:fs/promises';

import {
    combinationFiles, distDirectory, importsModuleMap, mediaSizes
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
 * @returns {Promise<string>}
 */
const buildDirectoryImports = async (directory, module, moduleObject, isSubDirectory = false) => {
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
            // if (mediaSizes.includes(fname)) {
            directories[fname] = srcPath;
            // }
        }
    });

    if (!isSubDirectory && useVariables) {
        fileContents += `\n\n/* ${moduleName} variables. This must be imported, or you must override the variables in your own CSS. */`;
        fileContents += `\n@import 'cacao-css/dist/${directoryPath}/variables.css';`;
    }

    let doCombinationFiles = false;
    let combinationFileConfig = {};
    if (combinationFiles[module]) {
        doCombinationFiles = true;
        combinationFileConfig = combinationFiles[module];
    }
    const skipDirectories = [];
    if (combinationFileConfig.skip) {
        // Iterate through matches and filter for directories
        for await (const entry of glob(combinationFileConfig.skip.map((path) => `${distDirectory}/${path}`), { withFileTypes: true })) {
            if (entry.isDirectory()) {
                skipDirectories.push(`${entry.parentPath}/${entry.name}`);
            }
        }
        if (skipDirectories.includes(directory)) {
            // This directory is in the skip list. Don't include the combined-import.css file.
            doCombinationFiles = false;
        }
    }

    if (doCombinationFiles) {
        // Build the combined-import.css file for the directory
        if (isSubDirectory) {
            fileContents += `\n\n/* Include all ${moduleName} ${basename(directoryPath)} files */`;
        } else {
            fileContents += `\n/* Include all ${moduleName} files */`;
        }
        fileContents += `\n@import 'cacao-css/dist/${directoryPath}/combined-import.css';`;
        if (files.length > 0) {
            fileContents += `\n/* or include individual files */`;
        }
    }

    // Make sure that the files are in alphabetical order with natural sorting so that numbers are sorted correctly.
    const naturalCollator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
    });
    files.sort(naturalCollator.compare);

    // Add the files to the file contents
    files.forEach((file) => {
        fileContents += `\n@import 'cacao-css/dist/${directoryPath}/${file}';`;
    });

    // Add the directories to the file contents in the order that the media sizes are in
    const mediaSizePromises = [];
    for (let index = 0; index < mediaSizes.length; index++) {
        const size = mediaSizes[index];
        if (directories[size]) {
            const dir = directories[size];
            const fname = basename(dir);
            mediaSizePromises.push({
                index,
                size,
                fname,
                promise: buildDirectoryImports(dir, module, moduleObject, true),
            });
        }
    }
    // Sort by index to maintain order, then await sequentially
    mediaSizePromises.sort((a, b) => a.index - b.index);
    for (let i = 0; i < mediaSizePromises.length; i++) {
        const { index, size, fname } = mediaSizePromises[i];
        if (index === 0) {
            fileContents += '\n';
        }
        // Write the comment for the media query size
        fileContents += `\n/* ${moduleName} (${fname}) */`;
        // Keep using the original module name for the subdirectory imports
        // eslint-disable-next-line no-await-in-loop -- Need sequential processing to build string in order
        fileContents += await mediaSizePromises[i].promise;
        delete directories[size];
    }

    if (Object.keys(directories).length > 0) {
        const dirKeys = Object.keys(directories);
        const directoryPromises = [];
        for (let index = 0; index < dirKeys.length; index++) {
            const dirKey = dirKeys[index];
            const dir = directories[dirKey];
            const fname = basename(dir);

            // Build the folder path for the subdirectory imports
            const subModuleObject = { ...moduleObject };
            if (typeof subModuleObject.folderPath === 'undefined') {
                subModuleObject.folderPath = fname;
            } else {
                subModuleObject.folderPath += `/${fname}`;
            }
            // Use the subdirectory name for the module name if it exists
            if (
                typeof subModuleObject.subDirectories !== 'undefined'
                && typeof subModuleObject.subDirectories[fname] !== 'undefined'
                && typeof subModuleObject.subDirectories[fname].name !== 'undefined'
            ) {
                subModuleObject.name = subModuleObject.subDirectories[fname].name;
            }
            // Use the original module key for the subdirectory imports.
            // this is so that the combinationFiles config can be used to skip the directories.
            // The combinationFiles configuration is based on the module name, not the subdirectory name.
            directoryPromises.push({
                index,
                fname,
                promise: buildDirectoryImports(dir, module, subModuleObject, true),
            });
        }
        // Sort by index to maintain order, then await sequentially
        directoryPromises.sort((a, b) => a.index - b.index);
        for (let i = 0; i < directoryPromises.length; i++) {
            const { index, fname } = directoryPromises[i];
            if (index === 0) {
                fileContents += '\n';
            }
            // Write the comment for the media query size
            fileContents += `\n/* ${moduleName} (${fname}) */`;
            // eslint-disable-next-line no-await-in-loop -- Need sequential processing to build string in order
            fileContents += await directoryPromises[i].promise;
        }
    }

    // Add an extra line if there are files in the directory
    if (fileContents.length > 0) {
        fileContents += '\n';
        if (!isSubDirectory && Object.keys(directories).length === 0) {
            fileContents += '\n';
        }
    }
    return fileContents;
}

/**
 * Build the imports for the Cacao CSS files
 */
const buildImports = async () => {
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
    const directoryPromises = directories.map((directory) => {
        const folderName = basename(directory);
        const module = importsModuleMap[folderName];
        return {
            directory,
            folderName,
            module,
            promise: buildDirectoryImports(directory, folderName, module),
        };
    });
    // Await all promises sequentially to build string in order
    for (let i = 0; i < directoryPromises.length; i++) {
        const { module } = directoryPromises[i];
        // Write the comment for the module
        fileContents += '\n/* --------------------------------------------*';
        fileContents += `\n   ${module.name}\n`;
        fileContents += ' * ------------------------------------------- */\n';

        // eslint-disable-next-line no-await-in-loop -- Need sequential processing to build string in order
        fileContents += await directoryPromises[i].promise;
    }

    fs.writeFileSync(`${distDirectory}/imports.css`, fileContents);
    fancyLog(chalk.green(`${logSymbols.success} Done setting up the import.css file`));
};


export default buildImports;
