const cheerio = require('cheerio')
const fs = require('fs')
const express = require('express')
const html = fs.readFileSync('./index.html', { encoding: 'utf-8' })
const app = express()

app.get('/', (req, res) => {
  // here we are getting the html from a file,
  // but more likely you will use fetch to get the
  // html from a service
  // ie:
  // const $ = cheerio.load(await fetch(url).then(res => res.text()))
  const $ = cheerio.load(html)
  // remove elements from html
  $(
    'link[href="https://apidev.meducation.com/Styles/Fontsize/Fontextralarge.css"]'
  ).remove()

  // add elements to html
  $(
    '<meta name="viewport" content="width=device-width;initialScale=1" />'
  ).appendTo('head')

  $(`<style>
      body {
        padding: 48px;
      }
      #content {
        font-size: 4em; !important;
      }

      .Important {
        font-size: .7em;
      }
    </style>`).appendTo('head')
  // create new html doc and send to caller
  res.send($.html())
})

module.exports = app

if (!module.parent) {
  app.listen(3000)
}
