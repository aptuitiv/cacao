Breadcrumbs
===========

A breadcrumbs module. Styles breadcrumbs.

### Settings

- `$crumbs-wrapper-padding`
- `$crumbs-item-spacing`
- `$crumbs-crumb-padding`
- `$crumbs-separator`
- `$crumbs-separator-padding`

### States

- `-is-disabled`
- `-is-current`
- `:link` states


Usage
-----

    <div class="breadcrumbs">
        <a class="breadcrumbs_item-crumb" href="#">Home</a>
        <span class="breadcrumbs_item-separator"></span>
        <span class="breadcrumbs_item-crumb -is-disabled">Disabled</span>
        <span class="breadcrumbs_item-separator"></span>
        <a class="breadcrumbs_item-crumb" href="#">Page</a>
        <span class="breadcrumbs_item-separator"></span>
        <a class="breadcrumbs_item-crumb -is-current" href="#">Current Page</a>
    </div>



