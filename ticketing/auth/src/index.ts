import expres from 'express';
import { json } from 'body-parser';

import routes from './routes'

const app = expres()
app.use(json())
app.use(routes)


app.listen(3000, () => console.log('Listening on 3000'))