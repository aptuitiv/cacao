# Cacao V3 conversion scripts

This folder contains scripts to convert a website that was running on Cacao version 3 to run on the latest version of Cacao.

## Update the CSS classes in template files

This will recursively crawl the root directory for your template files and update any Cacao version 3 classes to the correct version 6 class.

For example, if your templates are in `src/templates` you would run:

```bash
cacao-convert-v3 classes -d src/templates
```

It may also be good to run this on Javascript in case any utility classes were being set.

```bash
cacao-convert-v3 classes -d src/js
```
