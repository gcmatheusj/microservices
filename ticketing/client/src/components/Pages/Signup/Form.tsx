import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Textfield } from 'components/Form'
import Button from 'components/Button'

interface FormValues {
  email: string
  password: string
}

interface Props {
  onSubmit: (values: FormValues) => void
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(4, 'Password must be between 4 and 20 characters')
    .max(20, 'Password must be between 4 and 20 characters')
    .required('Required')
})

const SignupForm: React.FC<Props> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit,
    validationSchema
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
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <span>{formik.errors.email}</span>
          )}
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
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <span>{formik.errors.password}</span>
          )}
        </div>
      </div>
      <Button type="submit">Register</Button>
    </form>
  )
}

export default SignupForm
