#! /usr/bin/env node

import { Command } from 'commander';
import fs from 'fs-extra';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import convertImports from './convert-imports.js';

// Get the directory name of the current module

const __dirname = dirname(dirname(dirname(fileURLToPath(import.meta.url))));

// Get the current package.json information
const thisPackageJson = fs.readJsonSync(`${__dirname}/package.json`);

// Set up the command line options
const program = new Command();
program.description('Convert Cacao CSS versions 7 to version 8');
program.version(thisPackageJson.version);

/**
 * Convert the imports
 *
 * cacao-convert-v8 imports -f src/css/main.css
 */
program
    .command('imports')
    .description('Convert the CSS imports')
    .requiredOption('-f, --file <file>', 'The file to convert. The path should be relative to the root of the project.')
    .action(async (args) => {
        convertImports(args);
    });

// Parse the command line arguments
program.parse();
