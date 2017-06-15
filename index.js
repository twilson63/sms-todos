process.env.NODE_ENV !== 'production' && require('dotenv').config()

const { split, path } = require('ramda')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handle = require('./cmds')
const sendSMS = require('./lib/sms')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send({ ok: true })
})

app.post('/sms', async (req, res) => {
  const [cmd, ...rest] = split(' ', path(['body', 'Body'], req))
  const body = await handle(req.body.From, cmd, rest)
  sendSMS({
    to: req.body.From,
    from: req.body.To,
    body
  })

  res.send({ ok: true })
})

app.listen(3000)
