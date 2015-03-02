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


### Columns

    <div class="grid">
        <div class="col-4">[...]</div>
    </div>


### Responsive Column Offsets & Ordering

    <div class="grid">
        <div class="col-3 push-3 offset-2 col-12-md push-0-md offset-0-md">[...]</div>
        <div class="col-3 pull-3 col-12-md pull-0-md">[...]</div>
    </div>



