# Button

Provides a basic button template that includes a very basic default theme that
is ready to be extended.

Basic visual tests are in [`test/modules/button.html`](http://aptuitiv.github.io/cacao/test/modules/button.html).


## Available classes

* `Button`: The core button component
* `Button--lg`: Adjusts padding so that button is larger
* `Button--sm`: Adjusts padding so that button is smaller

### States

* `is-disabled`: For disabled-state button styles 
  
  **Note**: You must also include the `disabled` attribute on `button` 
  elements. For `a` elements, you should prevent JavaScript event handlers 
  from firing.


## Configurable variables

* `--Button-background`: Background for the base button.
* `--Button-backgroundHover`: Hover background for the base button.
* `--Button-border`: Border shorthand applied to the base button.
* `--Button-border-radius`: Border radius applied to the base button.
* `--Button-color`: Foreground color for the base button.
* `--Button-disabled-opacity`: Opacity applied to disabled buttons.
* `--Button-fontFamily`: Font family for the base button.
* `--Button-fontSize`: Font size for the base button.
* `--Button-letterSpacing`: Letter spacing for the base button.
* `--Button-lineHeight`: Line height for the base button.
* `--Button-padding`: Padding shorthand.
* `--Button-paddingLg`: Larger padding shorthand.
* `--Button-paddingSm`: Smaller padding shorthand.


## Use

Examples:

```html
<a class="Button" href="{{url}}">Sign up</a>

<button class="Button is-disabled" type="button" disabled>Close</button>
```

### Theming / extending

The CSS is focused on common structural requirements for buttons. You can build
your application-specific theme styles in your app. For example:

```css
/* import the module or write these styles directly in `button.css` */
@import "cacao/lib/button";

.Button--default {
  background-color: #eee;
  color: #444;
  border-color: #d9d9d9 #d9d9d9 #ccc;
  border-radius: 2px;
}

.Button--default:hover,
.Button--default:focus,
.Button--default:active,
.Button--default.is-pressed {
  background-color: #f5f5f5;
  color: #222;
  border-color: #c6c6c6 #c6c6c6 #bbb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.Button--default:focus {
  border-color: #069;
  outline: 0;
}

.Button--default:active,
.Button--default.is-pressed {
  background-color: #ccc;
  box-shadow: inset 0 1px 2px rgba(0,0,0, 0.2);
}
```

