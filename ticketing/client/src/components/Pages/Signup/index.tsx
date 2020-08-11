import { useState } from 'react'

import { Textfield } from 'components/Form'
import Button from 'components/Button'

const Signup: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form>
      <h1>Signup</h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Textfield
            id="email"
            data-testid="signup-input-email"
            label="Email"
            name="email"
            type="email"
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Textfield
            id="password"
            data-testid="signup-input-password"
            label="Password"
            name="password"
            type="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <Button type="submit">Register</Button>
    </form>
  )
}

export default Signup
