/** @type {import('stylelint').Config} */
export default {
    cache: true,
    defaultSeverity: 'warning', // So that stylelint won't stop on errors and the CSS will still build
    "extends": ["stylelint-config-standard"],
    fix: true,
    "plugins": ["stylelint-order"],
    "rules": {
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "extend",
                    "define-placeholder",
                    "define-extend",
                    "extend-define"
                ]
            }
        ],
        "color-named": "never",
        // Override the stylelint-config-standard rule to allow custom properties in formats that aren"t kebab-case
        "custom-property-pattern": null,
        "import-notation": "string",
        "order/properties-alphabetical-order": true,
        "selector-class-pattern": null,
        "selector-id-pattern": null
    }
};
