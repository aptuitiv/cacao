mainnav
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

    <ul class="mainnav -root">

        <li class="mainnav_item -root">
            <a class="mainnav_link -root" href="#">Link 1</a>
        </li>

        <li class="mainnav_item -root">
            <a class="mainnav_link -root" href="#">Link 2</a>
        </li>

        <li class="mainnav_item -root">
            <a class="mainnav_link -root" href="#">Link 3</a>

            <ul class="mainnav -sub">
                <li class="mainnav_item -sub">
                    <a class="mainnav_link -sub" href="#">Sub Link 1</a>
                </li>
                <li class="mainnav_item -sub">
                    <a class="mainnav_link -sub" href="#">Sub Link 2</a>
                </li>
            </ul>

        </li>

    </ul>



