'use strict'

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000


app.use(express.static('client'))

app.listen(PORT, console.log(`You are listening on port: ${PORT}`))
