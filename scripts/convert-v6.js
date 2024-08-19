#! /usr/bin/env node

import { Command, Option } from 'commander';
import fs from 'fs-extra';
import fancyLog from 'fancy-log';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import convertImports from './src/convert-imports.js';

// Get the directory name of the current module
// eslint-disable-next-line no-underscore-dangle -- The dangle is used to match the __dirname variable in Node.js
const __dirname = dirname(dirname(fileURLToPath(import.meta.url)));

// Get the current package.json information
const thisPackageJson = fs.readJsonSync(`${__dirname}/package.json`);

// Set up the command line options
const program = new Command();
program.description('Convert older Cacao CSS to version 6');
program.version(thisPackageJson.version);

/**
 * Convert the older imports to the Cacao V6 format
 *
 * cacao-convert-v6 imports -f src/css/main.css
 */
program
    .command('imports')
    .description('Convert the CSS imports to V6')
    .requiredOption('-f, --file <file>', 'The file to convert. The path should be relative to the root of the project.')
    .action(async (args) => {
        convertImports(args);
    });

// Parse the command line arguments
program.parse();
