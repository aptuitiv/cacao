# Base

Base styles for web applications. Styles are built upon
[Normalize.css](https://github.com/necolas/normalize.css).

Creates a "layer" of base element styles. If these styles are spread across
modules other than this one, things can get unpredictable. Lots of styles are
based on those found in Reboot / Bootstrap v4 with some other more or less
opinionated changes.

Basic visual tests can be found in `test/pages/base.html`.

**Note:** A base font-size: 62.5% is declared on the `<html>` for intuitiv 
`rem` conversion to and from pixels.
