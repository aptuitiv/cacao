# Image

Generic component that applies common treatments to `<img>` elements.

Basic visual tests are in [`test/modules/image.html`](http://aptuitiv.github.io/cacao/test/modules/image.html).


## Available classes

* `Image`: Base component.
* `Image--left`: Float image left.
* `Image--right`: Float image right.


## Configurable variables

* `--Image-bp`: Custom media breakpoint for stacking floated images.
* `--Image-spacing`: Spacing applied to bottom of images.


## Usage

```html
<p>
  <img class="Image Image--right" src="{ src }">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
</p>
```
