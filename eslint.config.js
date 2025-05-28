/**
 * This is used with linting files in this package.
 * It is not used for linting files for the website that is using
 * these build tools. That configuration is on the src/javascript.js file.
 */

/* eslint-disable-next-line import/no-extraneous-dependencies -- The @aptuitiv package is a dev dependency since it's an eslint config. */
import aptuitivEslint from '@aptuitiv/eslint-config-aptuitiv';
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    // Because @aptuitiv/eslint-config-aptuitiv exports an array of objects, we need to use the spread operator.
    ...aptuitivEslint,
    // Ignore the docs directory
    globalIgnores(['docs/',]),
    // Custom rules for this project
    {
        rules: {
            // Allow importing Javascript files
            'import/extensions': 'off',
        },
    },
]);
