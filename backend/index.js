const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 8080

const db = require('./db/postgres')

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/tasks', db.getTasks);
app.get('/tasks/:id', db.getTaskById);
app.post('/tasks', db.createTask);
app.put('/tasks/:id', db.updateTask);
app.delete('/tasks/:id', db.deleteTask);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});