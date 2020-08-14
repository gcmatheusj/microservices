import { useCallback } from 'react'

import Form from './Form'

const Signup: React.FC = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault()
  }, [])

  return <Form handleSubmit={handleSubmit} />
}

export default Signup
