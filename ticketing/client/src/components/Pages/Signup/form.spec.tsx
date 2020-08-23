import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import Form from './Form'

const mockHandleSubmit = jest.fn()

describe('<Signup />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Form onSubmit={mockHandleSubmit} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to change input values', async () => {
    const { getByTestId } = render(<Form onSubmit={mockHandleSubmit} />)

    await waitFor(() => {
      fireEvent.change(getByTestId('signup-input-email'), {
        target: { value: 'test@test.com' }
      })
      fireEvent.change(getByTestId('signup-input-password'), {
        target: { value: 'pass123' }
      })
    })

    const email = getByTestId('signup-input-email') as HTMLInputElement
    const password = getByTestId('signup-input-password') as HTMLInputElement

    expect(email.value).toBe('test@test.com')
    expect(password.value).toBe('pass123')
  })

  it('should be able to submit form', async () => {
    const { getByTestId } = render(<Form onSubmit={mockHandleSubmit} />)

    await waitFor(() => {
      fireEvent.change(getByTestId('signup-input-email'), {
        target: { value: 'test@test.com' }
      })
      fireEvent.change(getByTestId('signup-input-password'), {
        target: { value: 'pass123' }
      })
    })

    await waitFor(() => {
      fireEvent.submit(getByTestId('signup-form'))
    })

    expect(mockHandleSubmit).toHaveBeenCalled()
  })
})
