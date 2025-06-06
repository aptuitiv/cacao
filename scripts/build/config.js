/* ===========================================================================
    Configuration for building the files
=========================================================================== */

import { dirname } from 'path';
import { fileURLToPath } from 'url';

// The root directory for the project
export const rootDirectory = dirname(dirname(dirname(fileURLToPath(import.meta.url))));

// The directory path where the files are built
export const distDirectory = `${rootDirectory}/dist`;

// The directory path where the source files are located
export const srcDirectory = `${rootDirectory}/src`;

// Media query sizes
export const mediaSizes = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];

// Configuration for the modules to combine file imports into one file
export const combinationFiles = {
    aspect: { combine: true, name: 'Aspect Ratio' },
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
    spacing: { name: 'Spacing' },
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
