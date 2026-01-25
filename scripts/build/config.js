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
 * - import: (boolean) Whether to import the combined file into the imports.css file. Defaults to true.
 * - name (string): The module name to use in the comment. Defaults to the module name.
 */
export const combinationFiles = {
    aspect: { name: 'Aspect Ratio' },
    'child-spacing': {
        name: 'Child spacing',
        // Specify the files to import for the child spacing module
        files: ['first-child/combined-import.css', 'last-child/combined-import.css'],
        // Specify the directories to skip for the child spacing module.
        // These are matched as a glob pattern and they apply to any child folders within the child spacing module
        // that should not have a combined-import.css file.
        skip: [
            'child-spacing/first-child/margin/*',
            'child-spacing/first-child/padding/*',
            'child-spacing/first-child/spacing/*',
            'child-spacing/last-child/margin/*',
            'child-spacing/last-child/padding/*',
            'child-spacing/last-child/spacing/*',
        ]
    },
    'child-spacing-first-child': {
        name: 'Child spacing first child',
        directory: 'child-spacing/first-child',
        files: ['margin/combined-import.css', 'padding/combined-import.css', 'spacing/combined-import.css'],
    },
    'child-spacing-first-child-margin': {
        name: 'Child spacing first child margin',
        directory: 'child-spacing/first-child/margin',
    },
    'child-spacing-first-child-padding': {
        name: 'Child spacing first child padding',
        directory: 'child-spacing/first-child/padding',
    },
    'child-spacing-first-child-spacing': {
        name: 'Child spacing first child spacing',
        directory: 'child-spacing/first-child/spacing',
    },
    'child-spacing-last-child': {
        name: 'Child spacing last child',
        directory: 'child-spacing/last-child',
        files: ['margin/combined-import.css', 'padding/combined-import.css', 'spacing/combined-import.css'],
    },
    'child-spacing-last-child-margin': {
        name: 'Child spacing last child margin',
        directory: 'child-spacing/last-child/margin',
    },
    'child-spacing-last-child-padding': {
        name: 'Child spacing last child padding',
        directory: 'child-spacing/last-child/padding',
    },
    display: {},
    'grid-column': { name: 'Grid column' },
    gutter: {},
    height: {},
    margin: {},
    padding: {},
    pull: {},
    push: {},
    typography: {},
    width: {},
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
    'child-spacing': {
        name: 'Child spacing',
        // Specify the module name to use for subdirectories.
        subDirectories: {
            'first-child': { name: 'First child' },
            'first-child/margin': { name: 'First child margin' },
            'first-child/margin/all': { name: 'First child margin all' },
            'first-child/margin/bottom': { name: 'First child margin bottom' },
            'first-child/margin/end': { name: 'First child margin end' },
            'first-child/margin/horizontal': { name: 'First child margin horizontal' },
            'first-child/margin/start': { name: 'First child margin start' },
            'first-child/margin/top': { name: 'First child margin top' },
            'first-child/margin/vertical': { name: 'First child margin vertical' },
            'first-child/padding': { name: 'First child padding' },
            'first-child/padding/all': { name: 'First child padding all' },
            'first-child/padding/bottom': { name: 'First child padding bottom' },
            'first-child/padding/end': { name: 'First child padding end' },
            'first-child/padding/horizontal': { name: 'First child padding horizontal' },
            'first-child/padding/start': { name: 'First child padding start' },
            'first-child/padding/top': { name: 'First child padding top' },
            'first-child/padding/vertical': { name: 'First child padding vertical' },
            'first-child/spacing': { name: 'First child spacing' },
            'first-child/spacing/all': { name: 'First child spacing all' },
            'first-child/spacing/bottom': { name: 'First child spacing bottom' },
            'first-child/spacing/end': { name: 'First child spacing end' },
            'first-child/spacing/horizontal': { name: 'First child spacing horizontal' },
            'first-child/spacing/start': { name: 'First child spacing start' },
            'first-child/spacing/top': { name: 'First child spacing top' },
            'first-child/spacing/vertical': { name: 'First child spacing vertical' },
            'last-child': { name: 'Last child' },
            'last-child/margin': { name: 'Last child margin' },
            'last-child/margin/all': { name: 'Last child margin all' },
            'last-child/margin/bottom': { name: 'Last child margin bottom' },
            'last-child/margin/end': { name: 'Last child margin end' },
            'last-child/margin/horizontal': { name: 'Last child margin horizontal' },
            'last-child/margin/start': { name: 'Last child margin start' },
            'last-child/margin/top': { name: 'Last child margin top' },
            'last-child/margin/vertical': { name: 'Last child margin vertical' },
            'last-child/padding': { name: 'Last child padding' },
            'last-child/padding/all': { name: 'Last child padding all' },
            'last-child/padding/bottom': { name: 'Last child padding bottom' },
            'last-child/padding/end': { name: 'Last child padding end' },
            'last-child/padding/horizontal': { name: 'Last child padding horizontal' },
            'last-child/padding/start': { name: 'Last child padding start' },
            'last-child/padding/top': { name: 'Last child padding top' },
            'last-child/padding/vertical': { name: 'Last child padding vertical' },
            'last-child/spacing': { name: 'Last child spacing' },
            'last-child/spacing/all': { name: 'Last child spacing all' },
            'last-child/spacing/bottom': { name: 'Last child spacing bottom' },
            'last-child/spacing/end': { name: 'Last child spacing end' },
            'last-child/spacing/horizontal': { name: 'Last child spacing horizontal' },
            'last-child/spacing/start': { name: 'Last child spacing start' },
            'last-child/spacing/top': { name: 'Last child spacing top' },
            'last-child/spacing/vertical': { name: 'Last child spacing vertical' },
        }
    },
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
