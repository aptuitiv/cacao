/* ===========================================================================
    Build the gutter classes

    Run this: node scripts/build/gutter.js
=========================================================================== */

import chalk from 'chalk';
import fs from 'fs-extra';
import fancyLog from 'fancy-log';
import logSymbols from 'log-symbols';

import { variableSizes } from './config.js';
import { buildModuleSideFileContent, createModuleVariables } from './helpers.js';

/**
 * Build the gutter class files
 *
 * @returns {Promise<void>}
 */
const buildGuttersFiles = () => new Promise((resolve) => {
    const sides = {
        all: {
            class: 'g', comment: 'All directions gutter utilities', property: '--gap', allProperty: 'gap',
        },
        horizontal: {
            class: 'gx', comment: 'Horizontal gutter utilities', property: '--gap', allProperty: 'column-gap',
        },
        vertical: {
            class: 'gy', comment: 'Vertical gutter utilities', property: '--row-gap', allProperty: 'row-gap',
        },
    };
    Object.keys(sides).forEach((side) => {
        const sideObject = sides[side];
        let fileContents = buildModuleSideFileContent('gutter', sideObject);

        // Add the gap style for each size
        const count = Object.keys(variableSizes).length;
        Object.keys(variableSizes).forEach((size, index) => {
            fileContents += `\n.${sideObject.class}-${size}`;
            if (index < count - 1) {
                fileContents += ',';
            } else {
                fileContents += ' {';
            }
        });
        fileContents += `\n    ${sides[side].allProperty}: var(${sideObject.property});\n}`;

        fs.writeFileSync(`src/gutter/${side}.css`, fileContents);
        fancyLog(chalk.green(`${logSymbols.success} Wrote gutter file `, chalk.cyan(`src/gutter/${side}.css`)));
    });

    fancyLog(chalk.green(`${logSymbols.success} Done creating gutter files `));
    resolve();
});

/**
 * Exported function to build the gutter files
 *
 * @returns {Promise<void>}
 */
const buildGutters = async () => new Promise((resolve) => {
    createModuleVariables('gutter', variableSizes).then(() => {
        buildGuttersFiles().then(() => {
            resolve();
        });
    });
});

export default buildGutters;
