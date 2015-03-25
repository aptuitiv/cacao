Cacao
=====

Cacao is a light Sass framework that includes flexible, reusable 
front-end modules and also a small set of global settings and mixins.

[How to pronounce Cacao.](https://www.youtube.com/watch?v=kVSIkXL_Nmo)


Getting Started
---------------

The easiest way to get started using Cacao is to install it with bower:

`bower install cacao --save`

At the bare minimum the main Cacao file, `_cacao.scss`, must be imported at 
the top of any file making use of the globals.

    /* index.scss */

    // cacao globals, defaults, and mixins.
    @import "bower_components/cacao/cacao";

    // the project
    .MyComponent {
        font-size: $g-textSize6; // using a cacao global
    }

This main file only imports the framework part of Cacao. To include a module 
you must import it individually.

    /* index.scss */

    // cacao globals, defaults, and mixins.
    @import "bower_components/cacao/cacao";

    // cacao modules
    @import "bower_components/cacao/modules/breadcrumbs/index";
    @import "bower_components/cacao/modules/container/index";

    // the project
    .MyComponent {
        font-size: $g-textSize6; // using a cacao global
    }



Globals
=======

Cacao consists of a small set of mixins and globals that are used throughout 
the modules and the project to keep things consistent.

Variable and mixin usage docs are kept up to date in `_defaults.scss` and 
`_mixins.scss`.



Modules
=======

Modules follow a strict directory structure. They may contain javascript, 
images, stylesheets, whatever assets the module needs to get it's job done.

Here is a mock-up of what you might see in a module's directory:

    _my-module
    |
    |__styles
    | |___defaults.scss       // module defaults
    | |___base.scss           // base element styles
    | |___utils.scss          // utility and helper styles
    | |___component.scss      // layout and component styles
    | |___state.scss          // state styles
    | |__index.scss           // main module stylesheet
    |
    |__scripts
    | |__myModule.js          // javascript
    |
    |__assets
    | |__module-image.png     // required assets
    |
    |__README.md              // documentation


Stylesheets
-----------

The module styles are separated into several layers. Each of these layers can 
be used in your project by importing them individually or as a whole component 
by importing `index.scss`.

The layers can use the module's default style settings. Between 
overriding these settings and leveraging the style layers the user can 
create predictable and flexible stylesheets.

- base
- utils
- component
- state

An example of a project's `main.scss` that makes use of these layers:

    /**
     * src/site/styles/main.scss
     */

    /* Globals */
    @import "../../../bower_components/cacao/cacao"; // cacao globals
    @import "settings"; // site settings, default global overrides

    /* Bower Modules */
    @import "../../../bower_components/normalize.css/normalize";

    /* Cacao Modules */
    @import "../../../bower_components/cacao/modules/grid/styles/index";
    @import "../../../bower_components/cacao/modules/size/styles/index";
    @import "../../../bower_components/cacao/modules/type/styles/index";
    // example of using a module's utilites separate of its other layers.
    // (this project does not need the responsive padding/margins)
    @import "../../../bower_components/cacao/modules/padding-top/styles/utils";
    @import "../../../bower_components/cacao/modules/margin-bottom/styles/utils";

    /* Local Project Modules */
    @import "../../header/styles/index";
    @import "../../sidebar/styles/index";

    /* Site module */
    @import "base";
    @import "utils";


Javascript, Images & Other Assets
---------------------------------

These resources can be tied into your build system whichever way you please.


Dependencies
------------

Currently there is no dependency resolution. This will be the major focus of 
v2.0, along with a more elegant way of handling module assets and scripts.

