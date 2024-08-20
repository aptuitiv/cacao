/* ===========================================================================
    Convert the CSS class names in templates to the Cacao V6 format
=========================================================================== */

import chalk from 'chalk';
import fancyLog from 'fancy-log';
import fs from 'fs-extra';
import logSymbols from 'log-symbols';
import { basename } from 'path';
import recursiveReadDir from 'recursive-readdir';

/**
 * Update the file with the new class names
 *
 * @param {string} file The path to the file to update
 */
const updateFile = (file) => {
    // Read the file
    let fileContents = fs.readFileSync(file, 'utf8');
    const originalContents = fileContents;

    // Replace the breakpoint classes
    fileContents = fileContents.replace('-xxs', '-2xs');
    fileContents = fileContents.replace('-xxl', '-2xl');

    // Convert aspect ratio classes
    fileContents = fileContents.replace(/aspect-([a-z]+)-(\d+-\d+)/g, 'aspect-$2-$1');

    // Convert grid column classes
    fileContents = fileContents.replace(/col-([a-z]+)-(\d+-\d+)/g, 'col-$2-$1');

    // Convert gutter classes
    fileContents = fileContents.replace(/g-([a-z]+)-(\d+)/g, 'g-$2-$1');
    fileContents = fileContents.replace(/gx-([a-z]+)-(\d+)/g, 'gx-$2-$1');
    fileContents = fileContents.replace(/gy-([a-z]+)-(\d+)/g, 'gy-$2-$1');

    // Convert height classes
    fileContents = fileContents.replace(/h-([a-z]+)-(\d+-\d+)/g, 'h-$2-$1');
    fileContents = fileContents.replace(/h-([a-z]+)-(\d+)/g, 'h-$2-$1');

    // Convert margin classes
    fileContents = fileContents.replace(/m-([a-z]+)-(\d+)/g, 'm-$2-$1');
    fileContents = fileContents.replace(/mb-([a-z]+)-(\d+)/g, 'mb-$2-$1');
    fileContents = fileContents.replace(/me-([a-z]+)-(\d+)/g, 'me-$2-$1');
    fileContents = fileContents.replace(/mx-([a-z]+)-(\d+)/g, 'mx-$2-$1');
    fileContents = fileContents.replace(/ms-([a-z]+)-(\d+)/g, 'ms-$2-$1');
    fileContents = fileContents.replace(/mt-([a-z]+)-(\d+)/g, 'mt-$2-$1');
    fileContents = fileContents.replace(/my-([a-z]+)-(\d+)/g, 'my-$2-$1');

    // Convert order classes
    fileContents = fileContents.replace(/order-([a-z]+)-(\d+)/g, 'order-$2-$1');

    // Convert padding classes
    fileContents = fileContents.replace(/p-([a-z]+)-(\d+)/g, 'p-$2-$1');
    fileContents = fileContents.replace(/pb-([a-z]+)-(\d+)/g, 'pb-$2-$1');
    fileContents = fileContents.replace(/pe-([a-z]+)-(\d+)/g, 'pe-$2-$1');
    fileContents = fileContents.replace(/px-([a-z]+)-(\d+)/g, 'px-$2-$1');
    fileContents = fileContents.replace(/ps-([a-z]+)-(\d+)/g, 'ps-$2-$1');
    fileContents = fileContents.replace(/pt-([a-z]+)-(\d+)/g, 'pt-$2-$1');
    fileContents = fileContents.replace(/py-([a-z]+)-(\d+)/g, 'py-$2-$1');

    // Convert pull classes
    fileContents = fileContents.replace(/pull-([a-z]+)-(\d+-\d+)/g, 'pull-$2-$1');
    fileContents = fileContents.replace(/pull-([a-z]+)-(\d+)/g, 'pull-$2-$1');

    // Convert push classes
    fileContents = fileContents.replace(/push-([a-z]+)-(\d+-\d+)/g, 'push-$2-$1');
    fileContents = fileContents.replace(/push-([a-z]+)-(\d+)/g, 'push-$2-$1');

    // Convert width classes
    fileContents = fileContents.replace(/w-([a-z]+)-(\d+-\d+)/g, 'w-$2-$1');
    fileContents = fileContents.replace(/w-([a-z]+)-(\d+)/g, 'w-$2-$1');

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
const convertClasses = (args) => {
    fancyLog(chalk.magenta('Converting CSS class names', chalk.cyan(args.dir)));

    // Recursively read the directory and then update the files
    recursiveReadDir(args.dir).then((files) => {
        files.sort();
        files.forEach((file) => {
            if (basename(file) !== '.DS_Store') {
                updateFile(file);
            }
        });
        fancyLog(logSymbols.success, chalk.green('Finished converting CSS class names'));
    });
};

export default convertClasses;
