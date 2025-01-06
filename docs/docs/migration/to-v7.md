---
---

# Upgrading to version 7

Upgrading to version 7 involves updating any grids that use gutters to specify the number of columns in a grid.

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
