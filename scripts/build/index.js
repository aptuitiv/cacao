/* ===========================================================================
    Main entry point for building the files
=========================================================================== */

import { Command } from 'commander';

import combineFiles from './combine.js';
import copyFiles from './copy-files.js';
import buildChildSpacing from './child-spacing.js';
import buildGutters from './gutter.js';
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
        await buildChildSpacing();
        await buildGutters();
        await buildMargins();
        await buildPaddings();
        await copyFiles();
        await combineFiles();
        await wrapInMediaQueries();
        // Set a delay because there is sometimes a brief delay in the file system getting written to
        setTimeout(() => {
            buildImports();
        }, 500);
    });

/**
 * Combine the files for the modules
 *
 * node scripts/build combine-files
 */
program
    .command('combine-files')
    .description('Combine the files for the modules')
    .action(async () => {
        combineFiles();
    });

/**
 * Copy the files from the src directory to the dist directory
 *
 * node scripts/build copy-files
 */
program
    .command('copy-files')
    .description('Copy the files from the src directory to the dist directory')
    .action(async () => {
        copyFiles();
    });

/**
 * Build the src child spacing files
 *
 * node scripts/build child-spacing
 */
program
    .command('child-spacing')
    .description('Build the source child spacing files')
    .action(async () => {
        buildChildSpacing();
    });

/**
 * Build the src gutter files
 *
 * node scripts/build gutters
 */
program
    .command('gutters')
    .description('Build the source gutter files')
    .action(async () => {
        buildGutters();
    });

/**
 * Build the import files
 *
 * node scripts/build imports
 */
program
    .command('imports')
    .description('Build the import files')
    .action(async () => {
        buildImports();
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
 * Wrap classes in media queries
 *
 * node scripts/build media
 */
program
    .command('media')
    .description('Wrap classes in media queries')
    .action(async () => {
        await wrapInMediaQueries();
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
