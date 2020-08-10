import { screen, render } from '@testing-library/react'

import Signup from '.'

describe('<Signup />', () => {
  it('should render the heading', () => {
    const { container } = render(<Signup />)

    expect(screen.getByRole('heading', { name: /signup/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
