# Newbly Translation Plugin

## Newbly plugin to automatically insert translations into webpages

This is a JavaScript based plugin that shall be included into any Newbly partner website, and the plugin will insert translations of the main content (article) into the webpage.

The way this works:

On a specific set of websites (e.g. news outlets), the plugin finds texts parts on a website given by an the Newbly translator API, and then compare the texts on the webpage against those supplied by the API, if there is a match, the corresponding translated texts (_or sentence or paragraphs as the case may be_) are appended next to the original texts.

In the end, all paragraphs of an article have the translated version of it underneath.

## How to use

- Put the link to the script (`/js/script.min.js`) on the Newbly partner page.
- Supply the `newblyBackendAPI` with the accurate API URL, example: `"https://api.newb.ly/articles/gVe8WHhm?language=english&country=austria&fbclid=IwAR3IA_dgK8W_kakCh44PUJv3lMajeJWYqIotGcSdlSMFnFRKGS3yeceZp3o"`
