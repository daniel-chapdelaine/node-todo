'use strict'

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000


app.use(express.static('client'))

app.get('/api/title', (req, res) => {
	res.json({title: "ToDo List!"})
})

app.listen(PORT, console.log(`You are listening on port: ${PORT}`))
