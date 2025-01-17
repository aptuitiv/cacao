# Changelog

## 7.0.0 (January 6, 2025)

- **Breaking change**: Added fix for the grid using gutters. When building grids using the column size and gutter classes, the CSS needs to know the number of columns in the grid in order to correctly adjust the column widths for the gutters. This update fixes that. It requires updating grids to have additional classes to set the number of columns.

## 6.4.0 (November 5, 2024)

- Added `!important` to display styles. This was done so that the display styles are always set and can’t be overridden by more specific site styles.
- Added support for CSS selectors with psuedo-classes.

## 6.3.0 (October 3, 2024)

- Updated v6 conversion scripts.
- Added more documentation.
- Added scripts to help convert from v3.
- Included `grid` in the components that get media query class versions.

## 6.2.0 (August 22, 2024)

- Added combined imports for the following modules.
  - aspect
  - display
  - grid-column
  - gutter (renamed from `gutter.css` to `combined-import.css`)
  - height
  - margin (renamed from `margin.css` to `combined-import.css`)
  - padding (renamed from `padding.css` to `combined-import.css`)
  - pull
  - push
  - typography
  - width

## 6.1.0 (August 22, 2024)

- Updated the internal build scripts.
- Documentation updates.
- **Breaking change**: Renamed the "links" folder to "link" to be more consistent with the other folders that are all singular.
- **Breaking change**: Added variables for gutter, margin, and padding classes. You will now need to import the variable files.
- Added additional sizes for gutter, margin, and padding classes. There are now 15 size options (16, if you include the 0 option).
- **Breaking change**: Added variables for the image classes. You will now need to import the variable file.
- Updated the `image-left` and `image-right` classes to use `max-width` instead of `width`. This helps smaller images to not get stretched.

## 6.0.0 (August 19, 2024)

- Added font-style classes.
- Added height classes.
- Removed the `size` classes as there is now `height` and `width` classes.
- **Breaking change**: Renamed the media queries. Also renamed the `config.css` file to `media.css`. See `media.css` for the new media queries.
- Added additional media query variables based on [Open Props](https://open-props.style/#media-queries) and additional size media query variables.
- Added a build process for the CSS files.
- **Breaking change**: The imports in projects now use the `dist` folder. Added support for importing with the project name. Instead of `../../node_modules/cacao/dist/media.css`, the import can now be `cacao-css/dist/media.css`.
- Added scripts to help migrate to version 6.

### Version 6.0.0 upgrade scripts

Run the following commands in the base directory of your project. Replace the file and directory paths if necessary.

```bash
cacao-convert-v6 breakpoints -d src/css
cacao-convert-v6 classes -d src/templates
cacao-convert-v6 imports -f src/css/main.css
```

## 5.5.0 (August 14, 2024)

- Fixed the vertical gutter styling to only affect the row-gap. Previously it was setting the `—gap` variable. This would affect the margin on an element if it also used the “grid” class because that used `—gap` to set the margin. That was not supposed to happen.
  
## 5.4.0 (August 2, 2024)

- Removed aspect-ratio style from `embed`. Because this is set and the embed styles are typically loaded after the aspect ratio styles, this aspect-ratio style overrode the aspect-ratio class.

## 5.3.0 (August 1, 2024)

- Added "auto" width classes.

## 5.2.0 (August 1, 2024)

- Added width styles.

## 5.1.0 (August 1, 2024)

- Added inline-block breakpoint styles.
- Added position styles.

## 5.0.0 (July 18, 2024)

- Added print styles.
- Added push and pull classes.
- Added `xs` and `xxl` breakpoint sizes.
- **Breaking change**: Added responsive styles for aspect ratios. The imports for the `src/aspect` files needs to be updated.
- **Breaking change**: Moved `embed` file to a "core" folder in case in the future we add responsive styles. The imports for the `src/embed` files need to be updated.
- **Breaking change**: Added responsive styles for object fit utilities. The imports for the `src/fit` files needs to be updated.
- **Breaking change**: Moved `image` file to a "core" folder in case in the future we add responsive styles. The imports for the `src/image` files need to be updated.
- **Breaking change**: Moved `layout` file to a "core" folder in case in the future we add responsive styles. The imports for the `src/layout` files need to be updated.
- **Breaking change**: Moved `links` file to a "core" folder in case in the future we add responsive styles. The imports for the `src/links` files need to be updated.
- **Breaking change**: Moved `spacing` file to a "core" folder in case in the future we add responsive styles. The imports for the `src/spacing` files need to be updated.
- **Breaking change**: Added responsive styles for typography. The imports for the `src/typography` files needs to be updated.
- **Breaking change**: Moved the `reset/reset.css` and `base/base.css` file to the root folder. The imports will need to be adjsuted in your code.

### Migration

Compare the `imports.css` file to your own `imports.css` file and update accordingly.

## 4.6.0 (Jul 15, 2024)

- Added `col-fill` styles for a grid column that will fill the remaining space.
  
## 4.5.0 (Jul 10, 2024)

- Set embeds not to shrink if they are in a flex container.
- Removed the overflow hidden on grid columns.
  
## 4.4.0 (Feb 23, 2024)

- Added `text-start`, `text-end`, and `text-justify` classes.

## 4.3.0 (Jan 25, 2024)

- Added `inline-block` class to set an element as `inline-block`

### Breaking change

- Renamed `flex-inline` to `inline-flex`. This was done to better match the actual style.

## 4.2.2 (Dec 21, 2023)

- Fixed the `image-left` and `image-right` classes to have the correct max width.

## 4.2.1 (Dec 21, 2023)

- Fixed the `image-left` and `image-right` classes to always have a bottom margin.

## 4.2.0 (Dec 19, 2023) - Breaking change

- Fixed the order of import examples. The gutter styles have to come after grid styles.
- Breaking Change - Changed the aspect ratio styles into two separate files. `aspect/horizontal.css` and `aspect/vertical.css`. Imports will need to be updated. Also added new aspect ratios.

## 4.1.0 (Nov 30, 2023)

- Added typography word break and word wrap styles.
- Added clearfix utility.

## 4.0.0 (Nov 6, 2023)

- Changed default breakpoints to be mobile first.
- Changed breakpoints to use em instead of px.
- Updated utility classes names to be more succinct.
- Removed many rarely used classes.
- Removed all component classes. You should provide you own components now for more flexibility.

## 3.21.0 (May 11, 2023)

- Updated b and strong to actually be bold.

## 3.20.0 (April 28, 2023)

- Take 3.... Updated more hover states to only be applied if hover is supported by the device.

## 3.19.0 (April 28, 2023)

- Take 2.... Updated more hover states to only be applied if hover is supported by the device.

## 3.18.0 (April 28, 2023)

- Updated hover states to only be applied if hover is supported by the device.

## 3.17.0 (July 28, 2022)

- Added u-size1of1 as an alternate class to u-sizeFull.

## 3.16.0 (July 21, 2022)

- Added `Image--fullWidth` class to make an image expand to full width.

## 3.15.0 (May 12, 2022)

- Added global box sizing style. Removed `box-sizing` from individual components.
- Added ImageConstrain class to add size constraints to images.
- Added portrait size options to the `Constrain` classes.

## 3.14.0 (May 12, 2022)

- Removed the small screen font styles that cause the font to be smaller on small screens. This is no longer necessary with high resolution mobile phones.

## 3.13.0 (December 17, 2021)

- Added smooth scrolling on the `<html>` tag by default.

## 3.12.0 (December 3, 2021)

- Added vertical margin spacing utilities.
- Added full width/height utilities.

## 3.11.0 (Sept 21, 2021)

- Updated .Button class to use `display: inline-flexbox` instead of `display: inline`
- Updated .TextInput to use `small`, `medium` and `large` class sizes
- Added responsive flexbox classes
- Added `margin-right` utility classes
- Added `margin-left` utility classes
- Fixed `u-textBreak` so that it uses `overflow-wrap` instead of `word-wrap`

## 3.10.0 (July 28, 2021)

Updated ColumnList--noStyle to also remove the left padding on the list.

## 3.9.0 (April 1, 2021)

- Removed the inline block fallback styles for the Grid component since Flexbox is widely supported in browsers now.

## 3.8.0 (April 1, 2021)

Skipped because this tag already accidentally existed.

## 3.7.0 (Aug 19, 2020)

- Updated the Gulp configuration to use modern techniques.
- Added fallback styles for the select menu text when the select menu is focused.

## 3.6.1 (Nov 19, 2018)

- Fixed font issue for select menus

## 3.6.0 (Jan 19, 2018)

- Added auto size utility

## 3.5.0 (Jan 19, 2018)

- Set the button active/focus state.
- Set the default state for the image wrapper to be inline-block so that the caption is under the image.

## 3.4.0 (Nov 6, 2017)

- Set a specific color for select input border.
- Added default table border collapse styles.
- Added basic print styles.

## 3.3.0 (Oct 16, 2017)

- Adjusted some of the font sizes and margins to be based of of rem and ems instead of pixels.
    The goal is to improve accessibility and relative font sizing.

## 3.2.0 (Oct 13, 2017)

- Added ImageWrapper and ImageCaption classes.

## 3.1.0 (Oct 13, 2017)

- Moved the text input and select menu styles to be under the "forms" component.

## 3.0.0 (Oct 13, 2017)

- Changed the focus of Cacao to be just on the CSS. A Yeoman generator called [cacao-branchcms](https://github.com/aptuitiv/generator-cacao-branchcms) has been setup to bootstrap a site with Cacao, theme files, images and Javascript.

## 2.8.0 (July 25, 2017)

- Added notes about setting up a new site
- Removed the 'default' value for the Javascript tag since it's default one already.
- Updated packages and stylelint

## 2.7.0 (July 7, 2017)

- Fixed the order of the javascript in the footer.
- Added support for copying theme files as a gulp task.
- Updated stylelint.
- Form templates - moved the field description to be below the field and to be a smaller font size.
- Changed the default Javascript placement to be in the footer.
- Updated slick carousel to the latest version.
- Added drift-zoom library for zooming images when hovering over them.
- Added "xl" utility selector size.
- Changed the gulp-changed-in-place plugin for gulp-newer. That plugin works better with gulp-remember to combine all source files even if one changed. gulp-changed-in-place would only process the one changed file.

## 2.6.0 (May 27, 2017)

- Removed dist folder.
- Updated packages to latest versions.
- Included SVG files in the type of images to be processed.
- Changed build path to 'build' instead of 'dist'.
- Added theme files and moved all layout files to be built to build/theme/custom.
- Added Header/Footer as default style components.
- Updated navigation templates.
- Added Breadcrumb default style.
- Added list arrow styles.
- Updated default button styles.
- Added pagination styles.
- Added default footer navigation.
- Added default Content container styles.
- Added default background utility style.
- Added arrange component styles.
- Added form templates.
- Updated gulp watch task to use glob-watcher instead of gulp-batch as sometimes gulp-batch would stop recognizing changed files.
- Added new 5/3 constrain size.
- Added sidebar navigation.
- Updated the BEM linter utilitySelector to include “xs-“ as a utility size.
- Updated Constrain and FlexEmbed ratios to be consistent.
- Updated form styles.
- Added blog theme templates.
- Added store theme templates.
- Added ColumnList styles to convert an ul/ol list into columns.
- Added jQuery form plugin as part of the core forms javascript.
- Removed ap_drilldown_plugin.

## 2.5.0 (February 12, 2017)

- Changed '0%' to 'auto' for the flex grow utility classes as '0%' was causing issues in some versions of Safari.

## 2.4.0 (November 25, 2016)

- Added right margin to radio buttons and checkboxes.
- Added default styles for disabled inputs.

## 2.3.0 (November 16, 2016)

- Fixed nunjucks support.
- Added sample pages to the 'dist' directory to show different responsive navigation options.
- Added two built-in responsive navigation options in the src/styles/lib/components/navigation folder.

## 2.2.0 (November 9, 2016)

- Added responsive styles for the typography utility classes.
- Consolidated the dropdown and mainnav navigation components into one "navigation" component.
- Added margin gutter utility classes.
- Added responsive styles for all the padding utility classes.
- Formatted code to have consistent line indents.
- Added "u-block" responsive styles.
- Added size12of12 as an alternate full width size class.

## 2.1.0 (October 10, 2016)

- Added left/right padding utilities.
- Change the u-linkClean class to keep the link "clean" on hover.

## 2.0.0 (September 26, 2016)

- Combined Cacao and Cacao Cracker together to make it easier to get a project started
- Added some additional documentation

## 1.4.0 (September 18, 2016)

- Added Form component for errors, labels and required elements
- Added Message component for success and error messages

## 1.3.0 (September 9, 2016)

- Added telephone link styles
- Changed container width from 960px to 1200px
- Added extra large gutter sizes
- Added utility text size classes
- Changed default table column and header styles to have padding and top vertical alignment
- Added config file to hold common breakpoints
- Added responsive margin utility classes
- Added arrow to the "Back" link for the mobile nav menu
- Added extra small size utility classes

## 1.2.1 (May 26, 2016)

- Updated style lint to conform to version 4.5 where some rules were deprecated and renamed.

## 1.2.0 (March 8, 2016)

- Updated style lint max lines rule

## 1.1.0 (February 8, 2016)

- Added: visual test styles and tests for components

## 1.0.0 (February 2, 2016)

- Initial 1.0 release
