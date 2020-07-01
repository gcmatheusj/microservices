import expres from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose'

import routes from './routes'
import errorHandler from './middlewares/error-handler'
import NotFoundError from './errors/not-found-error'

const app = expres()
app.use(json())
app.use(routes)

app.all('*', () => {
  throw new NotFoundError()
})

app.use(errorHandler)

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-service:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  } catch (error) {
    console.error(error)
  }
  app.listen(3000, () => console.log('Listening on 3000'))
}

start()
