/* ===========================================================================
    Configuration for building the files
=========================================================================== */

import path from 'path';
import { fileURLToPath } from 'url';

// The root directory for the project
export const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../');

// The directory path where the files are built
export const distDirectory = path.join(rootDirectory, 'dist');

// The directory path where the source files are located
export const srcDirectory = path.join(rootDirectory, 'src');

// Media query sizes
export const mediaSizes = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];

/**
 * Configuration for the modules to combine file imports into one file
 * - combine (boolean): Whether to combine the files into a single file. Defaults to false.
 * - directory (string): The directory to read the files from.
 *      If not provided, it will read the files from a folder with the same name as the module (i.e. the object key name ).
 * - files (array): The files to import. If not provided, it will read the files from the directory
 * - name (string): The module name to use in the comment. Defaults to the module name.
 *
 * @type {Object.<string, object>}
 */
export const combinationFiles = {
    aspect: { combine: true, name: 'Aspect Ratio' },
    'child-spacing': {
        combine: true,
        name: 'Child spacing',
        files: ['first-child/combined-import.css', 'last-child/combined-import.css'],
    },
    'child-spacing-first-child': {
        combine: true,
        name: 'Child spacing first child',
        directory: 'child-spacing/first-child',
        files: ['margin/combined-import.css', 'padding/combined-import.css', 'spacing/combined-import.css'],
    },
    'child-spacing-first-child-margin': {
        combine: true,
        name: 'Child spacing first child margin',
        directory: 'child-spacing/first-child/margin',
    },
    'child-spacing-first-child-padding': {
        combine: true,
        name: 'Child spacing first child padding',
        directory: 'child-spacing/first-child/padding',
    },
    'child-spacing-first-child-spacing': {
        combine: true,
        name: 'Child spacing first child spacing',
        directory: 'child-spacing/first-child/spacing',
    },
    'child-spacing-last-child': {
        combine: true,
        name: 'Child spacing last child',
        directory: 'child-spacing/last-child',
        files: ['margin/combined-import.css', 'padding/combined-import.css', 'spacing/combined-import.css'],
    },
    'child-spacing-last-child-margin': {
        combine: true,
        name: 'Child spacing last child margin',
        directory: 'child-spacing/last-child/margin',
    },
    'child-spacing-last-child-padding': {
        combine: true,
        name: 'Child spacing last child padding',
        directory: 'child-spacing/last-child/padding',
    },
    display: { combine: true },
    'grid-column': { combine: true, name: 'Grid column' },
    gutter: { combine: true },
    height: { combine: true },
    margin: { combine: true },
    padding: { combine: true },
    pull: { combine: true },
    push: { combine: true },
    typography: { combine: true },
    width: { combine: true },
};

// Directories whose files need to be wrapped in media queries
export const mediaQueryDirectories = [
    'src/aspect',
    'src/display',
    'src/fit',
    'src/grid',
    'src/grid-column',
    'src/gutter',
    'src/height',
    'src/margin',
    'src/padding',
    'src/position',
    { dir: 'src/pull', skip: ['pull.css'] },
    { dir: 'src/push', skip: ['push.css'] },
    { dir: 'src/typography', skip: ['size-variables.css'] },
    'src/width',
];

// Map the module names to the directory names for the import.js file
export const importsModuleMap = {
    aspect: { name: 'Aspect Ratios', combine: 'aspect.css' },
    clearfix: { name: 'Clearfix' },
    'child-spacing': { name: 'Child spacing' },
    display: { name: 'Display' },
    embed: { name: 'Embed' },
    fit: { name: 'Fit' },
    grid: { name: 'Grid' },
    'grid-column': { name: 'Grid Columns' },
    gutter: { name: 'Gutter', variables: true, combine: 'gutter.css' },
    height: { name: 'Height' },
    image: { name: 'Images', variables: true },
    link: { name: 'Links' },
    margin: { name: 'Margin', variables: true, combine: 'margin.css' },
    padding: { name: 'Padding', variables: true, combine: 'padding.css' },
    position: { name: 'Position' },
    pull: { name: 'Pull' },
    push: { name: 'Push' },
    typography: { name: 'Typography' },
    width: { name: 'Width' },
};

/**
 * The pixel sizes for each "size" variable
 */
export const variableSizes = {
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
