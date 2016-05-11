// import some new stuff
import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import routes from '.src/routes'


var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

// serve our static stuff like index.css
app.use(compression())
app.use(express.static(path.join(__dirname,'web')))

app.get('*', (req, res) => {
  // match the routes to the url
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is the what `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.

    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
  <!DOCTYPE html public="storage">
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
    <title>Baram</title>
    <!-- HEAD_SCRIPT -->
    <!-- HEAD_STYLE -->
    <link rel="stylesheet" type="text/css" href="/modules/semantic-ui/semantic.min.css"/>
    <link rel="stylesheet" type="text/css" href="/static/init.css"/>
  </head>
  <body>
    <div id="content">${appHtml}</div>
    <script type="text/javascript" src="/bundle.js"></script>
  </body>
  </html>
  `
}

/*
// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'))
})
*/

var PORT = process.env.PORT || 5000
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})