# Newbly Translation Plugin

## Newbly plugin to automatically insert translations into webpages

This is a JavaScript based plugin that shall be included into any Newbly partner website, and the plugin will insert translations of the main content (article) into the webpage.

The way this works:

On a specific set of websites (e.g. news outlets), the plugin finds texts parts on a website given by an the Newbly translator API, and then compare the texts on the webpage against those supplied by the API, if there is a match, the corresponding translated texts (_or sentence or paragraphs as the case may be_) are appended next to the original texts.

In the end, all paragraphs of an article have the translated version of it underneath.

## How to use

- Run `npm i` to install all dependencies
- When you make modifications, run `npm run build` to create a minified version of the scripts and also, ES5 compatible codes
- All files under the `lib/js/` are ES5 compatible
- Put the link to the script (`lib/js/script.min.js`) on the Newbly partner page.

## Example usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sample website</title>
  </head>

  <body>
    <!-- Link to Newbly Translator script (self-hosted) -->
    <script src="lib/js/script.min.js"></script>

    <!-- Link to Newbly Translator script (CDN) -->
    <script src="https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@1.0.8/lib/js/script.min.js"></script>
  </body>
</html>
```
