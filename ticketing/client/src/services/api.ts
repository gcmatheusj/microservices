import axios from 'axios'

const api = axios.create({
  baseURL: 'http://ticketing.com'
})

export default api
