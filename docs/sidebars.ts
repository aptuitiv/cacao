import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    //   tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // Custom sidebar navigation
    docs: [
        {
            type: 'doc',
            id: 'get-started',
            label: 'Getting Started',
        },
        {
            type: 'doc',
            id: 'import',
            label: 'Import Cacao CSS',
        },
        {
            type: 'category',
            label: 'Styles',
            link: {
                type: 'generated-index',
            },
            items: [
                // {
                //     type: 'doc',
                //     id: 'styles/index',
                //     label: 'List of styles',
                // },
                {
                    type: 'doc',
                    id: 'styles/base',
                    label: 'Base styles',
                },
                {
                    type: 'doc',
                    id: 'styles/reset',
                    label: 'CSS reset',
                },
                {
                    type: 'doc',
                    id: 'styles/media',
                    label: 'Media queries',
                },
                {
                    type: 'category',
                    label: 'Aspect ratio',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'styles/aspect/index',
                            label: 'Overview',
                        },
                        {
                            type: 'doc',
                            id: 'styles/aspect/horizontal',
                            label: 'Horizontal',
                        },
                        {
                            type: 'doc',
                            id: 'styles/aspect/vertical',
                            label: 'Vertical',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'styles/clearfix',
                    label: 'Clearfix',
                },
                {
                    type: 'category',
                    label: 'Display',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'styles/display/index',
                            label: 'Overview',
                        },
                        {
                            type: 'doc',
                            id: 'styles/display/align',
                            label: 'Aligning flexbox items',
                        },
                        {
                            type: 'doc',
                            id: 'styles/display/dstyles',
                            label: '"display" styles',
                        },
                        {
                            type: 'doc',
                            id: 'styles/display/flex',
                            label: 'Flexbox utilities',
                        },
                        {
                            type: 'doc',
                            id: 'styles/display/justify',
                            label: 'Justify flexbox items',
                        },
                        {
                            type: 'doc',
                            id: 'styles/display/order',
                            label: 'Display order',
                        },
                        {
                            type: 'doc',
                            id: 'styles/display/print',
                            label: 'Print styles',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'styles/embed',
                    label: 'Embedding content',
                },
                {
                    type: 'doc',
                    id: 'styles/grid',
                    label: 'Grid',
                },
                {
                    type: 'category',
                    label: 'Grid columns',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'styles/grid-column/index',
                            label: 'Overview',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/one-column',
                            label: '1 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/two-column',
                            label: '2 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/three-column',
                            label: '3 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/four-column',
                            label: '4 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/five-column',
                            label: '5 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/six-column',
                            label: '6 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/seven-column',
                            label: '7 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/eight-column',
                            label: '8 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/nine-column',
                            label: '9 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/ten-column',
                            label: '10 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/eleven-column',
                            label: '11 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/twelve-column',
                            label: '12 column',
                        },
                        {
                            type: 'doc',
                            id: 'styles/grid-column/fill-column',
                            label: 'Fill column width',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Gutters',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'styles/gutter/index',
                            label: 'Overview',
                        },
                        {
                            type: 'doc',
                            id: 'styles/gutter/all',
                            label: 'Horizontal and vertical gutters',
                        },
                        {
                            type: 'doc',
                            id: 'styles/gutter/horizontal',
                            label: 'Horizontal gutters',
                        },
                        {
                            type: 'doc',
                            id: 'styles/gutter/vertical',
                            label: 'Vertical gutters',
                        },
                        {
                            type: 'doc',
                            id: 'styles/gutter/variables',
                            label: 'Variables',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Height',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'styles/height/index',
                            label: 'Overview',
                        },
                        {
                            type: 'doc',
                            id: 'styles/height/auto',
                            label: 'Auto height',
                        },
                        {
                            type: 'doc',
                            id: 'styles/height/one',
                            label: 'Full height',
                        },
                        {
                            type: 'doc',
                            id: 'styles/height/two',
                            label: 'Halfs',
                        },
                        {
                            type: 'doc',
                            id: 'styles/height/three',
                            label: 'Thirds',
                        },
                        {
                            type: 'doc',
                            id: 'styles/height/four',
                            label: 'Fourths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/height/five',
                            label: 'Fifths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/height/six',
                            label: 'Sixths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/height/seven',
                            label: 'Sevenths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/height/eight',
                            label: 'Eighths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/height/nine',
                            label: 'Ninths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/height/ten',
                            label: 'Tenths',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'styles/image',
                    label: 'Images',
                },
                {
                    type: 'doc',
                    id: 'styles/link',
                    label: 'Links',
                },
                {
                    type: 'category',
                    label: 'Margins',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'styles/margin/index',
                            label: 'Overview',
                        },
                        {
                            type: 'doc',
                            id: 'styles/margin/all',
                            label: 'Horizontal and vertical margins',
                        },
                        {
                            type: 'doc',
                            id: 'styles/margin/horizontal',
                            label: 'Horizontal margins',
                        },
                        {
                            type: 'doc',
                            id: 'styles/margin/vertical',
                            label: 'Vertical margins',
                        },
                        {
                            type: 'doc',
                            id: 'styles/margin/top',
                            label: 'Top margins',
                        },
                        {
                            type: 'doc',
                            id: 'styles/margin/end',
                            label: 'End (right) margins',
                        },
                        {
                            type: 'doc',
                            id: 'styles/margin/bottom',
                            label: 'Bottom margins',
                        },
                        {
                            type: 'doc',
                            id: 'styles/margin/start',
                            label: 'Start (left) margins',
                        },
                        {
                            type: 'doc',
                            id: 'styles/margin/variables',
                            label: 'Variables',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'styles/fit',
                    label: 'Object fit',
                },
                {
                    type: 'category',
                    label: 'Padding',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'styles/padding/index',
                            label: 'Overview',
                        },
                        {
                            type: 'doc',
                            id: 'styles/padding/all',
                            label: 'Horizontal and vertical padding',
                        },
                        {
                            type: 'doc',
                            id: 'styles/padding/horizontal',
                            label: 'Horizontal padding',
                        },
                        {
                            type: 'doc',
                            id: 'styles/padding/vertical',
                            label: 'Vertical padding',
                        },
                        {
                            type: 'doc',
                            id: 'styles/padding/top',
                            label: 'Top padding',
                        },
                        {
                            type: 'doc',
                            id: 'styles/padding/end',
                            label: 'End (right) padding',
                        },
                        {
                            type: 'doc',
                            id: 'styles/padding/bottom',
                            label: 'Bottom padding',
                        },
                        {
                            type: 'doc',
                            id: 'styles/padding/start',
                            label: 'Start (left) padding',
                        },
                        {
                            type: 'doc',
                            id: 'styles/padding/variables',
                            label: 'Variables',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'styles/position',
                    label: 'Position',
                },
                {
                    type: 'category',
                    label: 'Pull',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'styles/pull/index',
                            label: 'Overview',
                        },
                        {
                            type: 'doc',
                            id: 'styles/pull/zero',
                            label: 'No pull',
                        },
                        {
                            type: 'doc',
                            id: 'styles/pull/one',
                            label: 'Full pull',
                        },
                        {
                            type: 'doc',
                            id: 'styles/pull/two',
                            label: 'Halfs',
                        },
                        {
                            type: 'doc',
                            id: 'styles/pull/three',
                            label: 'Thirds',
                        },
                        {
                            type: 'doc',
                            id: 'styles/pull/four',
                            label: 'Fourths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/pull/five',
                            label: 'Fifths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/pull/six',
                            label: 'Sixths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/pull/seven',
                            label: 'Sevenths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/pull/eight',
                            label: 'Eighths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/pull/nine',
                            label: 'Ninths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/pull/ten',
                            label: 'Tenths',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Push',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'styles/push/index',
                            label: 'Overview',
                        },
                        {
                            type: 'doc',
                            id: 'styles/push/zero',
                            label: 'No push',
                        },
                        {
                            type: 'doc',
                            id: 'styles/push/one',
                            label: 'Full push',
                        },
                        {
                            type: 'doc',
                            id: 'styles/push/two',
                            label: 'Halfs',
                        },
                        {
                            type: 'doc',
                            id: 'styles/push/three',
                            label: 'Thirds',
                        },
                        {
                            type: 'doc',
                            id: 'styles/push/four',
                            label: 'Fourths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/push/five',
                            label: 'Fifths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/push/six',
                            label: 'Sixths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/push/seven',
                            label: 'Sevenths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/push/eight',
                            label: 'Eighths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/push/nine',
                            label: 'Ninths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/push/ten',
                            label: 'Tenths',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'styles/spacing',
                    label: 'Spacing',
                },
                {
                    type: 'category',
                    label: 'Typography',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'styles/typography/index',
                            label: 'Overview',
                        },
                        {
                            type: 'doc',
                            id: 'styles/typography/style',
                            label: 'Font styles',
                        },
                        {
                            type: 'doc',
                            id: 'styles/typography/weight',
                            label: 'Font weight',
                        },
                        {
                            type: 'doc',
                            id: 'styles/typography/align',
                            label: 'Text alignment',
                        },
                        {
                            type: 'doc',
                            id: 'styles/typography/transform',
                            label: 'Text transform',
                        },
                        {
                            type: 'doc',
                            id: 'styles/typography/break',
                            label: 'Word breaks and whitespace',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Width',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'styles/width/index',
                            label: 'Overview',
                        },
                        {
                            type: 'doc',
                            id: 'styles/width/auto',
                            label: 'Auto width',
                        },
                        {
                            type: 'doc',
                            id: 'styles/width/one',
                            label: 'Full width',
                        },
                        {
                            type: 'doc',
                            id: 'styles/width/two',
                            label: 'Halfs',
                        },
                        {
                            type: 'doc',
                            id: 'styles/width/three',
                            label: 'Thirds',
                        },
                        {
                            type: 'doc',
                            id: 'styles/width/four',
                            label: 'Fourths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/width/five',
                            label: 'Fifths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/width/six',
                            label: 'Sixths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/width/seven',
                            label: 'Sevenths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/width/eight',
                            label: 'Eighths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/width/nine',
                            label: 'Ninths',
                        },
                        {
                            type: 'doc',
                            id: 'styles/width/ten',
                            label: 'Tenths',
                        },
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Migrations',
            link: {
                type: 'generated-index',
            },
            items: [
                {
                    type: 'doc',
                    id: 'migration/from-v3',
                    label: 'From version 3',
                },
                {
                    type: 'doc',
                    id: 'migration/from-v4-or-v5-to-v6',
                    label: 'From version 4 or 5 to version 6',
                },
            ],
        },
        {
            type: 'category',
            label: 'Development',
            link: {
                type: 'generated-index',
            },
            items: [
                {
                    type: 'doc',
                    id: 'development/index',
                    label: 'Overview',
                },
                {
                    type: 'doc',
                    id: 'development/local',
                    label: 'Local development',
                },
            ],
        },
        'changelog',
    ],

    // But you can create a sidebar manually
    /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
