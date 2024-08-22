/* ===========================================================================
    Build the padding classes

    Run this: node scripts/build/padding.js
=========================================================================== */

import chalk from 'chalk';
import fs from 'fs-extra';
import fancyLog from 'fancy-log';
import logSymbols from 'log-symbols';

import { variableSizes } from './config.js';
import { buildModuleSideFileContent, createModuleVariables } from './helpers.js';

/**
 * Build the padding class files
 *
 * @returns {Promise<void>}
 */
const buildPaddingsFiles = () => new Promise((resolve) => {
    const sides = {
        all: { class: 'p', comment: 'All sides padding utilities', property: 'padding' },
        bottom: { class: 'pb', comment: 'Bottom padding utilities', property: 'padding-bottom' },
        end: { class: 'pe', comment: 'End padding utilities', property: 'padding-right' },
        horizontal: { class: 'px', comment: 'Horizontal padding utilities', property: ['padding-left', 'padding-right'] },
        start: { class: 'ps', comment: 'Start padding utilities', property: 'padding-left' },
        top: { class: 'pt', comment: 'Top padding utilities', property: 'padding-top' },
        vertical: { class: 'py', comment: 'Vertical padding utilities', property: ['padding-top', 'padding-bottom'] },
    };
    Object.keys(sides).forEach((side) => {
        const fileContents = buildModuleSideFileContent('padding', sides[side]);
        fs.writeFileSync(`src/padding/${side}.css`, fileContents);
        fancyLog(chalk.green(`${logSymbols.success} Wrote padding file `, chalk.cyan(`src/padding/${side}.css`)));
    });

    fancyLog(chalk.green(`${logSymbols.success} Done creating padding files `));
    resolve();
});

/**
 * Exported function to build the padding files
 *
 * @returns {Promise<void>}
 */
const buildPaddings = async () => new Promise((resolve) => {
    createModuleVariables('padding', variableSizes).then(() => {
        buildPaddingsFiles().then(() => {
            resolve();
        });
    });
});

export default buildPaddings;
