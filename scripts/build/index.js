/* ===========================================================================
    Main entry point for building the files
=========================================================================== */

import copyFiles from './copy-files.js';
import buildImports from './imports.js';
import wrapInMediaQueries from './media-query.js';

// Run the functions
copyFiles()
    .then(() => {
        wrapInMediaQueries()
            .then(() => {
                buildImports();
            });
    });
