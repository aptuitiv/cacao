/* ===========================================================================
    Build the first-child/last-child spacing classes

    Run this: node scripts/build/child-spacing.js
=========================================================================== */

import chalk from 'chalk';
import fs from 'fs-extra';
import fancyLog from 'fancy-log';
import logSymbols from 'log-symbols';
import path from 'path';

import { variableSizes } from './config.js';
import { buildModuleSideFileContent, createModuleVariables } from './helpers.js';

/**
 * Build the first-child/last-child spacing class files
 *
 * @returns {Promise<void>}
 */
const buildChildSpacingFiles = () => new Promise((resolve) => {
    const sides = {
        // First child - both margin and padding
        'first-child-spacing-all': { class: 'first-child-s', comment: 'First child all sides margin and padding utilities', property: ['margin', 'padding'] },
        'first-child-spacing-bottom': { class: 'first-child-sb', comment: 'First child bottom margin and padding utilities', property: ['margin-bottom', 'padding-bottom'] },
        'first-child-spacing-end': { class: 'first-child-se', comment: 'First child end margin and padding utilities', property: ['margin-right', 'padding-right'] },
        'first-child-spacing-horizontal': { class: 'first-child-sx', comment: 'First child horizontal margin and padding utilities', property: ['margin-left', 'margin-right', 'padding-left', 'padding-right'] },
        'first-child-spacing-start': { class: 'first-child-ss', comment: 'First child start margin and padding utilities', property: ['margin-left', 'padding-left'] },
        'first-child-spacing-top': { class: 'first-child-st', comment: 'First child top margin and padding utilities', property: ['margin-top', 'padding-top'] },
        'first-child-spacing-vertical': { class: 'first-child-sy', comment: 'First child vertical margin and padding utilities', property: ['margin-top', 'margin-bottom', 'padding-top', 'padding-bottom'] },
        // First child - only margin
        'first-child-margin-all': { class: 'first-child-m', comment: 'First child all sides margin utilities', property: ['margin'] },
        'first-child-margin-bottom': { class: 'first-child-mb', comment: 'First child bottom margin utilities', property: ['margin-bottom'] },
        'first-child-margin-end': { class: 'first-child-me', comment: 'First child end margin utilities', property: ['margin-right'] },
        'first-child-margin-horizontal': { class: 'first-child-mx', comment: 'Horizontal margin utilities', property: ['margin-left', 'margin-right'] },
        'first-child-margin-start': { class: 'first-child-ms', comment: 'First child start margin utilities', property: ['margin-left'] },
        'first-child-margin-top': { class: 'first-child-mt', comment: 'First child top margin utilities', property: ['margin-top'] },
        'first-child-margin-vertical': { class: 'first-child-my', comment: 'First child vertical margin utilities', property: ['margin-top', 'margin-bottom'] },
        // First child - only padding
        'first-child-padding-all': { class: 'first-child-p', comment: 'First child all sides padding utilities', property: ['padding'] },
        'first-child-padding-bottom': { class: 'first-child-pb', comment: 'First child bottom padding utilities', property: ['padding-bottom'] },
        'first-child-padding-end': { class: 'first-child-pe', comment: 'First child end padding utilities', property: ['padding-right'] },
        'first-child-padding-horizontal': { class: 'first-child-px', comment: 'Horizontal padding utilities', property: ['padding-left', 'padding-right'] },
        'first-child-padding-start': { class: 'first-child-ps', comment: 'First child start padding utilities', property: ['padding-left'] },
        'first-child-padding-top': { class: 'first-child-pt', comment: 'First child top padding utilities', property: ['padding-top'] },
        'first-child-padding-vertical': { class: 'first-child-py', comment: 'First child vertical padding utilities', property: ['padding-top', 'padding-bottom'] },
        // Last child - both margin and padding
        'last-child-spacing-all': { class: 'last-child-s', comment: 'Last child all sides margin and padding utilities', property: ['margin', 'padding'] },
        'last-child-spacing-bottom': { class: 'last-child-sb', comment: 'Last child bottom margin and padding utilities', property: ['margin-bottom', 'padding-bottom'] },
        'last-child-spacing-end': { class: 'last-child-se', comment: 'Last child end margin and padding utilities', property: ['margin-right', 'padding-right'] },
        'last-child-spacing-horizontal': { class: 'last-child-sx', comment: 'Last child horizontal margin and padding utilities', property: ['margin-left', 'margin-right', 'padding-left', 'padding-right'] },
        'last-child-spacing-start': { class: 'last-child-ss', comment: 'Last child start margin and padding utilities', property: ['margin-left', 'padding-left'] },
        'last-child-spacing-top': { class: 'last-child-st', comment: 'Last child top margin and padding utilities', property: ['margin-top', 'padding-top'] },
        'last-child-spacing-vertical': { class: 'last-child-sy', comment: 'Last child vertical margin and padding utilities', property: ['margin-top', 'margin-bottom', 'padding-top', 'padding-bottom'] },
        // Last child - only margin
        'last-child-margin-all': { class: 'last-child-m', comment: 'Last child all sides margin utilities', property: ['margin'] },
        'last-child-margin-bottom': { class: 'last-child-mb', comment: 'Last child bottom margin utilities', property: ['margin-bottom'] },
        'last-child-margin-end': { class: 'last-child-me', comment: 'Last child end margin utilities', property: ['margin-right'] },
        'last-child-margin-horizontal': { class: 'last-child-mx', comment: 'Horizontal margin utilities', property: ['margin-left', 'margin-right'] },
        'last-child-margin-start': { class: 'last-child-ms', comment: 'Last child start margin utilities', property: ['margin-left'] },
        'last-child-margin-top': { class: 'last-child-mt', comment: 'Last child top margin utilities', property: ['margin-top'] },
        'last-child-margin-vertical': { class: 'last-child-my', comment: 'Last child vertical margin utilities', property: ['margin-top', 'margin-bottom'] },
        // Last child - only padding
        'last-child-padding-all': { class: 'last-child-p', comment: 'Last child all sides padding utilities', property: ['padding'] },
        'last-child-padding-bottom': { class: 'last-child-pb', comment: 'Last child bottom padding utilities', property: ['padding-bottom'] },
        'last-child-padding-end': { class: 'last-child-pe', comment: 'Last child end padding utilities', property: ['padding-right'] },
        'last-child-padding-horizontal': { class: 'last-child-px', comment: 'Horizontal padding utilities', property: ['padding-left', 'padding-right'] },
        'last-child-padding-start': { class: 'last-child-ps', comment: 'Last child start padding utilities', property: ['padding-left'] },
        'last-child-padding-top': { class: 'last-child-pt', comment: 'Last child top padding utilities', property: ['padding-top'] },
        'last-child-padding-vertical': { class: 'last-child-py', comment: 'Last child vertical padding utilities', property: ['padding-top', 'padding-bottom'] },

    };
    Object.keys(sides).forEach((side) => {
        const fileContents = buildModuleSideFileContent('child-spacing', sides[side]);
        let sidePath = path.join('src', 'child-spacing');
        if (side.startsWith('first-child')) {
            sidePath = path.join(sidePath, 'first-child');
        } else if (side.startsWith('last-child')) {
            sidePath = path.join(sidePath, 'last-child');
        }
        if (side.includes('margin')) {
            sidePath = path.join(sidePath, 'margin');
        } else if (side.includes('padding')) {
            sidePath = path.join(sidePath, 'padding');
        } else if (side.includes('spacing')) {
            sidePath = path.join(sidePath, 'spacing');
        }
        const fileName = side.split('-').pop();
        fs.ensureDirSync(sidePath);
        const filePath = path.join(sidePath, `${fileName}.css`);
        fs.writeFileSync(filePath, fileContents);
        fancyLog(chalk.green(`${logSymbols.success} Wrote child spacing file `, chalk.cyan(filePath)));
        // Create files for the individual sizes
        for (let i = 0; i <= 15; i += 1) {
            const fileContents = buildModuleSideFileContent('child-spacing', sides[side], i, i);
            const sizePath = path.join(sidePath, fileName);
            const sizeFileName = `${fileName}-${i}`;
            fs.ensureDirSync(sizePath);
            const sizeFilePath = path.join(sizePath, `${sizeFileName}.css`);
            fs.writeFileSync(sizeFilePath, fileContents);
            fancyLog(chalk.green(`${logSymbols.success} Wrote child spacing file `, chalk.cyan(sizeFilePath)));
        }
    });

    fancyLog(chalk.green(`${logSymbols.success} Done creating child spacing files `));
    resolve();
});

/**
 * Exported function to build the child spacing files
 *
 * @returns {Promise<void>}
 */
const buildChildSpacing = async () => new Promise((resolve) => {
    createModuleVariables('child-spacing', variableSizes).then(() => {
        buildChildSpacingFiles().then(() => {
            resolve();
        });
    });
});

export default buildChildSpacing;
