# TextInput

Provides a template for custom styling of text input fields and textareas 
that can be easily extended and themed.

Basic visual tests are in [`test/modules/textinput.html`](http://aptuitiv.github.io/cacao/test/modules/textinput.html).


## Available classes

* `TextInput`: Base component.

### States

* `.is-invalid`: Input is invalid.
* `.is-valid`: Input is valid.


## Configurable variables

* `--TextInput-background`: Background shorthand property.
* `--TextInput-border`: Border shorthand property.
* `--TextInput-padding`: Input padding.
* `--TextInput-color`: Input text color.
* `--TextInput-errorColor`: Invalid input outline and text color.
* `--TextInput-successColor`: Valid input outline and text color.


## Usage

```html
<input class="TextInput" type="text" value="">

<textarea class="TextInput" rows="10" cols="50"></textarea>
```

### Theming / extending

The CSS is focused on common requirements for text inputs. You can build
your application-specific theme styles in your app. For example:

```css
/* import the module or write these styles directly in `textinput.css` */
@import "cacao/lib/textinput";

.TextInput--default {
    background: #dfdfdf;
}

.TextInput--default.is-invalid {
    color: #f00;
}

.TextInput--default.is-valid {
    color: #0f0;
}
```
