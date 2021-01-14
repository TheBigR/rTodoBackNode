const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

const connectionString =
  'mongodb+srv://rTodoUser:Tolik1984@royn.7svan.mongodb.net/tasks2?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to Database')
  })
  .catch((error) => console.error(error))

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
