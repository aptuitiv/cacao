/* ===========================================================================
    Main entry point for building the files
=========================================================================== */

import chalk from 'chalk';
import fancyLog from 'fancy-log';
import fs from 'fs-extra';
import logSymbols from 'log-symbols';
import path from 'path';
import postcss from 'postcss';
import postcssMediaWrap from '../postcss/media.js';
import * as prettier from 'prettier';
import stylelint from 'stylelint';

// Media query sizes
const mediaSizes = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];

/**
 * Wrap the CSS in the directory in media queries
 *
 * This is used so that we can use Promise.all to wait for all the files to be processed.
 *
 * @param {string|object} dir The directory to process. If an object then it should be {dir: 'path/to/dir', skip: ['file1', 'file2']}
 * @returns {Promise<void>}
 */
const wrapDirectory = (dir) => {
    return new Promise((resolve) => {
        let dirPath = dir;
        let skip = [];
        if (typeof dir !== 'string') {
            dirPath = dir.dir;
            skip = dir.skip;
        }
        fs.readdirSync(dirPath).forEach(file => {
            const srcPath = `${dirPath}/${file}`;
            const stats = fs.statSync(srcPath);
            if (stats.isFile() && !skip.includes(file)) {
                mediaSizes.forEach(size => {
                    let destRoot = `${dirPath.replace(/^src/, 'dist')}/${size}`;
                    fs.ensureDirSync(destRoot);
                    const destPath = `${destRoot}/${file}`;
                    fs.readFile(srcPath, (err, css) => {
                        postcss([
                            // Wrap the code in a media query
                            postcssMediaWrap({ media: size }),
                            // Clean up the code, fix any issues, and do some formatting.
                            // Stylelint helps to get the spacing and line breaks right.
                            stylelint({ fix: true })
                        ])
                            .process(css, { from: srcPath, to: destPath })
                            .then(result => {
                                // Format the code with prettier. This is used in combination with Stylelint to
                                // properly format the code.
                                prettier.format(result.css, { parser: 'css', tabWidth: 4 }).then(formatted => {
                                    fs.writeFile(destPath, formatted, () => true);
                                    resolve();
                                });
                            })
                    });
                });
            }
        });
    });
}

/**
 * Copies directories as-is
 */
const copyDirectories = () => {
    fancyLog(chalk.cyan('Copying directories...'));
    // Directories to copy as-is
    const copyDir = [
        'src/aspect',
        'src/display',
        'src/embed',
        'src/fit',
        'src/grid',
        'src/grid-column',
        'src/gutter'
    ];
    copyDir.forEach(dir => {
        fs.readdirSync(dir).forEach(file => {
            const srcPath = `${dir}/${file}`;
            const stats = fs.statSync(srcPath);
            if (stats.isFile()) {
                const destPath = `${dir.replace(/^src/, 'dist')}/core/${file}`;
                fs.ensureDirSync(path.dirname(destPath));
                fs.copySync(srcPath, destPath);
            }
        });
    });
    fancyLog(chalk.green(`${logSymbols.success} Directories copied!`));
}

/**
 * Wrap directories in media queries
 */
const wrapDirectories = () => {
    fancyLog(chalk.cyan('Wrapping directories in media queries...'));
    // Directories whose files need to be wrapped in media queries
    const wrapDir = [
        'src/aspect',
        'src/display',
        'src/fit',
        'src/grid-column',
        'src/gutter'
    ];

    // Hold all the promises
    const promises = [];

    wrapDir.forEach(dir => {
        promises.push(wrapDirectory(dir));
    });
    Promise.all(promises).then(() => {
        fancyLog(chalk.green(`${logSymbols.success} Directories wrapped in media queries!`));
    });
}

// Run the functions
copyDirectories();
wrapDirectories();
