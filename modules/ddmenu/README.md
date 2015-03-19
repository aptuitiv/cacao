DDMenu
======

Mobile drilldown navigation.

This module provides a mobile state for navigation menus.

By default these styles are scoped to navigation menus prefixed with `ddmenu` classes.

This can optionally be set to your menu of choice, for example the classname can be set to the mainnav module's class. This allows you to create a generic dropdown menu that becomes a drilldown menu at the specified breakpoint.

### Settings

- `$ddmenu-classname`
- `$ddmenu-bp`
- `$ddmenu-fontsize`
- `$ddmenu-menu-padding`
- `$ddmenu-item-padding`
- `$ddmenu-item-spacing`
- `$ddmenu-header-padding`
- `$ddmenu-header-height`
- `$ddmenu-header-fontsize`


Usage
-----

    <a class="DDMenu-toggle">Menu</a>

    <ul class="DDMenu DDMenu--root">

        <li class="DDMenu-item DDMenu-item--root">
            <a class="DDMenu-link DDMenu-link--root" href="#">Link 1</a>
        </li>

        <li class="DDMenu-item DDMenu-item--root">
            <a class="DDMenu-link DDMenu-link--root" href="#">Link 2</a>
        </li>

        <li class="DDMenu-item DDMenu-item--root">
            <a class="DDMenu-link DDMenu-link--root" href="#">Link 4</a>

            <ul class="DDMenu DDMenu--sub">
                <li class="DDMenu-item DDMenu-item--sub">
                    <a class="DDMenu-link DDMenu-link--sub" href="#">Sub Link 1</a>
                </li>
                <li class="DDMenu-item DDMenu-item--sub">
                    <a class="DDMenu-link DDMenu-link--sub" href="#">Sub Link 2</a>
                </li>
            </ul>

        </li>

    </ul>



