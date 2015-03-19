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

- `.is-disabled`
- `.is-current`
- `:link` states


Usage
-----

    <div class="Crumbs">
        <a class="Crumbs-item Crumbs-item--crumb" href="#">Home</a>
        <span class="Crumbs-item Crumbs-item--separator"></span>
        <span class="Crumbs-item Crumbs-item--crumb -is-disabled">Disabled</span>
        <span class="Crumbs-item Crumbs-item--separator"></span>
        <a class="Crumbs-item Crumbs-item--crumb" href="#">Page</a>
        <span class="Crumbs-item Crumbs-item--separator"></span>
        <a class="Crumbs-item Crumbs-item--crumb is-current" href="#">Current Page</a>
    </div>



