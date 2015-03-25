Breadcrumbs
===========

A breadcrumb trail module.

### Settings

- `$crumbs-wrapper-padding`
- `$crumbs-item-spacing`
- `$crumbs-page-padding`
- `$crumbs-separator-padding`


### States

- `.is-disabled`
- `.is-current`
- `:link` states


Usage
-----

    <div class="Crumbs">
        <a class="Crumbs-item Crumbs-item--page" href="#">Home</a>
        <span class="Crumbs-item Crumbs-item--separator">&gt;&gt;</span>
        <span class="Crumbs-item Crumbs-item--page is-disabled">Disabled</span>
        <span class="Crumbs-item Crumbs-item--separator">&gt;&gt;</span>
        <a class="Crumbs-item Crumbs-item--page" href="#">Page</a>
        <span class="Crumbs-item Crumbs-item--separator">&gt;&gt;</span>
        <a class="Crumbs-item Crumbs-item--page is-current" href="#">Current Page</a>
    </div>

