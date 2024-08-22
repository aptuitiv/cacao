/* ===========================================================================
    Helper functions
=========================================================================== */

import chalk from 'chalk';
import fs from 'fs-extra';
import fancyLog from 'fancy-log';
import logSymbols from 'log-symbols';

/**
 * Create the variables file for the module
 *
 * @param {object} sizes The sizes object
 * @param {string} module The module name. It should be lowercase and singular
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
 * @returns
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
 * @param {object} sides The sides object containing the side classes and properties
 */
export const buildModuleCombinationFile = (module, sides) => {
    let fileContents = '/* =========================================================================== *\n';
    fileContents += `   ${module.charAt(0).toUpperCase() + module.slice(1)} utilities - imports all the ${module} utility files\n`;
    fileContents += ' * =========================================================================== */\n\n';
    Object.keys(sides).forEach((side) => {
        fileContents += `@import './${side}.css';\n`;
    });
    fs.writeFileSync(`src/${module}/${module}.css`, fileContents);
    fancyLog(chalk.green(`${logSymbols.success} Wrote ${module} file `, chalk.cyan(`src/${module}/${module}.css`)));
};
