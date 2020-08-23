import { useFormik } from 'formik'

import { Textfield } from 'components/Form'
import Button from 'components/Button'

interface FormValues {
  email: string
  password: string
}

interface Props {
  onSubmit: (values: FormValues) => void
}

const SignupForm: React.FC<Props> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit
  })

  return (
    <form data-testid="signup-form" onSubmit={formik.handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Textfield
            id="email"
            data-testid="signup-input-email"
            label="Email"
            name="email"
            type="email"
            placeholder="Type your email"
            value={formik.values.email}
            onChange={formik.handleChange}
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
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <Button type="submit">Register</Button>
    </form>
  )
}

export default SignupForm
