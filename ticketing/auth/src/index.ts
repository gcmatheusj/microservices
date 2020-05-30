import expres from 'express';
import { json } from 'body-parser';

const app = expres()
app.use(json())

app.get('/api/users/currentuser', (req, res) => {
  return res.send('Olá')
})

app.listen(3000, () => console.log('Listening on 3000'))