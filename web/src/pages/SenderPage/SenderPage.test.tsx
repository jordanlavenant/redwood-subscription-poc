import { render } from '@redwoodjs/testing/web'

import SenderPage from './SenderPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SenderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SenderPage />)
    }).not.toThrow()
  })
})
