const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

const connectionString =
  'mongodb+srv://rTodoUser:Tolik1984@royn.7svan.mongodb.net/tasks2?retryWrites=true&w=majority'

MongoClient.connect(
  connectionString,
  {
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  },
)

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
