const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const events = []

app.post('/events', (req, res) => {
  const event = req.body

  events.push(event)

  axios.post('http://posts-clusterip-service:4000/events', event)
  // axios.post('http://localhost:4001/events', event)
  // axios.post('http://localhost:4002/events', event)
  // axios.post('http://localhost:4003/events', event)

  return res.send({ status: 'OK' })
})

app.get('/events', (req, res) => {
  return res.send(events)
})

app.listen(4005, () => console.log('Listening on 4005'))