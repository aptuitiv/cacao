---
---

# Upgrading to version 7

Major changes in version 7 include:

- Requirement to specify the number of columns in a grid if using gutters. When building grids using the [column size](/styles/grid-column-size) and [gutter](/styles/gutter) classes, the CSS needs to know the [number of columns](/styles/grid-num-columns) in the grid in order to correctly adjust the column widths for the gutters.

Depending on the version that you are currently on, your upgrade path will be different.

| Your current Cacao version | Upgrade steps |
| ---------------------------|---------------|
| Version 6 | Follow the [steps on this page](#upgrade-steps) |
| Version 4 or 5 | First [upgrade to version 6](/migration/to-v6). Then follow the [steps on this page](#upgrade-steps) |
| Version 3 | Start with [upgrading from version 3 to version 5](/migration/from-v3) and then [upgrading to version 6](/migration/to-v6). Then follow the [steps on this page](#upgrade-steps) |

## Upgrade steps

1. Search for all `grid` uses and [add classes for the number of grid columns](#add-classes-for-the-number-of-grid-columns) if the grid uses any of the [gutter classes](/styles/gutter).

### Add classes for the number of grid columns

Search for all `grid` classes. You need to find any grids that are using any of the [gutter classes](/styles/gutter). Based on the number of columns add the correct [number of grid columns classes](/styles/grid-num-columns).

If the number of columns change at different breakpoints (i.e. a column is hidden or made visible), then add in the correct [breakpoint class](/styles/grid-num-columns#media-query-classes) to indicate the number of columns at that breakpoint.

For example if you have code like this:

```html
<div class="grid g-2">
    <div class="col-1-2">Column here</div>
    <div class="col-1-2">Column here</div>
</div>
```

you'll change it to:

```html
<div class="grid g-2 nc-2">
    <div class="col-1-2">Column here</div>
    <div class="col-1-2">Column here</div>
</div>
```

We added `nc-2` to the grid div.

A more complicated example is when you have a grid that changes the number of columns based on breakpoints. For example:

```html
<div class="grid g-3">
    <div class="col-1-1 col-1-2-md col-1-4-lg">
        Column one content here. I'll be at 25% width on large screens, 50% width on medium screens, and full width on small screens.
    </div>
    <div class="col-1-1 col-1-2-md col-1-4-lg">
        Column two content here. </a>
    </div>
    <div class="col-1-1 col-1-2-md col-1-4-lg">
        Column two content here. </a>
    </div>
    <div class="col-1-1 col-1-2-md col-1-4-lg">
        Column two content here. </a>
    </div>
</div>
```

You would convert that to:

```html
<div class="grid g-3 nc-1 nc-2-md nc-4-md">
    <div class="col-1-1 col-1-2-md col-1-4-lg">
        Column one content here. I'll be at 25% width on large screens, 50% width on medium screens, and full width on small screens.
    </div>
    <div class="col-1-1 col-1-2-md col-1-4-lg">
        Column two content here. </a>
    </div>
    <div class="col-1-1 col-1-2-md col-1-4-lg">
        Column two content here. </a>
    </div>
    <div class="col-1-1 col-1-2-md col-1-4-lg">
        Column two content here. </a>
    </div>
</div>
```

We added `nc-1 nc-2-md nc-4-md` to the grid div.

#### Search for `--gap` in your CSS

Also search for `--gap` in the CSS as some components may be setting their own gap value instead of using the gutter classes. Find the HTML related to that component and add the correct [number of grid columns classes](/styles/grid-num-columns).

For example, if you have this in your CSS:

```css
.ImageGrid.grid {
    --gap: var(--ImageGrid-gap, 20px); /* set the --gap variable that is used by the Cacao grid utility */

    gap: var(--gap);
}
```

and you have this HTML:

```html
<div class="ImageGrid grid">
    <div class="col-1 col-1-2-md">Column content here</div>
    <div class="col-1 col-1-2-md">Column content here</div>
</div>
```

you'd change the HTML like this:

```html
<div class="ImageGrid nc-1 nc-2-md">
    <div class="col-1 col-1-2-md">Column content here</div>
    <div class="col-1 col-1-2-md">Column content here</div>
</div>
```

We added `nc-1 nc-2-md` to the grid div.
