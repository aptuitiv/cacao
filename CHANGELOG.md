# Changelog
<!-- markdownlint-disable MD024 -->

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [7.1.0] - 2025-01-30

### Added

- Added font size styles.

## [7.0.0] - 2025-01-06

### Changed

- **Breaking change**: Added fix for the grid using gutters. When building grids using the column size and gutter classes, the CSS needs to know the number of columns in the grid in order to correctly adjust the column widths for the gutters. This update fixes that. It requires updating grids to have additional classes to set the number of columns.

## [6.4.0] - 2024-11-05

### Added

- Added `!important` to display styles. This was done so that the display styles are always set and can’t be overridden by more specific site styles.
- Added support for CSS selectors with psuedo-classes.

## [6.3.0] - 2024-10-03

### Added

- Added more documentation.
- Added scripts to help convert from v3.

### Updated

- Updated v6 conversion scripts.
- Included `grid` in the components that get media query class versions.

## [6.2.0] - 2024-08-22

### Added

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

## [6.1.0] - 2024-08-22

### Added

- Added additional sizes for gutter, margin, and padding classes. There are now 15 size options (16, if you include the 0 option).

### Changed

- Updated the internal build scripts.
- Documentation updates.
- **Breaking change**: Renamed the "links" folder to "link" to be more consistent with the other folders that are all singular.
- **Breaking change**: Added variables for gutter, margin, and padding classes. You will now need to import the variable files.
- **Breaking change**: Added variables for the image classes. You will now need to import the variable file.
- Updated the `image-left` and `image-right` classes to use `max-width` instead of `width`. This helps smaller images to not get stretched.

## [6.0.0] - 2024-08-19

### Added

- Added font-style classes.
- Added height classes.
- Added additional media query variables based on [Open Props](https://open-props.style/#media-queries) and additional size media query variables.
- Added a build process for the CSS files.
- Added scripts to help migrate to version 6.

### Changed

- **Breaking change**: Renamed the media queries. Also renamed the `config.css` file to `media.css`. See `media.css` for the new media queries.
- **Breaking change**: The imports in projects now use the `dist` folder. Added support for importing with the project name. Instead of `../../node_modules/cacao/dist/media.css`, the import can now be `cacao-css/dist/media.css`.

### Removed

- Removed the `size` classes as there is now `height` and `width` classes.

### Migration

Run the following commands in the base directory of your project. Replace the file and directory paths if necessary.

```bash
cacao-convert-v6 breakpoints -d src/css
cacao-convert-v6 classes -d src/templates
cacao-convert-v6 imports -f src/css/main.css
```

## [5.5.0] - 2024-08-14

### Fixed

- Fixed the vertical gutter styling to only affect the row-gap. Previously it was setting the `—gap` variable. This would affect the margin on an element if it also used the “grid” class because that used `—gap` to set the margin. That was not supposed to happen.

## [5.4.0] - 2024-08-02

### Removed

- Removed aspect-ratio style from `embed`. Because this is set and the embed styles are typically loaded after the aspect ratio styles, this aspect-ratio style overrode the aspect-ratio class.

## [5.3.0] - 2024-08-01

### Added

- Added "auto" width classes.

## [5.2.0] - 2024-08-01

### Added

- Added width styles.

## [5.1.0] - 2024-08-01

### Added

- Added inline-block breakpoint styles.
- Added position styles.

## [5.0.0] - 2024-07-18

### Added

- Added print styles.
- Added push and pull classes.
- Added `xs` and `xxl` breakpoint sizes.
- **Breaking change**: Added responsive styles for aspect ratios. The imports for the `src/aspect` files needs to be updated.
- **Breaking change**: Added responsive styles for object fit utilities. The imports for the `src/fit` files needs to be updated.
- **Breaking change**: Added responsive styles for typography. The imports for the `src/typography` files needs to be updated.

### Changed

- **Breaking change**: Moved `embed` file to a "core" folder in case in the future we add responsive styles. The imports for the `src/embed` files need to be updated.
- **Breaking change**: Moved `image` file to a "core" folder in case in the future we add responsive styles. The imports for the `src/image` files need to be updated.
- **Breaking change**: Moved `layout` file to a "core" folder in case in the future we add responsive styles. The imports for the `src/layout` files need to be updated.
- **Breaking change**: Moved `links` file to a "core" folder in case in the future we add responsive styles. The imports for the `src/links` files need to be updated.
- **Breaking change**: Moved `spacing` file to a "core" folder in case in the future we add responsive styles. The imports for the `src/spacing` files need to be updated.
- **Breaking change**: Moved the `reset/reset.css` and `base/base.css` file to the root folder. The imports will need to be adjsuted in your code.

### Migration

Compare the `imports.css` file to your own `imports.css` file and update accordingly.

## [4.6.0] - 2024-07-15

### Added

- Added `col-fill` styles for a grid column that will fill the remaining space.

## [4.5.0] - 2024-07-10

### Changed

- Set embeds not to shrink if they are in a flex container.

### Removed

- Removed the overflow hidden on grid columns.

## [4.4.0] - 2024-02-23

### Added

- Added `col-fill` styles for a grid column that will fill the remaining space.

## [4.3.0] - 2024-01-25

### Added

- Added `inline-block` class to set an element as `inline-block`

### Changed

- **Breaking change**: Renamed `flex-inline` to `inline-flex`. This was done to better match the actual style.

## [4.2.2] - 2023-12-21

### Fixed

- Fixed the `image-left` and `image-right` classes to have the correct max width.

## [4.2.1] - 2023-12-21

### Fixed

- `image-left` and `image-right` classes now always have a bottom margin.

## [4.2.0] - 2023-12-19

### Changed

- **Breaking change**: Changed the aspect ratio styles into two separate files. `aspect/horizontal.css` and `aspect/vertical.css`. Imports will need to be updated. Also added new aspect ratios.

### Fixed

- Fixed the order of import examples. The gutter styles have to come after grid styles.

## [4.1.0] - 2023-11-30

### Added

- Added typography word break and word wrap styles.
- Added clearfix utility.

## [4.0.0] - 2023-11-06

### Changed

- Changed default breakpoints to be mobile first.
- Changed breakpoints to use em instead of px.
- Updated utility classes names to be more succinct.

### Removed

- Removed many rarely used classes.
- Removed all component classes. You should provide you own components now for more flexibility.

## [3.21.0] - 2023-05-11

### Changed

- Updated b and strong to actually be bold.

## [3.20.0] - 2023-04-28

### Changed

- Take 3.... Updated more hover states to only be applied if hover is supported by the device.

## [3.19.0] - 2023-04-28

### Changed

- Take 2.... Updated more hover states to only be applied if hover is supported by the device.

## [3.18.0] - 2023-04-28

### Changed

- Hover states only apply if hover is supported.

## [3.17.0] - 2022-07-28

### Added

- `u-size1of1` as an alternate class to `u-sizeFull`.

## [3.16.0] - 2022-07-21

### Added

- `Image--fullWidth` class for full-width images.

## [3.15.0] - 2022-05-12

### Added

- Global box-sizing style.
- Added ImageConstrain class to add size constraints to images.
- Added portrait size options to the `Constrain` classes.

### Removed

- Removed `box-sizing` from individual components.

## [3.14.0] - 2022-05-12

### Removed

- Removed the small screen font styles that cause the font to be smaller on small screens. This is no longer necessary with high resolution mobile phones.

## [3.13.0] - 2021-12-17

### Added

- Added smooth scrolling on the `<html>` tag by default.

## [3.12.0] - 2021-12-03

### Added

- Added vertical margin spacing utilities.
- Added full width/height utilities.

## [3.11.0] - 2021-09-21

### Added

- Added responsive flexbox classes
- Added `margin-right` utility classes
- Added `margin-left` utility classes
 
### Changed

- Updated .Button class to use `display: inline-flexbox` instead of `display: inline`
- Updated .TextInput to use `small`, `medium` and `large` class sizes

### Fixed

- Fixed `u-textBreak` so that it uses `overflow-wrap` instead of `word-wrap`
  
## [3.10.0] - 2021-07-28

### Changed

- Updated ColumnList--noStyle to also remove the left padding on the list.

## [3.9.0] - 2021-04-01

### Removed

- Removed the inline block fallback styles for the Grid component since Flexbox is widely supported in browsers now.

## [3.8.0] - 2021-04-01

Skipped because this tag already accidentally existed.

## [3.7.0] - 2020-08-19

### Added

- Added fallback styles for the select menu text when the select menu is focused.

### Changed

- Updated the Gulp configuration to use modern techniques.

## [3.6.1] - 2018-11-19

### Fixed

- Fixed font issue for select menus

## [3.6.0] - 2018-01-19

### Added

- Added auto size utility

## [3.5.0] - 2018-01-19

### Changed

- Set the button active/focus state.
- Set the default state for the image wrapper to be inline-block so that the caption is under the image.

## [3.4.0] - 2017-11-06

### Added

- Added default table border collapse styles.
- Added basic print styles.

### Changed

- Set a specific color for select input border.

## [3.3.0] - 2017-10-16

### Changed

- Adjusted some of the font sizes and margins to be based of of rem and ems instead of pixels. The goal is to improve accessibility and relative font sizing.

## [3.2.0] - 2017-10-13

### Added

- Added ImageWrapper and ImageCaption classes.

## [3.1.0] - 2017-10-13

### Changed

- Moved the text input and select menu styles to be under the "forms" component.

## [3.0.0] - 2017-10-13

### Changed

- Changed the focus of Cacao to be just on the CSS. A Yeoman generator called [cacao-branchcms](https://github.com/aptuitiv/generator-cacao-branchcms) has been setup to bootstrap a site with Cacao, theme files, images and Javascript.

## [2.8.0] - 2017-07-25

### Added

- Notes about setting up a new site.

### Changed

- Updated packages and stylelint.

### Removed

- Removed the 'default' value for the Javascript tag since it's default one already.

## [2.7.0] - 2017-07-07

### Changed

### Added

- Added support for copying theme files as a gulp task.
- Added drift-zoom library for zooming images when hovering over them.
- Added "xl" utility selector size.

### Changed

- Updated stylelint.
- Form templates - moved the field description to be below the field and to be a smaller font size.
- Changed the default Javascript placement to be in the footer.
- Updated slick carousel to the latest version.
- Changed the gulp-changed-in-place plugin for gulp-newer. That plugin works better with gulp-remember to combine all source files even if one changed. gulp-changed-in-place would only process the one changed file.

### Fixed

- Fixed the order of the javascript in the footer.

## [2.6.0] - 2017-05-27

### Added

- Added blog theme templates.
- Added store theme templates.
- Added ColumnList styles to convert an ul/ol list into columns.
- Added jQuery form plugin as part of the core forms javascript.
- Added theme files and moved all layout files to be built to build/theme/custom.
- Added Header/Footer as default style components.
- Added Breadcrumb default style.
- Added list arrow styles.
- Added pagination styles.
- Added default footer navigation.
- Added default Content container styles.
- Added default background utility style.
- Added arrange component styles.
- Added form templates.
- Added new 5/3 constrain size.
- Added sidebar navigation.

### Changed

- Updated packages to latest versions.
- Included SVG files in the type of images to be processed.
- Changed build path to 'build' instead of 'dist'.
- Updated navigation templates.
- Updated default button styles.
- Updated gulp watch task to use glob-watcher instead of gulp-batch as sometimes gulp-batch would stop recognizing changed files.
- Updated the BEM linter utilitySelector to include “xs-“ as a utility size.
- Updated Constrain and FlexEmbed ratios to be consistent.
- Updated form styles.

### Removed

- Removed dist folder.
- Removed ap_drilldown_plugin.

## [2.5.0] - 2017-02-12

### Changed

- Changed '0%' to 'auto' for the flex grow utility classes as '0%' was causing issues in some versions of Safari.

## [2.4.0] - 2016-11-25

### Added

- Added right margin to radio buttons and checkboxes.
- Added default styles for disabled inputs.

## [2.3.0] - 2016-11-16

### Added

- Added sample pages to the 'dist' directory to show different responsive navigation options.
- Added two built-in responsive navigation options in the src/styles/lib/components/navigation folder.

### Fixed

- Fixed nunjucks support.

## [2.2.0] - 2016-11-09

### Added

- Added responsive styles for the typography utility classes.
- Added margin gutter utility classes.
- Added responsive styles for all the padding utility classes.
- Added "u-block" responsive styles.
- Added size12of12 as an alternate full width size class.
  
### Changed

- Consolidated the dropdown and mainnav navigation components into one "navigation" component.
- Formatted code to have consistent line indents.

## [2.1.0] - 2016-10-10

### Added

- Added left/right padding utilities.

### Changed

- Change the u-linkClean class to keep the link "clean" on hover.

## [2.0.0] - 2016-09-26

### Added

- Added some additional documentation

### Changed

- Combined Cacao and Cacao Cracker together to make it easier to get a project started

## [1.4.0] - 2016-09-18

### Added

- Added Form component for errors, labels and required elements
- Added Message component for success and error messages

## [1.3.0] - 2016-09-09

### Added

- Added telephone link styles
- Added extra large gutter sizes
- Added utility text size classes
- Added config file to hold common breakpoints
- Added responsive margin utility classes
- Added arrow to the "Back" link for the mobile nav menu
- Added extra small size utility classes

### Changed

- Changed container width from 960px to 1200px
- Changed default table column and header styles to have padding and top vertical alignment

## [1.2.1] - 2016-05-26

### Changed

- Updated style lint to conform to version 4.5 where some rules were deprecated and renamed.

## [1.2.0] - 2016-03-08

### Changed

- Updated style lint max lines rule

## [1.1.0] - 2016-02-08

### Added

- Added: visual test styles and tests for components

## [1.0.0] - 2016-02-02

### Added

- Initial 1.0 release
