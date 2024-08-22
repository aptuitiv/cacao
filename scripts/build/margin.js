/* ===========================================================================
    Build the margin classes

    Run this: node scripts/build/margin.js
=========================================================================== */

import chalk from 'chalk';
import fs from 'fs-extra';
import fancyLog from 'fancy-log';
import logSymbols from 'log-symbols';

import { variableSizes } from './config.js';
import { buildModuleCombinationFile, buildModuleSideFileContent, createModuleVariables } from './helpers.js';

/**
 * Build the margin class files
 *
 * @returns {Promise<void>}
 */
const buildMarginsFiles = () => new Promise((resolve) => {
    const sides = {
        all: { class: 'm', comment: 'All sides margin utilities', property: 'margin' },
        bottom: { class: 'mb', comment: 'Bottom margin utilities', property: 'margin-bottom' },
        end: { class: 'me', comment: 'End margin utilities', property: 'margin-right' },
        horizontal: { class: 'mx', comment: 'Horizontal margin utilities', property: ['margin-left', 'margin-right'] },
        start: { class: 'ms', comment: 'Start margin utilities', property: 'margin-left' },
        top: { class: 'mt', comment: 'Top margin utilities', property: 'margin-top' },
        vertical: { class: 'my', comment: 'Vertical margin utilities', property: ['margin-top', 'margin-bottom'] },
    };
    Object.keys(sides).forEach((side) => {
        const fileContents = buildModuleSideFileContent('margin', sides[side]);
        fs.writeFileSync(`src/margin/${side}.css`, fileContents);
        fancyLog(chalk.green(`${logSymbols.success} Wrote margin file `, chalk.cyan(`src/margin/${side}.css`)));
    });

    buildModuleCombinationFile('margin', sides);
    fancyLog(chalk.green(`${logSymbols.success} Done creating margin files `));
    resolve();
});

/**
 * Exported function to build the margin files
 *
 * @returns {Promise<void>}
 */
const buildMargins = async () => new Promise((resolve) => {
    createModuleVariables('margin', variableSizes).then(() => {
        buildMarginsFiles().then(() => {
            resolve();
        });
    });
});

export default buildMargins;
