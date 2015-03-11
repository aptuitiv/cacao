MainNav
=======

Generic main navigation with dropdown menus.

### Settings

- `$mainnav-root-display`
- `$mainnav-root-fontsize`
- `$mainnav-sub-fontsize`
- `$mainnav-root-item-width`
- `$mainnav-root-item-spacing`
- `$mainnav-root-item-padding`
- `$mainnav-sub-padding`
- `$mainnav-sub-item-spacing`
- `$mainnav-sub-item-padding`
- `$mainnav-sub-zindex`
- `$mainnav-sub-sub-offset`


Usage
-----

    <ul class="MainNav MainNav--root">

        <li class="MainNav-item MainNav-item--root">
            <a class="MainNav-link MainNav-link--root" href="#">Link 1</a>
        </li>

        <li class="MainNav-item MainNav-item--root">
            <a class="MainNav-link MainNav-link--root" href="#">Link 2</a>
        </li>

        <li class="MainNav-item MainNav-item--root">
            <a class="MainNav-link MainNav-link--root" href="#">Link 3</a>

            <ul class="MainNav MainNav--sub">
                <li class="MainNav-item MainNav-item--sub">
                    <a class="MainNav-link MainNav-link--sub" href="#">Sub Link 1</a>
                </li>
                <li class="MainNav-item MainNav-item--sub">
                    <a class="MainNav-link MainNav-link--sub" href="#">Sub Link 2</a>
                </li>
            </ul>

        </li>

    </ul>



