/* ===========================================================================
    Helper functions
=========================================================================== */

import chalk from 'chalk';
import fs from 'fs-extra';
import fancyLog from 'fancy-log';
import logSymbols from 'log-symbols';

import { distDirectory, rootDirectory } from './config.js';

/**
 * Create the variables file for the module
 *
 * @param {string} module The module name. It should be lowercase and singular
 * @param {object} sizes The sizes object
 * @returns {Promise<void>}
 */
export const createModuleVariables = (module, sizes) => new Promise((resolve) => {
    let fileContents = '/* =========================================================================== *\n';
    fileContents += `  Variables for the ${module} sizes\n`;
    fileContents += ' * =========================================================================== */\n\n';
    fileContents += '/* :where() is used to give the variables no specificity so that they are easily overriden. https://developer.mozilla.org/en-US/docs/Web/CSS/:where */';
    fileContents += '\n\n';
    fileContents += ':where(html) {';
    Object.keys(sizes).forEach((i) => {
        fileContents += '\n';
        fileContents += `    --${module}-${i}: ${sizes[i]}px;`;
    });
    fileContents += '\n}';
    fs.writeFileSync(`src/${module}/variables.css`, fileContents);
    fancyLog(chalk.green(`${logSymbols.success} Wrote ${module} variables file `, chalk.cyan(`src/${module}/variables.css`)));
    resolve();
});

/**
 * Build the module side file content
 *
 * @param {string} module The module to build the side styles for
 * @param {object} sideObject The side object containing the class, comment, and property
 * @returns {string}
 */
export const buildModuleSideFileContent = (module, sideObject) => {
    let fileContents = '/* =========================================================================== *\n';
    fileContents += `   ${sideObject.comment}\n`;
    fileContents += ' * =========================================================================== */\n';

    for (let i = 0; i <= 15; i += 1) {
        fileContents += '\n\n';
        fileContents += `.${sideObject.class}-${i} {\n`;
        const { property } = sideObject;
        if (Array.isArray(property)) {
            const declarations = property.map((prop) => `    ${prop}: var(--${module}-${i});\n`);
            fileContents += declarations.join('');
        } else {
            fileContents += `    ${property}: var(--${module}-${i});\n`;
        }
        fileContents += '}';
    }
    fileContents += '\n';
    return fileContents;
};

/**
 * Build the file that imports the other module files
 *
 * @param {string} module The module to build the combination file for
 * @param {string} dest The destination directory to write the file to
 * @param {object} config The configuration for the combination file. You must set either "directory" or "files".
 *      - commentModule (string): The module name to use in the comment. Defaults to the module name.
 *      - directory (string): The directory to read the files from if files is not provided
 *      - files (array): The files to import. If not provided, it will read the files from the directory
 *      - size (string): The media query size if building the media query files.
 */
export const buildModuleCombinationFile = (module, dest, config = {}) => {
    let files = [];
    const skip = ['variables.css'];
    if (!config.files) {
        // Files were not set. Read from the source module folder to get the files
        const directory = `${rootDirectory}/src/${module}`;
        fs.readdirSync(directory).forEach((file) => {
            const srcPath = `${directory}/${file}`;
            const stats = fs.statSync(srcPath);
            if (stats.isFile() && !skip.includes(file)) {
                files.push(file);
            }
        });
    } else {
        files = config.files;
    }

    files.sort();

    const commentModule = config.commentModule ?? module;

    let fileContents = '/* =========================================================================== *\n';
    fileContents += `   ${commentModule.charAt(0).toUpperCase() + commentModule.slice(1)} utilities`;
    if (config.size) {
        fileContents += ` - ${config.size}`;
    }
    fileContents += ' - imports all the ';
    if (config.size) {
        fileContents += `${config.size}`;
    }
    fileContents += ` ${module} utility files\n`;
    fileContents += ' * =========================================================================== */\n\n';
    files.forEach((file) => {
        fileContents += `@import './${file}';\n`;
    });
    fs.writeFileSync(`${distDirectory}/${dest}/combined-import.css`, fileContents);
    fancyLog(chalk.green(`${logSymbols.success} Wrote ${module} combined import file `, chalk.cyan(`dest/${dest}/combined-import.css`)));
};
