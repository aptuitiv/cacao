# FlexEmbed

CSS for responsive, intrinsic ratio embeds.

Basic visual tests are in [`test/modules/flexembed.html`](http://aptuitiv.github.io/cacao/test/modules/flexembed.html).


## Available classes

* `FlexEmbed`: The root node.
* `FlexEmbed-ratio`: The element that provides the aspect ratio (1:1 by default).
* `FlexEmbed-ratio--3by1`: The modifier class for 3:1 aspect ratio embed.
* `FlexEmbed-ratio--2by1`: The modifier class for 2:1 aspect ratio embed,
* `FlexEmbed-ratio--16by9`: The modifier class for 16:9 aspect ratio embed.
* `FlexEmbed-ratio--4by3`: The modifier class for 4:3 aspect ratio embed.
* `FlexEmbed-content`: The descendent class for the content that is being displayed.


## Usage

Example:

```html
<div class="FlexEmbed">
  <div class="FlexEmbed-ratio FlexEmbed-ratio--16by9"></div>
  <iframe class="FlexEmbed-content" src="..."></iframe>
</div>
```

If the child content has a width and height of 100% you can also nest it within
`FlexEmbed-content`.

```html
<div class="FlexEmbed">
  <div class="FlexEmbed-ratio FlexEmbed-ratio--16by9"></div>
  <div class="FlexEmbed-content">
    <!-- child content -->
  </div>
</div>
```

You can add custom aspect ratios. For example, to create a 2.35:1 aspect
ratio:

```css
/**
 * Modifier: 47:20 aspect ratio
 */

.FlexEmbed-ratio--47by20 {
  padding-bottom: 42.55%;
}
```

Alternatively, aspect ratios can be calculated programmatically and the
corresponding `padding-bottom` value applied using an inline style.

```html
<div class="FlexEmbed">
  <div class="FlexEmbed-ratio" style="padding-bottom:{{percentage}}%"></div>
  <div class="FlexEmbed-content">
    <!-- child content -->
  </div>
</div>
```
