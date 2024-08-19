/**
 * This is used with linting files in this package.
 */
module.exports = {
    "env": {
        "es2024": true,
        "node": true,
    },
    extends: ['@aptuitiv/eslint-config-aptuitiv'],
    rules: {
        // Allow importing Javascript files
        'import/extensions': 'off',
    }
}
