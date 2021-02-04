const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

const connectionString =
  'mongodb+srv://rTodoUser:Tolik1984@royn.7svan.mongodb.net/tasks2?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to Database')
    const db = client.db('tasks2')
    const tasksCollection = db.collection('tasks')
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))
    app.get('/', (req, res) => {
      db.collection('tasks')
        .find()
        .toArray()
        .then((results) => {
          res.render('index.ejs', { tasks: results })
        })
        .catch((error) => console.error(error))
    })
    app.post('/tasks', (req, res) => {
      tasksCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect('/')
        })
        .catch((error) => console.error(error))
    })
    app.put('/tasks', (req, res) => {
      tasksCollection
        .findOneAndUpdate(
          { name: 'crap' },
          {
            $set: {
              name: req.body.name,
              task: req.body.task,
            },
          },
          {
            upsert: true,
          },
        )
        .then((res) => {
          if (res.ok) return res.json()
        })
        .then((response) => {
          window.location.reload(true)
        })
        .catch((error) => console.error(error))
    })
    app.delete('/tasks')
    app.listen(3001, () => {
      console.log('listening on port 3001')
    })
  })
  .catch((error) => console.error(error))
