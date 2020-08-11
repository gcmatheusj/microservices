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

    expect(getByTestId('signup-input-email').value).toBe('test@test.com')
    expect(getByTestId('signup-input-password').value).toBe('pass123')
  })
})
