---
title: Upgrading to version 8
---

Major changes in version 8 include:

- The `spacing` module was changed to `child-spacing` and the import paths are different. The class names are the same. There are also a lot of new class names in the `child-spacing` styles.

Depending on the version that you are currently on, your upgrade path will be different.

| Your current Cacao version | Upgrade steps |
| ---------------------------|---------------|
| Version 7 | Follow the [steps on this page](#upgrade-steps) |
| Version 6 | First [upgrade to version 7](/migration/to-v7). Then follow the [steps on this page](#upgrade-steps) |
| Version 4 or 5 | First [upgrade to version 6](/migration/to-v6) and then to [version 7](/migration/to-v7). Then follow the [steps on this page](#upgrade-steps) |
| Version 3 | Start with [upgrading from version 3 to version 5](/migration/from-v3), then [upgrade to version 6](/migration/to-v6), and then to [version 7](/migration/to-v7). Then follow the [steps on this page](#upgrade-steps) |

## Upgrade steps

Open the CSS file that you're importing the cacao library into. Search for `@import 'cacao-css/dist/spacing/spacing.css';`.

Replace it with:

```css
@import 'cacao-css/dist/child-spacing/first-child/spacing/top/top-0.css';
@import 'cacao-css/dist/child-spacing/last-child/spacing/bottom/bottom-0.css';
```

## Migration scripts

If your website is currently running Cacao version 7 then there is a helper script to help with the migration.

### Convert the file imports

This is intended to convert the imports for the Cacao files.

For example, if your source file is located at src/css/main.css then you'd run this:

```bash
cacao-convert-v8 imports -f src/css/main.css
```

You can then build your CSS with the new imports.
