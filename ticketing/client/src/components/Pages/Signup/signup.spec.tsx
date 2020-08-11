import { screen, render, fireEvent, act } from '@testing-library/react'

import Signup from '.'

describe('<Signup />', () => {
  it('should render the heading', () => {
    const { container } = render(<Signup />)

    expect(screen.getByRole('heading', { name: /signup/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to change input values', async () => {
    const { getByTestId } = render(<Signup />)

    act(() => {
      fireEvent.change(getByTestId('signup-input-email'), {
        target: { value: 'test@test.com' }
      })
    })

    act(() => {
      fireEvent.change(getByTestId('signup-input-password'), {
        target: { value: 'pass123' }
      })
    })

    const email = getByTestId('signup-input-email') as HTMLInputElement
    const password = getByTestId('signup-input-password') as HTMLInputElement

    expect(email.value).toBe('test@test.com')
    expect(password.value).toBe('pass123')
  })
})
