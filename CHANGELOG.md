# 3.5.0 (Jan 19, 2018)

* Set the button active/focus state.
* Set the default state for the image wrapper to be inline-block so that the caption is under the image.

# 3.4.0 (Nov 6, 2017)

* Set a specific color for select input border.
* Added default table border collapse styles.
* Added basic print styles.

# 3.3.0 (Oct 16, 2017)

* Adjusted some of the font sizes and margins to be based of of rem and ems instead of pixels. 
The goal is to improve accessibility and relative font sizing.

## 3.2.0 (Oct 13, 2017)

* Added ImageWrapper and ImageCaption classes. 

## 3.1.0 (Oct 13, 2017)

* Moved the text input and select menu styles to be under the "forms" component.

## 3.0.0 (Oct 13, 2017)

* Changed the focus of Cacao to be just on the CSS. A Yeoman generator called [cacao-branchcms](https://github.com/aptuitiv/generator-cacao-branchcms) has been setup to bootstrap a site with Cacao, theme files, images and Javascript.

## 2.8.0 (July 25, 2017)

* Added notes about setting up a new site
* Removed the 'default' value for the Javascript tag since it's default one already.
* Updated packages and stylelint

## 2.7.0 (July 7, 2017)

* Fixed the order of the javascript in the footer.
* Added support for copying theme files as a gulp task.
* Updated stylelint.
* Form templates - moved the field description to be below the field and to be a smaller font size.
* Changed the default Javascript placement to be in the footer.
* Updated slick carousel to the latest version.
* Added drift-zoom library for zooming images when hovering over them.
* Added "xl" utility selector size.
* Changed the gulp-changed-in-place plugin for gulp-newer. That plugin works better with gulp-remember to combine all source files even if one changed. gulp-changed-in-place would only process the one changed file.

## 2.6.0 (May 27, 2017)

* Removed dist folder.
* Updated packages to latest versions.
* Included SVG files in the type of images to be processed.
* Changed build path to 'build' instead of 'dist'.
* Added theme files and moved all layout files to be built to build/theme/custom.
* Added Header/Footer as default style components.
* Updated navigation templates.
* Added Breadcrumb default style.
* Added list arrow styles.
* Updated default button styles.
* Added pagination styles.
* Added default footer navigation.
* Added default Content container styles.
* Added default background utility style.
* Added arrange component styles.
* Added form templates.
* Updated gulp watch task to use glob-watcher instead of gulp-batch as sometimes gulp-batch would stop recognizing changed files.
* Added new 5/3 constrain size.
* Added sidebar navigation.
* Updated the BEM linter utilitySelector to include “xs-“ as a utility size.
* Updated Constrain and FlexEmbed ratios to be consistent.
* Updated form styles.
* Added blog theme templates.
* Added store theme templates.
* Added ColumnList styles to convert an ul/ol list into columns.
* Added jQuery form plugin as part of the core forms javascript.
* Removed ap_drilldown_plugin.

## 2.5.0 (February 12, 2017)

* Changed '0%' to 'auto' for the flex grow utility classes as '0%' was causing issues in some versions of Safari.

## 2.4.0 (November 25, 2016)

* Added right margin to radio buttons and checkboxes.
* Added default styles for disabled inputs.

## 2.3.0 (November 16, 2016)

* Fixed nunjucks support.
* Added sample pages to the 'dist' directory to show different responsive navigation options.
* Added two built-in responsive navigation options in the src/styles/lib/components/navigation folder.

## 2.2.0 (November 9, 2016)

* Added responsive styles for the typography utility classes.
* Consolidated the dropdown and mainnav navigation components into one "navigation" component. 
* Added margin gutter utility classes.
* Added responsive styles for all the padding utility classes.
* Formatted code to have consistent line indents.
* Added "u-block" responsive styles.
* Added size12of12 as an alternate full width size class.

## 2.1.0 (October 10, 2016)

* Added left/right padding utilities.
* Change the u-linkClean class to keep the link "clean" on hover.

## 2.0.0 (September 26, 2016)

* Combined Cacao and Cacao Cracker together to make it easier to get a project started
* Added some additional documentation

## 1.4.0 (September 18, 2016)

* Added Form component for errors, labels and required elements
* Added Message component for success and error messages

## 1.3.0 (September 9, 2016)

* Added telephone link styles
* Changed container width from 960px to 1200px
* Added extra large gutter sizes
* Added utility text size classes
* Changed default table column and header styles to have padding and top vertical alignment
* Added config file to hold common breakpoints 
* Added responsive margin utility classes
* Added arrow to the "Back" link for the mobile nav menu
* Added extra small size utility classes

## 1.2.1 (May 26, 2016)

* Updated style lint to conform to version 4.5 where some rules were deprecated and renamed.

## 1.2.0 (March 8, 2016)

* Updated style lint max lines rule

## 1.1.0 (February 8, 2016)

* Added: visual test styles and tests for components

## 1.0.0 (February 2, 2016)

* Initial 1.0 release
