#! /usr/bin/env node

import { Command } from 'commander';
import fs from 'fs-extra';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import convertClasses from './convert-classes.js';
import convertImports from './convert-imports.js';
import convertBreakpoints from './convert-breakpoints.js';

// Get the directory name of the current module
// eslint-disable-next-line no-underscore-dangle -- The dangle is used to match the __dirname variable in Node.js
const __dirname = dirname(dirname(dirname(fileURLToPath(import.meta.url))));

// Get the current package.json information
const thisPackageJson = fs.readJsonSync(`${__dirname}/package.json`);

// Set up the command line options
const program = new Command();
program.description('Convert Cacao CSS versions 4 or 5 to version 6');
program.version(thisPackageJson.version);

/**
 * Convert the media query breakpoint variables to the Cacao V6 format
 *
 * cacao-convert-v6 breakpoints -d src/css
 */
program
    .command('breakpoints')
    .description('Convert the media query breakpoint variables in CSS to V6 format')
    .requiredOption('-d, --dir <path>', 'The root path for the CSS files. The path should be relative to the root of the project.')
    .action(async (args) => {
        convertBreakpoints(args);
    });

/**
 * Convert the CSS class names in templates to the Cacao V6 format
 *
 * cacao-convert-v6 classes -d src/templates
 */
program
    .command('classes')
    .description('Convert the CSS class names in templates to V6 format')
    .requiredOption('-d, --dir <path>', 'The root path for the templates. The path should be relative to the root of the project.')
    .action(async (args) => {
        convertClasses(args);
    });

/**
 * Convert the older imports to the Cacao V6 format
 *
 * cacao-convert-v6 imports -f src/css/main.css
 */
program
    .command('imports')
    .description('Convert the CSS imports to V6 format')
    .requiredOption('-f, --file <file>', 'The file to convert. The path should be relative to the root of the project.')
    .action(async (args) => {
        convertImports(args);
    });

// Parse the command line arguments
program.parse();
