Grid
====

An inline-block grid system. Based on: [http://purecss.io/](http://purecss.io/) and [http://csswizardry.com/csswizardry-grids/](http://csswizardry.com/csswizardry-grids/)

**Note**: The only way to guarantee that the columns behave
as intended is to remove all the white space between them
by minifying the HTML, commenting white space, etc..

### Settings

- `$grid-column-count`
- `$grid-column-gutter`
- `$grid-mobile-first`
- `$grid-modifiers`
- `$grid-use-pull`
- `$grid-use-push`
- `$grid-use-offset`
- `$grid-breakpoints`

### Grid Modifiers

- `-gutter-none`
- `-gutter-narrow`
- `-gutter-wide`
- `-align-center`
- `-align-right`
- `-valign-middle`
- `-valign-bottom`


Usage
-----

### Wrapper

    <div class="grid">
        [...]
    </div>

The grid wrapper has modifiers for adjusting the column gutters and alignment.

    <div class="grid -gutter-none -align-center -valign-bottom">
        [...]
    </div>


### Columns

Column widths are set in single column units. The element below will span 4 columns.

    <div class="grid">
        <div class="col-4">[...]</div>
    </div>


### Responsive Column Offsets & Ordering

There is also a set of modifiers used to adjust individual column properties.

This example demonstrates how to use responsive column modifiers. The breakpoints and extensions can be configured in
the grid settings. Here the columns will become full width (assuming a 12 column grid) when the screen is at the 'md'
breakpoint

    <div class="grid">
        <div class="col-3 col-12-md">[...]</div>
        <div class="col-4 col-12-md">[...]</div>
    </div>

Below demonstrates how you can use column modifiers to reorder and offset columns. In this example the second column,
`.col-4`, will be appear in the same place as the previous column since it has been 'pulled' the width of the previous
column. To keep columns from overlapping a push class must be used to push the previous column the width of the pulled
column. In this example the columns will simply swap places. Also note the `.offset-2` class which is offsetting that
column and any after it by 2.

    <div class="grid">
        <div class="col-3 push-4 offset-2">[...]</div>
        <div class="col-4 pull-3">[...]</div>
    </div>

Column ordering and offsets also have responsive modifiers. All of these modifiers can be used together to create flexible and responsive grids.

    <div class="grid -gutter-wide">
        <div class="col-3 push-4 offset-2 col-12-md push-0-md offset-0-md">[...]</div>
        <div class="col-4 pull-3 col-12-md pull-0-md">[...]</div>
    </div>



