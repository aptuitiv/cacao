# List

Generic list component that applies common treatments to `<ul>` and 
`<ol>` elements.

Basic visual tests are in [`test/modules/list.html`](http://aptuitiv.github.io/cacao/test/modules/list.html).


## Available classes

* `List`: Base component.
* `List--inline`: Inline layout
* `List--spaced`: Spaced inline layout.
* `List--gutter`: Inline layout with gutters.
* `List--gutterLg`: Inline layout with larger gutters.
* `List--barred`: Bar separated inline layout.
* `List--dotted`: Dot separated inline layout.


## Configurable variables

* `--List-barred-spacing`: Spacing between bars and list items.
* `--List-dotted-spacing`: Spacing between dots and list items.
* `--List-gutter-spacing`: Size of list gutters.
* `--List-spaced-spacing`: Size of spaced list spaces.


## Usage

```html
<ul class="List List--dotted">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
