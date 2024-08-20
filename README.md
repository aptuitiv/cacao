# Cacao

## Installation

Install Cacao via NPM:

```bash
npm install cacao-css@4
```

Add a copy of [imports.css](imports.css) to your project. This file allows you to configure what modules are included in your final project. This helps to keep the CSS lean and the performance high. The relative imports are expecting to be placed under "my-project/src/css/main.css". You may need to adjust the imports if using a different folder structure.

Using the default imports, you get access to aspect ratios (used for embedded iframes), embeds, images, gutters, displays, margins, paddings, and a basic grid. You can uncomment out import lines to include specific modules. Responsive classes are not added by default and must be added by uncommenting an import for the responsive viewport.

## Customization

You can customize Cacao simply by overriding a class. You can also override the breakpoints by creating your own `@custom-media` directives as found in [config.css](src/config.css).

## Resources

- [Changelog](./CHANGELOG.md)
- [Development](./DEVELOPMENT.md)
- [Local Testing](./LOCAL_TESTING.md)
- [Migrating from version 3](./Migrating-from-version3.md)
