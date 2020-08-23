import { useCallback } from 'react'
import api from 'services/api'

import Form from './Form'

const Signup: React.FC = () => {
  const onSubmit = useCallback(async (values) => {
    const response = await api.post('/api/users/signup', values)

    console.log(response.data)
  }, [])

  return <Form onSubmit={onSubmit} />
}

export default Signup
