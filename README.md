# Cacao

A set of CSS modules that provide a solid foundation for starting a new project.
Includes project scaffolding and build system for CSS, Javascript and image minification  using 
[Gulp](http://gulpjs.com/), [PostCSS](https://github.com/postcss/postcss) and [Nunjucks](https://mozilla.github.io/nunjucks/).

[How to pronounce Cacao](https://www.youtube.com/watch?v=kVSIkXL_Nmo).

Cacao stylesheets are based on the [SUIT CSS](https://suitcss.github.io) methodology
including [naming convention](http://github.com/suitcss/suit/blob/master/doc/naming-conventions.md), 
[style format](http://github.com/suitcss/suit/blob/master/doc/STYLE.md#css),
and [architectural principles](http://github.com/suitcss/suit/blob/master/doc/design-principles.md).


## First time usage

### Install Gulp and NodeJS globally if you have not already

Before you can build the project there are some dependencies that need to be
installed. First install the system-wide dependencies listed below:

- [Node.js & npm](https://nodejs.org/) (`^0.12.0`)
- [Gulp](http://gulpjs.com/) (`^3.9.0`)

## Getting started

#### 1) Setup your project folder on your machine.

#### 2) Download the Zip file for this repository and unzip into your project folder. 
`Make sure that you can view hidden files and that the .stylelintrc file is included.`

Or, you can clone the repository and use that as your starting base for your website project. 

#### 3) Navigate to the project directory and install local project dependencies.

Use the command line on your computer to navigate to your projects directory and run the following: 

```
npm install
``` 

Depending on how node was installed you may need to use: 

```
sudo npm install
```

This will install Gulp, download linked projects (like jQuery) and setup the necessary node components to process CSS, combine and uglify Javascript and minify images (amoung other things). 

If you are using [WebStorm](https://www.jetbrains.com/webstorm/) then you can simply start a new project using your projects folder, open the Terminal tab in Webstorm and run the above command. 

#### 4) Do an initial build

If you are using [Nunjucks](https://mozilla.github.io/nunjucks/) to build the HTML and need the local server, or you are using another technique to build a local version of the site then run:

````
gulp
````

That will build the CSS, Javascript and HTML, minify the images, copy linked resources (like [Slick](http://kenwheeler.github.io/slick/) and [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)),
and start the local web server.

The built resources are located in the new 'dist' folder. 

If you are building the site within a CMS like [BranchCMS](http://www.branchcms.com) or you don't need the local web server then you can run 

````
gulp build
````

That will build the CSS, Javascript and HTML, minify the images and copy linked resources (like [Slick](http://kenwheeler.github.io/slick/) and [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)).
Essentially everything the default task does except start the local web server.


## Working with CSS

[PostCSS](http://postcss.org/) is used to process the CSS files and compile them together into one CSS file at `dist/layout/css/index.css`.

Cacao stylesheets are based on the [SUIT CSS](https://suitcss.github.io) methodology
including [naming convention](http://github.com/suitcss/suit/blob/master/doc/naming-conventions.md), 
[style format](http://github.com/suitcss/suit/blob/master/doc/STYLE.md#css),
and [architectural principles](http://github.com/suitcss/suit/blob/master/doc/design-principles.md).

The idea is that you have very focused stylesheets for individual components instead of having one large stylesheet.

The following is the folder structure for stylesheets within the `src\styles` folder:
 ````
 index.css
 L lib
   L config.css
   L base
   L components
   L utils
````

The `index.css` file imports the `lib\config.css` file as well as the `index.css` files within the `lib\base`, `lib\components` and `lib\utils` folders.

### lib\config.css

The `lib\config.css` file is where global media query breakpoints and global configuration variables are located. 

By default just a few media query breakpoints are setup:

````
@custom-media --c-bp-xl (max-width: 1200px);
@custom-media --c-bp-lg (max-width: 1050px);
@custom-media --c-bp-md (max-width: 800px);
@custom-media --c-bp-sm (max-width: 600px);
@custom-media --c-bp-xs (max-width: 425px);
````
 
You would use those in your CSS like so:

````
@media (--c-bp-lg) {
    .Header {
        border: none;
    }
}
````

An example usage of global variables would be to setup common colors used so that you don't have to type the same color over and over again. It also makes it convenient to have one place
to change a color if necessary.

````
:root {
    --c-blue: #15bdde;
    --c-green: #64a70b;
    --c-orange: #dc4405;
    --c-teal: #009483;
}
````

You could then use that variable in your CSS like so:

````
.Button {
    background-color: var(--c-blue);
}
````

### Base

The base directory contains the following stylesheets:

````
base.css
code.css
forms.css
index.css
tables.css
typography.css
````

`index.css` imports the other stylesheets within this folder as well as [Normalize.css](https://necolas.github.io/normalize.css/).

The styles in the base folder are the general styles for elements. The direct element tag is used as the selector. 

#### base.css

base.css includes the basic styles for `<body>` as well as images, iframe and other elements. 

Other than changing the body background this file isn't changed much.

#### code.css

code.css includes basic styles for `<code>`, `<kdb>`, `<pre>` and `<samp>` tags.

#### forms.css

forms.css includes basic styles for `<fieldset>`, `<label>`, `<input>`, `<button>`, `<textarea>` and other form related tags.

This file is not changed much. 

#### tables.css

tables.css includes basic styles for for tables, table columns and table headings.
 
 This files is not changed much.
 
#### typography.css

The typography.css file is the one file in the `base` directory that you would most likely change. 

It contains the typographical styles for most elements. 

For the most part you can simply change the values for the variables at the top.

````
:root {
    --base-typography-color: #333;
    --base-typography-fontFamily: sans-serif;
    --base-typography-fontSize: 15px;
    --base-typography-fontWeight: 400;
    --base-typography-hrule-width: 1px;
    --base-typography-letterSpacing: 0;
    --base-typography-lineHeight: 20px;
    --base-typography-spacing: var(--base-typography-lineHeight);
}

:root {
    --base-typography-link-color: #000;
    --base-typography-link-colorHover: var(--base-typography-link-color);
    --base-typography-link-decoration: underline;
    --base-typography-link-decorationHover: underline;
}

/* headings */

:root {
    --base-typography-h1-fontSize: 32px;
    --base-typography-h2-fontSize: 28px;
    --base-typography-h3-fontSize: 24px;
    --base-typography-h4-fontSize: 20px;
    --base-typography-h5-fontSize: 18px;
    --base-typography-h6-fontSize: 15px;
    --base-typography-h1-lineHeight: 40px;
    --base-typography-h2-lineHeight: 30px;
    --base-typography-h3-lineHeight: 33px;
    --base-typography-h4-lineHeight: 30px;
    --base-typography-h5-lineHeight: 20px;
    --base-typography-h6-lineHeight: 20px;
    --base-typography-heading-color: inherit;
    --base-typography-heading-fontFamily: sans-serif;
    --base-typography-heading-fontWeight: 700;
    --base-typography-heading-letterSpacing: 0;
}
````

Or, if necessary you could edit or add styles directly further down in the stylesheet. 

Keep in mind that this is supposed to be general styles for HTML elements. You would not use class selectors in any of the `base` stylesheets. That would take place either in the utility classes or within components.

### Components

The `components` directory is where you will do most of your work with a site. 

This directory has a number of included components for things like buttons, dropdown and main navigation bars, text fields, images, and grid. 

Many of the components have README files within their directory that explains what they are and how to use them.

[View tests for components](http://aptuitiv.github.io/cacao/test/).

#### Adding a new component

In this example we're going to add a "header" component to hold the styles for the header section of the site.

##### 1) To add a new component first create a directory within the `components` directory that matches the name of the component. 

Keep in mind that components follow the [naming convention](http://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) of [SUIT CSS](https://suitcss.github.io).

The component folder should always be lowercase.

In our example the folder would be `header`.

##### 2) Add a stylesheet within your component folder that is the same name as your component.

In our example the stylesheet would be called `header.css`. 

##### 3) Add a stylesheet within your component folder called index.css and import the other stylesheet.

In our example the index.css file would include the following:

````
@import './header';
````

You can include ".css" after "header" if you want but it's not necessary.

##### 4) Add an import into `components\index.css` to import the new component.

In our example you would add the following within `components\index.css`:

````
@import './header';
````

Since the 'header' directory contains an `index.css` file then that import statement will import the `index.css` file. It's the same as writing
 
````
@import './header/index.css';
````

##### 5) Add an initial comment to your component stylesheet

It's always good to add a comment at the top of your component stylesheet to describe what it is.

The very first comment in the file should follow this structure:

````
/* =========================================================================== *\
    Description of component here
\* =========================================================================== */
````

##### 6) Add the `Define` statement to your component stylesheet 

To enforce the SuitCSS [naming convention](http://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) we add a special comment near the top of the file to set what the
base class name should be within this file.

In our `header` example we would have the following code.

````
/** @define Header */
````

This will cause the CSS parser to show you a warning in the terminal when the CSS is processed if you are using an invalid selector.

Cacao uses the [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) plugin to enforce naming rules. 

The combination of steps 5 and 6 would result in the following code at the top of the header.css file:

````
/* =========================================================================== *\
    Page header styles. The section of the page above the main navigation.
\* =========================================================================== */


/** @define Header */

````

You would then add your CSS below all that.

#### Using an invalid selector

If for some reason you need to use a selector in your stylesheet that would not be valid you can add the following comment on the line immediately before your selector:

````
/* postcss-bem-linter: ignore */
````

That only applies to one selector so you would need to add that before each selector that is not valid.

````
/* postcss-bem-linter: ignore */
.invalid-selector {
    color: red;
}

/* postcss-bem-linter: ignore */
.another-invalid-selector {
    color: blue;
}
````

### Utils

The `utils` directory includes all of the utility classes. 

You would use these to adjust font styles, set grid column sizes, adjust margins apply flex styles and change element layouts.

These classes are useful because you can use a combination of them to set a HTML element's style instead of creating a bunch of small components. 

**If you find yourself adding a lot of utlity classes to an element (other than size classes on Grid columns) then you may want to create a new component instead.**

Typically the styles within this directory are not changed much, if at all.

#### align

Adjust the vertical alignment of elements.

#### display

Set the `display` style for elements. Includes styles that can be used at different breakpoints.

#### flex

Apply common flexbox styles to an element.

#### image

Set an image to be full width.

#### layout

Floats and clearfix.

#### link

Adjust how links are styled. Useful for adjusting the `text-decoration` style for links.

#### margin

Adjust the top and/or bottom margins. Includes styles that can be used at different breakpoints.

#### padding

Adjust the top and/or bottom padding. 

Adjust the horizontal padding with gutter utility classes.

#### position

Adjust the `position` style for elements.

#### pull

Pull an element to the left. Includes styles that can be used at different breakpoints.

This is commonly used with the Grid component.

#### push

Push an element to the right. Includes styles that can be used at different breakpoints.

This is commonly used with the Grid component.

#### radius

Adjust the `border-radius` style for elements.

#### size

Adjust the size of an element. Includes styles that can be used at different breakpoints.

This is commonly used with the Grid component, although, you can use it with any `block` or `inline-block` element.

To set an element to be full width use:

````
.u-sizeFull
````

or it's breakpoint versions:

````
.u-lg-sizeFull
.u-md-sizeFull
.u-sm-sizeFull
.u-xs-sizeFull
````

#### typography

* Set the `text-transform` style for elements
* Set the `text-align` style for elements (includes styles that can be used at different breakpoints)
* Set the `font-weight` style for elements
* Set the font size and line height styles with different pre-defined utility classes
* Other miscellaneous text styles like kerning, word wrapping and truncating

## Setting up a new website

First navigate via the command line to the folder where the new site will be located.
Clone the Cacao directory to a folder with the website name. (Replace "WEBSITE_NAME" with the folder name for your website)

`git clone https://github.com/aptuitiv/cacao.git WEBSITE_NAME`

Move into the website directory

`cd WEBSITE_NAME`

Rename the Cacao remote from "origin" to "cacao"

`git remote rename origin cacao`

Add the the remote repository for the actual website. In this case we're using BitBucket. Replace "YOUR-USERNAME" with your BitBucket username

`git remote add origin https://YOUR-USERNAME@bitbucket.org/YOUR-ACCOUNT/YOUR-WEBSITE-REPOSITORY.git`

Confirm that the remotes are set up correctly.

`git remote -v`

That should show you something like this:

```
cacao   https://github.com/aptuitiv/cacao.git (fetch)
cacao   https://github.com/aptuitiv/cacao.git (push)
origin  https://YOUR-USERNAME@bitbucket.org/YOUR-ACCOUNT/YOUR-WEBSITE-REPOSITORY.git (fetch)
origin  https://OUR-USERNAME@bitbucket.org/YOUR-ACCOUNT/YOUR-WEBSITE-REPOSITORY.git (push)
```

Push to the theme repository

`git push -u origin master`

Now you can set up Sourcetree. Create a new repository from a local repository.
View local repository browser.
Click "+ New"
Click "Add Exiting Local Repository"
Navigate to the theme folder. Click on the folder name and click "Open"
