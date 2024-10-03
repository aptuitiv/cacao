# Migrating from version 3

Migrating from version 3 to a more recent version is a big change. We recommend that you stage the website somewhere becasue the update can be disruptive until it's done.

## Number System

The number system used throughout most of v3 is copied over to v4 and higher. For example: `mt-1` is equivalent to `margin-top: 10px;`.

## Breakpoints

Breakpoints have been updated to be mobile-first. Additionally, the actual breakpoint values have been changed to be more in line with other frameworks.

These breakpoints are inspired by:

- [Pure](https://purecss.io/grids/#:~:text=%3C/div%3E-,Default%20Media%20Queries,-When%20using%20Responsive)
- [Bootstrap](https://getbootstrap.com/docs/5.3/layout/breakpoints/#available-breakpoints)
- [Open Props](https://open-props.style/#media-queries)
- [Worldwide mobile stats](https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide)
- [Common screen resolutions](https://www.browserstack.com/guide/common-screen-resolutions)
- And our own usage in building websites

| Key   | Screen width |
| ----- | ---------- |
| 3xs   | >= 240px   |
| 2xs   | >= 360px   |
| xs    | >= 420px   |
| sm    | >= 576px   |
| md    | >= 768px   |
| lg    | >= 1024px  |
| xl    | >= 1280px  |
| 2xl   | >= 1440px  |
| 3xl   | >= 1600px  |
| 4xl   | >= 1920px  |
| 5xl   | >= 2560px  |

## Updated Classes

| v3                        | v4                  |
| ------------------------- | ------------------- |
| `.u-cf`                   | `.clearfix`         |
| `.u-cleanContent`         | `.last-child-sb-0`  |
| `.u-hiddenVisually`       | `.visually-hidden`  |
| `.u-hidden`               | `.hidden`           |
| `.u-block`                | `.block`            |
| `.u-inline`               | `.inline`           |
| `.u-flex`                 | `.flex`             |
| `.u-flexInline`           | `.inline-flex`      |
| `.u-flexRowReverse`       | `.flex-reverse`     |
| `.u-flexCol`              | `.flex-col`         |
| `.u-flexColReverse`       | `.flex-col-reverse` |
| `.u-flexJustifyStart`     | `.justify-start`    |
| `.u-flexJustifyEnd`       | `.justify-end`      |
| `.u-flexJustifyCenter`    | `.justify-center`   |
| `.u-flexJustifyBetween`   | `.justify-between`  |
| `.u-flexJustifyAround`    | `.justify-around`   |
| `.u-flexAlignItemsStart`  | `.align-start`      |
| `.u-flexAlignItemsEnd`    | `.align-end`        |
| `.u-flexAlignItemsCenter` | `.align-center`     |
| `.u-gutters*`             | `.px-*`             |
| `.u-heightFull`           | `.h-1-1` or `h-100` |
| `.u-linkSubtle`           | `.link-subtle`      |
| `.u-margTop*`             | `.mt-*`             |
| `.u-margRight*`           | `.me-*`             |
| `.u-margBottom*`          | `.mb-*`             |
| `.u-margLeft*`            | `.ms-*`             |
| `.u-padTop*`              | `.pt-*`             |
| `.u-padRight*`            | `.pe-*`             |
| `.u-padBottom*`           | `.pb-*`             |
| `.u-padLeft*`             | `.ps-*`             |
| `.u-posAbsolute`          | `.absolute`         |
| `.u-posRelative`          | `.relative`         |
| `.u-posStatic`            | `.static`           |
| `.u-printHide`            | `.print-hide`       |
| `.u-printShow`            | `.print-show`       |
| `.u-heightFull`           | `.h-100`            |
| `.u-rowGap*`              | `.gy-*`             |
| `.u-size*of*`             | `.col-*-*` or `.w-*-*` |
| `.u-styleEm`              | `.style-italic`     |
| `.u-textBreak`            | `.break-word`       |
| `.u-textBreakAll`         | `.break-all`        |
| `.u-textLeft`             | `.text-start`       |
| `.u-textLower`            | `.text-lower`       |
| `.u-textNoWrap`           | `.no-wrap`          |
| `.u-textUpper`            | `.text-upper`       |
| `.u-textCenter`           | `.text-center`      |
| `.u-textRight`            | `.text-end`         |
| `.u-weightNormal`         | `.weight-normal`    |
| `.u-weightBold`           | `.weight-bold`      |
| `.u-widthFull`            | `.w-1-1` or `.w-100` |

## Removed Classes

- [`.u-align*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/align/align.css)
- [`.u-inlineBlock`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/display/display.css#L52)
- [`.u-table*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/display/display.css#L58)
- [`.u-flexRow`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/flex/flex.css#L26)
- [`.u-flexWrap`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/flex/flex.css#L47)
- [`.u-flexAlignItemsStretch`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/flex/flex.css#L103)
- [`.u-flexAlignItemsBaseline`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/flex/flex.css#L107C1-L107C26)
- [`.u-flexAlignContent*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/flex/flex.css#L112)
- [`.u-flexAlignSelf*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/flex/flex.css#L157)
- [`.u-flexOrder*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/flex/flex.css#L185)
- [`.u-flexGrow`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/flex/flex.css#L201)
- [`.u-flexExpand`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/flex/flex.css#L231)
- [`.u-img*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/image/image.css) [](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/layout/layout.css#L8)
- [`.u-float*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/layout/layout.css#L32)
- [`.u-nbfc`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/layout/layout.css#L44)
- [`.u-nbfcAlt`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/layout/layout.css#L57)
- [`.u-linkClean`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/link/link.css)
- [`.u-linkObvious`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/link/link.css)
- [`.u-linkNatural`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/link/link.css)
- [`.u-linkComplex`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/link/link.css)
- [`.u-guttersMarg*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/margin/gutters.css)
- [`.u-spacedMarg*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/margin/spaced.css)
- [`.u-gutters*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/padding/gutters.css)
- [`.u-spaced*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/padding/spaced.css) replaced with vertical padding `.py-*`
- [`.u-pull*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/pull/pull.css) , spiritually succeeded by `.order-*`. But, there are also `.pull-` classes if you just need to move something to the left.
- [`.u-push*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/push/push.css) , spiritually succeeded by `.order-*`. But, there are also `.push-` classes if you just need to move something to the right.
- [`.u-radius*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/radius/radius.css)
- [`.u-text*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/typography/typography.css#L30) , exceptions for `.u-textUpper` and `.u-textCenter`.
- [`.u-style*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/typography/typography.css#L41)
- [`.u-weight*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/typography/typography.css#L67) , exceptions for `.u-weightNormal` and `.u-weightBold`.
- [`.u-fontSize*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/utils/typography/typography.css#L98)

## Components

All components have been removed from Cacao. The purpose of Cacao has pivoted to being only a reset/base and core utilities.

### Changed to a Utility

- [`.Constrain`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/constrain/constrain.css) → `.aspect`. Many options removed.
- [`.FlexEmbed`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/flexembed/flexembed.css) → `.embed`. Use `.aspect` for an aspect ratio.
- [`.Grid`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/grid/grid.css) → `.grid`. Alignment and gutters can be handled using the new Flex utilities.
- [`.Image--*`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/image/image.css) → `.image-*`. Only ported options for `left` and `right`.

### Removed

- [`.Arrange`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/arrange/arrange.css)
- [`.Breadcrumb`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/breadcrumb/breadcrumb.css)
- [`.Button`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/button/button.css)
- [`.Container`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/container/container.css)
- [`.Content`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/content/content.css)
- [`.FormError`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/form/error.css)
- [`.FormLabel`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/form/label.css)
- [`.FormRequired`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/form/required.css)
- [`.SelectInput`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/form/selectmenu.css)
- [`.FormSuccess`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/form/success.css)
- [`.TextInput`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/form/textinput.css)
- [`.ImageCaption`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/image/caption.css)
- [`.ImageWrapper`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/image/wrapper.css)
- [`.ColumnList`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/list/columns.css)
- [`.List`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/list/list.css)
- [`.Media`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/media/media.css)
- [`.Message`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/message/message.css)
- [`.NavBar`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/navigation/bar.css)
- [`.Dropdown`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/navigation/dropdown.css)
- [`.FooterNav`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/navigation/footer.css)
- [`.MainNav`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/navigation/mainnav.css)
- [`.SidebarNav`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/navigation/sidebar.css)
- [`.SmScBtn`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/navigation/small-screen-button.css)
- [`.Pagination`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/pagination/pagination.css)
- [`.Triangle`](https://github.com/aptuitiv/cacao/blob/v3.21.0/src/css/components/triangle/triangle.css)

## Grid styles

### Equal height grids

Remove `Grid--equalHeight` from the grid div.

Add `flex` class to the grid column divs.

### Grid--fit

`Grid--fit` is used to have cells fill the remaining space in a grid.

Remove `Grid--fit` from the grid div. Then use `col-fill` on the grid cell divs.

### Aligning cells

Change these classes on the grid div.

- `Grid--alignBottom` → `align-end`
- `Grid--alignMiddle` → `align-center`
- `Grid-alignCenter` → `justify-center`
- `Grid--alignRight` → `justify-end`

### Grid gutters

Change these classes on the grid div.

- `Grid--withGutterSm` → `g-1`
- `Grid--withGutter` → `g-2`
- `Grid--withGutterLg` → `g-4`
- `Grid--withGutterXlg` → `g-6`

### Grid column sizes

When changing the classes for grid columns remember that the new Cacao is mobile-first. Start with the smallest column size and go up from there.

You'll typically see `u-sm-`, `u-md-`, and `u-lg-` styles. The smallest one is the base column size. After that we use the breakpoint styles, but one size smaller than the old class names.

For example, if the grid column had these styles: `Grid-cell u-size1of5 u-lg-size1of4 u-md-size1of3 u-sm-sizeFull` then you would do this:

1. Remove the `Grid-cell` class.
2. Change `u-sm-sizeFull` to `col-1-1`.
3. Change `u-md-size1of3` to `col-sm-1-3`.
4. Change `u-lg-size1of4` to `col-md-1-4`.
5. Change `u-size1of5` to `col-lg-1-5`.

The end result will be

```css
col-1-1 col-sm-1-3 col-md-1-4 col-lg-1-5
```

By convention, we start with the smallest screen size and progress from there.
