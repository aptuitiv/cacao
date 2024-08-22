/* ===========================================================================
    Main entry point for building the files
=========================================================================== */

import { Command } from 'commander';

import copyFiles from './copy-files.js';
import buildImports from './imports.js';
import buildMargins from './margin.js';
import wrapInMediaQueries from './media-query.js';

// Set up the command line options
const program = new Command();
program.description('Build tools for Cacao CSS');

/**
 * Convert the media query breakpoint variables to the Cacao V6 format
 *
 * cacao-convert-v6 breakpoints -d src/css
 */
program
    .command('margins')
    .description('Build the Cacao CSS files')
    .action(async () => {
        buildMargins();
    });

program
    .command('all')
    .description('Build all the Cacao CSS files')
    .action(async () => {
        await buildMargins();
        await copyFiles();
        await wrapInMediaQueries();
        // Set a delay because there is sometimes a brief delay in the file system getting written to
        setTimeout(() => {
            buildImports();
        }, 500);
    });

// Parse the command line arguments
program.parse();
