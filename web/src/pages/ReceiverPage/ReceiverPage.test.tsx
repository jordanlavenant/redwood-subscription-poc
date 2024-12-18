import { render } from '@redwoodjs/testing/web'

import ReceiverPage from './ReceiverPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReceiverPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReceiverPage />)
    }).not.toThrow()
  })
})
