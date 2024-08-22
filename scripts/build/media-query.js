/* ===========================================================================
    Wrap the CSS in files in media queries for the different screen sizes
=========================================================================== */

import chalk from 'chalk';
import fancyLog from 'fancy-log';
import fs from 'fs-extra';
import logSymbols from 'log-symbols';
import { basename } from 'path';
import postcss from 'postcss';
import * as prettier from 'prettier';
import stylelint from 'stylelint';
import postcssMediaWrap from '../../postcss/media.js';

import { mediaQueryDirectories, mediaSizes } from './config.js';

/**
 * Wrap the CSS in the directory in media queries
 *
 * This is used so that we can use Promise.all to wait for all the files to be processed.
 *
 * @param {string|object} dir The directory to process. If an object then it should be {dir: 'path/to/dir', skip: ['file1', 'file2']}
 * @returns {Promise<void>}
 */
const wrapDirectory = (dir) => new Promise((resolve) => {
    let dirPath = dir;
    let skip = [];
    let combine = false;
    let commentModule = '';
    if (typeof dir !== 'string') {
        dirPath = dir.dir;
        skip = dir.skip ?? [];
        combine = dir.combine ?? false;
        commentModule = dir.commentModule ?? '';
    }
    if (commentModule.length === 0) {
        commentModule = basename(dirPath);
    }

    const files = [];
    fs.readdirSync(dirPath).forEach((file) => {
        const srcPath = `${dirPath}/${file}`;
        const stats = fs.statSync(srcPath);
        if (stats.isFile() && !skip.includes(file)) {
            files.push(file);
            mediaSizes.forEach((size) => {
                const destRoot = `${dirPath.replace(/^src/, 'dist')}/${size}`;
                fs.ensureDirSync(destRoot);
                const destPath = `${destRoot}/${file}`;
                fs.readFile(srcPath, (err, css) => {
                    postcss([
                        // Wrap the code in a media query
                        postcssMediaWrap({ media: size }),
                        // Clean up the code, fix any issues, and do some formatting.
                        // Stylelint helps to get the spacing and line breaks right.
                        stylelint({ fix: true }),
                    ])
                        .process(css, { from: srcPath, to: destPath })
                        .then((result) => {
                            // Format the code with prettier. This is used in combination with Stylelint to
                            // properly format the code.
                            prettier.format(result.css, { parser: 'css', tabWidth: 4 }).then((formatted) => {
                                fs.writeFile(destPath, formatted, () => true);
                                resolve();
                            });
                        });
                });
            });
        }
    });

    // Add the combined files
    if (combine) {
        files.sort();
        mediaSizes.forEach((size) => {
            const destPath = `${dirPath.replace(/^src/, 'dist')}/${size}/${combine}`;
            // Create the combination file
            let fileContents = '/* =========================================================================== *\n';
            fileContents += `   ${commentModule.charAt(0).toUpperCase() + commentModule.slice(1)} utilities - ${size} - imports all the ${size} ${commentModule.toLowerCase()} utility files\n`;
            fileContents += ' * =========================================================================== */\n\n';
            files.forEach((file) => {
                fileContents += `@import './${file}';\n`;
            });
            fs.writeFileSync(destPath, fileContents);
        });
    }
});

/**
 * Wrap the CSS in directories in media queries for the different screen sizes
 *
 * @returns {Promise<void>}
 */
const wrapInMediaQueries = () => {
    fancyLog(chalk.cyan('Wrapping CSS in media queries...'));

    return new Promise((resolve) => {
        // Hold all the promises
        const promises = [];

        mediaQueryDirectories.forEach((dir) => {
            promises.push(wrapDirectory(dir));
        });
        Promise.all(promises).then(() => {
            fancyLog(chalk.green(`${logSymbols.success} CSS wrapped in media queries!`));
            resolve();
        });
    });
};

export default wrapInMediaQueries;
