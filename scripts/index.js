/* ===========================================================================
    Main entry point for building the files
=========================================================================== */

import fs from 'fs-extra';
import path from 'path';
import postcss from 'postcss';
import postcssMediaWrap from '../postcss/media.js';

// Media query sizes
const mediaSizes = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];

/**
 * Copies directories as-is
 */
const copyDirectories = () => {
    // Directories to copy as-is
    const copyDir = [
        'src/aspect',
        'src/display'
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
}

/**
 * Wrap directories in media queries
 */
const wrapDirectories = () => {
    // Directories whose files need to be wrapped in media queries
    const wrapDir = [
        'src/aspect',
        'src/display'
    ];

    wrapDir.forEach(dir => {
        fs.readdirSync(dir).forEach(file => {
            const srcPath = `${dir}/${file}`;
            const stats = fs.statSync(srcPath);
            if (stats.isFile()) {
                mediaSizes.forEach(size => {
                    let destRoot = `${dir.replace(/^src/, 'dist')}/${size}`;
                    fs.ensureDirSync(destRoot);
                    const destPath = `${destRoot}/${file}`;
                    fs.readFile(srcPath, (err, css) => {
                        postcss([postcssMediaWrap({ media: size })])
                            .process(css, { from: srcPath, to: destPath })
                            .then(result => {
                                fs.writeFile(destPath, result.css, () => true)
                            })
                    });
                });
            }
        });
    });
}

// Run the functions
copyDirectories();
wrapDirectories();
