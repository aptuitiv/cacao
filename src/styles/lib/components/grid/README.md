# Grid

A CSS grid component. The grid makes use of `flexbox` to provide features that 
float-based layouts cannot. Utilizes an inline-block fallback for browsers that 
lack `flexbox` or `flex-wrap` support. 

Fallbacks are applied by giving the `<html>` tag a class of `no-flexbox` 
or `no-flexwrap`.

Basic visual tests are in [`test/modules/grid.html`](http://aptuitiv.github.io/cacao/test/modules/grid.html)
and fallback layout tests are found in [`test/modules/grid-noflex.html`](http://aptuitiv.github.io/cacao/test/modules/grid-noflex.html).

**Note**: This component relies on particular dimensions being applied to cells in
the grid via other classes. For example,
[size utilities](https://github.com/aptuitiv/cacao/tree/master/lib/utils/size).


## Features

* Fluid layout.
* Intelligent cell wrapping.
* Evenly fit cell spacing
* Equal height columns
* Horizontal centering of cells.
* Custom vertical alignment of cells (top, bottom, or middle).
* Cell width is controlled independently of grid gutter.
* Infinite nesting.
* Inline-block fallbacks for browsers without flexbox support.


## Available classes

* `Grid`: core component
* `Grid--alignCenter`: center-align all child `Grid-cell`
* `Grid--alignRight`: right-align all child `Grid-cell`
* `Grid--alignMiddle`: middle-align all child `Grid-cell`
* `Grid--alignBottom`: bottom-align all child `Grid-cell`
* `Grid--fit`: evenly distribute space amongst all child `Grid-cell`
* `Grid--equalHeight`: all child `Grid-cell` match height of the tallest
* `Grid--withGutter`: adds a gutter between cells
* `Grid--withGutterSm`: adds a smaller gutter between cells
* `Grid--withGutterLg`: adds a larger gutter between cells
* `Grid-cell`: a child cell of `Grid` that wraps grid content
* `Grid-cell--center`: center an individual `Grid-cell`

**Note**: `Grid--fit` and `Grid--equalHeight` will not work in browsers 
without flexbox support.


## Configurable variables

* `--Grid-cell-gutter`: the width of the gutter applied by the 
  `Grid--withGutter` modifier class.
* `--Grid-fontSize`: Used by the inline-block fallback grid to reset font size 
  changes made to the grid wrapper. Only required if you wish to use the
  inline-block fallback layout.


## Use

A simple grid is easy to create. A grid container can have any number of child
cells. When used with `Grid--fit` space is evenly distributed without need for
sizing utilities.

```html
<div class="Grid Grid--fit Grid--withGutter">
  <div class="Grid-cell"></div>
  <div class="Grid-cell"></div>
  <div class="Grid-cell"></div>
  <div class="Grid-cell"></div>
</div>
```

For more granular control over layout make use of modifiers, sizing, and 
position utilities.

```html
<div class="Grid [Grid--alignCenter|Grid--alignRight|Grid--alignMiddle|Grid--alignBottom|Grid--fit|Grid--equalHeight]">
  <div class="Grid-cell u-size1of2 u-lg-size6of12"></div>
  <div class="Grid-cell u-size1of2 u-push1of2 u-lg-size4of12 u-lg-pushNone"></div>
  <div class="Grid-cell u-size1of3 u-pull1of2 u-lg-size2of12 u-lg-pullNone"></div>
  <div class="Grid-cell u-size1of3"></div>
</div>
```

### Widths and offsets

Cell widths and offsets, and column ordering can be controlled using the 
[size utilities](https://github.com/aptuitiv/cacao/tree/master/lib/utils/size) 
and [push](https://github.com/aptuitiv/cacao/tree/master/lib/utils/push) / 
[pull](https://github.com/aptuitiv/cacao/tree/master/lib/utils/push),
respectively.

```html
<div class="Grid Grid--withGutter">
  <div class="Grid-cell u-size1of2 u-lg-size6of12"></div>
  <div class="Grid-cell u-size1of2 u-push1of2 u-lg-size4of12 u-lg-pushNone"></div>
  <div class="Grid-cell u-size1of3 u-pull1of2 u-lg-size2of12 u-lg-pullNone"></div>
  <div class="Grid-cell u-size1of3"></div>
</div>
```

You can nest grids in any context, but keep in mind that the dimensions will 
be relative to the containing element's width.

```html
<div class="Grid Grid--alignCenter">
  <div class="Grid-cell u-size2of3">
    <div class="Grid Grid--withGutter">
      <div class="Grid-cell u-size1of2"> <!-- 50% width of the parent Grid -->
        {{>partial}}
      </div>
    </div>
  </div>
</div>
```
