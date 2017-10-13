# Media

The [media object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) 
is an abstract element used as the basis for building more complex and 
repetitive components (like blog comments, Tweets, etc).

Uses a fallback for browsers that do not support flexbox. Fallbacks are
applied when `<html>` has a class of `no-flexbox` or `no-flexwrap`.

Basic visual tests are in [`test/modules/media.html`](http://aptuitiv.github.io/cacao/test/modules/media.html)
and fallback layout tests are found in [`test/modules/media-noflex.html`](http://aptuitiv.github.io/cacao/test/modules/media-noflex.html).


## Available classes

* `Media`: Base component.
* `Media--withGutter`: Add a gutter between media items.
* `Media--withGutterSm`: Add a smaller gutter between media items.
* `Media-content`: Child content.
* `Media-subject`: The subject(s) of the content.
* `Media-subject--middle`: Vertically align subject to middle of content.
* `Media-subject--bottom`: Vertically align subject to bottom of content.


## Configurable variables

* `--Media-cell-gutter`: Gutter width.


## Usage

```html
<div class="Media Media--withGutterSm">
  <div class="Media-subject">
    <img src="http://placehold.it/80x80" alt="">
  </div>
  <div class="Media-content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    venenatis interdum urna, quis sodales mauris rutrum quis.
  </div>
</div>
```

