import expres from 'express';
import { json } from 'body-parser';

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

app.listen(3000, () => console.log('Listening on 3000'))