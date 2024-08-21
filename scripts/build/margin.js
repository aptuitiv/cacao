/* ===========================================================================
    Build the margin classes

    Run this: node scripts/build/margin.js
=========================================================================== */

import chalk from 'chalk';
import fs from 'fs-extra';
import fancyLog from 'fancy-log';
import logSymbols from 'log-symbols';

/**
 * Create the margin variables file
 */
const createMarginVariables = () => {
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
    fileContents += '  Variables for the margin sizes\n';
    fileContents += ' * =========================================================================== */\n\n';
    fileContents += '/* :where() is used to give the variables no specificity so that they are easily overriden. https://developer.mozilla.org/en-US/docs/Web/CSS/:where */';
    fileContents += '\n\n';
    fileContents += ':where(html) {';
    Object.keys(sizes).forEach((i) => {
        fileContents += '\n';
        fileContents += `    --margin-${i}: ${sizes[i]}px;`;
    });
    fileContents += '\n}';
    fs.writeFileSync('src/margin/variables.css', fileContents);
    fancyLog(chalk.green(`${logSymbols.success} Wrote margin variables file `, chalk.cyan('src/margin/variables.css')));
};

/**
 * Build the margin class files
 */
const buildMargins = () => {
    const sides = {
        all: { class: 'm', comment: 'All sides margin utilities', dec: 'margin' },
        bottom: { class: 'mb', comment: 'Bottom margin utilities', dec: 'margin-bottom' },
        end: { class: 'me', comment: 'End margin utilities', dec: 'margin-right' },
        horizontal: { class: 'mx', comment: 'Horizontal margin utilities', dec: ['margin-left', 'margin-right'] },
        start: { class: 'ms', comment: 'Start margin utilities', dec: 'margin-left' },
        top: { class: 'mt', comment: 'Top margin utilities', dec: 'margin-top' },
        vertical: { class: 'my', comment: 'Vertical margin utilities', dec: ['margin-top', 'margin-bottom'] },
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
                const declarations = dec.map((d) => `    ${d}: var(--margin-${i});\n`);
                fileContents += declarations.join('');
            } else {
                fileContents += `    ${dec}: var(--margin-${i});\n`;
            }
            fileContents += '}';
        }
        fileContents += '\n';
        fs.writeFileSync(`src/margin/${side}.css`, fileContents);
        fancyLog(chalk.green(`${logSymbols.success} Wrote margin file `, chalk.cyan(`src/margin/${side}.css`)));
    });

    // Create the combination file
    let fileContents = '/* =========================================================================== *\n';
    fileContents += '   Margin utilities - imports all the margin utility files\n';
    fileContents += ' * =========================================================================== */\n\n';
    Object.keys(sides).forEach((side) => {
        fileContents += `@import './${side}.css';\n`;
    });
    fs.writeFileSync('src/margin/margin.css', fileContents);
    fancyLog(chalk.green(`${logSymbols.success} Wrote margin file `, chalk.cyan('src/margin/margin.css')));
    fancyLog(chalk.green(`${logSymbols.success} Done creating margin files `));
};

createMarginVariables();
buildMargins();
