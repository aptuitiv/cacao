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
