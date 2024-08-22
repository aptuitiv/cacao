/* ===========================================================================
    Main entry point for building the files
=========================================================================== */

import { Command } from 'commander';

import copyFiles from './copy-files.js';
import buildImports from './imports.js';
import buildMargins from './margin.js';
import buildPaddings from './padding.js';
import wrapInMediaQueries from './media-query.js';

// Set up the command line options
const program = new Command();
program.description('Build tools for Cacao CSS');

/**
 * Build all cacao files
 *
 * node scripts/build all
 */
program
    .command('all')
    .description('Build all the CSS files to the dist directory')
    .action(async () => {
        await buildMargins();
        await buildPaddings();
        await copyFiles();
        await wrapInMediaQueries();
        // Set a delay because there is sometimes a brief delay in the file system getting written to
        setTimeout(() => {
            buildImports();
        }, 500);
    });

/**
 * Build the src margin files
 *
 * node scripts/build margins
 */
program
    .command('margins')
    .description('Build the source margin files')
    .action(async () => {
        buildMargins();
    });

/**
 * Build the src padding files
 *
 * node scripts/build paddings
 */
program
    .command('paddings')
    .description('Build the source padding files')
    .action(async () => {
        await buildPaddings();
    });

// Parse the command line arguments
program.parse();
