# HTML Transformer

This project uses cheerio to modify the html document, by removing a specific link element and adding a style element.

You can use cheerio like a server-side jquery, to parse and modify
html documents.

## How to install cheerio

```
npm install cheerio
```

## How to use cheerio

```js
const $ = cheerio.load(html)
// do stuff
res.send($.html())
```

---

## Run the example

```
npm install
npm start
```

---

### Use cases

Say that you have a service that does not offer configurable support for mobile devices.

You can add the meta tag for mobile device support.
