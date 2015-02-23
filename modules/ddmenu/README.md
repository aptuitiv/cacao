ddmenu
======

Mobile drilldown navigation.

This module provides a mobile state for navigation menus.

By default these styles are scoped to navigation menus prefixed with `ddmenu` classes.

This can optionally be set to your menu of choice, for example the classname can be set to the mainnav module's class. This allows you to create a generic dropdown menu that becomes a drilldown menu at the specified breakpoint.

Usage:
------

    <ul class="ddmenu -root">

        <li class="ddmenu_item -root">
            <a class="ddmenu_link -root" href="#">Link 1</a>
        </li>

        <li class="ddmenu_item -root">
            <a class="ddmenu_link -root" href="#">Link 2</a>
        </li>

        <li class="ddmenu_item -root">
            <a class="ddmenu_link -root" href="#">Link 3</a>

            <ul class="ddmenu -sub">
                <li class="ddmenu_item -sub">
                    <a class="ddmenu_link -sub" href="#">Sub Link 1</a>
                </li>
                <li class="ddmenu_item -sub">
                    <a class="ddmenu_link -sub" href="#">Sub Link 2</a>
                </li>
            </ul>

        </li>

    </ul>


