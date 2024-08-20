/* ===========================================================================
    Copy files from the src directory to the dist directory
=========================================================================== */

import chalk from 'chalk';
import fancyLog from 'fancy-log';
import fs from 'fs-extra';
import logSymbols from 'log-symbols';
import { basename } from 'path';

import { distDirectory, srcDirectory } from './config.js';

/**
 * Copy files from the directory to the dist directory
 *
 * @param {string} directory The directory path to copy files from
 */
const copyFilesFromDirectory = (directory) => {
    const folderName = basename(directory);
    fs.readdirSync(directory).forEach((file) => {
        const srcPath = `${directory}/${file}`;
        const stats = fs.statSync(srcPath);
        if (stats.isFile()) {
            const destPath = `${distDirectory}/${folderName}/${file}`;
            fs.copySync(srcPath, destPath);
        }
    });
};

/**
 * Copy the files from the src directory to the dist directory
 *
 * @returns {Promise<void>}
 */
const copyFiles = () => {
    fancyLog(chalk.cyan('Copying files...'));
    return new Promise((resolve) => {
        fs.ensureDirSync(distDirectory);

        // Read the files from the src directory
        fs.readdirSync(srcDirectory).forEach((file) => {
            const srcPath = `${srcDirectory}/${file}`;
            const stats = fs.statSync(srcPath);
            if (stats.isFile()) {
                const destPath = `${distDirectory}/${file}`;
                fs.copySync(srcPath, destPath);
            } else if (stats.isDirectory()) {
                copyFilesFromDirectory(srcPath);
            }
        });
        fancyLog(chalk.green(`${logSymbols.success} Files copied!`));
        resolve();
    });
};

export default copyFiles;
