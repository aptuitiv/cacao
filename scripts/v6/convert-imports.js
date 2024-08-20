/* ===========================================================================
    Convert the older imports to the Cacao V6 format
=========================================================================== */

import chalk from 'chalk';
import fancyLog from 'fancy-log';
import fs from 'fs-extra';
import logSymbols from 'log-symbols';

const convertImports = (args) => {
    fancyLog(chalk.magenta('Converting Cacao imports', chalk.cyan(args.file)));

    // Get the file to convert
    const { file } = args;

    // Read the file
    let fileContents = fs.readFileSync(file, 'utf8');

    // Fix the import path
    fileContents = fileContents.replaceAll('../../node_modules/', '');
    fileContents = fileContents.replaceAll('cacao-css/src/', 'cacao-css/dist/');

    // Fix the media query file import path
    fileContents = fileContents.replace('dist/config.css', 'dist/media.css');

    // Fix the reset and base import paths
    fileContents = fileContents.replace('/reset/reset.css', '/reset.css');
    fileContents = fileContents.replace('/base/base.css', '/base.css');

    // Fix the "Layout" import path
    fileContents = fileContents.replace('/* Layout */', '/* Clearfix */');
    fileContents = fileContents.replace('/layout/core/layout.css', '/clearfix/clearfix.css');
    fileContents = fileContents.replace('/layout/layout.css', '/clearfix/clearfix.css');

    // Fix the "size" import path
    fileContents = fileContents.replace(/@import 'cacao-css\/dist\/size\/size.css';/g, '@import \'cacao-css/dist/height/height-1.css\';\n@import \'cacao-css/dist/width/width-1.css\';');
    fileContents = fileContents.replace(/@import 'cacao-css\/dist\/size\/(.*)\/size.css';/g, '@import \'cacao-css/dist/height/$1/height-1.css\';\n@import \'cacao-css/dist/width/$1/width-1.css\';');
    fileContents = fileContents.replaceAll('/* Size ', '/* Height and width ');

    // Fix the breakpoint paths
    fileContents = fileContents.replaceAll('/xxs/', '/2xs/');
    fileContents = fileContents.replaceAll('/xxl/', '/2xl/');

    // Fix grid import paths
    fileContents = fileContents.replace(/\/grid\/(.*)\/col-(.*).css/g, '/grid-column/$1/col-$2.css');

    // Remove the "/core/" path
    fileContents = fileContents.replaceAll('/core/', '/');

    // Remove commented out imports
    fileContents = fileContents.replace(/\/\* @import .*\*\//g, '');

    // Remove duplicate line breaks
    fileContents = fileContents.replace(/\n{3,}/g, '\n\n');

    // Write the new file
    fs.writeFileSync(file, fileContents);

    fancyLog(logSymbols.success, chalk.green('Finished converting Cacao imports'));
};

export default convertImports;
