import { useCallback } from 'react'
import { useRouter } from 'next/router'

import api from 'services/api'

import Form from './Form'

const Signup: React.FC = () => {
  const router = useRouter()

  const onSubmit = useCallback(
    async (values) => {
      try {
        await api.post('/api/users/signup', values)

        router.push('/')
      } catch (error) {
        console.log(error.response.data.errors)
      }
    },
    [router]
  )

  return <Form onSubmit={onSubmit} />
}

export default Signup
