import { Textfield } from 'components/Form'
import Button from 'components/Button'

const Signup: React.FC = () => {
  return (
    <form>
      <h1>Signup</h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Textfield
            id="email"
            label="Email"
            name="email"
            type="email"
            placeholder="Type your email"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Textfield
            id="password"
            label="Password"
            name="password"
            type="password"
            placeholder="Type your password"
          />
        </div>
      </div>

      <Button type="submit">Register</Button>
    </form>
  )
}

export default Signup
