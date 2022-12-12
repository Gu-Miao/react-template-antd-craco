import { render, screen } from '@testing-library/react'
import Home from '.'

test('Renders hello react title', () => {
  render(<Home />)
  const linkElement = screen.getByText(/Hello React!!/i)
  expect(linkElement).toBeInTheDocument()
})
