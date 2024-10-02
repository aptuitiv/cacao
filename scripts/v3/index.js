#! /usr/bin/env node

import { Command } from 'commander';
import fs from 'fs-extra';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import convertClasses from './convert-classes.js';

// Get the directory name of the current module
// eslint-disable-next-line no-underscore-dangle -- The dangle is used to match the __dirname variable in Node.js
const __dirname = dirname(dirname(dirname(fileURLToPath(import.meta.url))));

// Get the current package.json information
const thisPackageJson = fs.readJsonSync(`${__dirname}/package.json`);

// Set up the command line options
const program = new Command();
program.description('Convert Cacao CSS versions 3 to the current version');
program.version(thisPackageJson.version);

/**
 * Convert the V3 classes to V6 format
 *
 * cacao-convert-v3 classes -d src/templates
 */
program
    .command('classes')
    .description('Convert the V3 classes to V6 format')
    .requiredOption('-d, --dir <path>', 'The root path for the templates. The path should be relative to the root of the project.')
    .action(async (args) => {
        convertClasses(args);
    });

// Parse the command line arguments
program.parse();
