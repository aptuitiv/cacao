# Cacao V6 conversion scripts

This folder contains scripts to convert imports and CSS class names from an older version to the version 6 format.

This is intended for converting a website that is running Cacao version 4 or 5 to version 6.

**Do not use this with a site running Cacao version 3.**

## Convert the file imports

This is intended to convert the imports for the Cacao files.

For example, if your source file is located at `src/css/main.css` then you'd run this:

```bash
cacao-convert-v6 imports -f src/css/main.css
```

You can then build your CSS with the new imports.

You'll also need to update the CSS classes in your template files.

## Update the CSS classes in template files

This will recursively crawl the root directory for your template files and update any Cacao version 4 or 5 classes to the correct version 6 class.

For example, if your templates are in `src/templates` you would run:

```bash
cacao-convert-v6 classes -d src/templates
```

## Update the breakpoint media queries

The custom variables for the media query breakpoints changed. If your CSS is in `src/css` then you can run this:

```bash
cacao-convert-v6 breakpoints -d src/css
```
