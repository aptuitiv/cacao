# Cacao

A set of CSS modules that provide a solid foundation for starting a new project.
Includes project scaffolding and build system for CSS, Javascript and image minification  using 
[Gulp](http://gulpjs.com/), [PostCSS](https://github.com/postcss/postcss) and [Nunjucks](https://mozilla.github.io/nunjucks/).

[How to pronounce Cacao](https://www.youtube.com/watch?v=kVSIkXL_Nmo).

This kit is based on the [SUIT CSS](https://suitcss.github.io) methodology
including [naming convention](http://github.com/suitcss/suit/blob/master/doc/naming-conventions.md), 
[style format](http://github.com/suitcss/suit/blob/master/doc/STYLE.md#css),
and [architectural principles](http://github.com/suitcss/suit/blob/master/doc/design-principles.md).


## Getting started

Before you can build the project there are some dependencies that need to be
installed. First install the system-wide dependencies listed below:

- [Node.js & npm](https://nodejs.org/) (`^0.12.0`)
- [Gulp](http://gulpjs.com/) (`^3.9.0`)

Once these are installed, clone this repository or download an archive.
Navigate to the project directory and install local project dependencies
with `npm install`. 

(Depending on how node was installed you may need to use `sudo npm install`)

Next simply run `gulp` to run through the initial build process and start the local server.

If you only want to build the files and you're not going to be using nunjucks and don't need the local server then you can simply run `gulp build`.

## Usage


There are several ways to use these modules in your project. 

The recommended method is to simply copy each file into your project as
necessary and import them in the same fashion as in the example below. This 
allows changes to be made easily and provides a better reference for 
developers diving into the stylesheet.

The quick and easy way is to install the entire repository through npm, 
then import and configure the modules in your stylesheet.

```
/* import the the entire package */
@import 'cacao';

/* or pick and choose modules */
@import 'cacao/lib/grid';
@import 'cacao/lib/utils/size';

/* configure modules */
@custom-media --utils-size-sm (600px);
@custom-media --utils-size-md (800px);
@custom-media --utils-size-lg (1000px);

:root {
    --Grid-cell-gutter: 24px;
}
```


## Building

Modules will need to be processed with PostCSS and an
assortment of PostCSS plugins. The
[suitcss-preprocessor](https://github.com/suitcss/preprocessor) can be used, 
or you can setup PostCSS yourself with the build system of your choice.

For an example of a simple build script see
[`test/build.js`](https://github.com/aptuitiv/cacao/blob/master/test/build.js)

The following PostCSS plugins are required:

- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
- [postcss-calc](https://github.com/postcss/postcss-calc)
- [autoprefixer](https://github.com/postcss/autoprefixer)
