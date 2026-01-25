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

    // Fix the "spacing" import path
    fileContents = fileContents.replace(
        /@import 'cacao-css\/dist\/spacing\/spacing.css';/g,
        '@import \'cacao-css/dist/child-spacing/variables.css\';\n@import \'cacao-css/dist/child-spacing/first-child/spacing/top/top-0.css\';\n@import \'cacao-css/dist/child-spacing/last-child/spacing/bottom/bottom-0.css\';'
    );

    // Write the new file
    fs.writeFileSync(file, fileContents);

    fancyLog(logSymbols.success, chalk.green('Finished converting Cacao imports'));
};

export default convertImports;
