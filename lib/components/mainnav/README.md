# MainNav

Base structure for main navigation menus. Can easily be extended and / or 
themed.


## Available classes

* `MainNav`: Applied to the menu container.
* `MainNav-item`: Menu items containing content such as links.
* `MainNav-link`: Menu item links.

### States

* `is-current` / `is-currentParent`: When applied to menu item the item will be styled to stand out 
  from the other items.


## Configurable variables

* `--MainNav-fontFamily`: Base menu font family.
* `-MainNav-fontSize`: Base menu font size.
* `-MainNav-lineHeight`: Base menu line height.
* `-MainNav-link-background`: Background shorthand for menu links.
* `-MainNav-link-backgroundHover`: Background shorthand for hovered menu links.
* `-MainNav-link-color`: Foreground color of menu links.
* `-MainNav-link-colorHover`: Foreground color of hovered menu links.


## Use

Examples:

```html
<ul class="MainNav">
  <li class="MainNav-item">
    <a class="MainNav-link" href="#">Menu item 1</a>
  </li>
  <li class="MainNav-item is-currentParent">
    <a class="MainNav-link" href="#">Menu item 2</a>
    <ul class="MainNav">
      <li class="MainNav-item">
        <a class="MainNav-link" href="#">Sub menu item 1</a>
      </li>
      <li class="MainNav-item is-current">
        <a class="MainNav-link" href="#">Sub menu item 2</a>
      </li>
    </ul>
  </li>
  <li class="MainNav-item">
    <a class="MainNav-link" href="#">Menu item 3</a>
  </li>
  <li class="MainNav-item">
    <a class="MainNav-link" href="#">Menu item 4</a>
  </li>
</ul>
```
