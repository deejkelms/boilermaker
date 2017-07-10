const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, './public/assets')))

// Any routes or other various middlewares should go here!
app.use('/api', require('./controllers'))

app.listen(3000, function () {
  console.log('Knock, knock')
  console.log('Who\'s there?')
  console.log('Your server, listening on port 3000')
})

// 404
app.use(function (req, res, next) {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that go would before this as well)
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, './index.html'))
})

// 500
app.use(function (err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
