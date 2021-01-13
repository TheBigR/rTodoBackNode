const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3001, () => {
  console.log('listening on port 3001')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.post('/tasks', (req, res) => {
  console.log(req.body)
})
