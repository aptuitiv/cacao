/* ===========================================================================
    PostCSS plugin to wrap rules in media queries
    https://postcss.org/api/
    https://postcss.org/docs/writing-a-postcss-plugin
=========================================================================== */

// Symbol to mark nodes that have been processed
// https://postcss.org/docs/writing-a-postcss-plugin#step-change-nodes
const processed = Symbol('processed');

/**
 * PostCSS plugin to wrap rules in media queries
 *
 * Options:
 * - media: (string) (required) The media query size. Example: 'lg'
 *
 * @param {object} options The plugin options
 * @returns {object} The PostCSS plugin
 */
const plugin = (options) => {
    options = options || {};

    return {
        // Set the plugin name
        postcssPlugin: 'postcss-media-wrap',
        /**
         * Handle the Rule node in the PostCSS tree
         *
         * @param {Rule} rule The rule node
         * @param {PostCSS} postcss The PostCSS object
         */
        Rule(rule, postcss) {
            if (!rule[processed]) {
                if (options.media) {
                    // Copy the rule as a new rule
                    const newRule = new postcss.Rule({
                        nodes: rule.nodes,
                        // Append the media query size to the selector.
                        // Because a rule could have multiple selectors we need to loop through them.
                        selectors: rule.selectors.map((selector, index) => {
                            let returnValue = `${selector}-${options.media}`;
                            if (index > 0) {
                                // Indent the selector so that it looks better inside the media query
                                returnValue = `\n    ${returnValue}`;
                            }
                            return returnValue;
                        }),
                        // The Raws set the whitespace around the rule. https://postcss.org/api/#rule-raws
                        raws: {
                            before: rule.raws.before.replace('\n\n', '\n') + '    ',
                            after: rule.raws.after + '    ',
                            between: ' ',
                            semicolon: true,
                        }
                    });
                    // Mark the rule as processed so that we don't try to do this again.
                    newRule[processed] = true;

                    // Create the media query
                    let media = postcss.atRule({
                        name: 'media',
                        params: `(--m-${options.media})`,
                    });
                    media.append(newRule);

                    // Replace the rule with the media query
                    rule.replaceWith(media);
                } else {
                    rule[processed] = true;
                }
            }
        },

        /**
         * Process the Declaration node in the PostCSS tree
         *
         * @param {Declaration} decl The declaration node
         */
        Declaration(decl) {
            if (!decl[processed]) {
                // Indent the declaration so that it looks better inside the media query
                decl.raws.before += '   ';
                decl[processed] = true;
            }
        }
    };
};

plugin.postcss = true;

export default plugin;
