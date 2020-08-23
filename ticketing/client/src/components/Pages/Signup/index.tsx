import { useCallback } from 'react'

import Form from './Form'

const Signup: React.FC = () => {
  const onSubmit = useCallback((values) => {
    console.log(values)
  }, [])

  return <Form onSubmit={onSubmit} />
}

export default Signup
