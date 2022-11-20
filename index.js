const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4001
const router = require('./routes/router')
const { connection } = require('./config/connection')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

connection()
  .then(() => {
    app.use(router)
    app.listen(port, () => {
      console.log('Server listening to port', port)
    })
  })
  .catch((err) => {
    console.log(err)
    console.log('Server refused to connect')
  })