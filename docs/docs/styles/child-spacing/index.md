---
title: Child element spacing
---

The child element spacing styles allow you to modify the margin and/or padding for `first-child` and `last-child` elements.

This is useful if you need to prevent the last child in a wrapper div from having a bottom margin or padding.

Included are the following styles:

- First child
  - Margin
  - Padding
  - Spacing (both margin and padding)
- Last child
  - Margin
  - Padding
  - Spacing (both margin and padding)
  
## Combined imports

There are multiple combined import files for this module.

Import all `first-child` and `last-child` styles.

```css
@import 'cacao-css/dist/child-spacing/combined-import.css';
```

Import all `first-child` styles.

```css
@import 'cacao-css/dist/child-spacing/first-child/combined-import.css';
```

Import all `first-child` margin styles.

```css
@import 'cacao-css/dist/child-spacing/first-child/margin/combined-import.css';
```

Import all `first-child` padding styles.

```css
@import 'cacao-css/dist/child-spacing/first-child/padding/combined-import.css';
```

Import all `first-child` spacing styles.

```css
@import 'cacao-css/dist/child-spacing/first-child/spacing/combined-import.css';
```

Import all `last-child` styles.

```css
@import 'cacao-css/dist/child-spacing/last-child/combined-import.css';
```

Import all `last-child` margin styles.

```css
@import 'cacao-css/dist/child-spacing/last-child/margin/combined-import.css';
```

Import all `last-child` padding styles.

```css
@import 'cacao-css/dist/child-spacing/last-child/padding/combined-import.css';
```

Import all `last-child` spacing styles.

```css
@import 'cacao-css/dist/child-spacing/last-child/spacing/combined-import.css';
```

## Removing the margins or paddings from child elements

A common use case of the child spacing styles is to remove the margin and/or padding from either the first child or the last child within a container. This is often done because the container element has it's own margin or padding and the child element increases the appeared spacing between the container and its siblings.

### Remove both margin and padding

```css
@import 'cacao-css/dist/child-spacing/first-child/spacing/vertical/vertical-0.css';
```

- `first-child-sy-0` - Remove both top margin, top padding, bottom margin, and bottom padding from the first child in an element.

Remove the top margin and top padding from the first child in an element and the bottom margin and bottom padding from the last child in an element.

```html
<div class="first-child-sy-0">
    <h1>Content here</h1>
    <p>Some paragraph content.</p>
</div>
```

Remove the top margin and top padding from the first child in an element.

```css
@import 'cacao-css/dist/child-spacing/first-child/spacing/top/top-0.css';
```

- `first-child-st-0` - Remove both the top margin and top padding from the first child in an element.

```html
<div class="first-child-st-0">
    <h1>Content here</h1>
    <p>Some paragraph content.</p>
</div>
```

Remove the bottom margin and bottom padding from the last child in an element.

```css
@import 'cacao-css/dist/child-spacing/last-child/spacing/bottom/bottom-0.css';
```

- `last-child-sb-0` - Remove both the bottom margin and bottom padding from the last child in an element.

```html
<div class="last-child-sb-0">
    <h1>Content here</h1>
    <p>Some paragraph content.</p>
</div>
```

### Remove margins

```css
@import 'cacao-css/dist/child-spacing/first-child/margin/top/top-0.css';
@import 'cacao-css/dist/child-spacing/last-child/margin/bottom/bottom-0.css';
```

- `first-child-mt-0` - Remove the top margin from the first child in an element.
- `last-child-mb-0` - Remove the bottom margin from the last child in an element.

Remove the top margin from the first child in an element and the bottom margin from the last child in an element.

```html
<div class="first-child-mt-0 last-child-mb-0">
    <h1>Content here</h1>
    <p>Some paragraph content.</p>
</div>
```

Remove the top margin from the first child in an element.

```html
<div class="first-child-mt-0">
    <h1>Content here</h1>
    <p>Some paragraph content.</p>
</div>
```

Remove the bottom margin from the last child in an element.

```html
<div class="last-child-mb-0">
    <h1>Content here</h1>
    <p>Some paragraph content.</p>
</div>
```

### Remove padding

```css
@import 'cacao-css/dist/child-spacing/first-child/padding/top/top-0.css';
@import 'cacao-css/dist/child-spacing/last-child/padding/bottom/bottom-0.css';
```

- `first-child-pt-0` - Remove the top padding from the first child in an element.
- `last-child-pb-0` - Remove the bottom padding from the last child in an element.

Remove the top padding from the first child in an element and the bottom padding from the last child in an element.

```html
<div class="first-child-pt-0 last-child-pb-0">
    <h1>Content here</h1>
    <p>Some paragraph content.</p>
</div>
```

Remove the top padding from the first child in an element.

```html
<div class="first-child-pt-0">
    <h1>Content here</h1>
    <p>Some paragraph content.</p>
</div>
```

Remove the bottom padding from the last child in an element.

```html
<div class="last-child-pb-0">
    <h1>Content here</h1>
    <p>Some paragraph content.</p>
</div>
```
