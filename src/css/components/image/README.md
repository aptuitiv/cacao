# Image

Generic component that applies common treatments to `<img>` elements.

Basic visual tests are in [`test/modules/image.html`](http://aptuitiv.github.io/cacao/test/modules/image.html).

## Image

### Available classes

* `Image`: Base component.
* `Image--left`: Float image left.
* `Image--right`: Float image right.


### Configurable variables

* `--Image-spacing`: Spacing applied to bottom of images.


### Usage

```html
<p>
  <img class="Image Image--right" src="{ src }">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
</p>
```

## Image Wrapper

Provides styles to display an image on a page centered, floated left or floated right along with other content like a caption.

### Available Classes

* `ImageWrapper`: Base component.
* `ImageWrapper--left`: Float image left.
* `ImageWrapper--center`: Align the image center.
* `ImageWrapper--right`: Float image right.

### Usage

```html
<div class="ImageWrapper ImageWrapper--right">
    <img src="/path/to/image.jpg" alt="Image" width="200" height="120">
</div>
```

## Image Caption

Provides styles for an image caption to be displayed below the image.

The ImageCaption class works best when paired with the ImageWrapper classes.

### Available classes

* `ImageCaption`: Base component.

### Usage

```html
<div class="ImageWrapper ImageWrapper--right">
    <img src="/path/to/image.jpg" alt="Image" width="200" height="120">
    <div class="ImageCaption">Image Caption Here</div>
</div>
```
