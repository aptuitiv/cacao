# ap-ddmenu

Styles drilldown menu elements created by the Aptuitiv Drilldown Menu plugin. 

<https://github.com/aptuitiv/ap-drilldown-menu>

**Note**: This component uses an ID to override styles placed on the `<ul>` and 
child elements. This will cause problems if the `<ul>` uses IDs at all to style 
its elements.


## Configurable variables

* `--ap-ddmenu-bp`
* `--ddmenu-bg`
* `--ddmenu-fontSize`
* `--ddmenu-lineHeight`
* `--ddmenu-header-fontSize`
* `--ddmenu-header-lineHeight`
* `--ddmenu-gutter`
* `--ddmenu-color-link`
* `--ddmenu-color-linkHover`
* `--ddmenu-header-bg`
* `--ddmenu-header-color`
* `--ddmenu-toggle-bg`
* `--ddmenu-toggle-border`
* `--ddmenu-toggle-color`


## Use

To use: wrap a `<ul>` in a div with the id `ap-ddmenu-root`. Currently only
one unique menu is supported.

```html
<div id="ap-ddmenu-root">
  <ul>
    <li><a href="#">Menu item 1</a></li>
    <li><a href="#">Menu item 2</a>
      <ul>
        <li><a href="#">Sub menu item 1</a></li>
        <li><a href="#">Sub menu item 2</a></li>
      </ul>
    </li>
    <li><a href="#">Menu item 3</a></li>
    <li><a href="#">Menu item 4</a></li>
  </ul>
</div>
```
