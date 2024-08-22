/* ===========================================================================
    Builds the combined file for the modules
=========================================================================== */

// import chalk from 'chalk';
// import fancyLog from 'fancy-log';
// import fs from 'fs-extra';
// import logSymbols from 'log-symbols';

import { combinationFiles } from './config.js';
import { buildModuleCombinationFile } from './helpers.js';

/**
 * Create the combined file imports for the modules
 *
 * @returns {Promise<void>}
 */
const combineFiles = () => new Promise((resolve) => {
    Object.keys(combinationFiles).forEach((module) => {
        const combineConfig = combinationFiles[module];
        buildModuleCombinationFile(module, module, { commentModule: combineConfig.name ?? module });
        // const files = [];
        // const skip = ['variables.css'];
        // const dirPath = `${rootDirectory}src/${module}`;
        // fs.readdirSync(dirPath).forEach((file) => {
        //     const srcPath = `${dirPath}/${file}`;
        //     const stats = fs.statSync(srcPath);
        //     if (stats.isFile() && !skip.includes(file)) {
        //         files.push(file);
        //     }
        // });

        // files.sort();

        // let fileContents = '/* =========================================================================== *\n';
        // fileContents += `   ${module.charAt(0).toUpperCase() + module.slice(1)} utilities - imports all the ${module} utility files\n`;
        // fileContents += ' * =========================================================================== */\n\n';
        // files.forEach((file) => {
        //     fileContents += `@import './${file}';\n`;
        // });
        // fs.writeFileSync(`${distDirectory}/${module}/combined-import.css`, fileContents);
        // fancyLog(chalk.green(`${logSymbols.success} Wrote ${module} combined import file `, chalk.cyan(`dest/${module}/combined-import.css`)));
    });
    resolve();
});

export default combineFiles;
