/* ===========================================================================
    Convert the breakpoint variables to the Cacao V6 format
=========================================================================== */

import chalk from 'chalk';
import fancyLog from 'fancy-log';
import fs from 'fs-extra';
import logSymbols from 'log-symbols';
import { basename } from 'path';
import recursiveReadDir from 'recursive-readdir';

/**
 * Update the file with the new breakpoints
 *
 * @param {string} file The path to the file to update
 */
const updateFile = (file) => {
    // Read the file
    let fileContents = fs.readFileSync(file, 'utf8');
    const originalContents = fileContents;

    // Breakpoints to convert
    const breakpoints = {
        '--c-bp-3xs': '--m-3xs',
        '--c-bp-xxxs': '--m-3xs',
        '--c-bp-2xs': '--m-2xs',
        '--c-bp-xxs': '--m-2xs',
        '--c-bp-xs': '--m-xs',
        '--c-bp-sm': '--m-sm',
        '--c-bp-md': '--m-md',
        '--c-bp-lg': '--m-lg',
        '--c-bp-xl': '--m-xl',
        '--c-bp-xxl': '--m-2xl',
        '--c-bp-2xl': '--m-2xl',
        '--c-bp-xxxl': '--m-3xl',
        '--c-bp-3xl': '--m-3xl',
        '--c-bp-4xl': '--m-4xl',
        '--c-bp-5xl': '--m-5xl',
    };

    // Replace the breakpoint classes
    Object.keys(breakpoints).forEach((key) => {
        fileContents = fileContents.replaceAll(key, breakpoints[key]);
    });

    if (fileContents !== originalContents) {
        // Write the new file
        fs.writeFileSync(file, fileContents);
        fancyLog(logSymbols.success, chalk.green('Updated', chalk.cyan(file)));
    } else {
        fancyLog(logSymbols.info, chalk.blue('Skipped', chalk.cyan(file)));
    }
};

/**
 * Convert the class names in the CSS files to the Cacao V6 format
 *
 * @param {object} args The command line arguments. "dir" is the directory to convert.
 */
const convertBreakpoints = (args) => {
    fancyLog(chalk.magenta('Converting breakpoints', chalk.cyan(args.dir)));

    // Recursively read the directory and then update the files
    recursiveReadDir(args.dir).then((files) => {
        files.sort();
        files.forEach((file) => {
            if (basename(file) !== '.DS_Store') {
                updateFile(file);
            }
        });
        fancyLog(logSymbols.success, chalk.green('Finished converting breakpoints'));
    });
};

export default convertBreakpoints;
