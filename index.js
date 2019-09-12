const express = require("express")
const bearerWebhooks = require("@bearer/express").default
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const EncryptionKey = process.env.BEARER_ENCRYPTION_KEY
const BUID_OR_ALIAS = process.env.BEARER_BUID_OR_ALIAS

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const webhookHandlers = {
  [BUID_OR_ALIAS]: req =>
    new Promise((resolve, _reject) => {
      // you logic goes here
      console.log(req.body)
      resolve()
    })
}

const logRequest = (req, _res, next) => {
  // console.log(req.headers)
  // console.log(req.body)

  next()
}

app.use(
  "/bearer/webhooks",
  logRequest,
  bearerWebhooks(webhookHandlers, { token: EncryptionKey })
)
app.get("/", (req, res) => res.send("Hello World!"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
