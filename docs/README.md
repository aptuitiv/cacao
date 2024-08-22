# @aptuitiv/gmaps Documentation

This website is built using [Docusaurus](https://docusaurus.io/).

View the documentation at [aptuitiv.github.io/cacao/](https://aptuitiv.github.io/cacao/);

## Local Development

Run the local development server and watch for file changes:

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Deploy

We use GitHub actions to build the documentation site. Simply push the `develop` branch to build the site.

## Build

> NOTE: We use GitHub actions to build the documentation site. You only need to run `build` if you want to test a build.

When you're ready to push the changes to GitHub to update the documentation site run

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

Then use git to push the changes to GitHub and then the [GitHub action](https://github.com/aptuitiv/gmaps-docs/actions) will build the documentation pages.
