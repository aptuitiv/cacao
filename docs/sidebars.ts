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