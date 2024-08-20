---
---

# Cacao CSS Development

The source CSS files are in the `src` directory and are organized in subdirectories based on their usage.

The files are built with `npm run build` to the `dist` directory. The build process does three things:

1. Copies the CSS files that are directly in the `src` folder to the `dist` folder.
2. Copy the CSS files in the directories to the `dist` folder.
3. Create the breakpoint files for specified files in specific directories. For example, for the `src/margin` folder, this would create the breakpoint folders within `dist/margin` folder and wrap the original CSS from the `src/margin` folder with the correct media query.

## Build the CSS files

Before deploying a new version you must build the CSS files. Run this:

```bash
npm run build
```

## Developing Javascript files

There are some scripts that are used for the build process or for command-line functionality. While developing those scripts we want to use eslint.

You can manually run eslint on the files.

```bash
npm run eslint
```

Or, you can watch the files while you work, which is recommended.

```bash
npm run watch
```
