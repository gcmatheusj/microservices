import { Textfield } from '@components/Form'
import Button from '@components/Button'

const Signup: React.FC = () => {
  return (
    <form>
      <h1>Signup</h1>
      <Textfield name="email" type="email" placeholder="Type your email" />
      <Textfield
        name="password"
        type="password"
        placeholder="Type your password"
      />
      <Button type="submit">Register</Button>
    </form>
  )
}

export default Signup
