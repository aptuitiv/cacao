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

// Directories whose files need to be wrapped in media queries
export const mediaQueryDirectories = [
    'src/aspect',
    'src/display',
    'src/fit',
    'src/grid-column',
    'src/gutter',
    'src/height',
    { dir: 'src/margin', skip: ['margin.css', 'variables.css'], combine: 'margin.css' },
    { dir: 'src/padding', skip: ['padding.css', 'variables.css'], combine: 'padding.css' },
    'src/position',
    { dir: 'src/pull', skip: ['pull.css'] },
    { dir: 'src/push', skip: ['push.css'] },
    'src/typography',
    'src/width',
];
