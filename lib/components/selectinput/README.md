# SelectInput

Provides a template for custom styling of select input fields that can be 
extended and themed.

Basic visual tests are in [`test/modules/selectinput.html`](http://aptuitiv.github.io/cacao/test/modules/selectinput.html).


## Available classes

* `SelectInput`: Base component.

### States

* `.is-invalid`: Input is invalid.
* `.is-valid`: Input is valid.


## Configurable variables

* `--SelectInput-background`: Background shorthand property.
* `--SelectInput-border`: Border shorthand property.
* `--SelectInput-color`: Input text color.
* `--SelectInput-errorColor`: Invalid input outline and text color.
* `--SelectInput-successColor`: Valid input outline and text color.


## Usage

```html
<div class="SelectInput">
  <select name="select">
    <option value="value1">Value 1</option> 
    <option value="value2">Value 2</option>
    <option value="value3">Value 3</option>
  </select>
</div>
```

### Theming / extending

The CSS is focused on common requirements for select menus. You can build
your application-specific theme styles in your app. For example:

```css
/* import the module or write these styles directly in `selectinput.css` */
@import "cacao/lib/selectinput";

.SelectInput--default {
    background: #dfdfdf;
}

.SelectInput--default.is-invalid {
    color: #f00;
}

.SelectInput--default.is-valid {
    color: #0f0;
}
```
