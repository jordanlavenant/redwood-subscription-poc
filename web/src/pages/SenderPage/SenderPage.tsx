import { useState } from 'react'

import { useMutation, gql } from '@apollo/client'

import { Metadata } from '@redwoodjs/web'

const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessageToRoom($input: SendMessageInput!) {
    sendMessage(input: $input) {
      body
      from
    }
  }
`

const SenderPage = () => {
  const [message, setMessage] = useState('')
  const [sendMessage] = useMutation(SEND_MESSAGE_MUTATION)

  const handleSendMessage = () => {
    sendMessage({
      variables: {
        input: {
          roomId: '1',
          from: 'User',
          body: message,
        },
      },
    })
    setMessage('')
  }

  return (
    <>
      <Metadata title="Sender" description="Sender page" />
      <h1>SenderPage</h1>
      <p>
        Find me in <code>./web/src/pages/SenderPage/SenderPage.tsx</code>
      </p>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send Message</button>
      </div>
    </>
  )
}

export default SenderPage
