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

        // Run this on the root node once.
        // https://postcss.org/api/#plugin
        Once(root, postcss) {
            // If the media option is not set, throw an error
            if (!options.media) {
                throw root.error('The media option is required');
            }

            // Create the media query
            let media = postcss.atRule({
                name: 'media',
                params: `(--m-${options.media})`,
            });

            let firstComment = null;

            // Walk through each node in the PostCSS tree and process it
            root.walk(node => {
                if (node.type === 'rule' && !node[processed]) {
                    // Only copy the rule if it is a direct child of the root.
                    // This is to prevent copying rules that are nested inside media queries, which are copied
                    // when media queries are processed.
                    if (node.parent === root) {
                        // Copy the rule as a new rule. We clone it so that the "source" and other necessary attributes are copied.
                        const newRule = node.clone();
                        // Append the media query size to the selector.
                        // Because a rule could have multiple selectors we need to loop through them.
                        newRule.selectors = node.selectors.map((selector, index) => {
                            let returnValue = `${selector}-${options.media}`;
                            if (index > 0) {
                                // Indent the selector so that it looks better inside the media query
                                returnValue = `\n    ${returnValue}`;
                            }
                            return returnValue;
                        })

                        // Mark the rule as processed so that we don't try to do this again.
                        newRule[processed] = true;

                        // Add the rule to the media query
                        media.append(newRule);
                    } else {
                        // This is a rule that is likely nested inside a media query.
                        // Only update the selelector to include the media query size.
                        node.selectors = node.selectors.map((selector, index) => {
                            let returnValue = `${selector}-${options.media}`;
                            if (index > 0) {
                                // Indent the selector so that it looks better inside the media query
                                returnValue = `\n    ${returnValue}`;
                            }
                            return returnValue;
                        });
                        node[processed] = true;
                    }
                } else if (node.type === 'comment') {
                    if (node.parent === root) {
                        if (node.prev()) {
                            // This is not the first thing in the root
                            // Indent the comment so that it looks better inside the media query
                            node.raws.before += '    ';
                            // This gets the last line of a multi-line comment to indent properly. This is the "*/" part.
                            node.raws.right += '    ';
                            // Indent any multi-line comments so that they look better inside the media query.
                            // The "text" attributes holds the part of the comment that is between "/*" and "*/".
                            let commentLines = node.text.split('\n');
                            if (commentLines.length > 1) {
                                commentLines = commentLines.map((line, index) => {
                                    // The first "line" is the "*" right after "/*"
                                    if (index > 0) {
                                        // Indent the line of the comment
                                        return `    ${line}`;
                                    }
                                    return line;
                                });
                                // Update the text attribute with the indented comment
                                node.text = commentLines.join('\n');
                            }
                            media.append(node);
                        } else {
                            // This is the first thing in the root.
                            // Save it so that it can be added back to the root later.
                            firstComment = node;
                        }
                    }
                } else if (node.type === 'atrule') {
                    // Indent the at-rule so that it looks better inside the media query
                    node.raws.before += '    ';
                    media.append(node);
                }

            });

            root.removeAll();
            if (firstComment) {
                root.append(firstComment);
            }
            root.append(media);
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
