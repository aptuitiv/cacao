/* ===========================================================================
    Build the padding classes

    Run this: node scripts/build/padding.js
=========================================================================== */

import chalk from 'chalk';
import fs from 'fs-extra';
import fancyLog from 'fancy-log';
import logSymbols from 'log-symbols';

/**
 * Create the padding variables file
 */
const createPaddingVariables = () => new Promise((resolve) => {
    const sizes = {
        0: 0,
        1: 10,
        2: 20,
        3: 30,
        4: 40,
        5: 50,
        6: 60,
        7: 70,
        8: 80,
        9: 90,
        10: 100,
        11: 120,
        12: 160,
        13: 240,
        14: 320,
        15: 480,
    };
    let fileContents = '/* =========================================================================== *\n';
    fileContents += '  Variables for the padding sizes\n';
    fileContents += ' * =========================================================================== */\n\n';
    fileContents += '/* :where() is used to give the variables no specificity so that they are easily overriden. https://developer.mozilla.org/en-US/docs/Web/CSS/:where */';
    fileContents += '\n\n';
    fileContents += ':where(html) {';
    Object.keys(sizes).forEach((i) => {
        fileContents += '\n';
        fileContents += `    --padding-${i}: ${sizes[i]}px;`;
    });
    fileContents += '\n}';
    fs.writeFileSync('src/padding/variables.css', fileContents);
    fancyLog(chalk.green(`${logSymbols.success} Wrote padding variables file `, chalk.cyan('src/padding/variables.css')));
    resolve();
});

/**
 * Build the padding class files
 */
const buildPaddingsFiles = () => new Promise((resolve) => {
    const sides = {
        all: { class: 'p', comment: 'All sides padding utilities', dec: 'padding' },
        bottom: { class: 'pb', comment: 'Bottom padding utilities', dec: 'padding-bottom' },
        end: { class: 'pe', comment: 'End padding utilities', dec: 'padding-right' },
        horizontal: { class: 'px', comment: 'Horizontal padding utilities', dec: ['padding-left', 'padding-right'] },
        start: { class: 'ps', comment: 'Start padding utilities', dec: 'padding-left' },
        top: { class: 'pt', comment: 'Top padding utilities', dec: 'padding-top' },
        vertical: { class: 'py', comment: 'Vertical padding utilities', dec: ['padding-top', 'padding-bottom'] },
    };
    Object.keys(sides).forEach((side) => {
        let fileContents = '/* =========================================================================== *\n';
        fileContents += `   ${sides[side].comment}\n`;
        fileContents += ' * =========================================================================== */\n';

        for (let i = 0; i <= 15; i += 1) {
            fileContents += '\n\n';
            fileContents += `.${sides[side].class}-${i} {\n`;
            const { dec } = sides[side];
            if (Array.isArray(dec)) {
                const declarations = dec.map((d) => `    ${d}: var(--padding-${i});\n`);
                fileContents += declarations.join('');
            } else {
                fileContents += `    ${dec}: var(--padding-${i});\n`;
            }
            fileContents += '}';
        }
        fileContents += '\n';
        fs.writeFileSync(`src/padding/${side}.css`, fileContents);
        fancyLog(chalk.green(`${logSymbols.success} Wrote padding file `, chalk.cyan(`src/padding/${side}.css`)));
    });

    // Create the combination file
    let fileContents = '/* =========================================================================== *\n';
    fileContents += '   Padding utilities - imports all the padding utility files\n';
    fileContents += ' * =========================================================================== */\n\n';
    Object.keys(sides).forEach((side) => {
        fileContents += `@import './${side}.css';\n`;
    });
    fs.writeFileSync('src/padding/padding.css', fileContents);
    fancyLog(chalk.green(`${logSymbols.success} Wrote padding file `, chalk.cyan('src/padding/padding.css')));
    fancyLog(chalk.green(`${logSymbols.success} Done creating padding files `));
    resolve();
});

/**
 * Exported function to build the padding files
 *
 * @returns {Promise<void>}
 */
const buildPaddings = async () => new Promise((resolve) => {
    createPaddingVariables();
    buildPaddingsFiles();
    resolve();
});

export default buildPaddings;
