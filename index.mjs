import axios from 'axios'
import 'dotenv/config'
import express from 'express'

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hallo!!!')
})

app.get('/users', (req, res) => {
  res.json([
    {
      name: 'John',
      age: 30,
    },
    {
      name: 'Bob',
      age: 40,
    },
  ])
})

app.post('/users', (req, res) => {
  // Hier SQL QUERY z.B.
  res.send('User erstellt')
})

app.delete('/users/:id', (req, res) => {
  console.log(req.params.id)
  // Hier SQL QUERY z.B.
  res.status(202).send(`User mit ID ${req.params.id} gelöscht`)
})

app.get('/query', (req, res) => {
  console.log(req.query)
  res.send(`Hallo ${req.query.firstName}`)
})

app.get('/body', (req, res) => {
  console.log(req.body)
  res.send(`Hallo ${req.body.firstName}`)
})

app.get('/posts', (req, res) => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => res.send(response.data))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
