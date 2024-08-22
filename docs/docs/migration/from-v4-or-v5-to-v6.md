---
---

# Converting from version 4 or 5 to version 6

If your website is currently running Cacao version 4 or 5 and you're upgrading to version 6 then there are some helper scripts that you can run on the command line to streamline the migration.

:::warning
Do not run these scripts if the website is currently running Cacao version 3. See [Migrating from version 3](from-v3) for more information.
:::

Some of the class names changed and the import paths changed. [See the changelog for more information](/changelog#600-august-19-2024).

Run the following commands in the base directory of your project. Replace the file and directory paths if necessary.

```bash
cacao-convert-v6 breakpoints -d src/css
cacao-convert-v6 classes -d src/templates
cacao-convert-v6 imports -f src/css/main.css
```

Below is an explanation of each one.

## Update the breakpoint media queries

The custom variables for the media query breakpoints changed. If your CSS is in `src/css` then you can run this:

```bash
cacao-convert-v6 breakpoints -d src/css
```

## Update the CSS classes in template files

This will recursively crawl the root directory for your template files and update any Cacao version 4 or 5 classes to the correct version 6 class.

For example, if your templates are in `src/templates` you would run:

```bash
cacao-convert-v6 classes -d src/templates
```

## Convert the file imports

This is intended to convert the imports for the Cacao files.

For example, if your source file is located at `src/css/main.css` then you'd run this:

```bash
cacao-convert-v6 imports -f src/css/main.css
```

You can then build your CSS with the new imports.

You'll also need to update the CSS classes in your template files.

## Manual changes

There are a few manual changes that you'll need to do.

### Gutter variables

If you're importing gutter classes then you'll need to add an import for the `variables.css` file.

```css
/* Gutter variables. This must be imported, or you must override the variables in your own CSS. */
@import 'cacao-css/dist/gutter/variables.css';
```

### Image variables

If you're importing image classes then you'll need to add an import for the `variables.css` file.

```css
/* Image variables. This must be imported, or you must override the variables in your own CSS. */
@import 'cacao-css/dist/image/variables.css';
```

### Margin variables

If you're importing margin classes then you'll need to add an import for the `variables.css` file.

```css
/* Margin variables. This must be imported, or you must override the variables in your own CSS. */
@import 'cacao-css/dist/margin/variables.css';
```

### Padding variables

If you're importing padding classes then you'll need to add an import for the `variables.css` file.

```css
/* Padding variables. This must be imported, or you must override the variables in your own CSS. */
@import 'cacao-css/dist/padding/variables.css';
```
