# Dropdown

Base structure for dropdown menus. Can easily be extended and / or themed.


## Available classes

* `Dropdown`: Applied to the menu's parent to provide context for the dropdown 
  menu.
* `Dropdown-menu`: The actual dropdown.
* `Dropdown-item`: Items within the dropdown menu.
* `Dropdown-link`: Links within the dropdown menu.

### States

* `is-last`: When applied to `Dropdown` this causes menus to align and fly-out 
  to the right.


## Configurable variables

* `--Dropdown-background`: Default dropdown menu background shorthand.
* `--Dropdown-fontSize`: Font size of base dropdown menu.
* `--Dropdown-lineHeight`: Line height of base dropdown menu.
* `--Dropdown-item-padding`: Padding of items within the dropdown menu.
* `--Dropdown-link-color`: Foreground color of links within the dropdown.
* `--Dropdown-link-colorHover`: Foreground color of hovered links within the dropdown.


## Use

Examples:

```html
<span class="Dropdown">
  Dropdown
  <ul class="Dropdown-menu">
    <li class="Dropdown-item">
      <a class="Dropdown-link" href="{{url}}">Item 1</a>
    </li>
    <li class="Dropdown-item">
      <a class="Dropdown-link" href="{{url}}">Item 2</a>
    </li>
  </ul>  
</span>
```
