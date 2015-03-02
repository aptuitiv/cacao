Cacao
=====

Cacao is a light framework that includes flexible, reusable front-end modules and also a small set of global settings and mixins.

[How to pronounce Cacao.](https://www.youtube.com/watch?v=kVSIkXL_Nmo)



Getting Started
---------------

The easiest way to get started using Cacao is to install it with bower:

`bower install 'https://github.com/aptuitiv/cacao.git' --save`

At the bare minimum the main Cacao file, `_cacao.scss`, must be imported at the top of your projects stylesheet.

    /* main.scss */

    // cacao globals, defaults, and mixins.
    @import "bower_components/cacao/cacao";

    // the rest of your project

This main file only imports the framework part of Cacao. In order to use the modules you must individually import its "layers" (see below).
This creates a lot of imports but modules are structured this way to increase flexibility and modularity.



Globals
=======

Cacao consists of a small set of mixins and globals that are used throughout the modules, but can also be used throughout your site to keep things consistent.

Take a peek in `_defaults.scss` and `_mixins.scss` to see what is available.



Modules
=======

Modules follow a strict directory structure. They may contain javascript, images, stylesheets, whatever the module needs to get it's job done.

Here is a mock-up of what you might see in a module's directory:

    _myModule
    |
    |__css
    | |___base.scss           // base element styles
    | |___component.scss      // layout and component styles
    | |___generic.scss        // generic and helper styles
    | |___settings.scss       // module defaults
    | |___state.scss          // state styles
    |
    |__images
    | |__module-image.png
    |
    |__js
    | |__init.js              // initialization
    |
    |__Gruntfile.js           // build tasks
    |__bower.json             // front-end dependencies
    |__README.md              // documentation


Stylesheets
-----------

The module styles are separated into several layers.
Each of these layers can use the modules default style settings.
Between overriding these settings and leveraging the style layers the user can create predictable and flexible stylesheets.

* base
* generic
* component
* state

An example of a site's `main.scss` that makes use of these layers:

    /**
     * main.scss
     */

    /* Globals */
    @import "../../bower_components/cacao/cacao"; // cacao globals, defaults, and mixins
    @import "settings"; // site settings

    /* Base */
    @import "../../bower_components/normalize.css/normalize"; // cacao/modules/normalize
    @import "base/base";
    @import "../../bower_components/cacao/modules/type/css/base";

    /* Generic */
    @import "../../bower_components/cacao/modules/type/css/generic";
    @import "generic/helpers";

    /* Components */
    @import "../../bower_components/cacao/modules/hero/css/component";
    @import "../../bower_components/cacao/modules/grid/css/component";
    @import "../../bower_components/cacao/modules/container/css/component";
    @import "components/sidebar";

    /* State */
    @import "../../bower_components/cacao/modules/hero/css/state";
    @import "../../bower_components/cacao/modules/grid/css/state";


Javascript
----------

A module may contain all sorts of JS. You may tie these into your build system whichever way you see fit.

Any plugin/module initialization should be named `init.js`.


Images & Other Assets
---------------------

These resources should be tied into your build system whichever way you please.


Build Tasks
-----------

Some modules may contain a `Gruntfile.js` containing specific build tasks.

These can be imported into your project's Gruntfile. They make use of two global variables as shown below.

    module.exports = function(grunt) {

        grunt.initConfig({
            // Global build settings
            global: {
                // Project source files
                src: 'site',
                // Build destination
                dest: 'dist'
            }
        });

        // cacao modules
        require('./bower_components/cacao/modules/normalize/Gruntfile.js')(grunt);

        // tasks
        grunt.loadNpmTasks('grunt-contrib-copy');

    };


Dependencies
------------

Currently there is no dependency resolution. Dependencies are put into `bower.json` and left for the user to process either manually or via a build process.



