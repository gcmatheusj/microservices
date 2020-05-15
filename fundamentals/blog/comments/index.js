const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const commentsByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
  return res.send(commentsByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex')
  const { content } = req.body
  const { id: postId } = req.params
  
  const comments = commentsByPostId[postId] || []

  comments.push({ id: commentId, content, status: 'pending' })

  commentsByPostId[postId] = comments

  await axios.post('http://localhost:4005/events', {
    type: 'CommentCreated',
    data: { 
      id: commentId, 
      content,
      status: 'pending',
      postId
    }
  })

  return res.status(201).send(comments)
})

app.post('/events', async (req, res) => {
  const { type, data } = req.body

  if (type === 'CommentModerated') {
    console.log(data)
    const { id, postId, status, content } = data

    const comments = commentsByPostId[postId]

    const comment = comments.find(comment => comment.id === id);
    comment.status = status

    await axios.post('http://localhost:4005/events', {
      type: 'CommentUpdated', 
      data: {
        id, 
        postId, 
        status, 
        content 
      }
    })
  }

  return res.send({})
})

app.listen(4001, () => console.log('Listening on 4001'))